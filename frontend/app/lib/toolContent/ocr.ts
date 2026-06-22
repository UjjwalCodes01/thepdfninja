export const ocrContent = {
  introParagraphs: [
    "A scanned PDF is essentially just a digital photograph of a piece of paper. You can look at it, but you cannot search for specific words, copy quotes, or edit the text. This turns massive scanned archives into useless 'dark data' that cannot be easily utilized. ThePDFNinja's Free Online OCR (Optical Character Recognition) tool utilizes cutting-edge artificial intelligence to solve this problem, transforming flat images of text into fully searchable, selectable, and readable data.",
    "When you deal with legacy paper files, receipts, contracts, or old books, the typical workflow involves manually re-typing the information. This is not only incredibly tedious and time-consuming but also introduces the high probability of human error. Our online OCR engine completely automates this process. By injecting a hidden layer of selectable text directly beneath the visual image of the document, you retain the exact original look of the scan while simultaneously gaining the ability to interact with the text.",
    "Unlike rudimentary OCR tools that struggle with poor lighting, slanted scans, or complex document layouts, our platform is powered by AWS Textract—an industry-leading, enterprise-grade machine learning service. This ensures incredibly high accuracy when extracting text from invoices, receipts, legal contracts, and historical documents. It can even intelligently identify tables and retain the reading order of multi-column layouts, making the resulting data highly structured and usable. Basic open-source OCR libraries often read straight across the page, completely destroying the formatting of two-column articles or complex financial tables. Our AI, on the other hand, understands document structure and geography, preserving the contextual meaning of your files.",
    "Historically, accessing this level of AI-powered document extraction required expensive enterprise software subscriptions (like Adobe Acrobat Pro) or per-page API fees. ThePDFNinja democratizes this technology, providing powerful, accurate OCR capabilities entirely for free directly in your web browser. There is no software to install, no daily limits to hit, and no account required to unleash the power of AI on your scanned documents. Whether you need to extract text from a single blurry photograph or convert a 50-page scanned legal brief into a searchable PDF, you can do it all instantly and securely."
  ],
  useCases: [
    {
      title: "Digitizing Invoices and Receipts",
      description: "Accounting and finance teams deal with mountains of scanned invoices and physical receipts. Manually entering this data into accounting software is slow and prone to human error. By running these scans through our OCR tool, you can instantly extract the text, allowing you to easily copy and paste invoice numbers, vendor names, and total amounts directly into your spreadsheets or financial systems. This drastically accelerates the expense reporting and auditing processes."
    },
    {
      title: "Making Legal and Academic Archives Searchable",
      description: "Law firms, universities, and government agencies often have vast archives of legacy documents that were scanned years ago without OCR. Finding a specific keyword or case name in a 5,000-page scanned archive is virtually impossible. Running these files through ThePDFNinja transforms them into 'Searchable PDFs', allowing you to use standard 'Ctrl+F' (or Cmd+F) commands to instantly locate critical information, saving countless hours of manual review and discovery."
    },
    {
      title: "Extracting Text for Translation and Localization",
      description: "If you receive a foreign-language document via fax or as a scanned image, you cannot copy the text into Google Translate or a professional localization tool. Our OCR engine bridges this gap by recognizing the text and making it selectable, allowing you to easily copy the content and paste it into your preferred translation software. This is an invaluable step for international business operations and academic research."
    },
    {
      title: "Assisting Visually Impaired Readers",
      description: "Screen reading software used by visually impaired individuals cannot read the text within a flat image scan; it simply sees a blank picture. By running a scanned document through our OCR tool, you expose the underlying text layer, making the document fully accessible and readable by assistive technologies. This ensures compliance with accessibility standards and improves usability for everyone."
    },
    {
      title: "Automating Data Extraction Workflows",
      description: "For businesses that process forms, applications, or standardized documents, OCR is the first step in automation. By converting static images to text, scripts and data parsing tools can automatically read the contents of the document, categorize it, and route it to the appropriate department without manual human intervention. This enables small businesses to build automated processing pipelines without paying for expensive enterprise APIs."
    }
  ],
  comparisonTable: {
    headers: ["Feature", "ThePDFNinja OCR", "Competitor OCRs"],
    rows: [
      { feature: "Price", us: "100% Free", them: "$9–$15/month Pro Plan" },
      { feature: "Daily Task Limits", us: "Unlimited", them: "1-2 tasks per day" },
      { feature: "Account Required", us: "Never (No signup)", them: "Email required" },
      { feature: "Machine Learning Engine", us: "AWS Textract AI", them: "Basic Tesseract/Open Source" },
      { feature: "Table/Column Recognition", us: "Maintained exactly", them: "Often breaks reading order" },
      { feature: "Max File Size", us: "100MB", them: "5MB - 15MB on free plans" },
      { feature: "Watermarks Added", us: "Zero watermarks", them: "Yes, on free tiers" }
    ]
  },
  comparison: {
    title: "Why Our AI-Powered OCR Beats the Competition",
    description: "OCR is computationally expensive, which is why most free tools either offer terrible accuracy or heavily restrict your usage to force you into a paid subscription. ThePDFNinja breaks this mold entirely by giving you enterprise AI for free.",
    points: [
      "Enterprise Machine Learning: We don't rely on outdated, open-source OCR libraries. We leverage AWS Textract, the same AI engine used by Fortune 500 companies, ensuring unparalleled accuracy even on difficult scans.",
      "100% Free, No 'Pro' Paywall: Competitors like Smallpdf and Adobe Acrobat explicitly lock OCR behind their paid premium subscriptions (often charging $9 to $20 a month). ThePDFNinja provides this feature completely free to all users.",
      "Support for Complex Layouts: Basic OCR tools read straight across a page, destroying the formatting of multi-column articles or complex tables. Our AI understands document structure, keeping columns and tables intact.",
      "No Account Required: You don't need to surrender your email address to access our AI tools. You can upload, extract, and download completely anonymously."
    ]
  },
  security: "Processing documents with Artificial Intelligence requires transmitting them to powerful cloud servers, which naturally raises privacy concerns. ThePDFNinja is committed to absolute security. Your files are transferred using 256-bit AES encryption. The OCR process occurs within isolated AWS containers, meaning no human ever views your documents. Furthermore, we explicitly opt out of allowing AWS or any other third party to use your uploaded documents to train their machine learning models. Once the text extraction is complete, both your original scan and the resulting searchable PDF are permanently deleted from our servers within 1 hour. We maintain zero backups and zero logs of your document contents.",
  faqs: [
    { q: "What is the difference between a normal scanned PDF and an OCR-processed PDF?", a: "A normal scanned PDF contains flat image layers, meaning the text is non-selectable and unsearchable. OCR (Optical Character Recognition) processes these images to detect characters and injects an invisible, selectable text layer directly beneath the visuals, allowing you to search (Ctrl+F) and copy-paste text just like a native Word document." },
    { q: "What languages does the OCR tool support?", a: "Our AI-powered engine supports English, Spanish, French, German, Italian, Portuguese, and standard Latin-script languages, ensuring highly accurate grammatical accents and character recognition." },
    { q: "Can the OCR engine recognize handwritten text or low-quality camera snapshots?", a: "Our tool utilizes advanced machine learning models that excel at reading low-contrast scans, tilted pages, and digital camera snapshots. While highly readable print handwriting can be extracted with reasonable accuracy, complex cursive or messy handwriting may have reduced accuracy compared to typed text." },
    { q: "Is there a limit on the number of pages I can OCR?", a: "To ensure stable and fast server processing times, our free OCR tool supports documents up to 50 pages or 100MB per file. Unlike other tools, there are no daily limits on the total number of files you can process—you can OCR as many documents as you need, completely free." }
  ],
  whyUse: [
    "We use enterprise-grade neural networks (powered by AWS Textract core) rather than outdated open-source library engines to ensure maximum layout and word accuracy.",
    "Our system builds dual-layer PDFs that preserve the exact original scan visuals while embedding a clean, searchable text layer behind it, keeping your documents visually identical but fully interactive.",
    "Unlike competitors that charge premium subscriptions or impose strict daily document limits, we offer unlimited OCR operations up to 50 pages per file with strict 1-hour automated file purging."
  ]
};
