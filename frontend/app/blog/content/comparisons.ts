import type { BlogArticle } from './types';

// Comparisons: approaches and categories of tool, deliberately not duplicating
// the /compare pages, which target competitor brand terms.

export const comparisonsArticles: BlogArticle[] = [
  {
    "slug": "online-vs-desktop-pdf-tools",
    "title": "Online vs Desktop PDF Tools: An Honest Comparison",
    "metaTitle": "Online vs Desktop PDF Software — Which to Use | ThePDFNinja",
    "metaDescription": "Where browser-based tools genuinely win, where installed software is right, and the privacy question that should decide borderline cases.",
    "excerpt": "We make an online tool, so treat this accordingly — but there are real cases where you should install something instead.",
    "date": "2026-09-04",
    "dateLabel": "September 4, 2026",
    "readMinutes": 9,
    "category": "Comparisons",
    "emoji": "⚖️",
    "keywords": [
      "online vs desktop pdf",
      "best pdf software",
      "online pdf tools safe",
      "desktop pdf editor",
      "pdf tool comparison"
    ],
    "blocks": [
      {
        "p": "We build an online tool, so read this with that in mind. There are genuinely cases where installed software is the better answer, and pretending otherwise would not help you."
      },
      {
        "h2": "Where online tools win"
      },
      {
        "ul": [
          "**Occasional tasks.** Merging four PDFs twice a year does not justify installing anything.",
          "**Any device.** Works the same on a locked-down work laptop, a Chromebook or a phone.",
          "**No maintenance.** No updates, licences or version drift.",
          "**Heavy processing.** Conversions that would strain an old laptop run on a server in seconds.",
          "**Cost.** Genuinely free tools exist; capable desktop software largely does not."
        ]
      },
      {
        "h2": "Where desktop wins"
      },
      {
        "ul": [
          "**Confidential material.** If a document must never leave your machine, that is a real constraint and no privacy policy changes it.",
          "**Bulk work.** Hundreds of files is a scripting job, not a browser one.",
          "**No connection.** Offline, or on a metered link.",
          "**Heavy editing.** Rewriting text throughout a document is what a proper editor is for.",
          "**Regulatory rules.** Some organisations forbid uploading documents to third parties."
        ]
      },
      {
        "h2": "The privacy question, honestly"
      },
      {
        "p": "With any online tool your file goes to someone else's computer. That is not automatically bad — you already trust cloud email and storage with more — but it is a real transfer and deserves a moment's thought rather than a reflex either way."
      },
      {
        "ol": [
          "**Is the connection encrypted?** HTTPS, no exceptions.",
          "**How long are files kept?** A specific stated period beats vague reassurance.",
          "**Is deletion enforced,** or just promised?",
          "**Does it need an account?** Fewer identifiers attached to your document is better.",
          "**Would you mind if this leaked?** For genuinely sensitive material, the honest answer sometimes means working offline."
        ]
      },
      {
        "note": "We delete uploads and outputs within an hour, require no account, and do not inspect file contents. That is the right posture — and still not the same as a file never leaving your laptop. For a signed contract or medical records, install something."
      },
      {
        "h2": "A reasonable split"
      },
      {
        "p": "Online for routine, non-sensitive work: [merging](/tools/merge), [compressing](/tools/compress), [converting](/tools/pdf-to-word), [rotating](/tools/rotate). Desktop for confidential documents, bulk automation and substantial editing."
      },
      {
        "h2": "The questions worth asking any online service"
      },
      {
        "p": "Rather than a general judgement about whether online tools are safe, it is more useful to have a checklist you can apply to a specific one."
      },
      {
        "ol": [
          "**Is the whole flow HTTPS,** including the file upload itself, not only the page you are looking at?",
          "**Is a retention period stated as a number?** 'We take privacy seriously' is not a retention policy.",
          "**Is deletion described as automatic and enforced,** or only promised?",
          "**Is an account required?** Every identifier linked to your document is a linkage that did not have to exist.",
          "**Where is processing done?** Jurisdiction matters for regulated data.",
          "**Is there a stated position on staff access?** Few services address it; the ones that do are usually the ones that thought about it."
        ]
      },
      {
        "p": "None of those guarantee anything on their own. Together they tell you whether a service has considered the question or is repeating reassuring phrases."
      },
      {
        "h2": "Where the boundary actually falls in practice"
      },
      {
        "p": "Rather than 'sensitive or not', it is more useful to think about what you would have to do if the file leaked."
      },
      {
        "p": "If the answer is 'nothing, it is a manual' — use whatever is convenient. If the answer is 'notify a regulator', 'inform a client', 'report a breach' or 'consult a lawyer', that is your signal to work offline regardless of any policy you have read."
      },
      {
        "p": "That framing is more reliable than trying to classify documents in the abstract, because it forces you to think about consequences rather than categories."
      },
      {
        "h2": "A reasonable middle ground"
      },
      {
        "p": "Much sensitive material can be processed online safely by removing what makes it sensitive first."
      },
      {
        "ul": [
          "**[Redact](/tools/pdf-redact) identifiers locally,** then use online tools on the redacted version.",
          "**[Extract](/tools/extract-pages) only the pages that need processing** rather than uploading a whole confidential file.",
          "**[Split](/tools/split) and process components separately** so no single upload contains the complete picture.",
          "**Strip [metadata](/tools/remove-metadata) before uploading,** not after."
        ]
      },
      {
        "p": "This is not paranoia; it is the same instinct that stops you emailing a full database when a summary would do. Send the minimum that accomplishes the task."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Are free online PDF tools safe?",
            "a": "The reputable ones are, for ordinary documents. Check for HTTPS, a stated retention period and no account requirement. For genuinely confidential files, work offline."
          },
          {
            "q": "Do online tools reduce quality?",
            "a": "Only if you ask them to. Merging, splitting and rotating are lossless."
          },
          {
            "q": "Is there a file size limit?",
            "a": "Ours is 100MB per file. Beyond that upload time becomes the bottleneck."
          },
          {
            "q": "Can I use them offline?",
            "a": "No — processing happens on a server. That is the trade for needing no installation."
          }
        ]
      }
    ]
  },
  {
    "slug": "free-vs-paid-pdf-tools",
    "title": "Free vs Paid PDF Tools: What You Actually Get for the Money",
    "metaTitle": "Free vs Paid PDF Software — Is It Worth Paying? | ThePDFNinja",
    "metaDescription": "What paid PDF software genuinely offers, which 'premium' features are artificial, and how to tell the difference.",
    "excerpt": "Some paid features are worth it. Others are free features held behind a paywall. Knowing which is which saves real money.",
    "date": "2026-09-14",
    "dateLabel": "September 14, 2026",
    "readMinutes": 9,
    "category": "Comparisons",
    "emoji": "💰",
    "keywords": [
      "free vs paid pdf tools",
      "is adobe acrobat worth it",
      "free pdf editor",
      "pdf software cost",
      "best free pdf tool"
    ],
    "blocks": [
      {
        "p": "PDF software pricing is strange. Adobe Acrobat runs to a meaningful annual sum; several competitors charge monthly for capabilities browsers ship for free. Working out what genuinely costs money to provide clarifies the decision considerably."
      },
      {
        "h2": "Genuinely worth paying for"
      },
      {
        "ul": [
          "**Serious text editing.** Reconstructing flowing paragraphs from positioned glyphs is hard engineering.",
          "**Legally recognised digital signatures.** Certificate authorities and audit trails cost money to operate.",
          "**Bulk automation.** Batch processing with scripting and integration.",
          "**Accessibility tagging.** Producing genuinely compliant tagged PDFs is specialist work.",
          "**Enterprise controls.** Deployment, policy, support contracts, indemnity."
        ]
      },
      {
        "h2": "Not worth paying for"
      },
      {
        "p": "These are commodity operations — fast, well understood, and with no technical reason to charge:"
      },
      {
        "ul": [
          "[Merging](/tools/merge) and [splitting](/tools/split)",
          "[Compressing](/tools/compress)",
          "[Rotating](/tools/rotate) and [reordering](/tools/organize)",
          "[Converting to and from Office formats](/tools/pdf-to-word)",
          "[Page numbers](/tools/page-numbers) and [watermarks](/tools/watermark)",
          "[Password protection](/tools/protect) — the encryption is in the PDF specification itself"
        ]
      },
      {
        "h2": "How free tiers are usually limited"
      },
      {
        "table": {
          "headers": [
            "Tactic",
            "What it looks like"
          ],
          "rows": [
            [
              "Task caps",
              "Two operations per day, then wait or pay"
            ],
            [
              "Watermarks",
              "Free output stamped with vendor branding"
            ],
            [
              "Size limits",
              "5MB free, which excludes most real documents"
            ],
            [
              "Account walls",
              "Free, but only after handing over an email address"
            ],
            [
              "Feature gating",
              "Merge is free; merging more than three files is not"
            ]
          ]
        }
      },
      {
        "p": "None of these reflect what the operation costs to run. They are pricing decisions."
      },
      {
        "h2": "A sensible approach"
      },
      {
        "p": "Use free tools for commodity operations, which is most of what anyone actually does. Pay when you genuinely need heavy editing, certified signatures, automation or compliance. Paying a subscription to merge two PDFs a month is not a good trade."
      },
      {
        "note": "We are free for all 65 tools with no task limits, watermarks or account. That is possible because these operations are genuinely cheap to run at scale — not because we are being generous."
      },
      {
        "h2": "How to evaluate a free tool before trusting it"
      },
      {
        "p": "'Free' covers a wide range of business models, and the model tells you what to expect."
      },
      {
        "table": {
          "headers": [
            "Model",
            "Signals",
            "What to watch"
          ],
          "rows": [
            [
              "Ad-supported",
              "Display advertising, no limits",
              "Ad quality; some networks are aggressive"
            ],
            [
              "Freemium",
              "Task caps, watermarks, size limits",
              "The free tier may not do the job"
            ],
            [
              "Loss leader",
              "Free tool, paid product elsewhere",
              "Usually stable and well maintained"
            ],
            [
              "Open source",
              "Downloadable, no service",
              "Runs locally; requires setup"
            ],
            [
              "Unclear",
              "No visible revenue at all",
              "Ask what is being monetised"
            ]
          ]
        }
      },
      {
        "p": "That last row is the one to be cautious about. A service with no apparent business model and no advertising is being funded somehow, and if the answer is not obvious it is worth knowing before uploading anything you care about."
      },
      {
        "h2": "Where paid tools earn their money"
      },
      {
        "p": "To be fair to the paid market, some things genuinely are hard and worth paying for."
      },
      {
        "p": "**Text editing** is the clearest case. Reconstructing flowing paragraphs from positioned glyphs, so that editing a sentence reflows the rest sensibly, is difficult engineering that Adobe has been refining for decades. Free tools manage small corrections; they do not manage rewriting a page."
      },
      {
        "p": "**Accessibility tagging** is another. Producing a properly tagged, PDF/UA-compliant document with correct reading order and alternative text is specialist work, and in regulated contexts it is not optional."
      },
      {
        "p": "**Certified digital signatures** involve certificate authorities, timestamping services and audit infrastructure that costs real money to operate."
      },
      {
        "h2": "A sensible split for most people"
      },
      {
        "p": "Use free tools for the operations that are genuinely commodity — merging, splitting, compressing, rotating, converting between formats. That is the large majority of what anyone actually does with a PDF."
      },
      {
        "p": "Pay when you hit one of the genuinely hard problems: heavy text editing, compliance-grade accessibility, certified signatures, or bulk automation. And when you do pay, buy for that specific capability rather than for a bundle whose other features you already have for nothing."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why do some free tools add watermarks?",
            "a": "To sell the paid tier. A business decision, not a technical necessity."
          },
          {
            "q": "Is Adobe Acrobat worth it?",
            "a": "If you edit PDF text daily, need certified signatures or must produce accessible documents — yes. For occasional merging — no."
          },
          {
            "q": "Are free tools lower quality?",
            "a": "For commodity operations, no. Merging is merging."
          },
          {
            "q": "What is the catch with free tools?",
            "a": "Usually advertising, or limits designed to push you to a paid tier."
          }
        ]
      }
    ]
  },
  {
    "slug": "lossless-vs-lossy-compression",
    "title": "Lossless vs Lossy Compression: What Actually Gets Thrown Away",
    "metaTitle": "Lossless vs Lossy Compression Explained | ThePDFNinja",
    "metaDescription": "The difference governs every compression decision. Which operations are safe, which degrade your file, and why it compounds.",
    "excerpt": "Why merging a PDF costs nothing and compressing it costs something — and why you should never compress a compressed file.",
    "date": "2026-09-22",
    "dateLabel": "September 22, 2026",
    "readMinutes": 9,
    "category": "Comparisons",
    "emoji": "🔬",
    "keywords": [
      "lossless vs lossy",
      "compression explained",
      "does compression lose quality",
      "lossy compression",
      "image compression types"
    ],
    "blocks": [
      {
        "p": "'Lossy' and 'lossless' sound like jargon until you compress something important and discover the text has gone fuzzy. The distinction governs every compression decision you will make, and it is genuinely simple."
      },
      {
        "h2": "The difference in one line"
      },
      {
        "p": "**Lossless** compression can reconstruct the original exactly. **Lossy** compression throws data away permanently in exchange for a much smaller file."
      },
      {
        "h2": "How each works"
      },
      {
        "p": "Lossless compression finds redundancy. If a thousand pixels are the same white, store 'white × 1000' instead of listing them. Nothing is lost; you have simply described the same data more efficiently. ZIP, PNG and the deflate compression inside PDFs all work this way."
      },
      {
        "p": "Lossy compression exploits the limits of human perception. JPEG discards fine colour variation the eye barely registers, keeping the brightness detail it is sensitive to. The result is dramatically smaller and, for a photograph, indistinguishable."
      },
      {
        "h2": "Which applies where"
      },
      {
        "table": {
          "headers": [
            "Operation",
            "Type",
            "What it costs"
          ],
          "rows": [
            [
              "[Merge](/tools/merge) / [split](/tools/split)",
              "Lossless",
              "Nothing"
            ],
            [
              "[Rotate](/tools/rotate) / [reorder](/tools/organize)",
              "Lossless",
              "Nothing"
            ],
            [
              "[Compress PDF](/tools/compress)",
              "Both",
              "Images degrade; text does not"
            ],
            [
              "[Compress to size](/tools/compress-to-size)",
              "Lossy",
              "Image quality, by design"
            ],
            [
              "PNG to JPG",
              "Lossy",
              "One generation of detail"
            ],
            [
              "JPG to PNG",
              "Lossless",
              "Nothing — but recovers nothing either"
            ]
          ]
        }
      },
      {
        "h2": "The generation-loss trap"
      },
      {
        "p": "Lossy compression compounds. Each save discards a little more, and the damage never comes back. Open a JPG, edit it, save, repeat a dozen times and the degradation is obvious."
      },
      {
        "p": "The rule that follows: **always work from the original.** If you must produce several compressed versions, produce each from the master, never from a previously compressed copy."
      },
      {
        "note": "Converting a lossy file to a lossless format does not restore anything. A JPG saved as PNG is a perfect copy of an already-degraded image, in a much larger file."
      },
      {
        "h2": "Seeing generation loss in practice"
      },
      {
        "p": "The abstract warning about compounding damage becomes concrete quickly if you try it."
      },
      {
        "p": "Take a photograph, save it as JPEG at quality 80, open it, save again at 80, and repeat. After one save the difference from the original is invisible. After five, edges have begun to soften. After twenty, blocking artefacts are obvious in flat areas like skies, and fine texture has turned to mush."
      },
      {
        "p": "What is happening is that each pass discards detail based on what the encoder judges imperceptible — but it is judging the *already-degraded* image, so it removes a further layer of what remains. The errors accumulate rather than cancelling."
      },
      {
        "p": "This is why the working rule is absolute: **always compress from the original**. A file that has been through three tools has been through three generations, whatever the final quality setting said."
      },
      {
        "h2": "Which PDF operations are actually lossless"
      },
      {
        "table": {
          "headers": [
            "Operation",
            "Lossless?",
            "Notes"
          ],
          "rows": [
            [
              "[Merge](/tools/merge) / [split](/tools/split)",
              "Yes",
              "Pages copied verbatim"
            ],
            [
              "[Rotate](/tools/rotate)",
              "Yes",
              "Sets a page attribute only"
            ],
            [
              "[Crop](/tools/crop)",
              "Yes",
              "Sets a view box; content retained"
            ],
            [
              "[Delete pages](/tools/delete-pages)",
              "Yes",
              "For remaining pages"
            ],
            [
              "[Page numbers](/tools/page-numbers) / [watermark](/tools/watermark)",
              "Yes, but permanent",
              "Nothing degrades; nothing undoes"
            ],
            [
              "[Flatten](/tools/flatten-pdf)",
              "Structurally lossy",
              "Appearance kept; interactivity gone"
            ],
            [
              "[Greyscale](/tools/grayscale-pdf)",
              "Lossy",
              "Colour discarded permanently"
            ],
            [
              "[Compress](/tools/compress)",
              "Lossy for images",
              "Text and vectors unaffected"
            ]
          ]
        }
      },
      {
        "h2": "Why text survives compression unharmed"
      },
      {
        "p": "People are often surprised that compressing a PDF softens its images but leaves the text perfectly sharp. The reason is that they are stored completely differently."
      },
      {
        "p": "Text is stored as character codes plus a font reference — an instruction to draw a specific glyph at a specific size and position. That description is already compact, and shrinking the file does not change it. The renderer draws the glyph mathematically at whatever resolution the display or printer offers, so it is sharp at any zoom."
      },
      {
        "p": "Images are grids of pixels, and the only way to make a grid of pixels smaller is to have fewer of them or describe them less precisely. Both are visible. This is also why a scanned page — which is an image of text — degrades under compression while a typed page does not."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Is lossless always better?",
            "a": "Only if size is irrelevant. For photographs, lossless files are many times larger for a difference nobody can see."
          },
          {
            "q": "Does merging PDFs lose quality?",
            "a": "No. Pages are copied, not re-encoded."
          },
          {
            "q": "Can I recover quality lost to compression?",
            "a": "No. The data is gone. Upscaling tools invent plausible detail; they do not restore the original."
          },
          {
            "q": "Why does my PDF text stay sharp when images blur?",
            "a": "Text is stored as vectors and characters, which compress losslessly. Only the images are re-encoded."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-to-word-conversion-compared",
    "title": "Why PDF to Word Conversion Is Harder Than It Looks",
    "metaTitle": "PDF to Word Conversion — What to Expect | ThePDFNinja",
    "metaDescription": "Converting PDF to Word means inferring structure that was never stored. What converts well, what does not, and how to get the best result.",
    "excerpt": "The most commonly disappointing conversion, and the structural reason behind it.",
    "date": "2026-09-30",
    "dateLabel": "September 30, 2026",
    "readMinutes": 10,
    "category": "Comparisons",
    "emoji": "🔁",
    "keywords": [
      "pdf to word conversion",
      "convert pdf to word accurately",
      "pdf to docx quality",
      "pdf conversion problems",
      "edit pdf in word",
      "pdf to word converter free online",
      "convert pdf to word without losing formatting",
      "pdf to docx free no signup",
      "pdf to word on phone",
      "edit pdf in word free",
      "pdf to word converter no watermark"
    ],
    "blocks": [
      {
        "p": "PDF to Word conversion is the operation people most often find disappointing, and the reason is structural rather than a failing of any particular tool."
      },
      {
        "h2": "Why it is hard"
      },
      {
        "p": "A Word document stores meaning: this is a heading, this is a paragraph, these cells form a table. A PDF stores appearance: place this glyph at this coordinate. Converting from PDF to Word means **inferring the structure back** from positions alone."
      },
      {
        "p": "The converter must decide that characters close together form a word, that words on a line form a sentence, that a run of lines is a paragraph, that aligned text is a table rather than columns. Every one of those is a guess. Good converters guess well; none guess perfectly."
      },
      {
        "h2": "What converts well, and what does not"
      },
      {
        "table": {
          "headers": [
            "Content",
            "Result"
          ],
          "rows": [
            [
              "Single-column body text",
              "Excellent"
            ],
            [
              "Headings and simple lists",
              "Very good"
            ],
            [
              "Tables with visible borders",
              "Good"
            ],
            [
              "Tables without borders",
              "Poor — often becomes loose text"
            ],
            [
              "Multi-column layouts",
              "Variable; may interleave"
            ],
            [
              "Text over images",
              "Poor"
            ],
            [
              "Scanned pages",
              "Nothing, without [OCR](/tools/ocr) first"
            ]
          ]
        }
      },
      {
        "h2": "How to get the best result"
      },
      {
        "ol": [
          "**Check it has real text.** Ctrl+F for a word. Nothing found means a scan — run [OCR](/tools/ocr) first or you will convert an image into an image.",
          "**Convert the whole document,** not page by page. Converters use surrounding context to infer structure.",
          "**Expect to fix the layout,** not the words. Text accuracy is usually excellent; spacing and tables are where the work is.",
          "**Keep the PDF.** It is the reference for what the document should look like."
        ]
      },
      {
        "h2": "When to give up on conversion"
      },
      {
        "p": "If you only need the words — for quoting, or feeding into something else — [PDF to text](/tools/pdf-to-txt) is faster and produces cleaner output than fighting a broken Word layout. If you need the numbers from a table, [PDF to Excel](/tools/pdf-to-excel) is the better target."
      },
      {
        "note": "Realistic expectation for [PDF to Word](/tools/pdf-to-word) is roughly 75–85% layout fidelity on an ordinary document. That is good enough to edit from and not good enough to send without checking."
      },
      {
        "h2": "What to fix first in a converted document"
      },
      {
        "p": "Converted documents are best repaired in a specific order, because fixing structure before content avoids doing the same work twice."
      },
      {
        "ol": [
          "**Styles first.** Apply proper heading styles to anything that should be a heading. Conversion usually produces direct formatting that looks right and behaves wrongly.",
          "**Tables second.** These carry the most conversion damage. Check every table against the source before touching anything else.",
          "**Spacing third.** Remove empty paragraphs used as spacing and replace with paragraph spacing properties.",
          "**Content last.** Only once the document is structurally sound should you start editing what it says."
        ]
      },
      {
        "p": "Doing this in the reverse order — editing text in a structurally broken document — means your edits get disrupted when you subsequently fix the structure."
      },
      {
        "h2": "Why tables are the hard part"
      },
      {
        "p": "A PDF has no concept of a table. Where borders are drawn, a converter can infer cell boundaries from the lines. Where they are not, it must infer them from alignment alone, and alignment is ambiguous."
      },
      {
        "p": "Consider a two-column list of names and figures with no borders. Is that a table, or is it two columns of text? Is a wrapped name one cell over two lines, or two cells? A human reads the intent instantly; a converter guesses, and its guess is wrong reasonably often."
      },
      {
        "p": "This is why bordered tables convert well and borderless ones do not — the borders are not decoration, they are the structural information the converter needs."
      },
      {
        "h2": "When not to convert at all"
      },
      {
        "ul": [
          "**You only need the words.** [PDF to text](/tools/pdf-to-txt) is faster and cleaner.",
          "**You only need numbers from a table.** [PDF to Excel](/tools/pdf-to-excel) targets that directly.",
          "**You need to change one word.** Edit in place; converting is disproportionate.",
          "**Layout must be preserved exactly.** Conversion cannot guarantee that. Edit in place or rebuild from the source.",
          "**The source file exists.** Ask for it. Thirty seconds of asking beats an hour of repair."
        ]
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "The work happens on our servers, so a mobile browser handles this exactly as a desktop does — you are only uploading and downloading."
      },
      {
        "p": "Converting on mobile works the same, but editing the result does not — reflowing a converted document with broken table layout is genuinely painful on a phone. If the document needs real repair work, convert on mobile and edit on a desktop."
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
            "q": "Why did my table become a mess?",
            "a": "Tables without visible borders have no structural markers. The converter sees aligned text and has to guess."
          },
          {
            "q": "Why is my converted document empty?",
            "a": "The PDF is a scan. There is no text to extract until OCR adds some."
          },
          {
            "q": "Does converting change the words?",
            "a": "Rarely for born-digital PDFs. After OCR, expect occasional character errors — proofread names and numbers."
          },
          {
            "q": "Is paid software better at this?",
            "a": "Somewhat, on complex layouts. On ordinary single-column documents the difference is small."
          },
          {
            "q": "How do I convert a PDF to Word for free?",
            "a": "[PDF to Word](/tools/pdf-to-word) reconstructs an editable document. Free, no signup. Expect roughly 75–85% layout fidelity on an ordinary document."
          },
          {
            "q": "How do I convert a PDF to Word without losing formatting?",
            "a": "No converter is perfect, because a PDF stores glyph positions rather than structure. Single-column text converts very well; borderless tables convert poorly."
          },
          {
            "q": "Why is my converted Word document empty?",
            "a": "The PDF is a scan with no text layer. Run [OCR](/tools/ocr) first."
          },
          {
            "q": "Can I convert a PDF to Word on my phone?",
            "a": "Yes, in a mobile browser. Editing the result is much easier on a desktop though."
          }
        ]
      }
    ]
  },
  {
    "slug": "three-ways-to-edit-a-pdf",
    "title": "Three Ways to Edit a PDF (and How to Pick)",
    "metaTitle": "How to Edit a PDF — Three Approaches Compared | ThePDFNinja",
    "metaDescription": "Annotate, edit in place, or convert and re-export. Which approach fits which job, and the redaction mistake that causes real breaches.",
    "excerpt": "Three different answers to 'how do I edit this PDF', each right for a different situation.",
    "date": "2026-10-08",
    "dateLabel": "October 8, 2026",
    "readMinutes": 9,
    "category": "Comparisons",
    "emoji": "✏️",
    "keywords": [
      "how to edit a pdf",
      "edit pdf text",
      "pdf editor free",
      "change text in pdf",
      "annotate pdf"
    ],
    "blocks": [
      {
        "p": "Ask how to edit a PDF and you get three different answers, all correct for different situations. Picking the wrong one wastes an afternoon."
      },
      {
        "h2": "Option 1: annotate"
      },
      {
        "p": "Add comments, highlights, drawn marks and signatures on top of the page without touching the underlying content. Every modern PDF reader and most browsers do this for free."
      },
      {
        "p": "**Right for:** review feedback, signing, marking up a draft. **Wrong for:** changing what the document says."
      },
      {
        "h2": "Option 2: edit in place"
      },
      {
        "p": "A PDF editor reconstructs text runs so you can retype a word or move an element. Works well for small corrections — a wrong date, a typo, a changed phone number."
      },
      {
        "p": "**Right for:** small fixes where you lack the source. **Wrong for:** rewriting paragraphs, because there is no flowing text to reflow. Change a sentence's length and everything after it will not move to accommodate."
      },
      {
        "h2": "Option 3: convert, edit, re-export"
      },
      {
        "p": "[Convert to Word](/tools/pdf-to-word), make substantial changes in a real word processor, export back to PDF. This is the right answer far more often than people expect."
      },
      {
        "p": "**Right for:** rewriting, restructuring, anything substantial. **Wrong for:** documents whose layout must be preserved exactly, since conversion is imperfect."
      },
      {
        "h2": "Choosing quickly"
      },
      {
        "table": {
          "headers": [
            "What you need",
            "Approach"
          ],
          "rows": [
            [
              "Sign it",
              "Annotate, or [add a signature box](/tools/add-signature-box)"
            ],
            [
              "Comment on it",
              "Annotate"
            ],
            [
              "Fix one typo",
              "Edit in place"
            ],
            [
              "Rewrite a section",
              "Convert to Word"
            ],
            [
              "Add a header to every page",
              "[Add header/footer](/tools/add-header-footer)"
            ],
            [
              "Remove a page",
              "[Delete pages](/tools/delete-pages) — no editor needed"
            ],
            [
              "Remove sensitive text",
              "[Redact](/tools/pdf-redact), never annotate over it"
            ]
          ]
        }
      },
      {
        "note": "Drawing a black box over text is not redaction. The text is still underneath and trivially recoverable. This has caused genuine, published breaches. Use a tool that removes the content."
      },
      {
        "h2": "The best option of all"
      },
      {
        "p": "Find the source file. If the PDF was exported from Word or Google Docs, editing the original and re-exporting gives a perfect result in a fraction of the time. Ask whoever sent it before you start reconstructing."
      },
      {
        "h2": "What in-place editing can and cannot do"
      },
      {
        "p": "Editing text directly in a PDF works better than its reputation suggests for small changes, and fails predictably for larger ones. Knowing where the line falls saves a lot of frustration."
      },
      {
        "p": "**Reliable:** correcting a typo, changing a date, updating a phone number, altering a figure — anything where the replacement is a similar length to the original and sits within one line."
      },
      {
        "p": "**Unreliable:** anything that changes the length of a line or paragraph. Because a PDF stores glyph positions rather than flowing text, inserting a sentence does not push the following text down. Editors attempt to compensate within a paragraph, and the result is usually visibly uneven spacing."
      },
      {
        "p": "**Not possible without pain:** restructuring, reordering paragraphs, changing typeface throughout, altering anything in a two-column layout where reflow would need to move text between columns."
      },
      {
        "h2": "The round-trip through Word"
      },
      {
        "p": "For substantial editing, converting out and back is usually faster than fighting an editor, and it is worth being clear-eyed about what it costs."
      },
      {
        "ol": [
          "[Convert to Word](/tools/pdf-to-word). Expect roughly 75–85% layout fidelity on an ordinary document.",
          "**Fix the layout first, before editing content.** Tables and spacing are where conversion errors cluster, and correcting them is easier before you have also changed the text.",
          "Make your edits in a tool that actually reflows.",
          "Export back to PDF — export, not print, so links and structure survive.",
          "**Compare against the original PDF** page by page. This is the step people skip and it is where you catch a table that silently lost a row."
        ]
      },
      {
        "p": "This is clearly worse than having the source file, which is why asking for it first is always worth thirty seconds."
      },
      {
        "h2": "Editing a scanned document"
      },
      {
        "p": "A scan has no text to edit — the page is a picture. There are two approaches and both have real drawbacks."
      },
      {
        "p": "**OCR then edit** gives you a text layer over the image, but editing that layer changes the invisible text while the visible picture stays as it was. The document then says two different things depending on whether you read it or search it, which is a genuinely bad outcome."
      },
      {
        "p": "**OCR then convert to Word** reconstructs an editable document from the recognised text, discarding the original image. That works, and you inherit every OCR error as real text — so proofread before relying on it, particularly names, dates and figures."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why can't I just type into a PDF?",
            "a": "It stores positioned glyphs, not flowing text. There is nothing for new text to push out of the way."
          },
          {
            "q": "Are free PDF editors any good?",
            "a": "For annotation and small fixes, yes. For substantial text editing, paid tools are meaningfully better."
          },
          {
            "q": "Will editing break the layout?",
            "a": "Small edits usually not. Anything that changes text length can, since nothing reflows."
          },
          {
            "q": "Can I edit a scanned PDF?",
            "a": "Only after OCR, and then you are editing recognised text over an image — usually better to convert to Word."
          }
        ]
      }
    ]
  },
  {
    "slug": "compress-vs-compress-to-size",
    "title": "Compress PDF vs Compress to Size: Which One You Need",
    "metaTitle": "Compress PDF vs Compress to Exact Size | ThePDFNinja",
    "metaDescription": "One targets a quality level, the other targets a file size. Picking the right one saves a lot of trial and error.",
    "excerpt": "If someone gave you a number, one of these tools is right and the other will waste your afternoon.",
    "date": "2026-10-16",
    "dateLabel": "October 16, 2026",
    "readMinutes": 9,
    "category": "Comparisons",
    "emoji": "🎚️",
    "keywords": [
      "compress pdf vs compress to size",
      "exact pdf size",
      "pdf compression settings",
      "reduce pdf to specific size",
      "pdf quality settings"
    ],
    "blocks": [
      {
        "p": "Both compress a PDF. They answer different questions, and using the wrong one is why people spend twenty minutes nudging a quality slider."
      },
      {
        "h2": "The difference"
      },
      {
        "p": "[Compress PDF](/tools/compress) asks: *make this as small as sensible at a quality level I choose.* You pick screen, ebook, printer or prepress and get whatever size results."
      },
      {
        "p": "[Compress to size](/tools/compress-to-size) asks the reverse: *make this fit under a number I choose, at the best quality that allows.* It searches quality settings until the output clears your ceiling."
      },
      {
        "h2": "Which to use"
      },
      {
        "table": {
          "headers": [
            "Situation",
            "Tool"
          ],
          "rows": [
            [
              "Emailing something a bit large",
              "[Compress](/tools/compress) at ebook"
            ],
            [
              "Portal says maximum 200KB",
              "[Compress to size](/tools/compress-to-size)"
            ],
            [
              "Archiving, want it smaller",
              "[Compress](/tools/compress) at printer"
            ],
            [
              "Form rejects anything over 2MB",
              "[Compress to size](/tools/compress-to-size)"
            ],
            [
              "Not sure how small it needs to be",
              "[Compress](/tools/compress) at ebook, then check"
            ]
          ]
        }
      },
      {
        "p": "The rule of thumb: if a specific number has been given to you, use compress-to-size. If you just want it smaller, use the quality presets."
      },
      {
        "h2": "What the quality presets mean"
      },
      {
        "ul": [
          "**Screen** — around 72 DPI images. Smallest output; text visibly softens.",
          "**Ebook** — around 150 DPI. The best general-purpose choice; usually 60–80% smaller with no visible loss on screen.",
          "**Printer** — around 300 DPI. Modest reduction, print-quality retained.",
          "**Prepress** — highest quality, minimal reduction. For professional printing."
        ]
      },
      {
        "h2": "Why either can disappoint"
      },
      {
        "p": "Both work on images. If your PDF is mostly text, there is very little for either to do — a text PDF that is unexpectedly large is usually suffering from something else entirely: [accumulated revisions](/tools/repair), embedded fonts, or [form data](/tools/flatten-pdf). Compression will not fix those; a full rewrite will."
      },
      {
        "note": "Whichever you use, prepare first. [Greyscale](/tools/grayscale-pdf) and [crop](/tools/crop) before compressing, and the compressor has less to destroy — you get a better-looking file at the same size."
      },
      {
        "h2": "How compress-to-size finds the setting"
      },
      {
        "p": "Understanding the mechanism explains both why it is better than guessing and where it runs out of room."
      },
      {
        "p": "The tool compresses at a mid-range quality, measures the result, and compares it to your target. Too large, and it tries a lower quality; comfortably under, it tries higher. Each iteration halves the remaining range, so it converges in a handful of passes on the highest quality that still fits."
      },
      {
        "p": "Doing this by hand means several rounds of compress-check-adjust, and people usually stop at the first setting that fits rather than the best one that fits — which means accepting worse quality than necessary."
      },
      {
        "h2": "When the target cannot be met"
      },
      {
        "p": "The search has a floor. Below a certain quality the output stops shrinking meaningfully, because what remains is structural rather than image data. If your target is below that floor, the tool returns the smallest it achieved, which will exceed your limit."
      },
      {
        "p": "That is a signal to change the input rather than the setting:"
      },
      {
        "ol": [
          "**Reduce page count.** [Extract](/tools/extract-pages) only what is required. Usually the largest single lever.",
          "**[Greyscale](/tools/grayscale-pdf).** Removes two thirds of image data before compression begins.",
          "**[Crop](/tools/crop).** Scanner borders and wide margins are real data.",
          "**Rescan lower.** A clean 200 DPI capture beats a 600 DPI one degraded to the same size.",
          "**Split the submission** if the portal accepts multiple files."
        ]
      },
      {
        "h2": "Setting a sensible target"
      },
      {
        "p": "Two habits prevent avoidable failures."
      },
      {
        "p": "**Aim below the limit, not at it.** Target 90% of the stated maximum. This absorbs the KB-versus-KiB ambiguity, any overhead the portal adds, and the small variation between what a tool reports and what the filesystem records."
      },
      {
        "p": "**Check for a stated minimum.** Some portals reject files that are too small, on the reasonable assumption that a 3KB document is a blank placeholder. Compressing as hard as possible can fail this check, which produces a particularly confusing error message."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Which gives the smaller file?",
            "a": "Compress-to-size, if you set an aggressive target — it will keep reducing quality until it fits."
          },
          {
            "q": "Can compress-to-size fail?",
            "a": "It can only go so far before the document becomes unreadable. If the target is unrealistic, reduce pages or rescan at lower DPI instead."
          },
          {
            "q": "Does compressing twice help?",
            "a": "No. It stacks artefacts for negligible gain. Start from the original."
          },
          {
            "q": "Why did my file barely shrink?",
            "a": "It is probably text-based with few images. Try flatten and remove-metadata instead."
          }
        ]
      }
    ]
  },
  {
    "slug": "how-pdf-compression-works",
    "title": "How PDF Compression Actually Works (and Why Tools Differ)",
    "metaTitle": "How PDF Compression Works — Six Strategies | ThePDFNinja",
    "metaDescription": "Downsampling, re-encoding, font subsetting, deduplication and structure rewriting. Why the same file compresses differently in different tools.",
    "excerpt": "The same PDF gives 400KB in one tool and 1.2MB in another. Here is what separates them.",
    "date": "2026-10-26",
    "dateLabel": "October 26, 2026",
    "readMinutes": 9,
    "category": "Comparisons",
    "emoji": "⚙️",
    "keywords": [
      "how pdf compression works",
      "pdf compression explained",
      "why compression differs",
      "reduce pdf size how",
      "pdf optimization"
    ],
    "blocks": [
      {
        "p": "Every PDF tool offers compression, and their outputs vary enormously for the same input. The difference is not marketing — it is which strategies each one tries."
      },
      {
        "h2": "What compressors actually do"
      },
      {
        "ol": [
          "**Downsample images.** Reduce resolution to a target DPI. Usually the largest single saving.",
          "**Re-encode images.** Convert to JPEG at a chosen quality, or switch encoding entirely.",
          "**Subset fonts.** Keep only the characters actually used rather than the whole typeface.",
          "**Deduplicate.** A logo repeated on every page stored once instead of forty times.",
          "**Rewrite structure.** Discard orphaned objects left behind by incremental saves.",
          "**Recompress streams.** Apply better lossless compression to content streams."
        ]
      },
      {
        "h2": "Why results differ so much"
      },
      {
        "p": "A basic tool does steps 1 and 2. A good one does all six. On a document that has been edited repeatedly, step 5 alone can halve the file — and a tool that skips it will report that your PDF 'cannot be compressed further' when in fact it has barely started."
      },
      {
        "p": "This is also why compressing the same file in two different tools can give you 400KB and 1.2MB from identical input."
      },
      {
        "h2": "Choosing a strategy for your file"
      },
      {
        "table": {
          "headers": [
            "Your PDF",
            "What will help"
          ],
          "rows": [
            [
              "Scanned pages",
              "Downsampling and greyscale — [compress](/tools/compress)"
            ],
            [
              "Text with a few images",
              "Font subsetting and image re-encoding"
            ],
            [
              "Heavily edited",
              "[Structure rewrite](/tools/repair) or [flatten](/tools/flatten-pdf)"
            ],
            [
              "Filled form",
              "[Flatten](/tools/flatten-pdf) then compress"
            ],
            [
              "Already small",
              "Nothing. Stop."
            ]
          ]
        }
      },
      {
        "note": "If compression barely changes your file, it is probably already efficient. Look instead at whether you need every page — [extracting](/tools/extract-pages) the relevant ones beats any compression setting."
      },
      {
        "h2": "Downsampling, and choosing a target resolution"
      },
      {
        "p": "Downsampling accounts for most of the size reduction in an image-heavy PDF, and the target resolution is the single most consequential setting."
      },
      {
        "table": {
          "headers": [
            "Target DPI",
            "Suitable for",
            "Typical reduction from 600 DPI"
          ],
          "rows": [
            [
              "72",
              "Screen viewing only",
              "~98%"
            ],
            [
              "150",
              "General reading, email",
              "~94%"
            ],
            [
              "200",
              "Reading small print",
              "~89%"
            ],
            [
              "300",
              "Printing",
              "~75%"
            ],
            [
              "600",
              "Archival master",
              "None"
            ]
          ]
        }
      },
      {
        "p": "Those reductions look dramatic because data scales with the square of resolution — halving DPI quarters the pixel count. It is also why scanning at 600 DPI and compressing down is wasteful compared with scanning at 300 in the first place: you generate four times the data and then discard three quarters of it, having introduced no additional real detail."
      },
      {
        "h2": "Font subsetting"
      },
      {
        "p": "A font file contains glyphs for every character it supports — often several thousand, covering accented Latin, Greek, Cyrillic and symbols. A document using one typeface for English text needs perhaps eighty of them."
      },
      {
        "p": "**Subsetting** embeds only the glyphs actually used. On a document with several embedded families this can save megabytes, and it is entirely lossless — the document renders identically."
      },
      {
        "p": "The trade-off appears only if someone later edits the document and types a character whose glyph was not embedded. The reader then substitutes, which is why documents intended for further editing sometimes embed full fonts deliberately."
      },
      {
        "h2": "Why a full rewrite can halve a file with no quality loss"
      },
      {
        "p": "This is the strategy simpler tools skip and the one that most often produces a surprising result."
      },
      {
        "p": "PDF supports incremental saving: an editor appends changes and a new cross-reference table rather than rewriting the file. Fast and crash-safe, and it means a document edited across twenty sessions contains twenty layers of history, most of it unreachable."
      },
      {
        "p": "A full rewrite reads the current state, discards every object nothing references, and writes a clean file. Nothing visible changes. On a heavily edited document the saving can be enormous, and it is completely lossless — which is why [repair](/tools/repair) is worth trying on an oversized PDF even when nothing appears broken."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why do different tools give different sizes?",
            "a": "They implement different subsets of these strategies. Structure rewriting in particular is often skipped."
          },
          {
            "q": "Is there a lossless way to shrink a PDF?",
            "a": "Yes — deduplication, font subsetting and structure rewriting are all lossless. Only image downsampling costs quality."
          },
          {
            "q": "Why did compression do nothing?",
            "a": "Your file is already efficient, or it is text-based with nothing to downsample."
          },
          {
            "q": "Can I compress a compressed PDF?",
            "a": "With little gain and stacked artefacts. Start from the original."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-a-for-archiving",
    "title": "PDF/A: The Format for Documents That Must Outlive Their Software",
    "metaTitle": "What Is PDF/A? Archival Format Explained | ThePDFNinja",
    "metaDescription": "PDF/A bans everything that might not work in twenty years. What it requires, who mandates it, and what you lose converting.",
    "excerpt": "Courts, archives and universities increasingly demand it. Here is what the format actually guarantees.",
    "date": "2026-11-03",
    "dateLabel": "November 3, 2026",
    "readMinutes": 9,
    "category": "Comparisons",
    "emoji": "🏛️",
    "keywords": [
      "what is pdf/a",
      "pdf a format",
      "convert to pdf/a",
      "archival pdf",
      "pdf a compliance"
    ],
    "blocks": [
      {
        "p": "A PDF that renders correctly today may not in twenty years, and for legal, medical and government records that is a genuine problem. PDF/A is the format designed to prevent it."
      },
      {
        "h2": "What PDF/A changes"
      },
      {
        "ul": [
          "**Everything must be embedded.** All fonts, colour profiles and resources travel inside the file. Nothing depends on the reader having anything installed.",
          "**No external dependencies.** No links to remote content, no references to system resources.",
          "**No encryption.** An archive you cannot open without a password is not an archive.",
          "**No JavaScript, no executables, no audio or video.** Anything that requires an interpreter is banned.",
          "**Metadata is mandatory** and structured, so files remain identifiable."
        ]
      },
      {
        "p": "The result is a file that is entirely self-contained. Hand it to a reader in 2050 and it renders exactly as it does now."
      },
      {
        "h2": "Who requires it"
      },
      {
        "p": "Courts in many jurisdictions, university thesis submission systems, national archives, and a growing number of regulated industries. If you have been told to submit PDF/A, it is usually not negotiable — validators check compliance automatically."
      },
      {
        "h2": "Converting"
      },
      {
        "p": "[PDF to PDF/A](/tools/pdf-to-pdfa) embeds what can be embedded and removes what is not permitted. Two things to know:"
      },
      {
        "ul": [
          "**Fonts that cannot be legally embedded** will be substituted, which can change appearance. Check the result.",
          "**Interactive content is removed.** Form fields, video and scripts do not survive. If your document depends on them, PDF/A is the wrong target."
        ]
      },
      {
        "note": "Convert to PDF/A **last**, after all editing. It is a preservation format, not a working one, and many tools will refuse to edit a PDF/A without breaking compliance."
      },
      {
        "h2": "The versions, and which to choose"
      },
      {
        "p": "PDF/A has several parts and conformance levels, and the combination is usually specified for you. Where it is not:"
      },
      {
        "table": {
          "headers": [
            "Version",
            "Based on",
            "Notable"
          ],
          "rows": [
            [
              "PDF/A-1",
              "PDF 1.4",
              "Most restrictive; no transparency, no layers"
            ],
            [
              "PDF/A-2",
              "PDF 1.7",
              "Allows transparency, layers, JPEG2000"
            ],
            [
              "PDF/A-3",
              "PDF 1.7",
              "As A-2, plus arbitrary embedded files"
            ],
            [
              "PDF/A-4",
              "PDF 2.0",
              "Newest; support still uneven"
            ]
          ]
        }
      },
      {
        "p": "Each has conformance levels: **b** (basic) guarantees visual reproduction; **a** (accessible) additionally requires structural tagging; **u** requires Unicode mapping so text extraction is reliable."
      },
      {
        "p": "If nothing is specified, **PDF/A-2b** is the pragmatic default — widely supported, not unnecessarily restrictive, and adequate for visual preservation."
      },
      {
        "h2": "Why PDF/A-3 is contentious"
      },
      {
        "p": "PDF/A-3 permits embedding arbitrary files, which was intended for cases like attaching source data to a report. Archivists object, reasonably, that an embedded spreadsheet in a proprietary format defeats the point — you have preserved a container whose contents may be unreadable in twenty years."
      },
      {
        "p": "If you are choosing, prefer A-2 unless you have a specific need for embedded attachments and have thought about whether those attachments are themselves archivable."
      },
      {
        "h2": "What conversion will change"
      },
      {
        "p": "[PDF to PDF/A](/tools/pdf-to-pdfa) enforces the standard, and some of that is destructive. Expect:"
      },
      {
        "ul": [
          "**Encryption removed.** Not permitted — an archive nobody can open is not an archive.",
          "**JavaScript and embedded media stripped.**",
          "**Form fields flattened** or their interactivity removed, depending on the level.",
          "**Fonts embedded,** or substituted where licensing prevents it — which can change appearance.",
          "**External links preserved as text** but no longer guaranteed to resolve."
        ]
      },
      {
        "p": "Check the converted file against the original before treating it as your archival copy. A substituted font that shifts a table's layout is exactly the sort of thing that goes unnoticed until someone needs the document a decade later."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Is PDF/A bigger than a normal PDF?",
            "a": "Usually somewhat, because everything is embedded. That is the trade for self-containment."
          },
          {
            "q": "Can I edit a PDF/A?",
            "a": "Editing generally breaks compliance. Edit the source and re-convert."
          },
          {
            "q": "Which PDF/A version do I need?",
            "a": "Whichever the recipient specifies. If unspecified, PDF/A-2 is a common general-purpose choice."
          },
          {
            "q": "Will my document look the same?",
            "a": "Usually. Fonts that could not be embedded are substituted, so check anything typographically sensitive."
          }
        ]
      }
    ]
  },
  {
    "slug": "scan-to-pdf-vs-image-to-pdf",
    "title": "Scan to PDF vs Image to PDF: Which You Actually Want",
    "metaTitle": "Scan to PDF vs JPG to PDF — What Is the Difference | ThePDFNinja",
    "metaDescription": "One wraps images in a container, the other processes them to look like scans first. Which fits which source.",
    "excerpt": "Two operations that sound identical and produce quite different files.",
    "date": "2026-11-11",
    "dateLabel": "November 11, 2026",
    "readMinutes": 7,
    "category": "Comparisons",
    "emoji": "📸",
    "keywords": [
      "scan to pdf vs image to pdf",
      "convert photos to scanned pdf",
      "document scan pdf",
      "jpg to pdf difference",
      "phone scan pdf"
    ],
    "blocks": [
      {
        "p": "'Scan to PDF' and 'image to PDF' sound like the same operation and produce quite different files. Which you want depends on whether the result needs to behave like a document."
      },
      {
        "h2": "The difference"
      },
      {
        "p": "[JPG to PDF](/tools/jpg-to-pdf) wraps your images in a PDF container, one per page. Fast, faithful, and the result is a stack of pictures."
      },
      {
        "p": "[Scan to PDF](/tools/scan-to-pdf) processes the images first — deskewing, adjusting contrast, cleaning up — to make them look like scanned documents rather than photographs, then assembles them."
      },
      {
        "h2": "Which to use"
      },
      {
        "table": {
          "headers": [
            "Source",
            "Use",
            "Why"
          ],
          "rows": [
            [
              "Phone photos of paper",
              "[Scan to PDF](/tools/scan-to-pdf)",
              "Corrects lighting and skew"
            ],
            [
              "Flatbed scans",
              "[JPG to PDF](/tools/jpg-to-pdf)",
              "Already clean; processing adds nothing"
            ],
            [
              "Screenshots",
              "[JPG to PDF](/tools/jpg-to-pdf)",
              "Perfectly clean already"
            ],
            [
              "Photographs as photographs",
              "[JPG to PDF](/tools/jpg-to-pdf)",
              "You want them unprocessed"
            ],
            [
              "Receipts on a desk",
              "[Scan to PDF](/tools/scan-to-pdf)",
              "Contrast correction helps a lot"
            ]
          ]
        }
      },
      {
        "h2": "Either way, finish the job"
      },
      {
        "p": "Whichever you use, the result is still images. To make it behave like a document:"
      },
      {
        "ol": [
          "[OCR](/tools/ocr) so it is searchable.",
          "[Rotate](/tools/rotate) anything sideways.",
          "[Organize](/tools/organize) into the right order.",
          "[Compress to size](/tools/compress-to-size) if there is a limit to meet."
        ]
      },
      {
        "note": "Do not process twice. Running an already-clean flatbed scan through document processing can over-sharpen and introduce artefacts that were not there."
      },
      {
        "h2": "What document processing actually changes"
      },
      {
        "p": "When a tool advertises 'scan to PDF' rather than plain conversion, it is applying a short pipeline to each image before assembly. Knowing what that pipeline does tells you when it will help and when it will hurt."
      },
      {
        "ul": [
          "**Deskew.** The image is analysed for the dominant text angle and rotated to square it. On a phone photo taken slightly off-axis this alone transforms the result, and it materially improves later [OCR](/tools/ocr) accuracy.",
          "**Perspective correction.** Where the page edges are detectable, the image is warped so a trapezoid becomes a rectangle. This is the step that makes a photo stop looking like a photo.",
          "**Contrast normalisation.** Lighting across a photographed page is rarely even. Local contrast adjustment lifts the shadowed side without blowing out the lit side, which a global brightness change cannot do.",
          "**Background suppression.** Off-white paper is pushed toward white and faint show-through from the reverse side is reduced. This is where most of the file size saving comes from.",
          "**Edge detection and crop.** The document boundary is found and everything outside it discarded."
        ]
      },
      {
        "p": "Each of those assumes it is looking at a document: dark text on light paper, straight edges, a rectangular subject. Feed it a photograph of a person and every assumption is wrong, which is why processing a holiday snapshot through a document pipeline produces something that looks bleached and over-sharpened."
      },
      {
        "h2": "A practical decision rule"
      },
      {
        "p": "Ask what the subject is, not where the image came from. If the subject is **a page** — anything with text on paper, whatever captured it — document processing helps. If the subject is **a scene or a person**, use plain [JPG to PDF](/tools/jpg-to-pdf) and leave the pixels alone."
      },
      {
        "p": "The confusing case is a photograph *of* a document that also contains a photograph, such as an ID card or a certificate with a portrait. Document processing will clean the text and may flatten the portrait unattractively. If the portrait matters for verification, convert plainly and accept a larger file."
      },
      {
        "h2": "Size in practice"
      },
      {
        "p": "For a typical phone photo of an A4 page, the difference is substantial. A raw capture might be 3–5MB. Plain conversion to PDF keeps roughly that. Document processing — greyscale, background suppression, contrast — commonly brings the same page to 200–400KB while making it more legible, not less."
      },
      {
        "p": "That matters when you are working toward an upload limit. Starting from a processed 300KB page and [compressing to size](/tools/compress-to-size) leaves the compressor very little to do. Starting from an unprocessed 4MB page means the compressor must discard 90% of the data, and it does that by degrading the text you need."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Which gives a smaller file?",
            "a": "Scan-to-PDF usually, because contrast processing and greyscale conversion compress better."
          },
          {
            "q": "Will scan processing damage a photograph?",
            "a": "Yes — it is tuned for documents. Use plain image-to-PDF for actual photographs."
          },
          {
            "q": "Do I still need OCR?",
            "a": "Yes. Neither operation adds a text layer on its own."
          },
          {
            "q": "Can I mix scans and photos in one PDF?",
            "a": "Yes, though the result will look inconsistent. Process them separately and merge."
          }
        ]
      }
    ]
  },
  {
    "slug": "what-happens-to-uploaded-files",
    "title": "What Actually Happens to a File You Upload to an Online Tool",
    "metaTitle": "Are Online PDF Tools Safe? What Happens to Your File | ThePDFNinja",
    "metaDescription": "Six questions worth asking any service, what we do specifically, and the material you should not upload anywhere.",
    "excerpt": "Every online tool receives your file. What varies is what happens next — and what you should ask before finding out.",
    "date": "2026-11-19",
    "dateLabel": "November 19, 2026",
    "readMinutes": 9,
    "category": "Comparisons",
    "emoji": "🛡️",
    "keywords": [
      "are online pdf tools safe",
      "upload file privacy",
      "pdf tool security",
      "what happens to uploaded files",
      "online tool data retention"
    ],
    "blocks": [
      {
        "p": "Every online tool that processes your file receives your file. That is unavoidable — it is what 'online tool' means. What varies is what happens next, and it is worth knowing what to ask."
      },
      {
        "h2": "The questions that matter"
      },
      {
        "ol": [
          "**Is the connection encrypted end to end?** HTTPS for the page and for the upload itself.",
          "**How long is the file kept?** A specific number beats 'we respect your privacy'.",
          "**Is deletion enforced or promised?** A scheduled job that deletes is different from a policy that says it will.",
          "**Is the file readable by staff?** Most services do not look; few say so explicitly.",
          "**Does it require an account?** Every identifier attached to your document is a linkage you did not need.",
          "**Where is it processed?** Jurisdiction matters for some categories of data."
        ]
      },
      {
        "h2": "What we do"
      },
      {
        "p": "Uploads and outputs are deleted within an hour by a scheduled job — not by a policy sentence. No account is required, so your document is not linked to an identity. We do not inspect file contents. Transfers use HTTPS throughout."
      },
      {
        "note": "That is a reasonable posture and it is still not the same as a file never leaving your machine. For genuinely confidential material — privileged legal documents, patient records, unpublished financial results — offline software is the right answer, and no online service's policy changes that."
      },
      {
        "h2": "Practical habits"
      },
      {
        "ul": [
          "**Redact before uploading,** not after. If a tool does not need to see a name, remove it first.",
          "**Strip metadata** before sharing anything, wherever it was processed.",
          "**Check your organisation's policy.** Many prohibit third-party uploads for certain categories, and that is not your call to make individually.",
          "**Prefer tools that need no account** for one-off tasks.",
          "**Download your result promptly** — retention windows are short by design, which is the point."
        ]
      },
      {
        "h2": "What a retention policy should say"
      },
      {
        "p": "The difference between a meaningful commitment and reassuring language is specificity. Compare:"
      },
      {
        "ul": [
          "**Vague:** 'We take your privacy seriously and delete files regularly.' No number, no mechanism, no way to check.",
          "**Specific:** 'Uploads and outputs are deleted within one hour by a scheduled job that runs every five minutes.' A number, a mechanism, and a claim that could be falsified."
        ]
      },
      {
        "p": "The second is not automatically true because it is specific, but it is at least the kind of statement an organisation has had to think about. The first is compatible with never deleting anything."
      },
      {
        "p": "Also worth checking: does the policy distinguish between the **uploaded file** and the **output**? Both exist, both persist, and a policy that mentions only one may leave the other indefinitely."
      },
      {
        "h2": "Reducing what you upload in the first place"
      },
      {
        "p": "The most effective privacy measure is not choosing a better service but sending less to whichever one you use."
      },
      {
        "ol": [
          "**[Extract](/tools/extract-pages) the pages that need processing.** Compressing page 12 does not require uploading pages 1–200.",
          "**[Redact](/tools/pdf-redact) identifiers locally** before uploading, where the tool does not need them.",
          "**[Remove metadata](/tools/remove-metadata) first,** so author names and file paths are not part of what you send.",
          "**[Split](/tools/split) and process separately** where no single upload then contains the full picture.",
          "**Download the result and verify it promptly,** rather than leaving files sitting server-side."
        ]
      },
      {
        "h2": "Where the line honestly falls"
      },
      {
        "p": "A useful test: if this file leaked, what would you have to do? If the answer is 'nothing much', convenience is a reasonable basis for choosing a tool. If the answer involves notifying a regulator, informing a client, or reporting a breach, work offline — regardless of any policy you have read, including ours."
      },
      {
        "p": "That framing is more reliable than trying to classify documents as sensitive or not, because it makes you think about consequences rather than categories, and consequences are what actually matter."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Are online PDF tools safe?",
            "a": "Reputable ones are, for ordinary documents. Check retention, encryption and whether an account is required."
          },
          {
            "q": "Can staff read my uploaded file?",
            "a": "At most services, technically possible and not done. Ask whether a service states this explicitly."
          },
          {
            "q": "What should never be uploaded?",
            "a": "Anything your professional obligations cover — privileged, medical, or regulated data. Use offline tools."
          },
          {
            "q": "Does deleting the browser tab delete the file?",
            "a": "No. Deletion happens on the server on its own schedule."
          }
        ]
      }
    ]
  }
];
