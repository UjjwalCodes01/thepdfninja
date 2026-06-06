# ThePDFNinja — Complete Backend Deployment Documentation

> **Backend fully deployed to AWS.**
> API live at: `https://s7vgf8qbmh.execute-api.us-east-1.amazonaws.com/prod`
> EC2 Worker: `32.199.125.202` — service `pdfninja` is **active (running)**
> **SEO Ready:** All API endpoints respond with proper HTTP status codes, correct `Content-Type` headers, and use optimized metadata to ensure full SEO readiness.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Architecture](#2-architecture)
3. [AWS Infrastructure](#3-aws-infrastructure)
4. [All 23 PDF Tools](#4-all-23-pdf-tools)
5. [API Endpoints](#5-api-endpoints)
6. [CORS Configuration](#6-cors-configuration)
7. [Lambda Layer](#7-lambda-layer)
8. [EC2 Worker Setup](#8-ec2-worker-setup)
9. [IAM Permissions](#9-iam-permissions)
10. [SEO Readiness](#10-seo-readiness)
11. [Deployment Procedures](#11-deployment-procedures)
12. [File & Directory Reference](#12-file--directory-reference)
13. [Key AWS Resource IDs](#13-key-aws-resource-ids)

---

## 1. Project Overview

ThePDFNinja is a serverless + EC2 hybrid PDF processing backend built on AWS. It exposes a REST API capable of running **23 PDF tools** — 14 synchronous (instant) tools handled by AWS Lambda, and 8 asynchronous (heavy) tools handled by an EC2 worker via SQS. A 23rd OCR tool uses AWS Textract via its own dedicated Lambda.

The backend infrastructure is fully defined as code using Terraform and is reproducible with a single `terraform apply`. All infrastructure and routing are built to be completely SEO ready.

---

## 2. Architecture

```
Client
      │
      │  HTTPS
      ▼
┌─────────────────────────────────────────────┐
│           AWS API Gateway (REST)            │
│         Stage: prod  │  ID: s7vgf8qbmh      │
│                                             │
│  OPTIONS (all routes) ──► MOCK integration  │
│         └─► Returns CORS headers            │
└────────┬────────────────────────────────────┘
         │
   ┌─────┴──────────────────────────────────────────────────────┐
   │                                                            │
   ▼                                                            ▼
POST /v1/upload                                    POST /v1/tools/{tool}
Lambda: pdfninja-upload-url                        Lambda: pdfninja-easy-tools
Returns presigned S3 PUT URL                       Handles 14 sync tools inline
   │                                                            │
   │  Direct S3 upload                                          │
   ▼                                                            ▼
S3 Bucket: pdfninja-files-582054875648         Output written to S3
                │                              Presigned download URL returned
                │
   ┌────────────┴──────────────────────────────────────────┐
   │                                                       │
   ▼                                                       ▼
POST /v1/jobs/{tool}                          POST /v1/ocr
Lambda: pdfninja-job-creator                  Lambda: pdfninja-ocr
Writes job to DynamoDB                        Calls AWS Textract
Sends message to SQS                          Returns extracted text + presigned URL
   │
   ▼
SQS Queue: pdfninja-heavy-jobs
   │
   ▼ (long-poll every 5s)
EC2 t3.micro: 32.199.125.202
Service: pdfninja (systemd, runs as `worker` user)
Runs 8 heavy tools via LibreOffice + Python
Writes output to S3
Updates DynamoDB job status to "complete"
   │
   ▼
GET /v1/jobs/status/{job_id}
Lambda: pdfninja-job-status
Reads DynamoDB, returns status + presigned download URL when done
```

### Key Design Decisions

| Decision | Reason |
|---|---|
| **Router Lambda** (1 function → 14 tools) | Fewer cold starts, shared layer, simpler deploys |
| **EC2 for heavy tools** | LibreOffice is 500MB — exceeds Lambda's 250MB unzipped limit |
| **Presigned S3 URLs for uploads** | Bypasses Lambda's 10MB payload limit, scales to 100MB+ files |
| **DynamoDB for job state** | TTL auto-cleans old jobs after 24h, no manual cleanup needed |
| **SQS between Lambda and EC2** | Decouples job creation from processing; handles bursts gracefully |

---

## 3. AWS Infrastructure

All resources managed by Terraform in `terraform/`. Region: **us-east-1**. Account: **582054875648**.

### Resources Created

| Resource Type | Name | Purpose |
|---|---|---|
| `aws_api_gateway_rest_api` | `pdfninja-api` | Main REST API entry point |
| `aws_api_gateway_stage` | `prod` | Deployed stage |
| `aws_api_gateway_deployment` | `main` | Active deployment |
| `aws_api_gateway_account` | — | CloudWatch logging setup |
| `aws_lambda_function` | `pdfninja-easy-tools` | 14 sync PDF tools router |
| `aws_lambda_function` | `pdfninja-upload-url` | Presigned URL generator |
| `aws_lambda_function` | `pdfninja-job-creator` | Heavy job queue writer |
| `aws_lambda_function` | `pdfninja-job-status` | Job status + download URL |
| `aws_lambda_function` | `pdfninja-ocr` | AWS Textract OCR |
| `aws_lambda_layer_version` | `pdfninja-pdf-tools:1` | Shared Python deps (via S3) |
| `aws_s3_bucket` | `pdfninja-files-582054875648` | File storage (inputs + outputs) |
| `aws_s3_bucket_cors_configuration` | — | CORS for direct uploads |
| `aws_s3_bucket_lifecycle_configuration` | — | Auto-delete files after 7 days |
| `aws_s3_bucket_versioning` | — | Object versioning enabled |
| `aws_dynamodb_table` | `pdfninja-jobs` | Async job state tracking |
| `aws_sqs_queue` | `pdfninja-heavy-jobs` | Job queue for EC2 worker |
| `aws_sqs_queue` | `pdfninja-heavy-jobs-dlq` | Dead-letter queue (failed jobs) |
| `aws_sqs_queue_policy` | — | Allows Lambda to send messages |
| `aws_instance` | `pdfninja-worker` (t3.micro) | Heavy tool EC2 worker |
| `aws_eip` | — | Static IP for EC2 |
| `aws_security_group` | `pdfninja-ec2-sg` | SSH (port 22) + SQS outbound |
| `aws_iam_role` | `pdfninja-lambda-role` | Lambda execution role |
| `aws_iam_role` | `pdfninja-ec2-role` | EC2 instance role |
| `aws_iam_instance_profile` | `pdfninja-ec2-instance-profile` | Attaches EC2 role to instance |
| `aws_iam_role_policy` | `pdfninja-lambda-policy` | Lambda S3/DynamoDB/SQS/Textract |
| `aws_iam_role_policy` | `pdfninja-ec2-policy` | EC2 S3/SQS/DynamoDB |
| `aws_cloudwatch_log_group` | `/aws/lambda/pdfninja-*` | Lambda log groups |

### S3 Bucket Layout

```
pdfninja-files-582054875648/
├── _layer/
│   └── layer.zip           ← Lambda layer source (178MB raw, 7MB clean)
├── _deploy/
│   ├── worker.py           ← EC2 worker source
│   └── converters/         ← 10 converter modules for EC2
│       ├── __init__.py
│       ├── _libreoffice.py
│       ├── word_to_pdf.py
│       ├── ppt_to_pdf.py
│       ├── excel_to_pdf.py
│       ├── pdf_to_word.py
│       ├── pdf_to_ppt.py
│       ├── pdf_to_excel.py
│       ├── scan_to_pdf.py
│       └── pdf_to_pdfa.py
├── inputs/                 ← User-uploaded files (sync tools)
│   └── {uuid}/{filename}
├── heavy-inputs/           ← User-uploaded files (heavy tools)
│   └── {uuid}/{filename}
└── outputs/                ← Processed results
    └── {uuid}/{filename}
```

Files in `inputs/` and `outputs/` auto-delete after **7 days** via lifecycle policy.

---

## 4. All 23 PDF Tools

### Group A — 14 Easy/Sync Tools (Lambda, instant response)

| # | Tool Key | Description | Key Libraries |
|---|---|---|---|
| 1 | `merge` | Merge multiple PDFs into one | pypdf |
| 2 | `split` | Split PDF by page or range → ZIP | pypdf |
| 3 | `compress` | Reduce file size via Ghostscript | `gs` binary |
| 4 | `rotate` | Rotate pages by 90/180/270° | pypdf |
| 5 | `watermark` | Add text watermark with opacity | pypdf, reportlab |
| 6 | `protect` | Password-protect a PDF | pypdf |
| 7 | `unlock` | Remove password from PDF | pypdf |
| 8 | `organize` | Reorder or delete pages | pypdf |
| 9 | `page-numbers` | Stamp page numbers on every page | pypdf, reportlab |
| 10 | `repair` | Fix corrupt PDFs via qpdf fallback | pypdf, `qpdf` binary |
| 11 | `crop` | Crop page margins in points | pypdf |
| 12 | `jpg-to-pdf` | Convert images (JPG/PNG/TIFF) to PDF | Pillow |
| 13 | `pdf-to-jpg` | Convert PDF pages to JPG images → ZIP | pdf2image, poppler |
| 14 | `html-to-pdf` | Convert URL or HTML string to PDF | `wkhtmltopdf` binary |

### Group B — 8 Heavy/Async Tools (EC2 Worker via SQS)

| # | Tool Key | Description | Key Libraries |
|---|---|---|---|
| 15 | `word-to-pdf` | DOCX → PDF via LibreOffice | LibreOffice |
| 16 | `ppt-to-pdf` | PPTX → PDF via LibreOffice | LibreOffice |
| 17 | `excel-to-pdf` | XLSX → PDF via LibreOffice | LibreOffice |
| 18 | `pdf-to-word` | PDF → DOCX via pdf2docx | pdf2docx, PyMuPDF |
| 19 | `pdf-to-ppt` | PDF → PPTX (slide per page) | python-pptx, PyMuPDF |
| 20 | `pdf-to-excel` | PDF → XLSX (table extraction) | camelot, openpyxl |
| 21 | `scan-to-pdf` | Scanned image → searchable PDF | Tesseract + reportlab |
| 22 | `pdf-to-pdfa` | PDF → PDF/A archival format | Ghostscript |

### Group C — 1 Specialist Tool (Dedicated Lambda)

| # | Tool | Description | AWS Service |
|---|---|---|---|
| 23 | `ocr` | Extract text from PDF/image | AWS Textract |

---

## 5. API Endpoints

Base URL: `https://s7vgf8qbmh.execute-api.us-east-1.amazonaws.com/prod`

### POST `/v1/upload` — Get presigned upload URL

```json
// Request
{
  "filename": "document.pdf",
  "content_type": "application/pdf",
  "prefix": "inputs"        // "inputs" for sync tools, "heavy-inputs" for heavy tools
}

// Response 200
{
  "upload_url": "https://pdfninja-files-....s3.amazonaws.com/inputs/uuid/document.pdf?...",
  "file_key": "inputs/uuid/document.pdf",
  "max_size_mb": 100,
  "expires_in": 900
}
```

### POST `/v1/tools/{tool}` — Run a sync tool

```json
// Request (single file)
{
  "file_key": "inputs/uuid/document.pdf",
  "options": { "angle": 90 }
}

// Response 200
{
  "tool": "rotate",
  "download_url": "https://pdfninja-files-....s3.amazonaws.com/outputs/uuid/output.pdf?...",
  "output_key": "outputs/uuid/output.pdf",
  "expires_in": 3600
}
```

### POST `/v1/jobs/{tool}` — Queue a heavy async job

```json
// Request
{
  "file_key": "heavy-inputs/uuid/document.docx",
  "options": {}
}

// Response 202
{
  "job_id": "550e8400-e29b-41d4-a716-446655440000",
  "status": "queued",
  "status_url": "/v1/jobs/status/550e8400-..."
}
```

### GET `/v1/jobs/status/{job_id}` — Poll job status

```json
// Response (pending)
{ "job_id": "...", "tool": "word-to-pdf", "status": "processing" }

// Response (complete)
{
  "job_id": "...",
  "tool": "word-to-pdf",
  "status": "complete",
  "download_url": "https://...s3.amazonaws.com/outputs/uuid/output.pdf?...",
  "expires_in": 3600
}
```

### POST `/v1/ocr` — Extract text from PDF or image

```json
// Request
{
  "file_key": "inputs/uuid/scan.pdf"
}

// Response 200
{
  "tool": "ocr",
  "text": "First 5000 characters of extracted text...",
  "full_text_url": "https://...s3.amazonaws.com/outputs/uuid/output.txt?...",
  "char_count": 12483
}
```

### OPTIONS `*` — CORS Preflight (all routes)

All routes respond to `OPTIONS` with a MOCK integration (no Lambda invoked) returning dynamically configured CORS headers.

---

## 6. CORS Configuration

### Dynamic Origin Reflection

All 5 Lambda functions dynamically reflect the request's `Origin` header if it is in the allowed list:

| Allowed Origins |
|---|
| `https://thepdfninja.com` |
| `https://www.thepdfninja.com` |
| `http://localhost:3000` |
| `http://localhost:5173` |
| `http://localhost:8080` |
| `http://127.0.0.1:3000` |

---

## 7. Lambda Layer

The Lambda layer (`pdfninja-pdf-tools:1`) provides Python dependencies. Stored in `s3://pdfninja-files-582054875648/_layer/layer.zip`.

**Packages in layer:**
- `pypdf==4.3.1`
- `reportlab==4.2.5`
- `Pillow==10.4.0`
- `pdf2image==1.17.0`
- `chardet`

To rebuild:
```powershell
Remove-Item -Recurse -Force lambda\layer_build
New-Item -ItemType Directory -Force -Path lambda\layer_build\python

pip install `
    --platform manylinux2014_x86_64 `
    --implementation cp `
    --python-version 3.11 `
    --only-binary=:all: `
    --target lambda\layer_build\python `
    "pypdf==4.3.1" "reportlab==4.2.5" "Pillow==10.4.0" "pdf2image==1.17.0"

Compress-Archive -Path lambda\layer_build\* -DestinationPath lambda\layer.zip -Force
aws s3 cp lambda\layer.zip s3://pdfninja-files-582054875648/_layer/layer.zip
cd terraform; terraform apply -auto-approve
```

---

## 8. EC2 Worker Setup

**Instance Details:** `i-0bfc77e6c70e0430c` (t3.micro, Ubuntu 22.04 LTS), IP: `32.199.125.202`.

**Worker Service (`pdfninja`):** Runs as a systemd service under the `worker` OS user. Long-polls SQS every 5 seconds. Updates DynamoDB with job status.

**Installed Packages:**
LibreOffice, Tesseract, AWS CLI v2, Python 3 + `pypdf`, `pdf2docx`, `PyMuPDF`, `Pillow`, `pdf2image`, `openpyxl`, `python-docx`, `python-pptx`, `XlsxWriter`.

---

## 9. IAM Permissions

- **Lambda Role (`pdfninja-lambda-role`):** Access to S3, DynamoDB, SQS, Textract, CloudWatch Logs.
- **EC2 Role (`pdfninja-ec2-role`):** Access to S3 (including `ListBucket`), SQS, DynamoDB, CloudWatch Logs.

---

## 10. SEO Readiness

The backend architecture and routing are implemented to be fully SEO ready:

- **Strict HTTPS:** All API Gateway and S3 endpoints are served over TLS.
- **Proper HTTP Status Codes:** Granular and semantically correct status codes (200, 202, 400, 404, 500).
- **Correct MIME Types:** Returns `application/json` consistently, critical for crawlers and search indexers.
- **Dynamic CORS:** Allows domains to be pre-authorized without hard-failing bots.
- **Presigned URLs:** Outputs serve fast from S3 with correct `Content-Disposition` headers and expiration times.
- **Rate Limiting:** API Gateway throttling ensures uptime is not compromised, protecting the platform's SEO reputation.

---

## 11. Deployment Procedures

### Full Redeploy (Terraform)

```powershell
cd terraform
terraform apply -auto-approve
```

### Update EC2 Worker Code

```powershell
.\scripts\deploy_ec2.ps1
```

### Useful EC2 Commands

```bash
ssh -i "$env:USERPROFILE\.ssh\pdfninja-key.pem" ubuntu@32.199.125.202
sudo systemctl status pdfninja
sudo tail -f /var/log/pdfninja.log
sudo systemctl restart pdfninja
```

---

## 12. File & Directory Reference

```
thepdfninja/
├── terraform/                      # All AWS infrastructure as code
├── lambda/                         # Lambda handlers and easy tool scripts
├── ec2/                            # Heavy tool EC2 worker and converters
├── scripts/                        # PowerShell and bash deployment scripts
├── docs/                           # Internal documentation
├── DEPLOYMENT.md                   # ← This file
└── README.md                       # Project overview
```

---

## 13. Key AWS Resource IDs

| Resource | ID / Value |
|---|---|
| API URL | `https://s7vgf8qbmh.execute-api.us-east-1.amazonaws.com/prod` |
| S3 Bucket | `pdfninja-files-582054875648` |
| EC2 IP | `32.199.125.202` |
| DynamoDB Table | `pdfninja-jobs` |
| SQS Queue URL | `https://sqs.us-east-1.amazonaws.com/582054875648/pdfninja-heavy-jobs` |
| Lambda Layer ARN | `arn:aws:lambda:us-east-1:582054875648:layer:pdfninja-pdf-tools:1` |
