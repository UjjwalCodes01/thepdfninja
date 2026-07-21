import { Metadata } from 'next';
import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export const metadata: Metadata = {
  title: 'How to Compress a PDF to 100KB, 200KB or 500KB for Government Forms | ThePDFNinja',
  description: 'A step-by-step guide to compressing a PDF to an exact KB limit for UPSC, SSC, NEET and bank portals — without making your scanned documents unreadable.',
  alternates: { canonical: 'https://www.thepdfninja.com/blog/compress-pdf-for-government-forms' },
  openGraph: {
    url: 'https://www.thepdfninja.com/blog/compress-pdf-for-government-forms',
    title: 'How to Compress a PDF to a Strict KB Limit for Government Forms',
    description: 'Hit an exact 100KB / 200KB / 500KB upload limit for UPSC, SSC, NEET and bank applications without ruining quality.',
    type: 'article',
    images: [{ url: 'https://www.thepdfninja.com/og-image.png', width: 1200, height: 630, alt: 'Compress PDF for government forms' }],
  },
};

export default function Post() {
  return (
    <ArticleShell slug="compress-pdf-for-government-forms">
      <p>
        If you have ever filled out an online application for a government exam or a bank account in India, you know the frustration: you attach your scanned mark sheet, hit submit, and the portal spits back <strong>&ldquo;File size should not exceed 200KB.&rdquo;</strong> Your scan is 4MB. The clock on the application window is ticking.
      </p>
      <p>
        This guide explains <em>why</em> these limits exist, how PDF compression actually works, and a reliable workflow to hit an exact size target &mdash; 100KB, 200KB, 500KB or 1MB &mdash; while keeping every digit on your document legible.
      </p>

      <h2>Why government portals enforce such tiny limits</h2>
      <p>
        Portals like UPSC, SSC, IBPS, NEET and state recruitment boards receive millions of uploads in a short window. To keep their storage and bandwidth costs predictable, they cap each attachment &mdash; usually somewhere between 50KB and 500KB for documents, and up to 1MB for combined PDFs. The limit is enforced by the server, so there is no way around it: your file genuinely has to be smaller.
      </p>
      <p>
        The catch is that most people produce these files by <strong>scanning at a high DPI or photographing with a phone</strong>, which creates image-heavy PDFs several megabytes in size. The task, then, is to shrink the file by 90% or more without the reviewer being unable to read your name, roll number, or signature.
      </p>

      <h2>What actually makes a PDF large</h2>
      <p>
        Before compressing, it helps to know where the weight sits. In a scanned or photographed document, almost all of the file size comes from <strong>embedded images</strong>, not text. Three factors dominate:
      </p>
      <ul>
        <li><strong>Resolution (DPI):</strong> A page scanned at 600 DPI holds four times as many pixels as the same page at 300 DPI. For on-screen review, 150&ndash;200 DPI is plenty.</li>
        <li><strong>Colour depth:</strong> A full-colour scan of a black-and-white certificate is wasteful. Converting to greyscale can cut size dramatically.</li>
        <li><strong>Image encoding:</strong> Pages stored as lossless PNG-style data are far larger than the same page stored as a tuned JPEG.</li>
      </ul>
      <p>
        Effective compression turns these three dials down just far enough to meet the limit &mdash; and no further, because over-compressing is what produces the blurry, blocky scans that get applications rejected.
      </p>

      <h2>The reliable workflow: compress to an exact target</h2>
      <p>
        Generic &ldquo;compress PDF&rdquo; tools reduce size by a fixed percentage, so you are left guessing whether the output will clear the limit. A better approach is a <strong>target-size compressor</strong> that keeps adjusting quality until the file lands under the number you specify. Here is the workflow we recommend:
      </p>
      <h3>Step 1 — Start from the cleanest possible source</h3>
      <p>
        If you are scanning, choose <strong>200 DPI and greyscale</strong> for text documents (colour only if the document genuinely needs it, like a photo ID). A cleaner source means the compressor has to work less hard, which preserves quality.
      </p>
      <h3>Step 2 — Pick your exact limit</h3>
      <p>
        Read the instruction on the portal carefully &mdash; is the cap 100KB, 200KB, 500KB, or 1MB? Note whether it applies per file or to the combined PDF. Then use a tool built to hit that number. Our{' '}
        <Link href="/tools/compress-to-size">compress-to-size tool</Link> lets you type the target and does the iterating for you; there are also dedicated pages for{' '}
        <Link href="/tools/compress-pdf-to-100kb">100KB</Link>,{' '}
        <Link href="/tools/compress-pdf-to-200kb">200KB</Link>, and{' '}
        <Link href="/tools/compress-pdf-to-500kb">500KB</Link>.
      </p>
      <h3>Step 3 — Verify legibility before you upload</h3>
      <p>
        Open the compressed file at 100% zoom and check the smallest text &mdash; dates, seals, and signatures. If anything is unreadable, your source scan was probably too low-resolution to begin with; rescan at a slightly higher DPI and compress again. It is always better to start high and compress down than to start low and have nothing to work with.
      </p>

      <h2>Tips that save applications</h2>
      <ul>
        <li><strong>Combine, then compress.</strong> If the portal wants a single PDF of several certificates, <Link href="/tools/merge">merge them</Link> first, then compress the combined file to the limit. Compressing each separately and merging afterwards often overshoots.</li>
        <li><strong>Greyscale is your friend.</strong> For text-only documents, converting to greyscale before compressing can halve the size with zero readability loss.</li>
        <li><strong>Do not compress twice.</strong> Re-compressing an already-compressed JPEG stacks artefacts. Always go back to the original scan and compress once to the final target.</li>
        <li><strong>Mind the dimensions, not just the size.</strong> Some portals also cap the page dimensions (e.g. photo must be 3.5&times;4.5cm). Resize first, then compress.</li>
      </ul>

      <h2>Common questions</h2>
      <h3>Will compressing to 100KB ruin my document?</h3>
      <p>
        Not if the source is clean. A single-page greyscale text document at 200 DPI compresses to 100KB comfortably while staying sharp. Problems arise mainly with full-colour, multi-page scans forced under a tiny cap &mdash; in that case, greyscale conversion usually rescues it.
      </p>
      <h3>Is it safe to compress sensitive documents online?</h3>
      <p>
        Only with a tool that is transparent about how it handles your files. ThePDFNinja processes your upload in an isolated environment over an encrypted connection and deletes both the original and the result within one hour &mdash; we never read or retain your documents. If you want to understand what to look for in any online tool, read our guide on{' '}
        <Link href="/blog/is-it-safe-to-upload-pdfs-online">whether it is safe to upload PDFs online</Link>.
      </p>
      <h3>The portal still rejects my file — what now?</h3>
      <p>
        Check two things: the exact byte limit (some portals mean 200<em>KB</em> = 200,000 bytes, others 204,800), and the accepted format. A file that is under the size limit can still be rejected for being the wrong type (e.g. they want JPEG, not PDF). Our{' '}
        <Link href="/tools/pdf-to-jpg">PDF to JPG</Link> tool covers that case.
      </p>

      <p>
        Compressing a document to a strict limit is really about control: start from a clean source, compress once to an exact target, and verify before you submit. Do that, and the &ldquo;file too large&rdquo; error stops being a last-minute emergency.
      </p>
    </ArticleShell>
  );
}
