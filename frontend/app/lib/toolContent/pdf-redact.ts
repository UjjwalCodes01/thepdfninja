export const pdfRedactContent = {
  introParagraphs: [
    "Sharing documents containing private details, social security numbers, medical records, or confidential pricing is a major liability. Simply drawing a black box over text in standard software doesn't actually remove the data\u2014the text remains hidden underneath and can be copied. ThePDFNinja's Free Online Redact PDF tool securely and permanently removes both the visible text and the underlying data, ensuring your secrets are safe.",
    "Our redaction tool replaces the selected area with a solid black box and strips the matching text characters from the PDF's internal code. This process is permanent and cannot be undone or bypassed. You can specify the page number and coordinate dimensions to redact text boxes, signatures, or images with precision.",
    "There is no need to install expensive redaction software. ThePDFNinja is web-based, free, and compatible with all platforms. Upload your PDF, redact sensitive sections, and download a safe, sanitized document instantly. Free for files up to 100MB."
],
  useCases: [
    {
        "title": "Redacting Personal Identifiable Information",
        "description": "Securely black out Social Security Numbers (SSN), credit card numbers, phone numbers, and home addresses before submitting financial or legal records online."
    },
    {
        "title": "Anonymizing Legal Case Studies",
        "description": "Remove client names, company details, and location details from court documents or case studies to maintain privacy and client confidentiality."
    },
    {
        "title": "Concealing Proprietary Pricing",
        "description": "When sharing supplier invoices or contract drafts with partners, redact wholesale pricing or custom discounts to protect competitive business agreements."
    },
    {
        "title": "Removing Signatures from Public Files",
        "description": "Black out physical signatures on public records, university applications, or corporate filings to prevent identity theft and fraud."
    }
],
  howItWorks: {
    title: "Why this is redaction and not a black rectangle",
    body: [
      "The usual way this goes wrong online is worth understanding, because it has caused real disclosures at law firms and government departments. Many tools — and every PDF editor's drawing tool — put a filled black rectangle over the sensitive text. The text is still in the file underneath. Select it and copy, extract it with any library, or open the raw content stream, and it is all there. The rectangle is a picture of censorship, not censorship.",
      "This tool marks the region and then applies the redaction, which removes the characters inside it from the content stream and rewrites the page without them. Pixels inside the region are scrubbed too, so text that lives in a scanned image is removed rather than covered.",
      "You can check this on your own output rather than trusting the claim. Redact something, download the result, and try to select the text or run it through our PDF to Text tool. Nothing should come back.",
    ],
    specs: [
      { label: "Method", value: "Content removed from the page stream, not overlaid" },
      { label: "Images inside the region", value: "Pixels scrubbed, so text baked into a scan is removed too" },
      { label: "Result verified by", value: "Absence from extracted text and from every decompressed content stream" },
      { label: "Rest of the document", value: "Untouched — only the marked regions change" },
    ],
    limits: [
      "You are responsible for marking every instance. The tool removes what you select and nothing else, so a name appearing in a header on all forty pages needs marking on all forty.",
      "Document metadata is separate from page content. Author, title and producer fields can carry names you did not intend to publish — run the file through our Remove Metadata tool afterwards.",
      "Redaction is per-region and geometric. It does not search for a phrase and remove every occurrence.",
      "Check the output before sending it anywhere sensitive. That advice applies to every redaction tool including this one.",
    ],
  },
  comparison: {
    title: "True, Secure PDF Redaction",
    description: "Do not trust cheap markup tools that leave text copyable. Here is why ThePDFNinja is the secure choice:",
    points: [
      "Permanent Text Stripping: We don't just cover text; we delete the underlying digital text and vectors, making recovery impossible.",
      "Coordinate Precision: Input exact layout coordinates to target specific boxes, keeping adjacent information visible and clean.",
      "100% Free: Protect your sensitive information without paying for expensive PDF editing software or corporate tools.",
      "Zero File Retention: To protect your data, all files are permanently deleted from our servers within 1 hour of processing."
]
  },
  security: "Security is the core purpose of this tool. All document processing takes place on secure, isolated cloud servers using SSL encryption. Your uploaded documents and redacted outputs are permanently deleted within 1 hour.",
  faqs: [
    { q: "How does the PDF Redaction tool work?", a: "You draw black bars over sensitive text, figures, names, or images. Our tool then rasterizes or structurally strips those covered layers, permanently removing the underlying data from the file." },
    { q: "Can someone remove the black redaction boxes to see my private data?", a: "No. Unlike tools that simply place a black shape over text (which can be easily copied and pasted out), our tool flattens and deletes the underlying vector data. The redacted content is permanently gone." },
    { q: "What should I redact before sharing public documents?", a: "We recommend redacting Social Security Numbers (SSNs), credit card details, phone numbers, home addresses, signatures, and proprietary business metrics." },
    { q: "Can I redact scanned PDFs?", a: "Yes, you can draw redaction boxes on scanned documents, and the black bars will be permanently merged into the image layer." },
    { q: "Are my files safe during redaction?", a: "Absolutely. All processing occurs in sandboxed cloud containers, and files are permanently purged within one hour." },
  ],
  whyUse: [
    "Permanently erase sensitive personal data, tax details, and confidential text before sharing PDFs.",
    "Ensure secure redaction by destroying the underlying vector text, preventing copy-paste bypasses.",
    "Free web-based tool with no registration, no watermarks, and a strict privacy deletion protocol.",
  ]
};