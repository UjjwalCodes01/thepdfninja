import type { BlogArticle } from './types';

// Technical explanations for behaviour that looks like a bug but usually is not.

export const troubleshootingArticles: BlogArticle[] = [
  {
    "slug": "why-pdf-file-size-increases",
    "title": "Why Your PDF Got Bigger After You Edited It",
    "metaTitle": "Why Did My PDF File Size Increase? | ThePDFNinja",
    "metaDescription": "PDFs grow when edited because of incremental saves, embedded fonts and retained revisions. What causes it and how to get the size back down.",
    "excerpt": "You deleted three pages and the file grew. That is not a bug — it is how PDF saving works.",
    "date": "2026-10-01",
    "dateLabel": "October 1, 2026",
    "readMinutes": 6,
    "category": "Troubleshooting",
    "emoji": "📈",
    "keywords": [
      "pdf file size increased",
      "why is my pdf so big",
      "pdf bigger after editing",
      "reduce pdf size after edit",
      "pdf grew in size"
    ],
    "blocks": [
      {
        "p": "You removed pages, or made a small annotation, and the file came out larger than before. It looks like something is broken. It is actually the format working as designed — and once you know why, the fix is straightforward."
      },
      {
        "h2": "Incremental saving"
      },
      {
        "p": "PDF supports **incremental updates**: rather than rewriting the file, an editor appends the changes and a new cross-reference table to the end. The original content stays where it was."
      },
      {
        "p": "This is fast and crash-safe, and it means deleting a page can make the file bigger — the page data remains, with a new instruction saying to ignore it. Repeat over several editing sessions and the file accumulates every version of itself."
      },
      {
        "note": "This has a privacy dimension too. Content you 'removed' may still be inside the file. For anything sensitive, [flatten](/tools/flatten-pdf) the document or [redact](/tools/pdf-redact) properly — deletion alone is not removal."
      },
      {
        "h2": "The other usual causes"
      },
      {
        "ul": [
          "**Newly embedded fonts.** Adding text in a font not already embedded pulls in the whole font file.",
          "**Annotations and form fields.** Each carries its own appearance stream.",
          "**Re-encoded images.** Some editors rewrite every image on save, occasionally at higher quality than the original.",
          "**Retained metadata.** Editing history, author fields and application data accumulate quietly."
        ]
      },
      {
        "h2": "Getting the size back"
      },
      {
        "ol": [
          "**[Flatten](/tools/flatten-pdf)** — merges annotations and form fields into the page and discards the interactive machinery.",
          "**[Remove metadata](/tools/remove-metadata)** — clears accumulated document properties and history.",
          "**[Compress](/tools/compress)** — rewrites the file completely, which discards orphaned objects from incremental saves. This is usually the big win.",
          "**[Repair](/tools/repair)** — rebuilds structure from scratch and can shed a lot from a heavily edited file, even when nothing was broken."
        ]
      },
      {
        "h2": "Avoiding it next time"
      },
      {
        "p": "Make all your edits in one session rather than opening and saving repeatedly. Where your editor offers 'Save As' rather than 'Save', use it — a full rewrite rather than an append. And do the compression last, after editing is finished."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Is deleted content really still in the file?",
            "a": "After an incremental save, often yes. Compress or flatten to force a full rewrite, and redact properly for anything sensitive."
          },
          {
            "q": "Why did adding one line of text add a megabyte?",
            "a": "You almost certainly embedded a font that was not previously in the document."
          },
          {
            "q": "Does compressing lose quality?",
            "a": "Only for images. Discarding orphaned objects from incremental saves is lossless."
          },
          {
            "q": "My PDF doubled after annotating. Normal?",
            "a": "Yes, if annotations carry appearance streams and the save was incremental. Flatten then compress."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-text-not-selectable",
    "title": "Why You Can't Select Text in a PDF (Three Different Causes)",
    "metaTitle": "Can't Select Text in a PDF? Three Causes and Fixes | ThePDFNinja",
    "metaDescription": "Unselectable text means a scan, a permissions restriction, or outlined text. How to tell which you have and what to do about each.",
    "excerpt": "The cursor drags a box instead of highlighting words. Three completely different problems produce that symptom.",
    "date": "2026-10-05",
    "dateLabel": "October 5, 2026",
    "readMinutes": 6,
    "category": "Troubleshooting",
    "emoji": "🖱️",
    "keywords": [
      "can't select text in pdf",
      "pdf text not selectable",
      "copy text from pdf",
      "pdf won't let me copy",
      "select text scanned pdf"
    ],
    "blocks": [
      {
        "p": "You try to highlight a sentence and get a selection rectangle instead. Three quite different situations cause this, and the fix for one does nothing for the others."
      },
      {
        "h2": "Cause 1: it is a scan"
      },
      {
        "p": "By far the most common. The page is a photograph, so there is no text to select — only pixels arranged to look like writing."
      },
      {
        "p": "**How to tell:** Ctrl+F for a word you can plainly see. No result means no text layer. **Fix:** run [OCR](/tools/ocr), which adds a real text layer over the image."
      },
      {
        "h2": "Cause 2: copying is restricted"
      },
      {
        "p": "The PDF carries an owner password that flags content extraction as not permitted. The text exists and search may even work, but the reader refuses to let you copy it."
      },
      {
        "p": "**How to tell:** search finds your word and highlights it, but selection is blocked. Document properties will show copying as not allowed. **Fix:** [unlock](/tools/unlock) removes the restriction — for documents you own or are authorised to use."
      },
      {
        "h2": "Cause 3: the text was converted to outlines"
      },
      {
        "p": "Common in files exported from design software. To guarantee typography renders identically everywhere, the designer converted every character into a vector shape. Visually perfect; semantically no longer text."
      },
      {
        "p": "**How to tell:** it is not a scan (the text is razor sharp at any zoom) but search finds nothing. **Fix:** OCR will read it, since it can recognise shapes as characters regardless of how they were produced. Accuracy is usually excellent because outlined text is perfectly clean."
      },
      {
        "h2": "Telling them apart quickly"
      },
      {
        "table": {
          "headers": [
            "Symptom",
            "Scan",
            "Restricted",
            "Outlined"
          ],
          "rows": [
            [
              "Search finds text",
              "No",
              "Yes",
              "No"
            ],
            [
              "Text sharp at 400% zoom",
              "No",
              "Yes",
              "Yes"
            ],
            [
              "Fix",
              "[OCR](/tools/ocr)",
              "[Unlock](/tools/unlock)",
              "[OCR](/tools/ocr)"
            ]
          ]
        }
      },
      {
        "p": "That zoom test is the quickest discriminator. Scanned text goes soft and pixelated as you zoom; real and outlined text stay crisp because they are described mathematically."
      },
      {
        "h2": "If you only need the words"
      },
      {
        "p": "[PDF to text](/tools/pdf-to-txt) extracts plain content without preserving layout. For structured editing, [PDF to Word](/tools/pdf-to-word) after OCR gives you something you can work with."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why does search work but copying not?",
            "a": "That is a permissions restriction, not a missing text layer. The text is there; the reader is honouring a flag."
          },
          {
            "q": "Will OCR let me copy from a scan?",
            "a": "Yes — it adds a selectable text layer. Verify accuracy on anything important."
          },
          {
            "q": "Is bypassing copy restrictions legal?",
            "a": "For documents you own or are licensed to use, generally yes. Copyright still applies to the content regardless."
          },
          {
            "q": "Why is text sharp but unsearchable?",
            "a": "It was converted to outlines, most likely in design software. OCR reads it well."
          }
        ]
      }
    ]
  }
];
