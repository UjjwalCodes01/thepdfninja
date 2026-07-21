// Central registry of blog posts — used by the /blog index and the sitemap so
// they never drift apart. Add a post here when you publish its page.

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;        // ISO, for schema + sorting
  dateLabel: string;   // human label shown on cards
  readMinutes: number;
  category: string;
  emoji: string;
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: 'heic-to-jpg-iphone-photos',
    title: "Why Your iPhone Photos Won't Open on Windows (HEIC Explained)",
    excerpt: 'Your iPhone saves photos as HEIC, and Windows, older software and many websites can’t read them. Here’s what the format is and how to convert it cleanly to JPG or PNG.',
    date: '2026-07-20',
    dateLabel: 'July 20, 2026',
    readMinutes: 7,
    category: 'Explainers',
    emoji: '📱',
  },
  {
    slug: 'should-you-convert-images-to-webp',
    title: 'WebP Explained: Should You Convert Your Images to WebP?',
    excerpt: 'WebP files are smaller than JPG and PNG at the same quality — but they aren’t supported everywhere. When WebP is worth it, and when to convert back.',
    date: '2026-07-14',
    dateLabel: 'July 14, 2026',
    readMinutes: 8,
    category: 'Explainers',
    emoji: '🖼️',
  },
  {
    slug: 'how-to-reduce-pdf-file-size',
    title: 'How to Reduce PDF File Size Without Wrecking Quality',
    excerpt: 'Big PDFs bounce off email limits and upload forms. A practical breakdown of what makes a PDF heavy and the right way to slim it down.',
    date: '2026-07-06',
    dateLabel: 'July 6, 2026',
    readMinutes: 8,
    category: 'Guides',
    emoji: '🪶',
  },
  {
    slug: 'how-to-password-protect-a-pdf',
    title: 'How to Password-Protect a PDF (and When You Shouldn’t)',
    excerpt: 'Encryption, permissions, redaction and flattening are different tools for different risks. A clear guide to actually securing a PDF — not just locking it.',
    date: '2026-06-28',
    dateLabel: 'June 28, 2026',
    readMinutes: 9,
    category: 'Security',
    emoji: '🔐',
  },
  {
    slug: 'compress-pdf-for-government-forms',
    title: 'How to Compress a PDF to 100KB, 200KB or 500KB for Government Forms',
    excerpt: 'UPSC, SSC, NEET and bank portals reject oversized uploads. Here is exactly how to hit a strict KB limit without turning your document into a blurry mess.',
    date: '2026-07-18',
    dateLabel: 'July 18, 2026',
    readMinutes: 9,
    category: 'Guides',
    emoji: '📉',
  },
  {
    slug: 'convert-pdf-to-word-without-losing-formatting',
    title: 'How to Convert PDF to Word Without Losing Formatting',
    excerpt: 'Why converted documents come out broken — and a practical, tool-agnostic workflow to keep tables, fonts and columns intact when you edit a PDF in Word.',
    date: '2026-07-10',
    dateLabel: 'July 10, 2026',
    readMinutes: 8,
    category: 'Guides',
    emoji: '📝',
  },
  {
    slug: 'what-is-pdfa-archiving',
    title: 'PDF/A Explained: What It Is and When You Actually Need It',
    excerpt: 'Courts, universities and archives increasingly demand PDF/A. Here is what the format guarantees, how it differs from a normal PDF, and when it is worth converting.',
    date: '2026-07-02',
    dateLabel: 'July 2, 2026',
    readMinutes: 7,
    category: 'Explainers',
    emoji: '🗄️',
  },
  {
    slug: 'best-free-pdf-tools',
    title: 'Best Free Online PDF Tools 2025 — Reviewed & Compared',
    excerpt: 'The 10 best free online PDF tools, tested and ranked. How ThePDFNinja, iLovePDF, Smallpdf, PDF24 and Adobe compare on limits, watermarks and privacy.',
    date: '2026-06-15',
    dateLabel: 'June 15, 2026',
    readMinutes: 12,
    category: 'Reviews',
    emoji: '🏆',
  },
  {
    slug: 'is-it-safe-to-upload-pdfs-online',
    title: 'Is It Safe to Upload PDFs to Online Tools?',
    excerpt: 'What really happens to your file when you use an online PDF tool — the risks, the safeguards that matter, and how to check a service before you trust it.',
    date: '2026-06-08',
    dateLabel: 'June 8, 2026',
    readMinutes: 7,
    category: 'Security',
    emoji: '🔒',
  },
];
