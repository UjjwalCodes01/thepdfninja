# ThePDFNinja API Reference

Base URL: `https://<api-id>.execute-api.us-east-1.amazonaws.com/prod`

All endpoints accept and return `application/json`.

CORS is restricted to `https://thepdfninja.com` and `https://www.thepdfninja.com`. Any other origin receives the production domain in `Access-Control-Allow-Origin`, so the browser blocks the response. `http://localhost:*` is echoed back only when the `ALLOW_LOCALHOST_ORIGINS` Lambda env var is `true` (Terraform variable `allow_localhost_origins`, default `false`).

---

## Universal flow

Every conversion follows this pattern:

```
1. POST /v1/upload           → get presigned S3 POST (url + fields)
2. POST <upload_url>          → multipart upload straight to S3
3. POST /v1/tools/<tool>      → run tool (returns download URL)
   OR
   POST /v1/jobs/<tool>       → create job (returns job_id)
   GET  /v1/jobs/status/<id>  → poll until status=complete
4. GET  <download_url>        → fetch result
```

---

## POST /v1/upload

Generate a presigned S3 **POST**. The frontend uploads directly to S3, bypassing API Gateway's 10 MB payload limit.

POST is used rather than PUT because only the POST form policy can carry a `content-length-range` condition — that is what enforces the 100 MB cap. S3 rejects an oversized upload with `403 EntityTooLarge`.

**Request body:**
```json
{
  "filename": "document.pdf",
  "content_type": "application/pdf",
  "prefix": "inputs"
}
```

- `filename` (string, required)
- `content_type` (string, required) — must be in allowed list
- `prefix` (string, optional) — `"inputs"` (default) for sync tools, `"heavy-inputs"` for heavy async tools

**Response (200):**
```json
{
  "upload_url": "https://pdfninja-files-....s3.amazonaws.com/",
  "fields": {
    "Content-Type": "application/pdf",
    "key": "inputs/abc-uuid/document.pdf",
    "policy": "eyJleHBpcmF0aW9uIjoi...",
    "x-amz-signature": "..."
  },
  "file_key": "inputs/abc-uuid/document.pdf",
  "max_size_mb": 100,
  "max_size_bytes": 104857600,
  "expires_in": 900
}
```

**Uploading:** send a `multipart/form-data` POST to `upload_url` with every entry of `fields` first, then the file last under the field name `file`. S3 returns `204 No Content` on success. The signed policy expires in 15 minutes.

**Allowed content types:** `application/pdf`, `image/jpeg`, `image/png`, `image/tiff`, `image/bmp`, `application/msword`, `application/vnd.openxmlformats-officedocument.wordprocessingml.document`, `application/vnd.ms-powerpoint`, `application/vnd.openxmlformats-officedocument.presentationml.presentation`, `application/vnd.ms-excel`, `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`, `text/html`.

---

## POST /v1/tools/{tool} — Easy tools (sync)

Runs in < 60 seconds, returns result immediately.

| Tool | Path | Body fields |
|---|---|---|
| Merge PDF | `/v1/tools/merge` | `file_keys: [...]` |
| Split PDF | `/v1/tools/split` | `file_key`, `options.mode` (`"all"` \| `"range"`), `options.ranges: [[1,3],[5,7]]` |
| Compress PDF | `/v1/tools/compress` | `file_key`, `options.quality` (`"screen"` \| `"ebook"` \| `"printer"` \| `"prepress"`) |
| Rotate PDF | `/v1/tools/rotate` | `file_key`, `options.angle` (`90`/`180`/`270`), `options.pages` (`"all"` or list) |
| Watermark | `/v1/tools/watermark` | `file_key`, `options.text`, `options.opacity` |
| Protect PDF | `/v1/tools/protect` | `file_key`, `options.password` |
| Unlock PDF | `/v1/tools/unlock` | `file_key`, `options.password` |
| Organize | `/v1/tools/organize` | `file_key`, `options.order: [3,1,2,5]` |
| Page Numbers | `/v1/tools/page-numbers` | `file_key`, `options.position`, `options.start`, `options.font_size` |
| Repair | `/v1/tools/repair` | `file_key` |
| Crop | `/v1/tools/crop` | `file_key`, `options.{left,bottom,right,top}` (points) |
| JPG → PDF | `/v1/tools/jpg-to-pdf` | `file_keys: [...]` |
| PDF → JPG | `/v1/tools/pdf-to-jpg` | `file_key`, `options.dpi` |
| HTML → PDF | `/v1/tools/html-to-pdf` | `options.url` OR `options.html` (or upload an `.html` file) |

`options.url` must be an `http`/`https` URL that resolves to a public IP address. Anything else — `file://`, `localhost`, private ranges, link-local — is rejected with `400`. Redirects are re-checked at every hop, and the fetched page is capped at 20 MB.

**Example request:**
```json
POST /v1/tools/compress
{
  "file_key": "inputs/abc/file.pdf",
  "options": { "quality": "ebook" }
}
```

**Response (200):**
```json
{
  "tool": "compress",
  "download_url": "https://...s3.amazonaws.com/outputs/...",
  "output_key": "outputs/xyz/output_uuid.pdf",
  "expires_in": 3600
}
```

Download URL expires in 1 hour.

---

## POST /v1/jobs/{tool} — Heavy tools (async)

Use for tools needing LibreOffice (large, slow). Returns immediately with a job_id.

| Tool | Path |
|---|---|
| Word → PDF | `/v1/jobs/word-to-pdf` |
| PPT → PDF | `/v1/jobs/ppt-to-pdf` |
| Excel → PDF | `/v1/jobs/excel-to-pdf` |
| PDF → Word | `/v1/jobs/pdf-to-word` |
| PDF → PPT | `/v1/jobs/pdf-to-ppt` |
| PDF → Excel | `/v1/jobs/pdf-to-excel` |
| Scan → PDF | `/v1/jobs/scan-to-pdf` |
| PDF → PDF/A | `/v1/jobs/pdf-to-pdfa` |

**Request:**
```json
{
  "file_key": "heavy-inputs/abc/doc.docx",
  "options": {}
}
```

**Response (202):**
```json
{
  "job_id": "550e8400-e29b-41d4-a716-446655440000",
  "status": "queued",
  "status_url": "/v1/jobs/status/550e8400-..."
}
```

---

## GET /v1/jobs/status/{job_id}

Poll this every 2-5 seconds until `status` is `complete` or `failed`.

**Response (200) — in progress:**
```json
{
  "job_id": "...",
  "tool": "word-to-pdf",
  "status": "processing",
  "created_at": 1717584000
}
```

**Response (200) — complete:**
```json
{
  "job_id": "...",
  "tool": "word-to-pdf",
  "status": "complete",
  "download_url": "https://...s3.amazonaws.com/outputs/...",
  "expires_in": 3600,
  "created_at": 1717584000
}
```

**Response (200) — failed:**
```json
{
  "job_id": "...",
  "status": "failed",
  "error": "LibreOffice failed: <reason>"
}
```

**Statuses:** `queued` → `processing` → `complete` | `failed`.

---

## POST /v1/ocr

Extract text from a scanned PDF or image using AWS Textract.

**Request:**
```json
{
  "file_key": "inputs/abc/scan.pdf"
}
```

**Response (200):**
```json
{
  "tool": "ocr",
  "text": "<first 5000 chars preview>",
  "full_text_url": "https://...s3.amazonaws.com/outputs/.../extracted.txt",
  "char_count": 12348
}
```

Sync for single-page images (< 5 MB). PDFs use async Textract internally (the API waits up to ~90s for completion).

---

## GET /v1/reviews — Customer reviews

Public. Returns only reviews that a human has approved.

**Response (200):**
```json
{
  "reviews": [
    {
      "id": "550e8400-...",
      "rating": 5,
      "name": "Priya S.",
      "role": "CA student",
      "tool": "compress-to-size",
      "title": "Hit 200KB first try",
      "body": "The SSC portal only accepts 200KB...",
      "created_at": 1780000000
    }
  ],
  "aggregate": {
    "count": 12,
    "average": 4.75,
    "distribution": { "1": 0, "2": 0, "3": 1, "4": 1, "5": 10 }
  }
}
```

Pending and rejected reviews are never included. The frontend caches this for 5 minutes.

---

## POST /v1/reviews — Submit a review

Public, unauthenticated. **Always stored with `status: "pending"`** — a submission is invisible to the site until it is approved.

**Request:**
```json
{
  "rating": 5,
  "name": "Priya S.",
  "role": "CA student",
  "tool": "compress-to-size",
  "title": "Hit 200KB first try",
  "body": "The SSC portal only accepts 200KB and this got me there.",
  "website": ""
}
```

| Field | Required | Rules |
|---|---|---|
| `rating` | yes | integer, 1–5 |
| `name` | yes | 2–60 chars |
| `body` | yes | 20–1500 chars, no URLs |
| `role` | no | ≤ 60 chars |
| `title` | no | ≤ 100 chars |
| `tool` | no | ≤ 60 chars, a tool slug |
| `website` | no | honeypot — must be empty; any value is rejected |

**Response (201):**
```json
{ "ok": true, "message": "Thanks! Your review has been received and will appear once we have read it." }
```

**Abuse controls:** one submission per IP per 24 hours (`429` after that), honeypot field, length caps, and a URL/domain blocklist. The rate-limit marker is a sparse item in the same DynamoDB table carrying a TTL, so it expires on its own and never appears in the reviews index.

### Moderating

```bash
bash scripts/moderate_reviews.sh list           # pending queue
bash scripts/moderate_reviews.sh approve <id>   # publish it
bash scripts/moderate_reviews.sh reject <id>    # keep, never serve
```

Set the `review_notify_email` Terraform variable to get an SNS email whenever something is waiting. AWS sends a one-time subscription confirmation link you must click.

---

## Errors

All errors return:
```json
{
  "error": "<message>"
}
```

Status codes: `400` (bad input), `404` (not found), `429` (rate limited), `500` (server error).

`400` carries a specific, actionable message (unsupported option, URL not allowed, file too large). `500` is deliberately generic — the detail is in CloudWatch, not the response, so internal paths and library versions are not exposed.

---

## Rate limits

- 50 requests/sec sustained, 100 burst (API Gateway throttling)
- No per-user auth currently — add API keys or Cognito for production

---

## Privacy

- Input and output files are deleted from S3 within 1 hour. A cleanup Lambda
  (`pdfninja-cleanup`) sweeps every 5 minutes and removes anything older than
  55 minutes, so nothing survives past the hour. S3 lifecycle rules on
  `inputs/`, `heavy-inputs/` and `outputs/` are a 1-day backstop only —
  lifecycle cannot express sub-day expiry.
- Job records auto-delete from DynamoDB after 1 hour (TTL).
- No logging of file contents.

---

## Tool quality notes

| Tool | Quality |
|---|---|
| Word/PPT/Excel → PDF | Excellent (LibreOffice native rendering) |
| PDF → Word | Good (~75-85% layout fidelity via pdf2docx) |
| PDF → PPT | Excellent visual fidelity but text is non-editable (each page becomes an image slide) |
| PDF → Excel | Good for PDFs with table borders, weaker for free-form layouts |
| Compress PDF | `ebook` quality recommended; reduces by ~50-70% with minimal visual loss |
| OCR | Production-grade via AWS Textract; supports English + 8 other languages |
