export const rtfToPdfContent = {
  introParagraphs: [
    "RTF (Rich Text Format) is a versatile format that supports basic styling (bold, italics, fonts), but it is not universally compatible and layouts can shift when opened in different text editors. ThePDFNinja's Free Online RTF to PDF converter transforms your rich text files into pixel-perfect PDF documents, ensuring your styling looks identical on all devices.",
    "Our converter preserves formatting, text sizing, lists, tables, and colors, using LibreOffice rendering engines to output professional PDFs. It is the perfect tool for converting rich text drafts into shareable, finalized files.",
    "RTF was Microsoft's answer to the problem of moving formatted text between incompatible word processors, and it worked — it is still one of the most widely readable document formats there is. What it does not do is fix its appearance. An RTF opens slightly differently in every application, which is exactly the problem PDF was invented to solve."
],
  useCases: [
    {
        "title": "Sharing Documents Across Platforms",
        "description": "RTF files display differently in Word, WordPad, and TextEdit. Convert them to PDF to freeze formatting and share files with confidence."
    },
    {
        "title": "Preparing Reports for Clients",
        "description": "Convert rich text draft reports into PDFs to print or share them, presenting your work with a professional layout."
    },
    {
        "title": "E-Filing Rich Text Documents",
        "description": "Upload rich text files to online portals by converting them to PDF format, satisfying submission rules that mandate PDF uploads only."
    },
    {
        "title": "Protecting Content from Edits",
        "description": "Convert RTF files containing pricing proposals or terms to PDF format, locking text in place to prevent accidental edits by reviewers."
    }
],
  howItWorks: {
    title: "How the conversion is done",
    body: [
      "Your .rtf file is opened by LibreOffice running headless on our conversion server, and exported to PDF using its own PDF writer. That matters: LibreOffice is a full office suite, not a format parser, so what it lays out is what a person opening the file in a word processor would see — pagination, fonts, tables and embedded images included.",
      "Each job gets a fresh, isolated LibreOffice profile and up to five minutes of processing time before it is abandoned. The output embeds the fonts it used, so the PDF renders identically on a machine that does not have them installed.",
      "RTF stores formatting as plain-text control codes, so the conversion is generally faithful for text, basic styling and simple tables. Embedded images in RTF are stored as hex dumps and come through, though the file is often large as a result."
    ],
    specs: [
      { label: "Engine", value: "LibreOffice, headless, isolated profile per job" },
      { label: "Timeout", value: "300 seconds, after which the job fails rather than hangs" },
      { label: "Fonts", value: "Embedded in the output" },
      { label: "Where it runs", value: "A dedicated conversion server, not the browser" },
    ],
    limits: [
      "Fonts that are not installed on our server are substituted. Proprietary fonts — Calibri, Cambria and most Adobe faces — become metric-compatible equivalents, which can shift line breaks slightly. Embed fonts in the source document if layout is critical.",
      "Macros, embedded media and tracked changes are not preserved. Accept or reject changes before converting if you want the final text.",
      "Complex objects that LibreOffice renders differently from Microsoft Office — some SmartArt, certain chart styles, WordArt — may not look identical.",
      "Password-protected source files cannot be opened. Remove the password in the original application first.",
    ],
  },
  comparison: {
    title: "Why Choose ThePDFNinja RTF to PDF Converter?",
    description: "ThePDFNinja offers an effective and secure way to convert your files. Here is why we are the top choice:",
    points: [
      "High-Fidelity Layout Rendering: We preserve bold, italics, underlining, lists, tables, and spacing using advanced layout engines.",
      "100% Free and Unlimited: Convert as many RTF documents as you need without encountering daily caps, waiting rooms, or paywalls.",
      "No watermark: the PDF contains your document and nothing else. The document arrives as you wrote it, with nothing appended.",
      "No Signup Required: Start converting RTF to PDF instantly in your browser without creating an account."
]
  },
  security: "Rich Text documents often come from word processors and may contain drafts you would rather keep private. Your RTF is encrypted on upload, converted to PDF on a locked-down server, and then both files are erased within an hour. We never open the document, keep a copy, or route it through outside services.",
  faqs: [
    { q: "What is an RTF file?", a: "RTF (Rich Text Format) is a cross-platform document format that supports text formatting and simple graphics. It is supported by most word processors but can render differently depending on the application used to open it." },
    { q: "Will the text formatting of my RTF file be preserved?", a: "Yes, our converter preserves text colors, sizes, bold/italic styles, margins, and alignments, rendering them into a consistent, unalterable PDF layout." },
    { q: "Do I need Microsoft Word to convert RTF to PDF?", a: "No, our tool parses and converts RTF files entirely in the cloud, requiring no local software or office suites." },
    { q: "Can I convert large RTF files?", a: "Yes, we support RTF file uploads up to 100MB, rendering long reports or manuscripts into PDFs in seconds." },
    { q: "Are my documents private?", a: "Yes, all files are encrypted during upload and automatically deleted from our servers after 1 hour." },
  ],
  whyUse: [
    "Convert Rich Text Format (RTF) documents to universally readable PDFs in a single click.",
    "Lock in text alignments and styles to prevent them from shifting in different word processors.",
    "Free web-based tool with no registration, no watermarks, and secure auto-deletion.",
  ]
};