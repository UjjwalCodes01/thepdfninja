"""RTF → PDF via LibreOffice."""
import os
from ._libreoffice import libreoffice_convert


def convert(input_path, output_path, options):
    return libreoffice_convert(input_path, os.path.dirname(output_path), "pdf")
