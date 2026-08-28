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
    "readMinutes": 11,
    "category": "Guides",
    "emoji": "📧",
    "keywords": [
      "pdf too large to email",
      "email attachment size limit",
      "reduce pdf size for email",
      "gmail 25mb limit",
      "compress pdf for email",
      "compress pdf on iphone",
      "reduce pdf size on android",
      "compress pdf without losing quality",
      "how to compress pdf free",
      "pdf compressor online free",
      "reduce pdf size for email free",
      "compress pdf without watermark",
      "email large pdf file"
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
        "h2": "Working out which fix you need"
      },
      {
        "p": "The six fixes are not equally applicable, and picking the wrong one wastes time. A quick diagnostic:"
      },
      {
        "ol": [
          "**Press Ctrl+F and search for a word you can see.** No result means the document is scanned — go to the scan-specific advice below. A result means it is born-digital.",
          "**Check the page count against the size.** A born-digital document over roughly 100KB per page has embedded images or accumulated cruft.",
          "**Look at document properties for embedded files.** A PDF can carry attachments, and a 30MB file might be a 200KB document wrapped around a spreadsheet.",
          "**Scroll through at thumbnail zoom.** Photographic pages are immediately obvious and tell you where the weight is."
        ]
      },
      {
        "h2": "For scanned documents specifically"
      },
      {
        "p": "Scans account for most oversized PDFs and respond to a different sequence than born-digital files. In order of effect:"
      },
      {
        "ul": [
          "**[Greyscale](/tools/grayscale-pdf) first.** For a colour scan of black text this typically removes 40–60% for no visible change. Nothing else comes close for effort.",
          "**[Crop](/tools/crop) the scanner borders.** Real data, not just tidiness.",
          "**[Delete blank pages](/tools/delete-pages)** from duplex scans, which are often half the page count.",
          "**Then [compress](/tools/compress).** By this point the compressor has far less to destroy."
        ]
      },
      {
        "h2": "When a link is genuinely the right answer"
      },
      {
        "p": "Past about 20MB, email stops being a sensible transport regardless of what the limits technically allow, and it is worth being direct with the recipient about that."
      },
      {
        "p": "The practical advantages are not only yours. A link gives the recipient a resumable download rather than a mailbox-blocking attachment, gives you delivery confirmation, lets you revoke access later, and lets you replace the file with a corrected version without sending a second email that everyone ignores."
      },
      {
        "p": "The one thing to check is whether your recipient can reach the link. Corporate networks block some file-sharing services outright, and a link that fails is worse than an attachment that bounces, because the bounce at least tells you."
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "Most people meet this problem on a phone, where the usual desktop advice does not apply. The good news is that everything here works in a mobile browser — no app to install."
      },
      {
        "p": "**On iPhone:** open the PDF in Files, tap Share, and you will see the size. Safari handles the upload and download steps the same as any desktop browser, so [compress](/tools/compress) works directly. If the file came through Mail, save it to Files first — working from the Mail preview causes upload problems in some iOS versions."
      },
      {
        "p": "**On Android:** the file is usually in Downloads. Chrome handles upload and download normally. If the PDF arrived via WhatsApp, note that WhatsApp already compressed it once — compressing again stacks artefacts, so work from the original if you can get it."
      },
      {
        "p": "**Sharing straight from your phone:** iOS and Android both let you share a link from Files or Drive rather than attaching. For anything over about 20MB that is genuinely the better route, and it avoids the whole problem."
      },
      {
        "h2": "Reducing size without losing quality"
      },
      {
        "p": "The phrase covers two different things and it is worth separating them, because one is genuinely free and the other is a trade."
      },
      {
        "p": "**Genuinely lossless reductions** — nothing visible changes: [flattening](/tools/flatten-pdf) form fields and annotations, [removing metadata](/tools/remove-metadata), and forcing a full rewrite to discard accumulated revisions via [repair](/tools/repair). On a heavily edited document these alone can halve the file."
      },
      {
        "p": "**Effectively lossless** — a trade you will not notice: [greyscale conversion](/tools/grayscale-pdf) on black-ink documents, and downsampling images to 150 DPI for on-screen reading. Both change the data and neither is visible at normal viewing size."
      },
      {
        "p": "**Genuinely lossy** — you will see it: compressing below ebook quality, or targeting a size the content cannot support. If your output looks soft, you have crossed from the second category into the third."
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
          },
          {
            "q": "How do I compress a PDF on my iPhone without an app?",
            "a": "Open the file in Safari, use [Compress PDF](/tools/compress) in the browser, and save the result back to Files. No installation is needed — the processing happens on our servers, not your phone."
          },
          {
            "q": "How do I reduce PDF size without losing quality?",
            "a": "Start with the genuinely lossless steps: flatten, remove metadata, and force a full rewrite. Then greyscale if the document is black ink on white. Only compress images after those, and use ebook quality rather than screen."
          },
          {
            "q": "Why does WhatsApp make my PDF smaller?",
            "a": "WhatsApp compresses attachments on send. That means the copy you received is already degraded — compressing it again stacks artefacts, so always work from the original where possible."
          },
          {
            "q": "Can I email a PDF larger than 25MB?",
            "a": "Not as an attachment to Gmail. Upload it to cloud storage and send a link, which also gives the recipient a resumable download and lets you revoke access later."
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
    "readMinutes": 10,
    "category": "Troubleshooting",
    "emoji": "🚫",
    "keywords": [
      "pdf won't open",
      "pdf file damaged",
      "repair corrupted pdf",
      "pdf error opening",
      "fix broken pdf",
      "fix corrupted pdf free online",
      "repair pdf file free",
      "pdf won't open on phone",
      "damaged pdf recovery online",
      "pdf error opening file",
      "restore corrupted pdf free"
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
        "h2": "Reading a PDF's first and last bytes"
      },
      {
        "p": "Two checks tell you most of what you need, and both work in any text editor — Notepad, TextEdit, anything. The file will look like nonsense; you are only reading the very beginning and very end."
      },
      {
        "p": "**The start** should read `%PDF-` followed by a version number such as `1.7`. Anything else means the file is not a PDF at all, whatever the extension says."
      },
      {
        "p": "**The end** should contain `%%EOF`, usually on the final line, preceded by `startxref` and a number. If that marker is missing, the file was truncated — the download or copy did not finish — and no repair tool can reconstruct bytes that never arrived."
      },
      {
        "p": "For a large file, most editors let you jump to the end with Ctrl+End. You do not need to load the whole thing to check."
      },
      {
        "h2": "Why truncation is so common"
      },
      {
        "p": "It happens more than people expect because the failure is silent. A download interrupted at 95% leaves a file that looks approximately the right size in a file manager, has the right name, and shows no error. Nothing tells you it is incomplete until you open it."
      },
      {
        "p": "Common causes: a dropped connection on a large file, a full disk that silently stopped writing, a USB drive removed before the copy flushed, or a cloud sync client that created the placeholder before finishing the transfer."
      },
      {
        "p": "The fix is always the same — get the file again from the source — which is why establishing truncation early saves you from wasting time on repair tools that cannot possibly help."
      },
      {
        "h2": "Recovering partial content"
      },
      {
        "p": "Where a file is damaged rather than truncated, and [repair](/tools/repair) gets you a document that opens but with some pages broken, you can often salvage the good part:"
      },
      {
        "ol": [
          "Note which pages render correctly.",
          "[Extract those pages](/tools/extract-pages) into a new document.",
          "Check the extracted file opens cleanly on its own.",
          "Source the missing pages separately if they matter — from the sender, from a print copy, or from an earlier version.",
          "[Merge](/tools/merge) the recovered pages back in."
        ]
      },
      {
        "p": "A document that is 90% recovered is usually far more useful than no document, and the missing pages are at least identified rather than unknown."
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "A PDF that will not open on a phone is worth a specific check before you assume damage, because mobile has its own failure modes."
      },
      {
        "p": "**Try a different app first.** iOS Files, Safari, Chrome and Drive all use different renderers. If it opens in any of them, the file is fine and one app is the problem."
      },
      {
        "p": "**Check it downloaded fully.** Mobile downloads are interrupted by network switches — moving from wifi to mobile data mid-download leaves a truncated file that looks complete. Re-download over a stable connection."
      },
      {
        "p": "**Attachments from messaging apps** are sometimes re-encoded in transit. If a PDF from WhatsApp will not open, ask the sender to email it instead."
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
          },
          {
            "q": "How do I fix a corrupted PDF for free?",
            "a": "[Repair PDF](/tools/repair) rebuilds the file's index by scanning for recoverable objects. It often succeeds, because page content usually survives even when the structure does not."
          },
          {
            "q": "Why won't my PDF open on my phone but works on my laptop?",
            "a": "Mobile readers vary in tolerance for malformed structure. If it opens anywhere, repair it and it will open everywhere."
          },
          {
            "q": "Can a truncated PDF be recovered?",
            "a": "No. If the download stopped early, the missing bytes were never received and no tool can reconstruct them. Download it again."
          },
          {
            "q": "How do I know if my PDF is damaged or just encrypted?",
            "a": "Try a different reader. Some report an encrypted file as damaged rather than prompting for a password."
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
    "readMinutes": 10,
    "category": "Guides",
    "emoji": "🔍",
    "keywords": [
      "scanned pdf not searchable",
      "ocr pdf",
      "make pdf searchable",
      "can't select text in pdf",
      "convert scan to text",
      "make scanned pdf searchable free",
      "ocr pdf online free",
      "convert scanned pdf to text free",
      "searchable pdf without losing quality",
      "ocr pdf on iphone",
      "scanned pdf to word free"
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
        "h2": "Checking whether OCR actually worked"
      },
      {
        "p": "OCR that runs without error can still produce output you should not rely on, and the failure is easy to miss because the page looks unchanged — the recognised text is invisible."
      },
      {
        "p": "Three checks, in increasing thoroughness:"
      },
      {
        "ol": [
          "**Search for a common word** you can see on page one. If it is not found, recognition failed entirely.",
          "**Select all and copy into a text editor.** This shows you exactly what was recognised. Skim it — garbled sections stand out immediately.",
          "**Check the values that matter.** Names, dates, reference numbers, amounts. These are where errors are both most likely and most costly, because unusual strings get no help from the language model that corrects ordinary words."
        ]
      },
      {
        "p": "That third check is the one people skip. A 99% accurate document still contains errors, and the language model that fixes `recognitlon` into `recognition` has nothing useful to say about whether a reference number is `AB7749` or `AB7748`."
      },
      {
        "h2": "Multi-column and table layouts"
      },
      {
        "p": "Layout analysis runs before character recognition, and when it goes wrong the characters are recognised perfectly but assembled in the wrong order. The symptom is text that is individually correct and collectively nonsense — sentences from the left column interleaved with the right."
      },
      {
        "p": "This is common with academic papers, newspapers and any document with sidebars. If you only need the words for searching, it does not matter much. If you need to read the extracted text, it matters a lot."
      },
      {
        "p": "The workaround is to process columns separately: [crop](/tools/crop) the page to one column, OCR that, then repeat. Tedious, and reliable where the automatic analysis fails."
      },
      {
        "h2": "What good input looks like"
      },
      {
        "p": "Since recognition quality is decided almost entirely at capture, it is worth knowing the target:"
      },
      {
        "ul": [
          "**300 DPI**, greyscale, page square to within a degree.",
          "**Even illumination** with no shadow gradient across the page.",
          "**High contrast** — dark ink, light paper, nothing showing through from the reverse.",
          "**No compression yet.** Whatever the scanner offers, decline it and compress after recognition.",
          "**Flat pages.** A curled page produces a curved baseline that line detection handles badly."
        ]
      },
      {
        "h2": "Doing this on a phone or tablet"
      },
      {
        "p": "OCR is server-side processing, so a phone handles it as well as a desktop — you are only uploading and downloading."
      },
      {
        "p": "**On iPhone and iPad:** save the PDF to Files first if it arrived by email, then upload from Safari to [OCR](/tools/ocr). Working directly from a Mail attachment preview causes upload failures in some iOS versions."
      },
      {
        "p": "**On Android:** Chrome handles it directly from Downloads or Drive."
      },
      {
        "p": "**A note on iOS built-in scanning:** the Notes and Files apps can scan documents with the camera, and iOS applies its own text recognition for on-device search. That recognition is not written into the PDF, so the file is still unsearchable to everyone else. Run it through OCR if the document is going anywhere."
      },
      {
        "h2": "Making a PDF searchable without losing the original look"
      },
      {
        "p": "A common worry is that OCR will alter the document's appearance. It does not, and understanding why is reassuring."
      },
      {
        "p": "OCR adds an **invisible text layer** positioned behind the page image. The picture you scanned remains exactly as it was — same resolution, same colours, same marks. What changes is that there is now selectable, searchable text sitting underneath it, aligned to where the words appear."
      },
      {
        "p": "This is why a properly OCRed scan looks identical to the original but responds to Ctrl+F. If a tool visibly changes your document's appearance, it has re-rendered the page rather than adding a text layer — which is a different and usually worse operation."
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
          },
          {
            "q": "How do I make a scanned PDF searchable for free?",
            "a": "Run it through [OCR](/tools/ocr). It adds an invisible text layer over the page image, so the document looks identical but becomes searchable and copyable."
          },
          {
            "q": "Can I OCR a PDF on my phone?",
            "a": "Yes. Processing happens on our servers, so any phone browser works. Save the file locally first rather than uploading from an email preview."
          },
          {
            "q": "Does OCR change how my scanned document looks?",
            "a": "No. The recognised text is added as an invisible layer behind the image. The visible page is untouched."
          },
          {
            "q": "Why can I search my scan on my iPhone but nobody else can?",
            "a": "iOS performs on-device recognition for its own search index. That result is not written into the PDF file, so it does not travel with the document."
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
    "readMinutes": 10,
    "category": "Guides",
    "emoji": "🖼️",
    "keywords": [
      "combine photos into pdf",
      "jpg to pdf",
      "multiple images to one pdf",
      "convert photos to pdf",
      "merge images pdf",
      "combine photos into pdf iphone",
      "multiple images to pdf free online",
      "jpg to pdf without watermark",
      "convert photos to pdf on android",
      "merge images into one pdf free",
      "photos to pdf no signup"
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
        "h2": "Getting the page order right the first time"
      },
      {
        "p": "Order problems account for most of the rework here, and they come from a mismatch between how your file manager sorts and how the conversion tool reads."
      },
      {
        "p": "Phone cameras name files sequentially — `IMG_0998`, `IMG_0999`, `IMG_1000`. Sorted as text, `IMG_1000` comes before `IMG_0999` because '1' precedes '9' character by character. Sorted as numbers it does not. Different tools do different things."
      },
      {
        "p": "Two reliable fixes. **Rename with zero padding** — `01`, `02`, `03` — which sorts identically as text and as numbers. Or **select files in the order you want them** rather than selecting all and trusting the sort, since most tools honour selection order."
      },
      {
        "p": "If the result comes out wrong regardless, [Organize PDF](/tools/organize) reorders pages without redoing the conversion."
      },
      {
        "h2": "Handling orientation"
      },
      {
        "p": "Phone photos carry an EXIF orientation flag rather than storing the pixels rotated. The camera records 'this image should be displayed rotated 90 degrees' and leaves the data as the sensor captured it."
      },
      {
        "p": "Tools that read the flag display the photo correctly. Tools that ignore it produce a sideways page. This is why a photo that looks right in your gallery can end up rotated in a PDF."
      },
      {
        "p": "Check the first page after conversion. If it is sideways, the rest probably are too, and [rotate](/tools/rotate) fixes the whole document in one operation."
      },
      {
        "h2": "Choosing between the two size strategies"
      },
      {
        "p": "Both work; they trade quality against convenience."
      },
      {
        "table": {
          "headers": [
            "Approach",
            "Quality",
            "Effort"
          ],
          "rows": [
            [
              "Resize images, then convert",
              "Better",
              "More steps, per-image control"
            ],
            [
              "Convert, then compress the PDF",
              "Slightly worse",
              "One step, exact size targeting"
            ]
          ]
        }
      },
      {
        "p": "The first wins on quality because you control exactly which pixels are discarded. The second wins on convenience because [compress to size](/tools/compress-to-size) hits a stated limit precisely without arithmetic. For a portal with a hard cap, the second is usually the pragmatic choice."
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "Photographing documents and combining them is overwhelmingly a phone task, and it works entirely in a mobile browser."
      },
      {
        "p": "**On iPhone:** photos are HEIC by default and many tools reject them. Either switch the camera to JPG in Settings → Camera → Formats → Most Compatible, or convert with [HEIC to JPG](/tools/heic-to-jpg) before combining. Then use [JPG to PDF](/tools/jpg-to-pdf) in Safari, selecting the images in the order you want them."
      },
      {
        "p": "**On Android:** photos are already JPG, so go straight to [JPG to PDF](/tools/jpg-to-pdf) in Chrome."
      },
      {
        "p": "**Selection order matters more on mobile,** because phone galleries sort by capture time rather than filename. If you photographed pages out of order, either rename them or fix the sequence afterwards with [Organize PDF](/tools/organize)."
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
          },
          {
            "q": "How do I combine photos into one PDF on my iPhone?",
            "a": "Convert from HEIC to JPG first, then use [JPG to PDF](/tools/jpg-to-pdf) in Safari, selecting the images in the order you want them to appear."
          },
          {
            "q": "How do I convert multiple images to one PDF for free?",
            "a": "[JPG to PDF](/tools/jpg-to-pdf) accepts multiple images and produces a single document, one image per page, with no signup or watermark."
          },
          {
            "q": "How do I combine photos into a PDF without losing quality?",
            "a": "The conversion embeds your images as they are. Quality only drops if you compress, and then it is your choice how much. Resize before converting rather than compressing after for the best result."
          },
          {
            "q": "Why are my pages in the wrong order?",
            "a": "Files are used in the order you add them, and phone galleries sort by capture time. Use [Organize PDF](/tools/organize) to reorder without redoing the conversion."
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
    "readMinutes": 10,
    "category": "Guides",
    "emoji": "✂️",
    "keywords": [
      "extract pages from pdf",
      "split pdf pages",
      "save one page of pdf",
      "separate pdf pages",
      "take pages out of pdf",
      "extract pages from pdf free online",
      "save one page of pdf iphone",
      "split pdf pages without watermark",
      "extract pdf pages no signup",
      "separate pdf pages free",
      "take pages out of pdf online"
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
        "h2": "Extracting from a document you did not make"
      },
      {
        "p": "Most extraction is from someone else's document, which introduces two considerations that do not arise with your own files."
      },
      {
        "p": "**Restrictions.** A PDF may carry an owner password flagging extraction as not permitted. Some tools honour this and refuse. If you have the right to use the document, [unlock](/tools/unlock) removes the flag; if you do not, that is a permissions question rather than a technical one."
      },
      {
        "p": "**Provenance.** An extracted subset loses the context that made it verifiable — the cover page identifying the source, the date, the issuing body. If the extract will be relied on by someone else, say what it came from. A three-page extract circulating without attribution is how documents get misread."
      },
      {
        "h2": "Extracting for different purposes"
      },
      {
        "table": {
          "headers": [
            "Purpose",
            "Approach"
          ],
          "rows": [
            [
              "Emailing a chapter",
              "Extract, then [compress](/tools/compress)"
            ],
            [
              "Archiving a section",
              "Extract, then [convert to PDF/A](/tools/pdf-to-pdfa)"
            ],
            [
              "Quoting in another document",
              "Extract, then [PDF to text](/tools/pdf-to-txt)"
            ],
            [
              "Printing a subset",
              "Extract, then check page size and [rotate](/tools/rotate)"
            ],
            [
              "Rebuilding in a new order",
              "Extract several ranges, then [merge](/tools/merge)"
            ]
          ]
        }
      },
      {
        "h2": "Why the extracted file is bigger than expected"
      },
      {
        "p": "A single page pulled from a 200-page report is frequently 1–2MB rather than the 20KB you might expect, and the reason is resource sharing."
      },
      {
        "p": "A PDF stores fonts, images and colour profiles once and references them from every page that uses them. Extract one page and the extraction must bring along every resource that page references — which can include an entire embedded font family used across the document, or a logo image, or a colour profile."
      },
      {
        "p": "Good extraction tools subset what they copy; simpler ones bring everything. If your extract is unexpectedly large, run [compress](/tools/compress) over it, which will discard resources the extracted pages do not actually use."
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "Extraction is server-side, so a phone browser handles it identically to a desktop — you are only choosing page numbers."
      },
      {
        "p": "**Finding the page numbers on mobile is the awkward part.** Phone PDF readers show a page counter, but it is often hidden until you tap the screen. Tap once to reveal the controls, note the number, and use that rather than any number printed on the page."
      },
      {
        "p": "**On iPhone:** open the PDF in Files, note the pages, then use [Extract pages](/tools/extract-pages) in Safari. **On Android:** the same in Chrome from Downloads or Drive."
      },
      {
        "h2": "Extracting without losing quality"
      },
      {
        "p": "This comes up often enough to state plainly: extraction is **lossless**. Pages are copied object by object into a new document — text stays selectable at full fidelity, images keep their original resolution, and nothing is re-rendered or re-encoded."
      },
      {
        "p": "The only thing that changes is context. Links pointing to pages outside your range break, because their target no longer exists, and bookmarks referencing removed pages are dropped. The pages themselves are byte-for-byte what they were."
      },
      {
        "p": "If the extracted file is unexpectedly large, that is resource sharing rather than quality loss — the pages carry fonts and images used across the whole document. [Compress](/tools/compress) discards what the extracted pages do not use."
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
          },
          {
            "q": "How do I extract pages from a PDF on my phone?",
            "a": "Note the page numbers from your reader's page counter, then use [Extract pages](/tools/extract-pages) in a mobile browser. No app needed."
          },
          {
            "q": "Does extracting pages reduce quality?",
            "a": "No. Pages are copied intact — text stays selectable and images keep their resolution. Nothing is re-rendered."
          },
          {
            "q": "How do I save one page of a PDF for free?",
            "a": "[Extract pages](/tools/extract-pages) with a single page number produces a one-page PDF. Free, no signup, no watermark."
          },
          {
            "q": "Why is my extracted page almost as big as the whole document?",
            "a": "PDFs share fonts and images across pages, so an extract carries whatever its pages reference. Run [compress](/tools/compress) to discard the unused resources."
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
    "readMinutes": 10,
    "category": "Security",
    "emoji": "🔓",
    "keywords": [
      "remove pdf password",
      "unlock pdf",
      "decrypt pdf",
      "remove pdf protection",
      "pdf password remover",
      "remove pdf password online free",
      "unlock pdf without password",
      "pdf password remover free",
      "decrypt pdf on iphone",
      "open password protected pdf",
      "remove pdf restrictions free"
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
        "h2": "Identifying which password you are dealing with"
      },
      {
        "p": "Before trying anything, work out which of the two mechanisms is in play — the answers are completely different."
      },
      {
        "ol": [
          "**Try to open the file.** If it demands a password before showing anything, that is a user password and the content is encrypted.",
          "**If it opens,** try to select and copy some text. Blocked copying with the document visible means an owner password.",
          "**Check document properties.** Most readers show a security section listing which operations are permitted: printing, copying, editing, extraction. That tells you exactly what has been restricted."
        ]
      },
      {
        "p": "A document can carry both — encrypted at rest and restricted once open. Removing the user password does not automatically clear the permissions flags, though most unlock tools handle both together."
      },
      {
        "h2": "Why encrypted archives are a practical problem"
      },
      {
        "p": "The case for decrypting statements you have archived is not laziness. An encrypted PDF is opaque to everything except a reader with the password:"
      },
      {
        "ul": [
          "**Desktop search cannot index it.** Your operating system's search will never find a transaction inside it.",
          "**Backup deduplication works poorly** on encrypted files, because they compress badly and differ completely between versions.",
          "**Bulk processing is impossible.** Extracting a year of transactions means unlocking each file first anyway.",
          "**Long-term access depends on remembering a password** you set or were given years ago, for a document you may need in a decade."
        ]
      },
      {
        "p": "If the archive itself is secure — a locked machine, an encrypted disk, a properly protected cloud account — the per-file encryption is protecting against a threat that has already been handled, at real cost to usability."
      },
      {
        "h2": "Choosing a password worth having"
      },
      {
        "p": "When you are the one applying protection with [protect](/tools/protect), the encryption is sound and the password is the whole story."
      },
      {
        "p": "A date of birth or an account number — the defaults banks use — is guessable in seconds by anyone who has the accompanying letter. That is acceptable for transit, where the threat is casual interception, and inadequate for storage."
      },
      {
        "p": "For anything you are protecting deliberately, use a long random passphrase from a password manager, and send it by a genuinely separate channel. Emailing the password alongside the encrypted file, which happens constantly, achieves nothing at all."
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "Bank statements arrive on phones as often as laptops, and unlocking works the same in a mobile browser."
      },
      {
        "p": "**On iPhone:** save the encrypted PDF from Mail into Files, then upload it to [Unlock PDF](/tools/unlock) in Safari with the password. The decrypted copy downloads back to Files."
      },
      {
        "p": "**On Android:** the attachment is usually already in Downloads. Chrome handles the upload and download normally."
      },
      {
        "p": "**A practical note:** once decrypted, the file becomes visible to your phone's search and to any backup that indexes documents. That is usually the point — but if the phone itself is shared or unprotected, keeping the encryption may be the better call."
      },
      {
        "h2": "What you cannot do, and why"
      },
      {
        "p": "It is worth being direct about the limits, because a lot of software advertises otherwise."
      },
      {
        "p": "**A forgotten user password cannot be recovered.** The document content is encrypted with a key derived from that password. Without it there is no document to read — only ciphertext. Tools claiming to recover one are either brute-forcing weak passwords, which fails on anything strong, or not doing what they claim."
      },
      {
        "p": "**The route back is the issuer.** Banks, insurers and payroll providers reissue statements routinely, and they know the password format because they set it. That is a five-minute phone call rather than an unsolvable technical problem."
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
          },
          {
            "q": "How do I remove a password from a PDF on my phone?",
            "a": "Save the file locally, then use [Unlock PDF](/tools/unlock) in your mobile browser with the password. The decrypted copy downloads back to your device."
          },
          {
            "q": "Can I unlock a PDF without the password?",
            "a": "An owner password restricting printing or copying, yes — it is a flag rather than encryption. A user password that blocks opening, no. The content is genuinely encrypted."
          },
          {
            "q": "Is there a free way to remove a PDF password?",
            "a": "[Unlock PDF](/tools/unlock) is free with no signup, for documents you own or are authorised to access."
          },
          {
            "q": "What is my bank statement password?",
            "a": "Usually date of birth in a specified format, your customer or account number, or a combination. The covering email normally states it, often in small print below the attachment."
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
    "readMinutes": 10,
    "category": "Guides",
    "emoji": "🔄",
    "keywords": [
      "rotate pdf",
      "rotate pdf pages permanently",
      "pdf sideways",
      "fix upside down pdf",
      "save rotated pdf",
      "rotate pdf permanently free",
      "rotate pdf on iphone",
      "save rotated pdf online",
      "fix sideways pdf free",
      "rotate pdf without losing quality",
      "rotate pdf no watermark"
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
        "h2": "Finding which pages need rotating"
      },
      {
        "p": "On a long scan, identifying the affected pages is most of the work. Two approaches, depending on how many there are."
      },
      {
        "p": "**Thumbnail view.** Every reader has one. Sideways pages are unmistakable at that size, and you can note the numbers as you scroll. For a 40-page document this takes under a minute and is more reliable than paging through at full size."
      },
      {
        "p": "**Pattern recognition.** Scanner-induced rotation is rarely random. A duplex scanner fed a stack the wrong way round produces every second page upside down. A landscape table inserted into a portrait document is one or two pages. Knowing the cause usually tells you the pattern, which you can then verify rather than hunt for."
      },
      {
        "h2": "Rotation versus skew, and why it matters for OCR"
      },
      {
        "p": "These are different problems with different fixes, and confusing them wastes time."
      },
      {
        "p": "**Rotation** is a 90-degree multiple — the page is sideways or upside down. It is stored as a page attribute and fixing it is lossless and instant."
      },
      {
        "p": "**Skew** is a small angle, typically one to five degrees, from a page fed slightly crooked. It cannot be fixed by rotation, and it is the single largest cause of poor [OCR](/tools/ocr) results because line detection assumes horizontal baselines."
      },
      {
        "p": "If your scan is both sideways and crooked, rotate first so the text is roughly horizontal, then address the skew — ideally by rescanning, since deskewing after the fact resamples the image and softens it."
      },
      {
        "h2": "Where rotation fits in a workflow"
      },
      {
        "p": "Rotate early, before anything that depends on page geometry:"
      },
      {
        "ol": [
          "[Delete blank pages](/tools/delete-pages) — fewer pages to inspect.",
          "**Rotate.** Now every page is the right way up.",
          "[Crop](/tools/crop) — margins are only meaningful once orientation is correct.",
          "[OCR](/tools/ocr) — recognition needs horizontal text.",
          "[Add page numbers](/tools/page-numbers) — position depends on orientation.",
          "[Compress](/tools/compress) last."
        ]
      },
      {
        "p": "Rotating after adding page numbers puts the numbers on the side of the page, which is the sort of error that is only visible once the document is printed."
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "Phone PDF readers all offer a rotate button, and on every one of them it is a **view** control — it changes what you see and not the file. That is why the page is sideways again next time you open it, and why the person you send it to still sees it wrong."
      },
      {
        "p": "**On iPhone:** the Files app rotation is view-only. Markup can rotate and save, but it re-renders the page and can degrade quality. Use [Rotate PDF](/tools/rotate) in Safari instead, which writes the rotation into the file losslessly."
      },
      {
        "p": "**On Android:** Drive and most readers are the same — view-only rotation. [Rotate PDF](/tools/rotate) in Chrome writes it properly."
      },
      {
        "h2": "Rotating without losing quality"
      },
      {
        "p": "Proper rotation is completely lossless, and it is worth understanding why so you can tell it apart from tools that are not."
      },
      {
        "p": "A PDF page carries a `/Rotate` attribute — a number telling every reader which way up to draw it. Changing that number changes nothing else. The text, images and vectors are untouched, so you can rotate a page a hundred times with no degradation whatsoever."
      },
      {
        "p": "What is **not** lossless is re-rendering: converting the page to an image, rotating the pixels, and putting it back. That destroys the text layer and softens everything. If a tool's rotated output is larger than the original or has lost its selectable text, it re-rendered rather than rotating."
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
          },
          {
            "q": "How do I rotate a PDF permanently on my phone?",
            "a": "Phone readers only rotate the view. Use [Rotate PDF](/tools/rotate) in a mobile browser, which writes the rotation into the file so it stays fixed for everyone."
          },
          {
            "q": "Why does my PDF go back to sideways when I reopen it?",
            "a": "Your reader changed the view, not the document. Nothing was saved into the file."
          },
          {
            "q": "Does rotating a PDF reduce quality?",
            "a": "Not when done properly — it sets a page attribute and touches nothing else. Tools that re-render the page to rotate it do lose quality."
          },
          {
            "q": "How do I rotate a PDF for free without watermarks?",
            "a": "[Rotate PDF](/tools/rotate) is free with no signup and adds no watermark."
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
    "readMinutes": 9,
    "category": "Guides",
    "emoji": "🔢",
    "keywords": [
      "add page numbers to pdf",
      "number pdf pages",
      "pdf pagination",
      "page numbers on scanned pdf",
      "insert page numbers pdf",
      "add page numbers to pdf free",
      "number pdf pages online free",
      "page numbers pdf no watermark",
      "insert page numbers pdf mobile",
      "add page numbers scanned pdf",
      "pdf pagination free tool"
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
        "h2": "Numbering conventions for formal submissions"
      },
      {
        "p": "Where a document will be referenced by others — a court bundle, a tender, a thesis — the numbering convention is often prescribed, and where it is not, following the common one avoids questions."
      },
      {
        "ul": [
          "**Continuous arabic numerals throughout**, including appendices, is the default for legal and tender documents. A reader saying 'page 214' must land in one place.",
          "**Roman numerals for front matter**, arabic from the body, is standard for theses and books. The contents page is iv; chapter one starts at 1.",
          "**Section-prefixed numbering** — 3-12 for section 3, page 12 — appears in technical manuals where sections are revised independently.",
          "**Bates numbering** — a continuous sequence across an entire disclosure set, often with a prefix — is standard in litigation."
        ]
      },
      {
        "p": "If a requirement is stated, follow it exactly. If not, continuous arabic is the safest choice, because it is unambiguous and every reader understands it without explanation."
      },
      {
        "h2": "Numbering a document that will grow"
      },
      {
        "p": "The awkward case is a document you will add to — a bundle assembled over weeks, a portfolio built up across a project. Numbering it early means renumbering repeatedly; numbering it late means working with an unnumbered document for the interim."
      },
      {
        "p": "The usual resolution is to number sections independently and combine at the end, accepting that the interim references are section-relative. Where a stable reference is genuinely needed before the document is final, number generously — leaving gaps between sections — and accept that the sequence will have holes."
      },
      {
        "h2": "Checking before distribution"
      },
      {
        "ol": [
          "Open the first and last page — confirm numbering starts and ends where expected.",
          "Check a page in the middle: does the printed number match the reader's page counter, allowing for any front matter offset?",
          "Look at a landscape page if there is one — the number may have landed in a margin that no longer exists.",
          "Check the number is inside the printable area. Most printers cannot print within roughly 5mm of the paper edge.",
          "Confirm no page has two numbers, which happens when a document was numbered twice."
        ]
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "Numbering is server-side, so a mobile browser works exactly as a desktop does. The one thing worth doing on a larger screen if you can is the final check — verifying number placement across a long document is genuinely harder on a phone."
      },
      {
        "p": "**On iPhone:** save the merged PDF to Files, then use [Add page numbers](/tools/page-numbers) in Safari. **On Android:** the same in Chrome."
      },
      {
        "p": "If you are assembling a submission on a phone under deadline, do the numbering last and then scroll the whole document once at thumbnail zoom. Misplaced numbers are visible at that size and invisible at reading zoom."
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
          },
          {
            "q": "How do I add page numbers to a PDF for free?",
            "a": "[Add page numbers](/tools/page-numbers) stamps a continuous sequence across the document. Free, no signup, no watermark."
          },
          {
            "q": "Can I add page numbers to a PDF on my phone?",
            "a": "Yes — the processing is server-side, so any mobile browser works. Check the result at thumbnail zoom afterwards."
          },
          {
            "q": "Can I add page numbers to a scanned PDF?",
            "a": "Yes. Numbers are drawn onto the page and do not need a text layer, so scans work the same as born-digital documents."
          },
          {
            "q": "How do I number a PDF starting from a page other than the first?",
            "a": "Set a starting number so front matter stays outside the sequence, or number from the page where the body begins. Both are standard conventions."
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
    "readMinutes": 9,
    "category": "Security",
    "emoji": "💧",
    "keywords": [
      "watermark pdf",
      "add watermark to pdf",
      "draft watermark",
      "confidential stamp pdf",
      "pdf watermark free",
      "add watermark to pdf free",
      "watermark pdf online no signup",
      "draft watermark pdf",
      "confidential stamp pdf free",
      "pdf watermark without software",
      "remove watermark from pdf"
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
        "h2": "Placement, and why diagonal is standard"
      },
      {
        "p": "A watermark's placement is a trade between legibility of the mark and legibility of the document underneath, and the conventional diagonal is a considered answer rather than a default."
      },
      {
        "ul": [
          "**Diagonal across the centre.** Hardest to crop away, visible on every printout regardless of how the page is trimmed, and it crosses text at an angle rather than running along it — which paradoxically makes both easier to read than a horizontal mark competing with the lines.",
          "**Horizontal across the centre.** Reads more naturally but interferes with text more, because it runs parallel to the lines it overlaps.",
          "**Corner or footer.** Least intrusive, and trivially removed by cropping. Appropriate for branding, useless as a warning.",
          "**Tiled repeatedly.** Very hard to remove and very hard to read through. Reserve for material where deterrence genuinely outweighs usability."
        ]
      },
      {
        "h2": "Watermarking for traceability"
      },
      {
        "p": "A generic CONFIDENTIAL mark tells a recipient the document is sensitive. A mark carrying **their own name** tells them that if it leaks, the leak is attributable to them — and that changes behaviour considerably more."
      },
      {
        "p": "This is standard practice for pre-release financial information, unpublished research and draft legal documents circulated to multiple parties. The mechanics are simple: produce one [watermarked](/tools/watermark) copy per recipient with their name in the mark, and keep a record of which copy went where."
      },
      {
        "p": "It costs a few minutes per recipient and it is the difference between knowing a document leaked and knowing who leaked it."
      },
      {
        "h2": "What to do about a watermark you need to remove"
      },
      {
        "p": "Occasionally you need a clean copy of a document you watermarked and no longer have the original of. There is no clean removal — the mark is drawn into the page content, indistinguishable from any other graphic."
      },
      {
        "p": "What people try, and what it costs: cropping only works for corner marks; covering it with a white box leaves it in the file and looks obvious in print; re-rendering the page and editing it out destroys the text layer. All of them are worse than keeping the master."
      },
      {
        "note": "Watermark a copy, always. Keep the unmarked original somewhere you will find it. This is the single piece of advice that prevents the entire problem."
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "Watermarking is server-side, so a mobile browser handles it as well as a desktop. Save the file locally first on iPhone rather than uploading from a mail preview."
      },
      {
        "p": "**The one thing harder on mobile** is judging opacity. A watermark that looks right on a phone screen can be too faint on a printed page or too heavy on a monitor. If the document will be printed or reviewed on a desktop, check the result on a larger screen before distributing."
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
          },
          {
            "q": "How do I add a watermark to a PDF for free?",
            "a": "[Watermark PDF](/tools/watermark) adds text across every page at an opacity you choose. Free, no signup, and it adds no branding of its own."
          },
          {
            "q": "How do I add a DRAFT watermark to a PDF?",
            "a": "Use DRAFT as the text at around 0.5 opacity — deliberately intrusive, since the point is that nobody mistakes it for final."
          },
          {
            "q": "Can I remove a watermark from a PDF?",
            "a": "Not cleanly. It is drawn into the page content, indistinguishable from any other graphic. Keep the unmarked original."
          },
          {
            "q": "Does a watermark stop people copying my text?",
            "a": "No. The text underneath stays fully selectable. Use [redact](/tools/pdf-redact) to remove content or [protect](/tools/protect) to restrict copying."
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
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 9,
    "category": "Guides",
    "emoji": "📃",
    "keywords": [
      "remove blank pages from pdf",
      "delete blank pages",
      "scanned pdf blank pages",
      "clean up scan",
      "duplex scan blank",
      "delete pages from pdf free",
      "remove blank pages pdf online",
      "delete pdf pages no watermark",
      "remove pages from pdf on phone",
      "clean up scanned pdf free",
      "delete page from pdf without acrobat"
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
        "h2": "Finding blank pages efficiently in a long scan"
      },
      {
        "p": "On a 200-page scan, identifying the blanks by paging through is the slow part. Two approaches are much faster."
      },
      {
        "p": "**Thumbnail view at small size.** Blank pages appear as plain white rectangles among pages with visible text blocks. Scanning a 200-page thumbnail grid takes perhaps a minute, and you can note the numbers as you go."
      },
      {
        "p": "**Pattern inference.** Duplex scanning of single-sided originals produces blanks at every even position — 2, 4, 6 and so on. Confirm the pattern holds on the first ten pages and the last ten, then apply it to the whole range rather than checking each one. Verify the result afterwards by page count."
      },
      {
        "h2": "Why detection sometimes misses them"
      },
      {
        "p": "Automatic blank-page detection works on ink coverage: if the proportion of non-white pixels falls below a threshold, the page is considered blank. Several things defeat it."
      },
      {
        "ul": [
          "**Show-through.** Text from the printed side visible through thin paper registers as content.",
          "**Scanner noise.** Sensor noise on a white page produces scattered non-white pixels.",
          "**Dust and specks** on the glass.",
          "**Page edges and shadows** where the sheet did not sit flat.",
          "**Pre-printed furniture** — headers, footers, page numbers or a company logo on an otherwise empty page."
        ]
      },
      {
        "p": "Raising the detection threshold helps with the first four and risks deleting genuinely sparse pages. Where accuracy matters, identify them by eye and delete by number."
      },
      {
        "h2": "Verifying you removed the right ones"
      },
      {
        "ol": [
          "Note the original page count before deleting.",
          "Subtract the number of pages you removed.",
          "Check the result matches the new page count exactly.",
          "Scroll the thumbnails once more — a mis-typed number is immediately visible as a missing content page.",
          "[Compress](/tools/compress) afterwards to force a full rewrite, since deletion alone often leaves the data in the file."
        ]
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "The work happens on our servers, so a mobile browser handles this exactly as a desktop does — you are only uploading and downloading."
      },
      {
        "p": "Identifying blank pages is much easier in thumbnail view, which phone readers do offer but usually behind a menu. On a long scan it is worth doing this step on a larger screen if you have one — a mis-typed page number removes a page you needed."
      },
      {
        "p": "**On iPhone,** save the file into Files first if it arrived by email or a messaging app; uploading from an attachment preview fails in some iOS versions. **On Android,** the file is usually already in Downloads and Chrome handles it directly."
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
          },
          {
            "q": "How do I delete pages from a PDF for free?",
            "a": "[Delete pages](/tools/delete-pages) removes the pages you name and keeps everything else. Free, no signup, no watermark."
          },
          {
            "q": "How do I remove blank pages from a scanned PDF?",
            "a": "Identify them in thumbnail view — with duplex scans they are usually every second page — then delete them by number."
          },
          {
            "q": "Why is my blank page 200KB?",
            "a": "It is a photograph of white paper complete with scanner noise. Greyscale scanning reduces this substantially."
          },
          {
            "q": "My file did not get smaller after deleting pages. Why?",
            "a": "PDF editors often append changes rather than rewriting. Run [compress](/tools/compress) afterwards to force a full rewrite."
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
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 9,
    "category": "Guides",
    "emoji": "✂️",
    "keywords": [
      "crop pdf",
      "remove pdf margins",
      "crop pdf pages",
      "trim pdf white space",
      "crop scanned pdf",
      "crop pdf free online",
      "crop pdf margins for mobile",
      "crop pdf without losing quality",
      "crop scanned pdf free",
      "remove pdf borders online"
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
        "h2": "Measuring how much to crop"
      },
      {
        "p": "Guessing at margin sizes leads either to a timid crop that achieves nothing or an aggressive one that clips text. Measuring takes a moment."
      },
      {
        "p": "PDF measurements are in **points**: 72 points to an inch, roughly 28.35 to a centimetre. An A4 page is 595 × 842 points."
      },
      {
        "p": "Most readers show cursor coordinates or offer a measuring tool. Failing that, estimate proportionally: if the text block occupies about 70% of the page width, the two margins together are 30% — roughly 89 points each on A4. Crop conservatively at first, check, and crop again if there is room."
      },
      {
        "h2": "Pages that do not share the same margins"
      },
      {
        "p": "This is what makes cropping risky on a long document. A single crop applied to every page assumes every page has the same layout, and most documents do not."
      },
      {
        "ul": [
          "**Title pages** are often centred with different spacing entirely.",
          "**Chapter openers** frequently have a deep top margin by design.",
          "**Landscape pages** — tables, figures — have margins on different edges.",
          "**Full-bleed images** extend to the page edge and will be clipped.",
          "**Pages with footnotes** use more of the bottom margin than pages without."
        ]
      },
      {
        "p": "Check at minimum the first page, the last page, one chapter opener and any landscape page before applying a crop to the whole document. If the layouts genuinely differ, [split](/tools/split) into groups, crop each appropriately, and [merge](/tools/merge) back."
      },
      {
        "h2": "Cropping for a specific device"
      },
      {
        "p": "If the goal is comfortable reading on a particular tablet or e-reader, crop to match its aspect ratio rather than simply removing margins."
      },
      {
        "p": "A 4:3 tablet displaying a cropped 3:4 page fills the screen with no wasted bands. The same page cropped to an arbitrary shape leaves letterboxing at top and bottom, which wastes exactly the screen area you were trying to reclaim."
      },
      {
        "p": "Work out the device's aspect ratio, then choose crop margins that bring the text block to approximately that shape. It is slightly more arithmetic and noticeably better to read."
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "The processing happens on our servers, so a mobile browser works exactly as a desktop does — you are only uploading and downloading."
      },
      {
        "p": "Cropping is the single most effective change for reading PDFs on a phone. Journal articles and reports laid out for A4 print waste a third of your screen on margin, and your reader scales the text down to accommodate it — removing the margins can increase effective text size by 30-40%."
      },
      {
        "p": "**On iPhone,** save the file into Files first if it arrived by email or a messaging app. Uploading directly from an attachment preview fails in some iOS versions. **On Android,** files are usually already in Downloads and Chrome handles it directly."
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
          },
          {
            "q": "How do I crop a PDF for free?",
            "a": "[Crop PDF](/tools/crop) sets a crop box in points — 72 to an inch. Free, no signup, and it is lossless."
          },
          {
            "q": "How do I make a PDF easier to read on my phone?",
            "a": "Crop the margins. Your reader scales the whole page including empty space, so removing margins makes the text render proportionally larger."
          },
          {
            "q": "Does cropping a PDF delete content?",
            "a": "No. It sets a display region; content outside remains in the file. This is also why cropping is not a way to hide information — use [redact](/tools/pdf-redact) for that."
          },
          {
            "q": "Can I undo a crop?",
            "a": "Usually, if the tool preserved the original media box. Keep a copy regardless."
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
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 9,
    "category": "Guides",
    "emoji": "🖨️",
    "keywords": [
      "print multiple pages per sheet",
      "n-up pdf",
      "2 pages per sheet",
      "print 4 slides per page",
      "save paper printing pdf",
      "print 4 pages per sheet pdf",
      "n-up pdf free online",
      "print multiple slides per page",
      "pdf handout maker free",
      "combine pdf pages onto one sheet"
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
        "h2": "Working out whether the result will be readable"
      },
      {
        "p": "Rather than printing and hoping, the arithmetic is simple enough to do first."
      },
      {
        "p": "Two-up halves each linear dimension, so 12pt text prints at roughly 8.5pt. Four-up quarters the area, halving each dimension again — 12pt becomes about 6pt. Six-up gives roughly 5pt, and nine-up about 4pt."
      },
      {
        "table": {
          "headers": [
            "Source text size",
            "2-up",
            "4-up",
            "6-up"
          ],
          "rows": [
            [
              "14 pt heading",
              "10 pt",
              "7 pt",
              "5.7 pt"
            ],
            [
              "12 pt body",
              "8.5 pt",
              "6 pt",
              "4.9 pt"
            ],
            [
              "10 pt body",
              "7 pt",
              "5 pt",
              "4.1 pt"
            ],
            [
              "8 pt footnote",
              "5.7 pt",
              "4 pt",
              "3.3 pt"
            ]
          ]
        }
      },
      {
        "p": "Comfortable reading starts around 8pt and becomes difficult below 6pt. So a 12pt document is fine at two-up, marginal at four-up, and unreadable at six. A slide deck with 24pt text is comfortable even at six-up, which is why handout layouts work for slides and not for reports."
      },
      {
        "h2": "Cropping first, and why it matters so much here"
      },
      {
        "p": "N-up tiles whole pages, margins included. A page that is one third margin tiles one third whitespace, so at four-up you are printing a sheet that is a third empty and text that is smaller than it needed to be."
      },
      {
        "p": "[Cropping](/tools/crop) before tiling means the same sheet carries larger content. On a typical academic paper this is the difference between four-up being readable and not — the same operation, one preparatory step apart."
      },
      {
        "h2": "Duplex and reading order"
      },
      {
        "p": "Two things catch people out when tiling for double-sided printing."
      },
      {
        "p": "**Reading order within a sheet** is normally left to right then down, but some tools offer column-major order instead. Check a two-page sample before committing a long job — discovering the order is wrong on sheet forty is expensive."
      },
      {
        "p": "**Duplex binding edge.** Tiled sheets printed double-sided need the correct flip setting — long edge or short edge — or alternate sheets come out upside down. Print two sheets and check before continuing."
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "The work happens on our servers, so a mobile browser handles this exactly as a desktop does — you are only uploading and downloading."
      },
      {
        "p": "Producing a real n-up file rather than using the print dialog matters more on mobile, because phone print dialogs frequently do not offer a pages-per-sheet option at all. Building the tiled PDF first means you can print it from anywhere."
      },
      {
        "p": "**On iPhone,** save the file into Files first if it arrived by email or a messaging app; uploading from an attachment preview fails in some iOS versions. **On Android,** the file is usually already in Downloads and Chrome handles it directly."
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
          },
          {
            "q": "How do I print 4 PDF pages on one sheet?",
            "a": "[N-up PDF](/tools/n-up-pdf) creates a new document with the tiling baked in, so it prints that way from any device — including phones, whose print dialogs often lack the option."
          },
          {
            "q": "How do I make slide handouts from a PDF?",
            "a": "Four slides per sheet in landscape is the standard handout layout. Crop wide borders first if the template has them."
          },
          {
            "q": "Does n-up reduce quality?",
            "a": "No. Pages are scaled, not re-rendered. Text stays vector-sharp, only smaller."
          },
          {
            "q": "How many pages per sheet is still readable?",
            "a": "Two-up for documents, four-up for slide decks. Six-up works only for large slide text; nine-up is a contact sheet, not something to read."
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
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 9,
    "category": "Guides",
    "emoji": "⚫",
    "keywords": [
      "convert pdf to grayscale",
      "pdf black and white",
      "greyscale pdf",
      "reduce pdf color",
      "black and white pdf converter",
      "convert pdf to black and white free",
      "pdf to grayscale online free",
      "remove colour from pdf",
      "greyscale pdf on mobile",
      "black and white pdf converter no watermark",
      "reduce pdf size greyscale"
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
        "h2": "Greyscale, bitonal and true black-and-white"
      },
      {
        "p": "Three terms get used interchangeably and mean quite different things, which is why people occasionally destroy a document by choosing the wrong one."
      },
      {
        "ul": [
          "**Greyscale** keeps 256 shades from black to white. Photographs still look like photographs, shading survives, faint marks remain visible. Roughly one third the data of colour.",
          "**Bitonal**, sometimes labelled 'black and white' or '1-bit', stores one bit per pixel: pure black or pure white, nothing between. Tiny files. Destroys photographs, grey stamps, faded ink and any subtlety.",
          "**Colour converted to look monochrome** — a colour file where the colours happen to be greys. Looks the same, saves nothing, because it still stores three channels."
        ]
      },
      {
        "p": "The third is a real trap. Some tools 'convert to black and white' by desaturating rather than changing colour mode, so you get the appearance of greyscale with none of the file size benefit. Check the result size: if it barely moved, nothing structural changed."
      },
      {
        "h2": "Deciding whether colour carries information"
      },
      {
        "p": "The test is whether a reader would lose anything. Work through the document asking what each use of colour is doing:"
      },
      {
        "ul": [
          "**A chart with a colour key** — colour is the data. Do not convert.",
          "**A red stamp on a certificate** — often authenticating. Check whether the recipient needs it.",
          "**A signature in blue ink** — usually irrelevant, occasionally significant in a legal context.",
          "**Coloured form field backgrounds** — decorative. Safe.",
          "**Photographs of people or places** — depends entirely on purpose.",
          "**Black text on white paper scanned in colour** — no information whatever. Convert."
        ]
      },
      {
        "h2": "Where greyscale fits in the sequence"
      },
      {
        "p": "Convert to greyscale **before** compressing, not after. The reason is that compression allocates its quality budget across the data it is given; hand it three colour channels of essentially identical grey information and it spends effort encoding all three. Hand it one channel and the same budget goes into preserving the detail that matters."
      },
      {
        "p": "In practice this is the difference between a legible 100KB scan and an unreadable one. [Greyscale](/tools/grayscale-pdf), then [crop](/tools/crop), then [compress to size](/tools/compress-to-size)."
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "The processing happens on our servers, so a mobile browser works exactly as a desktop does — you are only uploading and downloading."
      },
      {
        "p": "Greyscale conversion is the highest-value step before hitting a size limit on a phone, because it removes two thirds of the data before any compression happens — which means the compressor degrades far less to reach the same target."
      },
      {
        "p": "**On iPhone,** save the file into Files first if it arrived by email or a messaging app. Uploading directly from an attachment preview fails in some iOS versions. **On Android,** files are usually already in Downloads and Chrome handles it directly."
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
          },
          {
            "q": "How do I convert a PDF to black and white for free?",
            "a": "[Convert to greyscale](/tools/grayscale-pdf) removes colour channels while keeping 256 shades, so photographs and shading survive. Free, no signup."
          },
          {
            "q": "Does greyscale reduce PDF file size?",
            "a": "Substantially — typically 40–60% for a colour scan of black text, with no visible change."
          },
          {
            "q": "Can I convert a PDF to greyscale on my phone?",
            "a": "Yes, in any mobile browser. It is often the single most effective step toward a size limit."
          },
          {
            "q": "Can I convert greyscale back to colour?",
            "a": "No. The colour information is discarded permanently. Keep the original."
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
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 10,
    "category": "Guides",
    "emoji": "🔒",
    "keywords": [
      "redact pdf",
      "how to redact pdf",
      "black out text pdf",
      "remove sensitive information pdf",
      "pdf redaction",
      "redact pdf free online",
      "black out text in pdf permanently",
      "remove text from pdf free",
      "pdf redaction tool free",
      "hide sensitive information pdf",
      "redact pdf without acrobat"
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
        "h2": "How redaction failures actually get discovered"
      },
      {
        "p": "The reason this matters more than it appears is that failed redactions are not discovered by determined attackers running specialist tools. They are discovered accidentally, by ordinary people doing ordinary things."
      },
      {
        "ul": [
          "**Selecting text to quote it.** A journalist copies a paragraph and the redacted name comes with it.",
          "**Searching the document.** Ctrl+F finds a term that is visually blacked out.",
          "**Opening it in a different reader.** Drawing order is not always honoured; some viewers render the text over the rectangle.",
          "**Converting the file.** [PDF to text](/tools/pdf-to-txt) or [PDF to Word](/tools/pdf-to-word) extracts the text layer and ignores graphics entirely.",
          "**Automated indexing.** A search engine that crawls the document indexes the underlying text."
        ]
      },
      {
        "p": "Every one of those is something a normal reader might do without any intent to defeat the redaction. That is why 'nobody would think to check' is not a defence."
      },
      {
        "h2": "Redacting scanned documents"
      },
      {
        "p": "Scans behave differently and the difference cuts both ways."
      },
      {
        "p": "**The good news:** a scan is an image, so drawing an opaque black rectangle over part of it genuinely does obscure the pixels underneath, provided the mark is fully opaque and the file is then flattened or re-rendered so the rectangle becomes part of the image rather than an annotation on top of it."
      },
      {
        "p": "**The catch:** if [OCR](/tools/ocr) has been run, there is now an invisible text layer containing everything on the page — including whatever you covered. The image is redacted; the text layer is not. Either redact before OCR, or redact the text layer explicitly."
      },
      {
        "h2": "A verification routine worth making habitual"
      },
      {
        "ol": [
          "Open the redacted file.",
          "Ctrl+A, Ctrl+C, paste into a plain text editor.",
          "Search that text for each item you redacted.",
          "Check document properties for the same terms in title, author or subject fields.",
          "Check the filename.",
          "If the source was scanned and OCRed, confirm the text layer was redacted too, not just the image."
        ]
      },
      {
        "p": "Six steps, under a minute, and it is the only thing that distinguishes a redaction that works from one that looks like it works."
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "Redaction is one operation genuinely worth doing on a larger screen if you can, and it is worth saying why."
      },
      {
        "p": "The technical step works fine in a mobile browser — [redact](/tools/pdf-redact) is server-side. What is hard on a phone is the **verification**, which is the part that matters. Copying all the text out of a PDF and searching it for what you removed is fiddly on mobile and easy to do carelessly."
      },
      {
        "p": "If you must work on a phone, do the redaction there and verify by opening the result and using the reader's search function for each redacted term. It is less thorough than a copy-paste check but far better than not verifying at all."
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
          },
          {
            "q": "How do I redact a PDF for free?",
            "a": "[Redact PDF](/tools/pdf-redact) removes the underlying content rather than covering it. Free, no signup. Verify afterwards by copying the text out and searching it."
          },
          {
            "q": "Is drawing a black box over text the same as redacting?",
            "a": "No, and this is the single most consequential PDF mistake there is. The text stays in the file and comes out when anyone selects and copies the page."
          },
          {
            "q": "How do I check my redaction actually worked?",
            "a": "Open the result, select all, copy, paste into a plain text editor, and search for what you removed. If it appears, it was not removed."
          },
          {
            "q": "Can redacted text be recovered?",
            "a": "Not if it was properly removed. That is exactly the difference between redaction and drawing a shape over it."
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
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 10,
    "category": "Guides",
    "emoji": "🕵️",
    "keywords": [
      "remove pdf metadata",
      "pdf document properties",
      "anonymous pdf",
      "strip metadata pdf",
      "pdf author information",
      "remove pdf metadata free",
      "make pdf anonymous online",
      "strip pdf author information",
      "remove document properties pdf",
      "clear pdf metadata no signup",
      "pdf privacy remove data"
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
        "h2": "Seeing what is there before you strip it"
      },
      {
        "p": "It is worth looking at least once, because the contents are usually more revealing than people expect and it changes how carefully you treat the step."
      },
      {
        "p": "Every reader exposes this. In most, File then Properties. You will typically find the author field populated with a full name — often not yours, if you started from a colleague's template — the producing application and version, creation and modification timestamps, and sometimes a title left over from whatever document was originally saved under that name."
      },
      {
        "p": "The one that surprises people is the **file path** preserved by some producers, which can read something like `/Clients/Northgate/2026 Restructuring/draft.docx`. That single string can disclose a client relationship, a project name and a document's status."
      },
      {
        "h2": "Metadata inside embedded images"
      },
      {
        "p": "Stripping the document-level metadata does not touch metadata inside images embedded in the pages, and photographs carry a lot of it."
      },
      {
        "p": "A phone photo embeds EXIF data: camera model, exposure settings, timestamp, and frequently **GPS coordinates** accurate to a few metres. Insert that photo into a document, export to PDF, and the coordinates travel with it."
      },
      {
        "p": "For most documents this is harmless. For a photograph taken at someone's home, a confidential site, or anywhere whose location is itself sensitive, it is a genuine disclosure. Strip EXIF from images before embedding them, or [convert pages to images](/tools/pdf-to-jpg) and rebuild — which discards everything at the cost of the text layer."
      },
      {
        "h2": "When metadata should be kept"
      },
      {
        "p": "Stripping is not always right. Metadata serves real purposes and removing it indiscriminately loses them:"
      },
      {
        "ul": [
          "**Archival records** need creation dates and provenance to be meaningful. [PDF/A](/tools/pdf-to-pdfa) requires structured metadata for exactly this reason.",
          "**Published work** benefits from author and title fields, which improve how the document appears in search and in reference managers.",
          "**Internal documents** in a managed system may rely on metadata for classification and retention.",
          "**Legal disclosure** sometimes requires metadata to be preserved intact — stripping it can itself be a problem."
        ]
      },
      {
        "p": "The rule of thumb: strip before anything leaves your organisation to an external party who does not need it. Keep it for archives, publications and internal records."
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "The work happens on our servers, so a mobile browser handles this exactly as a desktop does — you are only uploading and downloading."
      },
      {
        "p": "Checking metadata is awkward on mobile — most phone readers do not expose document properties at all. If you are sending something where author details matter, verify on a desktop, or simply strip it as a matter of routine before anything leaves your device."
      },
      {
        "p": "**On iPhone,** save the file into Files first if it arrived by email or a messaging app; uploading from an attachment preview fails in some iOS versions. **On Android,** the file is usually already in Downloads and Chrome handles it directly."
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
          },
          {
            "q": "How do I remove metadata from a PDF for free?",
            "a": "[Remove metadata](/tools/remove-metadata) strips the document information dictionary — author, title, producer, timestamps. Free, no signup."
          },
          {
            "q": "How do I make a PDF anonymous?",
            "a": "Strip metadata, rename the file, and check the content itself for identifying details. Metadata removal alone is not anonymity."
          },
          {
            "q": "Does a PDF contain my name?",
            "a": "Frequently, in the author field taken from your word processor. It can also carry your file path, which may disclose more than the name does."
          },
          {
            "q": "Do images inside a PDF carry metadata?",
            "a": "Yes — photographs can retain EXIF data including GPS coordinates. Document-level stripping does not remove it."
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
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 9,
    "category": "Guides",
    "emoji": "🗜️",
    "keywords": [
      "flatten pdf",
      "what does flatten pdf mean",
      "flatten form fields",
      "pdf flatten annotations",
      "lock pdf form",
      "flatten pdf free online",
      "flatten pdf form fields",
      "lock pdf form after filling",
      "flatten pdf without acrobat",
      "pdf form shows blank to recipient",
      "flatten annotations pdf"
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
        "h2": "What each interactive element becomes"
      },
      {
        "p": "'Everything becomes page content' is accurate but vague. Specifically:"
      },
      {
        "table": {
          "headers": [
            "Before flattening",
            "After flattening"
          ],
          "rows": [
            [
              "Form field with a value",
              "The value drawn as static text"
            ],
            [
              "Empty form field",
              "Usually the field border, or nothing"
            ],
            [
              "Checkbox, ticked",
              "The tick mark drawn onto the page"
            ],
            [
              "Highlight annotation",
              "A coloured rectangle in the page content"
            ],
            [
              "Sticky note comment",
              "Usually the icon; the note text is often discarded"
            ],
            [
              "Digital signature",
              "The visual appearance only — the cryptographic validity is lost"
            ],
            [
              "Hidden layer",
              "Either merged in or discarded, depending on its visibility state"
            ]
          ]
        }
      },
      {
        "p": "That signature row deserves attention. Flattening a digitally signed document keeps the picture of the signature and destroys what made it meaningful — the cryptographic binding that proves the document has not changed. Never flatten a document whose signature needs to remain verifiable."
      },
      {
        "h2": "Flattening as a compatibility fix"
      },
      {
        "p": "The most common practical reason to flatten is that a document displays differently for different people, and almost always the cause is interactive content."
      },
      {
        "p": "Form field values are rendered live by the reader from the field's stored value. Readers differ in whether they render them at all, how they style them, and whether they include them when printing. A filled form that looks complete to you can arrive looking blank, which is a genuinely bad outcome for something like a submitted application."
      },
      {
        "p": "Flattening removes the variable entirely. The values become ordinary page content and every reader draws them identically, because there is nothing left to interpret."
      },
      {
        "h2": "Before you flatten, check these"
      },
      {
        "ol": [
          "**Is every field filled as intended?** After flattening you cannot correct one without rebuilding.",
          "**Do you need the data extractable later?** Field values are machine-readable; drawn text is not.",
          "**Is there a digital signature?** If so, flattening invalidates it.",
          "**Are there review comments you would rather remove entirely** than merge into the page? Delete them first.",
          "**Have you kept the original?** There is no unflatten."
        ]
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "The processing happens on our servers, so a mobile browser works exactly as a desktop does — you are only uploading and downloading."
      },
      {
        "p": "Flattening is particularly worth doing before sending a filled form from a phone, because mobile readers vary widely in whether they render form field values — a form that looks complete to you can arrive blank."
      },
      {
        "p": "**On iPhone,** save the file into Files first if it arrived by email or a messaging app. Uploading directly from an attachment preview fails in some iOS versions. **On Android,** files are usually already in Downloads and Chrome handles it directly."
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
          },
          {
            "q": "How do I flatten a PDF for free?",
            "a": "[Flatten PDF](/tools/flatten-pdf) merges form fields, annotations and layers into the page. Free, no signup."
          },
          {
            "q": "Why does my filled PDF form look empty to the recipient?",
            "a": "Their reader is not rendering the form field values. Flatten before sending and the values become ordinary page content that every reader draws identically."
          },
          {
            "q": "Does flattening reduce PDF file size?",
            "a": "Usually yes, since interactive objects carry overhead. Combined with compression the saving can be substantial."
          },
          {
            "q": "Can I unflatten a PDF?",
            "a": "No. Keep the original — recovering fields means rebuilding them by hand."
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
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 10,
    "category": "Guides",
    "emoji": "🔐",
    "keywords": [
      "password protect pdf",
      "pdf encryption",
      "secure pdf",
      "pdf user password",
      "protect pdf from copying",
      "password protect pdf free online",
      "encrypt pdf without acrobat",
      "lock pdf with password free",
      "secure pdf online no signup",
      "add password to pdf on phone"
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
        "h2": "What the permission flags actually cover"
      },
      {
        "p": "An owner password sets a set of flags, and it is worth knowing what they can and cannot express."
      },
      {
        "ul": [
          "**Printing** — can be disallowed entirely, or restricted to low resolution.",
          "**Content copying** — blocks selecting and copying text.",
          "**Copying for accessibility** — a separate flag. Blocking this prevents screen readers from working, which in many jurisdictions is a compliance problem in its own right.",
          "**Editing** — blocks changes to the document.",
          "**Annotating** — blocks adding comments while still permitting reading.",
          "**Form filling** — can be permitted while general editing is blocked.",
          "**Page extraction** — blocks pulling pages into a new document."
        ]
      },
      {
        "p": "That accessibility flag is the one to think about. Blocking it prevents assistive technology from reading the document aloud, which affects real users and rarely achieves anything the copying flag does not already attempt."
      },
      {
        "h2": "Why owner passwords are weak by design"
      },
      {
        "p": "This is not an implementation flaw. The PDF specification stores the permission flags in the file and asks readers to honour them, but the file is not encrypted — the content is fully readable, so any tool that chooses to ignore the flags can."
      },
      {
        "p": "Compliant readers do honour them, which makes owner passwords useful as a statement of intent and as friction against casual copying. They are not a security control, and describing them to a client as 'the document is protected' overstates the case considerably."
      },
      {
        "h2": "Practical guidance for sending sensitive documents"
      },
      {
        "ol": [
          "**Encrypt with a user password** via [protect](/tools/protect), not an owner password.",
          "**Use a strong passphrase** from a password manager, not a date of birth.",
          "**Send the password separately** — a different channel entirely, not a second email.",
          "**Consider whether encryption is the right tool at all.** If the recipient should not see part of the document, [redact](/tools/pdf-redact) it; encryption protects the whole file from outsiders, not parts of it from the recipient.",
          "**Record what you sent and to whom,** because you will be asked in six months."
        ]
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "The work happens on our servers, so a mobile browser handles this exactly as a desktop does — you are only uploading and downloading."
      },
      {
        "p": "Choosing a strong passphrase is harder on a phone keyboard, which is exactly why people fall back on a date of birth. Use your password manager to generate and store it rather than typing something memorable — the encryption is only as good as the password."
      },
      {
        "p": "**On iPhone,** save the file into Files first if it arrived by email or a messaging app; uploading from an attachment preview fails in some iOS versions. **On Android,** the file is usually already in Downloads and Chrome handles it directly."
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
          },
          {
            "q": "How do I password protect a PDF for free?",
            "a": "[Protect PDF](/tools/protect) applies a user password that genuinely encrypts the file. Free, no signup."
          },
          {
            "q": "How do I password protect a PDF on my phone?",
            "a": "In any mobile browser. Use a password manager to generate the passphrase rather than typing something guessable."
          },
          {
            "q": "Is PDF password protection secure?",
            "a": "A user password uses sound AES encryption. The weak point is almost always the password itself, not the algorithm."
          },
          {
            "q": "How do I stop someone printing or copying my PDF?",
            "a": "That is an owner password, which sets restriction flags. Compliant readers honour them; nothing enforces them. For real protection, encrypt with a user password."
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
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 9,
    "category": "Guides",
    "emoji": "🔗",
    "keywords": [
      "merge pdf problems",
      "combine pdf order",
      "merge pdf page size",
      "pdf merge large file",
      "merge encrypted pdf",
      "merge pdf free online no watermark",
      "combine pdf files on phone",
      "merge pdf without signup",
      "join pdf files free",
      "merge pdf without losing quality",
      "combine multiple pdfs online"
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
        "h2": "Checking the result before you send it"
      },
      {
        "p": "Merging is fast enough that people skip verification, and the failure modes are all silent — nothing errors, you just distribute a document with a problem in it."
      },
      {
        "p": "Four checks, none of which take long:"
      },
      {
        "ol": [
          "**Page count.** Does it equal the sum of the sources? A missing document is easy to miss when the total is 84 pages.",
          "**First and last page of each source.** Confirms nothing was truncated and the boundaries fall where you expect.",
          "**Orientation throughout.** Scroll the whole document at thumbnail zoom — sideways pages jump out immediately at that size and are invisible at 100%.",
          "**Page size consistency.** Also obvious at thumbnail zoom: mixed sizes show as a ragged edge down the page strip."
        ]
      },
      {
        "h2": "Merging scanned and digital documents together"
      },
      {
        "p": "A pack combining born-digital documents with scans creates a file that is half searchable. Search finds a term in the typed sections and silently misses it in the scanned ones, which is worse than a document that is entirely unsearchable — at least then you know to read it."
      },
      {
        "p": "Run [OCR](/tools/ocr) on the scanned components **before** merging, not after. OCR on a merged file works, but processing the whole document re-analyses pages that already had perfectly good text layers, which is slower and occasionally degrades them."
      },
      {
        "h2": "When merging is the wrong answer"
      },
      {
        "p": "Combining everything into one file is not always the favour it appears. Consider keeping documents separate when:"
      },
      {
        "ul": [
          "**The recipient needs only part of it.** Sending a 200-page merged pack when they asked for one certificate makes their job harder, not easier.",
          "**Components have different retention or confidentiality requirements.** Once merged, the whole file inherits the strictest.",
          "**The upload form has separate fields.** Merging then means splitting again.",
          "**Documents will be updated independently.** A merged pack goes stale the moment one component changes, and you have no way to update just that part."
        ]
      },
      {
        "p": "The question to ask is who reads the result and what they do with it. Merge for a reader working through the whole thing in order; keep separate for a reader who needs to locate one item."
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "The processing happens on our servers, so a mobile browser works exactly as a desktop does — you are only uploading and downloading."
      },
      {
        "p": "Selection order is the thing to watch on mobile: phone file pickers often sort by date modified rather than by name, so the order you get may not be the order you expect. Check the result and fix it with [Organize PDF](/tools/organize) rather than redoing the merge."
      },
      {
        "p": "**On iPhone,** save the file into Files first if it arrived by email or a messaging app. Uploading directly from an attachment preview fails in some iOS versions. **On Android,** files are usually already in Downloads and Chrome handles it directly."
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
          },
          {
            "q": "How do I merge PDFs for free without a watermark?",
            "a": "[Merge PDF](/tools/merge) combines up to 20 files with no signup and no watermark added."
          },
          {
            "q": "How do I combine PDFs on my phone?",
            "a": "Use [Merge PDF](/tools/merge) in a mobile browser. Watch the selection order — phone pickers often sort by date rather than name."
          },
          {
            "q": "Does merging PDFs reduce quality?",
            "a": "No. Pages are copied intact, not re-rendered. Only compression affects quality."
          },
          {
            "q": "How many PDFs can I merge at once?",
            "a": "Up to 20 here. For more, merge in batches and then merge the results together."
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
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 9,
    "category": "Guides",
    "emoji": "🪓",
    "keywords": [
      "split pdf",
      "how to split pdf pages",
      "extract vs split pdf",
      "separate pdf pages",
      "divide pdf file",
      "split pdf free online",
      "split pdf without adobe",
      "divide pdf into pages free",
      "split pdf on mobile",
      "separate pdf pages no watermark",
      "split large pdf online free"
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
        "h2": "Working out the page numbers you actually need"
      },
      {
        "p": "Getting the range wrong is the commonest failure, and it is almost always the same cause: the number printed on the page is not the page's position in the file."
      },
      {
        "p": "A typical report has a cover, an inside title page, a contents page and sometimes a blank leaf before the body starts. Printed page 1 is therefore file page 5. Extract pages 12–18 by their printed numbers and you get pages 8–14 of the actual content."
      },
      {
        "p": "The reliable method: open the document, navigate to the first page you want, and read the number your reader shows in its page counter — not the ink on the page. Do the same for the last. Those two numbers are what the tool needs."
      },
      {
        "h2": "When the ranges are not contiguous"
      },
      {
        "p": "Pulling scattered pages — say the summary on page 3, the table on 47, and the conclusion on 88 — is a single extraction, not three. [Extract pages](/tools/extract-pages) accepts multiple ranges and assembles them into one document in the order given, which means you can also reorder as you extract by listing them out of sequence."
      },
      {
        "p": "If you genuinely need them as separate files, extract each range separately rather than [splitting](/tools/split) the whole document and discarding 197 files."
      },
      {
        "h2": "What happens to bookmarks and links"
      },
      {
        "p": "Structural elements behave differently from page content and it is worth knowing which survive:"
      },
      {
        "ul": [
          "**Internal links within the extracted range** keep working — both endpoints came along.",
          "**Internal links pointing outside the range** break. A cross-reference to page 140 has nowhere to resolve to once page 140 is gone.",
          "**External hyperlinks** are unaffected; they point at URLs, not pages.",
          "**Bookmarks** referencing removed pages are typically dropped. Bookmarks to retained pages usually survive but may lose their hierarchy.",
          "**Form fields** are preserved on the pages that carry them, but any calculation referencing a field on a removed page will fail silently."
        ]
      },
      {
        "p": "For a document with heavy internal cross-referencing — a technical manual, a legal bundle — extraction produces a file with dead links. That is usually acceptable for reading, and not acceptable for distribution. If it matters, note in a covering message that the extract is a subset."
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "The processing happens on our servers, so a mobile browser works exactly as a desktop does — you are only uploading and downloading."
      },
      {
        "p": "The awkward part on mobile is reading page numbers. Most phone PDF readers hide the page counter until you tap the screen — tap once to reveal it, and use that number rather than anything printed on the page."
      },
      {
        "p": "**On iPhone,** save the file into Files first if it arrived by email or a messaging app. Uploading directly from an attachment preview fails in some iOS versions. **On Android,** files are usually already in Downloads and Chrome handles it directly."
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
          },
          {
            "q": "How do I split a PDF for free?",
            "a": "[Split PDF](/tools/split) produces every page as a separate file. If you want a section rather than every page, [Extract pages](/tools/extract-pages) is what you want."
          },
          {
            "q": "How do I split a PDF on my phone?",
            "a": "Both tools work in a mobile browser. Read the page numbers from your reader's page counter first."
          },
          {
            "q": "How do I split a PDF without Adobe?",
            "a": "No software is needed — splitting is a commodity operation that runs entirely in the browser-to-server flow, free and without signup."
          },
          {
            "q": "Does splitting a PDF lose quality?",
            "a": "No. Pages are copied byte for byte into the new files."
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
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 9,
    "category": "Guides",
    "emoji": "📝",
    "keywords": [
      "word to pdf",
      "convert docx to pdf",
      "export vs print to pdf",
      "word pdf hyperlinks",
      "doc to pdf free",
      "word to pdf converter free",
      "convert docx to pdf online free",
      "word to pdf no watermark",
      "doc to pdf on phone",
      "convert word to pdf without software",
      "word to pdf keep hyperlinks"
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
        "h2": "Checking your export settings once"
      },
      {
        "p": "Export options are usually buried and worth finding once, because the defaults vary by version and by machine — which is why the same document exported by two people produces different files."
      },
      {
        "p": "The settings that matter:"
      },
      {
        "ul": [
          "**Font embedding.** Look for an option to embed fonts, and if there is a choice, embed *all* rather than only characters in use — the latter causes problems if anyone edits later.",
          "**Document structure tags.** Sometimes called 'document structure tags for accessibility'. Preserves headings so screen readers can navigate. Enable it.",
          "**Bookmarks from headings.** Generates a navigable outline from your heading styles. Free, and useful in anything long.",
          "**Hyperlinks.** Usually on by default in export and always lost in print-to-PDF.",
          "**Comments and markup.** Check whether these are included. Usually you do not want them."
        ]
      },
      {
        "h2": "Things that look different after conversion"
      },
      {
        "p": "Some differences are expected rather than faults, and knowing which saves investigating them."
      },
      {
        "ul": [
          "**Line breaks shifting slightly.** Word lays out for the screen and the PDF writer for a fixed page; hyphenation and justification can differ marginally.",
          "**Text boxes moving.** Floating objects with loose anchoring are the least predictable element in any Word document.",
          "**Table borders thickening.** Hairline borders round up to the nearest renderable width.",
          "**Colours shifting slightly** if the document uses a colour profile the exporter converts.",
          "**Fields showing their last calculated value.** Page counts, dates and cross-references freeze at export."
        ]
      },
      {
        "p": "That last one catches people out: a document with an automatic date field shows the export date forever, not the current date."
      },
      {
        "h2": "When you do not have Word at all"
      },
      {
        "p": "[Word to PDF](/tools/word-to-pdf) renders server-side using LibreOffice, which reads .doc and .docx faithfully for ordinary documents."
      },
      {
        "p": "Where to expect divergence: heavily designed documents using Word-specific features — SmartArt, complex text-box layouts, some chart types — may render differently, because these are Microsoft features LibreOffice approximates rather than reproduces. For a report, a letter or a CV, the output is indistinguishable."
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "The work happens on our servers, so a mobile browser handles this exactly as a desktop does — you are only uploading and downloading."
      },
      {
        "p": "Mobile Word and Google Docs both export to PDF directly, and both do it properly — they export rather than print, so links and structure survive. Use the app's own share-as-PDF where you have it; use [Word to PDF](/tools/word-to-pdf) when you have received a .docx you cannot open."
      },
      {
        "p": "**On iPhone,** save the file into Files first if it arrived by email or a messaging app; uploading from an attachment preview fails in some iOS versions. **On Android,** the file is usually already in Downloads and Chrome handles it directly."
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
          },
          {
            "q": "How do I convert Word to PDF for free?",
            "a": "[Word to PDF](/tools/word-to-pdf) converts .doc and .docx server-side. Free, no signup, no watermark."
          },
          {
            "q": "How do I convert Word to PDF on my phone?",
            "a": "Mobile Word and Google Docs both export to PDF directly. For a file you cannot open, use the browser tool."
          },
          {
            "q": "Why did my hyperlinks stop working in the PDF?",
            "a": "You printed to PDF instead of exporting. Print drivers do not preserve link annotations — always export."
          },
          {
            "q": "Does converting Word to PDF reduce quality?",
            "a": "No. Text stays vector text. Only print-to-PDF risks rasterising the page."
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
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 9,
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
        "h2": "Animation builds and duplicate slides"
      },
      {
        "p": "The commonest surprise in a converted deck is finding fourteen near-identical pages where there was one slide."
      },
      {
        "p": "This happens when a slide reveals content progressively — bullets appearing one at a time — and the export setting captures each build stage as its own page. Useful if you want a printed record of the sequence; unhelpful if you wanted one slide."
      },
      {
        "p": "Two fixes. Change the export option so animations are not expanded, which most tools offer. Or remove the animations from a copy of the deck before exporting, which also produces a cleaner handout since builds rarely make sense on paper anyway."
      },
      {
        "h2": "What speaker notes reveal"
      },
      {
        "p": "Worth a specific warning. 'Notes pages' export includes everything in the notes pane, and notes are written for yourself — timings, reminders, occasionally frank observations about the audience or the material."
      },
      {
        "p": "Before exporting notes pages, read them. Before sending a deck at all, check whether your export included them, because some tools do so by default and the notes are not visible in normal viewing."
      },
      {
        "p": "If you want to share notes deliberately, that is a good reason to use notes pages. Sending them unintentionally is a different matter entirely."
      },
      {
        "h2": "Building a handout when your tool will not"
      },
      {
        "p": "If your software only exports full-page slides, you can produce handouts afterwards:"
      },
      {
        "ol": [
          "Export the deck as full-page slides to PDF.",
          "[Crop](/tools/crop) if the slides have wide unused borders — many templates do.",
          "[N-up](/tools/n-up-pdf) at four per sheet in landscape, the standard handout layout.",
          "[Compress](/tools/compress) if it is going out by email.",
          "Print one test sheet to confirm the text is readable at that size."
        ]
      },
      {
        "p": "Slide text is usually 20pt or larger, so four-up prints at around 10pt — comfortably readable, which is why this layout became conventional."
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
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 8,
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
        "h2": "Why 300 DPI and not more"
      },
      {
        "p": "Resolution is the setting people most often get wrong in both directions, and the reasoning is worth understanding because it explains the others."
      },
      {
        "p": "Data volume scales with the *square* of resolution. Doubling from 300 to 600 DPI quadruples the file size. What you get for that is detail finer than printed text contains — ordinary body type is fully resolved at 300, so the extra pixels are recording paper fibre and scanner noise rather than information."
      },
      {
        "p": "Below 200 DPI the opposite problem appears: individual characters no longer have enough pixels to be distinguished reliably, and [OCR](/tools/ocr) accuracy falls off a cliff. Between those bounds, 300 is the standard because it is where detail stops improving and size starts hurting."
      },
      {
        "p": "The exception is small print — footnotes, dense tables, degraded originals — where 400 or 600 genuinely helps recognition. Scan those higher, OCR, then compress down. You get the accuracy without carrying the file size."
      },
      {
        "h2": "Greyscale versus bitonal"
      },
      {
        "p": "Scanner drivers often offer 'black and white' as well as greyscale, and they are not the same thing. **Bitonal** stores one bit per pixel — pure black or pure white, nothing between. It produces the smallest possible files and it destroys anything that is not already high contrast: photographs become unrecognisable, grey stamps vanish, and faded text can disappear entirely."
      },
      {
        "p": "**Greyscale** keeps 256 levels. It is several times larger than bitonal and dramatically smaller than colour, and it preserves shading, seals and faint marks. For document scanning it is almost always the right middle ground."
      },
      {
        "p": "Use bitonal only for clean, high-contrast typed text where file size is the binding constraint and you have checked the output. Use [greyscale](/tools/grayscale-pdf) for everything else that is ink on paper."
      },
      {
        "h2": "Feeder or flatbed"
      },
      {
        "p": "An automatic document feeder is faster and introduces two failure modes worth watching for: **skew**, because pages are pulled rather than placed, and **double-feeds**, where two sheets go through together and a page is silently missing from your scan."
      },
      {
        "p": "Always check the page count of a fed scan against the original stack. A missing page discovered at submission is expensive; discovered immediately it costs thirty seconds. For anything under about ten pages, or anything irreplaceable, the flatbed is worth the extra minutes."
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
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 10,
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
        "h2": "Three sequences worth memorising"
      },
      {
        "p": "Most work falls into one of a few shapes, and knowing the sequence for each removes the need to reason it out each time."
      },
      {
        "p": "**Assembling a submission pack:** convert everything to PDF → [merge](/tools/merge) → [reorder](/tools/organize) → [rotate](/tools/rotate) → [delete blanks](/tools/delete-pages) → [add page numbers](/tools/page-numbers) → [compress to size](/tools/compress-to-size)."
      },
      {
        "p": "**Processing a scan:** [delete blanks](/tools/delete-pages) → [rotate](/tools/rotate) → [crop](/tools/crop) → [greyscale](/tools/grayscale-pdf) → [OCR](/tools/ocr) → [compress](/tools/compress)."
      },
      {
        "p": "**Preparing something for distribution:** [redact](/tools/pdf-redact) → verify the redaction → [flatten](/tools/flatten-pdf) → [remove metadata](/tools/remove-metadata) → [compress](/tools/compress) → [linearise](/tools/linearize-pdf) if publishing online."
      },
      {
        "h2": "The four rules the sequences encode"
      },
      {
        "ol": [
          "**OCR before compression.** Compression removes the fine detail recognition depends on, and no amount of processing afterwards recovers it. This is the rule that costs most to break.",
          "**Page numbers after all page operations.** Numbers are stamped ink, not live fields. Reorder after numbering and the numbers are simply wrong.",
          "**Redact before flatten.** Flattening merges appearance into the page; it does not remove content underneath. Redacting after flattening may leave you redacting a picture of the text rather than the text.",
          "**Compress last.** Every earlier step that removes data — cropping, greyscaling, deleting pages — means the compressor has less to destroy, so the same target size looks better."
        ]
      },
      {
        "h2": "Recovering when you get it wrong"
      },
      {
        "p": "Some mistakes are cheap to undo and some are not."
      },
      {
        "ul": [
          "**Numbered before reordering?** Renumber. The old numbers are drawn into the page and will not update, so you may need to start from the unnumbered original.",
          "**Compressed before OCR?** Start again from the original. There is no recovery.",
          "**Flattened too early?** Start from the unflattened copy. There is no unflatten.",
          "**Cropped too aggressively?** Usually recoverable if the tool preserved the media box.",
          "**The general answer:** keep the original at every destructive step. It is the only thing that makes any of these cheap."
        ]
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
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 9,
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
        "h2": "Preparing a PDF so its tables extract better"
      },
      {
        "p": "Extraction quality is largely determined before you run the tool, and a few preparatory steps materially improve results."
      },
      {
        "ol": [
          "**Confirm there is a text layer.** Ctrl+F for a value from the table. Nothing found means a scan — [OCR](/tools/ocr) first, and expect lower accuracy.",
          "**[Extract just the pages with tables](/tools/extract-pages).** Fewer pages means the tool is not trying to interpret prose as tabular data.",
          "**[Rotate](/tools/rotate) landscape tables upright.** Sideways tables confuse column detection.",
          "**[Crop](/tools/crop) headers and footers** if they repeat mid-table, since they otherwise insert junk rows.",
          "**Check for merged cells** and note where they are, so you can verify those rows afterwards."
        ]
      },
      {
        "h2": "Fixing the output rather than the extraction"
      },
      {
        "p": "Some problems are easier to correct in the spreadsheet than to prevent."
      },
      {
        "ul": [
          "**Numbers stored as text** — usually from currency symbols or thousands separators. Find and replace the symbol, then convert the column to numeric.",
          "**Parenthesised negatives** — `(1,234)` meaning −1234. A find-and-replace with a formula handles a whole column at once.",
          "**Wrapped cells split across rows** — sort by a column that should never be blank, and the fragments group together for merging.",
          "**Repeated header rows** — filter for the header text and delete the matches.",
          "**Trailing spaces** from column padding, which break lookups. TRIM applied to the whole sheet."
        ]
      },
      {
        "h2": "Reconciling before you rely on it"
      },
      {
        "p": "This is the step that separates usable extracted data from a quiet disaster, and it takes a minute."
      },
      {
        "p": "Sum the columns that have printed totals in the source and compare. If a total matches, the column extracted cleanly. If it does not, something is wrong — a missing row, a misparsed value, a duplicated line — and you now know to look rather than discovering it in a report three weeks later."
      },
      {
        "p": "Where the source has no totals, check the row count against the original and spot-check the first, last and a few middle values. Errors cluster at boundaries, so those are the highest-yield checks."
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
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 9,
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
        "h2": "What an audit trail actually records"
      },
      {
        "p": "The distinction between an image of a signature and a proper e-signature is not the picture — both produce a visual mark. It is what is recorded alongside it."
      },
      {
        "ul": [
          "**Who signed**, verified to some standard: an email address confirmed by a link, or stronger identity checking.",
          "**When**, from a trusted timestamp rather than the signer's own clock.",
          "**From where** — IP address, and sometimes device details.",
          "**What was signed** — a hash of the exact document, so a later alteration is detectable.",
          "**The sequence of events** — when it was sent, viewed, and signed."
        ]
      },
      {
        "p": "That record is the product. In a dispute, 'here is a picture of their signature' is weak; 'here is a record showing this document, unchanged, was opened from this address and signed at this time by someone who confirmed control of this email account' is considerably stronger."
      },
      {
        "h2": "Digital signatures and why they detect tampering"
      },
      {
        "p": "A cryptographic digital signature computes a hash of the document and encrypts it with a private key tied to a certificate. Any reader can verify it with the corresponding public key."
      },
      {
        "p": "The consequence is that changing a single character invalidates the signature, because the hash no longer matches. This is genuinely different from the other two: it does not merely record that someone signed, it proves the document has not changed since."
      },
      {
        "p": "It is also why [flattening](/tools/flatten-pdf) or [compressing](/tools/compress) a signed document breaks the signature. Both rewrite the file, and the hash was computed over the original bytes."
      },
      {
        "h2": "Practical guidance"
      },
      {
        "table": {
          "headers": [
            "Document",
            "Reasonable approach"
          ],
          "rows": [
            [
              "Internal approval",
              "Image, [flattened](/tools/flatten-pdf) into the file"
            ],
            [
              "Supplier agreement",
              "E-signature service with audit trail"
            ],
            [
              "Employment contract",
              "E-signature service"
            ],
            [
              "Property transaction",
              "As the jurisdiction requires — often witnessed"
            ],
            [
              "Regulatory filing",
              "Whatever the regulator specifies, usually digital"
            ],
            [
              "Delivery receipt",
              "Image is fine"
            ]
          ]
        }
      },
      {
        "note": "Whatever you use, keep your signature image file private. It is functionally a key: anyone with the file can apply it to any document. Flatten it into the specific document you are signing and never send the bare image."
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
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 9,
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
        "h2": "What statement passwords usually are"
      },
      {
        "p": "Banks rarely tell you the format clearly, and it is almost always a predictable combination of details they already hold. Common patterns include date of birth in a specific format, the customer or account number, the first letters of your name combined with a birth year, or a PAN or equivalent identifier."
      },
      {
        "p": "The format is normally stated in the covering email, often in small print below the attachment. Where it is not, the bank's website has it under statement help. Guessing wastes time; some systems lock after repeated failures."
      },
      {
        "h2": "Why decrypting an archive is defensible"
      },
      {
        "p": "The encryption exists to protect the statement in transit — in an email inbox, in transfer. Once the file is in storage you control, that threat has been addressed by whatever protects the storage."
      },
      {
        "p": "Keeping it encrypted costs you real capability: desktop search cannot index it, so you can never find a transaction; bulk processing requires unlocking each file anyway; and long-term access depends on remembering a password for a document you may need in a decade."
      },
      {
        "p": "[Unlock](/tools/unlock) the archive copy if your storage is genuinely secure — full-disk encryption, a locked account, a properly protected cloud service. Keep the encrypted original if it is not."
      },
      {
        "h2": "Before sending a statement as proof"
      },
      {
        "p": "Statements are routinely requested as proof of address or income, and they contain considerably more than the requester needs."
      },
      {
        "ol": [
          "Identify what is actually required — usually name, address, and either a balance or a set of income credits.",
          "[Extract](/tools/extract-pages) only the relevant pages.",
          "[Redact](/tools/pdf-redact) the account number, sort code, and transactions that are none of the recipient's business.",
          "**Verify the redaction** by copying all the text out and searching it.",
          "[Remove metadata](/tools/remove-metadata) before sending."
        ]
      },
      {
        "p": "A black box drawn over an account number leaves the number in the file, retrievable by anyone who selects and copies the page. This is the single most common way financial details leak from documents shared in good faith."
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
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 8,
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
        "h2": "Header or watermark?"
      },
      {
        "p": "These get conflated and serve different purposes, which affects both placement and opacity."
      },
      {
        "table": {
          "headers": [
            "",
            "Header/footer",
            "Watermark"
          ],
          "rows": [
            [
              "Position",
              "Margin",
              "Across the page"
            ],
            [
              "Opacity",
              "Full",
              "Partial"
            ],
            [
              "Purpose",
              "Identification, reference",
              "Status, deterrence"
            ],
            [
              "Typical content",
              "Title, reference number, date",
              "DRAFT, CONFIDENTIAL, a name"
            ],
            [
              "Interferes with reading",
              "No",
              "Deliberately, a little"
            ]
          ]
        }
      },
      {
        "p": "If the text is for finding and citing the document, it belongs in the margin. If it is for making sure nobody mistakes its status, it belongs across the page where it cannot be ignored or cropped away."
      },
      {
        "h2": "Content worth including"
      },
      {
        "ul": [
          "**A document title or reference,** so a stray printed page is traceable to its source.",
          "**A version or date,** so an old printout is recognisable as old. This is the one people most regret omitting.",
          "**A confidentiality marking,** where policy requires it on every page.",
          "**A matter or case number** for filing systems that index by it.",
          "**Nothing else.** A cluttered margin is ignored, which defeats the purpose."
        ]
      },
      {
        "h2": "Checking before you apply it to 300 pages"
      },
      {
        "ol": [
          "Apply to a copy first, or to an extracted sample of a few representative pages.",
          "Check a text-dense page for overlap with body content.",
          "Check a page with a table or figure that may extend into the margin.",
          "Check any landscape page — the header may land somewhere unexpected.",
          "Confirm it sits inside the printable area, at least 5mm from the paper edge.",
          "Only then apply to the whole document, and keep the unmarked original."
        ]
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
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 8,
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
        "h2": "Standard page sizes worth knowing"
      },
      {
        "table": {
          "headers": [
            "Name",
            "Millimetres",
            "Points",
            "Used in"
          ],
          "rows": [
            [
              "A4",
              "210 × 297",
              "595 × 842",
              "Most of the world"
            ],
            [
              "US Letter",
              "216 × 279",
              "612 × 792",
              "North America"
            ],
            [
              "A3",
              "297 × 420",
              "842 × 1191",
              "Plans, posters"
            ],
            [
              "A5",
              "148 × 210",
              "420 × 595",
              "Booklets, paperbacks"
            ],
            [
              "Legal",
              "216 × 356",
              "612 × 1008",
              "US legal documents"
            ]
          ]
        }
      },
      {
        "p": "A4 and Letter are the pair that causes trouble: Letter is 6mm wider and 18mm shorter, which is close enough that nobody notices until content is clipped from the bottom of an A4 document printed on Letter."
      },
      {
        "h2": "Scaling or repositioning"
      },
      {
        "p": "Resizing offers two behaviours and the distinction matters."
      },
      {
        "p": "**Scale to fit** resizes the content proportionally into the new dimensions. Nothing is lost; text becomes marginally smaller or larger. For A4-to-Letter the change is about 6% and imperceptible."
      },
      {
        "p": "**Reposition** keeps content at its original size and places it on a differently sized page. Enlarging is safe — you get more margin. Shrinking clips whatever falls outside, and the clipping may only affect some pages, which is easy to miss."
      },
      {
        "p": "Unless you have a specific reason, scale. It is predictable and cannot lose content."
      },
      {
        "h2": "Checking the result"
      },
      {
        "ol": [
          "Open the resized document and check the first page, the last page, and any page with a table or figure.",
          "Look specifically at the bottom margin, where clipping shows first.",
          "Check any page numbers or footers are still inside the printable area.",
          "If the document mixes portrait and landscape, check one of each.",
          "Print one page before committing a long job."
        ]
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
