import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getPost, getAllPosts } from '@/lib/contentful/api/postApi';
import BlogPostContentContainer from '@/features/blog/BlogPostContentContainer';
import { Suspense } from 'react';

export async function generateStaticParams() {
  const locales = ['de', 'en'];
  const params = [];

  for (const locale of locales) {
    const posts = await getAllPosts(locale);
    for (const post of posts) {
      params.push({ locale, slug: post.slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  try {
    const post = await getPost(slug, locale);

    return {
      title: `${post.title} | Mario Raach`,
      description: post.summary,
      keywords: `${post.title}, Mario Raach, Data Science, Machine Learning, AI, Blog`,
      authors: [{ name: 'Mario Raach', url: 'https://www.marioraach.de' }],
      openGraph: {
        title: post.title,
        description: post.summary,
        url: `https://www.marioraach.de/${locale}/blog/${post.slug}`,
        type: 'article',
        publishedTime: post.publishingDate ?? '',
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.summary,
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
  } catch {
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

  const post = await getPost(slug, locale);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BlogPostContentContainer post={post} locale={locale} />
      </Suspense>
    </>
  );
}
