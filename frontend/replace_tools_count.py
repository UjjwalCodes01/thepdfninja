import os
import re

replacements = [
    (r'\b23 tools\b', '56 tools'),
    (r'\b23 PDF tools\b', '56 PDF tools'),
    (r'\b23 free\b', '56 free'),
    (r'\b23 Free\b', '56 Free'),
    (r"stat: '23'", "stat: '56'"),
    (r'\b23 \(all completely free\)', '56 (all completely free)'),
    (r'\b23 — all completely free\b', '56 — all completely free'),
    (r'\b23 premium-grade\b', '56 premium-grade'),
]

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    for pattern, replacement in replacements:
        new_content = re.sub(pattern, replacement, new_content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated: {filepath}")

for root, dirs, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            process_file(os.path.join(root, file))

