import { MetadataRoute } from 'next';
import { TOOLS } from './lib/toolConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thepdfninja.com';

  // Core static pages
  const staticPages = ['', '/about', '/privacy', '/terms', '/tools'].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Tool pages
  const toolPages = Object.keys(TOOLS).map(toolSlug => ({
    url: `${baseUrl}/tools/${toolSlug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Calculator pages
  const sizes = ['100kb', '200kb', '500kb', '1mb', '2mb'];
  const calcPages = sizes.map(size => ({
    url: `${baseUrl}/tools/compress-pdf-to-${size}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Navigational alternatives & compare pages
  const altPages = [
    { url: `${baseUrl}/compare/ilovepdf-alternative`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/compare/smallpdf-alternative`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/compare/pdf24-alternative`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/press`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog/best-free-pdf-tools`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${baseUrl}/blog/is-it-safe-to-upload-pdfs-online`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },
  ];

  return [...staticPages, ...toolPages, ...calcPages, ...altPages];
}
