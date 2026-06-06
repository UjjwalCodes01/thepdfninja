"""
Shared LibreOffice helper.
LibreOffice headless converts between Office formats and PDF.
"""

import os
import subprocess
import shutil


def libreoffice_convert(input_path, output_dir, target_format):
    """
    Run: libreoffice --headless --convert-to <format> --outdir <dir> <file>
    Returns: path to converted output.
    """
    # Use unique user profile to avoid lock conflicts between concurrent runs
    profile = f"/tmp/lo_profile_{os.getpid()}_{os.urandom(4).hex()}"
    os.makedirs(profile, exist_ok=True)

    try:
        result = subprocess.run([
            "libreoffice",
            "--headless",
            f"-env:UserInstallation=file://{profile}",
            "--convert-to", target_format,
            "--outdir", output_dir,
            input_path,
        ], capture_output=True, text=True, timeout=300)

        if result.returncode != 0:
            raise RuntimeError(f"LibreOffice failed: {result.stderr}")

        # Find output file
        base = os.path.splitext(os.path.basename(input_path))[0]
        # target_format can be "pdf" or "docx:..." - extract extension
        ext = target_format.split(":")[0]
        output_file = os.path.join(output_dir, f"{base}.{ext}")

        if not os.path.exists(output_file):
            raise RuntimeError(f"Output not found: {output_file}")

        return output_file

    finally:
        shutil.rmtree(profile, ignore_errors=True)
