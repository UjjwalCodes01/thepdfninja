export const pdfToPdfaContent = {
  introParagraphs: [
    "While standard PDFs are excellent for sharing and printing today, they are not guaranteed to display correctly fifty or a hundred years from now. As software evolves, the fonts, embedded media, and encryption protocols used in today's PDFs may become obsolete, rendering the document unreadable to future generations. To solve this, the International Organization for Standardization (ISO) created the PDF/A format—a strict subset of PDF designed explicitly for long-term digital preservation. ThePDFNinja's Free Online PDF to PDF/A Converter ensures your documents survive the test of time.",
    "Converting a standard document to PDF/A is a rigorous process. Our engine strips out all elements that threaten long-term archiving, such as audio/video content, JavaScript, and external font references. It then embeds every required font directly into the file and forces device-independent color spaces. This guarantees that whether the document is opened tomorrow or in the year 2150, on a Mac, Windows, or an operating system that hasn't been invented yet, it will look exactly the same.",
    "Complying with strict archival standards typically requires expensive enterprise software. ThePDFNinja provides this specialized conversion utility completely free of charge. Whether you are a legal professional submitting court records, an academic archiving a thesis, or a business preparing for an audit, you can generate ISO-compliant PDF/A files instantly directly in your browser, with no account required."
  ],
  useCases: [
    {
      title: "Legal and Court Submissions",
      description: "Courts and government agencies around the world increasingly mandate that all digital filings be submitted in the PDF/A format. This ensures that legal records, case files, and judgments remain accessible and verifiable for decades. Our tool allows law firms to quickly convert standard PDFs into strictly compliant PDF/A documents, ensuring their electronic filings are accepted by judicial portals without technical rejection."
    },
    {
      title: "Corporate Archiving and Compliance",
      description: "Heavily regulated industries like healthcare, finance, and aerospace are legally required to maintain records for extended periods (often 10, 50, or 100 years). Storing these records as standard PDFs is a massive compliance risk. Converting critical audits, HR records, and financial statements to PDF/A guarantees they meet international digital preservation standards, protecting the company during future regulatory reviews."
    },
    {
      title: "Academic and Library Preservation",
      description: "Libraries, universities, and national archives are tasked with preserving humanity's digital heritage. When universities require students to submit digital theses or dissertations, they almost universally demand the PDF/A format. Our free tool allows students to easily meet these strict university guidelines, ensuring their research remains accessible for future scholars."
    },
    {
      title: "Future-Proofing Personal Documents",
      description: "If you are scanning family genealogies, digitizing old diaries, or saving important personal contracts, you want them to be readable by your grandchildren. Standard PDFs might break if the fonts you used are no longer available in 50 years. Converting your personal archives to PDF/A ensures your legacy is preserved exactly as you created it."
    }
  ],
  comparison: {
    title: "Why Our PDF/A Converter is the Archival Standard",
    description: "Creating a true, ISO-compliant PDF/A is highly technical. Here is why ThePDFNinja is trusted for long-term digital preservation.",
    points: [
      "Strict ISO Compliance: We don't just rename the file extension. Our engine performs a deep structural conversion, embedding fonts and stripping forbidden elements to ensure the output passes strict PDF/A validation checks.",
      "100% Free for All Users: Generating compliance-grade archival documents usually requires expensive software like Adobe Acrobat Pro. We offer this specialized capability completely free.",
      "No File Size Arbitrage: Archival documents like massive court dockets or scanned books are often huge. We support files up to 100MB, ensuring you can preserve your largest records without hitting a paywall.",
      "Instant Cloud Processing: Deeply analyzing and embedding fonts into a massive document can take minutes on a standard laptop. Our AWS serverless architecture handles the heavy computational lifting in seconds."
    ]
  },
  security: "Documents destined for long-term archiving are often a company or individual's most critical records. ThePDFNinja ensures these records are treated with the utmost security during the conversion process. Your files are transmitted using 256-bit AES encryption and processed within isolated, anonymous cloud containers. We do not inspect, retain, or back up your data. Once your ISO-compliant PDF/A is generated and ready for download, our automated privacy protocol instantly deletes both your original upload and the new archival file from our servers within one hour.",
  faqs: [
    { q: "What is PDF/A?", a: "PDF/A is an ISO-standardized version of the Portable Document Format (PDF) specialized for long-term archiving. It guarantees that a document can be rendered exactly the same way regardless of the software and devices used in the future by embedding all fonts, color profiles, and metadata." },
    { q: "Which PDF/A standard does this tool use?", a: "Our converter outputs PDF/A-1b and PDF/A-2b compliance levels, which are the most widely used standards for business, legal, and governmental archival records." },
    { q: "Does PDF/A conversion affect page layout?", a: "No, the visual layout of your PDF remains identical. The converter simply embeds missing resources (like fonts and device-independent color spaces) to meet compliance regulations." },
    { q: "Can I convert scanned PDFs to PDF/A?", a: "Yes, scanned PDFs can be converted to PDF/A to ensure they remain readable in long-term archive folders." },
    { q: "Are my archived files kept private?", a: "Yes. Your files are processed on secure, isolated AWS servers and deleted permanently within one hour of conversion." },
  ],
  whyUse: [
    "Convert your documents to ISO-compliant PDF/A standards for legal compliance and long-term digital archiving.",
    "Embed all fonts, device-independent colors, and metadata so your files render perfectly decades from now.",
    "Free cloud converter with no signups, no watermarks, and a strict 1-hour auto-delete policy.",
  ]
};