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
  }
];
