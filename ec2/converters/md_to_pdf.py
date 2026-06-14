"""
Markdown → PDF via wkhtmltopdf.
Converts Markdown to HTML first (using Python-Markdown), then to PDF.
Requires: pip install markdown on EC2, wkhtmltopdf already installed.
"""
import subprocess
import os
import tempfile


def convert(input_path, output_path, options):
    import markdown as md_lib
    output = output_path + ".pdf"

    with open(input_path, "r", encoding="utf-8") as f:
        md_text = f.read()

    html_body = md_lib.markdown(md_text, extensions=["tables", "fenced_code"])
    html = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body {{ font-family: Georgia, serif; max-width: 800px; margin: 40px auto;
         padding: 0 20px; line-height: 1.6; color: #222; }}
  code {{ background: #f5f5f5; padding: 2px 6px; border-radius: 3px; font-size: 0.9em; }}
  pre {{ background: #f5f5f5; padding: 12px; border-radius: 4px; overflow-x: auto; }}
  table {{ border-collapse: collapse; width: 100%; }}
  th, td {{ border: 1px solid #ddd; padding: 8px; text-align: left; }}
  th {{ background: #f0f0f0; }}
  h1,h2,h3 {{ color: #111; }}
</style>
</head>
<body>{html_body}</body>
</html>"""

    with tempfile.NamedTemporaryFile(suffix=".html", mode="w",
                                     delete=False, encoding="utf-8") as tmp:
        tmp.write(html)
        tmp_path = tmp.name

    try:
        subprocess.run([
            "wkhtmltopdf", "--quiet",
            "--margin-top", "20mm", "--margin-bottom", "20mm",
            "--margin-left", "20mm", "--margin-right", "20mm",
            tmp_path, output,
        ], check=True, timeout=120)
    finally:
        os.unlink(tmp_path)
    return output
