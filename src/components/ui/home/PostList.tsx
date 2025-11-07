// components/ui/blog/PostList.tsx
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { formatDate, softTruncate } from '@/lib/utils/textUtils';
import { BlogPost } from '@/types/blog';


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
        {posts.map((post) => {
          const dateStr = post.publishingDate ? formatDate(post.publishingDate, locale) : '';
          const excerpt = post.summary ? softTruncate(post.summary, 200) : '';

          return (
            <article key={post.slug} className="py-3">
              <h3 className="text-base md:text-lg font-semibold">
                <Link href={`${basePath}/${post.slug}`}>{post.title}</Link>
              </h3>
              {excerpt && (
                <p className="mt-1 text-sm text-white/60">{excerpt}</p>
              )}
              <div className="mt-0.5 text-[11px] text-white/40 flex items-center gap-1">
                <span className="tabular-nums">{dateStr}</span>
                <span>·</span>
                <span>{label}</span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;