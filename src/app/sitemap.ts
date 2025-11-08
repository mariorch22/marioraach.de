// app/sitemap.ts
import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/contentful/api/postApi';
import { createStaticPageEntry, createPostEntry } from '@/lib/seo/sitemap';
import { BlogPost } from '@/types/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [postsDe, postsEn] = await Promise.all([getAllPosts('de'), getAllPosts('en')]);

  const staticUrls: MetadataRoute.Sitemap = [
    createStaticPageEntry('', 'monthly', 1),
    createStaticPageEntry('blog', 'weekly', 0.8),
    createStaticPageEntry('essays', 'weekly', 0.8),
    createStaticPageEntry('imprint', 'yearly', 0.3),
    createStaticPageEntry('dataprotection', 'yearly', 0.3),
  ];

  const allPosts = deduplicatePosts(postsDe, postsEn);
  const postUrls: MetadataRoute.Sitemap = allPosts.map(createPostEntry);

  return [...staticUrls, ...postUrls];
}

function deduplicatePosts(postsDe: BlogPost[], postsEn: BlogPost[]): BlogPost[] {
  const uniqueSlugs = new Set([...postsDe.map((p) => p.slug), ...postsEn.map((p) => p.slug)]);
  return Array.from(uniqueSlugs).map(
    (slug) => postsDe.find((p) => p.slug === slug) || postsEn.find((p) => p.slug === slug)!
  );
}
