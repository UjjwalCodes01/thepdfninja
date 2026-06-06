# ThePDFNinja — Coding Agent Deployment Guide

> **For the agent reading this:** Follow these steps in order. Do not skip steps. Do not rename resources. If a step fails, stop and surface the error verbatim. Every command below is intended to be run from the project root unless stated otherwise.

---

## 0. What you are building

A serverless + EC2 hybrid backend on AWS that powers 23 file conversion tools (PDF merge/split/compress, Word↔PDF, Excel↔PDF, PPT↔PDF, OCR, etc.). All resources are prefixed `pdfninja-`, deployed to `us-east-1`, tagged `project=pdfninja/env=prod/managed_by=terraform`.

**Architecture summary:**
- API Gateway → Lambda (easy tools, sync) OR Lambda → SQS → EC2 t3.micro (heavy tools, async)
- S3 holds all files with 1-day lifecycle expiration (privacy + cost)
- DynamoDB tracks heavy job status
- AWS Textract handles OCR
- Cost: ~$9/month — covered by $200 AWS credits for ~22 months

---

## 1. Prerequisites checklist

Before doing anything, confirm these are present on the host machine. If any are missing, install them and continue.

| Tool | Verify | Install |
|---|---|---|
| AWS CLI v2 | `aws --version` | https://aws.amazon.com/cli/ |
| Terraform ≥ 1.5 | `terraform version` | https://developer.hashicorp.com/terraform/install |
| Docker | `docker --version` | https://docs.docker.com/get-docker/ |
| Python 3.11 | `python3.11 --version` | https://www.python.org/downloads/ |
| zip / unzip | `zip --version` | `apt-get install zip unzip` |
| ssh client | `ssh -V` | usually present |

---

## 2. Configure AWS credentials

The user has provided IAM admin credentials. Configure them:

```bash
aws configure
# AWS Access Key ID: <paste>
# AWS Secret Access Key: <paste>
# Default region: us-east-1
# Default output format: json

# Verify
aws sts get-caller-identity
```

Expected output:
```json
{
  "UserId": "AIDA...",
  "Account": "123456789012",
  "Arn": "arn:aws:iam::123456789012:user/<your-user>"
}
```

If this fails, stop and surface the error.

---

## 3. Create EC2 key pair (one-time)

The EC2 worker needs an SSH key. Create one in AWS console OR via CLI:

```bash
aws ec2 create-key-pair \
    --key-name pdfninja-key \
    --query 'KeyMaterial' \
    --output text > ~/.ssh/pdfninja-key.pem

chmod 400 ~/.ssh/pdfninja-key.pem
```

---

## 4. Lock down SSH access (recommended but optional)

Edit `terraform/ec2.tf`. Find this:

```hcl
variable "ssh_allowed_cidr" {
  default = "0.0.0.0/0"
}
```

Change `0.0.0.0/0` to your IP — get it from `curl ifconfig.me` and append `/32`. Example: `"203.0.113.45/32"`. Leaving it open works but is less secure.

---

## 5. Build the Lambda layer

The Lambda layer contains all heavy dependencies (Ghostscript, qpdf, poppler, wkhtmltopdf, and Python libs like pypdf/reportlab/Pillow/pdf2image). Built using Docker to match the Lambda Linux environment.

```bash
bash scripts/build_layer.sh
```

This produces `lambda/layer.zip` (~80-150 MB). Verify:

```bash
ls -lh lambda/layer.zip
```

If the script fails on binary downloads, the fallback is to skip those URLs and the binaries `ghostscript`, `qpdf`, `poppler-utils`, `wkhtmltopdf` will need to be added via a different layer. For the MVP, the Python libs alone (no binaries) will support these tools: merge, split, rotate, watermark, protect, unlock, organize, page-numbers, crop, jpg-to-pdf. The tools needing binaries (compress, repair, pdf-to-jpg, html-to-pdf) will fail until the layer is fixed.

---

## 6. Deploy infrastructure with Terraform

```bash
cd terraform

# Initialize Terraform (downloads AWS provider)
terraform init

# Preview changes
terraform plan

# Apply (creates 30+ AWS resources)
terraform apply
# Type 'yes' when prompted
```

Apply takes ~3-5 minutes. EC2 will take an additional 5-10 minutes to fully bootstrap (LibreOffice install).

**Save the outputs.** They print at the end of `apply`. Example:

```
api_url        = "https://abc123xyz.execute-api.us-east-1.amazonaws.com/prod"
bucket_name    = "pdfninja-files-123456789012"
ec2_public_ip  = "54.x.x.x"
ec2_ssh        = "ssh -i pdfninja-key.pem ubuntu@54.x.x.x"
queue_url      = "https://sqs.us-east-1.amazonaws.com/.../pdfninja-heavy-jobs"
jobs_table     = "pdfninja-jobs"
```

Re-print them anytime: `terraform output`.

---

## 7. Deploy EC2 worker code

The EC2 instance is now running but its `worker.py` is empty (bootstrap script tried to pull from S3 before code was uploaded). Push it now:

```bash
cd ..  # back to project root
bash scripts/deploy_ec2.sh
```

This:
1. Uploads `ec2/worker.py` and `ec2/converters/` to S3
2. SSHes into the EC2 instance
3. Pulls the latest code
4. Restarts the systemd service

**Verify the worker is running:**

```bash
EC2_IP=$(cd terraform && terraform output -raw ec2_public_ip)
ssh -i ~/.ssh/pdfninja-key.pem ubuntu@$EC2_IP "sudo systemctl status pdfninja --no-pager"
```

You should see `active (running)`. If it shows `failed`, check logs:

```bash
ssh -i ~/.ssh/pdfninja-key.pem ubuntu@$EC2_IP "sudo journalctl -u pdfninja -n 50 --no-pager"
```

---

## 8. End-to-end smoke test

### Test 1 — Easy tool (Merge PDF, sync, returns immediately)

```bash
API=$(cd terraform && terraform output -raw api_url)

# 8.1 Get an upload URL for the first PDF
RESP1=$(curl -s -X POST "$API/v1/upload" \
    -H "Content-Type: application/json" \
    -d '{"filename":"a.pdf","content_type":"application/pdf"}')
echo "$RESP1"
UPLOAD_URL1=$(echo "$RESP1" | jq -r .upload_url)
KEY1=$(echo "$RESP1" | jq -r .file_key)

# 8.2 Get an upload URL for the second PDF
RESP2=$(curl -s -X POST "$API/v1/upload" \
    -H "Content-Type: application/json" \
    -d '{"filename":"b.pdf","content_type":"application/pdf"}')
UPLOAD_URL2=$(echo "$RESP2" | jq -r .upload_url)
KEY2=$(echo "$RESP2" | jq -r .file_key)

# 8.3 Upload two sample PDFs (use any PDFs you have)
curl -X PUT --data-binary @/path/to/a.pdf -H "Content-Type: application/pdf" "$UPLOAD_URL1"
curl -X PUT --data-binary @/path/to/b.pdf -H "Content-Type: application/pdf" "$UPLOAD_URL2"

# 8.4 Call merge tool
curl -X POST "$API/v1/tools/merge" \
    -H "Content-Type: application/json" \
    -d "{\"file_keys\":[\"$KEY1\",\"$KEY2\"]}"

# Response includes a download_url. Open it to verify the merged PDF.
```

### Test 2 — Heavy tool (Word → PDF, async, poll for result)

```bash
# 8.5 Upload a .docx to heavy-inputs/
RESP=$(curl -s -X POST "$API/v1/upload" \
    -H "Content-Type: application/json" \
    -d '{"filename":"doc.docx","content_type":"application/vnd.openxmlformats-officedocument.wordprocessingml.document","prefix":"heavy-inputs"}')
UPLOAD_URL=$(echo "$RESP" | jq -r .upload_url)
KEY=$(echo "$RESP" | jq -r .file_key)

curl -X PUT --data-binary @/path/to/doc.docx \
    -H "Content-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document" \
    "$UPLOAD_URL"

# 8.6 Create a job
JOB_RESP=$(curl -s -X POST "$API/v1/jobs/word-to-pdf" \
    -H "Content-Type: application/json" \
    -d "{\"file_key\":\"$KEY\"}")
JOB_ID=$(echo "$JOB_RESP" | jq -r .job_id)
echo "Job: $JOB_ID"

# 8.7 Poll status (usually completes in 10-30 sec)
for i in 1 2 3 4 5 6 7 8 9 10; do
    sleep 5
    STATUS=$(curl -s "$API/v1/jobs/status/$JOB_ID")
    echo "$STATUS"
    if [[ $(echo "$STATUS" | jq -r .status) == "complete" ]]; then
        break
    fi
done
```

### Test 3 — OCR

```bash
# Upload a scanned PDF or image
RESP=$(curl -s -X POST "$API/v1/upload" \
    -H "Content-Type: application/json" \
    -d '{"filename":"scan.pdf","content_type":"application/pdf"}')
KEY=$(echo "$RESP" | jq -r .file_key)
curl -X PUT --data-binary @/path/to/scan.pdf -H "Content-Type: application/pdf" \
    "$(echo "$RESP" | jq -r .upload_url)"

curl -X POST "$API/v1/ocr" \
    -H "Content-Type: application/json" \
    -d "{\"file_key\":\"$KEY\"}"
```

---

## 9. Common problems and fixes

| Problem | Cause | Fix |
|---|---|---|
| `terraform apply` fails: "archive_file" can't find source | Lambda code dirs don't exist | Make sure you ran from project root and `lambda/easy_tools/`, `lambda/ocr/` exist with files |
| EC2 worker shows "failed" in systemctl | Bootstrap ran before code was uploaded to S3 | Run `bash scripts/deploy_ec2.sh` — this uploads code and restarts |
| Heavy job stuck in "queued" forever | EC2 worker not running | `ssh` to EC2, check `sudo systemctl status pdfninja`, restart if needed |
| Lambda timeout on compress/html-to-pdf | Binary missing from layer | Rebuild layer with `bash scripts/build_layer.sh`, then update Lambda: `cd terraform && terraform apply` |
| S3 upload returns 403 from presigned URL | Wrong content-type | Match Content-Type header exactly with what you specified in `/v1/upload` |
| OCR returns "Textract failed" | File > 5 MB for sync, > 500 MB for async, or unsupported format | Convert/compress first, then OCR |
| `apply` errors on EC2 user_data because the templatefile path is wrong | You ran terraform from outside the `terraform/` dir | `cd terraform` first |
| Service times out on Lambda layer upload (zip too big) | Layer > 250 MB unzipped | Split into multiple layers, or move heavy tools to EC2 |

---

## 10. Updating code without re-applying everything

**To update a Lambda function** (e.g. you fixed a bug in `handler.py`):

```bash
cd terraform
terraform apply -target=aws_lambda_function.easy_tools
```

Terraform detects the source hash changed and redeploys just that Lambda.

**To update EC2 worker code:**

```bash
bash scripts/deploy_ec2.sh
```

No Terraform run needed — the script SSHes in and refreshes from S3.

**To add a new tool:**

1. **Easy tool:** add a function in `lambda/easy_tools/tools.py`, register it in `TOOL_MAP` inside `handler.py`, then `terraform apply -target=aws_lambda_function.easy_tools`.
2. **Heavy tool:** add a module in `ec2/converters/`, register it in `TOOL_HANDLERS` inside `worker.py` AND `HEAVY_TOOLS` set inside `lambda/easy_tools/job_creator.py`, then `terraform apply -target=aws_lambda_function.job_creator && bash scripts/deploy_ec2.sh`.

---

## 11. Tear down (when you're done testing or want to start fresh)

```bash
cd terraform
terraform destroy
# Type 'yes' when prompted
```

This deletes every resource. The S3 bucket has `force_destroy = true` so it deletes even if files remain. Total time: ~2-3 minutes.

---

## 12. What to surface back to the user after deploy

After a successful deploy, surface this summary to the user:

```
✅ ThePDFNinja deployed successfully

API Base URL:       <api_url>
S3 Bucket:          <bucket_name>
EC2 Worker IP:      <ec2_public_ip>
DynamoDB Table:     <jobs_table>

23 tools available:
  Easy (sync, /v1/tools/<tool>):
    merge, split, compress, rotate, watermark, protect, unlock,
    organize, page-numbers, repair, crop, jpg-to-pdf, pdf-to-jpg,
    html-to-pdf

  Heavy (async, /v1/jobs/<tool> + /v1/jobs/status/<id>):
    word-to-pdf, ppt-to-pdf, excel-to-pdf, pdf-to-word, pdf-to-ppt,
    pdf-to-excel, scan-to-pdf, pdf-to-pdfa

  OCR (sync, /v1/ocr):
    Works on scanned PDFs and images (JPG/PNG/TIFF)

See docs/API.md for endpoint details.
```

---

## 13. Cost monitoring

Check spend daily during early traffic:

```bash
aws ce get-cost-and-usage \
    --time-period Start=$(date -u -d '7 days ago' +%Y-%m-%d),End=$(date -u +%Y-%m-%d) \
    --granularity DAILY \
    --metrics UnblendedCost \
    --filter '{"Tags":{"Key":"project","Values":["pdfninja"]}}'
```

If daily cost > $1 unexpectedly, the most likely culprits are: EC2 running larger than t3.micro, S3 lifecycle disabled (files piling up), or Textract being called on huge PDFs. Investigate before adding traffic.

---

## End of guide

Stop here. If the user asks for changes, do them; otherwise the deployment is done.
