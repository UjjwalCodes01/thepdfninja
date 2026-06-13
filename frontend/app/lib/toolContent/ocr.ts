export const ocrContent = {
  introParagraphs: [
    "A scanned PDF is essentially just a digital photograph of a piece of paper. You can look at it, but you cannot search for specific words, copy quotes, or edit the text. This turns massive scanned archives into useless 'dark data' that cannot be easily utilized. ThePDFNinja's Free Online OCR (Optical Character Recognition) tool utilizes cutting-edge artificial intelligence to solve this problem, transforming flat images of text into fully searchable, selectable, and readable data.",
    "Unlike rudimentary OCR tools that struggle with poor lighting, slanted scans, or complex document layouts, our platform is powered by AWS Textract—an industry-leading, enterprise-grade machine learning service. This ensures incredibly high accuracy when extracting text from invoices, receipts, legal contracts, and historical documents. It can even intelligently identify tables and retain the reading order of multi-column layouts, making the resulting data highly structured and usable.",
    "Historically, accessing this level of AI-powered document extraction required expensive enterprise software subscriptions (like Adobe Acrobat Pro) or per-page API fees. ThePDFNinja democratizes this technology, providing powerful, accurate OCR capabilities entirely for free directly in your web browser. There is no software to install, no daily limits to hit, and no account required to unleash the power of AI on your scanned documents."
  ],
  useCases: [
    {
      title: "Digitizing Invoices and Receipts",
      description: "Accounting and finance teams deal with mountains of scanned invoices and physical receipts. Manually entering this data into accounting software is slow and prone to human error. By running these scans through our OCR tool, you can instantly extract the text, allowing you to easily copy and paste invoice numbers, vendor names, and total amounts directly into your spreadsheets or financial systems."
    },
    {
      title: "Making Archives Searchable",
      description: "Law firms, universities, and government agencies often have vast archives of legacy documents that were scanned years ago without OCR. Finding a specific keyword or case name in a 5,000-page scanned archive is virtually impossible. Running these files through ThePDFNinja transforms them into 'Searchable PDFs', allowing you to use standard 'Ctrl+F' (or Cmd+F) commands to instantly locate critical information."
    },
    {
      title: "Extracting Text for Translation",
      description: "If you receive a foreign-language document via fax or as a scanned image, you cannot copy the text into Google Translate or a professional localization tool. Our OCR engine bridges this gap by recognizing the text and making it selectable, allowing you to easily copy the content and paste it into your preferred translation software."
    },
    {
      title: "Assisting Visually Impaired Readers",
      description: "Screen reading software used by visually impaired individuals cannot read the text within a flat image scan; it simply sees a blank picture. By running a scanned document through our OCR tool, you expose the underlying text layer, making the document fully accessible and readable by assistive technologies."
    }
  ],
  comparison: {
    title: "Why Our AI-Powered OCR Beats the Competition",
    description: "OCR is computationally expensive, which is why most free tools either offer terrible accuracy or heavily restrict your usage. ThePDFNinja breaks this mold.",
    points: [
      "Enterprise Machine Learning: We don't rely on outdated, open-source OCR libraries. We leverage AWS Textract, the same AI engine used by Fortune 500 companies, ensuring unparalleled accuracy even on difficult scans.",
      "100% Free, No 'Pro' Paywall: Competitors like Smallpdf and Adobe Acrobat explicitly lock OCR behind their paid premium subscriptions ($9 to $20 a month). ThePDFNinja provides this feature completely free to all users.",
      "Support for Complex Layouts: Basic OCR tools read straight across a page, destroying the formatting of multi-column articles or complex tables. Our AI understands document structure, keeping columns and tables intact.",
      "No Account Required: You don't need to surrender your email address to access our AI tools. You can upload, extract, and download anonymously."
    ]
  },
  security: "Processing documents with Artificial Intelligence requires transmitting them to powerful cloud servers, which naturally raises privacy concerns. ThePDFNinja is committed to absolute security. Your files are transferred using 256-bit AES encryption. The OCR process occurs within isolated AWS containers, meaning no human ever views your documents. Furthermore, we explicitly opt out of allowing AWS or any other third party to use your uploaded documents to train their machine learning models. Once the text extraction is complete, both your original scan and the resulting searchable PDF are permanently deleted from our servers within one hour."
};
