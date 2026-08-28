import type { BlogArticle } from './types';

// Problem-driven guides: each answers a distinct query about something that
// has gone wrong, rather than describing a tool.

export const problemsArticles: BlogArticle[] = [
  {
    "slug": "pdf-too-large-to-email",
    "title": "Your PDF Is Too Large to Email — Here's What Actually Works",
    "metaTitle": "PDF Too Large to Email? 6 Fixes That Actually Work | ThePDFNinja",
    "metaDescription": "Gmail caps attachments at 25MB, Outlook at 20MB. Here is why your PDF is oversized and six ways to get it sent, ranked by how much quality you keep.",
    "excerpt": "Gmail stops at 25MB, Outlook at 20MB, and corporate servers are often stricter. Here is why your file is heavy and six fixes ranked by quality retained.",
    "date": "2026-01-09",
    "dateLabel": "January 9, 2026",
    "readMinutes": 6,
    "category": "Guides",
    "emoji": "📧",
    "keywords": [
      "pdf too large to email",
      "email attachment size limit",
      "reduce pdf size for email",
      "gmail 25mb limit",
      "compress pdf for email"
    ],
    "blocks": [
      {
        "p": "You hit send and it bounces. **Gmail** rejects anything over 25MB, **Outlook.com** over 20MB, and plenty of corporate mail servers cut off at 10MB. Worse, those limits apply to the *encoded* attachment, which is roughly 33% larger than the file on your disk — so a 19MB PDF can fail a 25MB limit."
      },
      {
        "p": "Before you compress anything, it helps to know why the file is heavy, because the right fix is completely different for a scanned contract than for a text report."
      },
      {
        "h2": "Why your PDF is oversized"
      },
      {
        "ul": [
          "**It contains scans or photos.** Images are almost always the culprit. A 20-page colour scan can easily exceed 40MB while a 300-page text PDF sits under 2MB.",
          "**It was exported from a design tool.** InDesign, Illustrator and PowerPoint embed full font families and high-resolution assets by default.",
          "**It has accumulated revisions.** Every incremental save can append data rather than replace it. Files edited repeatedly over months carry the history.",
          "**It embeds attachments.** PDFs can contain other files. A 'small' PDF with three spreadsheets inside is not small."
        ]
      },
      {
        "h2": "Fix 1: Compress it (keeps everything, loses some image detail)"
      },
      {
        "p": "This is the right first move for anything image-heavy. Compression re-samples embedded images to a sensible resolution and re-encodes them. For on-screen reading you rarely need more than 150 DPI, yet scanners routinely produce 300 or 600. Dropping to 150 typically cuts 60–80% with no visible difference."
      },
      {
        "p": "Run it through [Compress PDF](/tools/compress) and pick **ebook** quality — that is the sweet spot. **Screen** goes smaller but softens text noticeably; **printer** and **prepress** barely shrink anything."
      },
      {
        "h2": "Fix 2: Hit an exact size ceiling"
      },
      {
        "p": "When a system demands a specific number — under 5MB, under 500KB — guessing at quality settings wastes time. [Compress PDF to size](/tools/compress-to-size) binary-searches the quality until the file clears your target, so you get the best possible image quality that still fits."
      },
      {
        "h2": "Fix 3: Send fewer pages"
      },
      {
        "p": "The fastest compression is sending less. If your colleague needs the appendix, they do not need the 180-page report wrapped around it. [Split the PDF](/tools/split) and attach only what matters. This is also better for the recipient."
      },
      {
        "h2": "Fix 4: Convert colour scans to greyscale"
      },
      {
        "p": "A black-ink document scanned in full colour stores three colour channels of essentially grey data. [Converting to greyscale](/tools/grayscale-pdf) commonly halves the size with zero loss of readability. For text documents this is close to free."
      },
      {
        "h2": "Fix 5: Strip the invisible weight"
      },
      {
        "p": "[Flattening](/tools/flatten-pdf) merges form fields, annotations and layers into the page, discarding the interactive machinery. [Removing metadata](/tools/remove-metadata) clears revision history and embedded properties. Neither changes how the document looks, and together they can knock off a surprising amount from files that have been edited a lot."
      },
      {
        "h2": "Fix 6: Do not email it at all"
      },
      {
        "p": "Past roughly 20MB, email is the wrong transport. Upload to cloud storage and send a link. The recipient gets a faster download, you get delivery confirmation, and you can revoke access later. Email attachments sit in mailboxes forever."
      },
      {
        "h2": "Attachment limits, at a glance"
      },
      {
        "table": {
          "headers": [
            "Service",
            "Limit",
            "Effective file size"
          ],
          "rows": [
            [
              "Gmail",
              "25 MB",
              "~18 MB"
            ],
            [
              "Outlook.com",
              "20 MB",
              "~15 MB"
            ],
            [
              "Yahoo Mail",
              "25 MB",
              "~18 MB"
            ],
            [
              "Exchange (default)",
              "10 MB",
              "~7 MB"
            ],
            [
              "iCloud Mail",
              "20 MB",
              "~15 MB"
            ]
          ]
        }
      },
      {
        "note": "Those 'effective' figures account for base64 encoding, which inflates attachments by about a third. If your file is close to the limit, assume it will fail."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Does compressing a PDF reduce its quality?",
            "a": "For image-heavy files, slightly — you are lowering image resolution. At ebook quality the difference is invisible on screen. For text-only PDFs, compression is essentially lossless because there are no images to resample."
          },
          {
            "q": "Why is my scanned PDF so much bigger than a typed one?",
            "a": "A scan is a photograph of text, not text. Each page is a full-resolution image. A typed PDF stores characters and font references, which take a fraction of the space."
          },
          {
            "q": "Can I compress the same PDF twice?",
            "a": "You can, but you should not. Re-compressing stacks artefacts and often barely shrinks the file further. Always start again from the original."
          },
          {
            "q": "Will zipping the PDF help?",
            "a": "Almost never. PDFs are already internally compressed, so a ZIP typically saves 1–5%. It also adds a step for the recipient."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-wont-open-error",
    "title": "Your PDF Won't Open: How to Diagnose and Recover It",
    "metaTitle": "PDF Won't Open? How to Diagnose and Repair the File | ThePDFNinja",
    "metaDescription": "A PDF that refuses to open is usually damaged, encrypted, or incompletely downloaded. How to tell which, and how to recover the contents.",
    "excerpt": "'The file is damaged and could not be repaired.' Before you give up on the document, work out which of four very different problems you actually have.",
    "date": "2026-01-16",
    "dateLabel": "January 16, 2026",
    "readMinutes": 6,
    "category": "Troubleshooting",
    "emoji": "🚫",
    "keywords": [
      "pdf won't open",
      "pdf file damaged",
      "repair corrupted pdf",
      "pdf error opening",
      "fix broken pdf"
    ],
    "blocks": [
      {
        "p": "\"There was an error opening this document. The file is damaged and could not be repaired.\" It is one of the more alarming messages you can meet, particularly when the document is the only copy of something important."
      },
      {
        "p": "The good news is that genuine, unrecoverable corruption is rare. Four much more ordinary problems account for most cases, and they need completely different fixes."
      },
      {
        "h2": "1. The download did not finish"
      },
      {
        "p": "By far the most common cause. An interrupted download leaves a file that looks the right size in your file manager but is missing its final bytes — and a PDF stores its cross-reference table at the *end*, so a truncated file has no map of its own contents."
      },
      {
        "p": "Check the file size against the source. If it is smaller, download again. If you cannot tell, open the file in a plain text editor: a complete PDF ends with the characters **%%EOF**. If that is missing, the file is truncated and no repair tool can invent the missing data."
      },
      {
        "h2": "2. It is encrypted, not broken"
      },
      {
        "p": "Some readers report an encrypted PDF as damaged rather than prompting for a password, particularly older or embedded viewers. If the file came from a bank, a government portal or a legal firm, this is likely."
      },
      {
        "p": "Try opening it in a different reader first — a modern browser will usually prompt properly. If you own the document and know the password, [Unlock PDF](/tools/unlock) removes the encryption so any reader can open it."
      },
      {
        "h2": "3. It is not actually a PDF"
      },
      {
        "p": "A file named `report.pdf` is not necessarily a PDF. Renaming a `.docx` does not convert it. Open it in a text editor and look at the first five characters: a real PDF begins **%PDF-**. If you see `PK` it is a ZIP-based Office file; if you see readable text it may be HTML saved with the wrong extension."
      },
      {
        "h2": "4. The internal structure is genuinely damaged"
      },
      {
        "p": "This happens after a crash mid-save, a bad USB transfer, or a failing drive. The page content is usually intact — what is broken is the index pointing to it. Repair tools rebuild that index by scanning the file for recognisable objects."
      },
      {
        "p": "[Repair PDF](/tools/repair) does exactly this. It is often successful precisely because the valuable part, the page data, survives even when the structure does not."
      },
      {
        "h2": "A recovery order that works"
      },
      {
        "ol": [
          "Try a second reader — browser, phone, a different desktop app. Readers vary enormously in tolerance.",
          "Compare the file size to the original source, if you have one.",
          "Check the first and last bytes for **%PDF-** and **%%EOF**.",
          "Run it through [Repair PDF](/tools/repair).",
          "If repair fails but the file opens partially, [split out](/tools/split) the pages that do render and rebuild from those.",
          "Check for an autosave or temp copy — editors often leave one beside the original."
        ]
      },
      {
        "note": "Always work on a copy. Repair tools rewrite structure, and if the attempt makes matters worse you want the original untouched."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Can a repaired PDF lose content?",
            "a": "Repair recovers what is recoverable. If a page's data was genuinely destroyed, no tool can restore it. What repair fixes is the index — which is what usually breaks."
          },
          {
            "q": "Why does the file open on my phone but not my laptop?",
            "a": "Mobile readers are frequently more forgiving of malformed structure. If it opens anywhere, the content survives — repair it and you will get a file that opens everywhere."
          },
          {
            "q": "Does file size tell me whether it is damaged?",
            "a": "A 0KB file is definitely lost. Otherwise size alone tells you little — a truncated file can still be most of its original size."
          },
          {
            "q": "Is a password-protected PDF the same as a damaged one?",
            "a": "No, though some readers conflate them. Encryption is intentional; damage is not. Try another reader before assuming the worst."
          }
        ]
      }
    ]
  },
  {
    "slug": "scanned-pdf-not-searchable",
    "title": "Why You Can't Search or Copy Text in a Scanned PDF",
    "metaTitle": "Can't Search a Scanned PDF? Here's Why and How to Fix It | ThePDFNinja",
    "metaDescription": "A scan is a picture of text, not text. What OCR does, when it works well, and how to turn an unsearchable scan into a document you can search and copy from.",
    "excerpt": "Ctrl+F finds nothing and you cannot select a word. Your scan is a photograph of a page — here is how OCR turns it back into real text.",
    "date": "2026-01-23",
    "dateLabel": "January 23, 2026",
    "readMinutes": 6,
    "category": "Guides",
    "emoji": "🔍",
    "keywords": [
      "scanned pdf not searchable",
      "ocr pdf",
      "make pdf searchable",
      "can't select text in pdf",
      "convert scan to text"
    ],
    "blocks": [
      {
        "p": "You open a scanned contract, press Ctrl+F, search for a name you can plainly see on the page — and get nothing. You try to select it and the cursor drags a rectangle instead of highlighting words."
      },
      {
        "p": "Nothing is broken. Your scanner produced exactly what it was asked to: a **photograph of a page**. To your computer it is a grid of coloured pixels that happens to look like writing. There are no words in the file at all."
      },
      {
        "h2": "What OCR actually does"
      },
      {
        "p": "Optical Character Recognition examines the image, identifies shapes as letters, groups them into words and lines, and writes that text into the document as a real, selectable layer positioned over the picture."
      },
      {
        "p": "That last detail matters: good OCR does not replace your scan. It leaves the original image visible and invisibly overlays the recognised text. The page looks identical, but now it is searchable and copyable. Run a file through [OCR](/tools/ocr) and this is what you get back."
      },
      {
        "h2": "What makes OCR accurate — or not"
      },
      {
        "ul": [
          "**Resolution.** 300 DPI is the sweet spot. Below 200 accuracy falls sharply; above 400 you gain almost nothing and pay in file size.",
          "**Straightness.** A page scanned at an angle confuses line detection. Even 2–3 degrees measurably hurts results.",
          "**Contrast.** Crisp black on white is ideal. Grey photocopies of photocopies are the classic hard case.",
          "**Typeface.** Ordinary print is near-perfect. Handwriting, decorative fonts and heavy italics are much harder.",
          "**Layout.** Multi-column pages, tables and sidebars need layout analysis to read in the right order, not just character recognition."
        ]
      },
      {
        "h2": "Getting the best result"
      },
      {
        "ol": [
          "Rescan at 300 DPI if you can — it beats every other improvement combined.",
          "Straighten the page before OCR. Crooked input is the single most common cause of garbled output.",
          "Scan in greyscale rather than colour for text documents. It is cleaner and smaller.",
          "OCR first, compress second. Compressing before OCR destroys the detail recognition depends on.",
          "Spot-check the output on names, numbers and dates — the places where an error costs you most."
        ]
      },
      {
        "note": "OCR before compression, always. If you compress a scan down to 100KB and then run OCR, you are asking the engine to read letters that no longer have enough pixels to be distinguishable."
      },
      {
        "h2": "When OCR is the wrong tool"
      },
      {
        "p": "If you only need the words and not the layout, [PDF to text](/tools/pdf-to-txt) is simpler. If you need to edit the document properly, [PDF to Word](/tools/pdf-to-word) reconstructs paragraphs and tables. And if the PDF was born digital rather than scanned, you do not need OCR at all — the text is already there, and a different reader will select it fine."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Does OCR change how my document looks?",
            "a": "No. The recognised text is added as an invisible layer over the original image. The page renders exactly as before."
          },
          {
            "q": "How accurate is OCR?",
            "a": "On clean 300 DPI printed text, typically 98–99%. On poor photocopies or handwriting it drops sharply. Always verify names and numbers."
          },
          {
            "q": "Can OCR read handwriting?",
            "a": "Neat, printed handwriting sometimes. Cursive reliably not. OCR is trained on typeset characters."
          },
          {
            "q": "Why did my OCR output come out as gibberish?",
            "a": "Usually a crooked page, resolution below 200 DPI, or a scan that was compressed before OCR ran. Rescan straight at 300 DPI."
          }
        ]
      }
    ]
  },
  {
    "slug": "combine-photos-into-one-pdf",
    "title": "How to Combine Photos into a Single PDF (Without Losing Quality)",
    "metaTitle": "Combine Photos into One PDF — Free, No Signup | ThePDFNinja",
    "metaDescription": "Turn a folder of JPGs or phone photos into one clean PDF. Page order, orientation, file size and the mistakes that produce a 90MB document.",
    "excerpt": "Receipts, ID documents, homework photos — portals almost always want one PDF, not twelve images. Here is how to build one properly.",
    "date": "2026-01-30",
    "dateLabel": "January 30, 2026",
    "readMinutes": 6,
    "category": "Guides",
    "emoji": "🖼️",
    "keywords": [
      "combine photos into pdf",
      "jpg to pdf",
      "multiple images to one pdf",
      "convert photos to pdf",
      "merge images pdf"
    ],
    "blocks": [
      {
        "p": "Almost every upload form that accepts documents wants a single PDF. Your evidence, however, is usually a dozen photos taken on a phone. Combining them sounds trivial, and mostly it is — but the naive approach produces a 90MB file that the portal then rejects."
      },
      {
        "h2": "The straightforward route"
      },
      {
        "p": "[JPG to PDF](/tools/jpg-to-pdf) accepts multiple images and produces one document, one image per page, in the order you provide them. For most purposes that is the whole job."
      },
      {
        "p": "Two things to get right before you convert:"
      },
      {
        "ul": [
          "**Order.** Files are used in the order you add them, not alphabetically as your file manager displays them. `IMG_1002` may sort before `IMG_998` in some listings and after it in others.",
          "**Orientation.** Phone photos carry an EXIF rotation flag. Some tools honour it, some do not. Check the first page before assuming the rest are fine."
        ]
      },
      {
        "h2": "Keeping the file size sane"
      },
      {
        "p": "A modern phone photo is 3–8MB. Twelve of them is 40–90MB before any PDF overhead — and a portal that caps uploads at 2MB will reject it instantly."
      },
      {
        "p": "Two approaches, and the order matters:"
      },
      {
        "ol": [
          "**Shrink the images first.** [Compress images](/tools/image-compress) or [resize](/tools/image-resize) them to something sensible — 1600px on the long edge is more than enough for a document — then convert. This gives the best quality per kilobyte.",
          "**Convert first, then compress the PDF.** Faster, and [compress to size](/tools/compress-to-size) lets you name an exact ceiling. Slightly worse quality for the same size, but far less fiddly."
        ]
      },
      {
        "h2": "For documents rather than photographs"
      },
      {
        "p": "If you are photographing paper — receipts, forms, ID — treat it as scanning, not photography:"
      },
      {
        "ul": [
          "Shoot straight down in even light. Shadows and angles are what make phone scans look amateurish.",
          "[Crop](/tools/image-crop) away the desk. Background is wasted pixels and looks careless.",
          "[Convert to greyscale](/tools/image-to-grayscale) for black-ink documents — roughly a third of the size, no loss of legibility.",
          "Run [OCR](/tools/ocr) afterwards if anyone will need to search the result."
        ]
      },
      {
        "note": "If the destination demands a specific size — many government portals want under 200KB — build the PDF first and finish with [compress to size](/tools/compress-to-size) rather than guessing at image quality settings."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Can I control the page order?",
            "a": "Yes — images are placed in the order you add them. If the result is wrong, [Organize PDF](/tools/organize) lets you reorder pages afterwards without redoing the conversion."
          },
          {
            "q": "Will converting reduce my photo quality?",
            "a": "The conversion itself embeds your images as they are. Quality only drops if you compress, and then it is your choice how much."
          },
          {
            "q": "What about HEIC photos from an iPhone?",
            "a": "Convert them first with [HEIC to JPG](/tools/heic-to-jpg). Many tools cannot read HEIC directly."
          },
          {
            "q": "Can I mix JPG and PNG in one PDF?",
            "a": "Yes. Convert any odd formats to a common one first if a tool complains, but mixed input is normally fine."
          }
        ]
      }
    ]
  },
  {
    "slug": "extract-pages-from-pdf",
    "title": "How to Extract Specific Pages from a PDF",
    "metaTitle": "Extract Pages from a PDF — Free Online, No Signup | ThePDFNinja",
    "metaDescription": "Pull out one page or a range from a larger PDF without retyping or printing. Extract, split and delete compared, and when to use each.",
    "excerpt": "You need pages 12 to 18 of a 200-page report. Three different tools do subtly different jobs — here is which one you actually want.",
    "date": "2026-02-06",
    "dateLabel": "February 6, 2026",
    "readMinutes": 5,
    "category": "Guides",
    "emoji": "✂️",
    "keywords": [
      "extract pages from pdf",
      "split pdf pages",
      "save one page of pdf",
      "separate pdf pages",
      "take pages out of pdf"
    ],
    "blocks": [
      {
        "p": "Someone sends a 200-page manual and you need the six pages covering installation. Printing to PDF loses the text layer, screenshotting loses quality, and retyping is absurd. What you want is extraction."
      },
      {
        "h2": "Three tools, three different jobs"
      },
      {
        "table": {
          "headers": [
            "Tool",
            "Keeps",
            "Discards",
            "Use when"
          ],
          "rows": [
            [
              "[Extract pages](/tools/extract-pages)",
              "The pages you name",
              "Everything else",
              "You want a small subset"
            ],
            [
              "[Delete pages](/tools/delete-pages)",
              "Everything else",
              "The pages you name",
              "You want to remove a few pages"
            ],
            [
              "[Split PDF](/tools/split)",
              "Every page, as separate files",
              "Nothing",
              "You want each page individually"
            ]
          ]
        }
      },
      {
        "p": "They overlap, but the mental model differs. Extracting pages 12–18 of 200 is one operation; deleting the other 194 is madness. Removing three blank pages is a delete, not an extract."
      },
      {
        "h2": "Getting the page numbers right"
      },
      {
        "p": "This is where most mistakes happen. The number printed on the page is often not the page's position in the file. A report with a cover, a contents page and two blank leaves puts printed page 1 at file position 5."
      },
      {
        "p": "Tools count file positions, not printed numbers. Open the document, look at your reader's page counter — not the ink on the page — and use that."
      },
      {
        "h2": "What is preserved"
      },
      {
        "p": "A proper extraction copies the page objects intact. Text stays selectable, hyperlinks inside the extracted range keep working, images keep their resolution, and fonts come along. What you lose is anything that pointed outward: a cross-reference to page 140 has nowhere to go once page 140 is gone."
      },
      {
        "note": "Extraction is not redaction. Removing a page removes it, but if sensitive text appears on a page you keep, it is still there — even under a black box. Use [redact](/tools/pdf-redact) for that."
      },
      {
        "h2": "Practical sequences"
      },
      {
        "ul": [
          "**Sharing a chapter:** extract the range, then [compress](/tools/compress) the result if you are emailing it.",
          "**Rebuilding a document:** extract several ranges separately, then [merge](/tools/merge) them in the order you want.",
          "**Cleaning a scan:** [delete](/tools/delete-pages) the blank pages, then [reorder](/tools/organize) if the scanner fed pages out of sequence.",
          "**Archiving one section:** extract, then [convert to PDF/A](/tools/pdf-to-pdfa) if it is going into long-term storage."
        ]
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Does extracting reduce quality?",
            "a": "No. Pages are copied, not re-rendered. The extracted file is a faithful copy of those pages."
          },
          {
            "q": "Can I extract from a password-protected PDF?",
            "a": "Not while it is encrypted. [Unlock](/tools/unlock) it first, which needs the password — this is not a way around protection you do not have rights to."
          },
          {
            "q": "Why is my extracted file nearly as big as the original?",
            "a": "PDFs share resources like fonts and images across pages. If page 3 uses an image also used elsewhere, extracting it brings the whole asset. Run [compress](/tools/compress) afterwards."
          },
          {
            "q": "Can I extract non-consecutive pages into one file?",
            "a": "Yes — name each page or range, and they are combined into a single document in the order given."
          }
        ]
      }
    ]
  },
  {
    "slug": "remove-password-from-pdf-you-own",
    "title": "How to Remove a Password from a PDF You Own",
    "metaTitle": "Remove PDF Password — Free Online Unlock Tool | ThePDFNinja",
    "metaDescription": "Two kinds of PDF password exist and they behave very differently. How to remove protection from documents you own, and what no tool can do for you.",
    "excerpt": "Bank statements and payslips arrive encrypted. If you know the password but are tired of typing it, here is how to remove it permanently.",
    "date": "2026-02-13",
    "dateLabel": "February 13, 2026",
    "readMinutes": 5,
    "category": "Security",
    "emoji": "🔓",
    "keywords": [
      "remove pdf password",
      "unlock pdf",
      "decrypt pdf",
      "remove pdf protection",
      "pdf password remover"
    ],
    "blocks": [
      {
        "p": "Banks, payroll providers and insurers routinely send statements encrypted with your date of birth or account number. It is sensible protection in transit and a nuisance forever after — particularly if you archive the documents somewhere already secure."
      },
      {
        "h2": "Two very different passwords"
      },
      {
        "table": {
          "headers": [
            "Type",
            "What it does",
            "Removable?"
          ],
          "rows": [
            [
              "**User password**",
              "Required to open the file at all. The content is genuinely encrypted.",
              "Only with the password"
            ],
            [
              "**Owner password**",
              "File opens freely but printing, copying or editing are restricted.",
              "Yes — the restriction is a flag, not encryption"
            ]
          ]
        }
      },
      {
        "p": "That distinction explains a lot of confusing behaviour. A PDF that opens instantly but refuses to let you copy text has an owner password. A PDF that demands a password before showing anything has a user password, and the content is mathematically inaccessible without it."
      },
      {
        "h2": "Removing protection you have rights to"
      },
      {
        "p": "[Unlock PDF](/tools/unlock) removes both kinds, given the password where one is needed. Once decrypted the file opens anywhere with no prompt — useful for archiving, for search indexing, and for readers that handle encryption poorly."
      },
      {
        "note": "This is for documents you own or are authorised to access. Removing protection from someone else's confidential file is not a technical question, and no tool here will recover a password you do not have."
      },
      {
        "h2": "What to do instead of removing it"
      },
      {
        "ul": [
          "**Storing it somewhere already secure?** Decrypting is reasonable — the encryption was for transit.",
          "**Sending it on?** Keep the encryption, or better, [redact](/tools/pdf-redact) the sensitive parts and send an unencrypted extract.",
          "**Just want to print it?** An owner password blocks printing; unlocking removes that flag.",
          "**Need it searchable?** Encrypted PDFs are invisible to desktop search. Decrypt, then index."
        ]
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Can you recover a forgotten password?",
            "a": "No. A user password encrypts the content; without it the data is unreadable. Contact whoever issued the document — they can usually reissue it."
          },
          {
            "q": "Why can I open the file but not copy from it?",
            "a": "That is an owner password. The file is not encrypted, only flagged as restricted, and unlocking removes the flag."
          },
          {
            "q": "Is removing my own PDF's password legal?",
            "a": "For documents you own or are authorised to use, yes. The restriction exists to protect you, and you can waive it."
          },
          {
            "q": "Does unlocking change the content?",
            "a": "No. It removes the encryption layer; pages, text and images are untouched."
          }
        ]
      }
    ]
  },
  {
    "slug": "rotate-pdf-pages-permanently",
    "title": "Why Your Rotated PDF Reverts — and How to Fix It Permanently",
    "metaTitle": "Rotate PDF Pages Permanently — Free Online | ThePDFNinja",
    "metaDescription": "Rotating in a reader often only changes the view. How to save rotation into the file so it stays fixed for everyone who opens it.",
    "excerpt": "You rotate the page, close the file, reopen it — and it is sideways again. Your reader changed the view, not the document.",
    "date": "2026-02-20",
    "dateLabel": "February 20, 2026",
    "readMinutes": 5,
    "category": "Guides",
    "emoji": "🔄",
    "keywords": [
      "rotate pdf",
      "rotate pdf pages permanently",
      "pdf sideways",
      "fix upside down pdf",
      "save rotated pdf"
    ],
    "blocks": [
      {
        "p": "A scanner fed a page in landscape, and now one sheet in your document sits at ninety degrees. You rotate it in your reader, it looks right, you close it — and the next person to open it sees it sideways again."
      },
      {
        "h2": "View rotation versus stored rotation"
      },
      {
        "p": "Most readers offer a rotate button that spins the display without touching the file. It is a convenience for reading, not an edit. Some remember your preference locally, which is worse — it looks fixed on your machine and stays broken everywhere else."
      },
      {
        "p": "A PDF page carries a **/Rotate** attribute in its own definition. Changing that changes the document, and every reader everywhere honours it. That is what [Rotate PDF](/tools/rotate) writes."
      },
      {
        "h2": "Getting the direction right"
      },
      {
        "ul": [
          "**90°** turns clockwise. A page whose top faces left needs this.",
          "**270°** turns anticlockwise — equivalently, 90° the other way.",
          "**180°** flips upside-down pages, common when a stack is fed the wrong way round.",
          "Rotation is cumulative: applying 90° twice gives you 180°."
        ]
      },
      {
        "h2": "When only some pages are wrong"
      },
      {
        "p": "Mixed orientation is the usual case with scans — portrait pages interleaved with a landscape table. Apply rotation to named pages rather than the whole document, or the pages that were already correct end up wrong."
      },
      {
        "note": "Rotation is lossless. The page is not re-rendered, only re-flagged, so text stays selectable and image quality is untouched. You can rotate as many times as you like without degradation."
      },
      {
        "h2": "Related fixes"
      },
      {
        "p": "If pages are also out of order, [organize](/tools/organize) them. If the scan is crooked rather than rotated — a few degrees off, not ninety — rotation will not help; that needs deskewing before [OCR](/tools/ocr), or accuracy will suffer."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why does my PDF look fine on my computer but sideways to others?",
            "a": "Your reader saved a local view preference. The file itself is unchanged. Rotate it properly and the fix travels with the document."
          },
          {
            "q": "Does rotating reduce quality?",
            "a": "No. It sets a flag on the page; no pixels are re-encoded."
          },
          {
            "q": "Can I rotate a single page?",
            "a": "Yes — specify which pages to affect and leave the rest alone."
          },
          {
            "q": "My page is slightly tilted, not rotated. What now?",
            "a": "That is skew from scanning. Rotation works in 90° steps and cannot fix it. Rescan if you can, especially before running OCR."
          }
        ]
      }
    ]
  },
  {
    "slug": "add-page-numbers-to-pdf",
    "title": "How to Add Page Numbers to a PDF (and Where to Put Them)",
    "metaTitle": "Add Page Numbers to a PDF — Free Online | ThePDFNinja",
    "metaDescription": "Add page numbers to any PDF, including merged and scanned documents. Position, starting number, and the conventions that matter for submissions.",
    "excerpt": "Merged three documents and the numbering restarts three times? Here is how to number a PDF properly, and what examiners and courts expect.",
    "date": "2026-02-27",
    "dateLabel": "February 27, 2026",
    "readMinutes": 5,
    "category": "Guides",
    "emoji": "🔢",
    "keywords": [
      "add page numbers to pdf",
      "number pdf pages",
      "pdf pagination",
      "page numbers on scanned pdf",
      "insert page numbers pdf"
    ],
    "blocks": [
      {
        "p": "Page numbers stop being cosmetic the moment a document is printed, cited or submitted. A court bundle, a thesis, a tender response — all are unusable without reliable pagination, and merged PDFs almost never have it."
      },
      {
        "h2": "Why merged documents lose their numbering"
      },
      {
        "p": "Numbers printed on a page are just ink. When you [merge](/tools/merge) three reports, you get all three sets of original numbers, each restarting. The reader now has three page 1s and no way to reference anything."
      },
      {
        "p": "[Add page numbers](/tools/page-numbers) stamps a fresh, continuous sequence across the whole document, which is what any recipient actually needs."
      },
      {
        "h2": "Choosing a position"
      },
      {
        "ul": [
          "**Bottom centre** — the safe default. Survives single- and double-sided printing.",
          "**Bottom right** — common in business documents; can be lost in a left-bound stack if margins are tight.",
          "**Top right** — favoured for legal bundles, where the bottom often carries exhibit stamps.",
          "Avoid corners on scans: original page furniture is often already there."
        ]
      },
      {
        "h2": "Starting somewhere other than 1"
      },
      {
        "p": "Front matter conventionally sits outside the main sequence. If a cover and contents page precede the body, start numbering at the body and let those two go unnumbered — or number from a later value so the printed number matches a wider document. Both are standard; consistency matters more than which you choose."
      },
      {
        "note": "Add page numbers **last**. If you number and then reorder, split or delete pages, the numbers become wrong and cannot fix themselves — they are stamped ink, not a live field."
      },
      {
        "h2": "A working order of operations"
      },
      {
        "ol": [
          "[Merge](/tools/merge) everything into one file.",
          "[Reorder](/tools/organize) into final sequence.",
          "[Delete](/tools/delete-pages) blanks and duplicates.",
          "[Rotate](/tools/rotate) anything sideways.",
          "**Then** add page numbers.",
          "[Compress](/tools/compress) if you have a size limit to meet."
        ]
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Will numbers cover my existing content?",
            "a": "They sit in the margin. If your document has unusually tight margins, check the first and last pages before distributing."
          },
          {
            "q": "Can I number a scanned PDF?",
            "a": "Yes. Numbers are drawn onto the page and do not require a text layer."
          },
          {
            "q": "Can I remove them later?",
            "a": "Not cleanly — they become part of the page. Keep the unnumbered original."
          },
          {
            "q": "Can I start at a number other than 1?",
            "a": "Yes. Useful when the file is one section of a larger bound document."
          }
        ]
      }
    ]
  },
  {
    "slug": "watermark-pdf-documents",
    "title": "How to Watermark a PDF — and What a Watermark Actually Protects",
    "metaTitle": "Add a Watermark to a PDF — Free Online | ThePDFNinja",
    "metaDescription": "Add DRAFT, CONFIDENTIAL or your name to every page. What watermarks deter, what they do not prevent, and how to choose opacity that reads without obscuring.",
    "excerpt": "A watermark deters casual misuse and marks status at a glance. It is not security — here is the difference, and how to apply one well.",
    "date": "2026-03-06",
    "dateLabel": "March 6, 2026",
    "readMinutes": 5,
    "category": "Security",
    "emoji": "💧",
    "keywords": [
      "watermark pdf",
      "add watermark to pdf",
      "draft watermark",
      "confidential stamp pdf",
      "pdf watermark free"
    ],
    "blocks": [
      {
        "p": "Watermarks do two useful jobs: they state a document's status so nobody mistakes a draft for a final, and they discourage casual redistribution by making the source obvious on every page."
      },
      {
        "h2": "What a watermark is not"
      },
      {
        "p": "It is not protection. The underlying text remains fully selectable and copyable, and anyone determined can strip the mark. If your goal is to stop information leaving, you need [redaction](/tools/pdf-redact) for the content itself or [encryption](/tools/protect) for the file."
      },
      {
        "p": "Treat a watermark as a label, not a lock. Labels are still genuinely useful — most document mishaps are accidents, not attacks."
      },
      {
        "h2": "Choosing the text"
      },
      {
        "ul": [
          "**DRAFT** — the most valuable of all. Stops the wrong version being signed.",
          "**CONFIDENTIAL** — sets expectations and, in some jurisdictions, supports a legal position.",
          "**Recipient name or date** — makes an individual copy traceable, which changes behaviour more than a generic warning.",
          "**Company name** — light branding for shared collateral."
        ]
      },
      {
        "h2": "Getting opacity right"
      },
      {
        "p": "This is where watermarks usually go wrong. Too faint and it is decorative; too strong and it competes with the content."
      },
      {
        "ul": [
          "**0.1–0.2** — barely visible. Fine for branding, useless as a warning.",
          "**0.3** — a good default. Clearly present, easy to read through.",
          "**0.5+** — genuinely intrusive. Appropriate for DRAFT, where interfering is the point.",
          "Diagonal placement across the page is harder to crop away than a corner mark."
        ]
      },
      {
        "note": "Watermark a **copy**. Applying a mark draws it into the page permanently — there is no clean removal afterwards. Keep the unmarked master."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Can a watermark be removed?",
            "a": "Not cleanly, but it can be obscured or the page re-rendered. It deters rather than prevents."
          },
          {
            "q": "Does it stop copying the text?",
            "a": "No. Text underneath stays selectable. Use redaction to remove content."
          },
          {
            "q": "Will it appear on printouts?",
            "a": "Yes — it is part of the page, not a view setting."
          },
          {
            "q": "Can I watermark only some pages?",
            "a": "Typically it is applied to all pages, which is usually what you want for a status marker."
          }
        ]
      }
    ]
  },
  {
    "slug": "delete-blank-pages-from-scan",
    "title": "How to Remove Blank Pages from a Scanned Document",
    "metaTitle": "Remove Blank Pages from a PDF — Free Online | ThePDFNinja",
    "metaDescription": "Duplex scanners insert blank backs. How to find and delete them, and why 'blank' pages are rarely actually blank.",
    "excerpt": "Scan a 20-page double-sided document and you often get 40 pages, half of them empty. Here is how to clean that up.",
    "date": "2026-09-01",
    "dateLabel": "September 1, 2026",
    "readMinutes": 6,
    "category": "Guides",
    "emoji": "📃",
    "keywords": [
      "remove blank pages from pdf",
      "delete blank pages",
      "scanned pdf blank pages",
      "clean up scan",
      "duplex scan blank"
    ],
    "blocks": [
      {
        "p": "Duplex scanners photograph both sides of every sheet whether or not the back carries anything. A 20-page single-sided document becomes 40 pages, alternating content and emptiness. It looks careless, doubles the file size, and wastes paper if anyone prints it."
      },
      {
        "h2": "Blank is rarely blank"
      },
      {
        "p": "A scanned 'blank' page is a photograph of white paper. It contains dust specks, scanner noise, faint show-through from the printed side, and edge shadows. That is why automatic blank detection sometimes misses pages — and why they still cost real file size despite appearing empty."
      },
      {
        "h2": "Removing them"
      },
      {
        "ol": [
          "Open the PDF and note the positions of the empty pages. With duplex scans they are usually every second page, which makes this quick.",
          "Use [Delete pages](/tools/delete-pages) and list them.",
          "Check the result — a mis-typed number removes a page you needed.",
          "[Compress](/tools/compress) afterwards. Removing pages does not always shrink the file, because PDF saving often appends rather than rewrites."
        ]
      },
      {
        "note": "Deleting a page does not necessarily erase its data from the file. If the scan contained anything sensitive, compress or [flatten](/tools/flatten-pdf) afterwards to force a full rewrite."
      },
      {
        "h2": "Preventing it next time"
      },
      {
        "ul": [
          "Set the scanner to single-sided for single-sided originals — obvious, routinely forgotten.",
          "Enable blank page detection in the scanner driver. Raise the sensitivity threshold if show-through is defeating it.",
          "Scan in greyscale. Colour noise on white paper is what makes blank pages large and hard to detect.",
          "Scan at 200–300 DPI. Higher resolution makes noise more prominent, not less."
        ]
      },
      {
        "h2": "While you are in there"
      },
      {
        "p": "A freshly cleaned scan usually benefits from two more passes: [rotate](/tools/rotate) any sheets fed the wrong way, and [OCR](/tools/ocr) so the document becomes searchable. Do OCR after deletion and before compression."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why is my blank page 200KB?",
            "a": "It is a photograph of white paper, complete with sensor noise. Greyscale scanning reduces this substantially."
          },
          {
            "q": "Can blank pages be removed automatically?",
            "a": "Some scanner drivers do it at capture. After the fact, identifying them by eye and deleting by number is more reliable."
          },
          {
            "q": "The file did not shrink after deleting pages. Why?",
            "a": "PDF editors often append changes rather than rewriting. Compress afterwards to force a rewrite."
          },
          {
            "q": "Will deleting pages affect the others?",
            "a": "No. Remaining pages are untouched, though printed page numbers will no longer match positions."
          }
        ]
      }
    ]
  },
  {
    "slug": "crop-margins-from-pdf",
    "title": "How to Crop Margins from a PDF (and Why It Helps)",
    "metaTitle": "Crop PDF Margins — Free Online Tool | ThePDFNinja",
    "metaDescription": "Cropping removes wasted white space, makes documents readable on small screens, and tidies scans with black scanner edges.",
    "excerpt": "Huge margins waste screen space on a tablet and look sloppy on a scan. Cropping fixes both — with one important caveat.",
    "date": "2026-09-09",
    "dateLabel": "September 9, 2026",
    "readMinutes": 6,
    "category": "Guides",
    "emoji": "✂️",
    "keywords": [
      "crop pdf",
      "remove pdf margins",
      "crop pdf pages",
      "trim pdf white space",
      "crop scanned pdf"
    ],
    "blocks": [
      {
        "p": "Academic papers and older documents often carry margins designed for print binding — sometimes a third of the page. On a laptop that is merely wasteful; on a phone or e-reader it makes the text unreadably small, because the reader scales the whole page including the emptiness."
      },
      {
        "h2": "What cropping actually does"
      },
      {
        "p": "This is the key thing to understand: cropping a PDF does **not** delete content. It sets a **crop box**, an instruction telling readers which region of the page to display. The material outside is still in the file, just not shown."
      },
      {
        "p": "Two consequences follow. Cropping is reversible and lossless — you can restore the full page later. And it is **not a redaction technique**: text hidden outside the crop box can be recovered trivially. For removing information, use [redact](/tools/pdf-redact)."
      },
      {
        "h2": "When it is worth doing"
      },
      {
        "ul": [
          "**Reading on a small screen.** The single biggest quality-of-life improvement for PDFs on a tablet or phone.",
          "**Scanner edges.** Flatbed scans of smaller originals leave black borders. Cropping removes them and shrinks the file.",
          "**Presentation slides exported to PDF.** Often carry large empty regions around the content area.",
          "**Printing several pages per sheet.** Crop first, then [n-up](/tools/n-up-pdf), or you tile mostly whitespace."
        ]
      },
      {
        "h2": "Doing it"
      },
      {
        "p": "[Crop PDF](/tools/crop) takes margins in points — 72 points to an inch. Measure generously at first: cutting 36 points off each side is usually safe, and you can always crop further. Cropping too aggressively clips text on pages whose layout differs from the one you measured."
      },
      {
        "note": "Check every page type before distributing. Title pages, chapter openers and landscape tables frequently have different margins from body pages, and a single crop applied everywhere can decapitate a heading."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Does cropping reduce file size?",
            "a": "Usually only slightly, since the content is retained. For scans with large black borders it can help more, especially combined with compression."
          },
          {
            "q": "Can I undo a crop?",
            "a": "Yes, if the tool preserves the original media box — the data is still there. Keep a copy regardless."
          },
          {
            "q": "Is cropping a safe way to hide information?",
            "a": "No. Cropped content is trivially recoverable. Use redaction."
          },
          {
            "q": "Can I crop different pages differently?",
            "a": "Most simple tools apply one crop to all pages. For mixed layouts, split, crop separately, then merge."
          }
        ]
      }
    ]
  },
  {
    "slug": "print-multiple-pages-per-sheet",
    "title": "How to Print Multiple PDF Pages on One Sheet",
    "metaTitle": "Print 2, 4 or 6 PDF Pages Per Sheet — N-up Guide | ThePDFNinja",
    "metaDescription": "Save paper and make handouts by tiling several pages onto one. How n-up layout works and when it stops being readable.",
    "excerpt": "Slide decks, handouts and drafts do not need one page per sheet. Here is how to tile them without making them unreadable.",
    "date": "2026-09-17",
    "dateLabel": "September 17, 2026",
    "readMinutes": 6,
    "category": "Guides",
    "emoji": "🖨️",
    "keywords": [
      "print multiple pages per sheet",
      "n-up pdf",
      "2 pages per sheet",
      "print 4 slides per page",
      "save paper printing pdf"
    ],
    "blocks": [
      {
        "p": "Printing a 60-slide deck one slide per sheet wastes 60 sheets to convey what fits on 15. **N-up** layout tiles multiple pages onto one, and for handouts, drafts and reference material it is almost always the right choice."
      },
      {
        "h2": "Print dialog versus a real n-up file"
      },
      {
        "p": "Most print dialogs offer 'pages per sheet'. That works for a one-off. But it only affects that print job — the file itself is unchanged, so anyone you send it to gets the original layout, and you cannot preview the result reliably."
      },
      {
        "p": "[N-up PDF](/tools/n-up-pdf) creates a new document with the tiled layout baked in. Useful when you want to email a handout, archive the compact version, or check exactly how it will look before committing paper."
      },
      {
        "h2": "How many per sheet is sensible"
      },
      {
        "table": {
          "headers": [
            "Per sheet",
            "Result",
            "Good for"
          ],
          "rows": [
            [
              "2",
              "Half size, very readable",
              "Documents, reports, drafts"
            ],
            [
              "4",
              "Quarter size, readable",
              "Slide decks, handouts"
            ],
            [
              "6",
              "Small but usable for slides",
              "Reference decks"
            ],
            [
              "9+",
              "Thumbnails only",
              "Contact sheets, overview"
            ]
          ]
        }
      },
      {
        "p": "The limit is text size, not resolution. A 12pt body font at four-up prints at roughly 6pt — small but legible. At nine-up it is 4pt: you are producing an index, not something anyone will read."
      },
      {
        "h2": "Getting a good result"
      },
      {
        "ol": [
          "**Crop first** if the pages have wide margins. Tiling uncropped pages tiles mostly whitespace. [Crop](/tools/crop) then n-up.",
          "**Match orientation.** Portrait pages tile naturally two-up on landscape. Mixing orientations produces awkward gaps.",
          "**Check the reading order.** Left-to-right then down is standard; verify it before printing 40 sheets.",
          "**Print one test sheet.** Always. Text that looked fine on screen can be unreadable on paper."
        ]
      },
      {
        "note": "For slide decks, four-up landscape is the long-standing handout convention — large enough to read, compact enough to annotate beside."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Does n-up reduce quality?",
            "a": "No. Pages are scaled, not re-rendered. Text stays vector-sharp; it is simply smaller."
          },
          {
            "q": "Can I add page numbers after n-up?",
            "a": "You can, but they will number the sheets, not the original pages. Add numbers before tiling."
          },
          {
            "q": "Why is there so much white space between tiles?",
            "a": "Your source pages have wide margins. Crop them first."
          },
          {
            "q": "Is n-up the same as booklet printing?",
            "a": "No. Booklet printing reorders pages for folding. N-up tiles them in sequence."
          }
        ]
      }
    ]
  },
  {
    "slug": "convert-pdf-to-grayscale",
    "title": "Converting a PDF to Greyscale (and When You Should)",
    "metaTitle": "Convert PDF to Greyscale — Free Online | ThePDFNinja",
    "metaDescription": "Greyscale conversion cuts file size dramatically, saves colour toner, and makes scans look cleaner. What it costs you.",
    "excerpt": "One of the most effective size reductions available for scanned documents — and one of the least known.",
    "date": "2026-09-25",
    "dateLabel": "September 25, 2026",
    "readMinutes": 6,
    "category": "Guides",
    "emoji": "⚫",
    "keywords": [
      "convert pdf to grayscale",
      "pdf black and white",
      "greyscale pdf",
      "reduce pdf color",
      "black and white pdf converter"
    ],
    "blocks": [
      {
        "p": "Converting a colour PDF to greyscale is among the most effective and least appreciated optimisations available. For a scanned black-ink document it commonly halves the file size while changing nothing you can perceive — because there was no meaningful colour information to begin with."
      },
      {
        "h2": "Why it saves so much"
      },
      {
        "p": "A colour image stores three channels — red, green, blue — for every pixel. Greyscale stores one. That is a two-thirds reduction in raw data before compression, and compression works better on greyscale too, because there is no colour noise to encode."
      },
      {
        "p": "Scanning black text in colour is therefore storing three nearly identical channels of the same grey information. [Convert to greyscale](/tools/grayscale-pdf) discards two of them."
      },
      {
        "h2": "When to do it"
      },
      {
        "ul": [
          "**Scanned text documents.** Almost always worth it. Large saving, no perceptible loss.",
          "**Before hitting a size limit.** Combine with [compress to size](/tools/compress-to-size) — greyscaling first lets the compressor be far gentler on remaining detail.",
          "**Before printing on a mono printer.** Converting first lets you see what will actually come out.",
          "**Archiving scanned records** where colour carries no information."
        ]
      },
      {
        "h2": "When not to"
      },
      {
        "ul": [
          "**Anything where colour carries meaning** — charts with a colour key, colour-coded forms, maps, photographs.",
          "**Documents with coloured seals or signatures** where colour is part of authenticity.",
          "**Marketing material.** Obviously.",
          "**Any file you might need in colour later.** Conversion is one-way; keep the original."
        ]
      },
      {
        "note": "Greyscale is not the same as black-and-white. Greyscale keeps 256 shades, so photographs and shading survive. True bitonal is smaller still but destroys anything that is not pure black or white."
      },
      {
        "h2": "For images rather than PDFs"
      },
      {
        "p": "The same logic applies to individual images — [convert an image to greyscale](/tools/image-to-grayscale) before compressing a signature to a tight limit. It is often the difference between hitting 20KB legibly and not hitting it at all."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "How much smaller will my file get?",
            "a": "For colour scans of text, typically 40–60%. For files already mostly text, very little — there was no colour data to remove."
          },
          {
            "q": "Can I convert back to colour?",
            "a": "No. The colour information is discarded. Keep the original."
          },
          {
            "q": "Will text look worse?",
            "a": "No. Black text on white is unaffected — you are removing channels that held no information."
          },
          {
            "q": "Does this help with printing?",
            "a": "Yes, twice: smaller file, and you see exactly what a mono printer will produce."
          }
        ]
      }
    ]
  },
  {
    "slug": "redact-pdf-properly",
    "title": "How to Redact a PDF Properly (Not With a Black Box)",
    "metaTitle": "How to Redact a PDF Securely — Free Tool | ThePDFNinja",
    "metaDescription": "Drawing a black rectangle does not remove text. How real redaction works, how to verify it, and the five places sensitive data hides.",
    "excerpt": "The mistake that has exposed names in court filings and salaries in public reports. Here is how to avoid making it.",
    "date": "2026-10-05",
    "dateLabel": "October 5, 2026",
    "readMinutes": 6,
    "category": "Guides",
    "emoji": "🔒",
    "keywords": [
      "redact pdf",
      "how to redact pdf",
      "black out text pdf",
      "remove sensitive information pdf",
      "pdf redaction"
    ],
    "blocks": [
      {
        "p": "Sensitive information in a document you must share is a routine problem with a dangerous common solution: drawing a black box over it. That does not remove anything."
      },
      {
        "h2": "Why black boxes fail"
      },
      {
        "p": "A PDF stores text and graphics as separate objects. Drawing a rectangle adds a graphic *on top of* the text. The text is still there, in the same position, fully intact. Select all and copy, and it comes straight out. Extract the text and it appears. Open the file in a tool that ignores drawing order and it may even be visible."
      },
      {
        "p": "This is not theoretical. Redaction failures of exactly this kind have exposed names in court filings, salaries in public disclosures and identities in released reports."
      },
      {
        "h2": "Redacting properly"
      },
      {
        "p": "[Redact PDF](/tools/pdf-redact) removes the underlying content rather than covering it. The words are deleted from the file, and a black mark is drawn where they were."
      },
      {
        "h2": "Verifying it worked"
      },
      {
        "ol": [
          "Open the redacted file.",
          "Select all text (Ctrl+A) and copy.",
          "Paste into a plain text editor.",
          "Search for what you redacted. If it appears, it was not removed.",
          "Also check document properties — metadata can carry content that never appeared on a page."
        ]
      },
      {
        "note": "Do this every time on anything consequential. It takes twenty seconds and it is the only way to know."
      },
      {
        "h2": "The things people forget"
      },
      {
        "ul": [
          "**Metadata.** Author, title and subject fields survive redaction of page content. [Remove metadata](/tools/remove-metadata).",
          "**Attachments.** A PDF can embed other files. Redacting a page does not touch them.",
          "**Earlier revisions.** Incremental saves retain previous versions. [Compress](/tools/compress) or [flatten](/tools/flatten-pdf) to force a full rewrite.",
          "**Layers and annotations.** Hidden layers can contain the original text. Flatten first.",
          "**The filename itself,** which is astonishingly often the leak."
        ]
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Is a black rectangle ever safe?",
            "a": "Only if the underlying content was genuinely removed by a redaction tool. Drawn shapes alone never are."
          },
          {
            "q": "Does flattening redact?",
            "a": "No. It merges layers, which can help, but it does not remove text under a shape. Use a redaction tool."
          },
          {
            "q": "What about redacting a scan?",
            "a": "A scan is an image, so drawing over it does obscure it — but keep the mark opaque and re-save as an image, and remember OCR text layers if any were added."
          },
          {
            "q": "Can redacted content be recovered?",
            "a": "Not if properly removed. That is the difference between redaction and covering."
          }
        ]
      }
    ]
  },
  {
    "slug": "remove-pdf-metadata",
    "title": "What Your PDF Reveals About You (and How to Strip It)",
    "metaTitle": "Remove PDF Metadata — Free Online Tool | ThePDFNinja",
    "metaDescription": "Author names, file paths, software versions and revision dates travel with every PDF. What is in there and how to remove it.",
    "excerpt": "Document properties routinely name the client whose template you reused. Two clicks to check, seconds to fix.",
    "date": "2026-10-13",
    "dateLabel": "October 13, 2026",
    "readMinutes": 6,
    "category": "Guides",
    "emoji": "🕵️",
    "keywords": [
      "remove pdf metadata",
      "pdf document properties",
      "anonymous pdf",
      "strip metadata pdf",
      "pdf author information"
    ],
    "blocks": [
      {
        "p": "Metadata is the information a PDF carries about itself rather than in itself: who made it, with what software, when, and often where on a filesystem it lived. Most of the time nobody looks. Occasionally it matters a great deal."
      },
      {
        "h2": "What is actually in there"
      },
      {
        "ul": [
          "**Author** — frequently your full name, or a colleague's, from whoever's template was reused.",
          "**Title and subject** — often left as the original filename of a document you adapted.",
          "**Producer and creator** — the software and version used.",
          "**Creation and modification dates** — including revisions you would rather not disclose.",
          "**Keywords** and custom fields set by whatever generated it.",
          "**File paths** in some cases, which can reveal client names, matter numbers or internal project codenames."
        ]
      },
      {
        "h2": "When it matters"
      },
      {
        "ul": [
          "**Anonymous submissions.** Peer review, whistleblowing, blind recruitment — author metadata defeats the anonymity entirely.",
          "**Client work.** A proposal whose properties name a different client is an awkward conversation.",
          "**Legal disclosure.** Dates and authorship can be material.",
          "**Published documents.** Anyone who downloads it can read the properties in two clicks."
        ]
      },
      {
        "h2": "Removing it"
      },
      {
        "p": "[Remove metadata](/tools/remove-metadata) strips the document information dictionary. For thoroughness, [flatten](/tools/flatten-pdf) as well — annotations and form fields carry their own author attribution that page-level metadata removal does not touch."
      },
      {
        "note": "Removing metadata does not remove content. If sensitive text is on the page, it needs [redaction](/tools/pdf-redact). These are separate problems with separate tools, and people routinely do one and assume they have done both."
      },
      {
        "h2": "Checking what you are about to send"
      },
      {
        "p": "Every PDF reader exposes document properties, usually under File. Look before you send anything that leaves your organisation. It takes seconds and occasionally saves considerable embarrassment."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Can metadata be recovered after removal?",
            "a": "Not from the document information dictionary once stripped. Earlier revisions in an incrementally saved file are a separate risk — compress to force a rewrite."
          },
          {
            "q": "Does removing metadata change the document?",
            "a": "Not visually. Pages are untouched."
          },
          {
            "q": "Do images inside a PDF carry their own metadata?",
            "a": "They can — EXIF data including GPS coordinates from a phone photo. Strip images before embedding if that matters."
          },
          {
            "q": "Is metadata removed when I print to PDF?",
            "a": "New metadata is created by the print driver. It is different, not absent."
          }
        ]
      }
    ]
  },
  {
    "slug": "flatten-pdf-explained",
    "title": "What Flattening a PDF Does (and When You Want It)",
    "metaTitle": "Flatten a PDF — What It Means and When to Use It | ThePDFNinja",
    "metaDescription": "Flattening turns form fields, annotations and layers into ordinary page content. When that helps, when it hurts, and why it is not redaction.",
    "excerpt": "The least understood useful PDF operation — and the one people confuse with redaction, sometimes expensively.",
    "date": "2026-10-21",
    "dateLabel": "October 21, 2026",
    "readMinutes": 6,
    "category": "Guides",
    "emoji": "🗜️",
    "keywords": [
      "flatten pdf",
      "what does flatten pdf mean",
      "flatten form fields",
      "pdf flatten annotations",
      "lock pdf form"
    ],
    "blocks": [
      {
        "p": "Flattening is one of the least understood PDF operations and one of the most useful. It converts everything interactive in a document — form fields, annotations, layers, comments — into ordinary page content."
      },
      {
        "h2": "What it changes"
      },
      {
        "p": "Before flattening, a filled form contains **field objects** holding values. The text you see is rendered from those fields at display time. After flattening, that text is drawn directly onto the page and the fields are gone."
      },
      {
        "p": "The visual result is identical. What changes is that the content is now fixed, uneditable, and no longer separable from the page."
      },
      {
        "h2": "When you want it"
      },
      {
        "ul": [
          "**Sending a completed form.** Prevents the recipient altering your answers, and guarantees it displays the same everywhere. Readers vary in how they render form fields; flattened content does not.",
          "**Before printing.** Many printers ignore form fields and annotations by default, producing a blank form. Flattening makes them print.",
          "**Removing internal comments.** Review annotations become part of the page, so they can no longer be read as structured comments or attributed to a reviewer.",
          "**Reducing file size.** Interactive machinery carries overhead. Flattening plus [compress](/tools/compress) often shrinks a form substantially.",
          "**Fixing display inconsistencies,** where a document looks different in different readers."
        ]
      },
      {
        "h2": "When you do not"
      },
      {
        "ul": [
          "**The form still needs filling in.** Flattening is one-way; fields cannot be restored.",
          "**You need the data extracted later.** Field values are machine-readable; drawn text is not.",
          "**Annotations are the deliverable,** as in a review cycle still in progress."
        ]
      },
      {
        "note": "Always keep the unflattened original. There is no unflatten operation — recovering fields means rebuilding them by hand."
      },
      {
        "h2": "Flattening is not redaction"
      },
      {
        "p": "A common and dangerous confusion. Flattening merges an annotation's *appearance* into the page. If someone drew a black box over text, flattening makes the box part of the page — and the text underneath is still there. For removal, use [redact](/tools/pdf-redact)."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Will flattening change how my document looks?",
            "a": "No. That is the point — it fixes the current appearance permanently."
          },
          {
            "q": "Can I unflatten a PDF?",
            "a": "No. Keep the original."
          },
          {
            "q": "Does it reduce file size?",
            "a": "Usually yes, especially combined with compression, because interactive objects carry overhead."
          },
          {
            "q": "Will my form answers still be visible?",
            "a": "Yes — they become permanent page content. That is exactly what makes them uneditable."
          }
        ]
      }
    ]
  },
  {
    "slug": "password-protect-pdf-properly",
    "title": "The Two Kinds of PDF Password (and Which You Need)",
    "metaTitle": "Password Protect a PDF — User vs Owner Passwords | ThePDFNinja",
    "metaDescription": "One encrypts your document, the other politely asks readers to behave. Which to use, and how to avoid protecting nothing.",
    "excerpt": "Two mechanisms with the same name and completely different strength. Picking wrong gives you the illusion of security.",
    "date": "2026-10-29",
    "dateLabel": "October 29, 2026",
    "readMinutes": 6,
    "category": "Guides",
    "emoji": "🔐",
    "keywords": [
      "password protect pdf",
      "pdf encryption",
      "secure pdf",
      "pdf user password",
      "protect pdf from copying"
    ],
    "blocks": [
      {
        "p": "Password-protecting a PDF sounds like a single thing. It is two, they behave completely differently, and choosing the wrong one gives you protection you did not want or none at all."
      },
      {
        "h2": "The two passwords"
      },
      {
        "table": {
          "headers": [
            "",
            "User password",
            "Owner password"
          ],
          "rows": [
            [
              "Required to open",
              "Yes",
              "No"
            ],
            [
              "Content encrypted",
              "Yes",
              "No"
            ],
            [
              "Restricts printing/copying",
              "Optionally",
              "Yes"
            ],
            [
              "Removable without the password",
              "No",
              "Yes, trivially"
            ],
            [
              "Real security",
              "Yes",
              "No — an honour system"
            ]
          ]
        }
      },
      {
        "p": "A **user password** genuinely encrypts the file. Without it there is nothing readable. An **owner password** leaves the file open to anyone and merely sets flags asking readers to disallow printing or copying. Readers generally honour it; nothing forces them to."
      },
      {
        "h2": "Choosing"
      },
      {
        "ul": [
          "**Sending confidential material?** User password. Anything else is decoration.",
          "**Discouraging casual copying of published material?** Owner password. Understand it is a speed bump.",
          "**Preventing alteration?** Neither, really. Use a [digital signature](/tools/add-signature-box) for integrity, or [flatten](/tools/flatten-pdf) to fix content.",
          "**Hiding specific information?** Neither. [Redact](/tools/pdf-redact) it."
        ]
      },
      {
        "h2": "Getting encryption right"
      },
      {
        "p": "[Protect PDF](/tools/protect) applies a user password. Two things determine whether it is worth anything:"
      },
      {
        "ol": [
          "**Password strength.** Encryption is only as good as the password. A date of birth is guessable in seconds.",
          "**Delivery of the password.** Emailing the password in the same message as the file protects nothing. Send it by a different channel."
        ]
      },
      {
        "note": "If you lose a user password, the document is gone. There is no recovery — that is what encryption means. Store it somewhere you will still have it."
      },
      {
        "h2": "Removing protection"
      },
      {
        "p": "[Unlock PDF](/tools/unlock) removes both kinds, given the password where one is required. Useful for archiving material you own, or for making encrypted statements searchable in your own records."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Is PDF encryption strong?",
            "a": "Modern PDF encryption is AES-based and sound. The weak point is almost always the password, not the algorithm."
          },
          {
            "q": "Can I recover a forgotten password?",
            "a": "For a user password, no. Contact whoever issued the document."
          },
          {
            "q": "Why can people still copy from my protected PDF?",
            "a": "You used an owner password. It requests restraint; it does not enforce it."
          },
          {
            "q": "Should I email the password with the file?",
            "a": "No. That defeats the purpose entirely. Use a separate channel."
          }
        ]
      }
    ]
  },
  {
    "slug": "merge-pdf-common-mistakes",
    "title": "Five Things That Go Wrong When Merging PDFs",
    "metaTitle": "Merge PDF Problems — Order, Size and Page Numbers | ThePDFNinja",
    "metaDescription": "Wrong order, mixed page sizes, meaningless page numbers, bloated output and encrypted files. Each with its fix.",
    "excerpt": "The most-used document operation, and the handful of ways it reliably goes wrong.",
    "date": "2026-11-06",
    "dateLabel": "November 6, 2026",
    "readMinutes": 6,
    "category": "Guides",
    "emoji": "🔗",
    "keywords": [
      "merge pdf problems",
      "combine pdf order",
      "merge pdf page size",
      "pdf merge large file",
      "merge encrypted pdf"
    ],
    "blocks": [
      {
        "p": "Merging PDFs is the most-used document operation there is, and it goes wrong in a small number of predictable ways."
      },
      {
        "h2": "Order is taken from your input, not your filenames"
      },
      {
        "p": "Files are combined in the order you supply them. Your file manager may display `Doc10` before `Doc9`, or sort by date rather than name. If order matters — and it usually does — check the list before merging, and [reorder](/tools/organize) afterwards if something landed wrong."
      },
      {
        "h2": "Mixed page sizes print badly"
      },
      {
        "p": "Merging A4 and Letter, or portrait and landscape, produces a document that prints inconsistently and looks unconsidered. [Resize pages](/tools/resize-pages) to a common size first if the result will be printed or submitted formally."
      },
      {
        "h2": "Original page numbers become nonsense"
      },
      {
        "p": "Three documents each numbered from 1 gives you three page 1s. Anyone referencing a page has no way to be unambiguous. [Add page numbers](/tools/page-numbers) across the merged document — after all other operations, since renumbering does not update itself."
      },
      {
        "h2": "The file is larger than the sum of its parts"
      },
      {
        "p": "Each source may embed the same fonts and logos, and a naive merge keeps every copy. [Compress](/tools/compress) afterwards to deduplicate — this often recovers a surprising amount."
      },
      {
        "h2": "Encrypted files will not merge"
      },
      {
        "p": "A password-protected PDF cannot be combined while encrypted. [Unlock](/tools/unlock) it first, with the password, then merge."
      },
      {
        "note": "A working order: unlock → convert everything to PDF → merge → reorder → rotate → resize → add page numbers → compress. Doing them out of order means redoing them."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Does merging reduce quality?",
            "a": "No. Pages are copied, not re-rendered."
          },
          {
            "q": "How many files can I merge?",
            "a": "Up to 20 at once here. For more, merge in batches and then merge the results."
          },
          {
            "q": "Can I merge different file types?",
            "a": "Convert each to PDF first — [Word](/tools/word-to-pdf), [images](/tools/jpg-to-pdf), [Excel](/tools/excel-to-pdf) — then merge."
          },
          {
            "q": "Why is my merged file so big?",
            "a": "Duplicated fonts and images across sources. Compress afterwards."
          }
        ]
      }
    ]
  },
  {
    "slug": "split-pdf-the-right-way",
    "title": "Splitting a PDF: Three Tools That Do Different Things",
    "metaTitle": "How to Split a PDF — Split vs Extract vs Delete | ThePDFNinja",
    "metaDescription": "Split, extract and delete produce very different results. Which to use, and why extracted pages are bigger than you expect.",
    "excerpt": "Most people reach for 'split' when they want 'extract', then wonder why they have 200 files.",
    "date": "2026-11-16",
    "dateLabel": "November 16, 2026",
    "readMinutes": 6,
    "category": "Guides",
    "emoji": "🪓",
    "keywords": [
      "split pdf",
      "how to split pdf pages",
      "extract vs split pdf",
      "separate pdf pages",
      "divide pdf file"
    ],
    "blocks": [
      {
        "p": "Splitting a PDF sounds unambiguous until you try it and find three tools with three different behaviours. What you want determines which one."
      },
      {
        "h2": "Three different operations"
      },
      {
        "table": {
          "headers": [
            "You want",
            "Tool",
            "Output"
          ],
          "rows": [
            [
              "Every page as its own file",
              "[Split](/tools/split)",
              "A zip of single-page PDFs"
            ],
            [
              "One section as a file",
              "[Extract pages](/tools/extract-pages)",
              "One PDF of chosen pages"
            ],
            [
              "Everything except some pages",
              "[Delete pages](/tools/delete-pages)",
              "One PDF, minus those pages"
            ]
          ]
        }
      },
      {
        "p": "People reach for 'split' when they usually want 'extract'. Splitting a 200-page report gives you 200 files to sift through; extracting pages 40–52 gives you the chapter."
      },
      {
        "h2": "Page numbers are file positions"
      },
      {
        "p": "The number printed on a page frequently differs from its position in the file. Covers, contents pages and inserted blanks shift everything. Use your reader's page counter, not the ink on the page — this is the single commonest cause of extracting the wrong range."
      },
      {
        "h2": "Splitting does not shrink proportionally"
      },
      {
        "p": "PDFs share resources across pages. A single page extracted from a document may carry fonts and images used throughout, so it can be far larger than one two-hundredth of the original. [Compress](/tools/compress) the result if size matters."
      },
      {
        "h2": "What survives"
      },
      {
        "p": "Text stays selectable, images keep their resolution, internal links within the extracted range keep working. Links pointing outside the range break, because their target no longer exists. Bookmarks referring to removed pages are dropped."
      },
      {
        "note": "If the document is encrypted, [unlock](/tools/unlock) it before splitting. Most tools will not operate on an encrypted file at all."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Split or extract?",
            "a": "Extract if you want a subset as one file. Split if you genuinely want every page separately."
          },
          {
            "q": "Why is my single page 2MB?",
            "a": "It carries shared resources from the parent document. Compress it."
          },
          {
            "q": "Can I split by chapter?",
            "a": "Not automatically. Identify the page ranges and extract each."
          },
          {
            "q": "Does splitting lose quality?",
            "a": "No. Pages are copied intact."
          }
        ]
      }
    ]
  },
  {
    "slug": "word-to-pdf-done-right",
    "title": "Word to PDF: Export or Print, and Why It Matters",
    "metaTitle": "Convert Word to PDF Correctly — Export vs Print | ThePDFNinja",
    "metaDescription": "Exporting preserves links, bookmarks and accessibility structure. Printing to PDF discards all three. What else breaks in conversion.",
    "excerpt": "Two ways to make the same file, and one of them silently throws away your hyperlinks.",
    "date": "2026-11-24",
    "dateLabel": "November 24, 2026",
    "readMinutes": 6,
    "category": "Guides",
    "emoji": "📝",
    "keywords": [
      "word to pdf",
      "convert docx to pdf",
      "export vs print to pdf",
      "word pdf hyperlinks",
      "doc to pdf free"
    ],
    "blocks": [
      {
        "p": "Converting a Word document to PDF is the most routine document operation there is, and the two ways of doing it produce meaningfully different files."
      },
      {
        "h2": "Export beats print"
      },
      {
        "p": "**Export** (Save As PDF, or Export) hands the document's structure to a PDF writer. **Print to PDF** renders pages through a print driver and captures the output."
      },
      {
        "p": "Export preserves things print-to-PDF discards:"
      },
      {
        "ul": [
          "**Hyperlinks,** which print drivers flatten into plain text.",
          "**Bookmarks** generated from your heading structure.",
          "**Tagged structure** for accessibility and screen readers.",
          "**Better font embedding.** Print drivers handle fonts less reliably.",
          "**Smaller files,** because text stays text rather than being rasterised."
        ]
      },
      {
        "p": "Use print-to-PDF only when export is unavailable, or when you specifically want a flattened, non-interactive rendering."
      },
      {
        "h2": "What breaks in conversion"
      },
      {
        "ul": [
          "**Fonts you have and the recipient does not** — fine if embedded, broken if not. Check export settings.",
          "**Linked images** that were never embedded in the document.",
          "**Comments and tracked changes,** which may or may not appear depending on settings. Accept or reject them before exporting.",
          "**Very wide tables,** which may clip at the page margin."
        ]
      },
      {
        "note": "Always open the exported PDF and read it before sending. Export settings differ between machines and versions, and the failure mode is silent."
      },
      {
        "h2": "When you do not have Word"
      },
      {
        "p": "[Word to PDF](/tools/word-to-pdf) converts .doc and .docx server-side using LibreOffice, which renders Office formats faithfully. Useful when you have received a document you cannot open, or need a PDF from a machine without Office installed."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why did my hyperlinks stop working?",
            "a": "You printed to PDF instead of exporting. Print drivers do not preserve link annotations."
          },
          {
            "q": "Why does the PDF look different from the Word document?",
            "a": "Usually a missing font substituted at export, or a linked image that was never embedded."
          },
          {
            "q": "Will tracked changes appear?",
            "a": "Depending on settings, yes. Accept or reject them first."
          },
          {
            "q": "Is converted quality lower?",
            "a": "No — text stays vector text. Only print-to-PDF risks rasterising."
          }
        ]
      }
    ]
  },
  {
    "slug": "powerpoint-to-pdf-guide",
    "title": "Converting Presentations to PDF Without Losing Half of Them",
    "metaTitle": "PowerPoint to PDF — Slides, Handouts and Notes | ThePDFNinja",
    "metaDescription": "Which export layout to choose, what animations and video become, and why your speaker notes might be going out with the deck.",
    "excerpt": "The default export setting is rarely the one you want, and one of them sends your speaker notes to the audience.",
    "date": "2026-12-01",
    "dateLabel": "December 1, 2026",
    "readMinutes": 6,
    "category": "Guides",
    "emoji": "📊",
    "keywords": [
      "powerpoint to pdf",
      "ppt to pdf",
      "convert presentation pdf",
      "pdf handouts slides",
      "pptx to pdf free"
    ],
    "blocks": [
      {
        "p": "Presentations converted to PDF are how slide decks actually get shared, and the conversion has some specific traps."
      },
      {
        "h2": "Slides or handouts?"
      },
      {
        "p": "PowerPoint offers several PDF layouts and the default is rarely what you want for sharing:"
      },
      {
        "ul": [
          "**Full page slides** — one slide per page. Good for on-screen reading, wasteful to print.",
          "**Handouts** — several slides per page, with or without note lines. Best for printed distribution.",
          "**Notes pages** — slide plus your speaker notes. Check before sending; your notes may not be for the audience.",
          "**Outline** — text only, no visuals."
        ]
      },
      {
        "p": "If your tool only exports full-page slides, convert and then use [n-up](/tools/n-up-pdf) to build handouts yourself."
      },
      {
        "h2": "What gets lost"
      },
      {
        "ul": [
          "**Animations and transitions.** A build that reveals bullets one at a time becomes either the final state or several near-identical pages, depending on settings.",
          "**Embedded video and audio.** Gone entirely; you get the poster frame.",
          "**Hyperlinks,** if you print rather than export.",
          "**Speaker notes,** unless you specifically choose notes pages."
        ]
      },
      {
        "note": "Check your speaker notes before exporting anything with notes included. Notes written for yourself have a way of being unflattering about the audience."
      },
      {
        "h2": "Size problems"
      },
      {
        "p": "Image-heavy decks produce large PDFs. [Compress](/tools/compress) at ebook quality — slide images are usually photographs, which compress well. For a deck destined for print, [greyscale](/tools/grayscale-pdf) first if colour is not essential."
      },
      {
        "h2": "The other direction"
      },
      {
        "p": "[PDF to PPT](/tools/pdf-to-ppt) produces one image per slide — visually faithful, but the text is not editable, because a PDF page has no slide structure to recover. If you need an editable deck, you need the original file."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why does my deck have duplicate pages?",
            "a": "Animation builds exported as separate states. Change the export setting or remove the animations first."
          },
          {
            "q": "Can I get an editable PowerPoint back from a PDF?",
            "a": "Not really. Conversion produces image slides. Ask for the source file."
          },
          {
            "q": "How do I make printable handouts?",
            "a": "Export as handouts if your tool offers it, or convert then use n-up at four per sheet."
          },
          {
            "q": "Why is my PDF larger than the PowerPoint?",
            "a": "PowerPoint compresses images internally. Export can embed them at full resolution. Compress the PDF afterwards."
          }
        ]
      }
    ]
  },
  {
    "slug": "how-to-scan-documents-properly",
    "title": "How to Scan Documents Properly (Five Settings That Matter)",
    "metaTitle": "How to Scan Documents to PDF — Settings Guide | ThePDFNinja",
    "metaDescription": "Resolution, colour mode, format, duplex and compression. The defaults are wrong for documents, and one of them wrecks OCR.",
    "excerpt": "Five settings separate a scan that is small, searchable and legible from one that is none of those things.",
    "date": "2026-12-07",
    "dateLabel": "December 7, 2026",
    "readMinutes": 6,
    "category": "Guides",
    "emoji": "🖨️",
    "keywords": [
      "how to scan documents",
      "scan to pdf settings",
      "best dpi for scanning",
      "scan document quality",
      "scanner settings pdf"
    ],
    "blocks": [
      {
        "p": "Scanning a document to PDF is straightforward. Scanning it *well* — so it is small, searchable and legible — comes down to about five settings, most of which people leave at defaults that are wrong for documents."
      },
      {
        "h2": "The settings that matter"
      },
      {
        "table": {
          "headers": [
            "Setting",
            "Use",
            "Why"
          ],
          "rows": [
            [
              "Resolution",
              "300 DPI",
              "Enough for OCR; higher wastes space"
            ],
            [
              "Colour mode",
              "Greyscale for text",
              "Two-thirds less data, no visible loss"
            ],
            [
              "Format",
              "PDF, not JPG",
              "Multi-page in one file"
            ],
            [
              "Duplex",
              "Only if genuinely double-sided",
              "Otherwise you get blank pages"
            ],
            [
              "Compression",
              "Low or none at scan time",
              "Compress later, after OCR"
            ]
          ]
        }
      },
      {
        "p": "That last row is the one people get wrong. Scanner drivers often compress aggressively by default, which destroys the detail OCR needs. Scan clean, OCR, then compress."
      },
      {
        "h2": "Physical technique"
      },
      {
        "ul": [
          "Clean the glass. Dust becomes speckle on every page.",
          "Square the page against the guide. Skew is the biggest single cause of poor OCR.",
          "Flatten curled pages — a book pressed properly beats one left to curve.",
          "For thick documents, use the feeder if it is reliable; otherwise the flatbed is worth the time."
        ]
      },
      {
        "h2": "After scanning"
      },
      {
        "ol": [
          "[Delete blank pages](/tools/delete-pages) from duplex scans.",
          "[Rotate](/tools/rotate) anything fed the wrong way.",
          "[Crop](/tools/crop) scanner borders.",
          "[OCR](/tools/ocr) while the file is still high quality.",
          "[Compress](/tools/compress) last, to whatever size you actually need."
        ]
      },
      {
        "note": "That order is not arbitrary. Every step before OCR improves recognition; compressing before OCR sabotages it."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "What DPI should I scan at?",
            "a": "300 for documents. 600 only for fine detail or archival masters; it quadruples the data for little practical gain."
          },
          {
            "q": "Colour or greyscale?",
            "a": "Greyscale for anything that is ink on paper. Colour only where colour carries information."
          },
          {
            "q": "Why is my scan so large?",
            "a": "Colour mode, high DPI, or both. Rescan in greyscale at 300."
          },
          {
            "q": "Should I let the scanner compress?",
            "a": "No. Scan clean, OCR, then compress deliberately."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-workflow-order-of-operations",
    "title": "The Right Order to Do PDF Operations",
    "metaTitle": "PDF Workflow — Correct Order of Operations | ThePDFNinja",
    "metaDescription": "Sixteen operations in the order that avoids redoing them. Why OCR must precede compression and page numbers must come last.",
    "excerpt": "Do these in the wrong order and you pay in quality or repeated work. Here is the sequence that avoids both.",
    "date": "2026-12-10",
    "dateLabel": "December 10, 2026",
    "readMinutes": 7,
    "category": "Guides",
    "emoji": "📋",
    "keywords": [
      "pdf workflow",
      "order of pdf operations",
      "pdf processing steps",
      "when to compress pdf",
      "pdf best practices"
    ],
    "blocks": [
      {
        "p": "Almost every PDF workflow is a sequence, and doing the steps in the wrong order costs you either quality or the need to redo them. This is the order that works, and why."
      },
      {
        "h2": "The sequence"
      },
      {
        "ol": [
          "**Unlock.** [Remove encryption](/tools/unlock) first — most tools refuse to touch an encrypted file at all.",
          "**Convert to PDF.** Get everything into one format: [Word](/tools/word-to-pdf), [images](/tools/jpg-to-pdf), [Excel](/tools/excel-to-pdf).",
          "**Repair, if needed.** [Fix structure](/tools/repair) before building on it.",
          "**OCR.** [Recognise text](/tools/ocr) while the file is still high quality. Never after compression.",
          "**Merge.** [Combine](/tools/merge) into one document.",
          "**Reorder and delete.** [Sequence](/tools/organize) correctly, [remove](/tools/delete-pages) what is not needed.",
          "**Rotate.** [Fix orientation](/tools/rotate).",
          "**Crop and resize.** [Trim margins](/tools/crop), [normalise page size](/tools/resize-pages).",
          "**Greyscale.** [Convert](/tools/grayscale-pdf) if colour carries nothing.",
          "**Redact.** [Remove sensitive content](/tools/pdf-redact) — and verify it.",
          "**Flatten.** [Fix interactive elements](/tools/flatten-pdf) into the page.",
          "**Add page numbers.** [Number](/tools/page-numbers) only once the pages are final.",
          "**Watermark.** [Mark](/tools/watermark) status, if needed.",
          "**Remove metadata.** [Strip properties](/tools/remove-metadata) before it leaves.",
          "**Compress.** [Reduce size](/tools/compress) last, when nothing else will change.",
          "**Linearise.** [Optimise for web](/tools/linearize-pdf) if publishing online — after compression."
        ]
      },
      {
        "h2": "Why the order matters"
      },
      {
        "ul": [
          "**OCR before compression.** Compression removes the detail recognition needs. This is the most consequential ordering rule.",
          "**Page numbers after reordering.** Numbers are stamped ink; renumbering does not follow a moved page.",
          "**Redaction before flattening.** Flattening merges appearance, not content — redact first, then flatten.",
          "**Compression last.** Every earlier step that removes data means the compressor destroys less.",
          "**Linearisation last of all.** Any subsequent save undoes it."
        ]
      },
      {
        "note": "You will not need every step. But if you need two of them, do them in this relative order and you will not have to redo either."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "What is the single most important rule?",
            "a": "OCR before compressing. Everything else is recoverable; that one is not."
          },
          {
            "q": "Why compress last?",
            "a": "Cropping, greyscaling and page removal all reduce what the compressor has to work with, so it degrades less."
          },
          {
            "q": "Can I skip steps?",
            "a": "Most of them, most of the time. Keep the relative order of the ones you do use."
          },
          {
            "q": "What if I need to edit after numbering?",
            "a": "Renumber. The old numbers are drawn onto the page and will not update."
          }
        ]
      }
    ]
  },
  {
    "slug": "extract-tables-from-pdf",
    "title": "Getting Tables Out of a PDF and Into a Spreadsheet",
    "metaTitle": "Extract Tables from PDF to Excel — Guide | ThePDFNinja",
    "metaDescription": "Why bordered tables extract cleanly and borderless ones do not, what reliably goes wrong, and when to just retype it.",
    "excerpt": "Either trivial or maddening, with little in between. Borders are what decide which.",
    "date": "2026-12-11",
    "dateLabel": "December 11, 2026",
    "readMinutes": 6,
    "category": "Guides",
    "emoji": "📈",
    "keywords": [
      "extract table from pdf",
      "pdf to excel table",
      "convert pdf table to spreadsheet",
      "pdf data extraction",
      "copy table from pdf"
    ],
    "blocks": [
      {
        "p": "Extracting data from a PDF table into a spreadsheet is one of those tasks that is either trivial or maddening, with very little in between. The determining factor is whether the table has borders."
      },
      {
        "h2": "Why borders matter so much"
      },
      {
        "p": "A PDF has no concept of a table. It has text positioned at coordinates, and possibly lines drawn between them. An extraction tool works out the structure from what it can see."
      },
      {
        "p": "Where borders exist, the tool has explicit cell boundaries and extraction is close to reliable. Where they do not, it must infer columns from alignment alone — and a table with merged cells, wrapped text or inconsistent spacing defeats that quickly."
      },
      {
        "h2": "Getting the best result"
      },
      {
        "ol": [
          "**Check for a text layer first.** Ctrl+F for a value. If nothing is found, the page is a scan — [OCR](/tools/ocr) before attempting extraction.",
          "**Convert the whole document,** not a page at a time. Tools use surrounding context.",
          "**Use [PDF to Excel](/tools/pdf-to-excel)** rather than copy-paste, which loses column structure entirely.",
          "**Reconcile totals** against the source before working from the result."
        ]
      },
      {
        "h2": "What reliably goes wrong"
      },
      {
        "ul": [
          "**Merged cells** become blanks or duplicated values.",
          "**Wrapped text in a cell** splits into multiple rows.",
          "**Numbers with unusual formatting** — parenthesised negatives, currency symbols, thousands separators — misparse.",
          "**Multi-line headers** collapse or shift the whole grid.",
          "**Footnote markers** attach to values, turning `1,234¹` into text rather than a number."
        ]
      },
      {
        "note": "Errors cluster in exactly the values that matter most. Always check totals, and spot-check any figure you intend to cite or act on."
      },
      {
        "h2": "When extraction is the wrong approach"
      },
      {
        "p": "If you need three numbers, read them and type them. Extraction is worth it for tables of dozens of rows, not for a handful of values where verification takes as long as retyping."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why did my table come out as one column?",
            "a": "No borders, and the tool could not infer column boundaries from alignment."
          },
          {
            "q": "Can I extract from a scanned table?",
            "a": "Run OCR first. Accuracy will be lower — verify every figure."
          },
          {
            "q": "Is copy-paste ever better?",
            "a": "For a few values, yes. For structured data, no — it loses the grid."
          },
          {
            "q": "How accurate is extraction?",
            "a": "Very good on bordered tables, poor on free-form. Always reconcile totals."
          }
        ]
      }
    ]
  },
  {
    "slug": "signing-a-pdf-explained",
    "title": "Three Ways to Sign a PDF, and What Each Is Worth",
    "metaTitle": "How to Sign a PDF — Image vs Electronic vs Digital | ThePDFNinja",
    "metaDescription": "An image of a signature, an e-signature with an audit trail, and a cryptographic digital signature. Which holds up and when.",
    "excerpt": "All three get called 'signing a PDF'. Only one of them proves anything if it is ever contested.",
    "date": "2026-12-14",
    "dateLabel": "December 14, 2026",
    "readMinutes": 6,
    "category": "Guides",
    "emoji": "✍️",
    "keywords": [
      "sign a pdf",
      "electronic signature pdf",
      "digital signature pdf",
      "add signature to pdf",
      "esign document"
    ],
    "blocks": [
      {
        "p": "Signing a document electronically covers three quite different things, which get conflated constantly and matter very differently in a dispute."
      },
      {
        "h2": "Three kinds of signature"
      },
      {
        "table": {
          "headers": [
            "Type",
            "What it is",
            "Evidential weight"
          ],
          "rows": [
            [
              "Image of a signature",
              "A picture pasted onto a page",
              "Low — trivially copied"
            ],
            [
              "Electronic signature",
              "A recorded act of signing with an audit trail",
              "Moderate to strong"
            ],
            [
              "Digital signature",
              "Cryptographic, certificate-backed",
              "Strongest — detects any alteration"
            ]
          ]
        }
      },
      {
        "p": "Most people mean the first when they say 'sign a PDF'. For everyday agreements that is often sufficient. For anything contested, it proves very little — an image can be lifted from any other document you have signed."
      },
      {
        "h2": "When an image is fine"
      },
      {
        "p": "Internal approvals, informal agreements, forms where the counterparty knows you. [Add a signature box](/tools/add-signature-box) places a field, or you can insert an image of your signature and [flatten](/tools/flatten-pdf) so it cannot be moved or removed."
      },
      {
        "h2": "When it is not"
      },
      {
        "p": "Property transactions, employment contracts, anything with regulatory requirements, anything you would want to enforce. Use a proper e-signature service — the audit trail is the product, not the visual mark."
      },
      {
        "note": "Never email a clean image of your signature. Once someone has the file, they can apply it to anything. Flatten it into the specific document and send that."
      },
      {
        "h2": "Preparing a signature image"
      },
      {
        "ol": [
          "Sign in black ink on plain white paper.",
          "Photograph or scan straight down in even light.",
          "[Crop](/tools/image-crop) tight to the signature.",
          "[Convert to greyscale](/tools/image-to-grayscale).",
          "Keep the file private. Treat it like a key, because functionally it is one."
        ]
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Is a pasted signature image legally valid?",
            "a": "It depends on jurisdiction and context. It is often accepted, and it is weak evidence if disputed."
          },
          {
            "q": "How do I stop my signature being reused?",
            "a": "Flatten it into the document you are signing, and never send the bare image."
          },
          {
            "q": "What is a digital signature?",
            "a": "A cryptographic signature backed by a certificate. It detects any change to the document after signing."
          },
          {
            "q": "Can I sign on a phone?",
            "a": "Yes. Most readers allow drawing a signature directly, which avoids having an image file at all."
          }
        ]
      }
    ]
  },
  {
    "slug": "working-with-bank-statements",
    "title": "Working with Bank Statement PDFs",
    "metaTitle": "Bank Statement PDF — Unlock, Extract, Redact | ThePDFNinja",
    "metaDescription": "Encrypted statements, extracting transactions to a spreadsheet, and redacting properly before sharing one as proof.",
    "excerpt": "Locked, unsearchable, and resistant to the analysis you want. Three fixes and one warning about redaction.",
    "date": "2026-12-15",
    "dateLabel": "December 15, 2026",
    "readMinutes": 6,
    "category": "Guides",
    "emoji": "🏦",
    "keywords": [
      "bank statement pdf",
      "unlock bank statement",
      "statement pdf to excel",
      "redact bank statement",
      "financial pdf extraction"
    ],
    "blocks": [
      {
        "p": "Bank and financial statements arrive as PDFs, usually encrypted, often unsearchable, and always in a format that resists the analysis you actually want to do."
      },
      {
        "h2": "They arrive locked"
      },
      {
        "p": "Banks encrypt statements with a date of birth, account number or customer ID. Sensible for delivery; obstructive when you are reconciling a year of them. [Unlock](/tools/unlock) removes it where you have the password, making the files searchable and processable in bulk."
      },
      {
        "h2": "Getting the transactions out"
      },
      {
        "p": "[PDF to Excel](/tools/pdf-to-excel) works reasonably on statements, which usually have bordered tables. Watch for the failure modes that matter with money:"
      },
      {
        "ul": [
          "**Negative values in parentheses** may parse as text rather than negative numbers.",
          "**Running balances** can shift a column if a row wraps.",
          "**Multi-line descriptions** split into extra rows.",
          "**Currency symbols and thousands separators** can prevent numeric parsing.",
          "**Page headers repeated mid-table** insert junk rows."
        ]
      },
      {
        "note": "Reconcile the extracted closing balance against the statement before doing anything with the data. If they do not match, the extraction is wrong somewhere, and finding out later is expensive."
      },
      {
        "h2": "Building an annual record"
      },
      {
        "ol": [
          "[Unlock](/tools/unlock) each statement.",
          "[Merge](/tools/merge) in date order.",
          "[Add page numbers](/tools/page-numbers) for reference.",
          "[OCR](/tools/ocr) if any arrived as scans.",
          "Store the merged file; keep individual originals as well."
        ]
      },
      {
        "h2": "Before sharing with anyone"
      },
      {
        "p": "Statements carry account numbers, addresses and sometimes card details. If you are sending one as proof of address or income, [redact](/tools/pdf-redact) what the recipient does not need — and verify by copying text out of the result. A black box over an account number is not a redaction."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "What is my statement password?",
            "a": "Usually date of birth, account number or customer ID in a format your bank specifies. Check their guidance."
          },
          {
            "q": "How accurate is statement extraction?",
            "a": "Good on bordered tables. Always reconcile the closing balance."
          },
          {
            "q": "Should I decrypt and store statements?",
            "a": "If your storage is already secure, yes — it makes them searchable. The encryption was for transit."
          },
          {
            "q": "What should I redact before sharing?",
            "a": "Account numbers, sort codes and any transactions not relevant to the recipient."
          }
        ]
      }
    ]
  },
  {
    "slug": "add-header-footer-to-pdf",
    "title": "Adding Headers and Footers to a PDF",
    "metaTitle": "Add Header and Footer to a PDF — Free Online | ThePDFNinja",
    "metaDescription": "Document titles, reference numbers and confidentiality notices on every page. The margin and page-size traps to check first.",
    "excerpt": "A small operation with three traps, all of which show up only after you have applied it to 200 pages.",
    "date": "2026-12-16",
    "dateLabel": "December 16, 2026",
    "readMinutes": 5,
    "category": "Guides",
    "emoji": "🏷️",
    "keywords": [
      "add header to pdf",
      "pdf footer text",
      "header footer pdf",
      "stamp text on pdf pages",
      "pdf document reference"
    ],
    "blocks": [
      {
        "p": "Adding a header or footer to every page of a PDF — a document title, a reference number, a confidentiality notice, a date — is a small operation with a few traps."
      },
      {
        "h2": "What it is for"
      },
      {
        "ul": [
          "**Document identification** on every page, so a stray printed sheet is traceable.",
          "**Reference or matter numbers** for filing and retrieval.",
          "**Confidentiality notices,** which some organisations require on every page.",
          "**Version or date stamps,** so an old printout is recognisable as old.",
          "**Branding** on distributed material."
        ]
      },
      {
        "h2": "Getting it right"
      },
      {
        "p": "[Add header and footer](/tools/add-header-footer) draws text into the page margin. Three things to check before applying it to a long document:"
      },
      {
        "ol": [
          "**Margin space.** Documents with tight margins have nowhere for a header to go without overlapping content. Check page one and a content-dense page.",
          "**Mixed page sizes.** A header positioned for A4 sits wrongly on a landscape or Letter page. [Resize pages](/tools/resize-pages) to a common size first.",
          "**Existing furniture.** Scanned documents often already carry headers, footers and stamps. Adding another can produce an unreadable overlap."
        ]
      },
      {
        "note": "Headers are drawn permanently into the page. There is no clean removal — keep the original if you might need an unmarked version."
      },
      {
        "h2": "Order matters"
      },
      {
        "p": "Add headers and footers after all page operations are finished. If you add them and then [merge](/tools/merge), [reorder](/tools/organize) or [delete pages](/tools/delete-pages), anything referencing position will be wrong. This is the same rule as [page numbers](/tools/page-numbers), for the same reason — both are stamped ink rather than live fields."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Can I have different headers on different pages?",
            "a": "Simple tools apply one to all pages. For varied headers, split, apply separately, then merge."
          },
          {
            "q": "Will it overlap my content?",
            "a": "It can, on documents with tight margins. Check a content-dense page before applying to all."
          },
          {
            "q": "Can I remove a header later?",
            "a": "Not cleanly. Keep the unmarked original."
          },
          {
            "q": "Header or watermark?",
            "a": "A header sits in the margin and is for identification. A watermark crosses the page and is for status."
          }
        ]
      }
    ]
  },
  {
    "slug": "resize-pdf-pages",
    "title": "Changing a PDF's Page Size (Not Its File Size)",
    "metaTitle": "Resize PDF Pages — A4, Letter and Custom | ThePDFNinja",
    "metaDescription": "Page dimensions and file size are unrelated. When you need to change the first, and the scaling choice that can clip your content.",
    "excerpt": "Two completely different things that people constantly confuse. Here is which one you actually need.",
    "date": "2026-12-17",
    "dateLabel": "December 17, 2026",
    "readMinutes": 5,
    "category": "Guides",
    "emoji": "📐",
    "keywords": [
      "resize pdf pages",
      "change pdf page size",
      "a4 to letter pdf",
      "pdf page dimensions",
      "standardise pdf size"
    ],
    "blocks": [
      {
        "p": "Resizing a PDF's pages — changing the physical page dimensions rather than the file size — is needed more often than people realise, and it is a different operation from compression entirely."
      },
      {
        "h2": "Page size versus file size"
      },
      {
        "p": "These are unrelated and the confusion is common. **Page size** is the physical dimensions: A4, Letter, A3. **File size** is bytes on disk. [Resize pages](/tools/resize-pages) changes the first; [compress](/tools/compress) changes the second."
      },
      {
        "h2": "When you need it"
      },
      {
        "ul": [
          "**Merged documents with mixed sizes.** A pack combining A4 and Letter prints inconsistently and looks unconsidered.",
          "**Printing in a different region.** A4 is standard almost everywhere; Letter in North America. Printing one on the other clips or scales.",
          "**Submission requirements** specifying a page size.",
          "**Before [n-up printing](/tools/n-up-pdf),** where inconsistent sizes tile badly.",
          "**Scans at odd dimensions,** which scanners produce readily."
        ]
      },
      {
        "h2": "Scaling versus repositioning"
      },
      {
        "p": "There are two ways to change page size and the difference matters. **Scaling** shrinks or enlarges the content to fit the new dimensions — nothing is lost but text size changes. **Repositioning** keeps content at its original size on a differently sized page, which can clip content if the new page is smaller."
      },
      {
        "p": "For A4 to Letter and back, scaling is nearly always right — the sizes are close enough that the change is imperceptible."
      },
      {
        "note": "Check the result before distributing. Scaling a document with small print can push it below comfortable readability, and clipping is easy to miss on page one when it only affects page forty."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Does resizing pages reduce file size?",
            "a": "Barely. It changes dimensions, not data. Compress separately."
          },
          {
            "q": "A4 or Letter?",
            "a": "A4 outside North America, Letter within it. If unsure, A4 is more widely accepted internationally."
          },
          {
            "q": "Will resizing blur my text?",
            "a": "No. Text is vector and scales cleanly. Images may soften slightly if enlarged substantially."
          },
          {
            "q": "Can I resize only some pages?",
            "a": "Most tools apply one size to all. For mixed requirements, split, resize separately, then merge."
          }
        ]
      }
    ]
  }
];
