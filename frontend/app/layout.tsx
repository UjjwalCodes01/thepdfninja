import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = {
  title: { default: 'ThePDFNinja — Free Online PDF Converter & Editor', template: '%s | ThePDFNinja' },
  description: 'The ultimate free online PDF editor and PDF converter. Merge PDF, compress PDF, split PDF, convert PDF to Word, Excel, JPG, PPT, and more. No signup required.',
  keywords: [
    'pdf to word', 'merge pdf', 'merger pdf', 'compress pdf', 'pdf to jpg', 
    'jpg to pdf', 'word to pdf', 'pdf to excel', 'excel to pdf', 'pdf converter', 
    'split pdf', 'pdf editor', 'pdf to ppt', 'ppt to pdf', 'png to pdf', 
    'ocr pdf', 'pdf to text', 'rotate pdf', 'unlock pdf', 'protect pdf', 
    'password protect pdf', 'pdf to pdf/a', 'free pdf tools'
  ],
  authors: [{ name: 'ThePDFNinja' }],
  creator: 'ThePDFNinja',
  publisher: 'ThePDFNinja',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thepdfninja.com',
    siteName: 'ThePDFNinja',
    title: 'ThePDFNinja — Free Online PDF Tools',
    description: 'Free online PDF tools: merge, split, compress, and convert PDFs instantly. No signup needed.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThePDFNinja — Free Online PDF Tools',
    description: 'Free online PDF tools. Merge, split, compress, convert PDFs instantly.',
  },
  alternates: { canonical: 'https://thepdfninja.com' },
  verification: { google: 'your-google-verification-code' },
  other: {
    'google-adsense-account': 'ca-pub-9515530509004476'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://thepdfninja.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'ThePDFNinja',
              url: 'https://thepdfninja.com',
              description: 'Free online PDF tools — merge, split, compress, convert PDF files instantly.',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://thepdfninja.com/tools?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body>
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
