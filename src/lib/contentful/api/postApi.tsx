import { fetchContentful } from '../contentfulClient';
import { singlePostQuery, allPostsQuery } from '@/lib/contentful/queries/post';
import { BlogPost } from '@/types/blog';

interface BlogCollectionResponse {
  blogCollection: {
    items: BlogPost[];
  };
}

export async function getAllPosts(locale: string): Promise<BlogPost[]> {
  const query = allPostsQuery(locale);
  const data = await fetchContentful<BlogCollectionResponse>(query);
  return data.blogCollection.items;
}

export async function getPost(slug: string, locale: string): Promise<BlogPost> {
  const query = singlePostQuery(slug, locale);
  const data = await fetchContentful<BlogCollectionResponse>(query);
  if (!data.blogCollection.items[0]) {
    throw new Error('Post not found');
  }
  return data.blogCollection.items[0];
}
