import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Claude-Web', 'anthropic-ai', 'OAI-SearchBot', 'CCBot', 'Google-Extended'],
        allow: '/',
      }
    ],
    sitemap: 'https://www.thepdfninja.com/sitemap.xml',
  };
}
