import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import BlogContentContainer from '@/features/blog/BlogContentContainer';
import BlogHeaderContainer from '@/features/blog/BlogHeaderContainer';
import { query as blogQuery } from '@/app/[locale]/blog/[slug]/components/graphql_query'; // reuse blog query but we only need the slug here via essays route
import DividerPresentation from '@/components/ui/divider/DividerPresentation';
import { contentfulEnv } from '@/lib/env';


async function getPost(slug: string, locale: string) {
  const { spaceId, accessToken } = contentfulEnv;
  const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ query: blogQuery(slug, locale) }),
  });
  if (!response.ok) throw new Error('Contentful API error');
  const json = await response.json();
  return json.data.blogCollection.items[0];
}


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getPost(slug, locale);
  if (!post) return { title: 'Essay nicht gefunden' };
  return {
    title: `${post.title} | Essays | Mario Raach`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://www.marioraach.de/${locale}/essays/${slug}`,
      type: 'article',
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
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
  if (!post) {
    return (
      <main className="overflow-hidden flex flex-col justify-center items-center gap-12 mt-40 px-4">
        <DividerPresentation />
        <p className="text-red-500">Essay not found</p>
      </main>
    );
  }

  return (
    <main className="overflow-hidden flex flex-col justify-center items-center gap-12 mt-40 px-4">
      <BlogHeaderContainer
        title={post.title}
        summary={post.summary}
        publishingDate={post.publishingDate}
        locale={locale}
      />
      <DividerPresentation />
      <BlogContentContainer blog={post} />
    </main>
  );
}
