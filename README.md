# ThePDFNinja — Backend

Serverless + EC2 hybrid AWS backend powering 23 file conversion tools (PDF, Office, OCR).

## Quick start

```bash
# 1. Configure AWS
aws configure

# 2. Create EC2 key pair
aws ec2 create-key-pair --key-name pdfninja-key \
    --query 'KeyMaterial' --output text > ~/.ssh/pdfninja-key.pem
chmod 400 ~/.ssh/pdfninja-key.pem

# 3. Build Lambda layer
bash scripts/build_layer.sh

# 4. Deploy infra
cd terraform && terraform init && terraform apply

# 5. Deploy EC2 worker code
cd .. && bash scripts/deploy_ec2.sh

# Done. Get API URL: cd terraform && terraform output api_url
```

## Project structure

```
pdfninja/
├── terraform/             # All AWS infra as code
│   ├── main.tf            # Provider + variables
│   ├── s3.tf              # File storage bucket + lifecycle
│   ├── dynamodb.tf        # Job status table
│   ├── sqs.tf             # Heavy jobs queue + DLQ
│   ├── iam.tf             # Lambda + EC2 roles
│   ├── lambda.tf          # All Lambda functions + layer
│   ├── ec2.tf             # t3.micro worker + EIP + SG
│   ├── api_gateway.tf     # REST API + routes
│   └── outputs.tf         # Printed after apply
│
├── lambda/
│   ├── easy_tools/        # 14 sync PDF tools
│   │   ├── handler.py     # Router for all tools
│   │   ├── tools.py       # Implementations
│   │   ├── upload_url.py  # Presigned URL generator
│   │   ├── job_creator.py # Queues heavy jobs
│   │   ├── job_status.py  # Status poller
│   │   └── requirements.txt
│   └── ocr/
│       └── handler.py     # Textract integration
│
├── ec2/
│   ├── setup.sh           # Bootstrap (LibreOffice + systemd)
│   ├── worker.py          # SQS poller
│   └── converters/        # 8 heavy converters
│
├── scripts/
│   ├── build_layer.sh     # Build Lambda layer with binaries
│   └── deploy_ec2.sh      # Sync EC2 worker code from local → S3 → EC2
│
└── docs/
    ├── AGENT.md           # Full deployment guide for coding agent
    └── API.md             # Endpoint reference
```

## Tools available

**14 Easy tools (Lambda, sync, < 60s):**
merge, split, compress, rotate, watermark, protect, unlock, organize, page-numbers, repair, crop, jpg-to-pdf, pdf-to-jpg, html-to-pdf

**8 Heavy tools (EC2 + LibreOffice, async, 5-60s):**
word-to-pdf, ppt-to-pdf, excel-to-pdf, pdf-to-word, pdf-to-ppt, pdf-to-excel, scan-to-pdf, pdf-to-pdfa

**1 OCR tool (AWS Textract):**
ocr (works on PDFs and images)

## Cost

| Service | Monthly |
|---|---|
| EC2 t3.micro | ~$8.50 |
| Everything else (Lambda, S3, API GW, SQS, DynamoDB, Textract) | ~$0.50 (free tier) |
| **Total** | **~$9/mo** |

On $200 AWS credits = ~22 months runway.

## Read next

- **docs/AGENT.md** — step-by-step deployment guide
- **docs/API.md** — every endpoint documented
