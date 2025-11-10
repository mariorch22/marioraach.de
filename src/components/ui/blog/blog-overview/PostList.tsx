import { BlogPost } from '@/types/blog';
import { PostListItem } from './PostListItem';

interface PostListProps {
  posts: BlogPost[];
  locale: string;
  showCategory?: boolean;
}

export function PostList({ posts, locale, showCategory = false }: PostListProps) {
  return (
    <section className="mt-8 divide-y divide-white/5">
      {posts.map((post) => (
        <PostListItem key={post.slug} post={post} locale={locale} showCategory={showCategory} />
      ))}
    </section>
  );
}
