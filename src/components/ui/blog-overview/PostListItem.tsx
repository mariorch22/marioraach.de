import { Link } from '@/i18n/navigation';
import { BlogPost } from '@/types/blog';
import { formatDate, softTruncate } from '@/lib/utils/textUtils';
import PostMeta from './PostMeta';

interface PostListItemProps {
  post: BlogPost & { displayCategory?: string };
  locale: string;
  showCategory?: boolean;
}

const PostListItem = ({ post, locale, showCategory = false }: PostListItemProps) => {
  const dateStr = post.publishingDate ? formatDate(post.publishingDate, locale) : '';

  const excerptSrc = (post.summary ?? '').replace(/\s+/g, ' ').trim();
  const excerpt = excerptSrc ? softTruncate(excerptSrc, 200) : '';

  const href = post.displayCategory === 'Essay' ? `/essays/${post.slug}` : `/notes/${post.slug}`;

  return (
    <article className="py-3">
      <h2 className="text-lg md:text-xl font-semibold tracking-tight">
        <Link href={href} className="hover:underline underline-offset-4">
          {post.title}
        </Link>
      </h2>

      {excerpt && <p className="mt-1 text-sm text-white/60">{excerpt}</p>}

      <PostMeta date={dateStr} category={showCategory ? (post.displayCategory ?? '') : ''} />
    </article>
  );
};

export default PostListItem;
