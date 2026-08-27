import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleShell from '../ArticleShell';
import { ALL_ARTICLES, getArticle, isPublished } from '../content';
import { renderBlock } from '../content/render';

// Only data-driven articles resolve here. The nine original posts are static
// routes under app/blog/<slug>/ and take precedence, so they are unaffected.
export const dynamicParams = false;

// Re-evaluated hourly so a scheduled article flips to indexable on its date
// without a rebuild.
export const revalidate = 3600;

// Every slug is prebuilt, including scheduled ones — otherwise a future-dated
// post would 404 until the next deploy. Visibility is controlled by the
// noindex below and by its absence from the index and sitemap.
export function generateStaticParams() {
  return ALL_ARTICLES.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return { title: 'Article Not Found' };

  const url = `https://www.thepdfninja.com/blog/${a.slug}`;
  const live = isPublished(a);
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    alternates: { canonical: url },
    // Scheduled articles exist but stay out of search until their date.
    robots: live ? undefined : { index: false, follow: false },
    openGraph: {
      url,
      title: a.title,
      description: a.excerpt,
      type: 'article',
      publishedTime: a.date,
      images: [{ url: 'https://www.thepdfninja.com/og-image.png', width: 1200, height: 630, alt: a.title }],
    },
    twitter: { card: 'summary_large_image', title: a.title, description: a.excerpt },
  };
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  // FAQ blocks get their own schema so they can win a rich result.
  const faqs = article.blocks.flatMap(b => ('faq' in b ? b.faq : []));

  return (
    <>
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map(f => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '') },
              })),
            }),
          }}
        />
      )}
      <ArticleShell slug={article.slug}>
        {article.blocks.map(renderBlock)}
      </ArticleShell>
    </>
  );
}
