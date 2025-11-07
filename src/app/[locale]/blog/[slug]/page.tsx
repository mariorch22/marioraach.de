import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import DividerPresentation from '@/components/ui/divider/DividerPresentation';
import { contentfulEnv } from '@/lib/env';
import BlogContentContainer from '@/features/blog/BlogContentContainer';
import BlogHeaderContainer from '@/features/blog/BlogHeaderContainer';
import { blogQuery } from '@/lib/contentful/queries/blog';

async function getBlogPost(slug: string, locale: string) {
  const { spaceId, accessToken } = contentfulEnv;

  const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ query: blogQuery(slug, locale) }),
  });

  if (!response.ok) {
    throw new Error(`Contentful API error: ${response.status} ${response.statusText}`);
  }

  const posts = await response.json();

  if (posts.errors) {
    console.error('GraphQL errors:', posts.errors);
    throw new Error('GraphQL query failed');
  }

  return posts.data.blogCollection.items[0];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  try {
    const blogPost = await getBlogPost(slug, locale);

    if (!blogPost) {
      return {
        title: 'Blog Post Not Found',
        description: 'The requested blog post could not be found.',
      };
    }

    const publishedDate = new Date(blogPost.publishingDate).toISOString();

    return {
      title: `${blogPost.title} | Mario Raach`,
      description: blogPost.summary,
      keywords: `${blogPost.title}, Mario Raach, Data Science, Machine Learning, AI, Blog`,
      authors: [{ name: 'Mario Raach', url: 'https://www.marioraach.de' }],
      openGraph: {
        title: blogPost.title,
        description: blogPost.summary,
        url: `https://www.marioraach.de/${locale}/blog/${slug}`,
        type: 'article',
        publishedTime: publishedDate,
        authors: ['Mario Raach'],
        images: [
          {
            url: '/images/og-image.jpg',
            width: 1200,
            height: 630,
            alt: blogPost.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: blogPost.title,
        description: blogPost.summary,
        images: ['/images/og-image.jpg'],
      },
      alternates: {
        canonical: `https://www.marioraach.de/${locale}/blog/${slug}`,
        languages: {
          de: `https://www.marioraach.de/de/blog/${slug}`,
          en: `https://www.marioraach.de/en/blog/${slug}`,
        },
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Mario Raach - Blog',
      description: 'Data Science & AI Blog',
    };
  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const postsData = await getBlogPost(slug, locale);

  if (!postsData) {
    return (
      <main className="overflow-hidden flex flex-col justify-center items-center gap-12 font-inter text-normal mt-40 px-4">
        <DividerPresentation />
        <p className="text-red-500">Blog post not found</p>
      </main>
    );
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: postsData.title,
    description: postsData.summary,
    author: {
      '@type': 'Person',
      name: 'Mario Raach',
      url: 'https://www.marioraach.de',
    },
    publisher: {
      '@type': 'Person',
      name: 'Mario Raach',
      url: 'https://www.marioraach.de',
    },
    datePublished: postsData.publishingDate,
    dateModified: postsData.publishingDate,
    url: `https://www.marioraach.de/${locale}/blog/${slug}`,
    image: 'https://www.marioraach.de/images/og-image.jpg',
    articleSection: postsData.category === 'essays' ? 'Essay' : 'Technology',
    keywords: ['Data Science', 'Machine Learning', 'AI', 'Technology'],
    inLanguage: locale === 'de' ? 'de-DE' : 'en-US',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main className="overflow-hidden flex flex-col justify-center items-center gap-12 font-inter text-normal mt-40 px-4">
        <BlogHeaderContainer
          title={postsData.title}
          summary={postsData.summary}
          publishingDate={postsData.publishingDate}
          locale={locale}
        />
        <DividerPresentation />
        <BlogContentContainer blog={postsData} />
      </main>
    </>
  );
}
