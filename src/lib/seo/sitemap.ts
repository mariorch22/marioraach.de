// lib/seo/sitemap.ts
import { MetadataRoute } from 'next';
import { BlogPost } from '@/types/blog';

const baseUrl = 'https://www.marioraach.de';
const locales = ['de', 'en'] as const;

export const createStaticPageEntry = (
  path: string,
  changeFrequency: 'yearly' | 'monthly' | 'weekly' | 'daily',
  priority: number
): MetadataRoute.Sitemap[0] => ({
  url: path ? `${baseUrl}/${path}` : baseUrl,
  lastModified: new Date(),
  changeFrequency,
  priority,
  alternates: {
    languages: Object.fromEntries(
      locales.map((locale) => [
        locale,
        locale === 'de'
          ? path
            ? `${baseUrl}/${path}`
            : baseUrl
          : path
            ? `${baseUrl}/${locale}/${path}`
            : `${baseUrl}/${locale}`,
      ])
    ),
  },
});

export const createPostEntry = (post: BlogPost): MetadataRoute.Sitemap[0] => {
  const segment = post.category === 'essay' ? 'essays' : 'blog';

  return {
    url: `${baseUrl}/${segment}/${post.slug}`,
    lastModified: new Date(post.publishingDate ?? ''),
    changeFrequency: 'monthly',
    priority: 0.7,
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [
          locale,
          locale === 'de'
            ? `${baseUrl}/${segment}/${post.slug}`
            : `${baseUrl}/${locale}/${segment}/${post.slug}`,
        ])
      ),
    },
  };
};

export const deduplicatePosts = (postsDe: BlogPost[], postsEn: BlogPost[]): BlogPost[] => {
  const uniqueSlugs = new Set([...postsDe.map((p) => p.slug), ...postsEn.map((p) => p.slug)]);
  return Array.from(uniqueSlugs).map(
    (slug) => postsDe.find((p) => p.slug === slug) || postsEn.find((p) => p.slug === slug)!
  );
};
