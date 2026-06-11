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
