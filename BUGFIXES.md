# ThePDFNinja — Bug Fixes & Session Notes

> **Session date:** June 2026  
> **Scope:** Backend-only fixes. No frontend changes.  
> All fixes are deployed to AWS and pushed to `main`.

---

## Table of Contents

1. [CORS Fix — API Gateway Preflight](#1-cors-fix--api-gateway-preflight)
2. [Compress PDF — Three Rewrites to Final Fix](#2-compress-pdf--three-rewrites-to-final-fix)
3. [PDF to JPG — Switched to PyMuPDF](#3-pdf-to-jpg--switched-to-pymupdf)
4. [HTML to PDF — Dropped xhtml2pdf, Uses fitz.Story](#4-html-to-pdf--dropped-xhtml2pdf-uses-fitzstory)
5. [OCR — Full End-to-End Implementation](#5-ocr--full-end-to-end-implementation)
6. [EC2 IAM Role — Added Textract Permissions](#6-ec2-iam-role--added-textract-permissions)
7. [Heavy Tools Job Creator — file_keys Parsing Fix](#7-heavy-tools-job-creator--file_keys-parsing-fix)
8. [Lambda Layer — Rebuilt with manylinux Wheels](#8-lambda-layer--rebuilt-with-manylinux-wheels)
9. [EC2 Deployment — SSH Key & Path Reference](#9-ec2-deployment--ssh-key--path-reference)
10. [Architecture Reminder](#10-architecture-reminder)

---

## 1. CORS Fix — API Gateway Preflight

**Symptom:** Browsers got `Access-Control-Allow-Origin` errors on `OPTIONS` preflight from `www.thepdfninja.com`.

**Root cause:** The API Gateway `OPTIONS` mock response was missing `www.thepdfninja.com` in the `Access-Control-Allow-Origin` header.

**Fix:** Updated `terraform/api_gateway.tf` — the `OPTIONS` mock response now explicitly returns:

```
Access-Control-Allow-Origin: https://www.thepdfninja.com
Access-Control-Allow-Headers: Content-Type,X-Amz-Date,Authorization,...
Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS
```

**Files changed:** `terraform/api_gateway.tf`

---

## 2. Compress PDF — Three Rewrites to Final Fix

This tool went through three iterations before landing on the correct approach.

### Attempt 1 (broken): pypdf page-copy
The original code simply copied pages through a `PdfWriter`. This applies Deflate to text streams only — it never touches embedded image data, which is 80–95% of a scanned PDF's size. Output was identical to the input.

### Attempt 2 (broken): `doc.update_stream(xref, jpeg_bytes)`
We tried to manually re-encode each embedded image using Pillow and write it back using `fitz.update_stream()`. This is wrong: `update_stream` replaces the raw PDF stream bytes but does **not** update the image dictionary (`/Filter`, `/Width`, `/ColorSpace`). The result was silent corruption or no effect.

### Attempt 3 (broken): Full page re-render to JPEG
We rendered every page to a JPEG pixmap using `page.get_pixmap()` and assembled a new PDF from those images. This works for scanned PDFs, but for vector/text PDFs it is catastrophic — a 200KB text PDF became 6MB of raster images, destroying text searchability.

### Final fix (correct): Multi-strategy approach

The current implementation in `lambda/easy_tools/tools.py` tries four strategies in order, runs **all viable ones**, and picks the **smallest result** — but **only if it is smaller than the original**. If nothing reduces the size, it returns the original unchanged.

| Strategy | Method | Good for |
|---|---|---|
| 1 | Ghostscript (`gs`) | Everything. Not in Lambda. |
| 2 | PyMuPDF lossless: `garbage=4, deflate=True, deflate_images=True, linear=True` | Bloated / duplicate-object PDFs |
| 3 | In-place image downsampling via `_recompress_image()` | Image-heavy PDFs with oversized embedded images |
| 4 | Full page re-render (only if `_is_image_heavy()` returns True) | Scanned / image-only PDFs |

**Key helper functions added:**

```python
def _recompress_image(img_bytes, jpeg_q, target_dpi):
    # Converts embedded image to RGB, downsamples if large, re-encodes as JPEG
    # Returns None if anything fails, so caller can safely skip

def _is_image_heavy(pdf_path):
    # Samples the first 5 pages. If average text chars < 100/page → True
    # Prevents full re-render from being applied to vector/text PDFs
```

**Quality presets:**

| Quality | DPI | JPEG Q | Image threshold |
|---|---|---|---|
| screen | 72 | 40% | 100 KB |
| ebook | 110 | 65% | 150 KB |
| printer | 150 | 80% | 200 KB |
| prepress | 200 | 92% | 300 KB |

**Files changed:** `lambda/easy_tools/tools.py`

---

## 3. PDF to JPG — Switched to PyMuPDF

**Symptom:** `pdf-to-jpg` was failing due to missing system dependencies (`poppler`).

**Fix:** Replaced `pdf2image` (which shells out to `pdftoppm` / poppler) with pure Python `fitz.open()` → `page.get_pixmap()` → save as JPEG. PyMuPDF is bundled in the Lambda layer and has no system binary dependency.

**Files changed:** `lambda/easy_tools/tools.py`

---

## 4. HTML to PDF — Dropped xhtml2pdf, Uses fitz.Story

**Symptom:** `html-to-pdf` returned `No module named 'xhtml2pdf'` and later `No module named 'asn1crypto'`.

**Root cause:** `xhtml2pdf` requires `pycairo` and `freetype-py`, which pull in platform-specific `.dll` / `.so` binaries. On Amazon Linux (Lambda runtime), only `manylinux` wheels work — these libraries do not have compatible wheels.

**Fix:** Replaced `xhtml2pdf` with `fitz.Story` from PyMuPDF, which renders HTML+CSS natively without any external binary or system library.

```python
story = fitz.Story(html=html_content)
writer = fitz.DocumentWriter(output)
# ... paginate and render
```

**Files changed:** `lambda/easy_tools/tools.py`

---

## 5. OCR — Full End-to-End Implementation

**Symptom:** `Processing Error: Unknown heavy tool: ocr`

OCR was wired to the frontend and the dedicated `lambda/ocr/` Lambda existed, but was never connected to the async heavy-tool pipeline.

**Three-part fix:**

### Part A — job_creator.py: Add `"ocr"` to HEAVY_TOOLS

```python
# lambda/easy_tools/job_creator.py
HEAVY_TOOLS = {
    "word-to-pdf", "ppt-to-pdf", "excel-to-pdf",
    "pdf-to-word", "pdf-to-ppt", "pdf-to-excel",
    "scan-to-pdf", "pdf-to-pdfa",
    "ocr",          # ← added
}
```

Without this, the job creator returned a 400 error immediately.

### Part B — ec2/worker.py: Add `_ocr_via_textract()` handler

The EC2 worker routes jobs via `TOOL_HANDLERS`. OCR needed special treatment because Textract's async API requires the original S3 object reference (not local bytes), so it couldn't be a simple converter function.

```python
def _ocr_via_textract(file_key, local_input, output_path, options):
    textract = boto3.client("textract", region_name=REGION)
    is_pdf = file_key.lower().endswith(".pdf")

    if is_pdf:
        # Async path — StartDocumentTextDetection (supports multi-page PDFs)
        start = textract.start_document_text_detection(
            DocumentLocation={"S3Object": {"Bucket": BUCKET, "Name": file_key}}
        )
        # ... polls until SUCCEEDED, paginates results
    else:
        # Sync path — DetectDocumentText (single image)
        resp = textract.detect_document_text(Document={"Bytes": img_bytes})
        ...

    # Writes extracted text to a .txt file and returns the path
```

The `process_message` loop was updated to call this function directly when `tool == "ocr"` instead of going through `TOOL_HANDLERS`.

### Part C — EC2 IAM Role: Add Textract permissions

The EC2 instance role had no Textract permissions, so calls failed with `AccessDeniedException`.

Added to `terraform/iam.tf` → `aws_iam_role_policy.ec2_inline`:

```hcl
{
  Effect = "Allow"
  Action = [
    "textract:DetectDocumentText",
    "textract:StartDocumentTextDetection",
    "textract:GetDocumentTextDetection",
  ]
  Resource = "*"
}
```

**Files changed:** `lambda/easy_tools/job_creator.py`, `ec2/worker.py`, `terraform/iam.tf`

---

## 6. EC2 IAM Role — Added Textract Permissions

Covered in §5 Part C. Deployed via `terraform apply`. Policy takes effect immediately — no EC2 restart needed.

---

## 7. Heavy Tools Job Creator — file_keys Parsing Fix

**Symptom:** Heavy tool jobs with multiple file uploads were failing because the job creator was reading `file_key` (singular string) instead of `file_keys` (array).

**Fix:** Updated `job_creator.py` to handle both formats:

```python
file_keys = body.get("file_keys") or [body.get("file_key")]
```

**Files changed:** `lambda/easy_tools/job_creator.py`

---

## 8. Lambda Layer — Rebuilt with manylinux Wheels

**Problem:** The Lambda layer (`lambda/layer.zip`) was built on Windows, so pip included Windows-specific `.dll` / `.pyd` binaries. Lambda runs on Amazon Linux — these binaries are incompatible and cause `No module named` errors at import time.

**Fix:** The layer must be built using `manylinux` wheels only. The `build_layer.sh` script uses:

```bash
pip install \
  --platform manylinux2014_x86_64 \
  --only-binary=:all: \
  --target python/ \
  PyMuPDF Pillow pypdf reportlab boto3
```

The rebuilt layer was uploaded to S3 (`s3://pdfninja-files/_layer/layer.zip`) and referenced by `terraform/lambda.tf`. The layer ARN is version 8: `arn:aws:lambda:us-east-1:582054875648:layer:pdfninja-pdf-tools:8`.

> **Important for the next device:** Never build the Lambda layer on Windows. Use WSL, a Linux VM, or a Docker container (`python:3.11-slim`) to run `pip install --platform manylinux2014_x86_64 --only-binary=:all:`.

---

## 9. EC2 Deployment — SSH Key & Path Reference

**SSH Key:** `C:\Users\acer\.ssh\pdfninja-key.pem`  
**EC2 IP:** `32.199.125.202`  
**Worker path on EC2:** `/opt/pdfninja/worker.py`  
**Service name:** `pdfninja.service`  

**Deploy worker update:**

```powershell
$key = "C:\Users\acer\.ssh\pdfninja-key.pem"

# Upload to /tmp first (ubuntu user can't write to /opt/pdfninja directly)
scp -i $key -o StrictHostKeyChecking=no ec2\worker.py ubuntu@32.199.125.202:/tmp/worker.py

# Move with sudo and restart
ssh -i $key ubuntu@32.199.125.202 "sudo cp /tmp/worker.py /opt/pdfninja/worker.py && sudo systemctl restart pdfninja"
```

**Alternative (no key file):** Use EC2 Instance Connect to push a temporary SSH public key valid for 60 seconds:

```powershell
ssh-keygen -t rsa -b 2048 -f "$env:TEMP\tmp_ec2_key" -N '""' -q
$pubKey = Get-Content "$env:TEMP\tmp_ec2_key.pub" -Raw
aws ec2-instance-connect send-ssh-public-key `
    --instance-id "i-0bfc77e6c70e0430c" `
    --instance-os-user "ubuntu" `
    --ssh-public-key "$pubKey" `
    --region us-east-1
# Then SSH immediately using $env:TEMP\tmp_ec2_key
```

---

## 10. Architecture Reminder

```
Frontend (Next.js — thepdfninja.com)
    │
    │ POST /v1/upload          → S3 presigned URL
    │ POST /v1/tools/{tool}    → easy_tools Lambda (14 sync tools)
    │ POST /v1/tools/{tool}    → job_creator Lambda (9 async/heavy tools)
    │ GET  /v1/jobs/{id}       → job_status Lambda
    ▼
AWS API Gateway (REST) — ID: s7vgf8qbmh
    │
    ├─► easy_tools Lambda (pdfninja-easy-tools)
    │       • compress, merge, split, rotate, watermark
    │       • pdf-to-jpg, jpg-to-pdf, html-to-pdf
    │       • add-page-numbers, organize, protect, unlock, sign
    │
    ├─► job_creator Lambda (pdfninja-job-creator)
    │       • word-to-pdf, ppt-to-pdf, excel-to-pdf
    │       • pdf-to-word, pdf-to-ppt, pdf-to-excel
    │       • scan-to-pdf, pdf-to-pdfa, ocr
    │       └─► Enqueues job to SQS → EC2 worker picks up
    │
    ├─► job_status Lambda (reads DynamoDB)
    │
    └─► OCR Lambda (pdfninja-ocr) — dedicated async Textract wrapper

EC2 Worker (i-0bfc77e6c70e0430c — 32.199.125.202)
    • Polls SQS queue
    • Routes to converter modules (word_to_pdf, ppt_to_pdf, etc.)
    • OCR handled inline via _ocr_via_textract()
    • Uploads result to S3, updates DynamoDB job status

S3 Bucket: pdfninja-files
    inputs/  → uploaded files
    outputs/ → processed results
    _layer/  → Lambda layer ZIP

DynamoDB Table: pdfninja-jobs
    jobId, status, input_key, output_key, error, ttl
```

---

## Quick Reference: Tool → Handler Map

| Tool | Type | Handler |
|---|---|---|
| compress | easy (Lambda) | `compress_pdf()` in tools.py |
| merge | easy (Lambda) | `merge_pdf()` in tools.py |
| split | easy (Lambda) | `split_pdf()` in tools.py |
| rotate | easy (Lambda) | `rotate_pdf()` in tools.py |
| watermark | easy (Lambda) | `watermark_pdf()` in tools.py |
| pdf-to-jpg | easy (Lambda) | `pdf_to_jpg()` in tools.py |
| jpg-to-pdf | easy (Lambda) | `jpg_to_pdf()` in tools.py |
| html-to-pdf | easy (Lambda) | `html_to_pdf()` in tools.py — uses `fitz.Story` |
| add-page-numbers | easy (Lambda) | `add_page_numbers()` in tools.py |
| organize | easy (Lambda) | `organize_pdf()` in tools.py |
| protect | easy (Lambda) | `protect_pdf()` in tools.py |
| unlock | easy (Lambda) | `unlock_pdf()` in tools.py |
| sign | easy (Lambda) | `sign_pdf()` in tools.py |
| word-to-pdf | heavy (EC2) | `ec2/converters/word_to_pdf.py` |
| ppt-to-pdf | heavy (EC2) | `ec2/converters/ppt_to_pdf.py` |
| excel-to-pdf | heavy (EC2) | `ec2/converters/excel_to_pdf.py` |
| pdf-to-word | heavy (EC2) | `ec2/converters/pdf_to_word.py` |
| pdf-to-ppt | heavy (EC2) | `ec2/converters/pdf_to_ppt.py` |
| pdf-to-excel | heavy (EC2) | `ec2/converters/pdf_to_excel.py` |
| scan-to-pdf | heavy (EC2) | `ec2/converters/scan_to_pdf.py` |
| pdf-to-pdfa | heavy (EC2) | `ec2/converters/pdf_to_pdfa.py` |
| ocr | heavy (EC2) | `_ocr_via_textract()` inline in `ec2/worker.py` |

---

## Commit History (this session)

| Commit | Description |
|---|---|
| `e7e105b` | CORS fix, compress pypdf fallback, html-to-pdf fix, file_keys mismatch |
| `c8d9590` | html-to-pdf uses fitz.Story instead of xhtml2pdf |
| `a72e307` | OCR tool end-to-end: job_creator + EC2 worker handler |
| `444f299` | Textract IAM permissions added to EC2 role |
| `93110b4` | compress: first PyMuPDF fitz attempt |
| `d9ed327` | compress: re-render approach (had rasterization bug) |
| `471fe6f` | compress: final multi-strategy fix (current) |

---

*Last updated: June 2026. Maintained alongside `DEPLOYMENT.md`.*
