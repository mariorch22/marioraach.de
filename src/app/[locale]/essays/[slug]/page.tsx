import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';
import { getAllPosts, getPost } from '@/lib/contentful/api/postApi';
import BlogPostContent from '@/features/blog/BlogPostContent';

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
  const post = await getPost(slug, locale);
  return {
    title: `${post.title} | Essays | Mario Raach`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://www.marioraach.de/${locale}/essays/${slug}`,
      type: 'article',
      publishedTime: post.publishingDate ?? '',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: ['/images/og-image.jpg'],
    },
  };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = await getPost(slug, locale);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogPostContent post={post} locale={locale} />
    </Suspense>
  );
}
