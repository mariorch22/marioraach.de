import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { fetchPosts, type BlogPost } from '@/lib/contentful/contentful';
import { cn } from '@/lib/utils';


export default async function BlogSection({
  params,
  className,
}: {
  params: Promise<{ locale: string }>;
  className?: string;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  try {
    const allPosts = await fetchPosts(locale);
    const postsData = allPosts.filter((p) => (p.category ?? 'blog') === 'blog').slice(0, 5);

    return (
      <div className={cn('w-full', className)}>
        {/* Intentionally no title/description above the list on homepage toggle */}

        {postsData.length > 0 && (
          <div className="divide-y divide-white/5">
            {postsData.map((post: BlogPost) => {
              const dateStr = post.publishingDate
                ? new Date(post.publishingDate).toLocaleDateString(
                    locale === 'de' ? 'de-DE' : 'en-US',
                    {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      timeZone: 'UTC',
                    },
                  )
                : '';
              const excerptSrc = (post.summary ?? '').replace(/\s+/g, ' ').trim();
              const softTruncate = (text: string, maxLen = 200) => {
                if (text.length <= maxLen) return text;
                const cut = text.slice(0, maxLen);
                const lastSpace = cut.lastIndexOf(' ');
                return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut) + ' …';
              };
              const excerpt = excerptSrc ? softTruncate(excerptSrc) : '';
              return (
                <article key={post.slug} className="py-3">
                  <h3 className="text-base md:text-lg font-semibold">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  {excerpt && <p className="mt-1 text-sm text-white/60">{excerpt}</p>}
                  <div className="mt-0.5 text-[11px] text-white/40 flex items-center gap-1">
                    <span className="tabular-nums">{dateStr}</span>
                    <span>·</span>
                    <span>Blog</span>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('Error in BlogSection:', error);
    return (
      <div className="items-center justify-center w-full max-w-[60rem]">
        <h1 className="text-center text-xl text-red-600">Error loading blog posts</h1>
        <p className="text-center mt-2 text-gray-600">
          {error instanceof Error ? error.message : 'Unknown error'}
        </p>
      </div>
    );
  }
}
