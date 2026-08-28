import type { BlogArticle } from './types';

// Technical explanations for behaviour that looks like a bug but usually is not.

export const troubleshootingArticles: BlogArticle[] = [
  {
    "slug": "why-pdf-file-size-increases",
    "title": "Why Your PDF Got Bigger After You Edited It",
    "metaTitle": "Why Did My PDF File Size Increase? | ThePDFNinja",
    "metaDescription": "PDFs grow when edited because of incremental saves, embedded fonts and retained revisions. What causes it and how to get the size back down.",
    "excerpt": "You deleted three pages and the file grew. That is not a bug — it is how PDF saving works.",
    "date": "2026-09-08",
    "dateLabel": "September 8, 2026",
    "readMinutes": 9,
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
        "h2": "Seeing the history that is still in your file"
      },
      {
        "p": "The claim that deleted content remains in a PDF sounds abstract until you look. You can see it without special tools."
      },
      {
        "p": "Open the PDF in a plain text editor. Most of it is binary noise, but search for the string `%%EOF`. A file saved once contains it exactly once, at the end. A file saved incrementally contains it **multiple times** — one per save — with each earlier version's content preceding it."
      },
      {
        "p": "Each of those blocks is a complete previous state of the document. Text you deleted, pages you removed, annotations you cleared: all still present, each with its own cross-reference table pointing at it."
      },
      {
        "p": "For an ordinary document this is harmless bloat. For anything sensitive it is a disclosure risk, and it is why [redaction](/tools/pdf-redact) must be followed by a full rewrite via [compress](/tools/compress) or [repair](/tools/repair)."
      },
      {
        "h2": "Which editors do this"
      },
      {
        "p": "Incremental saving is a feature rather than a bug, and different tools handle it differently:"
      },
      {
        "ul": [
          "**Acrobat** saves incrementally by default; 'Save As' performs a full rewrite.",
          "**Browser-based form fillers** commonly append, since they are optimising for speed.",
          "**Mobile annotation apps** vary widely and rarely say which they do.",
          "**Command-line tools** typically rewrite fully.",
          "**Signing tools must append** — a full rewrite would invalidate an existing signature, which is precisely what incremental saving exists to prevent."
        ]
      },
      {
        "p": "That last point is worth remembering: if a document carries a valid digital signature, forcing a rewrite to shrink it will break the signature."
      },
      {
        "h2": "A cleanup sequence for a bloated file"
      },
      {
        "ol": [
          "**[Flatten](/tools/flatten-pdf)** — merges annotations and form fields into the page.",
          "**[Remove metadata](/tools/remove-metadata)** — clears accumulated properties.",
          "**[Compress](/tools/compress)** — forces a full rewrite, discarding orphaned objects.",
          "**Compare sizes.** A large drop confirms the problem was accumulated history rather than image data.",
          "**If it is still large,** the weight is genuine content — images, fonts or attachments — and needs a different approach."
        ]
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
    "date": "2026-09-16",
    "dateLabel": "September 16, 2026",
    "readMinutes": 10,
    "category": "Troubleshooting",
    "emoji": "🖱️",
    "keywords": [
      "can't select text in pdf",
      "pdf text not selectable",
      "copy text from pdf",
      "pdf won't let me copy",
      "select text scanned pdf",
      "copy text from pdf free",
      "can't select text in pdf fix",
      "extract text from scanned pdf free",
      "copy protected pdf text",
      "pdf to text converter free"
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
        "h2": "A quick diagnostic that takes ten seconds"
      },
      {
        "p": "Rather than working through causes, two actions identify which situation you are in almost immediately."
      },
      {
        "p": "**Zoom to 400%.** Scanned text becomes soft and pixelated, because you are magnifying a photograph. Real text and outlined text stay perfectly crisp, because both are described mathematically and redrawn at whatever size you ask for."
      },
      {
        "p": "**Then press Ctrl+F** and search for a word you can see. Found means there is a text layer, so any selection problem is a permissions restriction. Not found means no text layer — either a scan or outlined text, which the zoom test has already distinguished."
      },
      {
        "p": "Two actions, three outcomes, no guesswork."
      },
      {
        "h2": "Text converted to outlines, in more detail"
      },
      {
        "p": "This is the least familiar of the three and worth understanding because the fix is counter-intuitive."
      },
      {
        "p": "Designers convert text to outlines when sending files to print, so that typography renders identically regardless of what fonts the printer has installed. Each character becomes a vector shape — a set of curves — with no remaining record that it was ever the letter 'A'."
      },
      {
        "p": "The counter-intuitive part: [OCR](/tools/ocr) handles this very well. It is designed to recognise shapes as characters, and outlined text is unusually clean input — perfectly formed, high contrast, no scanning artefacts. Accuracy is typically better than on a good scan."
      },
      {
        "h2": "Extracting text when nothing else works"
      },
      {
        "p": "Where you need the words and the usual routes are blocked, in increasing order of effort:"
      },
      {
        "ol": [
          "**[PDF to text](/tools/pdf-to-txt)** — extracts the text layer directly, ignoring permission flags in most implementations.",
          "**[Unlock](/tools/unlock) then copy** — for documents you have rights to, where an owner password is blocking extraction.",
          "**[OCR](/tools/ocr)** — works regardless of why the text is unavailable, since it reads the rendered page.",
          "**[Convert to images](/tools/pdf-to-jpg) then OCR** — for stubborn files where the text layer confuses extraction tools.",
          "**Retype it.** For a paragraph, genuinely faster than any of the above."
        ]
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "Processing happens on our servers, so a mobile browser works exactly as a desktop does."
      },
      {
        "p": "The zoom test is easier on a phone than a desktop — pinch to 400% and scanned text visibly pixelates while real text stays crisp. That single gesture tells you which of the three problems you have."
      },
      {
        "p": "**On iPhone,** save the file into Files before uploading rather than working from a mail preview. **On Android,** Chrome handles it directly from Downloads."
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
          },
          {
            "q": "How do I copy text from a PDF that will not let me?",
            "a": "If search finds the text, it is a permissions restriction — [unlock](/tools/unlock) removes it for documents you own. If search finds nothing, the page is an image and needs [OCR](/tools/ocr)."
          },
          {
            "q": "How do I copy text from a scanned PDF for free?",
            "a": "Run [OCR](/tools/ocr) to add a text layer, then select and copy normally. Or use [PDF to text](/tools/pdf-to-txt) to extract the words directly."
          },
          {
            "q": "Why can I search a PDF but not copy from it?",
            "a": "An owner password has flagged content extraction as not permitted. The text is there; the reader is honouring a restriction flag."
          },
          {
            "q": "Why is my PDF text sharp but unsearchable?",
            "a": "It was converted to outlines, usually in design software. OCR reads it very well because the shapes are perfectly clean."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-fonts-not-displaying",
    "title": "Why Your PDF Shows the Wrong Fonts (or Boxes)",
    "metaTitle": "PDF Fonts Not Displaying Correctly — Causes & Fixes | ThePDFNinja",
    "metaDescription": "Missing fonts, substitution and boxes instead of letters. Why embedding matters and what to do about a file that already lacks it.",
    "excerpt": "It looked perfect when you made it and wrong when they opened it. Font embedding is why.",
    "date": "2026-09-24",
    "dateLabel": "September 24, 2026",
    "readMinutes": 9,
    "category": "Troubleshooting",
    "emoji": "🔤",
    "keywords": [
      "pdf fonts not displaying",
      "pdf wrong font",
      "boxes instead of text pdf",
      "embed fonts pdf",
      "pdf font substitution"
    ],
    "blocks": [
      {
        "p": "You open a PDF and the text is in the wrong typeface, or letters are replaced by boxes, or the spacing has gone strange. The document was fine when it was made. Something about how fonts travel is at fault."
      },
      {
        "h2": "How PDFs handle fonts"
      },
      {
        "p": "A PDF can either **embed** a font — carrying the actual typeface data inside the file — or merely **reference** it by name and hope the reader has it installed. Embedding is what makes PDFs render identically everywhere. Referencing is what breaks."
      },
      {
        "p": "When a referenced font is missing, the reader substitutes something it does have. Metrics differ, so spacing shifts, lines rewrap, and a carefully laid-out page becomes subtly wrong."
      },
      {
        "h2": "Why fonts end up unembedded"
      },
      {
        "ul": [
          "**Licensing.** Some commercial fonts forbid embedding, so the exporter omits them.",
          "**Export settings.** Many tools default to embedding only the characters used, or to skipping standard fonts.",
          "**'Standard 14' assumption.** Helvetica, Times and Courier are assumed present everywhere and often not embedded — but substitutes vary in metrics.",
          "**Printing to PDF** rather than exporting. Print drivers frequently handle fonts worse than a direct export."
        ]
      },
      {
        "h2": "Fixing a file you received"
      },
      {
        "p": "You cannot embed a font you do not have. What you can do:"
      },
      {
        "ol": [
          "Install the missing font, if you can identify and legally obtain it. Document properties list the fonts used and whether each is embedded.",
          "Open in a different reader — substitution behaviour varies and some do better.",
          "[Convert to images](/tools/pdf-to-jpg) if you only need to view or print it faithfully. You lose the text layer but gain exactly what the original looked like — though only if it rendered correctly somewhere first.",
          "Ask the sender to re-export with fonts embedded. Usually the only real fix."
        ]
      },
      {
        "h2": "Preventing it in files you produce"
      },
      {
        "p": "Export rather than print to PDF, and enable full font embedding in your export settings. If a font refuses to embed for licensing reasons, substitute a different typeface before exporting rather than letting the recipient's machine choose one for you. For anything that must render identically decades from now, [convert to PDF/A](/tools/pdf-to-pdfa), which requires embedding."
      },
      {
        "note": "Check document properties before sending anything typographically important. Every font should be listed as embedded or embedded subset. Anything else is a risk."
      },
      {
        "h2": "Checking a file's fonts before you send it"
      },
      {
        "p": "Every reader exposes this and almost nobody looks, which is why the problem is discovered by recipients rather than senders."
      },
      {
        "p": "Open document properties and find the Fonts tab or section. Each font is listed with its type and, crucially, whether it is **Embedded** or **Embedded Subset**. Either is fine. Anything listed without one of those markers is a font your recipient must already have, and probably does not."
      },
      {
        "p": "Doing this once on a template tells you whether your export settings are right in general, which saves checking every document."
      },
      {
        "h2": "Why the standard fourteen are a trap"
      },
      {
        "p": "The PDF specification defines fourteen fonts every reader must provide: Helvetica, Times, Courier, Symbol and ZapfDingbats in their variants. Because they are guaranteed, producers commonly do not embed them."
      },
      {
        "p": "The catch is that 'must provide' does not mean 'must provide identically'. A reader without genuine Helvetica substitutes something metrically similar — Arial, Nimbus Sans, Liberation Sans. Similar is not identical, and small differences in character width accumulate across a line until text wraps differently or overruns a table cell."
      },
      {
        "p": "For anything where layout matters, embed even the standard fonts. The size cost is negligible with subsetting and it removes an entire class of problem."
      },
      {
        "h2": "When you cannot embed"
      },
      {
        "p": "Some commercial fonts prohibit embedding in their licence, and export tools honour that by omitting them. You have three options, in order of preference:"
      },
      {
        "ol": [
          "**Substitute a different typeface** before exporting. You choose the substitute rather than leaving it to the recipient's machine.",
          "**Convert the text to outlines** in your design tool. Renders perfectly everywhere; the text becomes unsearchable, which may or may not matter.",
          "**Convert pages to images** via [PDF to JPG](/tools/pdf-to-jpg) and rebuild. Guaranteed appearance, much larger file, no text layer at all."
        ]
      },
      {
        "p": "The first is almost always right. Choosing a freely embeddable typeface at design time avoids the whole question, which is why open licence fonts have become standard for documents intended to circulate."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why do I see boxes instead of letters?",
            "a": "The reader has no glyph for those characters — a missing font with no adequate substitute, common with non-Latin scripts."
          },
          {
            "q": "Why does it look right on my machine but wrong on theirs?",
            "a": "You have the font installed; they do not. It was never embedded."
          },
          {
            "q": "Does embedding make the file much larger?",
            "a": "Subset embedding adds tens of kilobytes typically. Well worth it."
          },
          {
            "q": "Can I embed fonts into an existing PDF?",
            "a": "Only if you have the font installed and a tool that supports it. Re-exporting from the source is more reliable."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-images-blurry-after-compression",
    "title": "Why Your PDF Looks Blurry After Compressing It",
    "metaTitle": "PDF Blurry After Compression? Causes and Fixes | ThePDFNinja",
    "metaDescription": "Downsampling and re-encoding explained, why scanned text suffers most, and how to compress without wrecking legibility.",
    "excerpt": "Compression working exactly as designed — configured for the wrong job.",
    "date": "2026-10-02",
    "dateLabel": "October 2, 2026",
    "readMinutes": 9,
    "category": "Troubleshooting",
    "emoji": "🌫️",
    "keywords": [
      "pdf blurry after compression",
      "compressed pdf quality loss",
      "pdf text blurry",
      "compression artifacts pdf",
      "pdf image quality"
    ],
    "blocks": [
      {
        "p": "You compressed a PDF and the images now look soft, blocky or smeared. This is compression working as designed — the question is whether it was configured for what you actually needed."
      },
      {
        "h2": "What compression does to images"
      },
      {
        "p": "Two things happen. Images are **downsampled** — reduced in resolution — and **re-encoded** at a lower JPEG quality. Downsampling is what makes text inside images soft; re-encoding is what produces blocky artefacts around edges."
      },
      {
        "p": "For a photograph viewed on screen, both are nearly invisible. For a scanned page of small text, both are immediately obvious, because the fine detail you need is exactly what was removed."
      },
      {
        "h2": "Why yours looks worse than expected"
      },
      {
        "ul": [
          "**You used screen quality.** Around 72 DPI. Suitable for viewing, not for reading small print.",
          "**Your source was already compressed.** Compressing a compressed file stacks artefacts.",
          "**You compressed a scan of dense text.** The hardest case — fine detail everywhere, all of it necessary.",
          "**You compressed before cropping or greyscaling.** The compressor spent its budget on data you then discarded.",
          "**Your target size was unrealistic** for the page count and content."
        ]
      },
      {
        "h2": "Getting a better result"
      },
      {
        "ol": [
          "Start again **from the original**, not from the compressed copy.",
          "[Crop](/tools/crop) borders and margins first.",
          "[Convert to greyscale](/tools/grayscale-pdf) if colour carries no information — often the single biggest gain.",
          "[Extract](/tools/extract-pages) only the pages actually required.",
          "Compress at **ebook** rather than screen, or use [compress to size](/tools/compress-to-size) so quality is only reduced as far as necessary."
        ]
      },
      {
        "note": "If you no longer have the original, the damage is permanent. Compression is one-way. Always keep an uncompressed master and treat compressed files as disposable distribution copies."
      },
      {
        "h2": "When the target is simply too small"
      },
      {
        "p": "Sometimes legibility and the size limit are incompatible — a dense multi-page colour scan under 200KB, for instance. Rescanning at 200 DPI greyscale will beat any amount of compression on a 600 DPI colour original, because it starts clean rather than being degraded down."
      },
      {
        "h2": "Telling downsampling apart from re-encoding"
      },
      {
        "p": "The two mechanisms produce visually different damage, and identifying which you have tells you what to change."
      },
      {
        "p": "**Downsampling damage** looks soft. Edges lose definition, small text becomes indistinct but not distorted, fine texture disappears. It looks like an out-of-focus photograph. The cause is too few pixels, and the fix is a higher target resolution."
      },
      {
        "p": "**Re-encoding damage** looks blocky. You see 8×8 pixel squares, particularly in flat areas and around high-contrast edges, and a halo effect around dark text on light backgrounds. The cause is too low a JPEG quality, and the fix is a higher quality setting."
      },
      {
        "p": "Zoom to 400% and the difference is unmistakable. Soft means resolution; blocky means quality."
      },
      {
        "h2": "Text inside images is the hardest case"
      },
      {
        "p": "A scanned page is an image of text, which puts it in the worst position for compression. Photographs tolerate detail loss because the eye does not track individual leaves on a tree. Text does not — a character either resolves or it does not, and the failure is binary rather than gradual."
      },
      {
        "p": "Practical implications: scanned documents need a higher target resolution than photographs to survive the same compression. 150 DPI is comfortable for a photograph and marginal for small print. If your document contains footnotes, superscripts or a dense table, target 200 or higher and accept the larger file."
      },
      {
        "h2": "Recovering from over-compression"
      },
      {
        "p": "The honest answer is that you cannot. The discarded data is gone, and tools that claim to enhance or upscale a degraded scan are inventing plausible detail rather than restoring the original — which is actively dangerous for a document, because invented detail on a reference number is worse than a blurred one you know to distrust."
      },
      {
        "p": "What to do instead, in order:"
      },
      {
        "ol": [
          "**Find the original.** Check your downloads folder, email, the scanner's output folder, cloud sync history.",
          "**Rescan.** If you have the paper, two minutes at 300 DPI greyscale beats any recovery attempt.",
          "**Request it again** from whoever sent it.",
          "**Accept the degraded version** only if none of the above is possible, and flag its legibility to whoever receives it."
        ]
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Can I restore quality after compressing?",
            "a": "No. The data is discarded. Start again from the original."
          },
          {
            "q": "Why is my text blurry but the photos fine?",
            "a": "Your text is inside a scanned image. Downsampling hits fine detail hardest, and small text is fine detail."
          },
          {
            "q": "Which quality setting should I use?",
            "a": "Ebook for almost everything. Screen only when size matters more than reading it."
          },
          {
            "q": "Does compressing twice make it smaller?",
            "a": "Marginally, while stacking artefacts. Not worth it."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-wont-print-correctly",
    "title": "Why Your PDF Will Not Print Correctly",
    "metaTitle": "PDF Printing Problems — Blank Pages, Cropping, Scale | ThePDFNinja",
    "metaDescription": "Blank sheets, clipped edges, wrong scale and jobs that take forever. The geometry and transparency issues behind each.",
    "excerpt": "The file opens fine and prints wrong. Almost always page geometry or transparency, not a broken document.",
    "date": "2026-10-12",
    "dateLabel": "October 12, 2026",
    "readMinutes": 9,
    "category": "Troubleshooting",
    "emoji": "🖨️",
    "keywords": [
      "pdf won't print",
      "pdf prints blank",
      "pdf printing problems",
      "pdf prints wrong size",
      "pdf print cropped"
    ],
    "blocks": [
      {
        "p": "The document opens, the pages are there, and the printer produces blank sheets, cropped edges, or something at the wrong scale. Printing problems are almost always about page geometry or transparency, not about the file being broken."
      },
      {
        "h2": "Wrong size or cropped edges"
      },
      {
        "p": "The commonest cause is a mismatch between the PDF's page size and the paper. A document laid out for US Letter printed on A4 will be scaled or clipped, and vice versa."
      },
      {
        "p": "In the print dialog, look for 'Fit to page' or 'Scale to fit'. If your reader offers 'Actual size', that is what causes clipping when sizes differ. If you need consistency across many documents, [resize pages](/tools/resize-pages) to a common paper size first."
      },
      {
        "h2": "Blank pages or missing elements"
      },
      {
        "ul": [
          "**Transparency and layers.** Some printers handle these poorly. [Flatten](/tools/flatten-pdf) to merge everything into a simple page.",
          "**Form fields and annotations.** Many readers do not print these by default — check for a 'print comments and forms' option, or flatten.",
          "**Print as image.** A last resort in most print dialogs, and often effective. Slower, larger spool, but it bypasses interpretation problems entirely."
        ]
      },
      {
        "h2": "Printing takes forever"
      },
      {
        "p": "Usually a very large, complex page — a detailed map or a high-resolution scan — that the printer must rasterise. Flattening helps. So does [compressing](/tools/compress) first, which reduces what the printer must process. For repeated printing of the same document, compressing once saves time every time."
      },
      {
        "h2": "It prints but looks wrong"
      },
      {
        "ol": [
          "Missing fonts substituting badly — check the file's font list.",
          "Colour rendered oddly on a mono printer — [convert to greyscale](/tools/grayscale-pdf) first so you control the conversion.",
          "Pages upside down or sideways — [rotate](/tools/rotate) them in the file rather than in the print dialog, so the fix persists.",
          "Margins clipped — most printers cannot print to the paper edge. Scale to fit, or crop and resize."
        ]
      },
      {
        "note": "Test with one page before committing a long job. Print the first page, check it, then print the rest. This is cheap and saves reams."
      },
      {
        "h2": "Page size mismatch, the commonest cause"
      },
      {
        "p": "A4 and US Letter are close enough that the mismatch is not obvious and different enough that it always causes a problem."
      },
      {
        "table": {
          "headers": [
            "",
            "Width",
            "Height"
          ],
          "rows": [
            [
              "A4",
              "210 mm",
              "297 mm"
            ],
            [
              "US Letter",
              "216 mm",
              "279 mm"
            ]
          ]
        }
      },
      {
        "p": "Letter is 6mm wider and 18mm shorter. Print an A4 document on Letter at actual size and you lose 18mm from the bottom — enough to clip a footer, a page number, or the last line of a paragraph. Print Letter on A4 and you get an unexpected margin, which looks untidy but loses nothing."
      },
      {
        "p": "'Fit to page' scales rather than clips and is almost always the right choice when the sizes differ. Where you are printing many documents, [resizing pages](/tools/resize-pages) to a common size once is better than remembering the print setting every time."
      },
      {
        "h2": "The unprintable margin"
      },
      {
        "p": "Almost no printer can print to the paper edge — most reserve 3–5mm on each side for the mechanism to grip the sheet. Content inside that band is silently clipped regardless of your settings."
      },
      {
        "p": "This catches out documents laid out with very narrow margins, and it is the usual explanation for a page number that appears on screen and not on paper. If content is close to the edge, either scale to fit or [crop and resize](/tools/crop) so it sits further in."
      },
      {
        "h2": "Print as image, and when to reach for it"
      },
      {
        "p": "Most print dialogs offer 'print as image' or 'print as bitmap', usually buried under Advanced. It rasterises each page on your machine and sends pixels rather than instructions."
      },
      {
        "p": "It is slower, produces a much larger print job, and sometimes softens text slightly. In exchange it eliminates every class of interpretation problem: transparency, unusual fonts, complex vectors, form field rendering. If a document prints wrong and nothing else has worked, this almost always fixes it."
      },
      {
        "p": "Treat it as a workaround rather than a solution. If you print the same document regularly, [flattening](/tools/flatten-pdf) it once addresses the underlying cause properly."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why does my PDF print blank?",
            "a": "Usually transparency or form fields the printer is not rendering. Flatten it, or use print-as-image."
          },
          {
            "q": "Why are my edges cut off?",
            "a": "Page size does not match paper size, or content sits in the printer's unprintable margin. Use scale to fit."
          },
          {
            "q": "Why is printing so slow?",
            "a": "Complex or high-resolution pages must be rasterised. Flatten and compress first."
          },
          {
            "q": "Should I print as image?",
            "a": "As a fallback when nothing else works. It always renders what you see, at the cost of speed and file size."
          }
        ]
      }
    ]
  },
  {
    "slug": "why-ocr-fails-on-my-scan",
    "title": "Why Your OCR Output Is Gibberish",
    "metaTitle": "OCR Not Working? Why Recognition Fails and How to Fix It | ThePDFNinja",
    "metaDescription": "Resolution, skew, premature compression and contrast. How to diagnose which is wrecking your OCR and what actually fixes it.",
    "excerpt": "Random characters and missing lines. The engine is fine — it was handed something it could not read.",
    "date": "2026-10-20",
    "dateLabel": "October 20, 2026",
    "readMinutes": 9,
    "category": "Troubleshooting",
    "emoji": "🔠",
    "keywords": [
      "ocr not working",
      "ocr gibberish",
      "ocr accuracy problems",
      "why ocr fails",
      "improve ocr results"
    ],
    "blocks": [
      {
        "p": "You run OCR on a scan and get output that is partly nonsense — random characters, missing lines, words merged together. The engine is not broken; it was given something it could not read."
      },
      {
        "h2": "The four usual causes"
      },
      {
        "ol": [
          "**Resolution below 200 DPI.** Characters simply lack the pixels to be distinguished. 300 DPI is where accuracy stabilises.",
          "**Skew.** A page a few degrees off horizontal breaks line detection, and once lines are wrong everything downstream is wrong. This is the most common single cause.",
          "**Compression before OCR.** If the scan was compressed to hit a size limit first, the detail recognition needs has already gone.",
          "**Low contrast.** Faded ink, grey photocopies, coloured or patterned backgrounds."
        ]
      },
      {
        "h2": "Diagnosing which you have"
      },
      {
        "table": {
          "headers": [
            "Symptom",
            "Likely cause"
          ],
          "rows": [
            [
              "Text broadly right, occasional wrong characters",
              "Normal accuracy limits — proofread"
            ],
            [
              "Whole lines missing or interleaved",
              "Skew, or multi-column layout"
            ],
            [
              "Dense nonsense throughout",
              "Resolution too low, or compressed before OCR"
            ],
            [
              "Some regions fine, others garbage",
              "Uneven lighting or contrast"
            ],
            [
              "Nothing recognised at all",
              "Not actually an image of text, or extreme skew"
            ]
          ]
        }
      },
      {
        "h2": "Fixing it"
      },
      {
        "p": "In order of effectiveness, and it is not close: **rescan properly**. 300 DPI, greyscale, page square to the platen. That single step fixes more OCR problems than every software adjustment combined."
      },
      {
        "p": "If rescanning is impossible, straighten the page as best you can and ensure you are running [OCR](/tools/ocr) on the highest-quality version of the file you still have — not on a copy that has already been compressed for upload."
      },
      {
        "note": "The correct order is scan, OCR, then compress. Compressing first destroys the detail OCR depends on, and no amount of processing afterwards recovers it."
      },
      {
        "h2": "When OCR will not work regardless"
      },
      {
        "p": "Handwriting, particularly cursive, is beyond conventional OCR. Heavily stylised fonts, text over busy images, and very poor photocopies may also be unrecoverable. For a small amount of critical text, typing it manually is faster than fighting the tooling."
      },
      {
        "h2": "Recognising each failure from its output"
      },
      {
        "p": "The shape of the garbage tells you which problem you have, which saves guessing."
      },
      {
        "table": {
          "headers": [
            "What the output looks like",
            "Cause"
          ],
          "rows": [
            [
              "Mostly right, scattered wrong characters",
              "Normal accuracy limits — proofread"
            ],
            [
              "Lines merged or split oddly",
              "Skew"
            ],
            [
              "Text from two columns interleaved",
              "Layout analysis failure"
            ],
            [
              "Dense nonsense, no recognisable words",
              "Resolution too low, or compressed first"
            ],
            [
              "Some regions clean, others garbage",
              "Uneven lighting"
            ],
            [
              "Numbers wrong, words right",
              "Normal — digits get no language-model help"
            ],
            [
              "Nothing recognised at all",
              "Not an image of text, or extreme skew"
            ]
          ]
        }
      },
      {
        "h2": "Why digits are recognised worse than words"
      },
      {
        "p": "This is worth knowing because it affects what you check."
      },
      {
        "p": "Recognition includes a language model that corrects implausible character sequences toward real words. `recognitlon` becomes `recognition` because the former is not a word and the latter is, in a context where it fits."
      },
      {
        "p": "Digits get none of this. `7749` and `7748` are both perfectly plausible, so a misread digit stays misread. The same applies to names, reference numbers and codes — anything with no dictionary to correct toward."
      },
      {
        "p": "The practical rule follows directly: skim the prose, but **verify every number** you intend to act on."
      },
      {
        "h2": "Fixing skew when rescanning is impossible"
      },
      {
        "p": "Skew is the highest-impact problem and the one most often unfixable at source, because the original is gone or inaccessible."
      },
      {
        "p": "Deskewing after the fact means rotating by a fractional angle, which resamples every pixel and softens the image slightly. That is usually a good trade — a slightly softer straight page recognises far better than a sharp crooked one."
      },
      {
        "p": "What it cannot fix is **curl**, where a page from a bound book curves away from the platen. The baseline is then genuinely curved rather than merely tilted, and no rotation corrects it. Rephotographing the page flattened, or scanning it after the binding is removed, is the only real answer."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "What resolution should I scan at for OCR?",
            "a": "300 DPI. Below 200 accuracy collapses; above 400 gains nothing and costs size."
          },
          {
            "q": "Does colour help OCR?",
            "a": "No — greyscale is usually better. Colour adds noise without adding useful information for text."
          },
          {
            "q": "Why did some pages work and others not?",
            "a": "Usually inconsistent scanning: some pages fed straight, others skewed, or lighting varied."
          },
          {
            "q": "Can OCR read my handwritten notes?",
            "a": "Neat printed handwriting sometimes. Cursive reliably not."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-opens-blank",
    "title": "Your PDF Opens to a Blank Page: Working Out Why",
    "metaTitle": "PDF Opens Blank? Diagnose and Fix | ThePDFNinja",
    "metaDescription": "Blank pages, grey rectangles and endless spinners. Five causes that produce the same empty result, and how to tell them apart.",
    "excerpt": "The file may be perfectly fine. Several different problems all look like nothing at all.",
    "date": "2026-10-28",
    "dateLabel": "October 28, 2026",
    "readMinutes": 9,
    "category": "Troubleshooting",
    "emoji": "⬜",
    "keywords": [
      "pdf opens blank",
      "pdf blank page",
      "pdf not displaying",
      "pdf grey screen",
      "pdf won't render"
    ],
    "blocks": [
      {
        "p": "You open a PDF and get a blank white page, or a grey rectangle, or a spinner that never resolves. The file may be fine — several quite different problems produce the same empty result."
      },
      {
        "h2": "Work through these in order"
      },
      {
        "ol": [
          "**Try a different reader.** Browser, phone, another desktop application. If it renders anywhere, the file is fine and your reader is the problem.",
          "**Check the file size.** A 0KB file is empty. A file much smaller than expected is truncated — download it again.",
          "**Wait.** A very large or complex page can take a long time to render, particularly detailed maps or high-resolution scans.",
          "**Check for a password prompt behind the window.** Some readers open a dialog that is easy to miss.",
          "**Look for content in the outline or thumbnails.** If thumbnails render but the page does not, it is a rendering problem, not a content one."
        ]
      },
      {
        "h2": "The usual causes"
      },
      {
        "ul": [
          "**Truncated download.** Extremely common. A PDF stores its index at the end, so a partial file has no map of itself.",
          "**Transparency or layers** the reader handles poorly — [flatten](/tools/flatten-pdf) usually fixes this.",
          "**Form fields with no fallback appearance,** which render as nothing in some readers.",
          "**Content on a hidden layer,** switched off by default.",
          "**Genuinely blank pages,** which is worth ruling out before you assume the worst — duplex scans produce them routinely."
        ]
      },
      {
        "h2": "When it really is damaged"
      },
      {
        "p": "[Repair PDF](/tools/repair) rebuilds the cross-reference table by scanning for recognisable objects. It often succeeds, because the page content usually survives intact even when the index pointing to it does not."
      },
      {
        "note": "Always work on a copy. If a repair attempt makes things worse, you want the original untouched."
      },
      {
        "h2": "Ruling out the simple explanations first"
      },
      {
        "p": "Before assuming corruption, eliminate the possibilities that require no fixing at all."
      },
      {
        "ol": [
          "**Are the pages genuinely blank?** Duplex scans routinely produce them. Check the thumbnail panel — if some pages have content and the empty ones alternate, that is a scanning artefact, not a fault.",
          "**Is it still rendering?** A detailed map or a high-resolution scan can take many seconds. Watch for a progress indicator and wait before concluding.",
          "**Is there a dialog behind the window?** Password prompts and security warnings sometimes open behind the main window, particularly on multi-monitor setups.",
          "**Is content on a hidden layer?** Check for a layers panel and whether anything is switched off."
        ]
      },
      {
        "h2": "Thumbnails as a diagnostic"
      },
      {
        "p": "The thumbnail panel is more informative than it looks. Thumbnails are generated from the same page data as the main view, so comparing them tells you where the problem sits."
      },
      {
        "ul": [
          "**Thumbnails render, main view blank** — a rendering problem in the main view, often transparency or a large image. Try another reader, or flatten.",
          "**Thumbnails blank too** — the page data itself is not being read. More likely genuine damage.",
          "**Some thumbnails render, others not** — localised damage. [Extract](/tools/extract-pages) the good pages to salvage them.",
          "**No thumbnails at all** — the document structure is unreadable. Try [repair](/tools/repair)."
        ]
      },
      {
        "h2": "Reader differences that matter here"
      },
      {
        "p": "If a file renders in one reader and not another, that is useful information rather than an annoyance — it tells you the content is intact and something about how it is constructed is unusual."
      },
      {
        "p": "Browsers use their own renderers and are generally tolerant of malformed structure but weaker on transparency and unusual colour spaces. Acrobat is strictest about specification compliance and best at complex rendering. Mobile readers are usually the most forgiving of structural problems and the most likely to skip form fields and annotations."
      },
      {
        "p": "If it opens anywhere, [flatten](/tools/flatten-pdf) it from the reader that works and you will get a file that opens everywhere."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "It opens on my phone but not my laptop. Why?",
            "a": "Mobile readers are often more tolerant of malformed structure. If it opens anywhere, repair it and it will open everywhere."
          },
          {
            "q": "Why is my page grey?",
            "a": "Usually still rendering, or an image the reader cannot decode. Wait, then try another reader."
          },
          {
            "q": "Can a blank PDF be recovered?",
            "a": "If the content is present but not rendering, yes. If the file is truncated, the missing data cannot be invented."
          },
          {
            "q": "How do I know if my download finished?",
            "a": "Compare the size with the source, and check the file ends with %%EOF."
          }
        ]
      }
    ]
  },
  {
    "slug": "file-is-not-actually-a-pdf",
    "title": "Your File Says PDF but Is Not One: How to Tell",
    "metaTitle": "Is It Really a PDF? Check the File Header | ThePDFNinja",
    "metaDescription": "A five-character test that identifies what a file really is, why extensions lie, and what to do once you know.",
    "excerpt": "Before you conclude the file is corrupt, check whether it was ever a PDF at all.",
    "date": "2026-11-05",
    "dateLabel": "November 5, 2026",
    "readMinutes": 9,
    "category": "Troubleshooting",
    "emoji": "🎭",
    "keywords": [
      "file not a pdf",
      "pdf extension wrong",
      "renamed file pdf",
      "pdf header check",
      "file format identify"
    ],
    "blocks": [
      {
        "p": "You are certain the file is a PDF, but nothing will open it — or it opens as gibberish in a text editor. Before assuming corruption, confirm it is actually a PDF."
      },
      {
        "h2": "The five-character test"
      },
      {
        "p": "Open the file in any plain text editor. A genuine PDF begins with the characters **%PDF-** followed by a version number. If you see something else, you have a different kind of file wearing a `.pdf` extension."
      },
      {
        "table": {
          "headers": [
            "First characters",
            "What it really is"
          ],
          "rows": [
            [
              "%PDF-",
              "A genuine PDF"
            ],
            [
              "PK",
              "A ZIP archive — likely .docx, .xlsx or .pptx"
            ],
            [
              "\\xFF\\xD8\\xFF",
              "A JPEG image"
            ],
            [
              "\\x89PNG",
              "A PNG image"
            ],
            [
              "<!DOCTYPE or <html",
              "An HTML page saved wrongly"
            ],
            [
              "{\\rtf",
              "An RTF document"
            ]
          ]
        }
      },
      {
        "h2": "How this happens"
      },
      {
        "ul": [
          "**Someone renamed the file.** Changing an extension does not convert anything.",
          "**A download failed and you saved an error page.** The classic case: the server returned HTML and the browser saved it under the expected filename.",
          "**An export failed silently,** leaving a partial or wrong-format file.",
          "**A messaging app re-encoded it** during transfer."
        ]
      },
      {
        "h2": "What to do"
      },
      {
        "ol": [
          "Identify the real format from the header.",
          "Rename it to the correct extension and open it normally.",
          "Convert properly if you need a PDF — [Word](/tools/word-to-pdf), [images](/tools/jpg-to-pdf), [HTML](/tools/html-to-pdf).",
          "If it is an HTML error page, go back and download the file again."
        ]
      },
      {
        "note": "If the header is %PDF- but the file still will not open, then it genuinely is a damaged PDF. Check the end of the file for %%EOF, and try [Repair PDF](/tools/repair)."
      },
      {
        "h2": "Reading a file header without special tools"
      },
      {
        "p": "Every file format begins with a recognisable signature — a 'magic number' — and reading it takes no more than a text editor."
      },
      {
        "p": "Open the file in Notepad, TextEdit or any plain editor. Most of what you see will be unreadable binary, which is expected. You are only interested in the first few characters, and they will be legible because format signatures are usually ASCII."
      },
      {
        "p": "On Linux or macOS the `file` command does this for you and reports the format in plain English. On Windows, PowerShell's `Get-Content -TotalCount 1` shows the first line. Both are faster than opening the file if you are checking several."
      },
      {
        "h2": "The most useful signatures"
      },
      {
        "table": {
          "headers": [
            "Starts with",
            "Format",
            "What to do"
          ],
          "rows": [
            [
              "`%PDF-`",
              "PDF",
              "Genuine — if it will not open, try [repair](/tools/repair)"
            ],
            [
              "`PK`",
              "ZIP-based Office file",
              "Rename to .docx, .xlsx or .pptx"
            ],
            [
              "`{\\rtf`",
              "RTF document",
              "Rename to .rtf; [convert](/tools/rtf-to-pdf) if needed"
            ],
            [
              "`<!DOCTYPE` or `<html`",
              "HTML",
              "Likely a saved error page — download again"
            ],
            [
              "`\\x89PNG`",
              "PNG image",
              "Rename to .png"
            ],
            [
              "`\\xFF\\xD8\\xFF`",
              "JPEG image",
              "Rename to .jpg"
            ],
            [
              "`%!PS`",
              "PostScript",
              "Rename to .ps; needs conversion"
            ]
          ]
        }
      },
      {
        "h2": "The saved-error-page problem"
      },
      {
        "p": "This deserves its own note because it is common and confusing. You click a download link, the server returns an error page instead of the file, and your browser saves that HTML under the filename it expected."
      },
      {
        "p": "You end up with `annual-report.pdf` that is actually a web page saying 'Session expired' or 'Access denied'. It is roughly the right sort of size, it has the right name, and it will not open."
      },
      {
        "p": "Open it in a text editor and you will read the error message in plain English, which usually tells you exactly what went wrong — an expired session, a login required, a link that has been moved. Far more useful than a generic 'cannot open' from your PDF reader."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Does renaming a file convert it?",
            "a": "No. The extension is a label; the contents are unchanged."
          },
          {
            "q": "Why did my download save as a PDF that is actually HTML?",
            "a": "The server returned an error page and your browser saved it under the expected name."
          },
          {
            "q": "Can I convert a .docx renamed to .pdf?",
            "a": "Rename it back to .docx, then convert it properly."
          },
          {
            "q": "What if the header is right but it still fails?",
            "a": "It is a genuine PDF that is damaged or truncated. Try repair."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-wont-compress",
    "title": "When Compression Barely Shrinks Your PDF",
    "metaTitle": "PDF Won't Compress? Find What Is Actually Large | ThePDFNinja",
    "metaDescription": "Compression targets images. If your file is heavy for another reason, no quality setting helps. Six causes and their fixes.",
    "excerpt": "40MB in, 38MB out. The weight is not where you think it is.",
    "date": "2026-11-13",
    "dateLabel": "November 13, 2026",
    "readMinutes": 9,
    "category": "Troubleshooting",
    "emoji": "🪨",
    "keywords": [
      "pdf won't compress",
      "pdf still large after compression",
      "reduce pdf size not working",
      "what makes pdf large",
      "pdf size problem"
    ],
    "blocks": [
      {
        "p": "Your PDF is 40MB, you compress it, and it is still 38MB. Compression is not broken — it is working on the wrong thing, because the weight is not where you assume."
      },
      {
        "h2": "Find out what is actually large"
      },
      {
        "p": "PDF compression targets images. If your file is large for some other reason, no quality setting will help. The usual non-image causes:"
      },
      {
        "ul": [
          "**Embedded attachments.** A PDF can contain other files. Check the attachments panel.",
          "**Embedded fonts, in full.** A document using several full font families rather than subsets carries megabytes of typeface data.",
          "**Accumulated revisions** from incremental saves — every previous version still inside the file.",
          "**Form field data and annotations,** each carrying its own appearance stream.",
          "**Vector artwork** with enormous path counts, as in detailed maps or CAD exports.",
          "**Hidden layers** containing content you cannot see."
        ]
      },
      {
        "h2": "What to do about each"
      },
      {
        "table": {
          "headers": [
            "Cause",
            "Fix"
          ],
          "rows": [
            [
              "Accumulated revisions",
              "[Compress](/tools/compress) or [repair](/tools/repair) — forces a full rewrite"
            ],
            [
              "Form fields, annotations",
              "[Flatten](/tools/flatten-pdf)"
            ],
            [
              "Metadata, history",
              "[Remove metadata](/tools/remove-metadata)"
            ],
            [
              "Attachments",
              "Remove them in a PDF editor"
            ],
            [
              "Complex vectors",
              "[Convert pages to images](/tools/pdf-to-jpg), then rebuild"
            ],
            [
              "Pages you do not need",
              "[Extract](/tools/extract-pages) the ones you do"
            ]
          ]
        }
      },
      {
        "h2": "The full-rewrite trick"
      },
      {
        "p": "Many oversized PDFs shrink dramatically from a structural rewrite alone, with no quality loss at all. [Repair](/tools/repair) rebuilds the file from its recognisable objects, discarding everything orphaned. On a heavily edited document this can halve the size before you compress anything."
      },
      {
        "note": "If nothing works and the file is genuinely dense vector artwork, converting pages to images is the last resort. You lose the text layer, so OCR afterwards if searchability matters."
      },
      {
        "h2": "Estimating what should be there"
      },
      {
        "p": "A rough expectation tells you immediately whether your file is abnormal."
      },
      {
        "table": {
          "headers": [
            "Content",
            "Expected per page"
          ],
          "rows": [
            [
              "Plain text, born-digital",
              "5–20 KB"
            ],
            [
              "Text with a few figures",
              "30–100 KB"
            ],
            [
              "Greyscale scan, 200 DPI",
              "40–80 KB"
            ],
            [
              "Colour scan, 300 DPI",
              "300–800 KB"
            ],
            [
              "Photographic, high quality",
              "500 KB – 2 MB"
            ]
          ]
        }
      },
      {
        "p": "Divide your file size by its page count. Well above the relevant row means something unexpected is inside — and compression, which works on images, will not touch it."
      },
      {
        "h2": "The full-rewrite test"
      },
      {
        "p": "Before investigating further, try [repair](/tools/repair) even though nothing appears broken. It rebuilds the file from its reachable objects and discards everything orphaned."
      },
      {
        "p": "If the file shrinks substantially, the weight was accumulated revision history from incremental saves — every previous version of the document still sitting inside it. That is entirely lossless to remove, and it is the single most common cause of a born-digital PDF being inexplicably large."
      },
      {
        "p": "If it does not shrink, the weight is genuine content and you can move on to identifying which kind."
      },
      {
        "h2": "Last resorts, and their costs"
      },
      {
        "p": "Where nothing else works — usually dense vector artwork such as a detailed map or a CAD export — converting pages to images does reduce size predictably."
      },
      {
        "p": "[PDF to JPG](/tools/pdf-to-jpg) at a chosen DPI, then [rebuild as a PDF](/tools/jpg-to-pdf). You gain full control over size and lose the text layer entirely: the document becomes unsearchable, uncopyable, and inaccessible to screen readers."
      },
      {
        "p": "Run [OCR](/tools/ocr) afterwards to restore searchability if it matters. Treat this as a genuine last resort rather than a shortcut, because you are converting a precise vector document into a photograph of itself."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why did compression barely help?",
            "a": "Your file is not image-heavy. The weight is fonts, revisions, attachments or vectors."
          },
          {
            "q": "How do I see what is taking the space?",
            "a": "Some editors show a space audit. Failing that, work through the list above by elimination."
          },
          {
            "q": "Is a full rewrite lossless?",
            "a": "Yes. Discarding orphaned objects loses nothing you can see."
          },
          {
            "q": "Should I convert pages to images?",
            "a": "Only as a last resort. It works, but you lose selectable text."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-looks-different-for-recipient",
    "title": "Why Your PDF Looks Different on Someone Else's Screen",
    "metaTitle": "PDF Looks Different for Recipients — Causes & Fixes | ThePDFNinja",
    "metaDescription": "Missing fonts, reader differences, form fields and colour management. How to build a file that renders identically everywhere.",
    "excerpt": "Same file, two machines, two appearances. Usually fonts or form fields, and both are fixable.",
    "date": "2026-11-23",
    "dateLabel": "November 23, 2026",
    "readMinutes": 9,
    "category": "Troubleshooting",
    "emoji": "👀",
    "keywords": [
      "pdf looks different",
      "pdf renders differently",
      "pdf font substitution",
      "pdf form fields not showing",
      "consistent pdf display"
    ],
    "blocks": [
      {
        "p": "You send a PDF and the recipient reports it looks different from what you sent. Both of you are looking at the same file. Several things can produce that."
      },
      {
        "h2": "The usual causes"
      },
      {
        "ul": [
          "**Missing fonts.** The commonest by far. If a font was not embedded, their reader substitutes one with different metrics, so spacing and line breaks shift.",
          "**Different reader.** Browsers, Preview, Acrobat and mobile readers each render transparency, annotations and form fields slightly differently.",
          "**Form fields.** These are rendered live by the reader. Some show values, some show empty boxes, some do not print them at all.",
          "**Annotations.** Comments and highlights may be visible in one reader and hidden in another.",
          "**Colour management.** Different profiles produce visibly different colour on different displays.",
          "**Zoom and view settings** saved into the file, which change what they see first."
        ]
      },
      {
        "h2": "Making a file look identical everywhere"
      },
      {
        "ol": [
          "**Embed all fonts.** Check document properties — every font should read embedded or embedded subset.",
          "**[Flatten](/tools/flatten-pdf).** This converts form fields and annotations into ordinary page content, removing all reader-dependent rendering.",
          "**Avoid transparency effects** where you can; they are the most inconsistently rendered feature.",
          "**[Convert to PDF/A](/tools/pdf-to-pdfa)** for anything that must render identically indefinitely — self-containment is the format's entire purpose."
        ]
      },
      {
        "note": "Flattening is the single most effective step. Most 'looks different' reports come from form fields or annotations, and flattening eliminates both categories at once."
      },
      {
        "h2": "Checking before you send"
      },
      {
        "p": "Open your final file in a second reader — if you made it in Acrobat, check it in a browser. Two renderers agreeing is reasonable evidence that a third will too."
      },
      {
        "h2": "Testing across readers before you send"
      },
      {
        "p": "You cannot install every reader, but two are enough to catch most problems, and they should be as different as possible."
      },
      {
        "p": "Check your file in the tool that made it and in **a browser** — Chrome, Firefox or Edge. Browsers use their own rendering engines with different transparency handling and different font substitution behaviour, so agreement between the two is reasonable evidence that a third will agree too."
      },
      {
        "p": "If you have a phone to hand, that is a useful third: mobile readers are the most likely to skip form fields and annotations entirely, which is exactly the failure mode this is testing for."
      },
      {
        "h2": "What to look at specifically"
      },
      {
        "ul": [
          "**Form field values.** The most common source of 'it looks blank to me'.",
          "**Annotations and highlights.** Visible in one reader, absent in another.",
          "**Transparency effects** — drop shadows, soft edges, overlapping translucent shapes.",
          "**Font rendering,** particularly line breaks. Substituted fonts have different widths, so text wraps differently.",
          "**Page one specifically,** where any saved zoom or view preference takes effect."
        ]
      },
      {
        "h2": "Flatten, and why it fixes most of this"
      },
      {
        "p": "Form fields and annotations are rendered live by the reader from stored values. Every reader makes its own decisions about how — or whether — to draw them."
      },
      {
        "p": "[Flattening](/tools/flatten-pdf) converts them into ordinary page content, drawn once into the page description. After that there is nothing left for a reader to interpret differently, which eliminates the largest category of inconsistency in a single operation."
      },
      {
        "p": "The cost is that the document becomes fixed: fields cannot be edited, annotations cannot be replied to, and any digital signature is invalidated. For a completed form being sent for review, that is usually exactly what you want."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why do my form fields look empty to the recipient?",
            "a": "Their reader is not rendering field values. Flatten before sending."
          },
          {
            "q": "Why is the spacing different?",
            "a": "A substituted font with different metrics. Embed your fonts."
          },
          {
            "q": "Does flattening change appearance?",
            "a": "No — it fixes the current appearance permanently, which is the point."
          },
          {
            "q": "Which reader is 'correct'?",
            "a": "There is no single authority. Build a file that does not depend on the reader's choices."
          }
        ]
      }
    ]
  },
  {
    "slug": "what-pdf-repair-does",
    "title": "What PDF Repair Actually Does (and When to Use It)",
    "metaTitle": "PDF Repair Explained — What It Fixes | ThePDFNinja",
    "metaDescription": "Repair rebuilds a PDF's index by scanning for objects. What that fixes, the useful side effect on file size, and its limits.",
    "excerpt": "It often works, because the part that breaks is rarely the part that matters.",
    "date": "2026-11-30",
    "dateLabel": "November 30, 2026",
    "readMinutes": 10,
    "category": "Troubleshooting",
    "emoji": "🔧",
    "keywords": [
      "pdf repair",
      "fix corrupted pdf",
      "rebuild pdf structure",
      "pdf recovery",
      "damaged pdf file"
    ],
    "blocks": [
      {
        "p": "A PDF that behaves oddly — hangs, renders wrong, will not print — is sometimes structurally damaged in ways that are invisible until something depends on the broken part."
      },
      {
        "h2": "What repair actually does"
      },
      {
        "p": "A PDF's cross-reference table is an index recording where every object lives, stored at the end of the file. If it is wrong or missing, readers cannot locate anything even when the content is perfectly intact."
      },
      {
        "p": "[Repair PDF](/tools/repair) ignores the broken index and scans the whole file for recognisable objects, rebuilding the table from what it finds. This succeeds more often than people expect, because the valuable part — page content — usually survives whatever damaged the structure."
      },
      {
        "h2": "When to try it"
      },
      {
        "ul": [
          "The file will not open, or opens with an error about damage.",
          "Some pages render and others do not.",
          "The reader hangs on a particular page.",
          "The file is far larger than it should be, from accumulated incremental saves.",
          "Another tool refuses to process it, complaining about structure."
        ]
      },
      {
        "h2": "A useful side effect"
      },
      {
        "p": "Because repair rewrites the file completely, it discards everything orphaned — previous revisions, unreferenced objects, leftovers from editing. On a heavily edited document this can substantially reduce size with no quality loss at all. Repair is worth trying on an oversized PDF even when nothing appears broken."
      },
      {
        "note": "Work on a copy. Repair rewrites structure, and if the attempt produces something worse you want the original intact."
      },
      {
        "h2": "What repair cannot do"
      },
      {
        "ul": [
          "**Recover truncated data.** If the download stopped early, the missing bytes are simply absent.",
          "**Decrypt a file.** An encrypted PDF needs its password first.",
          "**Restore deleted content** that was properly removed.",
          "**Fix a file that was never a PDF.** Check the header first."
        ]
      },
      {
        "h2": "How rebuilding works"
      },
      {
        "p": "The technique is straightforward and explains why it succeeds so often."
      },
      {
        "p": "A PDF is a collection of numbered objects — pages, fonts, images, content streams — plus a cross-reference table recording the byte offset of each. Readers use that table to find anything."
      },
      {
        "p": "When the table is wrong, a repair tool ignores it entirely and scans the file from start to finish looking for object markers, which have a recognisable form. Every object it finds is catalogued with its actual position, and a fresh cross-reference table is written from that catalogue."
      },
      {
        "p": "Because the objects themselves are usually intact — the damage was to the index, not the content — the rebuilt file is generally complete."
      },
      {
        "h2": "Using repair as a size reduction"
      },
      {
        "p": "This is the underused application. A rewrite writes only objects that are actually reachable from the document catalogue, so everything orphaned is discarded."
      },
      {
        "p": "On a file edited across many sessions, that can be most of it — every superseded page, every deleted annotation, every previous version retained by incremental saving. The result is lossless: nothing visible changes, and the file can halve."
      },
      {
        "p": "It is worth trying on any PDF that seems larger than its content warrants, before reaching for [compression](/tools/compress) that would degrade the images."
      },
      {
        "h2": "Deciding whether to bother"
      },
      {
        "table": {
          "headers": [
            "Situation",
            "Repair likely to help?"
          ],
          "rows": [
            [
              "Error message about damage",
              "Yes"
            ],
            [
              "Some pages render, others not",
              "Yes"
            ],
            [
              "Reader hangs on a page",
              "Often"
            ],
            [
              "File much larger than expected",
              "Yes, losslessly"
            ],
            [
              "File is 0 bytes",
              "No — nothing to rebuild"
            ],
            [
              "No %%EOF at the end",
              "No — truncated, data missing"
            ],
            [
              "Header is not %PDF-",
              "No — not a PDF"
            ],
            [
              "Encrypted and no password",
              "No — decrypt first"
            ]
          ]
        }
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Will repair lose content?",
            "a": "It recovers what is recoverable. Content whose data survives will be kept."
          },
          {
            "q": "My file shrank after repair. Is that a problem?",
            "a": "No — that is orphaned objects being discarded. Nothing visible is lost."
          },
          {
            "q": "Repair failed. What now?",
            "a": "Check whether the file is truncated, or whether it is actually a PDF at all."
          },
          {
            "q": "Can I repair a file that opens fine?",
            "a": "Yes, and it is worth doing on oversized files as a lossless size reduction."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-unreadable-on-phone",
    "title": "Why PDFs Are Miserable on Phones (and What Helps)",
    "metaTitle": "PDF Hard to Read on Mobile? Fixes That Work | ThePDFNinja",
    "metaDescription": "PDFs store fixed pages, so there is nothing to reflow on a narrow screen. Five things that genuinely help, starting with cropping.",
    "excerpt": "Microscopic text or endless dragging. The format is working as designed — here is how to work around it.",
    "date": "2026-12-04",
    "dateLabel": "December 4, 2026",
    "readMinutes": 10,
    "category": "Troubleshooting",
    "emoji": "📲",
    "keywords": [
      "pdf hard to read on phone",
      "pdf mobile reading",
      "pdf reflow text",
      "read pdf on phone",
      "pdf small text mobile",
      "read pdf on phone easily",
      "pdf text too small mobile",
      "make pdf readable on phone",
      "pdf reflow mobile",
      "crop pdf for phone reading",
      "best way to read pdf on mobile"
    ],
    "blocks": [
      {
        "p": "You open a PDF on your phone and the text is microscopic. Zoom in and you are dragging a window around a page. This is not a bug — it is the format doing exactly what it was designed to do."
      },
      {
        "h2": "Why PDFs are bad on phones"
      },
      {
        "p": "A PDF describes a fixed page. On a screen narrower than that page, your only options are to shrink it until it fits or to scroll around it. There is no reflow, because there is nothing to reflow — the text is at fixed coordinates."
      },
      {
        "p": "Formats built for screens, like EPUB and HTML, reflow to whatever width they are given. PDF deliberately does not, because guaranteeing identical appearance was the whole point."
      },
      {
        "h2": "What actually helps"
      },
      {
        "ol": [
          "**[Crop the margins](/tools/crop).** The single most effective change. Academic and print-laid-out documents waste a third of the page on white space, and your phone is scaling that emptiness along with the text.",
          "**Try your reader's reflow mode.** Some readers attempt to reconstruct flowing text. Results vary from useful to unreadable, and it fails entirely on scans.",
          "**[Convert to EPUB](/tools/epub-to-pdf) territory** — for long prose, a reflowable format is simply the right tool. This only works for born-digital text, not scans.",
          "**Landscape orientation.** Obvious, frequently forgotten, and often enough on its own.",
          "**[Split](/tools/split) long documents** so you are not scrolling through 300 pages to find a section."
        ]
      },
      {
        "note": "Cropping is worth trying before anything else. It takes under a minute and frequently makes an unreadable document comfortable, because you stop scaling the margins."
      },
      {
        "h2": "For documents you produce"
      },
      {
        "p": "If you know your audience reads on phones, design for it: larger base font, narrower page size, single column. A PDF laid out for A4 print is a poor mobile document no matter what the reader does."
      },
      {
        "h2": "How much cropping actually helps"
      },
      {
        "p": "The improvement is larger than it sounds because of how readers scale."
      },
      {
        "p": "A reader fits the page width to the screen. If a third of that width is margin, a third of your screen is displaying nothing, and the text is scaled down to accommodate emptiness. Removing the margins means the same screen width is filled by text, so the text is rendered proportionally larger."
      },
      {
        "p": "On a typical academic paper with wide print margins, [cropping](/tools/crop) can increase effective text size by 30–40% with no other change. That is frequently the difference between squinting and reading comfortably."
      },
      {
        "h2": "Reflow mode and its limits"
      },
      {
        "p": "Some readers offer a reflow or liquid mode that attempts to reconstruct flowing text from a PDF's positioned glyphs and lay it out for the screen."
      },
      {
        "p": "It works reasonably on simple single-column documents with clear structure. It fails on multi-column layouts, tables, anything with figures interleaved in the text, and completely on scans — there is no text to reflow, only an image."
      },
      {
        "p": "Worth trying, worth not relying on. When it works it is the best available answer; when it does not, cropping is the fallback."
      },
      {
        "h2": "If you produce documents for mobile readers"
      },
      {
        "ol": [
          "**Use a smaller page size.** A5 or a 6×9 inch page produces a line length that suits a phone; A4 does not.",
          "**Single column.** Multi-column layouts require horizontal scrolling on any narrow screen.",
          "**Larger base font.** 12pt on A4 is 12pt; on a phone it is whatever survives scaling.",
          "**Narrow margins,** since your reader is not binding it.",
          "**Consider HTML instead.** A web page reflows natively and is more accessible. Offer the PDF as the printable version."
        ]
      },
      {
        "h2": "Reader settings worth trying first"
      },
      {
        "p": "Before reprocessing the file, most mobile readers have options that help and are not obvious."
      },
      {
        "ul": [
          "**Reflow or liquid mode,** where available. Reconstructs flowing text for the screen. Works on simple single-column documents, fails on scans and multi-column layouts.",
          "**Night or sepia mode.** Not just cosmetic — reducing contrast glare genuinely helps sustained reading.",
          "**Continuous scroll versus page-by-page.** Continuous is usually better on a phone, since page snapping fights you at high zoom.",
          "**Locking rotation and reading in landscape,** which is often enough on its own for a two-column paper.",
          "**Crop-to-content,** offered by some readers, which does temporarily what [cropping](/tools/crop) does permanently."
        ]
      },
      {
        "p": "If none of those work, cropping the file is the durable fix — it travels with the document and helps on every device."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why can't PDFs reflow like web pages?",
            "a": "They store fixed glyph positions rather than flowing text. There is no structure to reflow."
          },
          {
            "q": "Does cropping really help?",
            "a": "Substantially, for documents with wide print margins. It is the highest-value quick fix."
          },
          {
            "q": "Which reader is best on mobile?",
            "a": "Ones offering a reflow or liquid mode help with born-digital text. None can help with a scan."
          },
          {
            "q": "Should I send PDF to someone reading on a phone?",
            "a": "For a form or anything designed, yes. For long prose, a web page or EPUB is kinder."
          },
          {
            "q": "How do I make a PDF readable on my phone?",
            "a": "Crop the margins. Your reader scales the whole page including empty space, so removing margins renders the text proportionally larger — often 30-40% bigger."
          },
          {
            "q": "Why is PDF text so small on mobile?",
            "a": "PDFs store fixed pages that cannot reflow. The reader fits the page width to your screen, margins included."
          },
          {
            "q": "Can I make a PDF reflow like a web page?",
            "a": "Some readers attempt it for simple single-column documents. It fails on scans, which have no text to reflow."
          },
          {
            "q": "What is the best way to read long PDFs on a phone?",
            "a": "Crop the margins, read in landscape, and use continuous scroll. For long prose, a reflowable format is genuinely better than a PDF."
          }
        ]
      }
    ]
  }
];
