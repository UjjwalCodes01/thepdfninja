"""Word (.doc, .docx) → PDF via LibreOffice."""

import os
from ._libreoffice import libreoffice_convert


def convert(input_path, output_path, options):
    output_dir = os.path.dirname(output_path)
    return libreoffice_convert(input_path, output_dir, "pdf")
