import type { BlogArticle } from './types';

// Use-case guides written for a specific job, not a specific tool.

export const personasArticles: BlogArticle[] = [
  {
    "slug": "pdf-tools-for-students",
    "title": "PDF Tools Every Student Actually Needs",
    "metaTitle": "Free PDF Tools for Students — Assignments & Notes | ThePDFNinja",
    "metaDescription": "Merging readings, compressing submissions, extracting chapters and making scanned notes searchable — the handful of operations that cover student work.",
    "excerpt": "Submission portals, lecture scans and reading packs. Five operations cover almost everything you will need across a degree.",
    "date": "2026-09-24",
    "dateLabel": "September 24, 2026",
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
    "date": "2026-09-28",
    "dateLabel": "September 28, 2026",
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
  }
];
