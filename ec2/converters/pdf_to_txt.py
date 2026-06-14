"""PDF → plain text extraction via pypdf."""


def convert(input_path, output_path, options):
    from pypdf import PdfReader
    output = output_path + ".txt"
    reader = PdfReader(input_path, strict=False)
    lines = []
    for i, page in enumerate(reader.pages):
        text = page.extract_text() or ""
        lines.append(f"--- Page {i+1} ---\n{text}")
    with open(output, "w", encoding="utf-8") as f:
        f.write("\n\n".join(lines))
    return output
