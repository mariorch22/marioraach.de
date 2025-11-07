import { cn } from '@/lib/utils';
import { BlogPost } from '@/types/blog';
import { PostListItem } from './PostListItem';

interface PostListProps {
  posts: BlogPost[];
  locale: string;
  category: 'blog' | 'essays';
  className?: string;
}

const PostList = ({ posts, locale, category, className }: PostListProps) => {
  if (posts.length === 0) {
    return null;
  }

  const basePath = category === 'blog' ? '/blog' : '/essays';
  const label = category === 'blog' ? 'Blog' : 'Essay';

  return (
    <div className={cn('w-full', className)}>
      <div className="divide-y divide-white/5">
        {posts.map((post: BlogPost) => (
          <PostListItem
            key={post.slug}
            post={post}
            locale={locale}
            basePath={basePath}
            label={label}
          />
        ))}
      </div>
    </div>
  );
};

export default PostList;
