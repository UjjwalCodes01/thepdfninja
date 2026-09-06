import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // /_next/ must stay crawlable. Every page loads its CSS, JS and fonts
        // from /_next/static/, and Google renders pages before judging them —
        // blocking it means Googlebot and the AdSense reviewer's render both
        // see an unstyled page. Only the API is off limits.
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Claude-Web', 'anthropic-ai', 'OAI-SearchBot', 'CCBot', 'Google-Extended'],
        allow: '/',
      }
    ],
    sitemap: 'https://www.thepdfninja.com/sitemap.xml',
  };
}
