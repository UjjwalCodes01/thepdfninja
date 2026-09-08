export const tiffToJpgContent = {
  introParagraphs: [
    "TIFF files are high-quality, uncompressed images commonly used in scanning and printing, but they have massive file sizes and are not supported by web browsers or email clients. ThePDFNinja's Free Online TIFF to JPG converter allows you to convert large TIFF images into manageable, lightweight JPG files instantly, making them easy to view, share, and email.",
    "Our converter supports both single-page and multi-page TIFF files. If your TIFF contains multiple pages, our tool will automatically extract each page as an individual JPG and deliver them in a neat, organized ZIP archive, keeping your downloads clean.",
    "TIFF is the format scanners and print workflows default to, because it can store image data losslessly along with layers, multiple pages and colour profiles for professional printing. All of that comes at a cost in size, and almost none of it is useful once the file is going into an email or a web form."
],
  useCases: [
    {
        "title": "Sharing Scanned Documents via Email",
        "description": "Scanners often output multi-page documents as massive TIFF files. Convert them to JPG to reduce size and attach them easily, bypassing size limit warnings."
    },
    {
        "title": "Viewing TIFF Files on Mobile Devices",
        "description": "Smartphones and tablets cannot open TIFF files natively. Convert them to JPG format to view and read them easily on any mobile device."
    },
    {
        "title": "Optimizing Scanned Images for Websites",
        "description": "Convert scanned TIFF files into JPG format before uploading them to your website to speed up page load times and improve user experience."
    },
    {
        "title": "Meeting Image Upload Form Limits",
        "description": "Online forms and application sites rarely accept TIFF files. Convert them to JPG format to submit them without encountering errors."
    }
],
  howItWorks: {
    title: "How TIFF is handled",
    body: [
      "TIFF can hold several pages in one file — scanners produce this routinely — so the tool checks. A single-page TIFF becomes one JPEG. A multi-page TIFF becomes a ZIP containing one JPEG per page, numbered in order.",
      "Each page is converted to RGB and encoded at the quality you choose, 90 by default.",
    ],
    specs: [
      { label: "Single page", value: "One JPEG" },
      { label: "Multi-page", value: "ZIP of JPEGs, page_1.jpg onward" },
      { label: "Quality", value: "90 by default" },
      { label: "Colour", value: "Converted to RGB" },
    ],
    limits: [
      "TIFF layers, alpha channels and embedded colour profiles do not survive; JPEG has none of them.",
      "Scanned text at low JPEG quality shows halos. Keep quality high for documents.",
      "For a multi-page scan you intend to keep as a document, TIFF to PDF is usually the better destination.",
    ],
  },
  comparison: {
    title: "Why TIFF to JPG with ThePDFNinja?",
    description: "The conversion is free, including for the multi-page TIFFs that scanners produce. Here is why we are the top choice:",
    points: [
      "Multi-Page TIFF Support: Automatically extracts all pages from a multi-page TIFF file and packages them in a single ZIP archive.",
      "Quality is adjustable from 1 to 100. Scanned text benefits from a higher setting than photographic content does.",
      "100% Free and Unlimited: Convert as many TIFF images as you need without encountering daily caps, waiting rooms, or paywalls.",
      "No Signup Required: Start converting TIFF to JPG instantly in your browser without creating an account."
]
  },
  security: "TIFF scans often hold sensitive documents, so each upload is encrypted in transit and converted to JPG on a private, single-use server. The original TIFF and the finished JPG are both wiped automatically within sixty minutes. We never open the pages, never build searchable copies, and never route your scan through third-party services.",
  faqs: [
    { q: "Why convert TIFF to JPG?", a: "TIFF files are lossless graphics that are very large in file size and are rarely supported by standard web browsers. Converting to JPG applies compression, which reduces file sizes by up to 90%, making them web-friendly." },
    { q: "How does the tool handle multi-page TIFF files?", a: "If your TIFF contains multiple pages, our converter will output each page as an individual JPG image and package them inside a single ZIP file for download." },
    { q: "Will the converted JPG photos lose quality?", a: "We use high-quality JPEG compression settings to ensure that the difference in detail is virtually imperceptible to the naked eye." },
    { q: "Can I convert TIFF files in bulk?", a: "Yes, you can upload multiple TIFF files and convert them all to JPG in a single batch." },
    { q: "Are my image files safe?", a: "Yes, all transfers use secure 256-bit SSL encryption, and files are permanently purged within one hour of conversion." },
  ],
  whyUse: [
    "Convert large, uncompressed TIFF images into lightweight, universally compatible JPEGs.",
    "Extract individual pages from multi-page TIFF documents into separate JPG files in bulk.",
    "Free browser-based conversion with no registration, no watermarks, and automatic file deletion.",
  ]
};