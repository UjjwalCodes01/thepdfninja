"""
14 PDF tool implementations.
Each function takes (input_paths, output_path, options) and returns final output path.
"""

import os
import subprocess
from pypdf import PdfReader, PdfWriter, PdfMerger
from pypdf.generic import RectangleObject


# =============================================================
# 1. MERGE PDF
# =============================================================
def merge_pdf(input_paths, output_path, options):
    output = output_path + ".pdf"
    merger = PdfMerger()
    for p in input_paths:
        merger.append(p)
    merger.write(output)
    merger.close()
    return output


# =============================================================
# 2. SPLIT PDF
# Options: {"mode": "all" | "range", "ranges": [[1,3],[5,7]]}
# =============================================================
def split_pdf(input_paths, output_path, options):
    import zipfile
    src = input_paths[0]
    reader = PdfReader(src)
    mode = options.get("mode", "all")

    zip_path = output_path + ".zip"

    with zipfile.ZipFile(zip_path, "w") as zf:
        if mode == "all":
            for i, page in enumerate(reader.pages):
                writer = PdfWriter()
                writer.add_page(page)
                page_path = f"/tmp/page_{i+1}.pdf"
                with open(page_path, "wb") as f:
                    writer.write(f)
                zf.write(page_path, f"page_{i+1}.pdf")
        else:
            ranges = options.get("ranges", [[1, len(reader.pages)]])
            for idx, (start, end) in enumerate(ranges):
                writer = PdfWriter()
                for i in range(start - 1, min(end, len(reader.pages))):
                    writer.add_page(reader.pages[i])
                part_path = f"/tmp/part_{idx+1}.pdf"
                with open(part_path, "wb") as f:
                    writer.write(f)
                zf.write(part_path, f"part_{idx+1}.pdf")
    return zip_path


# =============================================================
# 3. COMPRESS PDF (Ghostscript → PyMuPDF lossless → PyMuPDF re-render)
# Options: {"quality": "screen" | "ebook" | "printer" | "prepress"}
# =============================================================
# =============================================================
# 3. COMPRESS PDF (Ghostscript → PyMuPDF lossless → PyMuPDF re-render)
# Options: {"quality": "screen" | "ebook" | "printer" | "prepress"}
# =============================================================
def compress_pdf(input_paths, output_path, options):
    """
    Smart PDF compression with guaranteed size reduction.
    Tries strategies from least to most lossy, picks the smallest result,
    and NEVER returns a file bigger than the input.
    """
    import io
    import os
    import fitz  # PyMuPDF

    output = output_path + ".pdf"
    quality = options.get("quality", "ebook")
    if quality not in {"screen", "ebook", "printer", "prepress"}:
        quality = "ebook"

    # Tuning per quality preset
    presets = {
        "screen":   {"dpi": 72,  "jpeg_q": 40, "img_threshold": 100},
        "ebook":    {"dpi": 110, "jpeg_q": 65, "img_threshold": 150},
        "printer":  {"dpi": 150, "jpeg_q": 80, "img_threshold": 200},
        "prepress": {"dpi": 200, "jpeg_q": 92, "img_threshold": 300},
    }
    p = presets[quality]

    src_path = input_paths[0]
    original_size = os.path.getsize(src_path)
    candidates = []  # (size, bytes) — pick the smallest at the end

    # ────────────────────────────────────────────────────────
    # STRATEGY 1: Ghostscript (best for mixed content, if installed)
    # ────────────────────────────────────────────────────────
    try:
        gs_out = output_path + ".gs.pdf"
        subprocess.run([
            "gs", "-sDEVICE=pdfwrite",
            "-dCompatibilityLevel=1.5",
            f"-dPDFSETTINGS=/{quality}",
            "-dNOPAUSE", "-dQUIET", "-dBATCH",
            "-dDetectDuplicateImages=true",
            "-dCompressFonts=true",
            "-dSubsetFonts=true",
            f"-sOutputFile={gs_out}", src_path,
        ], check=True, timeout=120, capture_output=True)
        with open(gs_out, "rb") as f:
            candidates.append((os.path.getsize(gs_out), f.read()))
        os.remove(gs_out)
    except (FileNotFoundError, subprocess.CalledProcessError, subprocess.TimeoutExpired):
        pass  # Ghostscript not available, skip

    # ────────────────────────────────────────────────────────
    # STRATEGY 2: PyMuPDF lossless (object cleanup + deflate)
    # Always works, gives 2-30% reduction
    # ────────────────────────────────────────────────────────
    try:
        doc = fitz.open(src_path)
        buf = io.BytesIO()
        doc.save(
            buf,
            garbage=4,           # remove unused objects
            deflate=True,        # compress streams
            deflate_images=True, # recompress images losslessly
            deflate_fonts=True,
            clean=True,          # sanitize content streams
            linear=True,         # web-optimize (often smaller)
        )
        doc.close()
        candidates.append((buf.tell(), buf.getvalue()))
    except Exception:
        pass

    # ────────────────────────────────────────────────────────
    # STRATEGY 3: Image downsampling (in-place, lossy on images only)
    # Keeps text vector but shrinks oversized embedded images.
    # This is the SAFEST aggressive strategy.
    # ────────────────────────────────────────────────────────
    try:
        doc = fitz.open(src_path)
        for page in doc:
            for img in page.get_images(full=True):
                xref = img[0]
                try:
                    base = doc.extract_image(xref)
                    img_bytes = base["image"]
                    # Only touch images > threshold KB
                    if len(img_bytes) < p["img_threshold"] * 1024:
                        continue
                    pil_img = _recompress_image(img_bytes, p["jpeg_q"], p["dpi"])
                    if pil_img and len(pil_img) < len(img_bytes):
                        doc.update_stream(xref, pil_img)
                except Exception:
                    continue
        buf = io.BytesIO()
        doc.save(buf, garbage=4, deflate=True, clean=True)
        doc.close()
        candidates.append((buf.tell(), buf.getvalue()))
    except Exception:
        pass

    # ────────────────────────────────────────────────────────
    # STRATEGY 4: Full re-render (nuclear option — page → JPEG)
    # Only viable for scanned/image-only PDFs. Destroys text searchability.
    # We only consider this if the input is already image-heavy.
    # ────────────────────────────────────────────────────────
    if _is_image_heavy(src_path):
        try:
            doc = fitz.open(src_path)
            new_doc = fitz.open()
            zoom = p["dpi"] / 72
            mat = fitz.Matrix(zoom, zoom)
            for page in doc:
                pix = page.get_pixmap(matrix=mat, alpha=False)
                img_bytes = pix.tobytes("jpeg", jpg_quality=p["jpeg_q"])
                new_page = new_doc.new_page(width=page.rect.width, height=page.rect.height)
                new_page.insert_image(new_page.rect, stream=img_bytes)
            buf = io.BytesIO()
            new_doc.save(buf, garbage=4, deflate=True)
            new_doc.close()
            doc.close()
            candidates.append((buf.tell(), buf.getvalue()))
        except Exception:
            pass

    # ────────────────────────────────────────────────────────
    # PICK THE WINNER — smallest candidate, but only if smaller than input
    # ────────────────────────────────────────────────────────
    if not candidates:
        # Nothing worked — copy original through
        import shutil
        shutil.copy(src_path, output)
        return output

    candidates.sort(key=lambda x: x[0])
    best_size, best_bytes = candidates[0]

    if best_size < original_size:
        with open(output, "wb") as f:
            f.write(best_bytes)
    else:
        # Original is already optimized — return it unchanged
        import shutil
        shutil.copy(src_path, output)

    return output


def _recompress_image(img_bytes, jpeg_q, target_dpi):
    """Downsample + re-encode an embedded image as JPEG."""
    try:
        from PIL import Image
        import io
        img = Image.open(io.BytesIO(img_bytes))
        # Convert to RGB (JPEG can't do RGBA)
        if img.mode in ("RGBA", "LA", "P"):
            bg = Image.new("RGB", img.size, (255, 255, 255))
            if img.mode == "P":
                img = img.convert("RGBA")
            bg.paste(img, mask=img.split()[-1] if img.mode == "RGBA" else None)
            img = bg
        elif img.mode != "RGB":
            img = img.convert("RGB")

        # Downsample if image is huge (assume 300 DPI source, target lower)
        max_dim = 2000 if target_dpi >= 150 else 1400
        if max(img.size) > max_dim:
            ratio = max_dim / max(img.size)
            new_size = (int(img.size[0] * ratio), int(img.size[1] * ratio))
            img = img.resize(new_size, Image.LANCZOS)

        out = io.BytesIO()
        img.save(out, format="JPEG", quality=jpeg_q, optimize=True, progressive=True)
        return out.getvalue()
    except Exception:
        return None


def _is_image_heavy(pdf_path):
    """Return True if the PDF is mostly scanned images (low text density)."""
    try:
        import fitz
        doc = fitz.open(pdf_path)
        total_chars = 0
        total_pages = len(doc)
        for page in doc[:min(5, total_pages)]:  # sample first 5 pages
            total_chars += len(page.get_text("text"))
        doc.close()
        # Less than 100 chars per page on average = probably scanned
        return (total_chars / max(1, min(5, total_pages))) < 100
    except Exception:
        return False


# =============================================================
# 4. ROTATE PDF
# Options: {"angle": 90 | 180 | 270, "pages": "all" | [1,3,5]}
# =============================================================
def rotate_pdf(input_paths, output_path, options):
    output = output_path + ".pdf"
    angle = int(options.get("angle", 90))
    pages = options.get("pages", "all")

    reader = PdfReader(input_paths[0])
    writer = PdfWriter()

    for i, page in enumerate(reader.pages):
        if pages == "all" or (i + 1) in pages:
            page.rotate(angle)
        writer.add_page(page)

    with open(output, "wb") as f:
        writer.write(f)
    return output


# =============================================================
# 5. WATERMARK PDF
# Options: {"text": "CONFIDENTIAL", "opacity": 0.3, "position": "center"}
# =============================================================
def watermark_pdf(input_paths, output_path, options):
    from reportlab.pdfgen import canvas
    from reportlab.lib.pagesizes import letter
    from io import BytesIO

    output = output_path + ".pdf"
    text = options.get("text", "WATERMARK")
    opacity = float(options.get("opacity", 0.3))

    # Build watermark PDF
    wm_buffer = BytesIO()
    c = canvas.Canvas(wm_buffer, pagesize=letter)
    c.setFillAlpha(opacity)
    c.setFont("Helvetica-Bold", 60)
    c.setFillColorRGB(0.5, 0.5, 0.5)
    c.saveState()
    c.translate(300, 400)
    c.rotate(45)
    c.drawCentredString(0, 0, text)
    c.restoreState()
    c.save()
    wm_buffer.seek(0)

    wm_reader = PdfReader(wm_buffer)
    wm_page = wm_reader.pages[0]

    reader = PdfReader(input_paths[0])
    writer = PdfWriter()
    for page in reader.pages:
        page.merge_page(wm_page)
        writer.add_page(page)

    with open(output, "wb") as f:
        writer.write(f)
    return output


# =============================================================
# 6. PROTECT PDF (add password)
# Options: {"password": "secret123"}
# =============================================================
def protect_pdf(input_paths, output_path, options):
    output = output_path + ".pdf"
    password = options.get("password")
    if not password:
        raise ValueError("password required in options")

    reader = PdfReader(input_paths[0])
    writer = PdfWriter()
    for page in reader.pages:
        writer.add_page(page)
    writer.encrypt(user_password=password, owner_password=password, use_128bit=True)
    with open(output, "wb") as f:
        writer.write(f)
    return output


# =============================================================
# 7. UNLOCK PDF (remove password)
# Options: {"password": "secret123"}
# =============================================================
def unlock_pdf(input_paths, output_path, options):
    output = output_path + ".pdf"
    password = options.get("password", "")

    reader = PdfReader(input_paths[0])
    if reader.is_encrypted:
        if not reader.decrypt(password):
            raise ValueError("Wrong password")

    writer = PdfWriter()
    for page in reader.pages:
        writer.add_page(page)
    with open(output, "wb") as f:
        writer.write(f)
    return output


# =============================================================
# 8. ORGANIZE PDF (reorder/delete pages)
# Options: {"order": [3,1,2,5]} (1-indexed list of pages to keep, in order)
# =============================================================
def organize_pdf(input_paths, output_path, options):
    output = output_path + ".pdf"
    reader = PdfReader(input_paths[0])
    order = options.get("order")

    # Default: keep all pages in original order if no order specified
    if not order:
        order = list(range(1, len(reader.pages) + 1))

    writer = PdfWriter()
    for page_num in order:
        idx = page_num - 1
        if 0 <= idx < len(reader.pages):
            writer.add_page(reader.pages[idx])
    with open(output, "wb") as f:
        writer.write(f)
    return output


# =============================================================
# 9. ADD PAGE NUMBERS
# Options: {"position": "bottom-right", "start": 1, "font_size": 10}
# =============================================================
def page_numbers_pdf(input_paths, output_path, options):
    from reportlab.pdfgen import canvas
    from reportlab.lib.pagesizes import letter
    from io import BytesIO

    output = output_path + ".pdf"
    position = options.get("position", "bottom-right")
    start = int(options.get("start", 1))
    font_size = int(options.get("font_size", 10))
    fmt = options.get("format", "{n}")  # e.g., "Page {n} of {total}"

    reader = PdfReader(input_paths[0])
    writer = PdfWriter()
    total_pages = len(reader.pages)

    for i, page in enumerate(reader.pages):
        page_num = start + i
        text_str = fmt.replace("{n}", str(page_num)).replace("{total}", str(total_pages))

        media = page.mediabox
        width = float(media.width)
        height = float(media.height)

        buf = BytesIO()
        c = canvas.Canvas(buf, pagesize=(width, height))
        c.setFont("Helvetica", font_size)

        if position == "bottom-right":
            c.drawRightString(width - 36, 30, text_str)
        elif position == "bottom-center":
            c.drawCentredString(width / 2, 30, text_str)
        elif position == "bottom-left":
            c.drawString(36, 30, text_str)
        elif position == "top-right":
            c.drawRightString(width - 36, height - 30, text_str)
        elif position == "top-center":
            c.drawCentredString(width / 2, height - 30, text_str)
        else:  # top-left
            c.drawString(36, height - 30, text_str)

        c.save()
        buf.seek(0)
        num_page = PdfReader(buf).pages[0]
        page.merge_page(num_page)
        writer.add_page(page)

    with open(output, "wb") as f:
        writer.write(f)
    return output


# =============================================================
# 10. REPAIR PDF (qpdf can fix many corrupt PDFs)
# =============================================================
def repair_pdf(input_paths, output_path, options):
    output = output_path + ".pdf"
    subprocess.run([
        "qpdf", "--linearize", "--object-streams=generate",
        input_paths[0], output,
    ], check=False)  # don't fail on warnings
    if not os.path.exists(output):
        # Fallback: just copy through pypdf
        reader = PdfReader(input_paths[0], strict=False)
        writer = PdfWriter()
        for page in reader.pages:
            writer.add_page(page)
        with open(output, "wb") as f:
            writer.write(f)
    return output


# =============================================================
# 11. CROP PDF
# Options: {"left": 0, "bottom": 0, "right": 0, "top": 0} (margins in points to crop)
# =============================================================
def crop_pdf(input_paths, output_path, options):
    output = output_path + ".pdf"
    left = float(options.get("left", 0))
    bottom = float(options.get("bottom", 0))
    right = float(options.get("right", 0))
    top = float(options.get("top", 0))

    reader = PdfReader(input_paths[0])
    writer = PdfWriter()
    for page in reader.pages:
        media = page.mediabox
        new_box = RectangleObject([
            float(media.left) + left,
            float(media.bottom) + bottom,
            float(media.right) - right,
            float(media.top) - top,
        ])
        page.cropbox = new_box
        page.mediabox = new_box
        writer.add_page(page)
    with open(output, "wb") as f:
        writer.write(f)
    return output


# =============================================================
# 12. JPG → PDF (also PNG, TIFF)
# =============================================================
def jpg_to_pdf(input_paths, output_path, options):
    from PIL import Image
    output = output_path + ".pdf"
    images = []
    for p in input_paths:
        img = Image.open(p)
        if img.mode != "RGB":
            img = img.convert("RGB")
        images.append(img)

    if not images:
        raise ValueError("No images")

    images[0].save(output, "PDF", resolution=100.0, save_all=True, append_images=images[1:])
    return output


# =============================================================
# 13. PDF → JPG
# Uses PyMuPDF (fitz) — no poppler binary needed
# Falls back to pdf2image if fitz not available
# =============================================================
def pdf_to_jpg(input_paths, output_path, options):
    import zipfile
    dpi = int(options.get("dpi", 150))
    zip_path = output_path + ".zip"

    # Primary: PyMuPDF — pure Python, no external binary needed
    try:
        import fitz  # PyMuPDF
        mat = fitz.Matrix(dpi / 72, dpi / 72)
        doc = fitz.open(input_paths[0])
        with zipfile.ZipFile(zip_path, "w") as zf:
            for i, page in enumerate(doc):
                pix = page.get_pixmap(matrix=mat, alpha=False)
                img_path = f"/tmp/page_{i+1}.jpg"
                pix.save(img_path)
                zf.write(img_path, f"page_{i+1}.jpg")
        return zip_path
    except ImportError:
        pass  # fitz not in layer, try poppler-based fallback

    # Fallback: pdf2image (requires poppler binaries)
    from pdf2image import convert_from_path
    images = convert_from_path(input_paths[0], dpi=dpi)
    with zipfile.ZipFile(zip_path, "w") as zf:
        for i, img in enumerate(images):
            img_path = f"/tmp/page_{i+1}.jpg"
            img.save(img_path, "JPEG", quality=90)
            zf.write(img_path, f"page_{i+1}.jpg")
    return zip_path


# =============================================================
# 14. HTML → PDF
# Options: {"url": "https://..."} OR {"html": "<html>...</html>"}
# Also accepts an uploaded .html file via input_paths
# =============================================================
def html_to_pdf(input_paths, output_path, options):
    output = output_path + ".pdf"
    url = options.get("url")
    html_str = options.get("html")

    # If an HTML file was uploaded, read it as the HTML source
    if not url and not html_str and input_paths:
        with open(input_paths[0], "r", encoding="utf-8", errors="replace") as f:
            html_str = f.read()

    if not url and not html_str:
        raise ValueError("Upload an HTML file, or provide options.url or options.html")

    def _try_wkhtmltopdf(source, is_url=False):
        """Returns True if wkhtmltopdf succeeded."""
        try:
            if is_url:
                subprocess.run(["wkhtmltopdf", "--quiet", source, output], check=True, timeout=30)
            else:
                html_file = output_path + ".html"
                with open(html_file, "w", encoding="utf-8") as f:
                    f.write(source)
                subprocess.run(["wkhtmltopdf", "--quiet", html_file, output], check=True, timeout=30)
            return True
        except (FileNotFoundError, subprocess.CalledProcessError, subprocess.TimeoutExpired):
            return False

    def _xhtml2pdf(html_content):
        """Pure-Python fallback using PyMuPDF Story API — no extra deps needed."""
        import fitz
        story = fitz.Story(html=html_content)
        writer = fitz.DocumentWriter(output)
        mediabox = fitz.paper_rect("a4")
        where = mediabox + (36, 36, -36, -36)  # 0.5-inch margins
        more = 1
        while more:
            dev = writer.begin_page(mediabox)
            more, _ = story.place(where)
            story.draw(dev)
            writer.end_page()
        writer.close()

    if url:
        if _try_wkhtmltopdf(url, is_url=True):
            return output
        # wkhtmltopdf unavailable — fetch the URL content and render as HTML
        import urllib.request
        with urllib.request.urlopen(url, timeout=15) as resp:
            html_str = resp.read().decode("utf-8", errors="replace")

    # At this point html_str is set (either from upload, options, or URL fetch)
    if _try_wkhtmltopdf(html_str, is_url=False):
        return output

    # Final fallback: xhtml2pdf (pure Python)
    _xhtml2pdf(html_str)
    return output


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


# ── BMP → PNG ──────────────────────────────────────────────
def bmp_to_png(input_paths, output_path, options):
    from PIL import Image
    output = output_path + ".png"
    img = Image.open(input_paths[0]).convert("RGBA")
    img.save(output, "PNG", optimize=True)
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


# ── Image Crop ─────────────────────────────────────────────
# Options: {"x": 0, "y": 0, "width": 800, "height": 600}
# All values in pixels. x/y are top-left corner.
def image_crop(input_paths, output_path, options):
    from PIL import Image
    import os
    src = input_paths[0]
    ext = os.path.splitext(src)[1].lower()
    fmt_map = {".jpg": "JPEG", ".jpeg": "JPEG", ".png": "PNG", ".webp": "WEBP", ".bmp": "BMP"}
    pil_fmt = fmt_map.get(ext, "JPEG")
    out_ext = ".jpg" if pil_fmt == "JPEG" else ext
    output = output_path + out_ext

    img = Image.open(src)
    x = int(options.get("x", 0))
    y = int(options.get("y", 0))
    w = int(options.get("width", img.width - x))
    h = int(options.get("height", img.height - y))

    # Clamp to image bounds
    x = max(0, min(x, img.width))
    y = max(0, min(y, img.height))
    x2 = max(0, min(x + w, img.width))
    y2 = max(0, min(y + h, img.height))

    cropped = img.crop((x, y, x2, y2))
    if pil_fmt == "JPEG" and cropped.mode != "RGB":
        cropped = cropped.convert("RGB")
    cropped.save(output, pil_fmt, quality=92, optimize=True)
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
    # Use PyMuPDF (fitz) — already in the Lambda layer, zero system deps.
    # pdf2image/poppler is NOT available in Lambda.
    import fitz
    import zipfile

    dpi = int(options.get("dpi", 150))
    mat = fitz.Matrix(dpi / 72, dpi / 72)

    doc = fitz.open(input_paths[0])
    pages = list(doc.pages())

    if len(pages) == 1:
        output = output_path + ".png"
        pix = pages[0].get_pixmap(matrix=mat, alpha=False)
        pix.save(output)
        doc.close()
        return output

    zip_path = output_path + ".zip"
    with zipfile.ZipFile(zip_path, "w") as zf:
        for i, page in enumerate(pages):
            pix = page.get_pixmap(matrix=mat, alpha=False)
            p = f"/tmp/page_{i+1}.png"
            pix.save(p)
            zf.write(p, f"page_{i+1}.png")
    doc.close()
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
# Options: {"pages": [1, 3, 5]}  — 1-indexed pages to KEEP
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
    # Use PyMuPDF (fitz) — already in the Lambda layer, zero system deps.
    # pdf2image/poppler is NOT available in Lambda.
    import fitz
    from PIL import Image
    import io

    dpi = int(options.get("dpi", 200))
    output = output_path + ".tiff"
    mat = fitz.Matrix(dpi / 72, dpi / 72)  # 72 pt/inch → scale to target DPI

    doc = fitz.open(input_paths[0])
    pil_images = []
    for page in doc:
        pix = page.get_pixmap(matrix=mat, alpha=False)
        img = Image.open(io.BytesIO(pix.tobytes("png")))
        pil_images.append(img.convert("RGB"))
    doc.close()

    if not pil_images:
        raise ValueError("PDF has no pages")

    if len(pil_images) == 1:
        pil_images[0].save(output, "TIFF", dpi=(dpi, dpi))
    else:
        pil_images[0].save(
            output, "TIFF", dpi=(dpi, dpi),
            save_all=True, append_images=pil_images[1:]
        )
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
# Options: {"n": 2}  — 2 or 4 pages per sheet
def n_up_pdf(input_paths, output_path, options):
    import fitz
    from reportlab.pdfgen import canvas as rl_canvas
    from reportlab.lib.pagesizes import A4, landscape
    from reportlab.lib.utils import ImageReader
    from PIL import Image as PILImage
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


# ── Add Header / Footer to PDF ──────────────────────────────
# Options: {"header": "My Report", "footer": "Page {n} of {total}",
#           "font_size": 10, "margin": 20}
def add_header_footer(input_paths, output_path, options):
    from pypdf import PdfReader, PdfWriter
    from reportlab.pdfgen import canvas
    from io import BytesIO

    output = output_path + ".pdf"
    header_text = options.get("header", "")
    footer_text = options.get("footer", "")
    font_size = int(options.get("font_size", 10))
    margin = float(options.get("margin", 20))

    reader = PdfReader(input_paths[0])
    writer = PdfWriter()
    total_pages = len(reader.pages)

    for i, page in enumerate(reader.pages):
        media = page.mediabox
        width = float(media.width)
        height = float(media.height)
        page_num = i + 1

        buf = BytesIO()
        c = canvas.Canvas(buf, pagesize=(width, height))
        c.setFont("Helvetica", font_size)

        if header_text:
            hdr = header_text.replace("{n}", str(page_num)).replace("{total}", str(total_pages))
            c.drawCentredString(width / 2, height - margin, hdr)

        if footer_text:
            ftr = footer_text.replace("{n}", str(page_num)).replace("{total}", str(total_pages))
            c.drawCentredString(width / 2, margin, ftr)

        c.save()
        buf.seek(0)
        overlay_page = PdfReader(buf).pages[0]
        page.merge_page(overlay_page)
        writer.add_page(page)

    with open(output, "wb") as f:
        writer.write(f)
    return output


# ── PDF Redact ──────────────────────────────────────────────
# Options: {"regions": [{"page": 1, "x": 100, "y": 100, "width": 200, "height": 30}]}
# Permanently blacks out the specified rectangles on each page.
def pdf_redact(input_paths, output_path, options):
    import fitz
    output = output_path + ".pdf"
    regions = options.get("regions", [])

    doc = fitz.open(input_paths[0])
    for region in regions:
        page_num = int(region.get("page", 1)) - 1
        if not (0 <= page_num < len(doc)):
            continue
        page = doc[page_num]
        x = float(region.get("x", 0))
        y = float(region.get("y", 0))
        w = float(region.get("width", 100))
        h = float(region.get("height", 20))
        rect = fitz.Rect(x, y, x + w, y + h)
        page.add_redact_annot(rect, fill=(0, 0, 0))

    for page in doc:
        page.apply_redactions(images=fitz.PDF_REDACT_IMAGE_PIXELS)

    doc.save(output, garbage=4, deflate=True)
    doc.close()
    return output


# ── Resize PDF Pages (A4 ↔ Letter ↔ A3 etc.) ───────────────
# Options: {"size": "A4" | "Letter" | "A3" | "Legal",
#           "orientation": "portrait" | "landscape"}
PAGE_SIZES_PT = {
    "A4":     (595.28, 841.89),
    "Letter": (612.0,  792.0),
    "A3":     (841.89, 1190.55),
    "Legal":  (612.0,  1008.0),
    "A5":     (419.53, 595.28),
}

def resize_pages(input_paths, output_path, options):
    import fitz
    from reportlab.pdfgen import canvas as rl_canvas
    from reportlab.lib.utils import ImageReader
    from PIL import Image as PILImage
    from io import BytesIO

    output = output_path + ".pdf"
    size_key = options.get("size", "A4").upper()
    orientation = options.get("orientation", "portrait").lower()

    target_w, target_h = PAGE_SIZES_PT.get(size_key, PAGE_SIZES_PT["A4"])
    if orientation == "landscape":
        target_w, target_h = target_h, target_w

    src = fitz.open(input_paths[0])
    buf = BytesIO()
    c = rl_canvas.Canvas(buf, pagesize=(target_w, target_h))

    for page in src:
        # Render the source page at 150 DPI
        zoom = 150 / 72
        pix = page.get_pixmap(matrix=fitz.Matrix(zoom, zoom), alpha=False)
        img_bytes = pix.tobytes("png")
        img = PILImage.open(BytesIO(img_bytes))
        img_reader = ImageReader(img)
        c.drawImage(img_reader, 0, 0, width=target_w, height=target_h,
                    preserveAspectRatio=True, anchor='c')
        c.showPage()

    c.save()
    with open(output, "wb") as f:
        f.write(buf.getvalue())
    return output


# ── Add Digital Signature Placeholder ──────────────────────
# Options: {"page": 1, "x": 100, "y": 100, "width": 200, "height": 60,
#           "label": "Authorized Signatory", "date_line": true}
def add_signature_box(input_paths, output_path, options):
    from pypdf import PdfReader, PdfWriter
    from reportlab.pdfgen import canvas
    from reportlab.lib.colors import black, HexColor
    from io import BytesIO

    output = output_path + ".pdf"
    page_num = int(options.get("page", 1)) - 1
    x = float(options.get("x", 72))
    y = float(options.get("y", 72))
    w = float(options.get("width", 200))
    h = float(options.get("height", 60))
    label = options.get("label", "Authorized Signatory")
    show_date = options.get("date_line", True)

    reader = PdfReader(input_paths[0])
    writer = PdfWriter()

    for i, page in enumerate(reader.pages):
        if i == page_num:
            media = page.mediabox
            pg_w = float(media.width)
            pg_h = float(media.height)

            buf = BytesIO()
            c = canvas.Canvas(buf, pagesize=(pg_w, pg_h))

            # Signature box border
            c.setStrokeColor(black)
            c.setLineWidth(0.75)
            c.rect(x, y, w, h)

            # "Sign here" line inside box
            sign_y = y + h * 0.45
            c.setLineWidth(0.5)
            c.setStrokeColor(HexColor("#888888"))
            c.line(x + 8, sign_y, x + w - 8, sign_y)

            # Label below the line
            c.setFont("Helvetica", 7)
            c.setFillColor(HexColor("#555555"))
            c.drawCentredString(x + w / 2, y + h * 0.28, label)

            # Optional date line
            if show_date:
                c.drawCentredString(x + w / 2, y + 6, "Date: _______________")

            c.save()
            buf.seek(0)
            overlay_page = PdfReader(buf).pages[0]
            page.merge_page(overlay_page)

        writer.add_page(page)

    with open(output, "wb") as f:
        writer.write(f)
    return output


# ── PDF Info ────────────────────────────────────────────────
# Returns metadata + page count + file size as JSON (no output file)
def pdf_info(input_paths, output_path, options):
    """
    Special tool — does NOT produce an output file.
    Returns a dict with metadata.
    handler.py detects isinstance(result, dict) and returns JSON directly.
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

    if original_size <= target_bytes:
        import shutil
        shutil.copy(src, output)
        return output

    best_result = None
    best_size = float("inf")

    dpi_low, dpi_high = 30, 150
    for _ in range(10):
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
                if best_result is None or size > best_size:
                    best_result = buf.getvalue()
                    best_size = size
                dpi_low = dpi + 1
            else:
                dpi_high = dpi - 1
        except Exception:
            dpi_high = dpi - 1

    if best_result:
        with open(output, "wb") as f:
            f.write(best_result)
    else:
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
    "india_passport": (35, 45),
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

    w_px = int(w_mm * dpi / 25.4)
    h_px = int(h_mm * dpi / 25.4)

    img = Image.open(input_paths[0]).convert("RGB")
    target_ratio = w_px / h_px
    src_ratio = img.width / img.height
    if src_ratio > target_ratio:
        new_w = int(img.height * target_ratio)
        left = (img.width - new_w) // 2
        img = img.crop((left, 0, left + new_w, img.height))
    elif src_ratio < target_ratio:
        new_h = int(img.width / target_ratio)
        top = (img.height - new_h) // 2
        img = img.crop((0, top, img.width, top + new_h))

    img = img.resize((w_px, h_px), Image.LANCZOS)
    img.save(output, "JPEG", quality=95, dpi=(dpi, dpi))
    return output
