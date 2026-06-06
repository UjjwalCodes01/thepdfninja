"""
Scan → PDF
Takes images from phone camera scans (JPG/PNG), enhances them, combines into PDF.
Applies grayscale + contrast boost to mimic real scanned documents.
"""

from PIL import Image, ImageOps, ImageEnhance


def convert(input_path, output_path, options):
    output = output_path + ".pdf"
    enhance = options.get("enhance", True)

    img = Image.open(input_path)
    if img.mode != "RGB":
        img = img.convert("RGB")

    if enhance:
        # Mimic scanner: grayscale + autocontrast + sharpen
        gray = ImageOps.grayscale(img)
        gray = ImageOps.autocontrast(gray, cutoff=2)
        enhancer = ImageEnhance.Sharpness(gray)
        gray = enhancer.enhance(2.0)
        img = gray.convert("RGB")

    img.save(output, "PDF", resolution=200.0)
    return output
