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
    "readMinutes": 6,
    "category": "India Guides",
    "emoji": "📸",
    "keywords": [
      "compress photo to 20kb",
      "20kb photo converter",
      "reduce image size to 20kb",
      "signature 20kb",
      "photo resize 20kb online"
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
    "readMinutes": 6,
    "category": "India Guides",
    "emoji": "🪪",
    "keywords": [
      "compress photo to 50kb",
      "50kb photo",
      "reduce photo size to 50kb",
      "passport photo 50kb",
      "image compress 50kb online"
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
    "readMinutes": 6,
    "category": "India Guides",
    "emoji": "📄",
    "keywords": [
      "compress pdf to 100kb",
      "pdf 100kb",
      "reduce pdf size to 100kb",
      "100kb pdf converter",
      "document upload 100kb"
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
    "readMinutes": 6,
    "category": "India Guides",
    "emoji": "🎓",
    "keywords": [
      "upsc photo size",
      "upsc signature upload",
      "upsc application photo requirements",
      "upsc photo signature size",
      "civil services photo upload"
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
    "readMinutes": 6,
    "category": "India Guides",
    "emoji": "🛂",
    "keywords": [
      "resize photo to passport size",
      "passport size photo online",
      "passport photo dimensions",
      "passport size photo maker",
      "photo resize passport"
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
    "date": "2026-09-03",
    "dateLabel": "September 3, 2026",
    "readMinutes": 6,
    "category": "India Guides",
    "emoji": "📱",
    "keywords": [
      "scan document with phone",
      "phone scanner for forms",
      "scan certificate for upload",
      "mobile document scan",
      "photo to pdf document"
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
          }
        ]
      }
    ]
  }
];
