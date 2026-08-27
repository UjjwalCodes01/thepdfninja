import type { BlogArticle } from './types';

// Format explainers: what a file type is, what it is good at, and when to
// convert away from it.

export const formatsArticles: BlogArticle[] = [
  {
    "slug": "jpg-vs-png-which-format",
    "title": "JPG vs PNG: Which Format Should You Actually Use?",
    "metaTitle": "JPG vs PNG — Which Image Format to Use When | ThePDFNinja",
    "metaDescription": "JPG and PNG solve different problems. A practical rule for choosing, what lossy compression really costs, and when to convert between them.",
    "excerpt": "One is for photographs, the other for graphics — and using the wrong one either bloats your file or blurs your text.",
    "date": "2026-09-07",
    "dateLabel": "September 7, 2026",
    "readMinutes": 6,
    "category": "Explainers",
    "emoji": "🖼️",
    "keywords": [
      "jpg vs png",
      "png or jpg",
      "difference between jpg and png",
      "which image format",
      "convert png to jpg"
    ],
    "blocks": [
      {
        "p": "Both are everywhere, both open anywhere, and most people pick whichever their software defaulted to. That default is often wrong, and the cost is either a file several times larger than it needed to be, or text that looks smeared."
      },
      {
        "h2": "The one-line rule"
      },
      {
        "p": "**Photographs → JPG. Anything with sharp edges, flat colour or transparency → PNG.**"
      },
      {
        "p": "That covers almost every real decision. The reasoning is worth understanding, because the edge cases follow from it."
      },
      {
        "h2": "Why the rule works"
      },
      {
        "p": "JPG uses **lossy** compression tuned for photographs. It discards detail the eye is bad at noticing — subtle gradations in a sky, fine texture in foliage. On a photograph this is nearly invisible and hugely effective. On a screenshot of text, the same algorithm produces visible fuzz around every letter, because sharp black-on-white edges are precisely what it is designed to smooth away."
      },
      {
        "p": "PNG is **lossless**. Every pixel survives exactly. That is perfect for logos, diagrams, screenshots and anything with text — and wasteful for photographs, where a PNG is often five to ten times larger than a visually identical JPG."
      },
      {
        "h2": "Side by side"
      },
      {
        "table": {
          "headers": [
            "",
            "JPG",
            "PNG"
          ],
          "rows": [
            [
              "Compression",
              "Lossy",
              "Lossless"
            ],
            [
              "Transparency",
              "No",
              "Yes"
            ],
            [
              "Best for",
              "Photographs",
              "Text, logos, screenshots"
            ],
            [
              "Typical photo size",
              "Small",
              "5–10× larger"
            ],
            [
              "Re-saving repeatedly",
              "Degrades each time",
              "No degradation"
            ]
          ]
        }
      },
      {
        "h2": "The re-saving trap"
      },
      {
        "p": "Every time you open a JPG, edit it and save again, it is re-compressed and loses a little more. Do that a dozen times and the damage is obvious. PNG never degrades. If you are working across several sessions, keep the working copy as PNG and export to JPG at the end."
      },
      {
        "h2": "Converting between them"
      },
      {
        "ul": [
          "**[PNG to JPG](/tools/png-to-jpg)** — when a screenshot-turned-photo is needlessly large. Transparency becomes white.",
          "**[JPG to PNG](/tools/jpg-to-png)** — for a lossless working copy. It will not recover detail already lost.",
          "**[JPG to WebP](/tools/jpg-to-webp)** or **[PNG to WebP](/tools/png-to-webp)** — smaller than both for web use."
        ]
      },
      {
        "note": "Converting JPG to PNG does not improve quality. The detail JPG discarded is gone; PNG just preserves what remains, in a bigger file."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Which is better quality?",
            "a": "PNG is lossless, so technically higher fidelity. But for a photograph the difference is invisible while the file is many times larger — which makes JPG the better choice, not the worse one."
          },
          {
            "q": "Why is my PNG screenshot enormous?",
            "a": "PNG stores every pixel. If the capture is mostly photographic content, JPG is the right format."
          },
          {
            "q": "Does converting PNG to JPG lose quality?",
            "a": "Yes, once — at conversion. At a high quality setting the loss is usually imperceptible."
          },
          {
            "q": "What about transparency?",
            "a": "JPG cannot store it. Converting a transparent PNG to JPG fills the transparent area, normally with white."
          }
        ]
      }
    ]
  },
  {
    "slug": "what-is-ocr-explained",
    "title": "What OCR Is, How It Works, and Where It Fails",
    "metaTitle": "What Is OCR? Optical Character Recognition Explained | ThePDFNinja",
    "metaDescription": "OCR turns a picture of text into text you can search and copy. How recognition works, what wrecks accuracy, and realistic expectations.",
    "excerpt": "The technology that makes a scan searchable — what it does well, and the four things that reliably break it.",
    "date": "2026-09-10",
    "dateLabel": "September 10, 2026",
    "readMinutes": 6,
    "category": "Explainers",
    "emoji": "🔤",
    "keywords": [
      "what is ocr",
      "optical character recognition",
      "how does ocr work",
      "ocr accuracy",
      "ocr explained"
    ],
    "blocks": [
      {
        "p": "Optical Character Recognition converts an image of text into actual text. It is the bridge between a scanned page — which to a computer is just coloured dots — and a document you can search, copy from and feed into other software."
      },
      {
        "h2": "What happens inside"
      },
      {
        "ol": [
          "**Preprocessing.** The image is straightened, converted to high-contrast black and white, and cleaned of speckle. Most accuracy is won or lost here.",
          "**Layout analysis.** The page is divided into columns, paragraphs, tables and images, and a reading order established. This is why a two-column page can come out interleaved.",
          "**Segmentation.** Regions are broken into lines, lines into words, words into character shapes.",
          "**Recognition.** Each shape is classified by a neural network trained on vast quantities of text in many fonts.",
          "**Post-processing.** A language model corrects likely errors — turning `recognitlon` into `recognition` from context."
        ]
      },
      {
        "h2": "The four things that break it"
      },
      {
        "ul": [
          "**Low resolution.** Below about 200 DPI, characters lack the pixels to be distinguished. 300 DPI is the sweet spot.",
          "**Skew.** A page scanned a few degrees off confuses line detection — the most common cause of garbled output.",
          "**Poor contrast.** Faded ink, grey photocopies, coloured backgrounds.",
          "**Unusual text.** Handwriting, decorative fonts, heavy italics, text over images."
        ]
      },
      {
        "h2": "Realistic expectations"
      },
      {
        "p": "On clean printed text at 300 DPI, expect 98–99% character accuracy. That sounds excellent until you notice it means roughly one error every two or three lines. Fine for searching. Not fine where a wrong digit matters — an invoice, a registration number, a dosage. Proofread those."
      },
      {
        "note": "Always OCR **before** compressing. Compression removes exactly the fine detail recognition depends on. Scan, OCR, then compress."
      },
      {
        "h2": "Using it"
      },
      {
        "p": "[OCR](/tools/ocr) adds a searchable text layer while leaving the page image visible, so the document looks identical but becomes searchable. If you only want raw words, [PDF to text](/tools/pdf-to-txt) is simpler. To edit properly, [PDF to Word](/tools/pdf-to-word) reconstructs structure."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Does OCR change how my document looks?",
            "a": "No. The text is added as an invisible layer over the image."
          },
          {
            "q": "Can it read handwriting?",
            "a": "Neat printed handwriting sometimes; cursive reliably not."
          },
          {
            "q": "Why is my output gibberish?",
            "a": "Almost always skew, resolution below 200 DPI, or compression applied before OCR."
          },
          {
            "q": "Do I need OCR for a PDF made from Word?",
            "a": "No. That file already contains real text."
          }
        ]
      }
    ]
  },
  {
    "slug": "what-is-a-pdf-file",
    "title": "What a PDF Actually Is (and Why It Behaves the Way It Does)",
    "metaTitle": "What Is a PDF File? The Format Explained Simply | ThePDFNinja",
    "metaDescription": "Why PDFs look identical everywhere, why they are hard to edit, and why a scanned PDF behaves nothing like a typed one.",
    "excerpt": "Understanding what is inside a PDF explains almost every frustrating thing they do — including why editing one is harder than it should be.",
    "date": "2026-09-14",
    "dateLabel": "September 14, 2026",
    "readMinutes": 6,
    "category": "Explainers",
    "emoji": "📄",
    "keywords": [
      "what is a pdf",
      "pdf format explained",
      "how do pdf files work",
      "why can't i edit a pdf",
      "pdf file type"
    ],
    "blocks": [
      {
        "p": "PDF stands for Portable Document Format, and the word doing the work is *portable*. It was designed to solve one problem: a document that looks exactly the same on every machine, printer and operating system. Nearly everything people find annoying about PDFs follows from that goal."
      },
      {
        "h2": "A page description, not a document"
      },
      {
        "p": "A Word file describes **content**: this is a heading, this is a paragraph, flow it to fit the page. A PDF describes **appearance**: place this glyph at this coordinate in this font at this size."
      },
      {
        "p": "That is why a PDF looks identical everywhere — nothing is decided at open time. It is also why editing is awkward. There are no paragraphs to reflow, only characters at fixed positions. Change one word and nothing moves to accommodate it."
      },
      {
        "h2": "What is inside"
      },
      {
        "ul": [
          "**Text** — character codes plus embedded fonts, so a font you do not have still renders correctly.",
          "**Vector graphics** — shapes as mathematics, which is why logos stay sharp at any zoom.",
          "**Images** — embedded bitmaps, usually the bulk of the file size.",
          "**A cross-reference table** — an index of where everything lives, stored at the *end*. This is why a truncated download will not open at all.",
          "**Optional extras** — form fields, annotations, encryption, digital signatures."
        ]
      },
      {
        "h2": "Born-digital versus scanned"
      },
      {
        "p": "Two files can both be PDFs and behave completely differently."
      },
      {
        "table": {
          "headers": [
            "",
            "Born-digital",
            "Scanned"
          ],
          "rows": [
            [
              "Created by",
              "Exporting from an app",
              "A scanner or camera"
            ],
            [
              "Contains",
              "Real text characters",
              "A photograph of a page"
            ],
            [
              "Searchable",
              "Yes",
              "No, until [OCR](/tools/ocr)"
            ],
            [
              "Typical size",
              "Small",
              "Large"
            ],
            [
              "Convert to Word",
              "[Works well](/tools/pdf-to-word)",
              "Needs OCR first"
            ]
          ]
        }
      },
      {
        "p": "If Ctrl+F finds nothing, you have a scan. That single test explains most confusion about why PDFs behave inconsistently."
      },
      {
        "h2": "Why editing is hard"
      },
      {
        "p": "Since a PDF stores positions rather than structure, editors must reverse-engineer intent — grouping characters into words, words into lines, lines into paragraphs. Good tools manage small changes. For substantial edits, [convert to Word](/tools/pdf-to-word), edit there, and export back."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why can't I edit a PDF like a Word document?",
            "a": "It stores glyph positions, not flowing text. There is no paragraph to reflow when you change a word."
          },
          {
            "q": "Why is my scanned PDF so large?",
            "a": "It is a series of photographs. Images are orders of magnitude larger than text."
          },
          {
            "q": "Are all PDFs the same?",
            "a": "No. Born-digital and scanned PDFs share a container but behave very differently."
          },
          {
            "q": "What is PDF/A?",
            "a": "A restricted subset for archiving — everything needed to render must be embedded."
          }
        ]
      }
    ]
  }
];
