import { MetadataRoute } from 'next';
import { TOOLS } from './lib/toolConfig';
import { isToolIndexed } from './lib/seoIndex';
import { BLOG_POSTS } from './blog/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.thepdfninja.com';

  // Core static pages
  const staticPages = ['', '/about', '/contact', '/blog', '/reviews', '/privacy', '/terms', '/tools'].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Tool pages — only indexed flagship tools belong in the sitemap.
  // Noindexed (thin/near-duplicate) tools stay usable but out of search.
  const toolPages = Object.keys(TOOLS)
    .filter(isToolIndexed)
    .map(toolSlug => ({
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

  // Blog posts — sourced from the registry so new posts appear automatically
  const blogPages = BLOG_POSTS.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // Navigational alternatives & compare pages
  const altPages = [
    { url: `${baseUrl}/compare/ilovepdf-alternative`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/compare/smallpdf-alternative`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/compare/pdf24-alternative`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/press`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
  ];

  return [...staticPages, ...toolPages, ...calcPages, ...blogPages, ...altPages];
}
