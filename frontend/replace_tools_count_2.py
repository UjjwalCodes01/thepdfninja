import os
import re

replacements = [
    (r'\boffer 23 complex tools\b', 'offer 56 complex tools'),
    (r'\bView All 23 Tools\b', 'View All 56 Tools'),
    (r'\boffering 23 professional-grade tools\b', 'offering 56 professional-grade tools'),
    (r"tools: '23'", "tools: '56'"),
    (r'\bExplore All 23 Tools\b', 'Explore All 56 Tools'),
    (r'\b23 Tools\b', '56 Tools'),
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

