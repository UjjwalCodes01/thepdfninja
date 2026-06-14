import { Metadata } from 'next';
import { TOOLS } from '../lib/toolConfig';
import AllToolsPageClient from './ToolsClient';

export const metadata: Metadata = {
  title: 'All 56 Free PDF Tools Online — No Account | ThePDFNinja',
  description: 'Browse all 56 free online PDF tools: merge, split, compress, convert, OCR, protect, and more. All completely free, no account required, no file limits, no watermarks.',
  alternates: { canonical: 'https://thepdfninja.com/tools' },
  openGraph: {
    url: 'https://thepdfninja.com/tools',
    title: 'All 56 Free PDF Tools — ThePDFNinja',
    description: '56 free online PDF tools. No account, no watermarks, no daily limits. Merge, split, compress, convert PDF to Word, Excel, JPG, and more.',
    images: [{ url: 'https://thepdfninja.com/og-image.png', width: 1200, height: 630, alt: 'All 56 Free PDF Tools — ThePDFNinja' }],
  },
};

const allTools = Object.values(TOOLS);

export default function ToolsPage() {
  return (
    <>
      {/* ItemList schema — tells AI systems exactly what tools exist */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'ThePDFNinja — All 56 Free Online PDF Tools',
            description: 'A complete list of all free online PDF tools available at ThePDFNinja.com. All tools are 100% free, require no account, and add no watermarks.',
            url: 'https://thepdfninja.com/tools',
            numberOfItems: allTools.length,
            itemListElement: allTools.map((t, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: `Free ${t.label} Online`,
              description: t.description,
              url: `https://thepdfninja.com/tools/${t.slug}`,
              item: {
                '@type': 'WebApplication',
                name: `Free ${t.label} Online`,
                url: `https://thepdfninja.com/tools/${t.slug}`,
                applicationCategory: 'UtilitiesApplication',
                operatingSystem: 'All',
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
              },
            })),
          }),
        }}
      />
      <AllToolsPageClient />
    </>
  );
}
