import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = {
  title: { default: 'ThePDFNinja — Free Online PDF Converter & Editor', template: '%s' },
  description: 'The ultimate free online PDF editor and PDF converter. Merge PDF, compress PDF, split PDF, convert PDF to Word, Excel, JPG, PPT, and more. No signup required.',
  authors: [{ name: 'Anaya Digital', url: 'https://digitalanaya.com' }],
  creator: 'Anaya Digital',
  publisher: 'ThePDFNinja',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thepdfninja.com',
    siteName: 'ThePDFNinja',
    title: 'ThePDFNinja — Free Online PDF Tools',
    description: 'Free online PDF tools: merge, split, compress, and convert PDFs instantly. No signup needed.',
    images: [
      {
        url: 'https://thepdfninja.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ThePDFNinja — 65 Free Online PDF Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThePDFNinja — Free Online PDF Tools',
    description: 'Free online PDF tools. Merge, split, compress, convert PDFs instantly.',
    images: ['https://thepdfninja.com/og-image.png'],
  },
  alternates: { canonical: 'https://thepdfninja.com' },
  other: {
    'google-adsense-account': 'ca-pub-9515530509004476'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Site-wide structured data — Organization, SoftwareApplication, WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'ThePDFNinja',
                url: 'https://thepdfninja.com',
                description: 'Free online PDF tools — merge, split, compress, convert PDF files instantly. No signup required.',
                datePublished: '2025-01-01',
                dateModified: '2026-06-01',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://thepdfninja.com/tools?q={search_term_string}',
                  },
                  'query-input': 'required name=search_term_string',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'ThePDFNinja',
                url: 'https://thepdfninja.com',
                logo: 'https://thepdfninja.com/og-image.png',
                description: 'ThePDFNinja provides 65 free online PDF tools including merge, split, compress, and convert. Built by Anaya Digital.',
                foundingDate: '2025',
                knowsAbout: ['PDF editing', 'PDF conversion', 'document management', 'file compression'],
                sameAs: [
                  'https://twitter.com/thepdfninja',
                  'https://facebook.com/thepdfninja'
                ]
              },
              {
                '@context': 'https://schema.org',
                '@type': 'SoftwareApplication',
                name: 'ThePDFNinja',
                applicationCategory: 'UtilitiesApplication',
                operatingSystem: 'All — Windows, Mac, Linux, iOS, Android',
                description: 'Free online PDF tools: merge, split, compress, convert PDF to Word, Excel, JPG, PowerPoint and more. 65 tools, no signup required.',
                url: 'https://thepdfninja.com',
                datePublished: '2025-01-01',
                dateModified: '2026-06-01',
                softwareVersion: '2.0',
                featureList: [
                  'Merge PDF files',
                  'Split PDF pages',
                  'Compress PDF size by up to 70%',
                  'Convert PDF to Word (DOCX)',
                  'Convert PDF to Excel (XLSX)',
                  'Convert PDF to PowerPoint (PPTX)',
                  'Convert PDF to JPG',
                  'JPG to PDF conversion',
                  'Word to PDF conversion',
                  'OCR text extraction using AI',
                  'Password-protect PDF',
                  'Unlock PDF',
                  'Watermark PDF',
                  'Rotate PDF pages',
                  'Crop PDF margins',
                  'Add page numbers',
                  'Organize and reorder PDF pages',
                  'Repair corrupted PDFs',
                  'Convert to PDF/A archival format',
                  'HTML to PDF',
                  'Scan to PDF',
                ],
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
                screenshot: 'https://thepdfninja.com/og-image.png',
              },
            ]),
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "x2xwszlwif");
            `
          }}
        />
      </head>
      <body>
        {/* Google AdSense (Auto Ads) */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9515530509004476"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J1ZJFNX5HC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-J1ZJFNX5HC');
          `}
        </Script>

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
