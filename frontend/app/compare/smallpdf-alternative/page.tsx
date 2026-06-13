import { Metadata } from 'next';
import ComparePage from '../ComparePageTemplate';

export const metadata: Metadata = {
  title: 'Best Free Smallpdf Alternative 2025 — Unlimited, No Account | ThePDFNinja',
  description: 'The best free Smallpdf alternative with no 2-task daily limit. ThePDFNinja gives you 23 PDF tools 100% free — merge, compress, convert, OCR — no account, no watermarks, unlimited.',
  alternates: { canonical: 'https://thepdfninja.com/compare/smallpdf-alternative' },
  openGraph: {
    url: 'https://thepdfninja.com/compare/smallpdf-alternative',
    title: 'Best Free Smallpdf Alternative 2025 — ThePDFNinja',
    description: 'ThePDFNinja vs Smallpdf: unlimited free PDF tools, no account, no watermarks. The best Smallpdf alternative available in 2025.',
    images: [{ url: 'https://thepdfninja.com/og-image.png', width: 1200, height: 630, alt: 'ThePDFNinja — Free Smallpdf Alternative' }],
  },
};

export default function SmallpdfAlternativePage() {
  return (
    <ComparePage
      metadata={metadata}
      competitor="Smallpdf"
      slug="smallpdf-alternative"
      headline="Smallpdf Alternative — No 2-Task Limit"
      hook="Smallpdf restricts free users to just 2 tasks per day and requires an account. ThePDFNinja gives you all 23 PDF tools — unlimited, free, no account needed, no file size restrictions."
      statsBar={[
        { stat: 'Unlimited', label: 'Daily Use' },
        { stat: '0', label: 'Account Required' },
        { stat: '100MB', label: 'Max File Size' },
        { stat: '0', label: 'Watermarks' },
        { stat: '23', label: 'Free Tools' },
        { stat: '$0', label: 'Price Forever' },
      ]}
      compareRows={[
        { feature: 'Price', them: 'Free: 2 tasks/day only. $9/mo for unlimited', us: '100% Free — unlimited forever' },
        { feature: 'Daily task limit', them: 'Only 2 free tasks per day', us: 'Unlimited — no caps ever' },
        { feature: 'Account required', them: 'Yes — required for most tools', us: 'Never — zero signup required' },
        { feature: 'Watermarks on output', them: 'Added on some free-plan outputs', us: 'Never — all tools watermark-free' },
        { feature: 'File size (free)', them: '5MB cap on some tools', us: '100MB — all tools, all users' },
        { feature: 'File auto-deletion', them: '1 hour', us: 'Within 1 hour — guaranteed' },
        { feature: 'OCR / AI tools', them: 'Pro plan only — starts at $9/mo', us: '100% free — AWS Textract AI' },
        { feature: 'PDF to Word', them: 'Limited quality on free plan', us: '100% free — full quality output' },
        { feature: 'Total free tools', them: '21 (many behind paywall)', us: '23 — all completely free' },
      ]}
      whySwitchItems={[
        { title: 'No 2-task daily limit — ever', body: "Smallpdf's free plan is famously restrictive — just 2 tasks per day before you hit a wall. ThePDFNinja has zero daily limits. Process as many PDFs as you need, any day, forever free." },
        { title: '100MB files — not 5MB', body: "Smallpdf caps free users at 5MB for many tools. ThePDFNinja allows files up to 100MB on all tools, for all users, completely free. Large reports and contracts are no problem." },
        { title: 'No email or password needed', body: "Smallpdf requires account creation with email verification. ThePDFNinja works instantly — no forms, no email, no passwords. Just upload and get your result in seconds." },
        { title: 'OCR is free — not a Pro feature', body: "Smallpdf locks AI OCR behind a Pro subscription. ThePDFNinja's OCR tool is completely free, powered by AWS Textract, supporting text extraction from scanned PDFs and images." },
      ]}
      faqs={[
        { q: 'Is ThePDFNinja better than Smallpdf for free users?', a: "Yes. Smallpdf limits free users to just 2 tasks per day, requires an account, and caps file sizes at 5MB for some tools. ThePDFNinja is unlimited, completely free, no account required, and allows 100MB files." },
        { q: "What is Smallpdf's daily free task limit?", a: "Smallpdf's free plan allows only 2 PDF tasks per day. After that, you need to wait 24 hours or upgrade to a paid plan starting at $9/month. ThePDFNinja has no such limit — ever." },
        { q: 'Does ThePDFNinja have OCR like Smallpdf Pro?', a: "Yes. ThePDFNinja's OCR PDF tool uses AWS Textract AI to extract text from scanned documents and images — completely free, no Pro subscription needed." },
        { q: 'Can ThePDFNinja handle large PDFs like Smallpdf Pro?', a: 'ThePDFNinja supports files up to 100MB on all tools for all users — far more generous than Smallpdf\'s 5MB cap on the free plan.' },
      ]}
      ctaHeadline="Done with Smallpdf's 2-task daily limit?"
      tools={[
        { slug: 'compress', label: 'Compress PDF' },
        { slug: 'merge', label: 'Merge PDF' },
        { slug: 'pdf-to-word', label: 'PDF to Word' },
        { slug: 'split', label: 'Split PDF' },
        { slug: 'ocr', label: 'OCR PDF' },
      ]}
      faqSchema={[
        { '@type': 'Question', name: 'Is ThePDFNinja better than Smallpdf for free users?', acceptedAnswer: { '@type': 'Answer', text: "Yes. Smallpdf limits free users to 2 tasks/day, requires an account, and caps files at 5MB. ThePDFNinja is unlimited, free, no account, 100MB files." } },
        { '@type': 'Question', name: "What is Smallpdf's daily free limit?", acceptedAnswer: { '@type': 'Answer', text: "Smallpdf free plan = 2 tasks/day. ThePDFNinja has no daily limit — ever." } },
        { '@type': 'Question', name: 'Does ThePDFNinja add watermarks like Smallpdf?', acceptedAnswer: { '@type': 'Answer', text: 'No. ThePDFNinja never adds watermarks. All 23 tools are completely watermark-free for all users.' } },
      ]}
    />
  );
}
