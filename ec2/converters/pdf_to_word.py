"""
PDF → Word (.docx)
Uses pdf2docx which gives the best open-source quality (~70-85% layout fidelity).
"""

from pdf2docx import Converter


def convert(input_path, output_path, options):
    output = output_path + ".docx"
    cv = Converter(input_path)
    cv.convert(output, start=0, end=None)
    cv.close()
    return output
