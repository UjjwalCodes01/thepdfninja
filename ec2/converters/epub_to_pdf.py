"""
EPUB → PDF via Calibre ebook-convert.
Requires: apt-get install calibre on EC2 (added to setup.sh).
"""
import subprocess
import os


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
