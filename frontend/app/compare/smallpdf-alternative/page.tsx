import { Metadata } from 'next';
import ComparePage from '../ComparePageTemplate';

export const metadata: Metadata = {
  title: 'Free Smallpdf Alternative — Unlimited, No Account | ThePDFNinja',
  description: 'Looking for a free Smallpdf alternative? ThePDFNinja gives you 65 PDF tools free — merge, compress, convert, OCR — with no account, no watermarks and no daily quota.',
  alternates: { canonical: 'https://www.thepdfninja.com/compare/smallpdf-alternative' },
  openGraph: {
    url: 'https://www.thepdfninja.com/compare/smallpdf-alternative',
    title: 'Free Smallpdf Alternative — ThePDFNinja',
    description: 'ThePDFNinja as a Smallpdf alternative: unlimited free PDF tools, no account, no watermarks — and an honest note on what we do not offer.',
    images: [{ url: 'https://www.thepdfninja.com/og-image.png', width: 1200, height: 630, alt: 'ThePDFNinja — Free Smallpdf Alternative' }],
  },
};

export default function SmallpdfAlternativePage() {
  return (
    <ComparePage
      metadata={metadata}
      competitor="Smallpdf"
      slug="smallpdf-alternative"
      headline="Smallpdf Alternative — No Daily Limit"
      hook="Smallpdf is a freemium product: the free tier is capped and an account is expected. ThePDFNinja takes the other approach — all 65 tools, no quota, no signup. Below is an honest side by side, including the places Smallpdf is the better pick."
      statsBar={[
        { stat: 'Unlimited', label: 'Daily Use' },
        { stat: '0', label: 'Account Required' },
        { stat: '100MB', label: 'Max File Size' },
        { stat: '0', label: 'Watermarks' },
        { stat: '65', label: 'Free Tools' },
        { stat: '$0', label: 'Price' },
      ]}
      compareRows={[
        { feature: 'Price', them: 'Freemium — paid plan for unrestricted use', us: 'Free, with no paid tier at all' },
        { feature: 'Daily task limit', them: 'Free tier is capped per day', us: 'No daily cap' },
        { feature: 'Account required', them: 'Expected for most tools', us: 'Never — no signup at all' },
        { feature: 'Watermarks on output', them: 'Applied on some free-tier outputs', us: 'Never, on any tool' },
        { feature: 'Max file size (any tier)', them: 'Much larger ceiling on paid plans', us: 'Hard 100MB limit per file' },
        { feature: 'Offline support', them: 'Desktop & Mobile apps available', us: 'No — Web-only (requires internet)' },
        { feature: 'Cloud integrations', them: 'Direct Google Drive & Dropbox sync', us: 'No — Manual upload/download only' },
        { feature: 'File auto-deletion', them: '1 hour', us: 'Within 1 hour — guaranteed' },
        { feature: 'OCR / AI tools', them: 'Reserved for the paid plan', us: 'Free, powered by AWS Textract' },
        { feature: 'PDF to Word', them: 'Best output on the paid plan', us: 'Free, with no reduced-quality tier' },
        { feature: 'Tools available at no cost', them: 'A subset; the rest need a plan', us: 'All 65' },
      ]}
      whySwitchItems={[
        { title: 'No daily limit to run into', body: "The usual friction with a freemium PDF service is hitting the day's quota mid-job. ThePDFNinja has no quota to hit. Process one file or forty, today and again tomorrow, at no cost." },
        { title: 'The same 100MB ceiling for everyone', body: "There is no smaller limit for free users here, because there is no other kind of user. Every tool accepts files up to 100MB. Note the flip side: if you need to process something larger than 100MB, a paid desktop product will serve you better." },
        { title: 'No email or password needed', body: "There is no account step at all — no form, no verification mail, no password to store. You open the page, upload, and download the result. We never learn who you are." },
        { title: 'OCR is not held back for a paid tier', body: "OCR is the feature most often reserved for a subscription. Ours runs on AWS Textract and is open to everybody, for scanned PDFs and for images." },
      ]}
      faqs={[
        { q: 'Is ThePDFNinja a good Smallpdf alternative for free users?', a: "For most everyday jobs, yes: there is no daily quota, no account, and no watermark, and the 100MB ceiling applies to everyone. Smallpdf remains the better choice if you need desktop and mobile apps, direct Google Drive or Dropbox sync, or files well over 100MB." },
        { q: "Does ThePDFNinja have a daily task limit?", a: "No. There is no per-day quota, no cooldown between jobs, and no paid tier that lifts a restriction, because there is no restriction to lift. For current details of Smallpdf's own free tier, check their pricing page — freemium terms change often." },
        { q: 'Does ThePDFNinja include OCR?', a: "Yes. The OCR PDF tool uses AWS Textract to pull text out of scanned documents and images, and it is available to every user at no cost." },
        { q: 'How large a PDF can ThePDFNinja handle?', a: 'Up to 100MB per file, on every tool, for every user. Above that we are not the right tool — a desktop application will handle it better.' },
      ]}
      ctaHeadline="Want PDF tools with no quota attached?"
      tools={[
        { slug: 'compress', label: 'Compress PDF' },
        { slug: 'merge', label: 'Merge PDF' },
        { slug: 'pdf-to-word', label: 'PDF to Word' },
        { slug: 'split', label: 'Split PDF' },
        { slug: 'ocr', label: 'OCR PDF' },
      ]}
      faqSchema={[
        { '@type': 'Question', name: 'Is ThePDFNinja a good Smallpdf alternative for free users?', acceptedAnswer: { '@type': 'Answer', text: "For everyday jobs, yes: no daily quota, no account, no watermark, and a 100MB ceiling for everyone. Smallpdf is the better pick if you need desktop apps, cloud sync, or files over 100MB." } },
        { '@type': 'Question', name: "Does ThePDFNinja have a daily task limit?", acceptedAnswer: { '@type': 'Answer', text: "No. There is no per-day quota and no paid tier that removes one." } },
        { '@type': 'Question', name: 'Does ThePDFNinja add watermarks?', acceptedAnswer: { '@type': 'Answer', text: 'No. All 65 tools produce watermark-free output for every user.' } },
      ]}
    />
  );
}
