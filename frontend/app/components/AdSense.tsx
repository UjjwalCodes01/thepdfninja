import Script from 'next/script';

// AdSense loader.
//
// This used to sit in the root layout, which meant the script also loaded on
// the 404 page and on scheduled articles carrying noindex. Serving ads on a
// page with no content is an explicit AdSense policy violation, and monetising
// pages you have told Google not to index is a poor signal either way.
//
// It is now rendered only by pages that carry real content. not-found.tsx
// deliberately does not render it.
export default function AdSense() {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9515530509004476"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
