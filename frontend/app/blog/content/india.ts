import type { BlogArticle } from './types';

// India-specific guides: exam portals, government forms and the exact file-size
// and dimension rules that reject uploads.

export const indiaArticles: BlogArticle[] = [
  {
    "slug": "compress-photo-to-20kb",
    "title": "How to Compress a Photo to 20KB Without It Turning to Mush",
    "metaTitle": "Compress Photo to 20KB Online — Free, Exact Size | ThePDFNinja",
    "metaDescription": "Exam and government portals often cap signature or photo uploads at 20KB. How to hit that exact ceiling while keeping the image legible.",
    "excerpt": "20KB is a brutally small budget for a photograph. Here is how to get there deliberately rather than by trial and error.",
    "date": "2026-08-05",
    "dateLabel": "August 5, 2026",
    "readMinutes": 10,
    "category": "India Guides",
    "emoji": "📸",
    "keywords": [
      "compress photo to 20kb",
      "20kb photo converter",
      "reduce image size to 20kb",
      "signature 20kb",
      "photo resize 20kb online",
      "compress signature to 20kb online",
      "20kb photo converter free",
      "signature resize 20kb jpg",
      "photo compress 20kb without losing quality",
      "resize signature for exam form",
      "compress image to 20kb on mobile"
    ],
    "blocks": [
      {
        "p": "Indian application portals are famously strict about upload sizes, and 20KB is one of the tightest limits you will meet — usually for a scanned signature, occasionally for a thumbnail photograph. Most people get there by repeatedly saving at lower quality until the number drops, which wastes time and produces a worse image than necessary."
      },
      {
        "h2": "Why 20KB is hard, and why it is achievable"
      },
      {
        "p": "A phone photo is 3–8MB. Reaching 20KB means discarding well over 99% of the data. You cannot do that by quality reduction alone — pushing JPEG quality low enough leaves visible blocking artefacts across the whole image."
      },
      {
        "p": "The trick is that **dimensions matter more than quality**. A signature does not need to be 4000 pixels wide. At 600×200 pixels, moderate JPEG quality lands comfortably under 20KB and still looks crisp, because you removed pixels rather than degrading the ones you kept."
      },
      {
        "h2": "The order that works"
      },
      {
        "ol": [
          "**Crop first.** [Crop the image](/tools/image-crop) to just the signature or face. Background is pure waste at this budget — often half your file.",
          "**Resize second.** [Resize](/tools/image-resize) to roughly the dimensions the portal displays. For a signature, 600px wide is generous.",
          "**Greyscale, if it is ink on paper.** [Convert to greyscale](/tools/image-to-grayscale) — this alone typically removes a third with no visible change to a black signature.",
          "**Then compress to the exact target.** [Image to size](/tools/image-to-size) searches for the quality that lands just under your ceiling, so you get the best image that fits."
        ]
      },
      {
        "note": "Doing this in the wrong order is why people struggle. Compressing a full-resolution photo to 20KB destroys it; cropping and resizing first means the compressor has far less work to do and can be gentler."
      },
      {
        "h2": "Signature-specific advice"
      },
      {
        "ul": [
          "Sign in **black or dark blue ink on plain white paper**. Ruled paper adds lines the compressor must encode.",
          "Photograph or scan in even light with no shadow across the page.",
          "Crop tight — a little white margin around the signature, nothing more.",
          "Greyscale is nearly always acceptable and nearly always helps."
        ]
      },
      {
        "h2": "Photograph-specific advice"
      },
      {
        "p": "If it is a face photo at 20KB, keep the crop tight to head and shoulders. Detail in a background you do not need costs you detail in the face you do. Plain light backgrounds compress far better than busy ones — which is also why most notifications ask for one."
      },
      {
        "note": "Requirements change between cycles and vary by exam body. Always confirm the exact figures against the current official notification before you upload — this guide explains how to hit whatever numbers it specifies."
      },
      {
        "h2": "Why dimensions beat quality at this budget"
      },
      {
        "p": "It is worth seeing the arithmetic, because it explains why the usual approach fails."
      },
      {
        "p": "A JPEG's size depends on how many pixels it has and how much detail is kept in each region. At 20KB you have roughly 20,000 bytes for the entire image. A 3000×2000 photograph has six million pixels — that is about 0.003 bytes per pixel, far below what JPEG needs to represent anything. The encoder responds by discarding almost all detail, which is why you get blocking across the whole frame."
      },
      {
        "p": "Crop and resize to 600×200 and you have 120,000 pixels. Now you have 0.17 bytes per pixel — fifty times more budget per pixel — and the encoder can preserve edges cleanly. Same file size, completely different result."
      },
      {
        "h2": "A worked example"
      },
      {
        "table": {
          "headers": [
            "Step",
            "Dimensions",
            "Size",
            "Notes"
          ],
          "rows": [
            [
              "Phone photo of signature",
              "3024 × 4032",
              "4.2 MB",
              "Includes desk, shadow, whole page"
            ],
            [
              "After cropping to signature",
              "1400 × 480",
              "890 KB",
              "Background removed"
            ],
            [
              "After resize",
              "600 × 206",
              "96 KB",
              "Still full quality"
            ],
            [
              "After greyscale",
              "600 × 206",
              "41 KB",
              "No visible change to black ink"
            ],
            [
              "After compress-to-size",
              "600 × 206",
              "19 KB",
              "Clean, legible"
            ]
          ]
        }
      },
      {
        "p": "Those figures vary with the source, but the shape holds: most of the reduction comes from removing pixels you did not need, and compression only does the last step."
      },
      {
        "h2": "When 20KB genuinely will not work"
      },
      {
        "p": "Occasionally the requirement and the content are incompatible. A colour photograph with a detailed background will not survive 20KB in any usable form. If that is what is asked for, the answer is not harder compression:"
      },
      {
        "ul": [
          "**Recapture with a plain background.** A signature on white paper compresses to a fraction of the same signature on a wood desk.",
          "**Check whether greyscale is permitted.** For signatures and thumb impressions it almost always is, and it is a third of the size.",
          "**Re-read the requirement.** Sometimes 20KB is a *minimum* and you have been reading it as a maximum.",
          "**Check the units.** 20KB and 20KiB differ by 2%, which matters when you are at the boundary."
        ]
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "Most people preparing an exam application are doing it on a phone, and every step here works in a mobile browser."
      },
      {
        "p": "**On Android:** photograph the signature, then open Chrome and use [Image crop](/tools/image-crop), [resize](/tools/image-resize) and [compress to size](/tools/image-to-size) in sequence. Each step downloads a file to your Downloads folder that you feed into the next."
      },
      {
        "p": "**On iPhone:** the same flow works in Safari. One extra step — iPhone photos are usually HEIC, which most portals reject. Convert with [HEIC to JPG](/tools/heic-to-jpg) first, before cropping."
      },
      {
        "p": "**A caution about gallery apps:** the built-in crop tools in Photos and Google Photos re-save the image at full resolution, so they crop without reducing size much. Use them to frame if you like, but do the resizing and compression properly afterwards."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Will a 20KB photo look bad?",
            "a": "Not if you crop and resize before compressing. A tightly cropped signature at 600px wide looks clean at 20KB. The same signature at full camera resolution would not."
          },
          {
            "q": "JPG or PNG for a 20KB target?",
            "a": "JPG, almost always. PNG is lossless and cannot be tuned down to an arbitrary size. Most portals specify JPG anyway."
          },
          {
            "q": "My file is 21KB and it still rejects. Why?",
            "a": "Some portals check against 20,480 bytes (20 × 1024), others against 20,000. Target a little under to be safe."
          },
          {
            "q": "Can I just take a lower-resolution photo?",
            "a": "You can, but you lose the ability to crop well. Shoot at normal quality and reduce afterwards."
          },
          {
            "q": "How do I compress a photo to 20KB on my phone?",
            "a": "Crop tight to the signature, resize to around 600 pixels wide, convert to greyscale, then compress to size. All four steps work in a mobile browser. On iPhone, convert from HEIC to JPG first."
          },
          {
            "q": "How do I make a signature 20KB without losing clarity?",
            "a": "Reduce dimensions rather than quality. A signature at 600×200 pixels stays crisp at 20KB; the same signature at full camera resolution does not."
          },
          {
            "q": "Which is better for a 20KB signature, JPG or PNG?",
            "a": "JPG. PNG is lossless and cannot be tuned down to an arbitrary size, and most portals specify JPG anyway."
          },
          {
            "q": "Why does my signature look grey instead of black?",
            "a": "Usually under-exposure or a pencil rather than pen. Sign in black or dark blue ink, photograph in good light, and convert to greyscale which increases contrast rather than reducing it."
          }
        ]
      }
    ]
  },
  {
    "slug": "compress-photo-to-50kb",
    "title": "How to Compress a Photo to 50KB for Application Forms",
    "metaTitle": "Compress Photo to 50KB Online — Free & Exact | ThePDFNinja",
    "metaDescription": "50KB is the most common photo limit on Indian exam and job portals. How to hit it reliably while keeping the photo acceptable to a verifier.",
    "excerpt": "The most common limit you will meet on application portals. Comfortable enough for a decent photo — if you approach it in the right order.",
    "date": "2026-08-10",
    "dateLabel": "August 10, 2026",
    "readMinutes": 10,
    "category": "India Guides",
    "emoji": "🪪",
    "keywords": [
      "compress photo to 50kb",
      "50kb photo",
      "reduce photo size to 50kb",
      "passport photo 50kb",
      "image compress 50kb online",
      "compress photo to 50kb online free",
      "resize photo 50kb for form",
      "passport photo 50kb jpg",
      "reduce image size to 50kb on mobile",
      "photo compress 50kb without losing quality",
      "50kb photo size converter"
    ],
    "blocks": [
      {
        "p": "50KB is the workhorse limit of Indian application forms. It appears on exam portals, job applications, scholarship forms and verification systems. It is tight, but unlike 20KB it leaves enough room for a genuinely presentable photograph."
      },
      {
        "h2": "What 50KB buys you"
      },
      {
        "p": "At passport-photo proportions — roughly 3:4 — 50KB comfortably supports around 400×530 pixels at good JPEG quality. That is sharp on screen and prints acceptably at the small sizes these forms use. You do not need to sacrifice much."
      },
      {
        "h2": "The method"
      },
      {
        "ol": [
          "[Crop](/tools/image-crop) to the required proportion first. Most forms want 3:4 portrait; cropping later wastes the pixels you paid for.",
          "[Resize](/tools/image-resize) to roughly 400×530. Larger gains you nothing on a form that displays it at postage-stamp size.",
          "[Compress to exactly 50KB](/tools/image-to-size) rather than guessing at a quality slider."
        ]
      },
      {
        "p": "If the form wants a passport-standard crop specifically, [resize to passport size](/tools/resize-to-passport) handles the proportions for you before you compress."
      },
      {
        "h2": "What verifiers actually reject"
      },
      {
        "p": "Size is the easy part. Photos get rejected at verification for reasons compression cannot fix:"
      },
      {
        "ul": [
          "**Background.** Plain white or light grey. Patterned walls and doorframes get rejected.",
          "**Face coverage.** The face should fill most of the frame — a distant photo cropped in looks soft and fails.",
          "**Lighting.** Even, front-on. Shadow across half the face is a common rejection.",
          "**Expression and framing.** Neutral, facing camera, both ears roughly visible, no sunglasses or cap.",
          "**Recency.** Many bodies require a photo taken within the last three to six months."
        ]
      },
      {
        "note": "Take the photo properly rather than rescuing a bad one. No amount of compression skill fixes a shadowed, off-angle shot — and verification failures cost far more time than a retake."
      },
      {
        "note": "Requirements change between cycles and vary by exam body. Always confirm the exact figures against the current official notification before you upload — this guide explains how to hit whatever numbers it specifies."
      },
      {
        "h2": "What resolution 50KB actually supports"
      },
      {
        "p": "Working backwards from the budget is more useful than guessing at quality sliders."
      },
      {
        "table": {
          "headers": [
            "Dimensions",
            "Content",
            "Fits 50KB?"
          ],
          "rows": [
            [
              "300 × 400",
              "Head-and-shoulders, plain background",
              "Comfortably, high quality"
            ],
            [
              "400 × 530",
              "Head-and-shoulders, plain background",
              "Yes, good quality"
            ],
            [
              "600 × 800",
              "Head-and-shoulders, plain background",
              "Tight; some softening"
            ],
            [
              "600 × 800",
              "Busy background",
              "Visible artefacts"
            ],
            [
              "1200 × 1600",
              "Anything",
              "No — heavy degradation"
            ]
          ]
        }
      },
      {
        "p": "The pattern is that background complexity costs as much as resolution. A plain wall compresses to almost nothing because there is no detail to encode; a bookshelf behind you consumes the budget you needed for your face."
      },
      {
        "h2": "Getting the crop right before you compress"
      },
      {
        "p": "Most forms specifying 50KB also specify pixel dimensions and often an aspect ratio. Satisfy those first, because cropping after compressing throws away pixels you already paid for."
      },
      {
        "ol": [
          "Establish the required aspect ratio — commonly 3:4 portrait.",
          "[Crop](/tools/image-crop) to that ratio, framing head and shoulders with a small margin above the hair.",
          "[Resize](/tools/image-resize) to the specified pixel dimensions.",
          "[Compress to size](/tools/image-to-size) at 45–48KB, leaving margin under the stated cap.",
          "Check the result at 100% — the face should be sharp, not waxy."
        ]
      },
      {
        "h2": "The photograph itself"
      },
      {
        "p": "A well-taken photo at 50KB looks better than a poorly taken one at 500KB, and it is also easier to compress. Four things do most of the work:"
      },
      {
        "ul": [
          "**Front light.** Face a window in daylight. Overhead lighting puts shadows under the eyes and nose, which are both unflattering and expensive to encode.",
          "**Distance.** Have someone stand two metres back and zoom slightly rather than holding a phone at arm's length. Close-range wide-angle lenses enlarge the nose and narrow the ears, which reads as distortion to a verifier.",
          "**Plain background.** A light wall. This helps compression more than any setting.",
          "**Contrast with your clothing.** A white shirt against a white wall merges at the shoulders and some automated checks reject it."
        ]
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "Application forms are usually filled on a phone, and the whole preparation flow works in a mobile browser without installing anything."
      },
      {
        "p": "**On iPhone:** convert with [HEIC to JPG](/tools/heic-to-jpg) first — iPhone photos default to HEIC and most portals reject it outright. Then [crop](/tools/image-crop) to the required ratio, [resize](/tools/image-resize), and [compress to size](/tools/image-to-size)."
      },
      {
        "p": "**On Android:** photos are already JPG, so skip the conversion. Crop, resize, compress in Chrome, and each output lands in Downloads ready for the next step."
      },
      {
        "p": "**Check the result before uploading.** Open the finished file at full zoom on the phone. If the face looks waxy or blotchy, you compressed too far — go back and resize to smaller dimensions instead, which preserves more quality at the same file size."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Can I use a phone photo?",
            "a": "Yes, and most people do. Plain wall, natural light from the front, phone at eye level, someone else taking it. That beats most photo-booth output."
          },
          {
            "q": "Does 50KB mean 50,000 or 51,200 bytes?",
            "a": "It varies by portal. Aim for 45–48KB and the distinction stops mattering."
          },
          {
            "q": "Should the photo be colour?",
            "a": "Almost always yes for face photos. Greyscale is for signatures. Check the notification."
          },
          {
            "q": "Why does my photo get rejected after upload succeeds?",
            "a": "Upload checks size and format only. Human or automated verification checks background, lighting and framing later."
          },
          {
            "q": "How do I resize a photo to 50KB on my phone?",
            "a": "Crop to the required ratio, resize to roughly 400×530 pixels, then compress to size. All three work in a mobile browser. On iPhone convert from HEIC to JPG first."
          },
          {
            "q": "How do I make a passport photo 50KB without it looking bad?",
            "a": "Reduce dimensions before reducing quality. At 400×530 pixels a photo stays sharp at 50KB; at full camera resolution it will not."
          },
          {
            "q": "Why is my photo rejected even though it is under 50KB?",
            "a": "Size is only one of several checks. Pixel dimensions, aspect ratio, format and sometimes a minimum size are checked separately. Verify each against the notification."
          },
          {
            "q": "Can I use a selfie for an application photo?",
            "a": "Usually not. Arm's-length distance distorts facial proportions and the angle is rarely square to the face. Have someone else take it from about two metres and zoom in slightly."
          }
        ]
      }
    ]
  },
  {
    "slug": "compress-pdf-to-100kb",
    "title": "How to Compress a PDF to 100KB for Online Forms",
    "metaTitle": "Compress PDF to 100KB — Free Online Tool | ThePDFNinja",
    "metaDescription": "Hit an exact 100KB ceiling on a scanned document without making it unreadable. What to do when the scan simply will not fit.",
    "excerpt": "100KB for a multi-page scan is demanding. Here is how to get there, and what to do when the document genuinely cannot fit.",
    "date": "2026-08-15",
    "dateLabel": "August 15, 2026",
    "readMinutes": 10,
    "category": "India Guides",
    "emoji": "📄",
    "keywords": [
      "compress pdf to 100kb",
      "pdf 100kb",
      "reduce pdf size to 100kb",
      "100kb pdf converter",
      "document upload 100kb",
      "compress pdf to 100kb online free",
      "reduce pdf size to 100kb on mobile",
      "100kb pdf converter without watermark",
      "compress pdf 100kb without losing quality",
      "pdf size reducer 100kb free",
      "document compress 100kb online"
    ],
    "blocks": [
      {
        "p": "Government and exam portals frequently cap document uploads at 100KB. For a typed one-page PDF that is roomy. For a scanned mark sheet or certificate it is genuinely tight, and for a multi-page scan it can be close to impossible without care."
      },
      {
        "h2": "Know what you are compressing"
      },
      {
        "p": "The single most important question: is your PDF **text** or **an image of text**?"
      },
      {
        "ul": [
          "**Typed / exported from a document.** Already small, usually well under 100KB. If it is not, something else is inflating it — try [flatten](/tools/flatten-pdf) and [remove metadata](/tools/remove-metadata).",
          "**Scanned.** Every page is a photograph. This is where the work is, and where the guidance below applies."
        ]
      },
      {
        "h2": "For scanned documents"
      },
      {
        "ol": [
          "**Rescan in greyscale if you can.** A colour scan of a black-and-white certificate wastes two thirds of its data. If rescanning is not possible, [convert to greyscale](/tools/grayscale-pdf).",
          "**Crop the borders.** Scanner beds add black edges and skew. Cropping removes real data volume.",
          "**Use [compress to size](/tools/compress-to-size).** Name 100KB as the target and let it search for the highest quality that fits, rather than guessing.",
          "**Check legibility afterwards.** Open it at 100% and read the smallest text. If a verifier cannot read your roll number, the upload succeeding does not help you."
        ]
      },
      {
        "h2": "When it genuinely will not fit"
      },
      {
        "p": "Sometimes 100KB and legibility are incompatible — a dense five-page scan, for instance. Options, roughly in order of preference:"
      },
      {
        "ul": [
          "**Rescan at 200 DPI greyscale** rather than 600 DPI colour. This is far more effective than any compression.",
          "**Upload pages separately** if the portal allows one document per field.",
          "**[Split](/tools/split) and submit only the required page.** Many forms ask for one certificate, not the whole booklet.",
          "**Photograph rather than scan.** A well-lit phone photo, cropped and greyscaled, is often smaller than a flatbed scan at default settings."
        ]
      },
      {
        "note": "Compress last, always. Cropping, greyscaling and rescanning all reduce the data the compressor must handle, which means it can be gentler and your document stays readable."
      },
      {
        "note": "Requirements change between cycles and vary by exam body. Always confirm the exact figures against the current official notification before you upload — this guide explains how to hit whatever numbers it specifies."
      },
      {
        "h2": "Working out whether 100KB is achievable"
      },
      {
        "p": "Before spending time compressing, estimate whether the target is reachable. The rough arithmetic: a legible greyscale scan of a text page needs somewhere around 30–60KB at 150–200 DPI after compression."
      },
      {
        "table": {
          "headers": [
            "Document",
            "Realistic at 100KB?"
          ],
          "rows": [
            [
              "1 page, typed, born-digital",
              "Trivially — usually already under"
            ],
            [
              "1 page, greyscale scan",
              "Comfortably"
            ],
            [
              "2 pages, greyscale scan",
              "Achievable"
            ],
            [
              "3–4 pages, greyscale scan",
              "Tight; expect softening"
            ],
            [
              "5+ pages, greyscale scan",
              "Not legibly"
            ],
            [
              "Any colour scan of 2+ pages",
              "Not without greyscaling first"
            ]
          ]
        }
      },
      {
        "p": "If your document is in the bottom rows, no compression setting will rescue it. The fix is upstream: fewer pages, or a better capture, or separate uploads."
      },
      {
        "h2": "Reading the requirement carefully"
      },
      {
        "p": "Two details in upload specifications cause avoidable failures at this size."
      },
      {
        "p": "**A minimum as well as a maximum.** Portals sometimes reject files below a floor — often 10 or 20KB — to prevent blank placeholder uploads. Compressing to 8KB to be safe fails the check. Aim for the middle of any stated range, not its edge."
      },
      {
        "p": "**KB versus KiB.** 100KB may mean 100,000 bytes or 102,400. The difference is 2.4%, which only matters when you have compressed to exactly the boundary. Targeting 90–95KB removes the question entirely."
      },
      {
        "h2": "A checklist before you upload"
      },
      {
        "ol": [
          "Open the final PDF at 100% zoom.",
          "Read the smallest text — a registration number, a date, an issuing authority.",
          "Check the page count matches what the form asked for.",
          "Check the file size in your file manager, not in the tool that produced it.",
          "Confirm the format is genuinely PDF, not an image renamed.",
          "Give it a plain filename with no spaces or special characters."
        ]
      },
      {
        "p": "That takes under a minute and catches the failures that otherwise surface as an unexplained rejection after you have submitted."
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "Government forms are often completed on a phone, and every step works in a mobile browser with nothing to install."
      },
      {
        "p": "**On Android:** the document is usually in Downloads. Open Chrome, run [greyscale](/tools/grayscale-pdf), then [compress to size](/tools/compress-to-size) at 100KB. Each step produces a file in Downloads for the next."
      },
      {
        "p": "**On iPhone:** save the PDF to Files first if it arrived by email or WhatsApp. Uploading directly from an attachment preview fails in some iOS versions. Then the same sequence in Safari."
      },
      {
        "p": "**If you are photographing the document rather than scanning it,** convert with [JPG to PDF](/tools/jpg-to-pdf) first, then compress. Photograph straight down in even light — a skewed, shadowed capture needs far more compression to reach 100KB and ends up illegible."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why is my one-page scan larger than a 50-page report?",
            "a": "The report is text — characters and font references. Your scan is a high-resolution photograph of a page. Images dwarf text."
          },
          {
            "q": "Will compressing to 100KB make it unreadable?",
            "a": "It can, if you start from a 600 DPI colour scan. Greyscale at 200 DPI first, and 100KB is usually achievable while staying legible."
          },
          {
            "q": "Does the portal count KB or KiB?",
            "a": "It varies. Target 90–95KB and it stops mattering."
          },
          {
            "q": "Can I merge several certificates into one 100KB PDF?",
            "a": "Rarely with any legibility. If the form allows separate uploads, use them."
          },
          {
            "q": "How do I compress a PDF to 100KB on my phone?",
            "a": "Convert to greyscale, then compress to size at 100KB — both work in a mobile browser. On iPhone, save the file to Files first rather than uploading from a mail preview."
          },
          {
            "q": "How do I compress a PDF to 100KB without losing quality?",
            "a": "For a scan, greyscale and crop before compressing. Those are the steps that reduce data without touching legibility, so the compressor has less to destroy."
          },
          {
            "q": "Is there a free tool to compress a PDF to exactly 100KB?",
            "a": "Yes — [compress to size](/tools/compress-to-size) searches for the highest quality that fits your stated target. No signup and no watermark."
          },
          {
            "q": "My document will not reach 100KB and stay readable. What now?",
            "a": "Rescan at 200 DPI greyscale rather than compressing a 600 DPI colour original, or check whether the portal accepts separate uploads per page."
          }
        ]
      }
    ]
  },
  {
    "slug": "upsc-application-photo-signature-guide",
    "title": "Preparing Your Photo and Signature for the UPSC Application",
    "metaTitle": "UPSC Photo & Signature Upload — Size Guide | ThePDFNinja",
    "metaDescription": "How to prepare a photo and signature that clear the UPSC portal's size and format checks first time, and the rejection reasons that catch applicants out.",
    "excerpt": "The upload is the last hurdle of a long form, and the one that most often sends people back to the start. Here is how to get it right first time.",
    "date": "2026-08-20",
    "dateLabel": "August 20, 2026",
    "readMinutes": 10,
    "category": "India Guides",
    "emoji": "🎓",
    "keywords": [
      "upsc photo size",
      "upsc signature upload",
      "upsc application photo requirements",
      "upsc photo signature size",
      "civil services photo upload",
      "upsc photo signature size online",
      "upsc application photo upload free",
      "upsc photo resize on mobile",
      "civil services photo signature format",
      "upsc document upload guide",
      "exam photo signature converter free"
    ],
    "blocks": [
      {
        "p": "The UPSC application is long, and the photo-and-signature upload sits at the end of it. Getting rejected there — after an hour of form filling — is a particular kind of frustrating, and it is almost always a size or format problem rather than anything about the photograph itself."
      },
      {
        "h2": "Read the notification first"
      },
      {
        "p": "UPSC publishes exact dimensions, file size ranges and format requirements in each cycle's notification, and they are not identical year to year. **Take the numbers from the notification you are applying under**, not from a blog post or a previous year's form."
      },
      {
        "note": "Requirements change between cycles and vary by exam body. Always confirm the exact figures against the current official notification before you upload — this guide explains how to hit whatever numbers it specifies."
      },
      {
        "h2": "Preparing the photograph"
      },
      {
        "ol": [
          "Plain light background, front-facing, even lighting, neutral expression. Face should fill most of the frame.",
          "Many cycles require the photograph to carry a **printed date** and sometimes the candidate's name. Check whether yours does — this catches out people who reuse an old photo.",
          "[Crop](/tools/image-crop) to the required proportion before anything else.",
          "[Resize](/tools/image-resize) to the specified pixel dimensions.",
          "[Compress to the required size](/tools/image-to-size) as the last step."
        ]
      },
      {
        "h2": "Preparing the signature"
      },
      {
        "ol": [
          "Sign in black or dark blue ink on plain white paper. Not ruled, not coloured.",
          "Scan or photograph it flat with even lighting.",
          "[Crop](/tools/image-crop) tight to the signature.",
          "[Convert to greyscale](/tools/image-to-grayscale) — usually acceptable and a large size saving.",
          "[Compress to the required size](/tools/image-to-size)."
        ]
      },
      {
        "h2": "Where applications actually fail"
      },
      {
        "ul": [
          "**File too large or too small.** Some cycles specify a *minimum* as well as a maximum. A heavily compressed file can fail for being too small.",
          "**Wrong dimensions.** Size in KB and size in pixels are separate requirements. Meeting one does not meet the other.",
          "**Wrong format.** JPG is typically required. A PNG renamed to .jpg is still a PNG and will be rejected.",
          "**Signature in the photo field.** Easily done at the end of a long form. Check before submitting.",
          "**Missing date on photo,** where the cycle requires it."
        ]
      },
      {
        "h2": "Do it before you start the form"
      },
      {
        "p": "Prepare both files, verify their size and dimensions, and keep them on the device you will apply from. Portals time out, and hunting for a photo mid-session is how sessions get lost."
      },
      {
        "h2": "Why this specific upload causes so much trouble"
      },
      {
        "p": "The photo and signature step sits at the end of a long form, which means people reach it tired, under deadline pressure, and having already invested an hour. That is precisely the wrong state in which to discover that a file needs reworking."
      },
      {
        "p": "It is also unusual in checking several independent properties at once. Most form fields validate one thing. This validates file size against both a maximum and sometimes a minimum, pixel dimensions, aspect ratio, file format, and occasionally the presence of a printed date on the photograph — and reports failure with a single generic message."
      },
      {
        "h2": "Building your files the evening before"
      },
      {
        "p": "The single most effective change is to prepare everything before you open the application at all. A routine that takes fifteen minutes when you are not under pressure:"
      },
      {
        "ol": [
          "Open the current notification and write the requirements down: photo max/min size, photo pixel dimensions, signature max/min size, signature dimensions, format, and whether a date is required on the photo.",
          "Take or locate the photograph. Check it against the framing rules before doing anything technical.",
          "Sign on plain white paper and capture it flat.",
          "Process both: [crop](/tools/image-crop), [resize](/tools/image-resize), [greyscale](/tools/image-to-grayscale) the signature, then [compress to size](/tools/image-to-size).",
          "Verify each file's properties — size in bytes, pixel dimensions, actual format.",
          "Put both in a clearly named folder on the device you will apply from."
        ]
      },
      {
        "h2": "Keeping a reusable set"
      },
      {
        "p": "Anyone applying to several examinations will use these files repeatedly, and it is worth keeping a small archive rather than rebuilding each time."
      },
      {
        "p": "Keep the **high-resolution originals** — the uncropped photograph and the full-resolution signature scan — separately from the processed versions. Different examinations specify different dimensions, and you can always produce a new processed file from a good original. You cannot recover detail from a file already compressed to 20KB."
      },
      {
        "p": "Two cautions. Where a cycle requires a **printed date** on the photograph, that photograph is only valid for applications within its validity window — reusing it later fails verification even though the file is technically correct. And some bodies specify a photograph taken within a set period, so an archive is a convenience, not a permanent solution."
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "Most candidates prepare these files on a phone. Everything works in a mobile browser, with one iPhone-specific step."
      },
      {
        "p": "**On iPhone:** camera output is HEIC, which the portal will not accept. Either switch to JPG in Settings → Camera → Formats → Most Compatible before photographing, or convert afterwards with [HEIC to JPG](/tools/heic-to-jpg)."
      },
      {
        "p": "**Both platforms:** [crop](/tools/image-crop) → [resize](/tools/image-resize) → [greyscale](/tools/image-to-grayscale) for the signature → [compress to size](/tools/image-to-size). Each step downloads a file you feed into the next."
      },
      {
        "p": "**Verify on a larger screen if you can.** A phone screen makes it hard to judge whether a compressed signature has lost ridge definition or whether a face photo has gone waxy. If you only have a phone, zoom to full size and check carefully."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Can I use the same photo for other exams?",
            "a": "Often yes, if dimensions and size match. But if your cycle requires a printed date, that photo may not be valid for a later one."
          },
          {
            "q": "My file is under the limit but still rejected.",
            "a": "Check pixel dimensions and format separately from file size. Also check for a minimum size requirement."
          },
          {
            "q": "Colour or greyscale signature?",
            "a": "Greyscale is generally fine and much smaller. Confirm against the notification."
          },
          {
            "q": "What if I have no scanner?",
            "a": "A phone photo taken straight down in even light, cropped tight and greyscaled, works well."
          },
          {
            "q": "What size photo and signature does the UPSC application need?",
            "a": "Take the exact figures from the current cycle's official notification — they are specified there and change between cycles. This guide covers how to hit whatever numbers it states."
          },
          {
            "q": "Can I prepare UPSC documents on my phone?",
            "a": "Yes, entirely in a mobile browser. On iPhone convert from HEIC to JPG first, since the portal will not accept HEIC."
          },
          {
            "q": "Why was my UPSC photo upload rejected?",
            "a": "Usually one of: file size outside the permitted range including any minimum, wrong pixel dimensions, wrong format, or a missing printed date where the cycle requires one."
          },
          {
            "q": "Can I reuse a photo from a previous exam application?",
            "a": "Often, if dimensions and size match. Not where the cycle requires a printed date or a photograph taken within a recent window."
          }
        ]
      }
    ]
  },
  {
    "slug": "resize-photo-to-passport-size",
    "title": "How to Resize a Photo to Passport Size at Home",
    "metaTitle": "Resize Photo to Passport Size Online — Free | ThePDFNinja",
    "metaDescription": "Passport photo dimensions differ by country and purpose. How to crop and resize correctly, and what gets a photo rejected at submission.",
    "excerpt": "You do not need a photo studio. You do need the right proportions, background and framing — here is how to get all three.",
    "date": "2026-08-25",
    "dateLabel": "August 25, 2026",
    "readMinutes": 10,
    "category": "India Guides",
    "emoji": "🛂",
    "keywords": [
      "resize photo to passport size",
      "passport size photo online",
      "passport photo dimensions",
      "passport size photo maker",
      "photo resize passport",
      "passport size photo online free",
      "passport photo maker free no watermark",
      "passport size photo on mobile",
      "passport photo in pixels",
      "make passport photo at home",
      "resize photo passport size iphone"
    ],
    "blocks": [
      {
        "p": "\"Passport size\" is not one measurement. India commonly uses 35×45mm for passports and a variety of sizes for exam and job applications; other countries differ again, and the US uses a square 2×2 inch format. Cropping to the wrong one is the most common reason a photo is returned."
      },
      {
        "h2": "Establish the target first"
      },
      {
        "p": "Before touching the image, find the exact requirement in the official instructions for whatever you are applying to. You need three things: **physical dimensions** (or aspect ratio), **pixel dimensions**, and **file size**. They are separate constraints and you must satisfy all three."
      },
      {
        "note": "Requirements change between cycles and vary by exam body. Always confirm the exact figures against the current official notification before you upload — this guide explains how to hit whatever numbers it specifies."
      },
      {
        "h2": "Taking a usable photo"
      },
      {
        "ul": [
          "**Background:** plain white or light grey. A bedsheet or a painted wall works. No patterns, no shadow on the wall behind you.",
          "**Light:** face a window during daylight. Overhead lighting casts shadows under the eyes and nose.",
          "**Distance:** have someone stand a couple of metres back and zoom in slightly rather than holding the phone at arm's length — this avoids the wide-angle distortion that makes noses look large.",
          "**Pose:** square to the camera, neutral expression, eyes open, mouth closed, no hat or tinted glasses.",
          "**Clothing:** avoid white, which merges into the background."
        ]
      },
      {
        "h2": "Cropping and resizing"
      },
      {
        "p": "[Resize to passport size](/tools/resize-to-passport) handles the standard proportions. If your target uses different dimensions, [crop](/tools/image-crop) to the correct aspect ratio first, then [resize](/tools/image-resize) to the specified pixels."
      },
      {
        "p": "Head placement matters as much as the crop. Most standards want the head to occupy roughly 70–80% of the frame height, with a small margin above the hair. A photo cropped too wide reads as a snapshot and gets rejected even at the right dimensions."
      },
      {
        "h2": "Meeting the file size"
      },
      {
        "p": "Once dimensions are right, [compress to the exact size](/tools/image-to-size) required. Do this last — compressing before cropping wastes quality on pixels you then discard."
      },
      {
        "h2": "Common standards, and why they differ"
      },
      {
        "p": "The variation between standards is not arbitrary — different systems capture different things. Some prioritise facial recognition compatibility, some prioritise printing on a specific document, some are historical."
      },
      {
        "table": {
          "headers": [
            "Use",
            "Typical size",
            "Note"
          ],
          "rows": [
            [
              "India passport",
              "35 × 45 mm",
              "Also common for many Indian exam forms"
            ],
            [
              "UK / EU passport",
              "35 × 45 mm",
              "Similar framing rules"
            ],
            [
              "US passport",
              "51 × 51 mm (2 × 2 in)",
              "Square — a crop for elsewhere will not fit"
            ],
            [
              "Indian PAN / voter ID",
              "Varies",
              "Check the specific form"
            ],
            [
              "Schengen visa",
              "35 × 45 mm",
              "Strict on background and expression"
            ]
          ]
        }
      },
      {
        "p": "The US square format is the one that catches people out. A 35×45 crop cannot be made square without either losing the top of the head or adding background, so if you may need both, shoot with enough margin to crop either way."
      },
      {
        "h2": "Head positioning, which matters as much as dimensions"
      },
      {
        "p": "Most standards specify not just the frame but where the head sits within it — typically the head occupying 70–80% of the frame height, with a defined margin above the hair and the eyes falling within a horizontal band."
      },
      {
        "p": "This is why a snapshot cropped to the right proportions still gets rejected. The dimensions are correct; the head is too small and sits too low because the original photo was taken from too far away and cropped in. There is no fix for that except reshooting closer."
      },
      {
        "h2": "Printing them yourself"
      },
      {
        "p": "If you need physical prints rather than a file:"
      },
      {
        "ol": [
          "Prepare the image at the correct proportions with [resize to passport](/tools/resize-to-passport).",
          "Build a grid at true physical size — at 300 DPI, a 35×45mm photo is 413 × 531 pixels.",
          "Arrange several on a 4×6 inch canvas, which most print services handle.",
          "Print on photo paper at 300 DPI with any scaling disabled — 'fit to page' will silently resize them.",
          "**Measure the printed result with a ruler** before submitting. This is the step people skip and it is the only way to catch a scaling error."
        ]
      },
      {
        "note": "Print shops sometimes apply automatic enhancement that brightens skin tones or smooths features. For an identity document that can cause a rejection. Ask for it disabled, or print at home."
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "Passport photos are almost always taken and prepared on a phone now, and the whole flow works in a mobile browser."
      },
      {
        "p": "**On iPhone:** photos are HEIC by default, which most passport and visa portals reject. Convert with [HEIC to JPG](/tools/heic-to-jpg) first, then [crop](/tools/image-crop) to the required ratio, [resize to passport dimensions](/tools/resize-to-passport), and [compress to size](/tools/image-to-size) if a file size is specified."
      },
      {
        "p": "**On Android:** photos are JPG already, so start at the crop step in Chrome."
      },
      {
        "p": "**Do not rely on the gallery crop.** Photos and Google Photos crop but re-save at full resolution, so the file barely shrinks. Use them to frame if you find it easier, then do the dimensional work properly."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Can I print several on one sheet?",
            "a": "Yes. Build a grid at the right physical size and print on photo paper at 300 DPI. Verify the printed dimensions with a ruler before submitting."
          },
          {
            "q": "Is a selfie acceptable?",
            "a": "Usually not — arm's-length distance distorts facial proportions and the angle is rarely straight. Have someone else take it."
          },
          {
            "q": "Does the background have to be pure white?",
            "a": "Depends on the standard. Many accept light grey or off-white. Check the instructions."
          },
          {
            "q": "Can I remove the background digitally?",
            "a": "Risky. Automated removal often clips hair and creates halos that verifiers notice. A plain wall is safer."
          },
          {
            "q": "How do I make a passport size photo on my phone for free?",
            "a": "Have someone photograph you against a plain wall in daylight, then crop, resize to the required dimensions, and compress — all in a mobile browser. On iPhone convert from HEIC to JPG first."
          },
          {
            "q": "What is passport size photo in pixels?",
            "a": "It depends on the standard. For a 35×45mm photo at 300 DPI that is roughly 413×531 pixels. Take the exact figure from the official instructions for your application."
          },
          {
            "q": "Can I take a passport photo at home?",
            "a": "Yes, for most applications. The requirements are about background, lighting, framing and expression rather than about where it was taken."
          },
          {
            "q": "Why was my passport photo rejected?",
            "a": "Most commonly background shadow, head size outside the permitted band, glasses, or an expression that fails an automated check. None of those can be fixed by resizing — reshoot."
          }
        ]
      }
    ]
  },
  {
    "slug": "scan-documents-with-phone-for-forms",
    "title": "How to Scan Documents with Your Phone for Online Forms",
    "metaTitle": "Scan Documents with a Phone for Online Forms | ThePDFNinja",
    "metaDescription": "Phone photos beat cheap scanners for form uploads if you shoot them properly. Lighting, framing and the processing that makes them look scanned.",
    "excerpt": "You do not need a scanner. You do need to stop photographing documents at an angle on a dark desk.",
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 10,
    "category": "India Guides",
    "emoji": "📱",
    "keywords": [
      "scan document with phone",
      "phone scanner for forms",
      "scan certificate for upload",
      "mobile document scan",
      "photo to pdf document",
      "scan document with phone free",
      "scan to pdf on iphone free",
      "android document scanner pdf",
      "scan certificate with mobile",
      "photo to pdf scan quality"
    ],
    "blocks": [
      {
        "p": "Most people uploading documents to a portal have no scanner and use a phone. Done carelessly this produces a shadowed, skewed photograph that gets rejected. Done properly it beats a cheap flatbed — phones have excellent sensors and you control the lighting."
      },
      {
        "h2": "Shooting it right"
      },
      {
        "ol": [
          "**Flat surface, good light.** Put the document on a plain table near a window. Daylight from the side, not directly overhead.",
          "**Shoot straight down.** Hold the phone parallel to the page, not tilted. Perspective distortion is the single biggest giveaway of a phone photo.",
          "**Do not use flash.** It creates a hotspot in the middle and shadows at the edges.",
          "**Do not cast a shadow.** Your own head and arms are the usual culprits. Stand to the side of the light, not between it and the page.",
          "**Fill the frame** with the document, leaving a small even margin."
        ]
      },
      {
        "h2": "Processing it into something that looks scanned"
      },
      {
        "ol": [
          "[Crop](/tools/image-crop) away the table. Nothing marks a photo as unprofessional faster than a visible desk.",
          "[Convert to greyscale](/tools/image-to-grayscale) for ink-on-paper documents. It looks more like a scan and cuts size substantially.",
          "[Convert to PDF](/tools/jpg-to-pdf) — most portals want PDF, and multiple pages become one file.",
          "[Compress to the required size](/tools/compress-to-size) as the final step.",
          "Run [OCR](/tools/ocr) if the document needs to be searchable."
        ]
      },
      {
        "h2": "For multi-page documents"
      },
      {
        "p": "Photograph every page under the same lighting in one sitting — consistency matters more than perfection, and a document where page 3 is noticeably darker looks tampered with. Then [combine them into one PDF](/tools/jpg-to-pdf) in order, and [reorder](/tools/organize) if anything ended up out of sequence."
      },
      {
        "note": "Check legibility at 100% zoom before uploading. If you cannot comfortably read the smallest text — a registration number, a date — neither can the person verifying it."
      },
      {
        "h2": "Why phone photos of documents look wrong"
      },
      {
        "p": "The difference between a phone photo that passes for a scan and one that obviously is not comes down to three artefacts, all of which are avoidable."
      },
      {
        "p": "**Perspective.** Holding the phone at an angle makes the far edge of the page shorter than the near edge, so a rectangular document becomes a trapezoid. This is the single strongest visual signal that something was photographed rather than scanned, and it is entirely a function of holding the camera parallel to the page."
      },
      {
        "p": "**Uneven illumination.** Room lighting rarely falls evenly across an A4 sheet. One side is brighter, and any compression then has to encode that gradient, which costs file size and looks amateurish."
      },
      {
        "p": "**Shadow.** Usually your own head, arms or the phone itself. Standing beside the light source rather than between it and the page eliminates this."
      },
      {
        "h2": "A setup that works anywhere"
      },
      {
        "ol": [
          "Find a table near a window during daylight. Not direct sun, which is too harsh.",
          "Place the document flat, with the window to one side rather than behind you.",
          "Hold the phone directly above, screen parallel to the page. Most phones show a level indicator in the camera app — use it.",
          "Fill the frame with the document plus a small even margin.",
          "Tap to focus on the text, not the background.",
          "Take two or three and pick the best rather than accepting the first."
        ]
      },
      {
        "p": "That is thirty seconds of setup and it produces results that beat a cheap flatbed, because you control the lighting in a way a scanner's fixed lamp does not allow."
      },
      {
        "h2": "Batch capture for multi-page documents"
      },
      {
        "p": "Consistency matters more than perfection when a document runs to several pages. A pack where page three is noticeably darker or differently angled reads as carelessly assembled, and in some contexts as suspicious."
      },
      {
        "p": "Shoot every page in one sitting without moving the setup. Do not adjust exposure between pages. Then process them identically — same [crop](/tools/image-crop) proportions, same [greyscale](/tools/image-to-grayscale) conversion — before [combining into one PDF](/tools/jpg-to-pdf)."
      },
      {
        "p": "If you have to reshoot one page later, reshoot it in the same conditions or redo the whole set. A single mismatched page is more noticeable than a uniformly mediocre document."
      },
      {
        "h2": "Built-in scanning versus doing it properly"
      },
      {
        "p": "Both platforms have document scanning built in, and both produce results that are fine for personal reference and often inadequate for an official upload."
      },
      {
        "p": "**iOS** — Notes and Files both scan via the camera, applying perspective correction and contrast adjustment automatically. The output is good. What it does not do is let you control file size, and iOS scans are frequently several megabytes per page, which fails most portal limits."
      },
      {
        "p": "**Android** — Google Drive has a scan function that does much the same. Same strength, same limitation."
      },
      {
        "p": "The pragmatic approach is to use the built-in scanner for capture, since the perspective correction is genuinely good, then run the result through [compress to size](/tools/compress-to-size) to meet the limit. You get good capture and a compliant file."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Is a phone photo acceptable where a scan is asked for?",
            "a": "Almost always, provided it is flat, evenly lit, cropped and legible. Portals check size and format; humans check readability."
          },
          {
            "q": "Colour or greyscale?",
            "a": "Greyscale for plain documents. Keep colour where it carries meaning — a coloured seal, a signature in blue ink where that matters."
          },
          {
            "q": "What resolution should I aim for?",
            "a": "Any modern phone exceeds what you need. The limiting factor is lighting and steadiness, not megapixels."
          },
          {
            "q": "My photo looks trapezoidal. Can I fix it?",
            "a": "Cropping helps a little; the real fix is reshooting parallel to the page. Perspective is hard to correct after the fact."
          },
          {
            "q": "How do I scan a document with my phone for free?",
            "a": "iOS Notes and Google Drive both scan via the camera with automatic perspective correction. Then compress the result to meet any size limit."
          },
          {
            "q": "Is a phone scan acceptable for official forms?",
            "a": "Almost always, provided it is flat, evenly lit, cropped and legible. Portals check size and format; humans check readability."
          },
          {
            "q": "How do I make a phone photo look like a scan?",
            "a": "Shoot straight down in even light, crop away the background, and convert to greyscale. That covers most of what a scanner does."
          },
          {
            "q": "Why is my phone scan too large to upload?",
            "a": "Built-in scanners optimise for quality, not size — often several megabytes per page. Run the output through compress-to-size."
          }
        ]
      }
    ]
  },
  {
    "slug": "compress-pdf-to-500kb",
    "title": "How to Compress a PDF to 500KB",
    "metaTitle": "Compress PDF to 500KB Online — Free | ThePDFNinja",
    "metaDescription": "500KB is a generous ceiling that still catches out multi-page scans. How to hit it without sacrificing legibility.",
    "excerpt": "Comfortable for most documents, tight for a colour scan. Here is how to get under it reliably.",
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 9,
    "category": "India Guides",
    "emoji": "📑",
    "keywords": [
      "compress pdf to 500kb",
      "500kb pdf",
      "reduce pdf to 500kb",
      "pdf size 500kb",
      "document 500kb upload",
      "compress pdf to 500kb online free",
      "reduce pdf to 500kb without losing quality",
      "500kb pdf converter free",
      "compress pdf 500kb on mobile",
      "pdf size reducer free no watermark"
    ],
    "blocks": [
      {
        "p": "500KB is one of the more reasonable limits you will meet. A typed document is nowhere near it. A multi-page colour scan will blow straight past it, and that is where the work lies."
      },
      {
        "h2": "Start by identifying what you have"
      },
      {
        "p": "Press Ctrl+F and search for a word you can see. If it finds it, your PDF contains real text and is probably already small. If it finds nothing, you have a scan, and every page is a photograph."
      },
      {
        "h2": "For text documents that are somehow large"
      },
      {
        "ul": [
          "[Flatten](/tools/flatten-pdf) to merge form fields and annotations into the page.",
          "[Remove metadata](/tools/remove-metadata) to clear accumulated revision history.",
          "[Compress](/tools/compress) at ebook quality — this forces a full rewrite and drops orphaned objects from incremental saves.",
          "Check for embedded attachments. A PDF can carry other files inside it."
        ]
      },
      {
        "h2": "For scans"
      },
      {
        "ol": [
          "[Convert to greyscale](/tools/grayscale-pdf) if the original is black ink. Typically 40–60% saved for nothing.",
          "[Crop](/tools/crop) the scanner borders — real data, not just cosmetics.",
          "[Compress to size](/tools/compress-to-size) with 500KB as the target, so the tool finds the best quality that fits.",
          "Open the result at 100% and read the smallest text before uploading."
        ]
      },
      {
        "note": "At 500KB you rarely need to compromise legibility. If your output looks poor, you probably compressed a 600 DPI colour scan directly instead of greyscaling and cropping first."
      },
      {
        "h2": "Multi-page documents"
      },
      {
        "p": "500KB across 10 scanned pages is 50KB per page, which is tight. If the portal accepts separate uploads, [split](/tools/split) and send pages individually. If it must be one file, greyscale is not optional."
      },
      {
        "note": "Requirements change between cycles and vary by body. Confirm exact figures against the current official notification before uploading — this guide covers the method for hitting whatever numbers it specifies."
      },
      {
        "h2": "Budgeting 500KB across pages"
      },
      {
        "p": "Working out per-page budget before you start tells you immediately whether the target is realistic."
      },
      {
        "table": {
          "headers": [
            "Pages",
            "Per page",
            "Realistic?"
          ],
          "rows": [
            [
              "1",
              "500 KB",
              "Very comfortable; high quality"
            ],
            [
              "3",
              "167 KB",
              "Comfortable for greyscale scans"
            ],
            [
              "5",
              "100 KB",
              "Achievable; greyscale essential"
            ],
            [
              "10",
              "50 KB",
              "Tight; expect softening"
            ],
            [
              "20",
              "25 KB",
              "Not legibly for scans"
            ]
          ]
        }
      },
      {
        "p": "A legible greyscale scan of a text page needs roughly 30–60KB after compression. Where your per-page budget falls below that, the answer is fewer pages or a better capture rather than harder compression."
      },
      {
        "h2": "The order that gets you there"
      },
      {
        "ol": [
          "**[Extract](/tools/extract-pages) only the required pages.** The largest single lever and the one most often skipped.",
          "**[Convert to greyscale](/tools/grayscale-pdf).** 40–60% for no visible loss on ink-on-paper documents.",
          "**[Crop](/tools/crop)** scanner borders and desk background.",
          "**[Compress to size](/tools/compress-to-size)** at 450–480KB, leaving margin under the cap.",
          "**Verify legibility** at 100% zoom before uploading."
        ]
      },
      {
        "h2": "If it still will not fit legibly"
      },
      {
        "p": "Rescanning beats compressing every time. A 200 DPI greyscale capture starts an order of magnitude smaller than a 600 DPI colour one and starts *clean* rather than being degraded down to size. If you have the paper and two minutes, that is the answer."
      },
      {
        "p": "Failing that, check whether the portal accepts separate uploads per document. Many forms that appear to want one file actually provide several fields, and splitting is far better than compressing a ten-page scan into illegibility."
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "Processing happens on our servers, so a mobile browser works exactly as a desktop does."
      },
      {
        "p": "The order matters more on a phone, because you are more likely to be working from a photograph than a scan. Crop the desk out first, convert to greyscale, and only then compress — a photographed page compressed straight to 500KB comes out far worse than one cropped and greyscaled first."
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
            "q": "My typed PDF is 3MB. Why?",
            "a": "Embedded images, fonts, or accumulated revision data. Flatten, remove metadata, then compress."
          },
          {
            "q": "Should I reduce page count to fit?",
            "a": "Only if the extra pages are genuinely not required. Check what the form asks for before cutting."
          },
          {
            "q": "Is 500KB 500,000 or 512,000 bytes?",
            "a": "It varies by portal. Target 450–480KB and it stops mattering."
          },
          {
            "q": "Can I compress twice to get smaller?",
            "a": "It stacks artefacts for little gain. Start from the original and compress once with a lower target."
          },
          {
            "q": "How do I compress a PDF to 500KB free?",
            "a": "[Compress to size](/tools/compress-to-size) targets an exact figure and finds the best quality that fits. Free, no signup, no watermark."
          },
          {
            "q": "How do I compress a PDF to 500KB on my phone?",
            "a": "Greyscale first, then compress to size — both work in a mobile browser."
          },
          {
            "q": "Will 500KB still be readable?",
            "a": "For a greyscale scan of up to about five pages, comfortably. Past ten pages expect visible softening."
          },
          {
            "q": "Why did my PDF barely shrink?",
            "a": "It is probably text-based with no images to downsample. Try flatten and remove-metadata instead."
          }
        ]
      }
    ]
  },
  {
    "slug": "compress-pdf-to-1mb",
    "title": "How to Compress a PDF to 1MB",
    "metaTitle": "Compress PDF to 1MB Online — Free & Exact | ThePDFNinja",
    "metaDescription": "1MB is roomy enough for a decent multi-page scan if you approach it correctly. The order of operations that matters.",
    "excerpt": "A generous limit that still defeats people who compress before cropping. Here is the order that works.",
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 9,
    "category": "India Guides",
    "emoji": "🗜️",
    "keywords": [
      "compress pdf to 1mb",
      "1mb pdf",
      "reduce pdf to 1mb",
      "pdf under 1mb",
      "compress document to 1mb",
      "compress pdf to 1mb free online",
      "reduce pdf size to 1mb",
      "pdf under 1mb converter",
      "compress pdf 1mb without losing quality",
      "1mb pdf compressor free"
    ],
    "blocks": [
      {
        "p": "1MB is enough for a well-prepared multi-page scan or a substantial illustrated document. People still fail to hit it, almost always by compressing first and cropping afterwards — which is backwards."
      },
      {
        "h2": "The order that matters"
      },
      {
        "p": "Every step that removes data before compression means the compressor has less to destroy. Do them in this sequence:"
      },
      {
        "ol": [
          "**Remove pages you do not need.** [Extract](/tools/extract-pages) only what the form asks for. The largest saving available and the one people skip.",
          "**Crop.** [Crop](/tools/crop) scanner borders and excessive margins.",
          "**Greyscale.** [Convert](/tools/grayscale-pdf) if colour carries no information.",
          "**Then compress.** [Compress to size](/tools/compress-to-size) at 1MB."
        ]
      },
      {
        "p": "Reverse that order and you compress data you were about to throw away, then throw it away — leaving a file that is both small and unnecessarily degraded."
      },
      {
        "h2": "What 1MB supports"
      },
      {
        "table": {
          "headers": [
            "Document",
            "Fits in 1MB?"
          ],
          "rows": [
            [
              "Typed report, 50 pages",
              "Easily"
            ],
            [
              "Greyscale scan, 10 pages at 200 DPI",
              "Comfortably"
            ],
            [
              "Colour scan, 10 pages at 300 DPI",
              "Only after greyscaling"
            ],
            [
              "Photo-heavy brochure, 20 pages",
              "Tight; expect visible softening"
            ],
            [
              "Colour scan, 50 pages",
              "Not legibly"
            ]
          ]
        }
      },
      {
        "h2": "If it still will not fit"
      },
      {
        "p": "Rescanning beats compressing. A 200 DPI greyscale scan starts smaller than a 600 DPI colour one by an order of magnitude, and it starts *clean* rather than being degraded down. If you have the original and two minutes, rescan."
      },
      {
        "note": "Requirements change between cycles and vary by body. Confirm exact figures against the current official notification before uploading — this guide covers the method for hitting whatever numbers it specifies."
      },
      {
        "h2": "Diagnosing where the megabytes are"
      },
      {
        "p": "Before compressing, work out what is actually large — the fix differs completely."
      },
      {
        "ol": [
          "**Ctrl+F for a word you can see.** Found means born-digital; not found means a scan.",
          "**Divide size by page count.** Above roughly 100KB per page in a born-digital document, something other than text is responsible.",
          "**Check for attachments** in document properties. A PDF can carry embedded files.",
          "**Scroll at thumbnail zoom.** Photographic pages are immediately obvious and tell you where the weight sits."
        ]
      },
      {
        "p": "A born-digital document that is unexpectedly large usually responds to [flatten](/tools/flatten-pdf), [remove metadata](/tools/remove-metadata) and [compress](/tools/compress) — the last forcing a full rewrite that discards accumulated revisions. No image downsampling required."
      },
      {
        "h2": "What 1MB looks like in practice"
      },
      {
        "p": "For a greyscale scan at 150–200 DPI, expect roughly 40–80KB per page after compression. So 1MB comfortably holds a dozen or so pages at readable quality, and struggles past twenty."
      },
      {
        "p": "For born-digital documents the figure is irrelevant — a 200-page text report is typically well under 1MB before you do anything."
      },
      {
        "h2": "Verifying before you submit"
      },
      {
        "ol": [
          "Open the compressed file at 100% zoom.",
          "Read the smallest text on the most detailed page — not the cover.",
          "Check the page count is what the form expects.",
          "Read the file size from your file manager, not the tool that produced it.",
          "Confirm the format is genuinely PDF.",
          "Give it a plain filename: letters, digits, underscores."
        ]
      },
      {
        "h2": "Doing this on a phone"
      },
      {
        "p": "Processing happens on our servers, so a mobile browser works exactly as a desktop does."
      },
      {
        "p": "On a phone the biggest lever is usually removing pages you do not need before compressing at all. Extracting the three pages a form actually asks for, rather than compressing a twenty-page scan, is both faster and produces a far more legible result."
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
            "q": "Will 1MB look acceptable?",
            "a": "For a greyscale scan of text, comfortably. For a photo-heavy document, expect visible softening."
          },
          {
            "q": "Does page count or resolution matter more?",
            "a": "Resolution, usually. Halving DPI cuts data roughly fourfold."
          },
          {
            "q": "Can I convert to images and back to shrink it?",
            "a": "That is what compression already does internally, and done manually you lose the text layer. Do not."
          },
          {
            "q": "Why does my file grow after editing?",
            "a": "Incremental saves append rather than rewrite. Compress afterwards to force a full rewrite."
          },
          {
            "q": "How do I compress a PDF to 1MB for free?",
            "a": "[Compress to size](/tools/compress-to-size) at a 1MB target. Free, no signup, and no watermark added."
          },
          {
            "q": "How do I reduce PDF size to 1MB without losing quality?",
            "a": "Remove pages you do not need, crop, and greyscale before compressing. Each step means the compressor degrades less to reach the target."
          },
          {
            "q": "Can I compress a PDF to 1MB on my phone?",
            "a": "Yes, entirely in a mobile browser."
          },
          {
            "q": "What if my scan will not fit under 1MB legibly?",
            "a": "Rescan at 200 DPI greyscale rather than compressing a 600 DPI colour original — it starts smaller and starts clean."
          }
        ]
      }
    ]
  },
  {
    "slug": "exam-portal-upload-rejected",
    "title": "Why Exam Portals Reject Your Upload (and How to Pass First Time)",
    "metaTitle": "Exam Portal Upload Rejected? Common Causes Fixed | ThePDFNinja",
    "metaDescription": "Size, dimensions, format and naming are checked separately. Why meeting one requirement is not enough.",
    "excerpt": "'File not accepted' with no explanation. Six separate checks run on your upload — here is how to satisfy all of them.",
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 9,
    "category": "India Guides",
    "emoji": "⚠️",
    "keywords": [
      "exam portal upload rejected",
      "file not accepted upload",
      "document upload error exam",
      "photo upload rejected",
      "application form upload problem"
    ],
    "blocks": [
      {
        "p": "An upload rejection with no explanation is one of the more infuriating experiences in an application process. The portal knows exactly what is wrong; it just will not say. Almost always it is one of six things, and they are checked independently."
      },
      {
        "h2": "The six checks"
      },
      {
        "ol": [
          "**File size — maximum.** The obvious one. [Compress to size](/tools/compress-to-size) hits an exact ceiling.",
          "**File size — minimum.** Frequently overlooked. Some portals reject files below a floor, to stop people uploading a blank placeholder. Over-compressing causes this.",
          "**Pixel dimensions.** Separate from file size. A 30KB image can still be the wrong number of pixels wide.",
          "**Format.** JPG usually means JPG. Renaming a PNG does not convert it — [convert it properly](/tools/png-to-jpg).",
          "**Aspect ratio.** Some portals check proportions. A square crop where 3:4 is expected fails even at correct dimensions.",
          "**Filename.** Spaces, special characters and non-Latin scripts break some older systems. Use letters, digits and underscores."
        ]
      },
      {
        "h2": "Why meeting one is not enough"
      },
      {
        "p": "These are independent tests. A photo can be exactly 45KB (pass), 200×200 pixels (fail), JPG (pass) and named `photo (1).jpg` (fail). The portal reports one generic error and you are left guessing which of four problems to fix."
      },
      {
        "note": "Prepare and verify everything **before** you start the form. Portal sessions time out, and hunting for a photo mid-application is how a completed form gets lost."
      },
      {
        "h2": "A checklist that clears all six"
      },
      {
        "ol": [
          "Read the notification and write down: max size, min size, pixel dimensions, format, aspect ratio.",
          "[Crop](/tools/image-crop) to the required proportion.",
          "[Resize](/tools/image-resize) to the required pixels.",
          "[Convert](/tools/png-to-jpg) to the required format if needed.",
          "[Compress to size](/tools/image-to-size) — targeting comfortably inside the range, not at its edge.",
          "Rename to something plain: `Name_Photo.jpg`.",
          "Check the final file's properties to confirm size, dimensions and true format."
        ]
      },
      {
        "h2": "If it still fails"
      },
      {
        "ul": [
          "Try a different browser. Some portals are built for one and misbehave elsewhere.",
          "Disable extensions, particularly ad blockers, which occasionally break upload widgets.",
          "Try outside peak hours. Deadline-day load causes failures that look like validation errors.",
          "Re-save the image from a different tool — some files carry unusual colour profiles that strict validators reject."
        ]
      },
      {
        "note": "Requirements change between cycles and vary by body. Confirm exact figures against the current official notification before uploading — this guide covers the method for hitting whatever numbers it specifies."
      },
      {
        "h2": "Checking a file's real properties"
      },
      {
        "p": "Most rejections are diagnosable by looking at the file, and the properties you need are visible without any special software."
      },
      {
        "p": "**On Windows:** right-click, Properties, then the Details tab shows dimensions and size. **On macOS:** select the file and press Cmd+I, or open in Preview and use Tools → Show Inspector."
      },
      {
        "p": "What to check, in this order: file size in bytes (not the rounded KB figure), pixel dimensions, and the actual format — which Properties reports from the file's contents, not its extension. That last one catches the renamed-PNG problem immediately."
      },
      {
        "h2": "Why size in bytes matters"
      },
      {
        "p": "File managers round. A file shown as '50 KB' might be anywhere from 49,153 to 51,200 bytes, and a portal checking against 51,200 will reject the upper end of that range while your file manager insists it is 50 KB."
      },
      {
        "p": "Both Windows and macOS show the exact byte count in the properties panel, usually in parentheses after the rounded figure. Use that number, and target comfortably below the limit so the ambiguity stops mattering."
      },
      {
        "h2": "Diagnosing by elimination"
      },
      {
        "p": "Where a portal gives no useful error, change one thing at a time:"
      },
      {
        "ol": [
          "**Re-save in the correct format** from an image editor, which also strips any unusual colour profile a strict validator might reject.",
          "**Reduce the size by 20%** and retry, to rule out a boundary problem.",
          "**Check pixel dimensions** against the requirement independently of file size.",
          "**Rename to something plain** — no spaces, no brackets, no accented characters.",
          "**Try a different browser,** and disable extensions.",
          "**Try outside peak hours,** since deadline-day load produces failures that look like validation errors."
        ]
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why is my file rejected for being too small?",
            "a": "Some portals set a minimum to prevent blank placeholders. Compress less aggressively."
          },
          {
            "q": "I renamed my PNG to .jpg and it failed. Why?",
            "a": "The extension is a label. The file is still a PNG internally and validators read the actual data."
          },
          {
            "q": "Does the filename really matter?",
            "a": "On older systems, yes. Spaces and special characters can break upload handling."
          },
          {
            "q": "The portal accepted it but verification rejected it later.",
            "a": "Upload checks size and format only. Humans check background, lighting and framing afterwards."
          }
        ]
      }
    ]
  },
  {
    "slug": "merge-documents-for-application",
    "title": "How to Combine Certificates and Documents into One Upload",
    "metaTitle": "Merge Documents into One PDF for Applications | ThePDFNinja",
    "metaDescription": "Applications often allow a single file. How to combine certificates, mark sheets and ID into one ordered, legible, size-compliant PDF.",
    "excerpt": "One upload field, eight documents. Here is how to assemble them so a verifier can actually work through the result.",
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 9,
    "category": "India Guides",
    "emoji": "📚",
    "keywords": [
      "merge documents into one pdf",
      "combine certificates pdf",
      "single file upload application",
      "merge marksheets pdf",
      "attach multiple documents"
    ],
    "blocks": [
      {
        "p": "Application forms frequently allow one file where you have eight documents — mark sheets, certificates, ID, category proof. Combining them is straightforward; combining them *well*, so a verifier can navigate the result and it still clears the size limit, takes a little more thought."
      },
      {
        "h2": "Order matters more than you would expect"
      },
      {
        "p": "A verifier works down a checklist. If your document follows that checklist, verification is quick. If it is arbitrary, they hunt — and hunting invites a request for resubmission."
      },
      {
        "p": "Use the order given in the instructions. Where none is given, a sensible default is: ID proof, then educational certificates newest to oldest, then category or special-provision documents, then anything supplementary."
      },
      {
        "h2": "Assembling it"
      },
      {
        "ol": [
          "Convert everything to PDF first. Photos of certificates go through [JPG to PDF](/tools/jpg-to-pdf).",
          "[Merge](/tools/merge) in the required order.",
          "[Reorder](/tools/organize) if anything landed out of place.",
          "[Rotate](/tools/rotate) any sideways pages — very common with phone photos.",
          "[Add page numbers](/tools/page-numbers) so a verifier can reference a specific document.",
          "[Compress to size](/tools/compress-to-size) as the last step."
        ]
      },
      {
        "h2": "Keeping it legible under a size limit"
      },
      {
        "p": "Eight scanned certificates under 2MB is demanding. In order of effectiveness:"
      },
      {
        "ul": [
          "[Greyscale](/tools/grayscale-pdf) everything where colour carries no meaning. Usually the biggest win.",
          "[Crop](/tools/crop) borders and desk backgrounds.",
          "Rescan or rephotograph anything captured badly — a clean 200 DPI capture beats a compressed 600 DPI one.",
          "Only then compress to the target."
        ]
      },
      {
        "note": "Verify the final document by opening it and reading every page at 100% zoom. A registration number you cannot read means resubmission, and resubmissions have deadlines."
      },
      {
        "note": "Requirements change between cycles and vary by body. Confirm exact figures against the current official notification before uploading — this guide covers the method for hitting whatever numbers it specifies."
      },
      {
        "h2": "Working out the order when none is given"
      },
      {
        "p": "Where instructions specify an order, follow it exactly. Where they do not, a verifier still has an expectation, and matching it speeds things up."
      },
      {
        "p": "The conventional sequence: **identity first** (photo ID, proof of address), then **educational qualifications newest to oldest**, then **category or special-provision documents**, then **experience or supporting material**, then anything supplementary."
      },
      {
        "p": "The logic is that a verifier establishes who you are, then checks eligibility, then reads supporting detail. A pack that follows that arc is quick to work through; one that opens with a supplementary letter is not."
      },
      {
        "h2": "Making a long pack navigable"
      },
      {
        "ul": [
          "**A contents page as page one,** listing each document and its starting page. Two minutes to produce and it changes how the whole pack reads.",
          "**[Continuous page numbers](/tools/page-numbers)** so a query can reference a page rather than describing a document.",
          "**Consistent orientation.** [Rotate](/tools/rotate) everything upright — sideways pages in a verification queue invite a resubmission request.",
          "**Consistent page size.** [Resize](/tools/resize-pages) to a common size so the pack prints and scrolls evenly.",
          "**Both sides adjacent.** A two-sided document should be two consecutive pages, not separated across the pack."
        ]
      },
      {
        "h2": "Keeping a record of what you submitted"
      },
      {
        "p": "Save the exact file you uploaded, not the working copies you made along the way. If a query arises months later — a document reported as illegible, a page apparently missing — you need to know precisely what was received."
      },
      {
        "p": "Store the submitted PDF alongside the acknowledgement or receipt the portal issues, ideally [merged](/tools/merge) into a single record file. That pairing answers most subsequent questions without needing to reconstruct anything."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Should I include documents that were not asked for?",
            "a": "No. Extra material makes verification slower and the file larger. Send exactly what is listed."
          },
          {
            "q": "Do certificates need to be in colour?",
            "a": "Usually not, unless a coloured seal is part of authenticity. Check the instructions."
          },
          {
            "q": "What if the merged file exceeds the limit?",
            "a": "Greyscale and crop before compressing. If it still fails, check whether separate uploads are permitted."
          },
          {
            "q": "Should I add page numbers?",
            "a": "If the file has more than a few pages, yes. It makes any query about your submission far easier to resolve."
          }
        ]
      }
    ]
  },
  {
    "slug": "government-portal-upload-requirements",
    "title": "Why Indian Government Portals Demand Such Small Files",
    "metaTitle": "Government Portal Upload Requirements Explained | ThePDFNinja",
    "metaDescription": "The reasoning behind strict size limits, the ranges you will meet, and a preparation routine that clears them first time.",
    "excerpt": "20KB for a signature is not arbitrary. Understanding why makes the requirements easier to satisfy.",
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 9,
    "category": "India Guides",
    "emoji": "🏛️",
    "keywords": [
      "government portal upload size",
      "document upload requirements india",
      "sarkari form upload",
      "photo signature size government",
      "online form upload limit"
    ],
    "blocks": [
      {
        "p": "Government portals in India are unusually strict about uploads, and the reasons are practical rather than arbitrary. Understanding them makes the requirements easier to satisfy and easier to predict."
      },
      {
        "h2": "Why the limits are so tight"
      },
      {
        "ul": [
          "**Scale.** A recruitment cycle can draw millions of applications. At 2MB each that is terabytes; at 50KB it is manageable.",
          "**Connectivity.** Applicants upload from every kind of connection. Small files fail less often.",
          "**Long-term storage.** Records are retained for years, sometimes decades.",
          "**Legacy systems.** Many portals were built long ago and their limits have never been revised."
        ]
      },
      {
        "h2": "The requirements you will meet"
      },
      {
        "table": {
          "headers": [
            "Item",
            "Typical range",
            "Notes"
          ],
          "rows": [
            [
              "Photograph",
              "20–100KB",
              "Often with pixel dimensions specified too"
            ],
            [
              "Signature",
              "10–50KB",
              "Greyscale usually acceptable"
            ],
            [
              "Documents",
              "100KB–2MB",
              "PDF normally required"
            ],
            [
              "Thumb impression",
              "10–50KB",
              "Where required"
            ]
          ]
        }
      },
      {
        "p": "Treat those as indicative only — they vary widely, and a minimum size is sometimes specified alongside the maximum."
      },
      {
        "h2": "A preparation routine"
      },
      {
        "ol": [
          "Read the notification and note every constraint: max size, min size, pixel dimensions, format, aspect ratio.",
          "Prepare each file: [crop](/tools/image-crop), [resize](/tools/image-resize), [greyscale](/tools/image-to-grayscale) where allowed, then [compress to size](/tools/image-to-size).",
          "For documents: [merge](/tools/merge) in the required order, then [compress to size](/tools/compress-to-size).",
          "Name files plainly — letters, digits and underscores only.",
          "Verify each file's properties before you open the form."
        ]
      },
      {
        "note": "Prepare everything before starting the application. Sessions time out, and a form lost at the upload stage means starting again."
      },
      {
        "note": "Requirements change between cycles and vary by body. Confirm exact figures against the current official notification before uploading."
      },
      {
        "h2": "Reading a notification for its constraints"
      },
      {
        "p": "Notifications bury upload requirements in dense text, and missing one costs a resubmission. Extracting them systematically takes five minutes and saves considerably more."
      },
      {
        "p": "Make a list before you touch a file. For each item to be uploaded, note: **maximum size, minimum size, pixel dimensions, aspect ratio, file format, colour requirement**, and any special condition such as a printed date on the photograph."
      },
      {
        "p": "The two most-missed entries are the minimum size and the pixel dimensions. Both are checked independently of the maximum, and both produce the same unhelpful generic rejection."
      },
      {
        "h2": "Building a reusable kit"
      },
      {
        "p": "Anyone applying to several examinations uses the same underlying assets repeatedly. Keeping them properly saves rebuilding each time."
      },
      {
        "ol": [
          "Keep **high-resolution originals** separately: the uncropped photograph, the full-resolution signature scan, clean scans of every certificate.",
          "Keep **processed versions** in a folder per application, named for that application.",
          "Never overwrite an original with a compressed version — you cannot recover the detail.",
          "Note against each photograph when it was taken, since some bodies require recency.",
          "Re-derive processed files from originals for each new application rather than reusing a file prepared to different dimensions."
        ]
      },
      {
        "h2": "Timing and the practical realities"
      },
      {
        "p": "Portals are slowest and least reliable on the final day, when everyone applies at once. Uploads that would succeed on a quiet afternoon fail under load, and the failure is often indistinguishable from a validation error."
      },
      {
        "p": "Apply early if you can. If you cannot, prepare every file in advance so the only thing you are doing under load is uploading — not cropping, not compressing, not hunting for a photograph while a session times out."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Why do portals want such small files?",
            "a": "Scale and connectivity. Millions of applicants on variable connections make small files a practical necessity."
          },
          {
            "q": "Can I use the same photo across applications?",
            "a": "Often, if dimensions and size match. Some bodies require a recent photo with a printed date."
          },
          {
            "q": "What if I cannot meet the size without it becoming illegible?",
            "a": "Crop and greyscale before compressing. If it still fails, rescan at lower DPI rather than compressing harder."
          },
          {
            "q": "Are the limits in KB or KiB?",
            "a": "It varies. Target comfortably under and it stops mattering."
          }
        ]
      }
    ]
  },
  {
    "slug": "thumb-impression-upload-guide",
    "title": "Preparing a Thumb Impression for an Online Application",
    "metaTitle": "Thumb Impression Upload — Size and Format Guide | ThePDFNinja",
    "metaDescription": "How to capture and prepare a thumb impression that clears the size limit while remaining clear enough to verify.",
    "excerpt": "The upload people prepare worst, usually by over-compressing away the ridge detail that is the entire point.",
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 9,
    "category": "India Guides",
    "emoji": "👍",
    "keywords": [
      "thumb impression upload",
      "thumbprint size online form",
      "thumb impression photo size",
      "fingerprint upload application",
      "thumb impression jpg"
    ],
    "blocks": [
      {
        "p": "Thumb impressions are required alongside photograph and signature on a growing number of application forms, and they are the one people prepare worst — usually because they treat them like a photograph rather than like a signature."
      },
      {
        "h2": "Capturing it"
      },
      {
        "ol": [
          "Use a clean ink pad. Stamp pad ink works better than a pen.",
          "Press on **plain white unruled paper**. Ruled lines add detail the compressor must encode and a verifier must look past.",
          "Roll the thumb slightly rather than pressing straight down — this captures the full ridge pattern.",
          "Let it dry before photographing. Smudging is the commonest ruin.",
          "Photograph or scan straight down in even light, with no shadow."
        ]
      },
      {
        "h2": "Preparing the file"
      },
      {
        "p": "The same order that works for signatures works here, and for the same reason — dimensions matter more than quality when the budget is tiny:"
      },
      {
        "ol": [
          "[Crop](/tools/image-crop) tight to the impression with a small white margin.",
          "[Resize](/tools/image-resize) to the specified pixel dimensions.",
          "[Convert to greyscale](/tools/image-to-grayscale) unless colour is specifically required.",
          "[Compress to size](/tools/image-to-size) at the stated target."
        ]
      },
      {
        "note": "Do not over-compress. Ridge detail is the whole point of a thumb impression — a heavily compressed one can be rejected at verification for being indistinct even though it cleared the size check."
      },
      {
        "h2": "Common mistakes"
      },
      {
        "ul": [
          "Too much ink, producing a solid black blob with no visible ridges.",
          "Too little, producing a faint partial impression.",
          "Photographing at an angle, distorting the pattern.",
          "Cropping so tight that the edges of the impression are cut off.",
          "Compressing below the point where ridges remain distinguishable."
        ]
      },
      {
        "note": "Requirements change between cycles and vary by body. Confirm exact figures against the current official notification before uploading."
      },
      {
        "h2": "Why ridge detail matters"
      },
      {
        "p": "A thumb impression is not decorative. Where it is required, it is a biometric identifier, and verification may compare it against an impression taken later — at an examination centre, at document verification, at joining."
      },
      {
        "p": "That comparison needs **ridge detail**: the pattern of lines, their bifurcations and endings. A solid black blob has none of it, and neither does an impression compressed so hard the ridges merge. Both clear a file-size check and fail a human one."
      },
      {
        "p": "This is why the usual advice to compress as small as possible is wrong here. Target comfortably inside the permitted range rather than at its lower edge."
      },
      {
        "h2": "Getting a clean impression"
      },
      {
        "ol": [
          "Use a **stamp pad**, not a pen or an ink bottle. The ink layer is thin and even, which is exactly what you want.",
          "Press the thumb onto the pad lightly, then onto plain white unruled paper.",
          "**Roll slightly** from one side to the other rather than pressing straight down — this captures the full pattern rather than only the centre.",
          "Take two or three impressions and pick the best.",
          "Let it dry fully. Smudging while handling the paper is the commonest ruin.",
          "Photograph or scan straight down in even light."
        ]
      },
      {
        "h2": "Judging whether yours is good enough"
      },
      {
        "p": "Open the finished file at 100% zoom and look for individual ridge lines. You should be able to trace lines across the impression and see where they split or end."
      },
      {
        "p": "If the centre is solid black, there was too much ink — clean the thumb and use less pressure. If the pattern is patchy with gaps, there was too little, or the paper moved. If lines are visible but blurred, the compression went too far and you should retry with a higher target size."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Left or right thumb?",
            "a": "Notifications usually specify — often left for men and right for women, but this varies. Check."
          },
          {
            "q": "Can I use a digital scanner?",
            "a": "A flatbed scan at 300 DPI works well. Fingerprint scanners are not required unless specified."
          },
          {
            "q": "Colour or greyscale?",
            "a": "Greyscale is usually acceptable and much smaller. Confirm against the notification."
          },
          {
            "q": "Mine looks like a black blob. What now?",
            "a": "Too much ink. Clean the thumb, use less, and press more lightly."
          }
        ]
      }
    ]
  },
  {
    "slug": "pdf-or-jpg-for-applications",
    "title": "PDF or JPG? Choosing the Right Format for Form Uploads",
    "metaTitle": "PDF vs JPG for Application Uploads | ThePDFNinja",
    "metaDescription": "Why portals want documents as PDF and photos as JPG, and why renaming a file extension never works.",
    "excerpt": "One of the commonest silent rejections, and a rule that takes ten seconds to apply.",
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 8,
    "category": "India Guides",
    "emoji": "🔀",
    "keywords": [
      "pdf or jpg upload",
      "document format for application",
      "convert photo to pdf upload",
      "which format government form",
      "jpg to pdf application"
    ],
    "blocks": [
      {
        "p": "Most application portals want documents as PDF and photographs as JPG, and the difference matters more than it looks. Uploading the wrong one is a common, silent rejection."
      },
      {
        "h2": "Why documents want PDF"
      },
      {
        "ul": [
          "**Multiple pages in one file.** A mark sheet with a reverse side is one PDF and two JPGs.",
          "**Consistent rendering.** A PDF displays identically to every verifier.",
          "**Text layer.** A born-digital PDF is searchable; an image is not.",
          "**Better compression** for pages of text than JPG achieves."
        ]
      },
      {
        "h2": "Why photographs want JPG"
      },
      {
        "p": "Photographs are single images with no page structure, and JPG compresses them efficiently with fine control over the size. Wrapping a photo in a PDF adds overhead and makes automated dimension checking harder, which is why portals reject it."
      },
      {
        "h2": "Converting correctly"
      },
      {
        "ul": [
          "**Photos of documents → PDF:** [JPG to PDF](/tools/jpg-to-pdf), multiple images into one file in order.",
          "**PDF you need as an image:** [PDF to JPG](/tools/pdf-to-jpg).",
          "**PNG where JPG is required:** [PNG to JPG](/tools/png-to-jpg). Renaming the file does not convert it.",
          "**HEIC from an iPhone:** [HEIC to JPG](/tools/heic-to-jpg). Most portals cannot read HEIC at all."
        ]
      },
      {
        "note": "Renaming `photo.png` to `photo.jpg` does not change the file. Validators read the actual data, and this is one of the most common causes of an unexplained rejection."
      },
      {
        "h2": "A quick decision rule"
      },
      {
        "p": "If it has pages, it is a PDF. If it is a picture of a person, it is a JPG. If the notification says otherwise, the notification wins."
      },
      {
        "note": "Requirements change between cycles and vary by body. Confirm exact figures against the current official notification before uploading."
      },
      {
        "h2": "How validators tell the formats apart"
      },
      {
        "p": "Understanding the check explains why renaming never works."
      },
      {
        "p": "A validator reads the first few bytes of the uploaded file — its signature. A PDF begins `%PDF-`; a JPEG begins with the bytes `FF D8 FF`; a PNG begins `89 50 4E 47`. These are inside the file and have nothing to do with its name."
      },
      {
        "p": "So `photo.jpg` that is really a PNG fails, and it fails on content rather than on anything you can see. The fix is genuine conversion — [PNG to JPG](/tools/png-to-jpg) — which rewrites the data in the required format."
      },
      {
        "h2": "Multi-page documents and the one-file rule"
      },
      {
        "p": "Where a document has two sides — a mark sheet, an identity card, a certificate with endorsements on the reverse — portals almost always expect **one PDF with two pages**, not two separate image files."
      },
      {
        "p": "Uploading them separately either fails, because there is one field, or succeeds and looks careless. [Combining images into one PDF](/tools/jpg-to-pdf) takes seconds and is what the form is asking for."
      },
      {
        "h2": "When a portal asks for something unusual"
      },
      {
        "ul": [
          "**'Scanned copy in PDF'** means a PDF whose pages are images of the document. A photograph converted to PDF satisfies this.",
          "**'Self-attested'** means you have signed and dated a photocopy — a content requirement, not a format one.",
          "**'Coloured scan'** means do not greyscale it, usually because a seal or stamp matters.",
          "**'Clear and legible'** is a real requirement that is checked by a person after upload succeeds.",
          "**'Original format'** occasionally means a born-digital PDF rather than a scan — for instance a downloaded certificate rather than a photograph of a printout."
        ]
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Can I upload a PDF where a JPG is asked for?",
            "a": "Usually rejected. The portal checks the actual format."
          },
          {
            "q": "How do I combine two sides of a mark sheet?",
            "a": "Photograph both, then [JPG to PDF](/tools/jpg-to-pdf) to produce a two-page document."
          },
          {
            "q": "My iPhone photo will not upload.",
            "a": "It is probably HEIC. Convert to JPG first."
          },
          {
            "q": "Does renaming the extension work?",
            "a": "No. The file's internal format is unchanged and validators check it."
          }
        ]
      }
    ]
  },
  {
    "slug": "scan-certificates-for-upload",
    "title": "How to Scan Certificates So They Pass Verification",
    "metaTitle": "Scan Certificates for Online Upload — Quality Guide | ThePDFNinja",
    "metaDescription": "Capture quality determines whether a compressed certificate stays legible. The order of operations that keeps it readable.",
    "excerpt": "Almost all the advice is about the size limit. The thing that actually gets you rejected is legibility.",
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 8,
    "category": "India Guides",
    "emoji": "📜",
    "keywords": [
      "scan certificate for upload",
      "certificate scan quality",
      "marksheet scan upload",
      "document scan clear",
      "certificate pdf upload"
    ],
    "blocks": [
      {
        "p": "A scanned certificate that is unreadable at verification is worse than one that is slightly too large — the first costs you the application, the second costs you five minutes. Yet almost all the advice online is about hitting the size limit."
      },
      {
        "h2": "Capture matters more than compression"
      },
      {
        "p": "Every improvement at capture reduces how hard the compressor has to work later. In descending order of impact:"
      },
      {
        "ol": [
          "**Scan or photograph at 300 DPI equivalent.** Enough detail for small print to survive compression.",
          "**Greyscale, not colour,** unless a coloured seal matters. Removes two thirds of the data for nothing.",
          "**Straight and flat.** Skew and curl make text harder to read and harder to compress.",
          "**Even lighting, no shadow.** Uneven exposure forces the compressor to encode gradients that carry no information.",
          "**Crop to the document.** Desk, scanner bed and background are pure waste."
        ]
      },
      {
        "h2": "Then compress, in the right order"
      },
      {
        "p": "[Crop](/tools/image-crop), [greyscale](/tools/image-to-grayscale), then [compress to size](/tools/compress-to-size). Doing it the other way round — compressing a full-colour, uncropped 600 DPI scan straight to 100KB — is why certificates come out unreadable."
      },
      {
        "h2": "The verification test"
      },
      {
        "p": "Open your final file at 100% zoom and read the smallest text on it: the registration number, the date, the issuing authority. If you have to squint, so will the verifier, and they have a queue."
      },
      {
        "note": "A rejected certificate usually means resubmission within a deadline. The five minutes spent rescanning properly is cheaper than the alternative."
      },
      {
        "h2": "What a verifier is actually looking at"
      },
      {
        "p": "Knowing what gets checked tells you where quality matters and where it does not."
      },
      {
        "ul": [
          "**Your name,** matched against the application. Must be unambiguously readable.",
          "**Registration or roll number,** usually the smallest text on the document and the most important.",
          "**Dates** — of issue, of examination, of validity.",
          "**Issuing authority** and any seal or stamp.",
          "**Grades or marks,** where eligibility depends on them.",
          "**Signatures,** where the document requires countersigning."
        ]
      },
      {
        "p": "Those are typically the smallest elements on the page. A scan that renders the certificate's decorative border beautifully and the registration number as a smudge has optimised for the wrong thing."
      },
      {
        "h2": "Laminated and glossy documents"
      },
      {
        "p": "Lamination causes glare that can obscure exactly the printed detail a verifier needs, and it defeats flatbed scanning particularly badly because the lamp is directly overhead."
      },
      {
        "p": "Photograph rather than scan. Position the document so the light source is at an angle rather than directly in front, tilt slightly to move the reflection off the text, and check the result before moving on. Diffuse daylight from a window works considerably better than a room light or a flash."
      },
      {
        "h2": "A final check before uploading"
      },
      {
        "ol": [
          "Open the file at 100% zoom — not fit-to-window, which hides the problem.",
          "Read the registration number aloud. If you hesitate, it is not clear enough.",
          "Read the dates.",
          "Check the whole document is in frame with no corner cut off.",
          "Check the orientation is upright.",
          "Confirm size and format against the requirement."
        ]
      },
      {
        "p": "Thirty seconds, and it is the difference between a submission that clears verification and one that comes back inside a deadline."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Phone or scanner?",
            "a": "Either works. A well-lit phone photo shot straight down often beats a carelessly used flatbed."
          },
          {
            "q": "Should certificates be in colour?",
            "a": "Usually not required. Keep colour only where a seal or stamp's colour is part of authenticity."
          },
          {
            "q": "How do I know if it is legible enough?",
            "a": "Read the smallest text at 100% zoom. If you cannot, neither can a verifier."
          },
          {
            "q": "What if the certificate is laminated?",
            "a": "Lamination causes glare. Photograph at a slight angle to the light source, not straight into it, and avoid flash."
          }
        ]
      }
    ]
  },
  {
    "slug": "visa-passport-document-guide",
    "title": "Preparing Photos and Documents for Passport and Visa Applications",
    "metaTitle": "Passport & Visa Photo Requirements — Preparation Guide | ThePDFNinja",
    "metaDescription": "Biometric photo standards, the rejection reasons that catch people out, and how to prepare supporting documents.",
    "excerpt": "The strictest photo requirements you will meet, checked automatically, with no explanation when they fail.",
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 10,
    "category": "India Guides",
    "emoji": "🛃",
    "keywords": [
      "passport photo requirements",
      "visa photo size",
      "immigration document upload",
      "biometric photo standard",
      "passport application documents"
    ],
    "blocks": [
      {
        "p": "Passport, visa and immigration applications combine the strictest photo requirements you will meet with document uploads that are frequently rejected for reasons the portal does not explain."
      },
      {
        "h2": "Photograph requirements are unusually strict"
      },
      {
        "p": "Immigration photos are checked against biometric standards, often automatically. Common rejection reasons:"
      },
      {
        "ul": [
          "**Background not plain enough** — shadows on the wall count.",
          "**Head size outside the permitted range** — most standards specify the head must occupy a defined proportion of the frame.",
          "**Expression** — neutral, mouth closed, both eyes open and visible.",
          "**Glasses** — increasingly prohibited outright rather than merely discouraged.",
          "**Head covering** — usually permitted for religious reasons provided the full face is visible.",
          "**Age of photograph** — typically must be recent, often within six months."
        ]
      },
      {
        "h2": "Preparing the file"
      },
      {
        "ol": [
          "[Crop](/tools/image-crop) to the required aspect ratio, with the head positioned as the standard specifies.",
          "[Resize](/tools/image-resize) to the required pixel dimensions — or use [resize to passport](/tools/resize-to-passport) for standard proportions.",
          "[Compress to size](/tools/image-to-size) if a file size is specified.",
          "Check dimensions, size and format separately before uploading."
        ]
      },
      {
        "h2": "Supporting documents"
      },
      {
        "p": "Scans of certificates, bank statements and letters are usually required as PDF. [Merge](/tools/merge) multi-page documents into single files rather than uploading pages separately, [OCR](/tools/ocr) them so they are searchable, and [compress to size](/tools/compress-to-size) if limits apply — while checking legibility afterwards."
      },
      {
        "note": "Requirements differ substantially between countries and between visa categories within the same country. Take every figure from the official guidance for your specific application, not from a general guide."
      },
      {
        "h2": "How biometric photo checks work"
      },
      {
        "p": "Immigration photographs are increasingly assessed by software before a human sees them, against measurements defined in an international standard. That is why rejections cite things that look pedantic — the check genuinely is."
      },
      {
        "ul": [
          "**Head height** as a proportion of image height, within a defined band.",
          "**Eye position** falling within a horizontal zone measured from the top.",
          "**Face centred horizontally,** squared to the camera rather than turned.",
          "**Background uniformity,** measured as variation across the area behind the head. Shadows fail this even on a plain wall.",
          "**Sharpness and exposure,** with the face neither blown out nor underexposed.",
          "**Eyes open, visible, and not obscured** by hair, frames or reflection."
        ]
      },
      {
        "p": "None of these can be fixed by resizing. They are properties of how the photograph was taken, which is why reshooting beats editing every time."
      },
      {
        "h2": "Supporting documents"
      },
      {
        "p": "Financial statements, employment letters and travel history are usually requested as PDF, often with tight size limits and always with a legibility expectation."
      },
      {
        "ol": [
          "Combine multi-page documents into a single PDF rather than uploading pages separately.",
          "[OCR](/tools/ocr) scans so they are searchable, which caseworkers value.",
          "Keep colour where a seal, stamp or coloured signature is part of authenticity.",
          "[Compress to size](/tools/compress-to-size) only after checking legibility.",
          "Name files descriptively — `Bank_Statement_Jan-Mar_2026.pdf` rather than `doc1.pdf`."
        ]
      },
      {
        "h2": "Country and category variation"
      },
      {
        "p": "Requirements differ not only between countries but between visa categories within one country, and they change without much notice."
      },
      {
        "p": "Take every figure from the official guidance for your specific application, checked on the day you prepare the files. A photograph prepared to last year's specification, or to another country's, is a rejection that costs a processing cycle — and processing cycles are measured in weeks."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "Can I use a phone photo?",
            "a": "Often yes, if the background, lighting and framing meet the standard. Have someone else take it from about two metres."
          },
          {
            "q": "Are glasses allowed?",
            "a": "Increasingly not. Check the specific guidance for your application."
          },
          {
            "q": "Why was my photo rejected after upload succeeded?",
            "a": "Upload checks size and format. Biometric compliance is checked separately, often automatically."
          },
          {
            "q": "Should documents be colour or greyscale?",
            "a": "Colour is usually safer for official documents where seals and stamps matter. Check the guidance."
          }
        ]
      }
    ]
  },
  {
    "slug": "college-admission-document-upload",
    "title": "Preparing Documents for College Admission Portals",
    "metaTitle": "College Admission Document Upload Guide | ThePDFNinja",
    "metaDescription": "Assembling and preparing the document set before you open the portal, and the mechanical mistakes that cause rejection.",
    "excerpt": "Rejections here are almost never about your marks. They are about file formats, legibility and swapped uploads.",
    "date": "2026-08-28",
    "dateLabel": "August 28, 2026",
    "readMinutes": 10,
    "category": "India Guides",
    "emoji": "🎓",
    "keywords": [
      "college admission document upload",
      "admission portal documents",
      "marksheet upload size",
      "university application documents",
      "admission form upload"
    ],
    "blocks": [
      {
        "p": "University and college admissions in India involve uploading a document set that varies by institution, and rejections at this stage are usually mechanical rather than substantive."
      },
      {
        "h2": "Prepare before you open the portal"
      },
      {
        "p": "Admission portals time out, and losing a part-completed form at the upload stage is the commonest source of frustration. Assemble everything first."
      },
      {
        "ol": [
          "List every document the institution requires.",
          "Scan or photograph each at 300 DPI equivalent, straight and evenly lit.",
          "[Crop](/tools/image-crop) each to the document.",
          "[Greyscale](/tools/image-to-grayscale) anything that is plain ink on paper.",
          "[Convert to PDF](/tools/jpg-to-pdf), one file per document, multi-page where the document has multiple sides.",
          "[Compress to size](/tools/compress-to-size) against the stated limit.",
          "Name each file plainly: `Name_Marksheet_Class12.pdf`."
        ]
      },
      {
        "h2": "The mistakes that cause rejection"
      },
      {
        "ul": [
          "**Uploading a photo where a PDF is required,** or the reverse.",
          "**Illegible scans** — compressed too far, or captured badly to begin with.",
          "**Both sides of a document uploaded as separate files** where one two-page PDF was expected.",
          "**Wrong document entirely,** which happens easily when eight files have similar names.",
          "**Photo and signature swapped,** a classic at the end of a long form."
        ]
      },
      {
        "note": "Open every file one final time before uploading it and confirm it is the document you think it is, and that you can read the smallest text on it. Two minutes here saves a resubmission cycle."
      },
      {
        "h2": "After submission"
      },
      {
        "p": "Download and keep the submission receipt or acknowledgement PDF. [Merge](/tools/merge) it with copies of what you uploaded into a single record. If a query arises weeks later, you will want to know exactly what was submitted."
      },
      {
        "note": "Requirements vary by institution and change between admission cycles. Take every figure from the current official instructions for the institution you are applying to."
      },
      {
        "h2": "Building the document set"
      },
      {
        "p": "Institutions vary, but the required set is broadly predictable and worth assembling before the portal opens."
      },
      {
        "ul": [
          "**Identity proof** — the document type the institution specifies.",
          "**Educational certificates and mark sheets** for every qualifying examination, both sides where applicable.",
          "**Transfer or migration certificate** where moving between boards or institutions.",
          "**Category or reservation certificates,** which often have their own validity windows.",
          "**Income certificate,** where fee concessions apply.",
          "**Photograph and signature** to the specified dimensions.",
          "**Any entrance examination scorecard.**"
        ]
      },
      {
        "p": "Prepare each as a separate correctly named file, sized against the stated limit, before opening the application."
      },
      {
        "h2": "Certificates with validity periods"
      },
      {
        "p": "Category, income and domicile certificates frequently expire, and an expired certificate is rejected regardless of how well it is scanned."
      },
      {
        "p": "Check the validity of every certificate against the admission timeline, not against today's date. A certificate valid at application and expired at verification causes exactly the problem you were trying to avoid, and renewal often takes weeks."
      },
      {
        "h2": "Keeping a submission record"
      },
      {
        "ol": [
          "Save the exact files you uploaded, in a folder named for the institution and year.",
          "Save the acknowledgement or application PDF the portal generates.",
          "Note the application number somewhere you will find it.",
          "[Merge](/tools/merge) the acknowledgement with copies of the uploaded documents into one record file.",
          "Keep it until admission is confirmed and the first term has begun."
        ]
      },
      {
        "p": "Queries arrive weeks later, usually about a specific document, and being able to see exactly what was submitted resolves them immediately."
      },
      {
        "h2": "Common questions"
      },
      {
        "faq": [
          {
            "q": "One file per document or one combined file?",
            "a": "Follow the portal. Most want one file per field; some want a single combined document."
          },
          {
            "q": "Colour or greyscale for mark sheets?",
            "a": "Greyscale is usually acceptable and much smaller. Check the instructions."
          },
          {
            "q": "What if a document has two sides?",
            "a": "Make it one two-page PDF, not two separate files."
          },
          {
            "q": "My upload succeeded but was rejected later.",
            "a": "Upload checks size and format. Legibility and correctness are checked by a person afterwards."
          }
        ]
      }
    ]
  }
];
