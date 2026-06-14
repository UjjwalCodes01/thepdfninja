# ThePDFNinja — Frontend API Guide

> **For the frontend developer.**
> This document covers every API endpoint, how to send files, what options each tool takes, and what responses look like.
> Base URL: `https://s7vgf8qbmh.execute-api.us-east-1.amazonaws.com/prod`

---

## How Every Tool Works (The Flow)

Every tool follows the same 4-step flow:

```
1. GET a presigned upload URL  →  POST /v1/upload
2. PUT the file directly to S3  (using the URL from step 1)
3. Call the tool  →  POST /v1/tools/{tool-name}
4. Download result  →  use the download_url from step 3 response
```

For **heavy tools** (Word/PPT/Excel conversions + doc format converters), step 3 returns a `job_id` instead of a download URL. You then poll for the result.

---

## Step 1 — Get Upload URL

```
POST /v1/upload
Content-Type: application/json
```

**Request body:**
```json
{
  "filename": "mydocument.pdf",
  "content_type": "application/pdf"
}
```

**Response:**
```json
{
  "upload_url": "https://pdfninja-files-....s3.amazonaws.com/inputs/uuid/mydocument.pdf?...",
  "file_key": "inputs/uuid/mydocument.pdf",
  "max_size_mb": 100,
  "expires_in": 900
}
```

> Save `file_key` — you'll send it to the tool in step 3.

**Accepted content types:**
| Format | content_type |
|--------|-------------|
| PDF | `application/pdf` |
| JPG | `image/jpeg` |
| PNG | `image/png` |
| WebP | `image/webp` |
| HEIC/HEIF | `image/heic` or `image/heif` |
| SVG | `image/svg+xml` |
| BMP | `image/bmp` |
| TIFF | `image/tiff` |
| Word (.docx) | `application/vnd.openxmlformats-officedocument.wordprocessingml.document` |
| Word (.doc) | `application/msword` |
| PowerPoint (.pptx) | `application/vnd.openxmlformats-officedocument.presentationml.presentation` |
| Excel (.xlsx) | `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` |
| HTML | `text/html` |
| Plain text | `text/plain` |
| RTF | `application/rtf` |
| ODT | `application/vnd.oasis.opendocument.text` |
| CSV | `text/csv` |
| EPUB | `application/epub+zip` |
| Markdown | `text/markdown` |

---

## Step 2 — Upload the File to S3

Use the `upload_url` from step 1. Do a plain HTTP `PUT` directly from the browser.

```js
await fetch(upload_url, {
  method: "PUT",
  headers: { "Content-Type": content_type },  // must match what you passed in step 1
  body: file,   // the raw File object from <input type="file">
});
```

No auth headers needed. The URL is pre-signed and expires in 15 minutes.

---

## Step 3 — Call the Tool

### Sync Tools (instant result)

```
POST /v1/tools/{tool-name}
Content-Type: application/json
```

**Single file body:**
```json
{
  "file_key": "inputs/uuid/myfile.pdf",
  "options": {}
}
```

**Multiple files body (merge only):**
```json
{
  "file_keys": [
    "inputs/uuid/file1.pdf",
    "inputs/uuid/file2.pdf"
  ],
  "options": {}
}
```

**Success response:**
```json
{
  "tool": "compress",
  "download_url": "https://pdfninja-files-....s3.amazonaws.com/outputs/uuid/output.pdf?...",
  "output_key": "outputs/uuid/output.pdf",
  "expires_in": 3600
}
```

> `download_url` is valid for 1 hour. Start the browser download directly using this URL.

**Error response:**
```json
{
  "error": "description of what went wrong",
  "trace": "..."
}
```

---

### Async/Heavy Tools (job-based)

These tools take longer (LibreOffice conversions etc). Step 3 returns a `job_id`.

```
POST /v1/jobs
Content-Type: application/json
```

```json
{
  "tool": "word-to-pdf",
  "file_key": "inputs/uuid/myfile.docx",
  "options": {}
}
```

**Response:**
```json
{
  "job_id": "abc-123-def",
  "status": "queued"
}
```

Then **poll** for the result:

```
GET /v1/jobs/{job_id}
```

**Poll response (pending):**
```json
{
  "job_id": "abc-123",
  "status": "processing"
}
```

**Poll response (done):**
```json
{
  "job_id": "abc-123",
  "status": "done",
  "download_url": "https://...",
  "expires_in": 3600
}
```

**Poll response (failed):**
```json
{
  "job_id": "abc-123",
  "status": "failed",
  "error": "reason"
}
```

> Poll every 2–3 seconds. Typical wait: 5–30 seconds depending on file size.

---

## All 56 Tools — Options Reference

### PDF Tools (sync)

| Tool | Endpoint | Input | Options | Output |
|------|----------|-------|---------|--------|
| Merge PDF | `merge` | multiple PDFs via `file_keys` | _(none)_ | merged PDF |
| Split PDF | `split` | 1 PDF | `{"pages_per_split": 1}` | ZIP of PDFs |
| Compress PDF | `compress` | 1 PDF | `{"quality": "medium"}` — low/medium/high | compressed PDF |
| Rotate PDF | `rotate` | 1 PDF | `{"angle": 90, "pages": [1,2]}` — angle: 90/180/270, pages optional (omit = all) | rotated PDF |
| Watermark PDF | `watermark` | 1 PDF | `{"text": "CONFIDENTIAL", "opacity": 0.3, "angle": 45}` | watermarked PDF |
| Protect PDF | `protect` | 1 PDF | `{"password": "secret123"}` | password-protected PDF |
| Unlock PDF | `unlock` | 1 PDF | `{"password": "secret123"}` | unlocked PDF |
| Organize PDF (reorder pages) | `organize` | 1 PDF | `{"page_order": [3,1,2]}` — 1-indexed | reordered PDF |
| Add Page Numbers | `page-numbers` | 1 PDF | `{"start": 1, "position": "bottom-center"}` | PDF with numbers |
| Repair PDF | `repair` | 1 PDF | _(none)_ | repaired PDF |
| Crop PDF (margins) | `crop` | 1 PDF | `{"top": 50, "bottom": 50, "left": 50, "right": 50}` — points | cropped PDF |
| JPG to PDF | `jpg-to-pdf` | 1 or more JPGs via `file_keys` | _(none)_ | PDF |
| PDF to JPG | `pdf-to-jpg` | 1 PDF | `{"dpi": 150}` | ZIP of JPGs (or single JPG) |
| HTML to PDF | `html-to-pdf` | 1 HTML file | `{"url": "https://..."}` (optional, overrides file) | PDF |
| Delete Pages | `delete-pages` | 1 PDF | `{"pages": [2, 5, 7]}` — 1-indexed pages to remove | PDF |
| Extract Pages | `extract-pages` | 1 PDF | `{"pages": [1, 3, 5]}` — 1-indexed pages to keep | PDF |
| PDF to PNG | `pdf-to-png` | 1 PDF | `{"dpi": 150}` | PNG or ZIP of PNGs |
| PDF to TIFF | `pdf-to-tiff` | 1 PDF | `{"dpi": 200}` | TIFF |
| Flatten PDF | `flatten-pdf` | 1 PDF | _(none)_ — removes form fields, makes static | flat PDF |
| Remove Metadata | `remove-metadata` | 1 PDF | _(none)_ | clean PDF |
| Reverse Pages | `reverse-pages` | 1 PDF | _(none)_ | reversed PDF |
| Grayscale PDF | `grayscale-pdf` | 1 PDF | _(none)_ | grayscale PDF |
| Linearize PDF | `linearize-pdf` | 1 PDF | _(none)_ — web-optimized for fast open | linearized PDF |
| N-Up PDF | `n-up-pdf` | 1 PDF | `{"n": 2}` — 2 or 4 pages per sheet | PDF |
| Add Text to PDF | `add-text` | 1 PDF | `{"text": "Hello", "x": 100, "y": 100, "page": 1, "font_size": 12, "color": [0, 0, 0]}` | PDF |
| Add Header/Footer | `add-header-footer` | 1 PDF | `{"header": "My Report", "footer": "Page {n} of {total}", "font_size": 10, "margin": 20}` | PDF |
| Redact PDF | `pdf-redact` | 1 PDF | `{"regions": [{"page": 1, "x": 100, "y": 100, "width": 200, "height": 30}]}` | redacted PDF |
| Resize PDF Pages | `resize-pages` | 1 PDF | `{"size": "A4", "orientation": "portrait"}` — size: A4/Letter/A3/Legal/A5 | PDF |
| Add Signature Box | `add-signature-box` | 1 PDF | `{"page": 1, "x": 72, "y": 72, "width": 200, "height": 60, "label": "Authorized Signatory", "date_line": true}` | PDF |
| PDF Info | `pdf-info` | 1 PDF | _(none)_ | **JSON** (not a file — see below) |

**PDF Info response format (special — returns data, not a file):**
```json
{
  "tool": "pdf-info",
  "info": {
    "page_count": 12,
    "file_size_bytes": 204800,
    "file_size_kb": 200.0,
    "title": "My Document",
    "author": "John",
    "creator": "Word",
    "producer": "Adobe",
    "subject": "",
    "encrypted": false,
    "page_width_pt": 595.28,
    "page_height_pt": 841.89,
    "page_size_mm": { "width": 210.0, "height": 297.0 }
  }
}
```

---

### Image Conversion Tools (sync)

| Tool | Endpoint | Input | Options | Output |
|------|----------|-------|---------|--------|
| PNG to JPG | `png-to-jpg` | 1 PNG | `{"quality": 90}` | JPG |
| JPG to PNG | `jpg-to-png` | 1 JPG | _(none)_ | PNG |
| WebP to JPG | `webp-to-jpg` | 1 WebP | `{"quality": 90}` | JPG |
| WebP to PNG | `webp-to-png` | 1 WebP | _(none)_ | PNG |
| JPG to WebP | `jpg-to-webp` | 1 JPG | `{"quality": 85, "lossless": false}` | WebP |
| PNG to WebP | `png-to-webp` | 1 PNG | `{"quality": 85, "lossless": false}` | WebP |
| HEIC to JPG | `heic-to-jpg` | 1 HEIC/HEIF | `{"quality": 90}` | JPG |
| HEIC to PNG | `heic-to-png` | 1 HEIC/HEIF | _(none)_ | PNG |
| BMP to JPG | `bmp-to-jpg` | 1 BMP | `{"quality": 90}` | JPG |
| BMP to PNG | `bmp-to-png` | 1 BMP | _(none)_ | PNG |
| TIFF to JPG | `tiff-to-jpg` | 1 TIFF | `{"quality": 90}` | JPG (or ZIP if multi-page) |
| SVG to PNG | `svg-to-png` | 1 SVG | `{"scale": 2.0, "width": 800, "height": 600}` — scale or dimensions | PNG |
| Image Compress | `image-compress` | 1 JPG/PNG/WebP | `{"quality": 75, "max_width": 1920}` | same format, smaller |
| Image Resize | `image-resize` | 1 image | `{"width": 800, "height": 600, "mode": "fit", "unit": "px"}` — mode: fit/exact/fill; unit: px/percent | resized image |
| Image Crop | `image-crop` | 1 image | `{"x": 0, "y": 0, "width": 800, "height": 600}` — all in pixels from top-left | cropped image |
| Image to Grayscale | `image-to-grayscale` | 1 image | _(none)_ | grayscale image |

---

### India-Specific Tools (sync)

| Tool | Endpoint | Input | Options | Output |
|------|----------|-------|---------|--------|
| Compress PDF to Size | `compress-to-size` | 1 PDF | `{"target_kb": 200}` — target file size in KB (e.g. 100, 200, 500) | PDF ≤ target size |
| Image to Size | `image-to-size` | 1 image | `{"target_kb": 50, "format": "jpg"}` — format: jpg or png | image ≤ target size |
| Passport Photo Resize | `resize-to-passport` | 1 JPG/PNG | `{"size": "india_passport", "dpi": 300}` — see sizes below | JPG at correct dimensions |

**Passport sizes available:**
- `india_passport` — 35×45mm
- `us_passport` — 51×51mm
- `uk_visa` — 35×45mm
- `china_visa` — 33×48mm
- `schengen_visa` — 35×45mm
- `custom` — provide `width_mm` and `height_mm`

---

### Document Converter Tools (async/heavy — use `/v1/jobs`)

| Tool | Endpoint | Input | Options | Output |
|------|----------|-------|---------|--------|
| Word to PDF | `word-to-pdf` | .docx/.doc | _(none)_ | PDF |
| PPT to PDF | `ppt-to-pdf` | .pptx/.ppt | _(none)_ | PDF |
| Excel to PDF | `excel-to-pdf` | .xlsx/.xls | _(none)_ | PDF |
| PDF to Word | `pdf-to-word` | PDF | _(none)_ | .docx |
| PDF to PPT | `pdf-to-ppt` | PDF | _(none)_ | .pptx |
| PDF to Excel | `pdf-to-excel` | PDF | _(none)_ | .xlsx |
| Scan to PDF | `scan-to-pdf` | JPG/PNG | _(none)_ | searchable PDF |
| PDF to PDF/A | `pdf-to-pdfa` | PDF | _(none)_ | PDF/A (archival) |
| TXT to PDF | `txt-to-pdf` | .txt | _(none)_ | PDF |
| RTF to PDF | `rtf-to-pdf` | .rtf | _(none)_ | PDF |
| ODT to PDF | `odt-to-pdf` | .odt | _(none)_ | PDF |
| CSV to PDF | `csv-to-pdf` | .csv | _(none)_ | PDF |
| EPUB to PDF | `epub-to-pdf` | .epub | _(none)_ | PDF |
| Markdown to PDF | `md-to-pdf` | .md | _(none)_ | PDF |
| PDF to Text | `pdf-to-txt` | PDF | _(none)_ | .txt |
| OCR | `ocr` | JPG/PNG/PDF | _(none)_ | searchable PDF |

---

## Quick Reference — Which endpoint to use?

| The user wants to... | Use |
|----------------------|-----|
| Combine multiple PDFs | `POST /v1/tools/merge` with `file_keys: [...]` |
| Convert image format | `POST /v1/tools/{format-to-format}` |
| Convert Word/PPT/Excel | `POST /v1/jobs` + poll `GET /v1/jobs/{id}` |
| Get PDF page count, author, size | `POST /v1/tools/pdf-info` → returns JSON, no download |
| Compress PDF to under 200KB for govt portal | `POST /v1/tools/compress-to-size` with `target_kb: 200` |
| Make passport photo | `POST /v1/tools/resize-to-passport` with size key |
| Strip all author/creator metadata | `POST /v1/tools/remove-metadata` |
| Black out sensitive text permanently | `POST /v1/tools/pdf-redact` with pixel regions |

---

## Error Handling

All errors return HTTP 4xx/5xx with this body:

```json
{
  "error": "human readable error message",
  "trace": "full Python traceback for debugging"
}
```

Common errors and their meaning:

| Error | Meaning |
|-------|---------|
| `file_key or file_keys required` | Forgot to send file_key in body |
| `Unknown tool: xyz` | Tool name typo — check the endpoint list above |
| `An error occurred (403)` | file_key doesn't exist in S3 (upload didn't complete) |
| `An error occurred (NoSuchKey)` | Same — file missing |
| `pages list is empty` | Sent `delete-pages` or `extract-pages` without the pages array |

---

## CORS

All endpoints return these headers:
```
Access-Control-Allow-Origin: https://thepdfninja.com
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

For local development, `http://localhost:*` origins are also allowed automatically.

---

## Full Example (end to end)

```js
const API = "https://s7vgf8qbmh.execute-api.us-east-1.amazonaws.com/prod";

async function compressPDF(file) {
  // 1. Get upload URL
  const { upload_url, file_key } = await fetch(`${API}/v1/upload`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ filename: file.name, content_type: "application/pdf" })
  }).then(r => r.json());

  // 2. Upload file to S3
  await fetch(upload_url, {
    method: "PUT",
    headers: { "Content-Type": "application/pdf" },
    body: file
  });

  // 3. Call the tool
  const result = await fetch(`${API}/v1/tools/compress`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ file_key, options: { quality: "medium" } })
  }).then(r => r.json());

  if (result.error) throw new Error(result.error);

  // 4. Download the result
  window.location.href = result.download_url;
}
```

**Same pattern for async tools (word-to-pdf etc):**

```js
async function wordToPDF(file) {
  // Steps 1 & 2 same as above (upload the file)...

  // 3. Create job
  const { job_id } = await fetch(`${API}/v1/jobs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tool: "word-to-pdf", file_key })
  }).then(r => r.json());

  // 4. Poll until done
  while (true) {
    await new Promise(r => setTimeout(r, 2500));
    const job = await fetch(`${API}/v1/jobs/${job_id}`).then(r => r.json());

    if (job.status === "done") {
      window.location.href = job.download_url;
      break;
    }
    if (job.status === "failed") {
      throw new Error(job.error);
    }
    // status === "queued" or "processing" → keep polling
  }
}
```
