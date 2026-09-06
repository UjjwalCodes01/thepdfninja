export const compressContent = {
  introParagraphs: [
    "Large PDF files are a modern digital nuisance. They consume valuable storage space, cause email servers to reject attachments, and take ages to upload to web portals or download on mobile connections. ThePDFNinja's Free Online PDF Compressor is the ultimate solution to this problem. Our tool intelligently reduces the file size of your PDFs by up to 70%—or even more—without noticeable degradation in document quality. Whether you are dealing with image-heavy presentations, high-resolution scans, or complex architectural blueprints, we help you shrink them down to a manageable size.",
    "The secret to our superior compression lies in our advanced optimization algorithms. When you upload a PDF, ThePDFNinja doesn't just blindly remove data. Instead, it analyzes the document structure, downsizes images to web-optimized resolutions, removes unnecessary embedded fonts, and discards redundant meta-information. This ensures that the text remains crisp, searchable, and perfectly legible, while the overall file size plummets. You get the best of both worlds: a lightweight file and professional quality.",
    "Unlike traditional desktop software that requires complex configuration, or freemium web tools that cap the size of files you can compress, ThePDFNinja is built for speed and accessibility. Our compressor is entirely web-based, works instantly across all platforms (Windows, Mac, iOS, Android), and handles files up to 100MB completely free of charge. No software installations, no account registrations, just pure, efficient compression."
  ],
  useCases: [
    {
      title: "Emailing Large Attachments",
      description: "Most email providers, including Gmail and Outlook, have strict attachment size limits (typically around 20MB to 25MB). If you try to send a high-resolution PDF portfolio or an extensive scanned report, your email will bounce back. Our PDF compressor solves this instantly. By shrinking the file size, you can easily attach your documents directly to your emails, bypassing the need for cumbersome third-party file-sharing links or cloud storage permissions."
    },
    {
      title: "Web Uploads & E-Filing",
      description: "Government portals, university application systems, and job application boards often have incredibly restrictive file size limits (sometimes as low as 1MB or 2MB). If your resume, transcript, or legal filing exceeds this limit, you simply cannot submit it. ThePDFNinja allows you to rapidly compress your documents to meet these strict requirements, ensuring your applications and filings are accepted without technical hiccups."
    },
    {
      title: "Optimizing Website Assets",
      description: "If you manage a website and offer downloadable PDFs (like ebooks, whitepapers, or product manuals), large file sizes can severely impact your site's performance and user experience. Slow downloads frustrate users and can negatively affect your SEO rankings. By running your downloadable PDFs through our compressor before uploading them to your server, you ensure faster load times, reduced bandwidth costs, and a much better experience for your audience."
    },
    {
      title: "Freeing Up Device Storage",
      description: "For users working primarily on mobile devices, tablets, or laptops with limited SSD storage, keeping massive uncompressed PDFs can quickly eat up available space. Compressing your archived PDFs, digital textbooks, and scanned receipts allows you to maintain your entire digital library locally without constantly battling \"Storage Full\" warnings."
    }
  ],
  howItWorks: {
    title: "How our compression actually works",
    body: [
      "Most compressors apply one algorithm and hand you whatever comes out. Ours runs up to four different strategies against your file, measures the result of each, and returns the smallest one. If none of them beat the file you uploaded, you get your original back untouched — the tool will never hand you something larger than what you gave it, which is a surprisingly common way for PDF compressors to fail.",
      "The first strategy is a Ghostscript pass with duplicate-image detection and font subsetting. The second is a lossless structural rewrite: unused objects are garbage-collected, content streams are sanitised, and everything is deflated. This one is safe on any document and typically accounts for the reduction you see on pure text files. The third re-encodes embedded images, downsampling anything longer than the preset's pixel ceiling and re-compressing it as progressive JPEG — and it only substitutes an image when the new version is genuinely smaller. The fourth applies only to documents that are already essentially scans: each page is rasterised whole. It destroys the text layer, so we only consider it when there is no meaningful text layer to lose.",
      "Your quality setting drives two numbers: the JPEG quality used when re-encoding, and the longest edge any image is allowed to keep. Those are listed below so you can predict what you are going to get.",
    ],
    specs: [
      { label: "Processing pipeline", value: "Ghostscript, lossless rewrite, image re-encode, full rasterise — smallest result wins" },
      { label: "screen", value: "JPEG quality 40, images capped at 1000px on the long edge" },
      { label: "ebook (default)", value: "JPEG quality 65, images capped at 1400px" },
      { label: "printer", value: "JPEG quality 80, images capped at 1800px" },
      { label: "prepress", value: "JPEG quality 92, images capped at 2400px" },
      { label: "Text and vector content", value: "Never rasterised except in strategy four, which needs an image-only document to trigger" },
      { label: "Maximum file size", value: "100MB, enforced by the upload policy rather than checked afterwards" },
    ],
    measured: {
      caption: "Measured results, September 2026",
      headers: ["Document", "Original", "screen", "ebook", "printer", "prepress"],
      rows: [
        ["Text-only report, 20 pages", "44 KB", "35 KB (−22%)", "35 KB (−22%)", "35 KB (−22%)", "35 KB (−22%)"],
        ["Scanned document, 8 pages", "3.3 MB", "192 KB (−94%)", "466 KB (−86%)", "770 KB (−77%)", "1.7 MB (−49%)"],
        ["Text with figures, 12 pages", "1.5 MB", "317 KB (−78%)", "438 KB (−70%)", "602 KB (−59%)", "1.0 MB (−30%)"],
      ],
      note: "Produced by running these three documents through the live API on this site and recording the returned file sizes. Page counts and extracted text were identical before and after in every case. Note the first row: a document with no images compresses by about a fifth no matter which preset you pick, because there is nothing for the image settings to act on. Your own results depend entirely on what is inside your file.",
    },
    limits: [
      "A PDF that is already optimised will come back unchanged. That is the tool working correctly, not failing — but if you were expecting a smaller number, this is why.",
      "Text-only documents compress by roughly 20% and the quality preset makes no difference to them. If your file is mostly text and you need it dramatically smaller, compression is the wrong tool; splitting the document is the right one.",
      "Scanned documents at the screen preset lose real image detail. Small print in a scan can become hard to read. Use printer or prepress if the scan needs to stay legible at full zoom.",
      "We cannot compress a password-protected PDF. Remove the password with our Unlock tool first, then compress, then re-protect it.",
      "There is no way to request an exact output size here. If you need a file under a specific limit, use our Compress PDF to Size tool instead, which targets a number.",
    ],
  },
  comparisonTable: {
    headers: ["Feature", "ThePDFNinja"],
    rows: [
      { feature: "Price", us: "100% Free" },
      { feature: "Daily Task Limits", us: "Unlimited" },
      { feature: "Account Required", us: "Never (No signup)" },
      { feature: "Max File Size", us: "100MB" },
      { feature: "Watermarks Added", us: "Zero watermarks" },
      { feature: "File Retention", us: "Deleted in 1 hour" }
    ]
  },
  comparison: {
    title: "Why ThePDFNinja Compression is Unmatched",
    description: "The internet is flooded with PDF compressors, but they are not created equal. Here is why ThePDFNinja is the preferred choice for power users and professionals alike.",
    points: [
      "No Extreme Degradation: Many free compressors aggressively destroy image quality, leaving you with blurry, pixelated documents. Our smart compression strikes the perfect balance, preserving readability and visual fidelity while reducing file size.",
      "100MB Free Limit: Every user gets the full 100MB upload ceiling. There is no paid tier that unlocks a larger one, because there is no paid tier.",
      "Zero Daily Caps: Whether you need to compress one file for an email or fifty files for a website migration, ThePDFNinja imposes zero daily limits. You never have to wait 1 hour to process your next file.",
      "Privacy by Default: You shouldn't have to risk your data privacy just to make a file smaller. We don't ask for your email, and we never keep your files."
    ]
  },
  security: "Compressing documents online shouldn't involve compromising your privacy. When you use ThePDFNinja to shrink your PDFs, your connection is secured via 256-bit encryption, ensuring your data is safe from interception. We process your files on secure, isolated AWS servers. Once the compression is complete, our system triggers an automatic deletion protocol. Both the original heavy PDF and the newly compressed version are permanently and irretrievably deleted from our servers within 1 hour. Your business reports, personal IDs, and confidential data remain entirely yours.",
  faqs: [
    { q: "Will compressing a PDF degrade the quality of its images or text?", a: "ThePDFNinja uses smart optimization algorithms that downsample images to web-friendly resolutions while keeping typography and layouts crisp. For typical documents and presentations, the visual difference is virtually unnoticeable, yet the file size is reduced significantly." },
    { q: "What is the maximum file size limit for the compressor?", a: "We support file uploads of up to 100MB per file for compression, completely free of charge. There are no daily limits on the number of files you can compress." },
    { q: "Are compressed PDFs accepted by portals like government and university websites?", a: "Yes, our compressed PDFs strictly adhere to standard PDF/A and PDF specifications. They are ideal for electronic filing systems (like court portals, UPSC, NEET, or university application systems) that enforce strict size limits." },
    { q: "Do you support batch compression of multiple files?", a: "Yes. You can select and upload multiple PDF documents simultaneously. Our compressor will process each file and provide them as a single convenient ZIP download." }
  ],
  whyUse: [
    "Our PDF Compressor utilizes intelligent context-aware downsampling to shrink your document size by up to 70% or more, without destroying the legibility of text or graphics.",
    "Unlike common freemium tools that enforce a 2-file daily limit or inject watermark logos unless you upgrade, ThePDFNinja offers unlimited watermark-free compression.",
    "We secure your data via 256-bit SSL/TLS encryption, processing all documents in isolated cloud containers that delete everything permanently within 1 hour."
  ]
};
