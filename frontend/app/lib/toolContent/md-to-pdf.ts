export const mdToPdfContent = {
  introParagraphs: [
    "Markdown (.md) is a lightweight markup language used by developers, researchers, and writers to write documentation, logs, and notes in plain text. However, raw Markdown files look unformatted to non-technical readers. ThePDFNinja's Free Online Markdown to PDF converter renders your Markdown files into beautifully formatted PDF documents, ready for sharing.",
    "Our converter parses headings, lists, tables, links, bold/italic text, and code blocks, applying a clean, professional stylesheet to generate readable PDFs. It is the perfect tool for developers and writers who want to compile documentation drafts into clean reports.",
    "Markdown was designed to be readable as plain text first and rendered second, which is why it has survived while heavier formats have not. Converting it to PDF means interpreting the structure the syntax implies — headings, lists, code blocks, emphasis — and giving each one typography that holds up on a page rather than a screen."
],
  useCases: [
    {
        "title": "Compiling Developer Documentation",
        "description": "Convert project README or API documentation files written in Markdown into formatted PDFs to share with clients or managers easily."
    },
    {
        "title": "Formatting Writing Drafts",
        "description": "Convert articles, blog drafts, or notes written in Markdown editors into clean PDFs to print or share them, preserving styling."
    },
    {
        "title": "Sharing Research Notes",
        "description": "Renders research logs, formulas, and references written in Markdown into structured PDF documents for academic submissions."
    },
    {
        "title": "Creating User Guides and Manuals",
        "description": "Render simple markdown files into styled PDF guides, applying clear headings and code block formatting automatically."
    }
],
  howItWorks: {
    title: "How Markdown is rendered",
    body: [
      "Markdown is converted to HTML first, with support for tables and fenced code blocks, then rendered to PDF by a headless browser engine. Because there is an HTML stage in the middle, the output looks like a well-set web article: a serif body face, comfortable line height, code in a shaded monospace block, and tables with light borders.",
      "That means what you get is a readable document with sensible defaults, not a typesetting system. There is no way to set your own fonts, margins or page size from within the Markdown.",
    ],
    specs: [
      { label: "Pipeline", value: "Markdown → HTML (tables, fenced code) → PDF via headless browser" },
      { label: "Body typeface", value: "Georgia, 800px measure, 1.6 line height" },
      { label: "Code", value: "Shaded monospace blocks, inline code highlighted" },
      { label: "Tables", value: "Rendered with borders and a shaded header row" },
    ],
    limits: [
      "Images referenced by relative path will not load, because the converter only has the Markdown file — not the folder it came from. Use absolute URLs to public images, or accept that images will be missing.",
      "Page breaks fall wherever the paper ends. A heading can land at the bottom of a page with its content on the next.",
      "Extended syntaxes — footnotes, task lists, maths — are not supported and will appear as their raw source.",
      "Styling is fixed. If you need control over typography, generate HTML yourself and use HTML to PDF.",
    ],
  },
  comparison: {
    title: "Why Markdown to PDF with ThePDFNinja?",
    description: "We offer a professional-grade document conversion utility completely free. Here is why we are the top choice:",
    points: [
      "Clean Styling and Layout: Automatically formats headings, code blocks, lists, and tables using a clean, modern stylesheet.",
      "100% Free and Unlimited: Convert as many MD files as you need without encountering daily caps, waiting rooms, or paywalls.",
      "No watermark: the rendered document carries no footer or badge of ours. No footer, no badge and no attribution line is added to the rendered pages.",
      "No Signup Required: Start converting Markdown to PDF instantly in your browser without creating an account."
]
  },
  security: "Markdown files can hold everything from private notes to unpublished documentation. Yours is encrypted the moment you upload it and rendered to PDF inside an isolated worker that is destroyed after the task. The source .md and the output PDF are both deleted within the hour, and nothing is logged, analysed, or passed to any external service.",
  faqs: [
    { q: "How does the Markdown to PDF converter format my document?", a: "Our converter parses your Markdown (.md) file and styles it using a clean, modern layout with distinct headers, blockquotes, code blocks, and formatted lists." },
    { q: "Can I convert files with code snippets?", a: "Yes, code snippets and blockquotes are rendered using syntax-highlighting styles, making this tool perfect for developers and technical documentation." },
    { q: "Are hyperlinks in my Markdown file preserved?", a: "Yes, standard Markdown links (e.g. `[text](url)`) are converted into clickable hyperlinks in the output PDF." },
    { q: "Can I convert Markdown tables?", a: "Yes, standard Markdown tables are fully parsed and rendered into clean, structured tables in the PDF." },
    { q: "Do you store my Markdown or PDF files?", a: "No, all uploaded and converted files are permanently and automatically deleted from our servers after 1 hour." },
  ],
  whyUse: [
    "Turn simple, plain-text Markdown notes and documentation into professional PDF manuals instantly.",
    "Get clean rendering of code blocks, tables, lists, and formatting without using complex layout software.",
    "Free, fast browser converter with zero watermarks and absolute data security.",
  ]
};