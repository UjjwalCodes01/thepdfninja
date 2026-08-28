import type { Metadata } from 'next';
import { TOOLS } from '../../lib/toolConfig';

// Metadata for each compress-to-size page, built from the size string.

export function buildMetadata(size: string): Metadata {
  const sizeUpper = size.toUpperCase();
  return {
    title: `Compress PDF to ${sizeUpper} Free Online | No Signup | ThePDFNinja`,
    description: `Free online tool to compress PDF to exactly ${sizeUpper}. Best for Indian government forms, UPSC, NEET, and bank applications. No signup, no watermark.`,
    alternates: {
      canonical: `https://www.thepdfninja.com/tools/compress-pdf-to-${size}`
    },
    openGraph: {
      url: `https://www.thepdfninja.com/tools/compress-pdf-to-${size}`,
      title: `Compress PDF to ${sizeUpper} Free Online | No Signup | ThePDFNinja`,
      description: `Free online tool to compress PDF to exactly ${sizeUpper}. Best for Indian government forms, UPSC, NEET, and bank applications. No signup, no watermark.`,
      images: [
        {
          url: `https://www.thepdfninja.com${TOOLS['compress'].ninjaImage}`,
          width: 1200,
          height: 630,
          alt: `Free Compress PDF to ${sizeUpper} Online \u2013 ThePDFNinja`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      images: [`https://www.thepdfninja.com${TOOLS['compress'].ninjaImage}`],
    },
  };
}
