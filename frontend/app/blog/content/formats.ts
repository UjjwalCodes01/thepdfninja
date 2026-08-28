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
    "date": "2026-09-03",
    "dateLabel": "September 3, 2026",
    "readMinutes": 9,
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
        "h2": "Screenshots: the case people get wrong most often"
      },
      {
        "p": "Screenshots are worth singling out because they contain both kinds of content and the right answer depends on which dominates."
      },
      {
        "p": "A screenshot of **an interface** — menus, text, flat colour, sharp edges — is PNG territory. JPEG's smoothing produces visible fringing around every letter and along every border, and because interface graphics use few distinct colours, PNG compresses them extremely well. A screenshot of a settings dialog might be 40KB as PNG and look worse at 60KB as JPG."
      },
      {
        "p": "A screenshot of **a photograph or video** is the opposite. Now the content is continuous-tone imagery, PNG has nothing to exploit, and the same capture might be 3MB as PNG and 250KB as an indistinguishable JPG."
      },
      {
        "p": "A screenshot of a web page containing both is a judgement call. If the text must stay crisp, PNG. If it is mostly imagery with some text, JPG at high quality is usually the better trade."
      },
      {
        "h2": "Transparency, and what happens when you discard it"
      },
      {
        "p": "JPG has no alpha channel at all, so converting a transparent PNG requires deciding what fills the transparent area. Most tools default to white, which is invisible on a white page and abruptly visible on any other background."
      },
      {
        "p": "The failure mode is a logo that looked fine in your document and arrives as a white rectangle on a coloured slide. If a graphic needs to sit on varying backgrounds, it must stay PNG — or better, stay [SVG](/tools/svg-to-png) if it is a logo or icon."
      },
      {
        "p": "Where you genuinely need JPG and the source is transparent, flatten it deliberately onto the background colour you will actually use, rather than accepting whatever default the converter picks."
      },
      {
        "h2": "Choosing a JPEG quality setting"
      },
      {
        "table": {
          "headers": [
            "Quality",
            "Use",
            "Result"
          ],
          "rows": [
            [
              "95–100",
              "Archival, print",
              "Very large, no visible loss"
            ],
            [
              "85–90",
              "General purpose",
              "Good default; loss imperceptible"
            ],
            [
              "70–80",
              "Web, email",
              "Small; slight softening on close inspection"
            ],
            [
              "50–65",
              "Tight size limits",
              "Visible artefacts in detail areas"
            ],
            [
              "Below 50",
              "Last resort",
              "Obvious blocking"
            ]
          ]
        }
      },
      {
        "p": "85 is the sensible default for almost everything. Below 70 you are trading visible quality for size, which is a legitimate choice when a portal demands it and a poor one when it does not."
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
    "date": "2026-09-11",
    "dateLabel": "September 11, 2026",
    "readMinutes": 9,
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
        "h2": "Why accuracy figures can mislead"
      },
      {
        "p": "Vendors quote character accuracy, and 99% sounds close to perfect. Working out what it means in practice is more sobering."
      },
      {
        "p": "A typical page holds around 3,000 characters. At 99% accuracy that is 30 wrong characters per page — roughly one error every two lines. Most will be harmless and self-evidently wrong in context. Some will not."
      },
      {
        "p": "Worse, errors are not evenly distributed. Ordinary words benefit from a language model that corrects implausible strings, so they are recognised at well above the headline rate. Names, reference numbers, dates and amounts get no such help, because there is no dictionary entry to correct toward. The accuracy on exactly the content you most need is materially worse than the average."
      },
      {
        "p": "The practical rule: trust OCR for searching and reading, verify it for anything you will act on."
      },
      {
        "h2": "Preprocessing you can do yourself"
      },
      {
        "p": "Recognition engines preprocess internally, but they can only work with what they are given. Improvements you make before that point compound:"
      },
      {
        "ol": [
          "**Straighten the page.** The single highest-value intervention. Even two degrees of skew measurably degrades line detection.",
          "**[Convert to greyscale](/tools/grayscale-pdf).** Colour adds noise without adding information for text recognition.",
          "**[Crop](/tools/crop) to the text area.** Scanner bed edges, staple shadows and page curl at the margins all confuse layout analysis.",
          "**Split multi-column pages** into separate crops if automatic layout analysis is interleaving them.",
          "**Do not compress.** Whatever you do, do it before compression, not after."
        ]
      },
      {
        "h2": "What OCR cannot do"
      },
      {
        "ul": [
          "**Cursive handwriting.** Conventional OCR is trained on typeset characters. Specialist handwriting recognition exists and is a different technology with different expectations.",
          "**Understand structure it cannot see.** A borderless table becomes loose text, because there is nothing marking the cells.",
          "**Recover detail that is not there.** A 100 DPI scan cannot be recognised well at any setting; the pixels do not exist.",
          "**Distinguish visually identical characters reliably.** Zero and capital O, one and lowercase l, in fonts where they are drawn nearly identically.",
          "**Fix a bad capture.** Every OCR problem is easier to solve at the scanner than in software afterwards."
        ]
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
    "date": "2026-09-21",
    "dateLabel": "September 21, 2026",
    "readMinutes": 9,
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
        "h2": "Why PDFs are hard to search reliably"
      },
      {
        "p": "Even a born-digital PDF with a proper text layer can defeat search, and understanding why explains several otherwise baffling behaviours."
      },
      {
        "p": "A PDF stores characters positioned individually. Whether they form a word is inferred from spacing — there is no space character necessarily stored between them. Justified text, kerned headings and columns can all produce text that extracts as `H e a d i n g` or `Thisisaheading` depending on how the producing application laid it out."
      },
      {
        "p": "Ligatures compound this. A font that renders 'fi' as a single glyph may store it as one character that does not match a search for 'fi' typed normally. Hyphenated words broken across lines extract with the hyphen intact and do not match the unbroken word."
      },
      {
        "p": "None of this is visible on the page. It is why a document you can plainly read sometimes refuses to yield to Ctrl+F, and why extracted text occasionally needs cleaning before it is usable."
      },
      {
        "h2": "The versions, briefly"
      },
      {
        "p": "PDF has evolved since 1993 and version numbers occasionally matter:"
      },
      {
        "ul": [
          "**PDF 1.4** introduced transparency, which is why very old readers render some modern files oddly.",
          "**PDF 1.5** added object streams and cross-reference streams, which make files smaller and are unreadable to pre-2003 software.",
          "**PDF 1.7** became the ISO standard in 2008 and is the safe target for maximum compatibility.",
          "**PDF 2.0**, from 2017, is still not universally supported."
        ]
      },
      {
        "p": "For anything going to an unknown recipient, 1.7 is the pragmatic choice. Compression tools sometimes let you set a compatibility level, and pushing it lower produces larger files that older software can open."
      },
      {
        "h2": "Special-purpose variants"
      },
      {
        "table": {
          "headers": [
            "Variant",
            "Purpose",
            "Key constraint"
          ],
          "rows": [
            [
              "[PDF/A](/tools/pdf-to-pdfa)",
              "Archiving",
              "Everything embedded; no encryption or scripts"
            ],
            [
              "PDF/X",
              "Print production",
              "Colour profiles and fonts mandatory"
            ],
            [
              "PDF/UA",
              "Accessibility",
              "Structural tagging required"
            ],
            [
              "PDF/E",
              "Engineering",
              "Supports 3D and large-format drawings"
            ]
          ]
        }
      },
      {
        "p": "These are subsets, not different formats — a PDF/A file is a valid PDF that additionally satisfies extra rules. Any reader opens them; only a validator cares about compliance."
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
  },
  {
    "slug": "what-is-heic-format",
    "title": "HEIC Explained: Why Apple Uses It and What to Do About It",
    "metaTitle": "What Is HEIC? The iPhone Photo Format Explained | ThePDFNinja",
    "metaDescription": "HEIC stores photos at roughly half the size of JPG at the same quality — and opens almost nowhere outside Apple's ecosystem.",
    "excerpt": "Technically better than JPG, practically a nuisance. Why your iPhone photos will not open on Windows.",
    "date": "2026-09-29",
    "dateLabel": "September 29, 2026",
    "readMinutes": 9,
    "category": "Explainers",
    "emoji": "📱",
    "keywords": [
      "what is heic",
      "heic format",
      "heic vs jpg",
      "open heic on windows",
      "convert heic"
    ],
    "blocks": [
      {
        "p": "HEIC is Apple's default photo format since iOS 11. It is genuinely superior to JPG — roughly half the file size at equivalent quality — and it is also the reason a photo you emailed will not open on your colleague's Windows machine."
      },
      {
        "h2": "Why it is better"
      },
      {
        "ul": [
          "**Half the size.** Modern video-derived compression is far more efficient than JPG's 1992 design.",
          "**16-bit colour.** JPG is limited to 8 bits per channel, which shows as banding in gradients.",
          "**Transparency,** which JPG cannot do at all.",
          "**Multiple images in one file** — how Live Photos and burst sequences are stored.",
          "**Non-destructive edits** stored alongside the original."
        ]
      },
      {
        "h2": "Why it is a problem"
      },
      {
        "p": "Support outside Apple is patchy. Windows needs a codec that is not always installed. Many websites, upload forms and older applications reject it outright. Android support is inconsistent. Print shops frequently cannot process it."
      },
      {
        "p": "The practical result: HEIC is excellent for storage on your own device and unreliable for anything you send to someone else."
      },
      {
        "h2": "What to do"
      },
      {
        "ol": [
          "**Keep HEIC, convert when sharing.** Best storage efficiency. Convert with [HEIC to JPG](/tools/heic-to-jpg) or [HEIC to PNG](/tools/heic-to-png) when a file leaves your phone.",
          "**Switch the camera to JPG.** On iPhone: Settings, Camera, Formats, Most Compatible. Files roughly double in size, and everything just works."
        ]
      },
      {
        "note": "iOS often converts automatically when you share by email or AirDrop to a non-Apple device — which is why the problem seems intermittent. Transfers that copy raw files, like plugging into a PC, do not convert."
      },
      {
        "h2": "What happens when you share from an iPhone"
      },
      {
        "p": "The reason HEIC problems feel random is that iOS converts on some paths and not others, without telling you which."
      },
      {
        "table": {
          "headers": [
            "How you share",
            "Result"
          ],
          "rows": [
            [
              "Mail app to a non-Apple recipient",
              "Usually converted to JPG"
            ],
            [
              "AirDrop to a Mac",
              "Stays HEIC"
            ],
            [
              "Messages to Android",
              "Usually converted"
            ],
            [
              "Upload to a website",
              "Depends on the site; often sent as HEIC"
            ],
            [
              "Plugging into a Windows PC",
              "Stays HEIC"
            ],
            [
              "Third-party cloud sync",
              "Usually stays HEIC"
            ],
            [
              "WhatsApp and similar",
              "Converted, and heavily recompressed"
            ]
          ]
        }
      },
      {
        "p": "So the photo you emailed opened fine and the one you copied off the phone by cable did not — same picture, different path, different format. Knowing this makes the behaviour predictable rather than mysterious."
      },
      {
        "h2": "The 'Most Compatible' setting, and its cost"
      },
      {
        "p": "On iPhone, Settings → Camera → Formats offers 'High Efficiency' (HEIC) and 'Most Compatible' (JPG). Switching to the latter ends the problem permanently."
      },
      {
        "p": "The cost is storage: roughly double per photo. On a 128GB phone holding a few thousand photos that is meaningful; on a 512GB phone it rarely is. It also loses the 16-bit colour depth, which matters for heavy editing and not at all for ordinary photography."
      },
      {
        "p": "The pragmatic answer for most people: if you regularly send photos to Windows users, upload to forms, or hand files to print shops, switch it. If your photos mostly stay in Apple's ecosystem, keep HEIC and convert the occasional file that needs to leave."
      },
      {
        "h2": "Converting without losing more than necessary"
      },
      {
        "p": "HEIC to JPG is a lossy-to-lossy conversion, so it costs one generation. Two things reduce that cost:"
      },
      {
        "ul": [
          "**Convert from the original,** not from a copy that has already been through a messaging app. WhatsApp and similar recompress aggressively, and converting their output stacks the damage.",
          "**Choose a high quality setting.** [HEIC to JPG](/tools/heic-to-jpg) at high quality is visually indistinguishable from the source for ordinary photographs.",
          "**Use [HEIC to PNG](/tools/heic-to-png) if the image will be edited further,** since PNG is lossless and will not degrade across further saves. The file is much larger, which is the trade."
        ]
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Does converting HEIC to JPG lose quality?",
            "a": "Slightly, since JPG is less efficient — but at a high quality setting the difference is imperceptible."
          },
          {
            "q": "Why do some photos open on Windows and others not?",
            "a": "iOS converts on some share paths and not others. Direct file copies stay HEIC."
          },
          {
            "q": "Should I switch my iPhone to JPG?",
            "a": "If you frequently share to non-Apple devices, yes. The storage cost is worth the reduced friction."
          },
          {
            "q": "What is HEIF versus HEIC?",
            "a": "HEIF is the container; HEIC is HEIF using HEVC compression. In practice the terms are used interchangeably."
          }
        ]
      }
    ]
  },
  {
    "slug": "what-is-webp-format",
    "title": "WebP: Smaller Images for the Web, With Caveats",
    "metaTitle": "What Is WebP? Format Explained and When to Use It | ThePDFNinja",
    "metaDescription": "WebP beats both JPG and PNG on size, supports transparency and animation, and still trips up older software.",
    "excerpt": "Google's format is genuinely smaller than JPG and PNG. Here is where it belongs and where it causes trouble.",
    "date": "2026-10-07",
    "dateLabel": "October 7, 2026",
    "readMinutes": 9,
    "category": "Explainers",
    "emoji": "🌐",
    "keywords": [
      "what is webp",
      "webp format",
      "webp vs jpg",
      "convert webp",
      "webp file open"
    ],
    "blocks": [
      {
        "p": "WebP was built for one job: making web pages load faster. It typically produces files 25–35% smaller than JPG at comparable quality, and substantially smaller than PNG for graphics. Browser support is now essentially universal."
      },
      {
        "h2": "What it does that others do not"
      },
      {
        "table": {
          "headers": [
            "Feature",
            "WebP",
            "JPG",
            "PNG"
          ],
          "rows": [
            [
              "Lossy compression",
              "Yes",
              "Yes",
              "No"
            ],
            [
              "Lossless compression",
              "Yes",
              "No",
              "Yes"
            ],
            [
              "Transparency",
              "Yes",
              "No",
              "Yes"
            ],
            [
              "Animation",
              "Yes",
              "No",
              "No"
            ],
            [
              "Universal software support",
              "No",
              "Yes",
              "Yes"
            ]
          ]
        }
      },
      {
        "p": "That last row is the whole story. WebP wins on every technical measure and loses on the one that often matters most — whether the recipient can open it."
      },
      {
        "h2": "Where it belongs"
      },
      {
        "ul": [
          "**Images on your own website.** Real, measurable load-time improvement.",
          "**Anywhere you control the viewer,** such as an app you build.",
          "**Replacing animated GIFs,** where the size saving is dramatic."
        ]
      },
      {
        "h2": "Where it does not"
      },
      {
        "ul": [
          "**Files you email.** Many recipients cannot open them without effort.",
          "**Uploads to forms and portals.** Frequently rejected; most specify JPG or PNG.",
          "**Print workflows.** Support is inconsistent.",
          "**Archival storage.** JPG and PNG will be readable in thirty years; that is less certain for WebP."
        ]
      },
      {
        "h2": "Converting"
      },
      {
        "p": "You most often meet WebP by saving an image from a website and finding nothing will open it. [WebP to JPG](/tools/webp-to-jpg) for photographs, [WebP to PNG](/tools/webp-to-png) where transparency matters. Going the other way, [JPG to WebP](/tools/jpg-to-webp) and [PNG to WebP](/tools/png-to-webp)."
      },
      {
        "note": "Converting WebP to PNG produces a lossless copy of what remains, but does not recover detail already discarded if the WebP was lossy."
      },
      {
        "h2": "Saving an image that turns out to be WebP"
      },
      {
        "p": "The commonest encounter with WebP is involuntary: you right-click an image on a website, save it, and end up with a file nothing on your computer will open."
      },
      {
        "p": "This happens because many sites now serve WebP to browsers that support it, transparently. The image displayed perfectly in your browser — which supports WebP — and the file you saved is that same WebP."
      },
      {
        "p": "Options, roughly in order of convenience: convert it with [WebP to JPG](/tools/webp-to-jpg) or [WebP to PNG](/tools/webp-to-png); or take a screenshot of the displayed image, which costs quality but sidesteps the format entirely; or check whether the site offers a download link, which often serves a conventional format."
      },
      {
        "h2": "Choosing between the two conversion targets"
      },
      {
        "p": "Which you convert to depends on what the WebP contains, and the rule mirrors the JPG-versus-PNG decision."
      },
      {
        "ul": [
          "**A photograph → JPG.** WebP was almost certainly lossy already, so JPG costs one further generation, which at high quality is imperceptible.",
          "**A logo, icon or graphic → PNG.** These are usually lossless WebP, and PNG preserves them exactly. Converting to JPG would introduce fringing around the edges.",
          "**Anything with transparency → PNG.** JPG cannot store it, and the transparent area will be filled, usually with white.",
          "**An animated WebP → neither.** Both are single-frame formats. You would need GIF or a video format, and the result will be larger."
        ]
      },
      {
        "h2": "Should you use WebP on your own site?"
      },
      {
        "p": "If you publish images on the web, the case is strong. Files are typically 25–35% smaller than equivalent JPG, browser support is effectively universal now, and page load time is a ranking factor as well as a user experience one."
      },
      {
        "p": "Two caveats worth planning for. **Provide a fallback** for the small remainder of traffic on old software — the `<picture>` element handles this cleanly. And **keep your originals** in a conventional format: WebP is a delivery format, and you do not want your only copy of an image in a format that is awkward to hand to a print shop or a client."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why did my downloaded image save as .webp?",
            "a": "The site served WebP for speed, and your browser saved what it received."
          },
          {
            "q": "Is WebP better than JPG?",
            "a": "Technically yes — smaller at the same quality. Practically, JPG opens everywhere and WebP does not."
          },
          {
            "q": "Can I upload WebP to forms?",
            "a": "Often not. Convert to JPG first."
          },
          {
            "q": "Does converting WebP to JPG lose quality?",
            "a": "A little, since it is re-compressed. At high quality it is not noticeable."
          }
        ]
      }
    ]
  },
  {
    "slug": "tiff-format-explained",
    "title": "TIFF: The Format Archives and Print Shops Still Insist On",
    "metaTitle": "What Is a TIFF File? Format Explained | ThePDFNinja",
    "metaDescription": "TIFF is large, lossless and supports multiple pages. Why archives and printers still require it, and how to work with it.",
    "excerpt": "Enormous files nobody emails, yet still mandatory in archiving, printing and document management.",
    "date": "2026-10-15",
    "dateLabel": "October 15, 2026",
    "readMinutes": 9,
    "category": "Explainers",
    "emoji": "🗂️",
    "keywords": [
      "what is tiff",
      "tiff format",
      "tiff vs pdf",
      "convert tiff to jpg",
      "multipage tiff"
    ],
    "blocks": [
      {
        "p": "TIFF dates to 1986 and remains the required format in archiving, professional printing and much document management. It is large, awkward to share, and not going away — because it does two things nothing else does as reliably."
      },
      {
        "h2": "Why it persists"
      },
      {
        "ul": [
          "**Truly lossless.** Every pixel preserved exactly, every save, forever. For archival masters that is the entire point.",
          "**Multi-page.** A single TIFF can hold hundreds of pages, which is why fax and document-scanning systems standardised on it.",
          "**Deep colour and CMYK,** which print workflows depend on and JPG cannot express.",
          "**Extremely stable.** Files written in 1990 open today. Few formats can claim that."
        ]
      },
      {
        "h2": "The cost"
      },
      {
        "p": "A single uncompressed A4 page at 300 DPI runs to roughly 25MB. A hundred-page document is measured in gigabytes. TIFF is a storage format, not a sharing format, and treating it as the latter is where people get into trouble."
      },
      {
        "h2": "Working with it"
      },
      {
        "ul": [
          "**Received a TIFF you cannot open?** [TIFF to JPG](/tools/tiff-to-jpg) produces something shareable. Multi-page TIFFs become one image per page.",
          "**Need to send it?** Convert, or produce a [PDF](/tools/jpg-to-pdf) — PDF also handles multiple pages and compresses far better.",
          "**Producing an archival master?** Keep the TIFF and distribute a PDF copy. That is standard practice.",
          "**Need it searchable?** Convert to PDF and run [OCR](/tools/ocr)."
        ]
      },
      {
        "note": "Never convert a TIFF master to JPG and delete the original. The whole reason for the TIFF was that it was lossless; discarding it defeats the purpose."
      },
      {
        "h2": "TIFF versus PDF for documents"
      },
      {
        "p": "For scanned documents PDF has largely won: it compresses better, carries a searchable text layer, and opens everywhere. TIFF retains an edge only where absolute pixel fidelity is required by policy. [PDF to TIFF](/tools/pdf-to-tiff) exists for when someone insists otherwise."
      },
      {
        "h2": "Why TIFF files vary so much in size"
      },
      {
        "p": "Two TIFFs of the same page can differ by a factor of ten, which surprises people who assume the format is simply large. TIFF is a container that supports several compression schemes, and which one was used dominates the file size."
      },
      {
        "ul": [
          "**Uncompressed.** Every pixel stored raw. An A4 page at 300 DPI in colour is roughly 25MB. This is what people mean when they call TIFF enormous.",
          "**LZW.** Lossless, general purpose, typically halves the size. Widely supported.",
          "**Deflate (ZIP).** Lossless, usually slightly better than LZW on photographic content.",
          "**CCITT Group 4.** Lossless, bitonal only. Extremely efficient for black-and-white text — a scanned page can be under 100KB. This is what fax and document management systems use.",
          "**JPEG-in-TIFF.** Lossy, which somewhat defeats the point of choosing TIFF, but occasionally used for photographic archives where size matters."
        ]
      },
      {
        "p": "If you are producing TIFFs, choosing Group 4 for bitonal document scans and LZW or Deflate for everything else gets you the format's benefits without its reputation."
      },
      {
        "h2": "Multi-page TIFF and its awkwardness"
      },
      {
        "p": "TIFF's multi-page capability is genuinely useful and unevenly supported. Windows Photo Viewer handles it; many image editors open only the first page silently; some web browsers will not open TIFF at all."
      },
      {
        "p": "That inconsistency is the practical argument for converting document TIFFs to PDF. [TIFF to JPG](/tools/tiff-to-jpg) gives you one image per page, which you can then [combine into a PDF](/tools/jpg-to-pdf) — or convert directly if your workflow supports it. The result opens everywhere, compresses better, and can carry a searchable text layer after [OCR](/tools/ocr)."
      },
      {
        "h2": "When you genuinely should keep TIFF"
      },
      {
        "p": "Despite everything above, there are cases where TIFF is correct and converting would be a mistake:"
      },
      {
        "ul": [
          "**Archival masters** where policy or professional standards require lossless pixel-exact preservation.",
          "**Print production** using CMYK colour and spot channels, which PDF handles but many conversion paths do not preserve.",
          "**Scientific and medical imaging** where every pixel value is data rather than a picture.",
          "**Where a downstream system requires it,** which is the most common reason in practice — document management platforms and some government systems still specify TIFF."
        ]
      },
      {
        "p": "In all of those, keep the TIFF as the master and distribute a PDF derived from it. That gives you preservation and usability without choosing between them."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why is my TIFF so large?",
            "a": "It is lossless and often uncompressed. That is the trade for perfect fidelity."
          },
          {
            "q": "Can TIFF hold multiple pages?",
            "a": "Yes — one of its distinguishing features, and why scanners have long used it."
          },
          {
            "q": "Should I archive in TIFF or PDF?",
            "a": "TIFF for pixel-perfect image masters; PDF/A for documents where text and searchability matter."
          },
          {
            "q": "Why will my TIFF not open?",
            "a": "TIFF has many variants and not all software reads all of them. Convert to JPG or PDF."
          }
        ]
      }
    ]
  },
  {
    "slug": "epub-format-explained",
    "title": "EPUB Explained: Why Ebooks Reflow and PDFs Do Not",
    "metaTitle": "What Is EPUB? Ebook Format Explained | ThePDFNinja",
    "metaDescription": "EPUB reflows text to fit any screen, which is exactly what a PDF refuses to do. When to convert between them.",
    "excerpt": "The difference between a format that adapts to your screen and one that insists on a fixed page.",
    "date": "2026-10-23",
    "dateLabel": "October 23, 2026",
    "readMinutes": 9,
    "category": "Explainers",
    "emoji": "📖",
    "keywords": [
      "what is epub",
      "epub format",
      "epub vs pdf",
      "convert epub to pdf",
      "ebook format"
    ],
    "blocks": [
      {
        "p": "EPUB and PDF solve opposite problems. PDF guarantees a page looks identical everywhere. EPUB abandons the fixed page entirely so text can reflow to whatever screen it lands on. Neither is better; they are for different things."
      },
      {
        "h2": "How EPUB works"
      },
      {
        "p": "An EPUB is essentially a small website in a zip file — HTML for content, CSS for styling, plus metadata and a table of contents. The reader lays it out at read time according to your chosen font, size and screen width."
      },
      {
        "p": "That is why you can double the text size on an e-reader and get more pages rather than a magnified fragment of one. There are no fixed pages to magnify."
      },
      {
        "h2": "Which to use"
      },
      {
        "table": {
          "headers": [
            "",
            "EPUB",
            "PDF"
          ],
          "rows": [
            [
              "Text reflows",
              "Yes",
              "No"
            ],
            [
              "Looks identical everywhere",
              "No",
              "Yes"
            ],
            [
              "Good on a phone",
              "Yes",
              "Poor"
            ],
            [
              "Precise layout preserved",
              "No",
              "Yes"
            ],
            [
              "Right for",
              "Novels, long prose",
              "Forms, reports, anything designed"
            ]
          ]
        }
      },
      {
        "h2": "Converting EPUB to PDF"
      },
      {
        "p": "Reasonable when you need to print, annotate on paper, or submit a fixed-layout document. [EPUB to PDF](/tools/epub-to-pdf) produces a paginated version at a chosen page size."
      },
      {
        "p": "Understand what you lose: the reader can no longer adjust text size meaningfully, and pagination is fixed at whatever the conversion chose. For reading on a phone that is a downgrade."
      },
      {
        "note": "Converting the other way works poorly for anything with real layout. A PDF stores positioned glyphs, not structure, so reconstructing flowing chapters is guesswork. Novels convert acceptably; textbooks do not."
      },
      {
        "h2": "What is actually inside an EPUB"
      },
      {
        "p": "An EPUB is a ZIP archive with a defined structure, and you can inspect one by renaming it to .zip and opening it. Inside you will find:"
      },
      {
        "ul": [
          "**XHTML files**, usually one per chapter, holding the actual text.",
          "**CSS**, defining typography and layout suggestions the reader may or may not honour.",
          "**A package file** listing the contents, the reading order, and metadata like title and author.",
          "**A navigation document** — the table of contents.",
          "**Images and fonts**, if the book uses them."
        ]
      },
      {
        "p": "That is why EPUB reflows so naturally: it is fundamentally a small website, and web content has always adapted to the viewport. It is also why converting a PDF to EPUB works badly — a PDF has no chapters, no headings, no structure to map onto that skeleton."
      },
      {
        "h2": "Choosing a page size when converting to PDF"
      },
      {
        "p": "Converting an EPUB to PDF forces a decision the EPUB deliberately avoided: what size is a page? The choice affects the result more than people expect."
      },
      {
        "ul": [
          "**A4 or Letter** for printing. Expect long lines, which are harder to read than a book's typical measure. Consider generous margins to shorten them.",
          "**A5** approximates a paperback and reads considerably better on screen and in print.",
          "**A device-shaped page** — roughly 6×9 inches — suits reading on a tablet, which is often the actual destination."
        ]
      },
      {
        "p": "[EPUB to PDF](/tools/epub-to-pdf) will pick a sensible default, but if the output is destined for a specific use it is worth thinking about. A novel converted to A4 with full-width text is markedly less pleasant to read than the same novel at A5."
      },
      {
        "h2": "DRM, and why some files will not convert"
      },
      {
        "p": "Books purchased from major stores are frequently protected by DRM, which encrypts the content and ties it to an account or device. A DRM-protected EPUB is not readable by any tool other than the authorised reader, and no conversion tool will open it."
      },
      {
        "p": "This is a licensing arrangement rather than a technical obstacle, and it is worth understanding rather than fighting. Books from sources that sell DRM-free files, public domain texts, and documents you produce yourself convert without difficulty. If a purchased book will not convert, DRM is almost always why."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why does my ebook have no page numbers?",
            "a": "There are no fixed pages. Position depends on your font size and screen, so readers show percentages instead."
          },
          {
            "q": "Can I read EPUB on a computer?",
            "a": "Yes, with a reader application or browser extension. Support is less universal than PDF."
          },
          {
            "q": "Is EPUB better than PDF?",
            "a": "For long prose read on screens, considerably. For anything where layout matters, no."
          },
          {
            "q": "Will converting EPUB to PDF keep the table of contents?",
            "a": "Usually as bookmarks, depending on the source file's structure."
          }
        ]
      }
    ]
  },
  {
    "slug": "svg-format-explained",
    "title": "SVG Explained: The Image Format That Is Not Made of Pixels",
    "metaTitle": "What Is SVG? Vector Graphics Explained | ThePDFNinja",
    "metaDescription": "SVG stores drawing instructions rather than pixels, so it is sharp at any size. Where that helps, and why forms reject it.",
    "excerpt": "Perfectly sharp at any scale, tiny for logos, and rejected by half the upload forms on the internet.",
    "date": "2026-11-02",
    "dateLabel": "November 2, 2026",
    "readMinutes": 10,
    "category": "Explainers",
    "emoji": "📐",
    "keywords": [
      "what is svg",
      "svg format",
      "vector vs raster",
      "convert svg to png",
      "svg file open"
    ],
    "blocks": [
      {
        "p": "SVG is fundamentally different from every other image format in common use. It does not store pixels at all — it stores instructions for drawing shapes."
      },
      {
        "h2": "Vector versus raster"
      },
      {
        "p": "A JPG or PNG is a grid of coloured dots. Enlarge it and you enlarge the dots, which is why zooming into a photo produces blur. An SVG is a description: draw a circle here, this radius, this fill. The renderer redraws it at whatever size is requested, so it is perfectly sharp at any scale."
      },
      {
        "p": "That makes SVG ideal for logos, icons and diagrams, and useless for photographs — you cannot meaningfully describe a photograph as a few hundred shapes."
      },
      {
        "h2": "Practical consequences"
      },
      {
        "ul": [
          "**Infinite scalability.** One logo file serves a favicon and a billboard.",
          "**Tiny files** for simple graphics. A logo can be a couple of kilobytes.",
          "**Editable.** SVG is text. You can open one in an editor and change a colour by hand.",
          "**Searchable text.** Text in an SVG is real text, not pixels.",
          "**Inconsistent support** outside browsers. Many upload forms and older applications reject it."
        ]
      },
      {
        "h2": "When you need to convert"
      },
      {
        "p": "Usually because something will not accept SVG. [SVG to PNG](/tools/svg-to-png) rasterises at a size you choose — and choosing matters, because once rasterised the scalability is gone. Export at the largest size you might need, or at 2× the display size for high-density screens."
      },
      {
        "note": "Converting SVG to PNG is one-way in practical terms. Automated tracing back to vectors produces an approximation, not your original. Keep the SVG."
      },
      {
        "h2": "A security note"
      },
      {
        "p": "SVG can contain scripts, because it is an XML document rather than a passive image. That is why many upload forms reject it outright, and why you should not open SVGs from untrusted sources in a browser. Converting to PNG removes this entirely."
      },
      {
        "h2": "Choosing an export size"
      },
      {
        "p": "Rasterising an SVG means committing to a resolution, and the decision is irreversible in practice."
      },
      {
        "p": "Export at **at least twice the intended display size**. High-density screens — most phones and many laptops — render two or more physical pixels per logical pixel, so an image exported at exactly its display size looks soft on them."
      },
      {
        "p": "For print, work from the physical size: 300 DPI means a graphic printed 50mm wide needs roughly 590 pixels. Under-exporting for print is the more expensive mistake, because it is discovered after the run."
      },
      {
        "p": "[SVG to PNG](/tools/svg-to-png) takes a scale or explicit dimensions. Keep the SVG afterwards — it is the master, and you can always produce another raster from it."
      },
      {
        "h2": "Why SVG uploads are so often blocked"
      },
      {
        "p": "An SVG is an XML document, not a passive image, and the specification permits embedded scripts and external references. That makes it a genuine attack surface: an SVG served from a site can execute in the context of that site."
      },
      {
        "p": "Consequently many upload forms reject SVG outright, and those that accept it usually sanitise it. This is not excessive caution — it is a well-understood class of vulnerability."
      },
      {
        "p": "The practical implications: convert to PNG before uploading anywhere that will accept it; do not open SVGs from untrusted sources in a browser; and if you accept SVG uploads on a site you run, sanitise them properly."
      },
      {
        "h2": "When SVG is genuinely the wrong choice"
      },
      {
        "ul": [
          "**Photographs.** Tracing produces an enormous file that looks like a poster reduction of your image.",
          "**Highly detailed illustrations.** Past a few thousand paths, an SVG can exceed the equivalent raster in both size and render time.",
          "**Anything going to a system that does not accept it.** Elegance is no help if it will not upload.",
          "**Content with text you do not want extracted,** since text in an SVG is real, selectable text."
        ]
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why will my SVG not upload?",
            "a": "Many systems reject it because SVG can carry scripts. Convert to PNG."
          },
          {
            "q": "Can I convert a photo to SVG?",
            "a": "Not usefully. Tracing produces a huge file that looks like a poster version of your photo."
          },
          {
            "q": "What size should I export a PNG at?",
            "a": "At least twice the display size, for high-density screens."
          },
          {
            "q": "Why is my SVG bigger than a PNG?",
            "a": "Complex illustrations with thousands of paths can exceed a simple raster. SVG wins on simple graphics, not detailed ones."
          }
        ]
      }
    ]
  },
  {
    "slug": "csv-vs-excel-explained",
    "title": "CSV vs Excel: Why Your Data Keeps Getting Mangled",
    "metaTitle": "CSV vs Excel Files — Differences Explained | ThePDFNinja",
    "metaDescription": "One is plain text, one is a document. Why leading zeros vanish, dates flip and account numbers turn into scientific notation.",
    "excerpt": "Both hold tables. Only one of them remembers that 007 is not the number seven.",
    "date": "2026-11-10",
    "dateLabel": "November 10, 2026",
    "readMinutes": 9,
    "category": "Explainers",
    "emoji": "📊",
    "keywords": [
      "csv vs excel",
      "what is csv",
      "csv file problems",
      "leading zeros csv",
      "convert csv to pdf"
    ],
    "blocks": [
      {
        "p": "CSV and Excel files both hold tabular data and are routinely confused. The difference is that one is a plain text format and the other is a document, and that distinction explains every problem people have moving between them."
      },
      {
        "h2": "What each actually is"
      },
      {
        "p": "A **CSV** is a text file where values are separated by commas and rows by line breaks. That is the entire specification. No formatting, no formulas, no multiple sheets, no data types — everything is text."
      },
      {
        "p": "An **Excel file** is a compressed archive of XML describing sheets, cell types, formulas, formatting, charts and more. It is a document, in the way a Word file is."
      },
      {
        "h2": "What you lose converting to CSV"
      },
      {
        "ul": [
          "**Formulas.** Only the computed values survive.",
          "**Formatting.** Colours, fonts, column widths, conditional rules — all gone.",
          "**Multiple sheets.** CSV holds exactly one table.",
          "**Data types.** A date becomes whatever text it looked like, which is where most CSV pain originates.",
          "**Charts and images.** Not representable at all."
        ]
      },
      {
        "h2": "The classic CSV problems"
      },
      {
        "ul": [
          "**Leading zeros vanish.** `007` becomes `7` when a spreadsheet decides it is a number.",
          "**Dates reinterpreted.** `03/04` is March 4th or April 3rd depending on locale, and the file does not say which.",
          "**Long numbers become scientific notation.** Account numbers and IDs are frequent casualties.",
          "**Commas inside values** break parsing unless properly quoted.",
          "**Encoding.** Non-English characters turn to mojibake when the reader assumes the wrong encoding."
        ]
      },
      {
        "note": "For identifiers — account numbers, product codes, anything with leading zeros — CSV is a hazard. The format cannot express 'this is text, not a number', so every reader guesses."
      },
      {
        "h2": "Where PDF comes in"
      },
      {
        "p": "For distributing tabular data that must not be altered, [CSV to PDF](/tools/csv-to-pdf) or [Excel to PDF](/tools/excel-to-pdf) produces a fixed, readable document. Going the other way, [PDF to Excel](/tools/pdf-to-excel) extracts tables back into a workbook — well where borders exist, less well where they do not."
      },
      {
        "h2": "Opening a CSV without letting the spreadsheet mangle it"
      },
      {
        "p": "Double-clicking a CSV is where most damage happens, because the spreadsheet applies its own guesses about every column with no chance to intervene."
      },
      {
        "p": "The fix is to import rather than open. In Excel that is Data → From Text/CSV; in Google Sheets it is File → Import with the conversion option turned off; LibreOffice shows an import dialog automatically."
      },
      {
        "p": "In that dialog you can set individual columns to **Text**, which stops the spreadsheet interpreting them. Do this for anything that is an identifier rather than a quantity:"
      },
      {
        "ul": [
          "Account numbers, invoice numbers, product codes.",
          "Anything with leading zeros — postcodes, some phone numbers, employee IDs.",
          "Long numeric strings that would become scientific notation.",
          "Values that look like dates but are not, such as `3-4` meaning a range.",
          "Version numbers like `1.10`, which becomes `1.1` if treated as a number."
        ]
      },
      {
        "h2": "The date problem specifically"
      },
      {
        "p": "Dates deserve their own warning because the failure is silent and the data looks plausible afterwards."
      },
      {
        "p": "A CSV containing `03/04/2026` does not record whether that is 3 April or 4 March. The spreadsheet decides based on the machine's locale. Open the same file in London and New York and you get different dates, with no error and no indication that anything happened."
      },
      {
        "p": "If you control the export, use ISO format — `2026-04-03` — which is unambiguous, sorts correctly as text, and is understood everywhere. If you do not control it, find out the source convention before you rely on any date column."
      },
      {
        "h2": "Encoding, and how to recognise the failure"
      },
      {
        "p": "If accented characters, currency symbols or non-Latin scripts appear as sequences like `Ã©` or `â€™`, the file was written in one encoding and read in another. UTF-8 written and interpreted as Latin-1 is the classic case."
      },
      {
        "p": "The fix is to reopen the file specifying UTF-8 in the import dialog. The data is not damaged — it was only misinterpreted — so nothing is lost provided you have not saved over it in the wrong encoding."
      },
      {
        "p": "When exporting, choose UTF-8 unless a specific system requires otherwise. Some older tools default to a regional encoding, which works locally and breaks the moment the file crosses a border."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why did my leading zeros disappear?",
            "a": "CSV cannot mark a value as text, so the spreadsheet treated it as a number. Import with the column set to text."
          },
          {
            "q": "Which should I send someone?",
            "a": "Excel to preserve everything; CSV for maximum compatibility with other software; PDF if it must not be edited."
          },
          {
            "q": "Why are my accented characters broken?",
            "a": "An encoding mismatch. Save and open as UTF-8."
          },
          {
            "q": "Can CSV hold multiple sheets?",
            "a": "No. One file, one table."
          }
        ]
      }
    ]
  },
  {
    "slug": "linearize-pdf-fast-web-view",
    "title": "Why Your PDF Is Slow to Open Online (and the One-Click Fix)",
    "metaTitle": "Linearize PDF for Fast Web View | ThePDFNinja",
    "metaDescription": "Linearisation reorders a PDF so page one displays before the file finishes downloading. Who needs it and why it silently disappears.",
    "excerpt": "Instant on your machine, thirty seconds on theirs. Usually structure, not network.",
    "date": "2026-11-18",
    "dateLabel": "November 18, 2026",
    "readMinutes": 8,
    "category": "Explainers",
    "emoji": "⚡",
    "keywords": [
      "linearize pdf",
      "fast web view",
      "pdf slow to load",
      "optimize pdf for web",
      "pdf loading slowly"
    ],
    "blocks": [
      {
        "p": "A PDF that opens instantly on your machine and takes thirty seconds on someone else's is usually not a network problem. It is how the file is structured."
      },
      {
        "h2": "Linearisation, or 'fast web view'"
      },
      {
        "p": "A normal PDF stores its index at the end, so a reader must download the whole file before displaying anything. A **linearised** PDF reorganises itself so the first page's data comes first, along with a hint table describing where everything else lives."
      },
      {
        "p": "The practical effect: page one appears as soon as its data arrives, and subsequent pages load on demand. For a 200-page document served over a slow connection, that is the difference between instant and unusable."
      },
      {
        "h2": "When it matters"
      },
      {
        "ul": [
          "**Documents served on a website.** Anything a visitor opens in a browser.",
          "**Large documents** — the benefit scales with size.",
          "**Users on slow or mobile connections,** where whole-file download is painful.",
          "**Anything embedded in a page** rather than downloaded."
        ]
      },
      {
        "p": "It makes no difference to a file opened from local disk, which is why the problem is invisible to whoever produced it."
      },
      {
        "h2": "Doing it"
      },
      {
        "p": "[Linearize PDF](/tools/linearize-pdf) restructures the file. The content is unchanged and the size barely moves — it is a reordering, not a compression."
      },
      {
        "note": "Linearise last. Any subsequent edit rewrites the file and destroys the linearisation, usually without telling you."
      },
      {
        "h2": "Checking"
      },
      {
        "p": "Most readers show 'Fast Web View: Yes' in document properties. If you publish PDFs regularly and have never checked this, it is worth looking — it is a free improvement that most people never make."
      },
      {
        "h2": "What the reader does differently"
      },
      {
        "p": "The mechanism is worth understanding because it explains why the benefit is invisible locally and dramatic remotely."
      },
      {
        "p": "Opening a normal PDF, a reader must first locate the cross-reference table. That table sits at the **end** of the file, so over a network the reader either downloads the whole file or issues a range request for the tail, then further requests for whatever objects the first page needs — which may be scattered anywhere in the file. Several round trips before a single pixel appears."
      },
      {
        "p": "A linearised PDF is reorganised so that everything page one needs sits contiguously at the front, preceded by a hint table describing where every other page's objects live. The reader fetches the opening block, renders page one immediately, and then requests exactly the bytes it needs for page seven when you jump there."
      },
      {
        "p": "On a local disk, seeking to the end of a file costs nothing, which is why the difference is undetectable on the machine that produced the document — and why nobody notices the problem until a visitor complains."
      },
      {
        "h2": "When the benefit is largest"
      },
      {
        "ul": [
          "**Long documents.** A 300-page report is where the difference between 'first page now' and 'everything first' is most stark.",
          "**Documents embedded in a page** rather than downloaded, where the visitor is waiting on screen.",
          "**Mobile audiences,** on connections where a 20MB download is slow and expensive.",
          "**Documents people sample** rather than read — catalogues, manuals, reference material where the reader jumps to one section."
        ]
      },
      {
        "p": "Conversely it makes no difference at all to a file that will be downloaded and opened locally, which is most email attachments. Linearising your invoices achieves nothing."
      },
      {
        "h2": "Keeping it once you have it"
      },
      {
        "p": "Linearisation is fragile in one specific way: it describes a byte layout, and any tool that rewrites the file destroys it. Adding a page, filling a form field, re-saving in a reader — all of these can silently produce a non-linearised file that looks identical."
      },
      {
        "p": "So make it the final operation. Compress first, then [linearise](/tools/linearize-pdf), then upload. If you edit the document later, linearise again before republishing, and check document properties to confirm 'Fast Web View' still reads Yes."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Does linearising reduce file size?",
            "a": "No. It reorders the file. Compress separately if you need it smaller."
          },
          {
            "q": "Will it change how the document looks?",
            "a": "Not at all. Content is identical."
          },
          {
            "q": "Does it help for downloaded files?",
            "a": "No. Only for progressive display over a network."
          },
          {
            "q": "Why did my linearisation disappear?",
            "a": "Something re-saved the file. Linearise as the final step."
          }
        ]
      }
    ]
  },
  {
    "slug": "markdown-to-pdf-guide",
    "title": "Markdown Explained, and Converting It to PDF",
    "metaTitle": "Markdown to PDF — Format Explained | ThePDFNinja",
    "metaDescription": "Why Markdown became the default for technical writing, what survives conversion to PDF, and what to check before distributing.",
    "excerpt": "Plain text that stays readable as plain text. Here is what happens when you turn it into a document.",
    "date": "2026-11-26",
    "dateLabel": "November 26, 2026",
    "readMinutes": 8,
    "category": "Explainers",
    "emoji": "📄",
    "keywords": [
      "markdown to pdf",
      "what is markdown",
      "md to pdf converter",
      "markdown format",
      "convert md file"
    ],
    "blocks": [
      {
        "p": "Markdown has quietly become the default format for technical writing, notes and documentation. Converting it to PDF is how it reaches people who do not use it."
      },
      {
        "h2": "What Markdown is"
      },
      {
        "p": "Plain text with light punctuation conventions: `#` for a heading, `**` for bold, `-` for a list item. That is essentially the whole format. It is readable as raw text, versionable in Git, and editable in anything."
      },
      {
        "p": "Its value is that the source stays legible. A Word file is unreadable without Word; a Markdown file is perfectly readable in Notepad."
      },
      {
        "h2": "Why convert to PDF"
      },
      {
        "ul": [
          "**Distribution.** Recipients get consistent formatting without needing a Markdown renderer.",
          "**Printing.** Markdown has no page concept; PDF does.",
          "**Submission.** Forms and systems that require PDF.",
          "**Archiving.** A rendered PDF preserves how the document was meant to look."
        ]
      },
      {
        "h2": "What survives conversion"
      },
      {
        "p": "[Markdown to PDF](/tools/md-to-pdf) renders headings, emphasis, lists, code blocks, links, tables and block quotes. Things to check:"
      },
      {
        "ul": [
          "**Images** must be reachable at conversion time — relative paths to local files may not resolve.",
          "**Wide tables** can overflow the page. Markdown has no column widths.",
          "**Long code lines** may clip rather than wrap.",
          "**Extended syntax** — footnotes, task lists, diagrams — varies by renderer."
        ]
      },
      {
        "note": "Keep the Markdown as your source of truth and treat the PDF as an export. Editing the PDF and losing the Markdown throws away everything that made the format worth using."
      },
      {
        "h2": "The syntax that covers most writing"
      },
      {
        "p": "Markdown's whole appeal is that the useful subset is small enough to hold in your head. Almost everything people write uses these:"
      },
      {
        "table": {
          "headers": [
            "You type",
            "You get"
          ],
          "rows": [
            [
              "`# Heading`",
              "A top-level heading; `##` for the next level down"
            ],
            [
              "`**bold**`",
              "Bold text"
            ],
            [
              "`*italic*`",
              "Italic text"
            ],
            [
              "`- item`",
              "A bullet list"
            ],
            [
              "`1. item`",
              "A numbered list"
            ],
            [
              "`[text](url)`",
              "A link"
            ],
            [
              "`` `code` ``",
              "Inline code"
            ],
            [
              "`> quote`",
              "A block quote"
            ],
            [
              "`---`",
              "A horizontal rule"
            ]
          ]
        }
      },
      {
        "p": "That is genuinely most of it. Tables, footnotes and images exist too, but a document written with only the above converts predictably in every renderer, which matters when the output is going to PDF."
      },
      {
        "h2": "Where renderers disagree"
      },
      {
        "p": "Markdown has no single specification, which is why the same file can produce different output in different tools. The core above is universal. Beyond it, expect variation in:"
      },
      {
        "ul": [
          "**Tables** — supported nearly everywhere now, but column alignment syntax varies.",
          "**Footnotes** — common but not universal.",
          "**Task lists** with checkboxes — a GitHub extension many renderers ignore.",
          "**Embedded HTML** — some renderers pass it through, some escape it, some strip it.",
          "**Diagrams** — Mermaid and similar are renderer-specific and will almost certainly not survive conversion."
        ]
      },
      {
        "p": "If your document must convert cleanly, stay inside the core syntax. If you are using extensions, test the conversion before you depend on it rather than discovering the problem at submission."
      },
      {
        "h2": "Preparing a Markdown file for conversion"
      },
      {
        "ol": [
          "**Resolve image paths.** Relative paths to local files frequently fail at conversion. Use absolute URLs, or check that your converter resolves paths relative to the source file.",
          "**Shorten table columns.** Markdown tables have no width control, so a column of long URLs will overflow the page.",
          "**Break long code lines** manually. Most renderers clip rather than wrap them.",
          "**Add a title heading** if you want one — Markdown has no metadata concept, so the filename will not become a heading.",
          "**Convert with [md-to-pdf](/tools/md-to-pdf)** and read the output before distributing it."
        ]
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Will my images appear?",
            "a": "If they are reachable at conversion. Local relative paths often are not — use absolute URLs or embed them."
          },
          {
            "q": "Why did my table overflow?",
            "a": "Markdown tables have no width control. Shorten column content or restructure."
          },
          {
            "q": "Can I control page breaks?",
            "a": "Not in standard Markdown. Some renderers honour a page-break directive; most do not."
          },
          {
            "q": "Can I convert PDF back to Markdown?",
            "a": "Poorly. A PDF has no structure to recover. Keep the source."
          }
        ]
      }
    ]
  },
  {
    "slug": "rtf-and-odt-explained",
    "title": "RTF and ODT: The Formats You Meet When Someone Avoids Word",
    "metaTitle": "RTF vs ODT — Document Formats Explained | ThePDFNinja",
    "metaDescription": "Where these two formats come from, why public sector systems still use them, and what to convert them to.",
    "excerpt": "Two formats that arrive unannounced and cause the same puzzled reaction. Here is what each is for.",
    "date": "2026-12-02",
    "dateLabel": "December 2, 2026",
    "readMinutes": 9,
    "category": "Explainers",
    "emoji": "📃",
    "keywords": [
      "what is rtf",
      "what is odt",
      "rtf vs docx",
      "odt file open",
      "convert rtf to pdf"
    ],
    "blocks": [
      {
        "p": "RTF and ODT are the formats you meet when someone avoids Microsoft Word, and both cause the same puzzled reaction when they land in an inbox."
      },
      {
        "h2": "RTF"
      },
      {
        "p": "Rich Text Format is a Microsoft specification from 1987 designed as a lossless interchange format between word processors. It stores formatting as readable markup, which makes it robust and verbose — an RTF is typically several times larger than an equivalent .docx."
      },
      {
        "p": "It survives because almost every word processor ever written can read it. It is the lowest common denominator of formatted text, and it is still used by legal and government systems for exactly that reason."
      },
      {
        "h2": "ODT"
      },
      {
        "p": "OpenDocument Text is the ISO-standardised format used by LibreOffice and OpenOffice. Structurally it is much like .docx — compressed XML in a zip — but it is an open standard rather than a vendor format, which is why many public sector organisations mandate it."
      },
      {
        "p": "Modern Word opens ODT, though complex documents can lose some formatting in translation between the two."
      },
      {
        "h2": "Converting either to PDF"
      },
      {
        "p": "[RTF to PDF](/tools/rtf-to-pdf) and [ODT to PDF](/tools/odt-to-pdf) render server-side using LibreOffice, which handles both formats natively. PDF is usually the right destination when you have received one of these and simply need to read, print or forward it."
      },
      {
        "note": "If you need to edit, convert to a format your editor handles well rather than to PDF. PDF is a destination, not a working format — converting to it and back loses structure."
      },
      {
        "h2": "Which to send"
      },
      {
        "p": "Neither, usually. Send PDF if it does not need editing, and .docx if it does. RTF and ODT are appropriate when a recipient or a policy specifically requires them."
      },
      {
        "h2": "Where you actually encounter each"
      },
      {
        "p": "Both formats appear in specific contexts rather than at random, and knowing which tells you what to expect."
      },
      {
        "p": "**RTF** turns up in older government and legal systems, in software that generates documents programmatically, and as the default of some simple editors — WordPad historically, and various form-letter systems. It is also what you get when a system needs formatted text and cannot assume any particular word processor."
      },
      {
        "p": "**ODT** turns up from LibreOffice and OpenOffice users, and from public sector organisations in jurisdictions that mandate open document standards. Several European governments require it for procurement and internal documents."
      },
      {
        "h2": "What survives conversion between them and Word"
      },
      {
        "ul": [
          "**Basic formatting** — bold, italic, headings, lists — survives in all directions reliably.",
          "**Tables** survive, though complex nested tables can shift.",
          "**Images** survive, though positioning of floating images is the least reliable element.",
          "**Styles** map imperfectly. A custom style may become direct formatting.",
          "**Track changes** may be lost or converted to plain text, depending on direction.",
          "**Fields and cross-references** frequently become static text."
        ]
      },
      {
        "p": "For a letter, a report or a CV, conversion is uneventful. For a heavily formatted document with custom styles and complex layout, expect to check and adjust."
      },
      {
        "h2": "What to convert to"
      },
      {
        "p": "The decision is about what happens next, not about the source format."
      },
      {
        "ol": [
          "**Nothing further needed?** Convert to PDF — [RTF](/tools/rtf-to-pdf) or [ODT](/tools/odt-to-pdf). Fixed appearance, opens everywhere.",
          "**Needs editing?** Convert to .docx, or edit in LibreOffice which handles both natively.",
          "**Needs to go back to the sender?** Keep the original format so they can open it.",
          "**Long-term archive?** [PDF/A](/tools/pdf-to-pdfa), which guarantees rendering decades from now.",
          "**Feeding into software?** Plain text, if formatting carries no meaning."
        ]
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why is my RTF so large?",
            "a": "Formatting is stored as verbose readable markup rather than compressed binary."
          },
          {
            "q": "Can Word open ODT?",
            "a": "Yes, though complex layouts can shift slightly."
          },
          {
            "q": "Which is better for compatibility?",
            "a": "RTF, by a wide margin — nearly every word processor reads it."
          },
          {
            "q": "Should I convert to PDF or DOCX?",
            "a": "PDF if it is finished; DOCX if it still needs editing."
          }
        ]
      }
    ]
  },
  {
    "slug": "plain-text-explained",
    "title": "Plain Text: The Format That Will Still Open in Fifty Years",
    "metaTitle": "Plain Text Files Explained — TXT Format | ThePDFNinja",
    "metaDescription": "Why the simplest format is often the right one, extracting text from PDFs, and the encoding mistake that breaks everything.",
    "excerpt": "No fonts, no images, no pages. That absence is exactly why it outlives everything else.",
    "date": "2026-12-08",
    "dateLabel": "December 8, 2026",
    "readMinutes": 10,
    "category": "Explainers",
    "emoji": "📋",
    "keywords": [
      "what is a txt file",
      "plain text format",
      "pdf to text",
      "extract text from pdf",
      "txt to pdf"
    ],
    "blocks": [
      {
        "p": "Plain text is the oldest and simplest document format, and it remains the right answer more often than people expect."
      },
      {
        "h2": "What it is and is not"
      },
      {
        "p": "A .txt file is characters and line breaks. No fonts, no bold, no images, no pages. That absence is the feature: a text file written in 1980 opens perfectly today, in anything, and will still open in fifty years."
      },
      {
        "h2": "When plain text wins"
      },
      {
        "ul": [
          "**Long-term storage of information** where formatting carries no meaning.",
          "**Data you will process with software.** No parsing of a document format required.",
          "**Notes and drafts** where you want to think about words rather than layout.",
          "**Anything version-controlled.** Diffs of plain text are readable; diffs of binary documents are not.",
          "**Maximum compatibility.** There is no device that cannot read it."
        ]
      },
      {
        "h2": "Extracting text from a PDF"
      },
      {
        "p": "[PDF to text](/tools/pdf-to-txt) pulls the words out, discarding layout. This is often what you actually want — for quoting, for feeding into other software, or for reading without visual distraction. It is faster and cleaner than converting to Word and fighting a broken layout when all you needed was the content."
      },
      {
        "p": "For a scanned PDF, run [OCR](/tools/ocr) first — there is no text to extract until recognition has run."
      },
      {
        "h2": "Going the other way"
      },
      {
        "p": "[Text to PDF](/tools/txt-to-pdf) paginates plain text into a fixed document, which is useful for printing, submitting, or archiving something in a form that will render identically. You are adding constraints, which is exactly the point when the destination needs them."
      },
      {
        "note": "Encoding is the one thing that goes wrong with plain text. Save as UTF-8 unless you have a specific reason not to; anything else risks accented characters and non-Latin scripts turning into nonsense on another machine."
      },
      {
        "h2": "Encoding, in practical terms"
      },
      {
        "p": "Plain text is characters, and a character has to be stored as a number. An **encoding** is the mapping between the two, and disagreement about which mapping applies is the only real way plain text goes wrong."
      },
      {
        "p": "**UTF-8** is the answer for essentially all new work. It covers every script, it is backward-compatible with ASCII for English text, and it is the default on the web and on modern operating systems."
      },
      {
        "p": "The failure looks like this: text written as UTF-8 and read as Latin-1 turns `café` into `cafÃ©` and a curly apostrophe into `â€™`. The data is intact — it is being misread, not damaged — so reopening it with the correct encoding restores it, provided you have not saved over it in the meantime."
      },
      {
        "h2": "Line endings, the other portability trap"
      },
      {
        "p": "Windows ends lines with two characters (carriage return and line feed); Unix, Linux and macOS use one. Most modern software handles both, but older tools and some programmatic parsers do not."
      },
      {
        "p": "The symptoms are a file that appears as one enormous line, or one showing a stray character at the end of every line. Most text editors let you choose the convention, and for anything crossing platforms, Unix endings are the safer default."
      },
      {
        "h2": "Where plain text beats a document format"
      },
      {
        "ul": [
          "**Version control.** A diff of plain text is readable; a diff of a binary document is not.",
          "**Long-term readability.** No format to become obsolete and no software required.",
          "**Programmatic processing.** No document parser needed.",
          "**Speed.** Opens instantly at any size.",
          "**Focus.** Nothing to fiddle with while you should be writing.",
          "**Universality.** Every device made in the last fifty years can display it."
        ]
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why did my accented characters break?",
            "a": "An encoding mismatch. Save and open as UTF-8."
          },
          {
            "q": "Will PDF to text preserve layout?",
            "a": "No. It extracts words and discards positioning. That is usually what you want."
          },
          {
            "q": "Can I get text out of a scanned PDF?",
            "a": "Only after OCR. A scan contains no text to extract."
          },
          {
            "q": "Is plain text really better for archiving?",
            "a": "For pure information, yes — nothing is more durable. For anything where appearance matters, use PDF/A."
          }
        ]
      }
    ]
  }
];
