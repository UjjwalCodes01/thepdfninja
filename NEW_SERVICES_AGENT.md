# ThePDFNinja — New Services Implementation Guide

> **For the agent reading this:** This document expands ThePDFNinja from 23 tools to 55+ tools.
> Backend only. No frontend work. Follow each section in order.
> All code slots into the existing architecture — do not change terraform, do not create new Lambda functions or EC2 instances.
> Everything here is an extension of what already exists.

---

## Architecture reminder (read this first)

```
Existing stack:
  API Gateway → Lambda easy_tools  → /v1/tools/{tool}    (sync, < 60s)
  API Gateway → Lambda job_creator → /v1/jobs/{tool}     (async, EC2)
  API Gateway → Lambda job_status  → /v1/jobs/status/id  (poll)
  EC2 worker  → SQS poller        → converters/

Files you will edit:
  lambda/easy_tools/tools.py        ← add all new sync tool functions here
  lambda/easy_tools/handler.py      ← register new tools in TOOL_MAP
  lambda/easy_tools/requirements.txt ← add new pip deps here
  ec2/worker.py                     ← register new heavy tools in TOOL_HANDLERS
  ec2/converters/                   ← add new heavy converter modules here
  scripts/build_layer.sh            ← add new apt/binary installs if needed

Files you will NOT touch:
  terraform/  (no infra changes needed)
  lambda/ocr/ (untouched)
  lambda/easy_tools/upload_url.py   (untouched)
  lambda/easy_tools/job_creator.py  (untouched — just update HEAVY_TOOLS set)
  lambda/easy_tools/job_status.py   (untouched)
```

---

## New dependencies to add

### lambda/easy_tools/requirements.txt — replace entirely with:

```
pypdf==4.3.1
reportlab==4.2.5
Pillow==10.4.0
pillow-heif==0.16.0
pdf2image==1.17.0
PyMuPDF==1.24.10
cairosvg==2.7.1
boto3==1.35.0
```

### EC2 — add to setup.sh apt-get install block:

```bash
calibre          # EPUB to PDF
librsvg2-bin     # SVG to PDF (rsvg-convert)
```

### Lambda layer — add to build_layer.sh:

```bash
# cairosvg needs libcairo
apt-get install -y libcairo2 libpango-1.0-0 libpangocairo-1.0-0 libgdk-pixbuf2.0-0
```

---

## PART 1 — Image Conversion Tools (Lambda, sync)

All image tools live in `lambda/easy_tools/tools.py` and register in `handler.py`.
Every function signature is identical: `fn(input_paths, output_path, options) → str`.

### 1.1 Add to handler.py TOOL_MAP

```python
# Image conversion tools
"png-to-jpg":       png_to_jpg,
"jpg-to-png":       jpg_to_png,
"webp-to-jpg":      webp_to_jpg,
"webp-to-png":      webp_to_png,
"jpg-to-webp":      jpg_to_webp,
"png-to-webp":      png_to_webp,
"heic-to-jpg":      heic_to_jpg,
"heic-to-png":      heic_to_png,
"bmp-to-jpg":       bmp_to_jpg,
"tiff-to-jpg":      tiff_to_jpg,
"svg-to-png":       svg_to_png,
"image-compress":   image_compress,
"image-resize":     image_resize,
"image-to-grayscale": image_to_grayscale,
"pdf-to-png":       pdf_to_png,

# New PDF tools
"delete-pages":     delete_pages,
"extract-pages":    extract_pages,
"pdf-to-tiff":      pdf_to_tiff,
"flatten-pdf":      flatten_pdf,
"remove-metadata":  remove_metadata,
"reverse-pages":    reverse_pages,
"grayscale-pdf":    grayscale_pdf,
"linearize-pdf":    linearize_pdf,
"n-up-pdf":         n_up_pdf,
"add-text":         add_text_to_pdf,

# India-specific tools
"compress-to-size": compress_to_size,
"pdf-info":         pdf_info,
"image-to-size":    image_to_size,
"resize-to-passport": resize_to_passport,
```

### 1.2 Add to handler.py imports from tools.py

```python
from tools import (
    # existing 14
    merge_pdf, split_pdf, compress_pdf, rotate_pdf, watermark_pdf,
    protect_pdf, unlock_pdf, organize_pdf, page_numbers_pdf,
    repair_pdf, crop_pdf, jpg_to_pdf, pdf_to_jpg, html_to_pdf,

    # image conversion
    png_to_jpg, jpg_to_png, webp_to_jpg, webp_to_png,
    jpg_to_webp, png_to_webp, heic_to_jpg, heic_to_png,
    bmp_to_jpg, tiff_to_jpg, svg_to_png,
    image_compress, image_resize, image_to_grayscale, pdf_to_png,

    # new pdf tools
    delete_pages, extract_pages, pdf_to_tiff, flatten_pdf,
    remove_metadata, reverse_pages, grayscale_pdf, linearize_pdf,
    n_up_pdf, add_text_to_pdf,

    # india tools
    compress_to_size, pdf_info, image_to_size, resize_to_passport,
)
```

### 1.3 Add to lambda/easy_tools/upload_url.py ALLOWED_CONTENT_TYPES

```python
# Add these to the existing set:
"image/webp",
"image/bmp",
"image/tiff",
"image/heic",
"image/heif",
"image/svg+xml",
```

---

### 1.4 Image conversion implementations — append ALL of this to tools.py

```python
# =============================================================
# IMAGE CONVERSION TOOLS
# All use Pillow. Zero external binaries needed for most.
# =============================================================

def _open_image_rgb(path):
    """Open any image and ensure RGB mode for JPEG output."""
    from PIL import Image
    img = Image.open(path)
    if img.mode in ("RGBA", "LA", "P"):
        bg = Image.new("RGB", img.size, (255, 255, 255))
        if img.mode == "P":
            img = img.convert("RGBA")
        alpha = img.split()[-1] if img.mode in ("RGBA", "LA") else None
        bg.paste(img, mask=alpha)
        return bg
    elif img.mode != "RGB":
        return img.convert("RGB")
    return img


# ── PNG → JPG ──────────────────────────────────────────────
def png_to_jpg(input_paths, output_path, options):
    quality = int(options.get("quality", 90))
    output = output_path + ".jpg"
    img = _open_image_rgb(input_paths[0])
    img.save(output, "JPEG", quality=quality, optimize=True)
    return output


# ── JPG → PNG ──────────────────────────────────────────────
def jpg_to_png(input_paths, output_path, options):
    from PIL import Image
    output = output_path + ".png"
    img = Image.open(input_paths[0]).convert("RGBA")
    img.save(output, "PNG", optimize=True)
    return output


# ── WebP → JPG ─────────────────────────────────────────────
def webp_to_jpg(input_paths, output_path, options):
    quality = int(options.get("quality", 90))
    output = output_path + ".jpg"
    img = _open_image_rgb(input_paths[0])
    img.save(output, "JPEG", quality=quality, optimize=True)
    return output


# ── WebP → PNG ─────────────────────────────────────────────
def webp_to_png(input_paths, output_path, options):
    from PIL import Image
    output = output_path + ".png"
    img = Image.open(input_paths[0])
    img.save(output, "PNG", optimize=True)
    return output


# ── JPG → WebP ─────────────────────────────────────────────
def jpg_to_webp(input_paths, output_path, options):
    from PIL import Image
    quality = int(options.get("quality", 85))
    lossless = options.get("lossless", False)
    output = output_path + ".webp"
    img = Image.open(input_paths[0]).convert("RGB")
    img.save(output, "WEBP", quality=quality, lossless=lossless)
    return output


# ── PNG → WebP ─────────────────────────────────────────────
def png_to_webp(input_paths, output_path, options):
    from PIL import Image
    quality = int(options.get("quality", 85))
    lossless = options.get("lossless", False)
    output = output_path + ".webp"
    img = Image.open(input_paths[0]).convert("RGBA")
    img.save(output, "WEBP", quality=quality, lossless=lossless)
    return output


# ── HEIC → JPG ─────────────────────────────────────────────
# Requires: pillow-heif==0.16.0 in requirements.txt
def heic_to_jpg(input_paths, output_path, options):
    from PIL import Image
    import pillow_heif
    pillow_heif.register_heif_opener()
    quality = int(options.get("quality", 90))
    output = output_path + ".jpg"
    img = Image.open(input_paths[0])
    img = img.convert("RGB")
    img.save(output, "JPEG", quality=quality, optimize=True)
    return output


# ── HEIC → PNG ─────────────────────────────────────────────
def heic_to_png(input_paths, output_path, options):
    from PIL import Image
    import pillow_heif
    pillow_heif.register_heif_opener()
    output = output_path + ".png"
    img = Image.open(input_paths[0]).convert("RGBA")
    img.save(output, "PNG", optimize=True)
    return output


# ── BMP → JPG ──────────────────────────────────────────────
def bmp_to_jpg(input_paths, output_path, options):
    quality = int(options.get("quality", 90))
    output = output_path + ".jpg"
    img = _open_image_rgb(input_paths[0])
    img.save(output, "JPEG", quality=quality, optimize=True)
    return output


# ── TIFF → JPG ─────────────────────────────────────────────
def tiff_to_jpg(input_paths, output_path, options):
    import zipfile
    from PIL import Image
    quality = int(options.get("quality", 90))
    img = Image.open(input_paths[0])

    # TIFF can be multi-frame
    frames = []
    try:
        while True:
            frames.append(img.copy().convert("RGB"))
            img.seek(img.tell() + 1)
    except EOFError:
        pass

    if len(frames) == 1:
        output = output_path + ".jpg"
        frames[0].save(output, "JPEG", quality=quality, optimize=True)
        return output
    else:
        # Multi-frame TIFF → ZIP of JPEGs
        zip_path = output_path + ".zip"
        with zipfile.ZipFile(zip_path, "w") as zf:
            for i, frame in enumerate(frames):
                p = f"/tmp/frame_{i+1}.jpg"
                frame.save(p, "JPEG", quality=quality, optimize=True)
                zf.write(p, f"page_{i+1}.jpg")
        return zip_path


# ── SVG → PNG ──────────────────────────────────────────────
# Requires: cairosvg in requirements.txt + libcairo in Lambda layer
def svg_to_png(input_paths, output_path, options):
    import cairosvg
    scale = float(options.get("scale", 2.0))   # 2x = higher DPI
    width = options.get("width")
    height = options.get("height")
    output = output_path + ".png"
    kwargs = {"url": input_paths[0], "write_to": output, "scale": scale}
    if width:
        kwargs["output_width"] = int(width)
    if height:
        kwargs["output_height"] = int(height)
    cairosvg.svg2png(**kwargs)
    return output


# ── Image Compress ──────────────────────────────────────────
# Works on JPG, PNG, WebP
# Options: {"quality": 70, "max_width": 1920}
def image_compress(input_paths, output_path, options):
    from PIL import Image
    import os
    src = input_paths[0]
    ext = os.path.splitext(src)[1].lower()
    quality = int(options.get("quality", 75))
    max_width = options.get("max_width")

    fmt_map = {
        ".jpg": ("JPEG", ".jpg"),
        ".jpeg": ("JPEG", ".jpg"),
        ".png": ("PNG", ".png"),
        ".webp": ("WEBP", ".webp"),
    }
    pil_fmt, out_ext = fmt_map.get(ext, ("JPEG", ".jpg"))
    output = output_path + out_ext

    img = Image.open(src)
    if pil_fmt == "JPEG" and img.mode != "RGB":
        img = _open_image_rgb(src)

    if max_width and img.width > int(max_width):
        ratio = int(max_width) / img.width
        img = img.resize(
            (int(max_width), int(img.height * ratio)),
            Image.LANCZOS
        )

    save_kwargs = {"optimize": True}
    if pil_fmt in ("JPEG", "WEBP"):
        save_kwargs["quality"] = quality

    img.save(output, pil_fmt, **save_kwargs)
    return output


# ── Image Resize ───────────────────────────────────────────
# Options: {"width": 800, "height": 600, "mode": "fit"|"fill"|"exact", "unit": "px"|"percent"}
def image_resize(input_paths, output_path, options):
    from PIL import Image
    import os
    src = input_paths[0]
    ext = os.path.splitext(src)[1].lower()
    fmt_map = {".jpg": "JPEG", ".jpeg": "JPEG", ".png": "PNG", ".webp": "WEBP", ".bmp": "BMP"}
    pil_fmt = fmt_map.get(ext, "JPEG")
    out_ext = ".jpg" if pil_fmt == "JPEG" else ext
    output = output_path + out_ext

    img = Image.open(src)
    orig_w, orig_h = img.size
    unit = options.get("unit", "px")
    mode = options.get("mode", "fit")

    target_w = options.get("width")
    target_h = options.get("height")

    if unit == "percent":
        pct = float(target_w or target_h or 50) / 100
        target_w = int(orig_w * pct)
        target_h = int(orig_h * pct)
    else:
        target_w = int(target_w) if target_w else None
        target_h = int(target_h) if target_h else None

    if mode == "exact" and target_w and target_h:
        img = img.resize((target_w, target_h), Image.LANCZOS)
    elif mode == "fill" and target_w and target_h:
        img = img.resize((target_w, target_h), Image.LANCZOS)
    else:  # fit — maintain aspect ratio
        if target_w and target_h:
            img.thumbnail((target_w, target_h), Image.LANCZOS)
        elif target_w:
            ratio = target_w / orig_w
            img = img.resize((target_w, int(orig_h * ratio)), Image.LANCZOS)
        elif target_h:
            ratio = target_h / orig_h
            img = img.resize((int(orig_w * ratio), target_h), Image.LANCZOS)

    if pil_fmt == "JPEG" and img.mode != "RGB":
        img = img.convert("RGB")
    img.save(output, pil_fmt, quality=92, optimize=True)
    return output


# ── Image to Grayscale ─────────────────────────────────────
def image_to_grayscale(input_paths, output_path, options):
    from PIL import Image
    import os
    src = input_paths[0]
    ext = os.path.splitext(src)[1].lower()
    out_ext = ext if ext in (".png", ".webp") else ".jpg"
    output = output_path + out_ext
    img = Image.open(src).convert("L").convert("RGB")
    img.save(output, quality=92, optimize=True)
    return output


# ── PDF → PNG ──────────────────────────────────────────────
def pdf_to_png(input_paths, output_path, options):
    import zipfile
    from pdf2image import convert_from_path
    dpi = int(options.get("dpi", 150))
    images = convert_from_path(input_paths[0], dpi=dpi)
    if len(images) == 1:
        output = output_path + ".png"
        images[0].save(output, "PNG")
        return output
    zip_path = output_path + ".zip"
    with zipfile.ZipFile(zip_path, "w") as zf:
        for i, img in enumerate(images):
            p = f"/tmp/page_{i+1}.png"
            img.save(p, "PNG")
            zf.write(p, f"page_{i+1}.png")
    return zip_path


# =============================================================
# NEW PDF TOOLS
# =============================================================

# ── Delete PDF Pages ────────────────────────────────────────
# Options: {"pages": [2, 5, 7]}  — 1-indexed pages to DELETE
def delete_pages(input_paths, output_path, options):
    from pypdf import PdfReader, PdfWriter
    output = output_path + ".pdf"
    pages_to_delete = set(int(p) for p in options.get("pages", []))
    reader = PdfReader(input_paths[0])
    writer = PdfWriter()
    for i, page in enumerate(reader.pages):
        if (i + 1) not in pages_to_delete:
            writer.add_page(page)
    with open(output, "wb") as f:
        writer.write(f)
    return output


# ── Extract PDF Pages ───────────────────────────────────────
# Options: {"pages": [1, 3, 5]}  — 1-indexed pages to KEEP and extract
def extract_pages(input_paths, output_path, options):
    from pypdf import PdfReader, PdfWriter
    output = output_path + ".pdf"
    pages_to_keep = [int(p) for p in options.get("pages", [])]
    reader = PdfReader(input_paths[0])
    writer = PdfWriter()
    for page_num in pages_to_keep:
        idx = page_num - 1
        if 0 <= idx < len(reader.pages):
            writer.add_page(reader.pages[idx])
    with open(output, "wb") as f:
        writer.write(f)
    return output


# ── PDF → TIFF ─────────────────────────────────────────────
def pdf_to_tiff(input_paths, output_path, options):
    from pdf2image import convert_from_path
    dpi = int(options.get("dpi", 200))
    output = output_path + ".tiff"
    images = convert_from_path(input_paths[0], dpi=dpi)
    if len(images) == 1:
        images[0].save(output, "TIFF")
    else:
        images[0].save(output, "TIFF", save_all=True, append_images=images[1:])
    return output


# ── Flatten PDF (remove form fields, make static) ──────────
def flatten_pdf(input_paths, output_path, options):
    import fitz
    output = output_path + ".pdf"
    doc = fitz.open(input_paths[0])
    for page in doc:
        page.clean_contents()
    doc.save(output, garbage=4, deflate=True)
    doc.close()
    return output


# ── Remove PDF Metadata ─────────────────────────────────────
def remove_metadata(input_paths, output_path, options):
    from pypdf import PdfReader, PdfWriter
    output = output_path + ".pdf"
    reader = PdfReader(input_paths[0])
    writer = PdfWriter()
    for page in reader.pages:
        writer.add_page(page)
    # Write with empty metadata
    writer.add_metadata({
        "/Producer": "",
        "/Creator": "",
        "/Author": "",
        "/Title": "",
        "/Subject": "",
        "/Keywords": "",
    })
    with open(output, "wb") as f:
        writer.write(f)
    return output


# ── Reverse PDF Pages ───────────────────────────────────────
def reverse_pages(input_paths, output_path, options):
    from pypdf import PdfReader, PdfWriter
    output = output_path + ".pdf"
    reader = PdfReader(input_paths[0])
    writer = PdfWriter()
    for page in reversed(reader.pages):
        writer.add_page(page)
    with open(output, "wb") as f:
        writer.write(f)
    return output


# ── Grayscale PDF ───────────────────────────────────────────
def grayscale_pdf(input_paths, output_path, options):
    output = output_path + ".pdf"
    subprocess.run([
        "gs",
        "-sDEVICE=pdfwrite",
        "-dProcessColorModel=/DeviceGray",
        "-dColorConversionStrategy=/Gray",
        "-dPDFUseOldCMS=false",
        "-dNOPAUSE", "-dQUIET", "-dBATCH",
        f"-sOutputFile={output}",
        input_paths[0],
    ], check=True)
    return output


# ── Linearize PDF (web-optimize / fast open) ────────────────
def linearize_pdf(input_paths, output_path, options):
    output = output_path + ".pdf"
    subprocess.run([
        "qpdf", "--linearize", input_paths[0], output
    ], check=True)
    return output


# ── N-Up PDF (2 or 4 pages per sheet) ──────────────────────
# Options: {"n": 2}  — 2 or 4 pages per sheet (landscape A4)
def n_up_pdf(input_paths, output_path, options):
    import fitz
    from reportlab.pdfgen import canvas as rl_canvas
    from reportlab.lib.pagesizes import A4, landscape
    from io import BytesIO

    n = int(options.get("n", 2))
    if n not in (2, 4):
        n = 2

    output = output_path + ".pdf"
    src = fitz.open(input_paths[0])
    page_w, page_h = landscape(A4) if n == 2 else A4

    buf = BytesIO()
    c = rl_canvas.Canvas(buf, pagesize=(page_w, page_h))

    pages = list(src)
    chunk_size = n

    for chunk_start in range(0, len(pages), chunk_size):
        chunk = pages[chunk_start:chunk_start + chunk_size]
        cols = 2
        rows = (n // 2)
        cell_w = page_w / cols
        cell_h = page_h / rows

        for idx, page in enumerate(chunk):
            col = idx % cols
            row = idx // cols
            pix = page.get_pixmap(dpi=96)
            img_bytes = pix.tobytes("png")
            x = col * cell_w
            y = page_h - (row + 1) * cell_h
            from reportlab.lib.utils import ImageReader
            from PIL import Image as PILImage
            img = PILImage.open(BytesIO(img_bytes))
            img_reader = ImageReader(img)
            c.drawImage(img_reader, x, y, width=cell_w, height=cell_h,
                        preserveAspectRatio=True, anchor='c')

        c.showPage()
    c.save()

    with open(output, "wb") as f:
        f.write(buf.getvalue())
    return output


# ── Add Text to PDF ─────────────────────────────────────────
# Options: {"text": "Hello", "x": 100, "y": 100, "page": 1,
#           "font_size": 12, "color": [0,0,0]}
def add_text_to_pdf(input_paths, output_path, options):
    import fitz
    output = output_path + ".pdf"
    text = options.get("text", "")
    x = float(options.get("x", 100))
    y = float(options.get("y", 100))
    page_num = int(options.get("page", 1)) - 1
    font_size = float(options.get("font_size", 12))
    color = options.get("color", [0, 0, 0])
    r, g, b = [c / 255 for c in color]

    doc = fitz.open(input_paths[0])
    if 0 <= page_num < len(doc):
        page = doc[page_num]
        page.insert_text(
            (x, y), text,
            fontsize=font_size,
            color=(r, g, b),
        )
    doc.save(output)
    doc.close()
    return output


# ── PDF Info ────────────────────────────────────────────────
# Returns metadata + page count + file size as JSON (no output file)
# Special: returns dict, handler must detect and return as JSON directly
def pdf_info(input_paths, output_path, options):
    """
    Special tool — does NOT produce an output file.
    Returns a dict with metadata.
    Handler.py must handle this specially (see note in handler section).
    """
    import os
    from pypdf import PdfReader
    src = input_paths[0]
    reader = PdfReader(src, strict=False)
    meta = reader.metadata or {}
    info = {
        "page_count": len(reader.pages),
        "file_size_bytes": os.path.getsize(src),
        "file_size_kb": round(os.path.getsize(src) / 1024, 2),
        "title": meta.get("/Title", ""),
        "author": meta.get("/Author", ""),
        "creator": meta.get("/Creator", ""),
        "producer": meta.get("/Producer", ""),
        "subject": meta.get("/Subject", ""),
        "encrypted": reader.is_encrypted,
    }
    if reader.pages:
        page = reader.pages[0]
        mb = page.mediabox
        info["page_width_pt"] = float(mb.width)
        info["page_height_pt"] = float(mb.height)
        info["page_size_mm"] = {
            "width": round(float(mb.width) * 0.352778, 1),
            "height": round(float(mb.height) * 0.352778, 1),
        }
    return info  # ← returns dict, not path


# =============================================================
# INDIA-SPECIFIC TOOLS
# =============================================================

# ── Compress PDF to Exact Target Size ─────────────────────────
# Options: {"target_kb": 100}
# Returns the closest result to target_kb without exceeding it
def compress_to_size(input_paths, output_path, options):
    """
    Binary-search compression to hit an exact target file size.
    Primarily for Indian govt forms (UPSC, SSC, NEET, SBI) that
    have strict upload size limits like 100KB, 200KB, 500KB.
    """
    import os
    import io
    import fitz

    output = output_path + ".pdf"
    target_kb = int(options.get("target_kb", 200))
    target_bytes = target_kb * 1024
    src = input_paths[0]
    original_size = os.path.getsize(src)

    # If already under target, return as-is
    if original_size <= target_bytes:
        import shutil
        shutil.copy(src, output)
        return output

    best_result = None
    best_size = float("inf")

    # Binary search: try DPI values from 30 to 150
    dpi_low, dpi_high = 30, 150
    for _ in range(10):  # max 10 iterations
        dpi = (dpi_low + dpi_high) // 2
        jpeg_q = max(15, int(dpi / 2))

        try:
            doc = fitz.open(src)
            new_doc = fitz.open()
            zoom = dpi / 72
            mat = fitz.Matrix(zoom, zoom)

            for page in doc:
                pix = page.get_pixmap(matrix=mat, alpha=False)
                img_bytes = pix.tobytes("jpeg", jpg_quality=jpeg_q)
                new_page = new_doc.new_page(width=page.rect.width, height=page.rect.height)
                new_page.insert_image(new_page.rect, stream=img_bytes)

            buf = io.BytesIO()
            new_doc.save(buf, garbage=4, deflate=True)
            new_doc.close()
            doc.close()
            size = buf.tell()

            if size <= target_bytes:
                # Under target — go higher quality (higher DPI)
                if best_result is None or size > best_size:
                    best_result = buf.getvalue()
                    best_size = size
                dpi_low = dpi + 1
            else:
                # Over target — lower quality
                dpi_high = dpi - 1
        except Exception:
            dpi_high = dpi - 1

    if best_result:
        with open(output, "wb") as f:
            f.write(best_result)
    else:
        # Could not reach target — return most compressed version
        doc = fitz.open(src)
        new_doc = fitz.open()
        mat = fitz.Matrix(30 / 72, 30 / 72)
        for page in doc:
            pix = page.get_pixmap(matrix=mat, alpha=False)
            img_bytes = pix.tobytes("jpeg", jpg_quality=15)
            new_page = new_doc.new_page(width=page.rect.width, height=page.rect.height)
            new_page.insert_image(new_page.rect, stream=img_bytes)
        new_doc.save(output, garbage=4, deflate=True)
        new_doc.close()
        doc.close()

    return output


# ── Image Compress to Exact Size ───────────────────────────
# For Indian govt forms — photos must be < 20KB, 50KB etc.
# Options: {"target_kb": 50, "format": "jpg"}
def image_to_size(input_paths, output_path, options):
    from PIL import Image
    import os, io

    target_kb = int(options.get("target_kb", 50))
    target_bytes = target_kb * 1024
    fmt = options.get("format", "jpg").lower()
    pil_fmt = "JPEG" if fmt in ("jpg", "jpeg") else "PNG"
    out_ext = ".jpg" if pil_fmt == "JPEG" else ".png"
    output = output_path + out_ext

    img = Image.open(input_paths[0])
    if pil_fmt == "JPEG" and img.mode != "RGB":
        img = _open_image_rgb(input_paths[0])

    if pil_fmt == "PNG":
        # PNG: reduce dimensions until under size
        while True:
            buf = io.BytesIO()
            img.save(buf, "PNG", optimize=True)
            if buf.tell() <= target_bytes or img.width < 50:
                break
            img = img.resize(
                (int(img.width * 0.85), int(img.height * 0.85)),
                Image.LANCZOS
            )
        with open(output, "wb") as f:
            f.write(buf.getvalue())
        return output

    # JPEG: binary search quality
    q_low, q_high = 5, 95
    best_bytes = None
    for _ in range(12):
        q = (q_low + q_high) // 2
        buf = io.BytesIO()
        img.save(buf, "JPEG", quality=q, optimize=True)
        size = buf.tell()
        if size <= target_bytes:
            best_bytes = buf.getvalue()
            q_low = q + 1
        else:
            q_high = q - 1

    if best_bytes:
        with open(output, "wb") as f:
            f.write(best_bytes)
    else:
        # Still too big — downscale
        while True:
            buf = io.BytesIO()
            img.save(buf, "JPEG", quality=5, optimize=True)
            if buf.tell() <= target_bytes or img.width < 50:
                break
            img = img.resize(
                (int(img.width * 0.8), int(img.height * 0.8)),
                Image.LANCZOS
            )
        with open(output, "wb") as f:
            f.write(buf.getvalue())

    return output


# ── Resize to Passport / Visa Photo Size ───────────────────
# Options: {"size": "india_passport"|"us_passport"|"uk_visa"|"custom",
#           "width_mm": 35, "height_mm": 45, "dpi": 300}
PASSPORT_SIZES = {
    "india_passport": (35, 45),   # mm
    "us_passport":    (51, 51),
    "uk_visa":        (35, 45),
    "china_visa":     (33, 48),
    "schengen_visa":  (35, 45),
    "custom":         None,
}

def resize_to_passport(input_paths, output_path, options):
    from PIL import Image
    output = output_path + ".jpg"
    size_key = options.get("size", "india_passport")
    dpi = int(options.get("dpi", 300))

    if size_key == "custom":
        w_mm = float(options.get("width_mm", 35))
        h_mm = float(options.get("height_mm", 45))
    else:
        dims = PASSPORT_SIZES.get(size_key, (35, 45))
        w_mm, h_mm = dims

    # Convert mm to pixels at target DPI
    w_px = int(w_mm * dpi / 25.4)
    h_px = int(h_mm * dpi / 25.4)

    img = Image.open(input_paths[0]).convert("RGB")
    # Center-crop to target aspect ratio first
    target_ratio = w_px / h_px
    src_ratio = img.width / img.height
    if src_ratio > target_ratio:
        # Too wide — crop sides
        new_w = int(img.height * target_ratio)
        left = (img.width - new_w) // 2
        img = img.crop((left, 0, left + new_w, img.height))
    elif src_ratio < target_ratio:
        # Too tall — crop top/bottom
        new_h = int(img.width / target_ratio)
        top = (img.height - new_h) // 2
        img = img.crop((0, top, img.width, top + new_h))

    img = img.resize((w_px, h_px), Image.LANCZOS)
    img.save(output, "JPEG", quality=95, dpi=(dpi, dpi))
    return output
```

### 1.5 Handle pdf_info special case in handler.py

The `pdf_info` tool returns a dict instead of a file path. Add this check in `lambda_handler` right after calling `handler_fn`:

```python
# In handler.py lambda_handler, replace:
#   result_path = handler_fn(input_paths, output_path, options)
# With:

result = handler_fn(input_paths, output_path, options)

# pdf_info returns a dict, not a path
if isinstance(result, dict):
    return _resp(200, {"tool": tool, "info": result})

result_path = result
```

---

## PART 2 — Document Conversion Tools (EC2, async)

These go through the existing EC2 worker via SQS. Same pattern as existing heavy tools.

### 2.1 Add to lambda/easy_tools/job_creator.py HEAVY_TOOLS set

```python
HEAVY_TOOLS = {
    # existing
    "word-to-pdf", "ppt-to-pdf", "excel-to-pdf",
    "pdf-to-word", "pdf-to-ppt", "pdf-to-excel",
    "scan-to-pdf", "pdf-to-pdfa",
    # new
    "txt-to-pdf",
    "rtf-to-pdf",
    "odt-to-pdf",
    "csv-to-pdf",
    "epub-to-pdf",
    "md-to-pdf",
    "pdf-to-txt",
}
```

### 2.2 Add to ec2/worker.py TOOL_HANDLERS

```python
from converters import (
    # existing
    word_to_pdf, ppt_to_pdf, excel_to_pdf,
    pdf_to_word, pdf_to_ppt, pdf_to_excel,
    scan_to_pdf, pdf_to_pdfa,
    # new
    txt_to_pdf, rtf_to_pdf, odt_to_pdf,
    csv_to_pdf, epub_to_pdf, md_to_pdf, pdf_to_txt,
)

TOOL_HANDLERS = {
    # existing
    "word-to-pdf": word_to_pdf.convert,
    "ppt-to-pdf": ppt_to_pdf.convert,
    "excel-to-pdf": excel_to_pdf.convert,
    "pdf-to-word": pdf_to_word.convert,
    "pdf-to-ppt": pdf_to_ppt.convert,
    "pdf-to-excel": pdf_to_excel.convert,
    "scan-to-pdf": scan_to_pdf.convert,
    "pdf-to-pdfa": pdf_to_pdfa.convert,
    # new
    "txt-to-pdf":  txt_to_pdf.convert,
    "rtf-to-pdf":  rtf_to_pdf.convert,
    "odt-to-pdf":  odt_to_pdf.convert,
    "csv-to-pdf":  csv_to_pdf.convert,
    "epub-to-pdf": epub_to_pdf.convert,
    "md-to-pdf":   md_to_pdf.convert,
    "pdf-to-txt":  pdf_to_txt.convert,
}
```

### 2.3 New EC2 converter files — create each in ec2/converters/

---

**ec2/converters/txt_to_pdf.py**
```python
"""Plain text (.txt) → PDF via LibreOffice."""
import os
from ._libreoffice import libreoffice_convert

def convert(input_path, output_path, options):
    return libreoffice_convert(input_path, os.path.dirname(output_path), "pdf")
```

---

**ec2/converters/rtf_to_pdf.py**
```python
"""RTF → PDF via LibreOffice."""
import os
from ._libreoffice import libreoffice_convert

def convert(input_path, output_path, options):
    return libreoffice_convert(input_path, os.path.dirname(output_path), "pdf")
```

---

**ec2/converters/odt_to_pdf.py**
```python
"""ODT (OpenDocument Text) → PDF via LibreOffice."""
import os
from ._libreoffice import libreoffice_convert

def convert(input_path, output_path, options):
    return libreoffice_convert(input_path, os.path.dirname(output_path), "pdf")
```

---

**ec2/converters/csv_to_pdf.py**
```python
"""CSV → PDF via LibreOffice (formats as a spreadsheet)."""
import os
from ._libreoffice import libreoffice_convert

def convert(input_path, output_path, options):
    return libreoffice_convert(input_path, os.path.dirname(output_path), "pdf")
```

---

**ec2/converters/epub_to_pdf.py**
```python
"""
EPUB → PDF via Calibre ebook-convert.
Requires: apt-get install calibre on EC2.
"""
import subprocess, os

def convert(input_path, output_path, options):
    output = output_path + ".pdf"
    subprocess.run([
        "ebook-convert", input_path, output,
        "--paper-size", "a4",
        "--margin-top", "20",
        "--margin-bottom", "20",
        "--margin-left", "20",
        "--margin-right", "20",
    ], check=True, timeout=300, capture_output=True)
    return output
```

---

**ec2/converters/md_to_pdf.py**
```python
"""
Markdown → PDF via wkhtmltopdf.
Converts Markdown to HTML first (using Python-Markdown), then to PDF.
Requires: pip install markdown on EC2, wkhtmltopdf already installed.
"""
import subprocess, os, tempfile

def convert(input_path, output_path, options):
    import markdown as md_lib
    output = output_path + ".pdf"

    with open(input_path, "r", encoding="utf-8") as f:
        md_text = f.read()

    html_body = md_lib.markdown(md_text, extensions=["tables", "fenced_code"])
    html = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body {{ font-family: Georgia, serif; max-width: 800px; margin: 40px auto;
         padding: 0 20px; line-height: 1.6; color: #222; }}
  code {{ background: #f5f5f5; padding: 2px 6px; border-radius: 3px; font-size: 0.9em; }}
  pre {{ background: #f5f5f5; padding: 12px; border-radius: 4px; overflow-x: auto; }}
  table {{ border-collapse: collapse; width: 100%; }}
  th, td {{ border: 1px solid #ddd; padding: 8px; text-align: left; }}
  th {{ background: #f0f0f0; }}
  h1,h2,h3 {{ color: #111; }}
</style>
</head>
<body>{html_body}</body>
</html>"""

    with tempfile.NamedTemporaryFile(suffix=".html", mode="w",
                                     delete=False, encoding="utf-8") as tmp:
        tmp.write(html)
        tmp_path = tmp.name

    try:
        subprocess.run([
            "wkhtmltopdf", "--quiet",
            "--margin-top", "20mm", "--margin-bottom", "20mm",
            "--margin-left", "20mm", "--margin-right", "20mm",
            tmp_path, output,
        ], check=True, timeout=120)
    finally:
        os.unlink(tmp_path)
    return output
```

---

**ec2/converters/pdf_to_txt.py**
```python
"""PDF → plain text extraction via pypdf."""
import os

def convert(input_path, output_path, options):
    from pypdf import PdfReader
    output = output_path + ".txt"
    reader = PdfReader(input_path, strict=False)
    lines = []
    for i, page in enumerate(reader.pages):
        text = page.extract_text() or ""
        lines.append(f"--- Page {i+1} ---\n{text}")
    with open(output, "w", encoding="utf-8") as f:
        f.write("\n\n".join(lines))
    return output
```

### 2.4 Add to EC2 setup.sh pip install block

```bash
pip3 install --break-system-packages markdown
```

### 2.5 Update ec2/converters/__init__.py

```python
from . import (
    word_to_pdf, ppt_to_pdf, excel_to_pdf,
    pdf_to_word, pdf_to_ppt, pdf_to_excel,
    scan_to_pdf, pdf_to_pdfa,
    txt_to_pdf, rtf_to_pdf, odt_to_pdf,
    csv_to_pdf, epub_to_pdf, md_to_pdf, pdf_to_txt,
)
```

---

## PART 3 — API routes (Terraform)

The existing API Gateway already handles `/v1/tools/{tool}` and `/v1/jobs/{tool}` as catch-all routes with the path parameter. **No new Terraform routes are needed.** All new tools automatically work through the existing routes.

Just verify in `terraform/api_gateway.tf` that the `{tool}` path parameter is unrestricted (it is — no whitelist).

---

## PART 4 — Deploy sequence

Run these in order after making all code changes:

```bash
# Step 1: Rebuild Lambda layer (new packages: pillow-heif, PyMuPDF, cairosvg)
bash scripts/build_layer.sh

# Step 2: Apply terraform (updates Lambda function zip + layer)
cd terraform
terraform apply -target=aws_lambda_layer_version.pdf_tools
terraform apply -target=aws_lambda_function.easy_tools
terraform apply -target=aws_lambda_function.job_creator
cd ..

# Step 3: Deploy updated EC2 worker code
bash scripts/deploy_ec2.sh

# Step 4: Verify
EC2_IP=$(cd terraform && terraform output -raw ec2_public_ip)
ssh -i ~/.ssh/pdfninja-key.pem ubuntu@$EC2_IP "sudo systemctl status pdfninja --no-pager"
```

---

## PART 5 — Smoke tests

```bash
API=$(cd terraform && terraform output -raw api_url)

# PNG to JPG
UPLOAD=$(curl -s -X POST $API/v1/upload \
  -d '{"filename":"test.png","content_type":"image/png"}')
KEY=$(echo $UPLOAD | jq -r .file_key)
curl -X PUT --data-binary @/path/to/test.png \
  -H "Content-Type: image/png" "$(echo $UPLOAD | jq -r .upload_url)"
curl -X POST $API/v1/tools/png-to-jpg \
  -d "{\"file_key\":\"$KEY\",\"options\":{\"quality\":90}}"

# Compress PDF to 100KB
UPLOAD=$(curl -s -X POST $API/v1/upload \
  -d '{"filename":"big.pdf","content_type":"application/pdf"}')
KEY=$(echo $UPLOAD | jq -r .file_key)
curl -X PUT --data-binary @/path/to/big.pdf \
  -H "Content-Type: application/pdf" "$(echo $UPLOAD | jq -r .upload_url)"
curl -X POST $API/v1/tools/compress-to-size \
  -d "{\"file_key\":\"$KEY\",\"options\":{\"target_kb\":100}}"

# PDF info
UPLOAD=$(curl -s -X POST $API/v1/upload \
  -d '{"filename":"doc.pdf","content_type":"application/pdf"}')
KEY=$(echo $UPLOAD | jq -r .file_key)
curl -X PUT --data-binary @/path/to/doc.pdf \
  -H "Content-Type: application/pdf" "$(echo $UPLOAD | jq -r .upload_url)"
curl -X POST $API/v1/tools/pdf-info \
  -d "{\"file_key\":\"$KEY\"}"
# Should return page_count, dimensions, metadata — no download URL

# EPUB to PDF (async)
UPLOAD=$(curl -s -X POST $API/v1/upload \
  -d '{"filename":"book.epub","content_type":"application/epub+zip","prefix":"heavy-inputs"}')
KEY=$(echo $UPLOAD | jq -r .file_key)
curl -X PUT --data-binary @/path/to/book.epub \
  -H "Content-Type: application/epub+zip" "$(echo $UPLOAD | jq -r .upload_url)"
JOB=$(curl -s -X POST $API/v1/jobs/epub-to-pdf \
  -d "{\"file_key\":\"$KEY\"}")
JOB_ID=$(echo $JOB | jq -r .job_id)
sleep 30
curl -s $API/v1/jobs/status/$JOB_ID
```

---

## PART 6 — Complete tool list after this implementation

### Lambda sync tools — `/v1/tools/{tool}` (36 total)

**Existing PDF (14):**
merge, split, compress, rotate, watermark, protect, unlock, organize,
page-numbers, repair, crop, jpg-to-pdf, pdf-to-jpg, html-to-pdf

**New image conversion (15):**
png-to-jpg, jpg-to-png, webp-to-jpg, webp-to-png, jpg-to-webp,
png-to-webp, heic-to-jpg, heic-to-png, bmp-to-jpg, tiff-to-jpg,
svg-to-png, image-compress, image-resize, image-to-grayscale, pdf-to-png

**New PDF tools (7):**
delete-pages, extract-pages, pdf-to-tiff, flatten-pdf, remove-metadata,
reverse-pages, grayscale-pdf, linearize-pdf, n-up-pdf, add-text

**India-specific (4):**
compress-to-size, pdf-info, image-to-size, resize-to-passport

### EC2 async tools — `/v1/jobs/{tool}` (15 total)

**Existing (8):**
word-to-pdf, ppt-to-pdf, excel-to-pdf, pdf-to-word,
pdf-to-ppt, pdf-to-excel, scan-to-pdf, pdf-to-pdfa

**New (7):**
txt-to-pdf, rtf-to-pdf, odt-to-pdf, csv-to-pdf,
epub-to-pdf, md-to-pdf, pdf-to-txt

### OCR — `/v1/ocr` (1)

**Total: 52 tools**

---

## PART 7 — Allowed content types to add to upload_url.py

Add these to the `ALLOWED_CONTENT_TYPES` set:

```python
"image/webp",
"image/bmp",
"image/tiff",
"image/heic",
"image/heif",
"image/svg+xml",
"text/plain",
"text/html",
"text/csv",
"text/markdown",
"application/rtf",
"application/epub+zip",
"application/vnd.oasis.opendocument.text",
```

---

## PART 8 — Common issues and fixes

| Issue | Fix |
|---|---|
| `pillow-heif` import error on Lambda | Ensure libheif is in the Lambda layer. Add `apt-get install libheif-dev` to build_layer.sh Docker step |
| `cairosvg` import error | Ensure `libcairo2` and dependencies are in the Lambda layer — see Part 1 dependency note |
| `compress-to-size` returns file bigger than target | The binary search couldn't get under target. Add a client-side warning: "File too complex to compress to {X}KB — smallest achievable was {Y}KB" |
| EPUB to PDF fails on EC2 | `calibre` not installed. SSH into EC2 and run `sudo apt-get install -y calibre` manually, then redeploy |
| `pdf_info` returns download_url instead of info dict | You missed the `isinstance(result, dict)` check in handler.py — see Part 1.5 |
| `n-up-pdf` produces blank pages | fitz page rendering failed. Fallback: use `pdf2image` to render pages as images then reportlab to compose |
| `md-to-pdf` missing `markdown` package on EC2 | Run `pip3 install --break-system-packages markdown` on EC2, restart service |
| TIFF multi-frame produces ZIP but frontend expects single file | This is correct behavior — multi-page TIFFs produce a ZIP. Frontend should show ZIP download |

---

## Notes for the frontend developer

When the backend is done, hand this to the frontend dev:

1. All sync tools return `{ download_url, tool, expires_in: 3600 }` on success
2. `pdf-info` is the only exception — returns `{ tool, info: { page_count, file_size_kb, ... } }` with no download_url
3. Async tools follow: POST job → get `job_id` → poll `/v1/jobs/status/{id}` every 3 seconds → on `status: "complete"` show download_url
4. Image tools accept: jpg, jpeg, png, webp, bmp, tiff, heic, heif, svg
5. `compress-to-size` and `image-to-size` should have a preset picker on the frontend: 20KB / 50KB / 100KB / 200KB / 500KB / 1MB with a custom input
6. `resize-to-passport` should show a size preset dropdown: India Passport, US Passport, UK Visa, China Visa, Schengen Visa, Custom
7. `image-resize` should have px/percent toggle and width/height inputs with aspect ratio lock
8. Tools that return ZIP files: split, pdf-to-jpg, pdf-to-png (multi-page), tiff-to-jpg (multi-frame)
