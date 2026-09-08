export const csvToPdfContent = {
  introParagraphs: [
    "CSV (Comma Separated Values) files are great for exporting databases and tabular data, but they look messy and are hard to read as raw text. ThePDFNinja's Free Online CSV to PDF converter formats raw data columns into structured, readable tables, saving them as professional PDF documents.",
    "Our converter automatically adjusts column widths, margins, and borders, applying a clean layout grid that makes data easy to analyze. It is the perfect tool for sharing spreadsheet exports, customer lists, or transaction logs.",
    "CSV is a text format with no notion of layout: no column widths, no fonts, no page breaks. Converting it to PDF means making those decisions for it. We lay the rows out as a table, size the columns to their content, and paginate. That is what makes the result printable and shareable — and it is also why a very wide spreadsheet is the hardest case, since there is only so much paper."
],
  useCases: [
    {
        "title": "Sharing Database Exports",
        "description": "Convert raw CSV user data, product lists, or inventories into clean, structured tables to share with clients or managers easily."
    },
    {
        "title": "Formatting Transaction Logs",
        "description": "Convert bank statements, system logs, or transaction lists exported as CSVs into readable PDF grids for accounting records."
    },
    {
        "title": "Printing Spreadsheet Data",
        "description": "Printing raw CSV text files is messy. Convert CSV data to PDF grids to print them with clean alignment and readable headers."
    },
    {
        "title": "Filing Financial Reports",
        "description": "Ensure accounting and audit data exported from software as CSV files meets formatting rules by converting it to PDF before filing."
    }
],
  howItWorks: {
    title: "How the conversion is done",
    body: [
      "Your .csv file is opened by LibreOffice running headless on our conversion server, and exported to PDF using its own PDF writer. That matters: LibreOffice is a full office suite, not a format parser, so what it lays out is what a person opening the file in a spreadsheet application would see — pagination, fonts, tables and embedded images included.",
      "Each job gets a fresh, isolated LibreOffice profile and up to five minutes of processing time before it is abandoned. The output embeds the fonts it used, so the PDF renders identically on a machine that does not have them installed.",
      "The CSV is opened as a spreadsheet, so columns are auto-sized to their content and rows paginate. Encoding is read as UTF-8; a file saved in an older regional encoding may show substituted characters in names and currency symbols."
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
    title: "Why CSV to PDF with ThePDFNinja?",
    description: "We offer a professional-grade document conversion utility completely free. Here is why we are the top choice:",
    points: [
      "Columns are sized to their contents rather than divided evenly, so a column of dates does not get the same width as one holding addresses.",
      "Rows that run past the bottom of a page continue onto the next, and the output paginates rather than clipping.",
      "Very wide spreadsheets are the hard case — past roughly a dozen columns there is simply not enough paper, and the result becomes cramped. Split the columns or use landscape.",
      "Read as UTF-8, so names and currency symbols outside plain ASCII survive the conversion.",
]
  },
  security: "Your CSV may hold spreadsheets of personal or financial records, so it is encrypted on upload and converted to PDF in a sandboxed, single-use environment. The original data file and the finished PDF are both wiped within the hour. We never parse your rows for content, retain a copy, or expose the data to any third-party service.",
  faqs: [
    { q: "How does the CSV to PDF converter format the data?", a: "Our converter automatically parses your comma-separated values (CSV) file and builds a clean, readable table layout with alternating row colors to make the data easy to read." },
    { q: "Will my wide CSV tables be cut off?", a: "If your CSV file has many columns, our converter will scale the columns to fit the page or let you choose landscape orientation to accommodate wider datasets." },
    { q: "Can I convert large CSV files with thousands of rows?", a: "Yes, our cloud servers can convert large datasets up to 100MB, rendering them into multi-page PDF documents in just a few seconds." },
    { q: "Do I need Excel or specialized software to use this tool?", a: "No. Our tool parses raw CSV text directly in the cloud, meaning you do not need Microsoft Excel, Google Sheets, or any office suite installed." },
    { q: "Are my data records kept private?", a: "Yes. Your spreadsheet records are processed in isolated AWS cloud containers and are permanently deleted within one hour of upload." },
  ],
  whyUse: [
    "Transform raw, hard-to-read CSV data into professional, beautifully formatted PDF tables instantly.",
    "Generate printable spreadsheets and data reports without opening bulky office applications.",
    "Maintain total security over proprietary financial lists and customer databases with automatic file deletion.",
  ]
};