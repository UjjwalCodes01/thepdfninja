"""
PDF → PDF/A (ISO 19005, long-term archival format)
Uses Ghostscript with PDFA preset.
"""

import subprocess


def convert(input_path, output_path, options):
    output = output_path + ".pdf"
    pdfa_level = options.get("level", "2")  # 1, 2, or 3

    subprocess.run([
        "gs",
        "-dPDFA=" + str(pdfa_level),
        "-dBATCH",
        "-dNOPAUSE",
        "-dQUIET",
        "-sColorConversionStrategy=UseDeviceIndependentColor",
        "-sDEVICE=pdfwrite",
        "-dPDFACompatibilityPolicy=1",
        f"-sOutputFile={output}",
        input_path,
    ], check=True)
    return output
