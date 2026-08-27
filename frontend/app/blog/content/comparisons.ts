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
    "date": "2026-09-17",
    "dateLabel": "September 17, 2026",
    "readMinutes": 7,
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
    "date": "2026-09-21",
    "dateLabel": "September 21, 2026",
    "readMinutes": 7,
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
  }
];
