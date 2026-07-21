import { Metadata } from 'next';
import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export const metadata: Metadata = {
  title: 'PDF/A Explained: What It Is and When You Actually Need It | ThePDFNinja',
  description: 'A plain-English explanation of the PDF/A archival format — how it differs from a normal PDF, why courts and universities require it, and when converting is worth it.',
  alternates: { canonical: 'https://www.thepdfninja.com/blog/what-is-pdfa-archiving' },
  openGraph: {
    url: 'https://www.thepdfninja.com/blog/what-is-pdfa-archiving',
    title: 'PDF/A Explained: What It Is and When You Actually Need It',
    description: 'What the PDF/A archival format guarantees, how it differs from a normal PDF, and when to convert.',
    type: 'article',
    images: [{ url: 'https://www.thepdfninja.com/og-image.png', width: 1200, height: 630, alt: 'PDF/A archiving explained' }],
  },
};

export default function Post() {
  return (
    <ArticleShell slug="what-is-pdfa-archiving">
      <p>
        Sooner or later a form, a court e-filing system, or a university submission portal asks for your document &ldquo;in PDF/A format.&rdquo; It looks like a normal PDF, opens like a normal PDF &mdash; so what is the difference, and why does anyone insist on it? Here is the plain-English version.
      </p>

      <h2>What PDF/A actually is</h2>
      <p>
        PDF/A is an <strong>ISO-standardised version of PDF designed for long-term archiving</strong> (the &ldquo;A&rdquo; stands for Archive). It is not a different file type &mdash; it is a stricter subset of the regular PDF rules, engineered around a single promise: <strong>the document will look and read exactly the same decades from now as it does today</strong>, on any software, without depending on anything outside the file.
      </p>
      <p>
        That promise is the whole point. A normal PDF can quietly rely on fonts installed on your computer, links to external content, or interactive features that a future viewer may not support. Open such a file in 20 years and the fonts might be substituted or elements might fail to render. PDF/A is built to make that impossible.
      </p>

      <h2>How PDF/A differs from a normal PDF</h2>
      <p>
        The standard achieves its guarantee by <strong>requiring some things and forbidding others</strong>:
      </p>
      <ul>
        <li><strong>All fonts must be embedded.</strong> The file carries its own fonts so it never depends on what the reader has installed. This is the single most important rule.</li>
        <li><strong>Colour must be self-describing.</strong> Colour profiles are embedded so shades render identically across devices.</li>
        <li><strong>No external dependencies.</strong> Links to external files, audio, video, and JavaScript are prohibited &mdash; anything that could break or behave unpredictably later.</li>
        <li><strong>No encryption.</strong> A password-locked file could become unreadable if the password is lost, which defeats archiving.</li>
        <li><strong>Metadata is standardised</strong> so archival systems can catalogue the document reliably.</li>
      </ul>
      <p>
        In short: a PDF/A file is deliberately <em>boring and self-contained</em>. That is exactly what makes it trustworthy for the long haul.
      </p>

      <h2>Who requires PDF/A — and why</h2>
      <p>
        You will most often meet PDF/A in settings where a document must stay authoritative for years or decades:
      </p>
      <ul>
        <li><strong>Courts and legal e-filing.</strong> Many judicial systems mandate PDF/A so filings remain legible and unaltered for the life of a case.</li>
        <li><strong>Universities and research.</strong> Theses, dissertations, and journal submissions are frequently required in PDF/A for permanent library archives.</li>
        <li><strong>Government and public records.</strong> Regulations in many countries require official records to be preserved in an archival format.</li>
        <li><strong>Corporate compliance.</strong> Contracts, financial statements, and audit records that must be retained for a fixed number of years.</li>
      </ul>
      <p>
        If a portal simply says &ldquo;upload a PDF,&rdquo; you almost certainly do not need PDF/A. It is worth the extra step only when a rule, a regulator, or an archive explicitly asks for it.
      </p>

      <h2>A quick note on the sub-versions</h2>
      <p>
        You may see labels like PDF/A-1b, PDF/A-2b, or PDF/A-3. Without going down a rabbit hole: the number is the generation of the standard, and the letter is the conformance level (<strong>&ldquo;b&rdquo; for basic</strong> visual reproduction, <strong>&ldquo;a&rdquo; for accessible</strong>, which also requires a tagged structure for screen readers). For most submissions, PDF/A-1b or PDF/A-2b is what is expected. If a portal specifies a level, match it; if it just says &ldquo;PDF/A,&rdquo; a basic level is normally fine.
      </p>

      <h2>How to convert a PDF to PDF/A</h2>
      <p>
        Converting is straightforward: the tool embeds any missing fonts, bakes in colour profiles, strips out the forbidden elements, and rewrites the metadata to the standard. You can do this in seconds with our{' '}
        <Link href="/tools/pdf-to-pdfa">PDF to PDF/A converter</Link> &mdash; upload your document, download a compliant file.
      </p>
      <p>A couple of things to know before you convert:</p>
      <ul>
        <li><strong>Remove passwords first.</strong> Because PDF/A forbids encryption, unlock any protected file with our <Link href="/tools/unlock">Unlock PDF</Link> tool before converting.</li>
        <li><strong>Scanned documents should be OCR&rsquo;d.</strong> PDF/A will happily archive a scan, but running <Link href="/tools/ocr">OCR</Link> first adds a searchable text layer &mdash; far more useful in an archive than a flat image.</li>
        <li><strong>Check the file still looks right.</strong> Font embedding occasionally shifts spacing slightly. Give the converted file a quick look before you submit it.</li>
      </ul>

      <h2>The bottom line</h2>
      <p>
        PDF/A is not a fancier PDF &mdash; it is a more disciplined one, stripped of anything that could fail over time and packed with everything it needs to stand alone. You do not need it for everyday sharing, but when an institution asks for it, converting is quick and the guarantee is real: the document you send today will read the same when someone opens it long after the software that made it is gone.
      </p>
    </ArticleShell>
  );
}
