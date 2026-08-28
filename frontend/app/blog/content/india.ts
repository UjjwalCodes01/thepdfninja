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
    "date": "2026-09-02",
    "dateLabel": "September 2, 2026",
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
  },
  {
    "slug": "compress-pdf-to-500kb",
    "title": "How to Compress a PDF to 500KB",
    "metaTitle": "Compress PDF to 500KB Online — Free | ThePDFNinja",
    "metaDescription": "500KB is a generous ceiling that still catches out multi-page scans. How to hit it without sacrificing legibility.",
    "excerpt": "Comfortable for most documents, tight for a colour scan. Here is how to get under it reliably.",
    "date": "2026-09-10",
    "dateLabel": "September 10, 2026",
    "readMinutes": 6,
    "category": "India Guides",
    "emoji": "📑",
    "keywords": [
      "compress pdf to 500kb",
      "500kb pdf",
      "reduce pdf to 500kb",
      "pdf size 500kb",
      "document 500kb upload"
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
    "date": "2026-09-18",
    "dateLabel": "September 18, 2026",
    "readMinutes": 6,
    "category": "India Guides",
    "emoji": "🗜️",
    "keywords": [
      "compress pdf to 1mb",
      "1mb pdf",
      "reduce pdf to 1mb",
      "pdf under 1mb",
      "compress document to 1mb"
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
    "date": "2026-09-28",
    "dateLabel": "September 28, 2026",
    "readMinutes": 7,
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
    "date": "2026-10-06",
    "dateLabel": "October 6, 2026",
    "readMinutes": 6,
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
    "date": "2026-10-14",
    "dateLabel": "October 14, 2026",
    "readMinutes": 6,
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
    "date": "2026-10-22",
    "dateLabel": "October 22, 2026",
    "readMinutes": 6,
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
    "date": "2026-10-30",
    "dateLabel": "October 30, 2026",
    "readMinutes": 6,
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
    "date": "2026-11-09",
    "dateLabel": "November 9, 2026",
    "readMinutes": 6,
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
    "date": "2026-11-17",
    "dateLabel": "November 17, 2026",
    "readMinutes": 6,
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
    "date": "2026-11-25",
    "dateLabel": "November 25, 2026",
    "readMinutes": 6,
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
