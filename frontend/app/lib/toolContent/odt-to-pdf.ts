export const odtToPdfContent = {
  introParagraphs: [
    "ODT (OpenDocument Text) is the default open-source word processing format used by LibreOffice and OpenOffice, but it is not natively supported by MS Word, web browsers, or many document management systems. ThePDFNinja's Free Online ODT to PDF converter bridges this gap, transforming ODT files into universally compatible PDF documents.",
    "Our converter leverages native LibreOffice rendering engines on our servers, ensuring layout fidelity. Text alignments, tables, page margins, and fonts are preserved, delivering a PDF that matches your original document.",
    "You do not need LibreOffice installed locally — we run it on our side. Drop the .odt in and the PDF comes back with fonts embedded. Documents up to 100MB convert free, unwatermarked."
],
  useCases: [
    {
        "title": "Submitting LibreOffice Documents",
        "description": "Ensure that professors, clients, or employers who use Microsoft Office can open and read your LibreOffice files by converting them to PDF first."
    },
    {
        "title": "E-Filing OpenDocument Text Files",
        "description": "Online forms and application portals often reject ODT files. Convert them to PDF to submit them without encountering errors."
    },
    {
        "title": "Ensuring Layout Fidelity",
        "description": "ODT layouts can shift when opened in Microsoft Word. Convert your documents to PDF to lock formatting in place before sharing."
    },
    {
        "title": "Archiving LibreOffice Records",
        "description": "Save ODT records, minutes, or manuals as PDFs for long-term archiving, ensuring files remain readable in the future."
    }
],
  howItWorks: {
    title: "How the conversion is done",
    body: [
      "Your .odt file is opened by LibreOffice running headless on our conversion server, and exported to PDF using its own PDF writer. That matters: LibreOffice is a full office suite, not a format parser, so what it lays out is what a person opening the file in LibreOffice Writer would see — pagination, fonts, tables and embedded images included.",
      "Each job gets a fresh, isolated LibreOffice profile and up to five minutes of processing time before it is abandoned. The output embeds the fonts it used, so the PDF renders identically on a machine that does not have them installed.",
      "This is the one conversion where fidelity should be essentially perfect, because ODT is LibreOffice's own native format — nothing is being interpreted from another application's file structure."
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
    title: "Why Choose ThePDFNinja ODT to PDF Converter?",
    description: "ODT is the OpenDocument format used by LibreOffice and OpenOffice. Converting it to PDF fixes its appearance so it looks the same everywhere. Here is how we do that.",
    points: [
      "Converted with LibreOffice itself, which is the application that defines the OpenDocument format — so the layout you see in Writer is the layout you get.",
      "Fonts are embedded into the PDF, which is the point: your recipient sees the document as you laid it out, even without your fonts installed.",
      "Fixes the appearance permanently. An ODT renders slightly differently in every word processor; a PDF does not.",
      "It also becomes read-only in practice. If your recipient needs to edit it, send the ODT instead.",
]
  },
  security: "OpenDocument files are processed in a private, single-use container reached only through encrypted TLS. The uploaded ODT and the generated PDF are wiped automatically within sixty minutes, leaving no residue on our systems. Your content is never inspected, retained for any purpose, or shared with third parties — it simply becomes a PDF and disappears.",
  faqs: [
    { q: "What is an ODT file?", a: "ODT (OpenDocument Text) is the default document format used by open-source word processors like LibreOffice and OpenOffice. It is not always compatible with Microsoft Word or standard mobile viewers." },
    { q: "Will the ODT file formatting be preserved in the PDF?", a: "Yes, our conversion engine accurately preserves fonts, spacing, tables, headers, footers, and margins from your ODT file, locking them into a fixed PDF layout." },
    { q: "Do I need LibreOffice installed to convert ODT?", a: "No. Our tool processes the ODT file entirely in the cloud, so you do not need LibreOffice, OpenOffice, or any office suite installed." },
    { q: "Can I convert ODT to PDF on my mobile phone?", a: "Yes, you can upload ODT files directly from your phone's storage and download the resulting PDF in seconds." },
    { q: "Are my documents kept private?", a: "Yes, all documents are uploaded over secure connections and permanently deleted within one hour." },
  ],
  whyUse: [
    "Convert OpenDocument (ODT) files to standard PDFs to ensure they can be opened and read by anyone, on any device.",
    "Maintain original spacing, fonts, and table layouts without using local office software.",
    "Free online converter with no signup requirements and automatic file deletion for safety.",
  ]
};