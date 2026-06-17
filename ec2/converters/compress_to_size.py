"""
Compress PDF to Exact Target Size
Options: {"target_kb": 200}

Binary-search compression to hit an exact target file size.
Primarily for Indian govt forms (UPSC, SSC, NEET, SBI, IRCTC, Passport Seva)
that have strict upload size limits like 100KB, 200KB, 500KB.
"""

import os
import io
import shutil
import fitz  # PyMuPDF


def run(input_path: str, output_path: str, options: dict) -> str:
    target_kb = int(options.get("target_kb", 200))
    target_bytes = target_kb * 1024
    original_size = os.path.getsize(input_path)

    # Already under the target — just copy it out
    if original_size <= target_bytes:
        shutil.copy(input_path, output_path)
        return output_path

    # First, try a lossless \"light\" compression (just cleaning up garbage and deflating)
    light_buf = io.BytesIO()
    doc_light = fitz.open(input_path)
    doc_light.save(light_buf, garbage=4, deflate=True, clean=True)
    doc_light.close()
    
    light_size = light_buf.tell()
    if light_size <= target_bytes:
        with open(output_path, "wb") as f:
            f.write(light_buf.getvalue())
        return output_path

    best_result = None
    best_size = float("inf")

    dpi_low, dpi_high = 30, 150
    for _ in range(12):
        dpi = (dpi_low + dpi_high) // 2
        jpeg_q = max(15, int(dpi / 2))

        buf = io.BytesIO()
        doc = fitz.open(input_path)
        out_doc = fitz.open()
        
        zoom = dpi / 72
        mat = fitz.Matrix(zoom, zoom)
        
        for page in doc:
            pix = page.get_pixmap(matrix=mat, alpha=False)
            img_bytes = pix.tobytes("jpeg", jpg_quality=jpeg_q)
            new_page = out_doc.new_page(width=page.rect.width, height=page.rect.height)
            new_page.insert_image(new_page.rect, stream=img_bytes)

        out_doc.save(
            buf,
            deflate=True,
            garbage=4,
            clean=True,
        )
        doc.close()
        out_doc.close()

        size = buf.tell()

        # Track the smallest size we've seen, even if it doesn't hit the target
        if size < best_size:
            best_size = size
            best_result = buf.getvalue()

        if size <= target_bytes:
            dpi_low = dpi + 1  # Try higher quality
        else:
            dpi_high = dpi - 1  # Need to compress more

        if dpi_low > dpi_high:
            break

    # Final check: if even the rasterized version is larger than our light compression,
    # or larger than the original file, fallback to the light compression.
    if best_size > min(original_size, light_size):
        if light_size < original_size:
            with open(output_path, "wb") as f:
                f.write(light_buf.getvalue())
        else:
            shutil.copy(input_path, output_path)
    else:
        with open(output_path, "wb") as f:
            f.write(best_result)

    return output_path
