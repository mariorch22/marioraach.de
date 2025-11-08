import { Link } from '@/i18n/navigation';
import { formatDate, softTruncate } from '@/lib/utils/textUtils';
import { BlogPost } from '@/types/blog';

interface PostListItemProps {
  post: BlogPost;
  locale: string;
  basePath: string;
  label: string;
}

export const PostListItem = ({ post, locale, basePath, label }: PostListItemProps) => {
  const dateStr = post.publishingDate ? formatDate(post.publishingDate, locale) : '';
  const excerpt = post.summary ? softTruncate(post.summary, 200) : '';

  return (
    <article key={post.slug} className="py-3">
      <h3 className="text-base md:text-lg font-semibold">
        <Link href={`${basePath}/${post.slug}`}>{post.title}</Link>
      </h3>
      {excerpt && <p className="mt-1 text-sm text-white/60">{excerpt}</p>}
      <div className="mt-0.5 text-[11px] text-white/40 flex items-center gap-1">
        <span className="tabular-nums">{dateStr}</span>
        <span>·</span>
        <span>{label}</span>
      </div>
    </article>
  );
};
