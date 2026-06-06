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
# 3. COMPRESS PDF (Ghostscript with pypdf fallback)
# Options: {"quality": "screen" | "ebook" | "printer" | "prepress"}
# =============================================================
def compress_pdf(input_paths, output_path, options):
    output = output_path + ".pdf"
    quality = options.get("quality", "ebook")
    valid = {"screen", "ebook", "printer", "prepress"}
    if quality not in valid:
        quality = "ebook"

    # Try Ghostscript first (best compression)
    try:
        subprocess.run([
            "gs", "-sDEVICE=pdfwrite", "-dCompatibilityLevel=1.4",
            f"-dPDFSETTINGS=/{quality}",
            "-dNOPAUSE", "-dQUIET", "-dBATCH",
            f"-sOutputFile={output}",
            input_paths[0],
        ], check=True)
        return output
    except (FileNotFoundError, subprocess.CalledProcessError):
        pass  # gs not available, use pypdf fallback

    # Fallback: pypdf page-copy (Deflate compression applied automatically by writer)
    reader = PdfReader(input_paths[0])
    writer = PdfWriter()
    for page in reader.pages:
        writer.add_page(page)
    with open(output, "wb") as f:
        writer.write(f)
    return output


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
        """Pure-Python fallback — no binary deps needed."""
        from xhtml2pdf import pisa
        with open(output, "wb") as f:
            result = pisa.CreatePDF(html_content, dest=f)
        if result.err:
            raise RuntimeError("xhtml2pdf encountered errors rendering the HTML")

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
