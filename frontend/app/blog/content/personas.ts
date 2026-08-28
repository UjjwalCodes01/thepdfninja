import type { BlogArticle } from './types';

// Use-case guides written for a specific job, not a specific tool.

export const personasArticles: BlogArticle[] = [
  {
    "slug": "pdf-tools-for-students",
    "title": "PDF Tools Every Student Actually Needs",
    "metaTitle": "Free PDF Tools for Students — Assignments & Notes | ThePDFNinja",
    "metaDescription": "Merging readings, compressing submissions, extracting chapters and making scanned notes searchable — the handful of operations that cover student work.",
    "excerpt": "Submission portals, lecture scans and reading packs. Five operations cover almost everything you will need across a degree.",
    "date": "2026-09-07",
    "dateLabel": "September 7, 2026",
    "readMinutes": 6,
    "category": "Use Cases",
    "emoji": "🎓",
    "keywords": [
      "pdf tools for students",
      "student pdf editor free",
      "compress assignment pdf",
      "merge lecture notes",
      "free pdf tools college"
    ],
    "blocks": [
      {
        "p": "Student document work is repetitive and narrow. Once you know the five operations that cover it, the rest of a degree stops involving fights with file formats."
      },
      {
        "h2": "1. Submitting one file when you have several"
      },
      {
        "p": "Portals almost always accept a single document. Your essay is in Word, your charts came from a spreadsheet, your references are a scan. Export each to PDF, then [merge](/tools/merge) them in order. If the sequence comes out wrong, [reorder](/tools/organize) rather than starting again."
      },
      {
        "h2": "2. Getting under the upload limit"
      },
      {
        "p": "Submission systems commonly cap at 10 or 20MB, and a dissertation with figures exceeds that easily. [Compress](/tools/compress) at ebook quality first. If a hard ceiling is specified, [compress to size](/tools/compress-to-size) hits it exactly instead of leaving you guessing."
      },
      {
        "h2": "3. Making scanned notes and readings searchable"
      },
      {
        "p": "A photographed textbook chapter is an image — Ctrl+F finds nothing, which makes revision far slower than it should be. Run it through [OCR](/tools/ocr) and the text becomes searchable while the page still looks the same. For a term's worth of readings this is transformative."
      },
      {
        "h2": "4. Taking just the chapter you need"
      },
      {
        "p": "A 400-page book scan where you need pages 88–112: [extract those pages](/tools/extract-pages). Smaller file, faster to open, and you are not carrying a library around to read one chapter."
      },
      {
        "h2": "5. Quoting from a PDF without retyping"
      },
      {
        "p": "If the PDF is born-digital, select and copy directly. If it is scanned, OCR first. For heavier work — reformatting a source into your own document — [convert to Word](/tools/pdf-to-word)."
      },
      {
        "note": "Check your institution's rules on file naming and format before submitting. A correctly sized PDF with the wrong filename convention still gets bounced by some systems."
      },
      {
        "h2": "A workflow for group submissions"
      },
      {
        "ol": [
          "Everyone exports their section to PDF.",
          "[Merge](/tools/merge) into one document.",
          "[Reorder](/tools/organize) into the agreed sequence.",
          "[Add page numbers](/tools/page-numbers) so feedback can reference pages.",
          "[Compress](/tools/compress) to clear the limit.",
          "Open it once, end to end, before submitting."
        ]
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Will compressing make my figures unreadable?",
            "a": "At ebook quality, no. Check any dense charts at 100% zoom before submitting."
          },
          {
            "q": "Can I edit a PDF my lecturer sent?",
            "a": "For annotation, most readers suffice. For real editing, convert to Word — but check whether editing is permitted."
          },
          {
            "q": "Why can't I search my scanned notes?",
            "a": "They are images of text. OCR adds the searchable layer."
          },
          {
            "q": "Is it safe to upload coursework to an online tool?",
            "a": "For ordinary coursework, yes. For anything under embargo or containing personal data, use offline software."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-tools-for-job-seekers",
    "title": "Getting Your CV and Applications Through the System",
    "metaTitle": "PDF Tools for Job Applications — CV Formatting | ThePDFNinja",
    "metaDescription": "Why your CV formatting breaks, how applicant tracking systems read your file, and the document prep that keeps you in the pile.",
    "excerpt": "Your CV looked perfect and arrived scrambled. Here is what happened, and how to submit documents that survive the journey.",
    "date": "2026-09-15",
    "dateLabel": "September 15, 2026",
    "readMinutes": 6,
    "category": "Use Cases",
    "emoji": "💼",
    "keywords": [
      "cv pdf format",
      "resume pdf tips",
      "job application documents",
      "ats resume format",
      "convert cv to pdf"
    ],
    "blocks": [
      {
        "p": "You spent hours on layout, sent it, and the recruiter saw something else entirely. Two things cause almost all of this: sending an editable format, and sending something a machine cannot read."
      },
      {
        "h2": "Always send PDF, never Word"
      },
      {
        "p": "A .docx reflows according to the recipient's fonts, page size and Word version. Your careful two-column layout becomes three pages of chaos on their machine. PDF fixes appearance exactly — that is what it was invented for."
      },
      {
        "p": "Export directly from your editor rather than printing to PDF where you can; direct export preserves the text layer, and the text layer is what the next section depends on."
      },
      {
        "h2": "How applicant tracking systems read you"
      },
      {
        "p": "Many applications are parsed by software before a human sees them. That parser reads the **text layer**. Consequences worth knowing:"
      },
      {
        "ul": [
          "**Never send a scanned or photographed CV.** It has no text layer. To a parser it is a blank page.",
          "**Avoid putting critical information only in images** — a graphic skills chart may be invisible to the parser.",
          "**Keep the layout reasonably linear.** Heavy multi-column designs can be read out of order.",
          "**Use standard section headings.** 'Work Experience' parses reliably; 'My Journey So Far' may not."
        ]
      },
      {
        "p": "Test it yourself: open your PDF, select all, copy, paste into a plain text editor. What you see is roughly what the parser sees. If it is empty or scrambled, fix it before applying."
      },
      {
        "h2": "Meeting upload requirements"
      },
      {
        "ul": [
          "**Size limits** are common — often 2MB or 5MB. [Compress](/tools/compress) if needed, or [compress to size](/tools/compress-to-size) for an exact ceiling.",
          "**One file only.** [Merge](/tools/merge) CV, cover letter and certificates into one document, in that order.",
          "**Certificates as scans?** Run [OCR](/tools/ocr) so they are searchable, and keep them after the CV, not before.",
          "**Photo required?** Some markets expect one. [Resize to passport proportions](/tools/resize-to-passport) and keep it modest in size."
        ]
      },
      {
        "note": "Name the file properly. `Firstname_Lastname_CV.pdf` is findable in a recruiter's downloads folder six weeks later. `Document(3).pdf` is not."
      },
      {
        "h2": "Before you send"
      },
      {
        "ol": [
          "Open the final PDF and read it end to end.",
          "Copy-paste test the text layer.",
          "Check the file size against the stated limit.",
          "Confirm the filename.",
          "[Remove metadata](/tools/remove-metadata) if your document properties carry an old employer's name or an unhelpful author field."
        ]
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Should I send Word or PDF?",
            "a": "PDF, unless the employer explicitly asks for Word — some agencies do so they can rebrand it."
          },
          {
            "q": "Will a scanned CV be rejected?",
            "a": "Frequently, and silently. Parsers cannot read images. Always send a text-layer PDF."
          },
          {
            "q": "Does file size matter?",
            "a": "Beyond the stated limit, yes. A 15MB CV also suggests you did not check."
          },
          {
            "q": "Should I merge certificates into my CV?",
            "a": "If the form allows one upload, yes — CV first, then cover letter, then certificates."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-tools-for-legal-work",
    "title": "PDF Work for Legal Professionals: Bundles, Redaction and Metadata",
    "metaTitle": "PDF Tools for Lawyers — Bundles & Redaction | ThePDFNinja",
    "metaDescription": "Redaction that actually redacts, bundle pagination that survives scrutiny, and the metadata that leaves your firm without you noticing.",
    "excerpt": "One mistake in this area has caused genuine published breaches. Here is how to avoid it.",
    "date": "2026-09-23",
    "dateLabel": "September 23, 2026",
    "readMinutes": 7,
    "category": "Use Cases",
    "emoji": "⚖️",
    "keywords": [
      "pdf tools for lawyers",
      "redact pdf properly",
      "court bundle pdf",
      "legal document pdf",
      "pdf metadata removal"
    ],
    "blocks": [
      {
        "p": "Legal document work has one characteristic that changes everything: mistakes are expensive and sometimes irreversible. A redaction that does not redact, a bundle paginated wrongly, a signature page missing — these are not inconveniences."
      },
      {
        "h2": "Redaction, done properly"
      },
      {
        "p": "This is the one to get right. **Drawing a black rectangle over text does not remove it.** The text remains in the file and can be recovered by copying, by text extraction, or by opening the file in a different reader. This has produced genuine, published breaches in court filings and government disclosures."
      },
      {
        "p": "Use [redact](/tools/pdf-redact), which removes the underlying content rather than covering it. Then verify: open the result, select all, copy, paste into a text editor. If redacted text appears, it was not redacted."
      },
      {
        "h2": "Building a bundle"
      },
      {
        "ol": [
          "Convert every exhibit to PDF. Scans go through [OCR](/tools/ocr) so the bundle is searchable.",
          "[Merge](/tools/merge) in the agreed index order.",
          "[Rotate](/tools/rotate) anything sideways — extremely common with scanned exhibits.",
          "[Add page numbers](/tools/page-numbers) continuously across the whole bundle. Courts reference bundle pages, not document pages.",
          "[Compress](/tools/compress) only if a filing limit demands it, and check legibility afterwards."
        ]
      },
      {
        "note": "Add page numbers **last**. If you renumber and then insert a document, every reference in your index is wrong."
      },
      {
        "h2": "Metadata is disclosure"
      },
      {
        "p": "PDF properties carry author names, the software used, creation and modification dates, and sometimes the file path — which can reveal a client name or matter number. Before anything leaves the firm, [remove metadata](/tools/remove-metadata)."
      },
      {
        "p": "[Flattening](/tools/flatten-pdf) is also worth doing: it merges annotations and form data into the page, so internal comments cannot be extracted by a recipient."
      },
      {
        "h2": "On confidentiality"
      },
      {
        "p": "We delete uploads within an hour and do not inspect contents. That is still a transfer to a third party. For privileged material, your professional obligations may well require offline tools — that is a judgement for you and your firm, not a technical question."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Is a black box over text safe?",
            "a": "No. The text remains in the file. This is the most consequential PDF mistake in legal practice."
          },
          {
            "q": "How do I verify a redaction?",
            "a": "Open the result, select all, copy, paste into a plain text editor. Redacted content must not appear."
          },
          {
            "q": "Should exhibits be OCRed?",
            "a": "Yes where permitted. A searchable bundle is dramatically faster to work with."
          },
          {
            "q": "Does flattening remove annotations?",
            "a": "It merges their appearance into the page and discards the interactive data, so comments cannot be read as comments."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-tools-for-accountants",
    "title": "PDF Work for Accountants and Bookkeepers",
    "metaTitle": "PDF Tools for Accountants — Statements & Receipts | ThePDFNinja",
    "metaDescription": "Unlocking bank statements, extracting tables to Excel, and assembling receipts into something a reviewer can follow.",
    "excerpt": "Encrypted statements, tables that need to be spreadsheets, and a shoebox of receipts. A workflow for each.",
    "date": "2026-10-01",
    "dateLabel": "October 1, 2026",
    "readMinutes": 6,
    "category": "Use Cases",
    "emoji": "🧾",
    "keywords": [
      "pdf tools for accountants",
      "bank statement pdf to excel",
      "unlock bank statement",
      "receipt scanning pdf",
      "bookkeeping pdf tools"
    ],
    "blocks": [
      {
        "p": "Accounting and bookkeeping generate a specific kind of PDF pain: statements that arrive encrypted, tables that need to become spreadsheets, and hundreds of receipts that must be assembled into something a reviewer can follow."
      },
      {
        "h2": "Bank statements arrive locked"
      },
      {
        "p": "Banks encrypt statements with a date of birth, account number or customer ID. That is sensible in transit and a nuisance when you are reconciling twelve months of them. [Unlock](/tools/unlock) removes the encryption where you have the password, so the files become searchable and can be processed in bulk."
      },
      {
        "h2": "Getting tables out"
      },
      {
        "p": "[PDF to Excel](/tools/pdf-to-excel) works well when a table has visible borders, which most statements and invoices do. It works poorly on free-form layouts where alignment is the only structural cue."
      },
      {
        "p": "Two things improve results substantially: convert the whole document rather than a page at a time, and check totals against the source. Extraction errors cluster in numbers with unusual formatting — negative values in parentheses, currency symbols mid-column, thousands separators."
      },
      {
        "note": "Always reconcile an extracted total against the PDF before working from it. Table extraction is good, not infallible, and a transposed figure propagates silently."
      },
      {
        "h2": "Receipt handling"
      },
      {
        "ol": [
          "Photograph receipts flat, in even light. [Crop](/tools/image-crop) the background.",
          "[Convert to greyscale](/tools/image-to-grayscale) — thermal receipts contain no useful colour.",
          "[Combine into one PDF](/tools/jpg-to-pdf) per period or per claim.",
          "[OCR](/tools/ocr) so amounts and vendors are searchable.",
          "[Add page numbers](/tools/page-numbers) so a reviewer can reference a specific receipt."
        ]
      },
      {
        "h2": "Year-end assembly"
      },
      {
        "p": "[Merge](/tools/merge) statements, invoices and supporting documents in a logical order, [add page numbers](/tools/page-numbers), and [compress](/tools/compress) if you are emailing the result. Keep the uncompressed original — the compressed copy is for distribution, not for your records."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why does my statement ask for a password?",
            "a": "Banks encrypt them for delivery. Unlock it once and archive the decrypted copy somewhere already secure."
          },
          {
            "q": "How accurate is PDF to Excel?",
            "a": "Good on bordered tables, weaker on free-form layouts. Always reconcile totals."
          },
          {
            "q": "Should I OCR receipts?",
            "a": "Yes if you will need to search them. Thermal receipt print is hard for OCR, so verify key figures."
          },
          {
            "q": "Is it safe to upload financial statements?",
            "a": "For ordinary reconciliation, judge it as you would any cloud service. For client data under professional obligation, consider offline tools."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-tools-for-teachers",
    "title": "PDF Work for Teachers and Lecturers",
    "metaTitle": "PDF Tools for Teachers — Course Packs & Marking | ThePDFNinja",
    "metaDescription": "Making scanned readings accessible, assembling course packs, printing handouts economically and marking on a tablet.",
    "excerpt": "Readings, worksheets, handouts and marking — four workflows that cover most of a teaching term.",
    "date": "2026-10-09",
    "dateLabel": "October 9, 2026",
    "readMinutes": 6,
    "category": "Use Cases",
    "emoji": "🍎",
    "keywords": [
      "pdf tools for teachers",
      "course pack pdf",
      "scanned reading accessible",
      "print handouts pdf",
      "marking pdf tablet"
    ],
    "blocks": [
      {
        "p": "Teaching generates a steady stream of document conversion: readings to distribute, worksheets to assemble, handouts to print economically, and submissions to read on a tablet."
      },
      {
        "h2": "Making readings usable"
      },
      {
        "p": "A scanned book chapter is an image — students cannot search it, and screen readers cannot read it aloud. Running it through [OCR](/tools/ocr) fixes both. For accessibility this is not optional: an unsearchable scan is unusable to a student relying on assistive technology."
      },
      {
        "p": "[Crop](/tools/crop) the margins too. Scanned book pages are typically surrounded by scanner bed, and cropped pages are far more readable on a tablet."
      },
      {
        "h2": "Assembling a course pack"
      },
      {
        "ol": [
          "[Extract](/tools/extract-pages) the chapters you need rather than distributing whole books.",
          "[Merge](/tools/merge) into one pack in reading order.",
          "[Add page numbers](/tools/page-numbers) so you can reference readings in class.",
          "[Compress](/tools/compress) so students on limited data can download it.",
          "Check copyright and licensing before distributing anything."
        ]
      },
      {
        "h2": "Printing economically"
      },
      {
        "p": "Slide handouts do not need one slide per page. [N-up](/tools/n-up-pdf) at four per sheet cuts paper by three quarters and gives students room to annotate. [Greyscale](/tools/grayscale-pdf) first if your department is charged for colour."
      },
      {
        "h2": "Marking submissions"
      },
      {
        "p": "Students submit in every format imaginable. [Word to PDF](/tools/word-to-pdf) normalises them so your annotations display consistently. If you mark on a tablet, [crop](/tools/crop) wide margins first — it makes a substantial difference to readability."
      },
      {
        "note": "Before distributing anything, [remove metadata](/tools/remove-metadata). Document properties can carry your file paths, and occasionally the name of the student whose work you adapted an example from."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "How do I make a scanned reading accessible?",
            "a": "OCR it. Without a text layer it is unusable to screen readers and unsearchable for everyone."
          },
          {
            "q": "How can I reduce printing costs?",
            "a": "N-up at four per sheet and greyscale conversion. Together they cut cost dramatically."
          },
          {
            "q": "Students cannot download my course pack.",
            "a": "It is probably too large. Compress at ebook quality; a 200MB pack is unusable on mobile data."
          },
          {
            "q": "Should I distribute Word or PDF?",
            "a": "PDF. It renders identically for every student regardless of their software."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-tools-for-freelancers",
    "title": "PDF Work for Freelancers: Proposals, Invoices and Deliverables",
    "metaTitle": "PDF Tools for Freelancers — Invoices & Proposals | ThePDFNinja",
    "metaDescription": "Sending files that open correctly, look deliberate and cannot be quietly altered. Plus the metadata that reveals your last client.",
    "excerpt": "Looking professional and getting paid, both of which depend on sending the right kind of file.",
    "date": "2026-10-19",
    "dateLabel": "October 19, 2026",
    "readMinutes": 6,
    "category": "Use Cases",
    "emoji": "💻",
    "keywords": [
      "pdf tools for freelancers",
      "invoice pdf",
      "proposal pdf",
      "portfolio pdf",
      "freelance document tools"
    ],
    "blocks": [
      {
        "p": "Freelance document work is mostly about looking professional and getting paid. Both come down to sending files that open correctly, look deliberate, and cannot be quietly altered."
      },
      {
        "h2": "Always send PDF"
      },
      {
        "p": "Proposals, invoices and deliverables should go as PDF, never as an editable document. A .docx reflows on the client's machine, so your careful layout arrives broken — and it can be edited, which for an invoice or a signed scope is a genuine risk."
      },
      {
        "h2": "Invoices"
      },
      {
        "ul": [
          "Export to PDF directly from your invoicing tool or word processor.",
          "[Remove metadata](/tools/remove-metadata) — document properties can carry another client's name from the template you reused.",
          "Name the file properly: `Invoice_0042_ClientName.pdf`. Accounts departments search by filename.",
          "[Compress](/tools/compress) if it carries a logo image and has grown unreasonably."
        ]
      },
      {
        "h2": "Proposals and portfolios"
      },
      {
        "p": "[Merge](/tools/merge) your proposal, case studies and terms into one document rather than attaching four files — clients read the first attachment and skim the rest. [Add page numbers](/tools/page-numbers) so you can refer to sections on a call."
      },
      {
        "p": "For a portfolio of images, [combine them into a PDF](/tools/jpg-to-pdf) and [compress](/tools/compress) so it can actually be emailed. A 90MB portfolio that bounces is worse than a 5MB one that arrives."
      },
      {
        "h2": "Drafts and revisions"
      },
      {
        "p": "[Watermark](/tools/watermark) drafts with DRAFT at around 0.3 opacity. It costs nothing and prevents the specific disaster of a client circulating a draft internally as though it were final."
      },
      {
        "note": "For contracts, keep an unwatermarked, unflattened master. Send the marked version; keep the clean one for your records and for producing the final."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Should I send invoices as PDF or Word?",
            "a": "PDF, always. It cannot be casually edited and renders identically."
          },
          {
            "q": "Why does my portfolio bounce from email?",
            "a": "Image-heavy PDFs get large fast. Compress at ebook quality, or send a link."
          },
          {
            "q": "Do I need paid software for this?",
            "a": "For exporting, watermarking, merging and compressing — no."
          },
          {
            "q": "How do I stop a client editing my proposal?",
            "a": "Send PDF, and [protect](/tools/protect) it if you want to restrict copying. Neither is absolute, but both raise the bar."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-tools-for-property",
    "title": "PDF Work for Estate Agents and Conveyancers",
    "metaTitle": "PDF Tools for Property Professionals | ThePDFNinja",
    "metaDescription": "Assembling property packs, handling floor plans and listing photos, and redacting vendor details before distribution.",
    "excerpt": "More paperwork per transaction than almost any consumer process, and most of it arrives as scans of scans.",
    "date": "2026-10-27",
    "dateLabel": "October 27, 2026",
    "readMinutes": 6,
    "category": "Use Cases",
    "emoji": "🏠",
    "keywords": [
      "pdf tools estate agents",
      "property pack pdf",
      "floor plan pdf",
      "conveyancing documents",
      "listing brochure pdf"
    ],
    "blocks": [
      {
        "p": "Estate agency and conveyancing generate more paperwork per transaction than almost any other consumer process, and most of it arrives as scans of scans."
      },
      {
        "h2": "Assembling a property pack"
      },
      {
        "ol": [
          "Convert everything to PDF — photos of documents via [JPG to PDF](/tools/jpg-to-pdf).",
          "[OCR](/tools/ocr) every scan. A searchable pack is dramatically faster to work through when a query arrives.",
          "[Merge](/tools/merge) in a logical order: title documents, searches, surveys, certificates, correspondence.",
          "[Add page numbers](/tools/page-numbers) so anyone can reference a specific page by phone.",
          "[Compress](/tools/compress) for distribution, keeping the full-quality original."
        ]
      },
      {
        "h2": "Floor plans and photographs"
      },
      {
        "p": "Listing photographs come off a camera at 5–8MB each. Twenty of them is a brochure nobody can email. [Resize](/tools/image-resize) to a sensible dimension and [compress](/tools/image-compress) before assembling, rather than compressing the finished PDF — you get better quality at the same size."
      },
      {
        "p": "Floor plans are often supplied as PDFs at odd page sizes. [Resize pages](/tools/resize-pages) to a common size before merging, or your pack will print inconsistently."
      },
      {
        "h2": "Redaction matters here"
      },
      {
        "p": "Property documents routinely carry vendor personal details, bank information and signatures that should not travel with a pack sent to multiple prospective buyers. Use [redact](/tools/pdf-redact) — properly, and verify it — and [remove metadata](/tools/remove-metadata) before distribution."
      },
      {
        "note": "Drawing a box over a signature does not remove it. Verify by copying the text out of your redacted file before sending it to anyone."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "How do I get a 90MB brochure emailable?",
            "a": "Resize and compress the images before building the PDF, not after."
          },
          {
            "q": "Should property packs be OCRed?",
            "a": "Yes. Searchability saves substantial time when queries arrive."
          },
          {
            "q": "Do floor plans need to be the same page size?",
            "a": "For a pack that prints consistently, yes. Resize pages before merging."
          },
          {
            "q": "What should be redacted from a pack?",
            "a": "Personal contact details, bank information and signatures not required by the recipient."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-tools-for-researchers",
    "title": "PDF Work for Researchers and Academics",
    "metaTitle": "PDF Tools for Researchers — Papers & Submissions | ThePDFNinja",
    "metaDescription": "Making an unsearchable library searchable, reading journal PDFs on a tablet, extracting figures, and anonymising for blind review.",
    "excerpt": "A fifth of your library may be invisible to search without you knowing. Here is how to fix that and four other research workflows.",
    "date": "2026-11-04",
    "dateLabel": "November 4, 2026",
    "readMinutes": 6,
    "category": "Use Cases",
    "emoji": "🔬",
    "keywords": [
      "pdf tools for researchers",
      "ocr academic papers",
      "anonymise pdf blind review",
      "extract figures from pdf",
      "research paper pdf"
    ],
    "blocks": [
      {
        "p": "Research work generates a particular document problem: hundreds of papers, most as PDFs, many as scans of older material, all needing to be searchable, annotatable and citable."
      },
      {
        "h2": "Making a library searchable"
      },
      {
        "p": "Papers published before roughly 2000 are frequently scans with no text layer. They are invisible to your reference manager's full-text search, which quietly means you never find them again. Run them through [OCR](/tools/ocr) as you file them."
      },
      {
        "p": "This compounds: a library of 400 papers where 80 are unsearchable is a library where a fifth of your reading is effectively lost."
      },
      {
        "h2": "Reading on a tablet"
      },
      {
        "p": "Journal PDFs are laid out for A4 print with generous margins. On a tablet that means tiny text surrounded by white. [Crop](/tools/crop) the margins and the same page becomes comfortably readable — one of the highest-value small changes available for anyone who reads on screen."
      },
      {
        "h2": "Extracting figures and data"
      },
      {
        "ul": [
          "**A figure for a presentation:** [PDF to JPG](/tools/pdf-to-jpg) at high DPI, then [crop](/tools/image-crop) to the figure.",
          "**A data table:** [PDF to Excel](/tools/pdf-to-excel) if it has borders. Verify every number against the source.",
          "**A quotation:** copy directly if born-digital, or OCR first and proofread."
        ]
      },
      {
        "note": "Never cite a number extracted automatically without checking it against the original. Table extraction errors cluster in exactly the places that matter — negative values, footnoted figures, anything with unusual formatting."
      },
      {
        "h2": "Preparing a submission"
      },
      {
        "p": "Journals specify formats precisely. [Merge](/tools/merge) manuscript, figures and supplementary material in the required order, [add page numbers](/tools/page-numbers) if line or page numbering is requested, and [remove metadata](/tools/remove-metadata) before submitting to double-blind review — author metadata defeats anonymity entirely."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why can't I search some papers?",
            "a": "They are scans without a text layer. OCR them."
          },
          {
            "q": "How do I anonymise for blind review?",
            "a": "Remove metadata, and check the acknowledgements and self-citations too."
          },
          {
            "q": "Can I extract a table reliably?",
            "a": "Reasonably, if bordered. Always verify the numbers."
          },
          {
            "q": "How do I make journal PDFs readable on a tablet?",
            "a": "Crop the margins. It makes a substantial difference."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-tools-for-healthcare",
    "title": "PDF Work in Healthcare: Records, Referrals and Redaction",
    "metaTitle": "PDF Tools for Healthcare — Records and Redaction | ThePDFNinja",
    "metaDescription": "Handling scanned records, anonymising cases properly, and the governance question that comes before any tool choice.",
    "excerpt": "Low tolerance for error, high sensitivity to disclosure. Governance comes before tooling here.",
    "date": "2026-11-12",
    "dateLabel": "November 12, 2026",
    "readMinutes": 6,
    "category": "Use Cases",
    "emoji": "🩺",
    "keywords": [
      "pdf tools healthcare",
      "anonymise patient records",
      "redact medical records",
      "scanned medical records ocr",
      "clinical document pdf"
    ],
    "blocks": [
      {
        "p": "Clinical and administrative work in healthcare generates documents with an unusually low tolerance for error and an unusually high sensitivity to disclosure."
      },
      {
        "h2": "Confidentiality first"
      },
      {
        "p": "Patient-identifiable information carries legal obligations that vary by jurisdiction but are uniformly strict. Before considering any tool, online or otherwise, check what your organisation permits. That is a governance question, and no privacy policy answers it for you."
      },
      {
        "note": "We delete uploads within an hour and do not inspect contents. For patient-identifiable data, that is still a transfer to a third party, and many healthcare organisations prohibit it outright. Use offline tools where that applies."
      },
      {
        "h2": "Redaction in referrals and reports"
      },
      {
        "p": "Sharing a case for teaching, second opinion or audit means removing identifiers — and removing them properly. A black box over a name does not delete it. Use [redact](/tools/pdf-redact), then verify by copying the text out of the result."
      },
      {
        "p": "Remember the places identifiers hide beyond the page body: [document metadata](/tools/remove-metadata), embedded image EXIF, the filename itself, and earlier revisions retained by incremental saves."
      },
      {
        "h2": "Making scanned records usable"
      },
      {
        "p": "Older records arrive as scans. Without [OCR](/tools/ocr) they cannot be searched, which in a large record set means clinically relevant information is effectively unfindable. OCR at 300 DPI, and verify recognition on anything numeric — a misrecognised dose or date is a patient safety issue, not a typo."
      },
      {
        "h2": "Assembling documentation"
      },
      {
        "ol": [
          "Convert everything to PDF.",
          "[Merge](/tools/merge) in chronological order.",
          "[Add page numbers](/tools/page-numbers) so any page can be referenced unambiguously.",
          "[Redact](/tools/pdf-redact) identifiers where the recipient does not need them, and verify.",
          "[Remove metadata](/tools/remove-metadata) before it leaves the organisation."
        ]
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Can I use online tools for patient data?",
            "a": "Check your organisation's information governance policy first. Many prohibit it, and that decision is not yours to make individually."
          },
          {
            "q": "How do I anonymise a case for teaching?",
            "a": "Redact identifiers properly, strip metadata, and check images for embedded EXIF and visible identifiers."
          },
          {
            "q": "Is OCR accurate enough for clinical records?",
            "a": "For searching, yes. Never rely on it for doses, dates or values without verification."
          },
          {
            "q": "What is the commonest disclosure mistake?",
            "a": "Covering text with a shape instead of redacting it. Always verify by copying text out."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-tools-for-small-business",
    "title": "PDF Habits for Small Businesses",
    "metaTitle": "PDF Tools for Small Business — Invoices & Contracts | ThePDFNinja",
    "metaDescription": "Quotes, invoices, signed contracts and expense receipts. A handful of habits that replace the systems bigger firms have.",
    "excerpt": "The same document types as a large company, without the systems. Here is what actually matters.",
    "date": "2026-11-20",
    "dateLabel": "November 20, 2026",
    "readMinutes": 6,
    "category": "Use Cases",
    "emoji": "🏢",
    "keywords": [
      "pdf tools small business",
      "invoice pdf business",
      "contract pdf management",
      "expense receipts pdf",
      "business document workflow"
    ],
    "blocks": [
      {
        "p": "Small businesses handle the same document types as large ones without the systems built around them. A handful of habits covers most of it."
      },
      {
        "h2": "Quotes, invoices and contracts"
      },
      {
        "ul": [
          "Send PDF, never editable documents. An invoice that can be altered is a liability.",
          "[Remove metadata](/tools/remove-metadata) — template reuse routinely leaks another client's name.",
          "Name files so an accounts department can find them: `Invoice_0042_ClientName.pdf`.",
          "[Watermark](/tools/watermark) quotes as DRAFT until signed, so an early version cannot be treated as final."
        ]
      },
      {
        "h2": "Signed documents"
      },
      {
        "p": "When a signed contract comes back as a photograph of a printout, [crop](/tools/image-crop) it, [convert to PDF](/tools/jpg-to-pdf), and [OCR](/tools/ocr) it so the text is searchable. A folder of unsearchable contract photos becomes unusable at about thirty files."
      },
      {
        "p": "[Flatten](/tools/flatten-pdf) signed documents before filing. It fixes the content and prevents accidental alteration."
      },
      {
        "h2": "Receipts and expenses"
      },
      {
        "p": "Photograph, [crop](/tools/image-crop), [greyscale](/tools/image-to-grayscale), [combine into one PDF per month](/tools/jpg-to-pdf), [OCR](/tools/ocr). Ten minutes at month end beats a shoebox at year end, and your accountant will charge you less."
      },
      {
        "h2": "Sharing with clients"
      },
      {
        "p": "[Merge](/tools/merge) related documents rather than attaching six files — recipients open the first attachment and skim the rest. [Compress](/tools/compress) before emailing, and keep the full-quality version in your own records."
      },
      {
        "note": "Keep originals of everything. Compressed and flattened copies are for distribution. The moment you need to produce a clean version of a contract, you will want the master."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Should invoices be PDF?",
            "a": "Always. They cannot be casually edited and render identically for the recipient."
          },
          {
            "q": "How do I stop clients editing quotes?",
            "a": "Send PDF and watermark drafts. [Protect](/tools/protect) if you want to restrict copying."
          },
          {
            "q": "Is it worth OCRing receipts?",
            "a": "Yes, once you have more than a handful. Searchability is the whole value."
          },
          {
            "q": "What metadata should I worry about?",
            "a": "Author and title fields, which frequently carry a previous client's details from a reused template."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-tools-for-designers",
    "title": "PDF Work for Designers: Print, Review and Portfolio",
    "metaTitle": "PDF Tools for Designers — Print & Portfolio | ThePDFNinja",
    "metaDescription": "Print files, client review copies and portfolios have incompatible requirements. What each needs and why one file cannot serve all three.",
    "excerpt": "Three destinations, three sets of rules, and one file that cannot satisfy all of them.",
    "date": "2026-11-27",
    "dateLabel": "November 27, 2026",
    "readMinutes": 6,
    "category": "Use Cases",
    "emoji": "🎨",
    "keywords": [
      "pdf tools designers",
      "print ready pdf",
      "portfolio pdf size",
      "design pdf client review",
      "pdf colour profile"
    ],
    "blocks": [
      {
        "p": "Design and creative work produces PDFs that must survive a journey to a printer, a client, or a portfolio review — three destinations with incompatible requirements."
      },
      {
        "h2": "For print"
      },
      {
        "ul": [
          "**Embed every font.** A substituted typeface in a printed piece is expensive to discover late.",
          "**Keep resolution high.** 300 DPI minimum for images. Do not compress print files.",
          "**Preserve colour profiles.** Converting to greyscale or resampling can shift colour unpredictably.",
          "**Check page size and bleed** against the printer's specification before sending."
        ]
      },
      {
        "p": "Broadly: for print, do as little to the file as possible after export."
      },
      {
        "h2": "For client review"
      },
      {
        "p": "Opposite priorities. The file must open quickly, email successfully and look right on a laptop. [Compress](/tools/compress) at ebook quality, and [watermark](/tools/watermark) with DRAFT at low opacity so an early concept cannot be circulated as final."
      },
      {
        "p": "For multi-concept presentations, [merge](/tools/merge) into one document and [add page numbers](/tools/page-numbers) so feedback can reference a specific page rather than 'the blue one'."
      },
      {
        "h2": "For a portfolio"
      },
      {
        "p": "A portfolio nobody can open is not a portfolio. [Resize images](/tools/image-resize) before assembling rather than compressing the finished PDF — better quality at the same size. Aim for something emailable; if it exceeds about 10MB, send a link instead."
      },
      {
        "h2": "Converting from SVG and vectors"
      },
      {
        "p": "Keep vector artwork vector for as long as possible. [SVG to PNG](/tools/svg-to-png) rasterises at a fixed size and there is no going back — export at twice the intended display size if you must, and keep the original."
      },
      {
        "note": "Maintain three versions of anything that matters: the working master, a print-ready export, and a compressed review copy. They have irreconcilable requirements and trying to serve all three with one file always disappoints someone."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Should I compress print files?",
            "a": "No. Send the printer full quality and let them handle it."
          },
          {
            "q": "Why did my colours change?",
            "a": "A colour profile was dropped or converted. Preserve profiles for anything colour-critical."
          },
          {
            "q": "How large should a portfolio PDF be?",
            "a": "Emailable, so under about 10MB. Beyond that, send a link."
          },
          {
            "q": "Why do my fonts look wrong on the client's machine?",
            "a": "They were not embedded. Check export settings."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-tools-for-recruiters",
    "title": "PDF Work for Recruiters and HR",
    "metaTitle": "PDF Tools for HR and Recruitment | ThePDFNinja",
    "metaDescription": "Normalising CVs that arrive in every format, building candidate packs, and anonymising shortlists so the redaction actually holds.",
    "excerpt": "Every format imaginable arrives, and anonymised shortlisting fails the moment someone copies text out of your black boxes.",
    "date": "2026-12-03",
    "dateLabel": "December 3, 2026",
    "readMinutes": 6,
    "category": "Use Cases",
    "emoji": "👔",
    "keywords": [
      "pdf tools recruitment",
      "cv pdf conversion",
      "anonymise cv shortlisting",
      "candidate pack pdf",
      "hr document management"
    ],
    "blocks": [
      {
        "p": "Recruitment runs on documents: CVs in every format, right-to-work evidence, signed offers, and the obligation to delete all of it on a schedule."
      },
      {
        "h2": "Normalising what arrives"
      },
      {
        "p": "Candidates send .docx, .pages, PDFs, Google Doc links and occasionally photographs of a printout. [Word to PDF](/tools/word-to-pdf) normalises the common cases so everything reviews consistently and your annotations render the same for every reviewer."
      },
      {
        "p": "For a CV that arrived as a photograph, [OCR](/tools/ocr) it — otherwise it is invisible to your search and to any parsing you do."
      },
      {
        "h2": "Building a candidate pack"
      },
      {
        "ol": [
          "Convert everything to PDF.",
          "[Merge](/tools/merge) in a consistent order: CV, cover letter, right-to-work, references.",
          "[Add page numbers](/tools/page-numbers) so a panel can reference a page during discussion.",
          "[Redact](/tools/pdf-redact) protected characteristics if you run anonymised shortlisting — and verify the redaction.",
          "[Remove metadata](/tools/remove-metadata) before circulating."
        ]
      },
      {
        "h2": "Anonymised shortlisting"
      },
      {
        "p": "If you anonymise, do it properly. Covering a name with a black box leaves it in the file, and a curious panel member can retrieve it in seconds. Use redaction, then verify by copying text out of the result."
      },
      {
        "p": "Remember what else identifies: the filename, document metadata author field, and often the email address in a header."
      },
      {
        "note": "Candidate data carries retention obligations in most jurisdictions. Whatever tools you use, have a deletion schedule and follow it — the obligation does not disappear because the file is in a folder nobody opens."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why can't I search some CVs?",
            "a": "They arrived as images or scans. OCR them."
          },
          {
            "q": "How do I anonymise properly?",
            "a": "Redact, strip metadata, rename the file. Then verify by copying the text out."
          },
          {
            "q": "Should I convert candidate CVs to PDF?",
            "a": "Yes — consistent rendering for every reviewer and stable annotation."
          },
          {
            "q": "What about right-to-work document copies?",
            "a": "Handle under your retention policy. Convert and store consistently, and delete on schedule."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-tools-for-nonprofits",
    "title": "PDF Work for Non-Profits: Grants, Reports and Accessibility",
    "metaTitle": "PDF Tools for Non-Profits — Grants & Reports | ThePDFNinja",
    "metaDescription": "Grant applications that meet funder requirements, emailable annual reports, and why accessibility matters more in this sector.",
    "excerpt": "Applications rejected unread for format non-compliance, and reports nobody can open. Both avoidable.",
    "date": "2026-12-09",
    "dateLabel": "December 9, 2026",
    "readMinutes": 6,
    "category": "Use Cases",
    "emoji": "🤝",
    "keywords": [
      "pdf tools nonprofit",
      "grant application pdf",
      "annual report pdf size",
      "accessible pdf",
      "charity document tools"
    ],
    "blocks": [
      {
        "p": "Non-profit and community work runs on grant applications, annual reports and forms submitted to funders who all want something slightly different."
      },
      {
        "h2": "Grant applications"
      },
      {
        "p": "Funders specify formats precisely and reject non-compliant submissions without reading them. Before anything else, note the required format, page limit, and file size cap."
      },
      {
        "ol": [
          "[Merge](/tools/merge) application, budget and supporting documents in the required order.",
          "[Add page numbers](/tools/page-numbers) if the funder references pages.",
          "[Compress to size](/tools/compress-to-size) if there is a cap.",
          "Check the page count against any stated limit — merging supporting documents can push you over without you noticing."
        ]
      },
      {
        "h2": "Annual reports"
      },
      {
        "p": "These are usually designed documents that end up too large to email to a membership list. [Resize images](/tools/image-resize) before the design is exported rather than compressing the finished PDF — better quality at the same size. Keep a print-quality master separately."
      },
      {
        "p": "[Linearise](/tools/linearize-pdf) the version you publish on your website so it starts displaying immediately rather than after a full download."
      },
      {
        "h2": "Accessibility matters more here than most places"
      },
      {
        "p": "If your audience includes people using screen readers, a scanned report is unusable to them. [OCR](/tools/ocr) anything scanned, and prefer exporting from your source document rather than printing to PDF, since export preserves the structure assistive technology relies on."
      },
      {
        "note": "An unsearchable scanned PDF is inaccessible. For an organisation whose purpose involves inclusion, that is worth more than a few minutes of processing."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why was our application rejected without review?",
            "a": "Usually a format or size non-compliance. Check every stated requirement before submitting."
          },
          {
            "q": "How do we make the annual report emailable?",
            "a": "Resize images before export, then compress. Keep the print master separately."
          },
          {
            "q": "What makes a PDF accessible?",
            "a": "Real text rather than images, structural tags from a proper export, and meaningful headings."
          },
          {
            "q": "Should we publish PDF or a web page?",
            "a": "A web page is more accessible. Publish PDF as the printable version alongside it."
          }
        ]
      }
    ]
  }
];
