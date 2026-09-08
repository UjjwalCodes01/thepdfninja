export const pdfToTiffContent = {
  introParagraphs: [
    "The TIFF (Tagged Image File Format) is highly favored in professional printing, publishing, and archiving due to its support for multi-page structures, lossless compression, and deep color spaces. ThePDFNinja's Free Online PDF to TIFF converter lets you transform your PDFs into high-quality TIFF files instantly. This is crucial for businesses that require high-fidelity images for faxing, digital archiving, or prepress graphics workflows.",
    "Our converter guarantees that all typography, vector shapes, and embedded images are rendered with exact precision. You can select standard DPI settings (such as 150, 200, 300, or 600 DPI) to match the technical requirements of your destination systems. If your PDF has multiple pages, the converter will output them as a single multi-page TIFF file or high-res individual files, depending on your choice.",
    "Rendering happens on our servers, so a long document does not tie up your machine. Long documents render page by page without your machine doing the work. Process documents up to 100MB at no cost, without registration, limits, or watermarks."
],
  useCases: [
    {
        "title": "Digital Archiving and Compliance",
        "description": "Many legal and financial institutions mandate TIFF files for long-term records because it is a stable, uncompressed, and universally accepted archival format. Easily convert your PDF records to TIFF to meet compliance standards."
    },
    {
        "title": "Preparing Files for Professional Printing",
        "description": "TIFF is widely used in commercial printing because it preserves colors and details perfectly. Convert your PDF brochures or designs to TIFF to ensure the highest print quality without compression artifacts."
    },
    {
        "title": "Fax Server Compatibility",
        "description": "Enterprise fax servers often require incoming documents to be formatted as TIFF images (usually at 200 DPI). Our converter helps you transform standard PDFs into fax-compliant TIFF files in seconds."
    },
    {
        "title": "Medical & Scientific Imaging Documentation",
        "description": "For researchers and healthcare professionals, keeping medical scans or scientific logs in high-quality TIFF formats maintains visual data accuracy without losing detail to lossy compression."
    }
],
  howItWorks: {
    title: "How pages become TIFF",
    body: [
      "Each page is rendered to a bitmap at the chosen resolution and the pages are assembled into a single multi-page TIFF with the resolution recorded in the file. 200 DPI is the default because it is what fax and document-management systems typically expect.",
      "The TIFF is written without compression. That is deliberate — it maximises compatibility with older imaging systems — but it means the files are large. A four-page document at 200 DPI runs to tens of megabytes.",
    ],
    specs: [
      { label: "Method", value: "Pages rasterised, assembled into one multi-page TIFF" },
      { label: "Default resolution", value: "200 DPI, recorded in the file" },
      { label: "Colour", value: "RGB" },
      { label: "Compression", value: "None — maximally compatible, large files" },
    ],
    limits: [
      "Files are big. If you need a small file, this is the wrong format; use PDF to PNG or PDF to JPG.",
      "The text layer does not survive rasterisation. The TIFF is pixels.",
      "Some viewers show only the first page of a multi-page TIFF. Use a document viewer rather than a photo viewer.",
    ],
  },
  comparison: {
    title: "Why Our PDF to TIFF Tool Stands Out",
    description: "ThePDFNinja offers a highly specialized PDF to TIFF utility that matches or exceeds paid desktop alternatives:",
    points: [
      "High DPI Options: We support resolutions up to 600 DPI, making our tool suitable for the most demanding commercial print and scanning needs.",
      "Lossless Output: We ensure that no color details, text clarity, or image assets are degraded during the rasterization process.",
      "Unlimited Conversions: Convert as many files as you need without encountering daily caps, waiting rooms, or payment prompts.",
      "No Signup Required: Start converting your PDFs to TIFF instantly in your browser without filling out registration forms."
]
  },
  security: "Rendering a PDF into high-resolution TIFF images is handled in a private sandbox reached only over encrypted TLS, so confidential pages are never exposed. The source PDF and the generated TIFFs are erased within sixty minutes, with no copies cached and no content indexed. Your document is converted and then completely removed from our systems.",
  faqs: [
    { q: "Why convert PDF to TIFF?", a: "TIFF is a high-quality, lossless image format widely used in desktop publishing, photography, and archiving. It is also required by many digital document management systems and electronic fax services." },
    { q: "Will the converter merge multiple PDF pages into a single multi-page TIFF?", a: "Yes, our converter supports generating multi-page TIFF files where all pages of your PDF are bundled into a single TIFF file, or you can choose to download separate single-page TIFFs in a ZIP archive." },
    { q: "Is there a loss in image quality during conversion?", a: "No, we use lossless TIFF compression profiles (like LZW) to ensure that the images retain 100% of the original document resolution and detail." },
    { q: "Can I convert large PDFs to TIFF?", a: "Yes, our cloud servers process large documents up to 100MB efficiently, generating high-resolution TIFF images in seconds." },
    { q: "Are my files kept private?", a: "Yes, all data transfers are encrypted, and files are permanently purged from our servers within one hour of conversion." },
  ],
  whyUse: [
    "Convert PDF documents into high-resolution, lossless TIFF files for archiving, publishing, or faxing.",
    "Generate multi-page TIFF files or individual page graphics in bulk, completely free.",
    "Strict data privacy: files are processed in secure AWS containers and auto-deleted in 1 hour.",
  ]
};