import { fetchContentful } from '../contentfulClient';
import { allPostsQuery } from '@/lib/contentful/queries/allPosts';
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