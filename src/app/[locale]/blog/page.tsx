import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getAllPosts } from '@/lib/contentful/api/postApi';
import type { Metadata } from 'next';
import { BlogPost } from '@/types/blog';
import { formatDate, softTruncate } from '@/lib/utils/textUtils';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'BlogOverview' });
  return {
    title: `${t('title')} | Mario Raach`,
    alternates: {
      canonical:
        locale === 'de' ? `https://www.marioraach.de/blog` : `https://www.marioraach.de/en/blog`,
      languages: {
        de: `https://www.marioraach.de/blog`,
        en: `https://www.marioraach.de/en/blog`,
        // 'x-default' could be added if locale detection is introduced
      },
    },
  };
}

export default async function BlogOverview({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'BlogOverview' });
  const posts = (await getAllPosts(locale)).filter(
    (p: BlogPost) => (p.category ?? 'blog') === 'blog'
  );

  return (
    <main className="mx-auto max-w-3xl px-4 pt-28 pb-16">
      <header>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
          {t('title')}
        </h1>
        <p className="mt-2 text-gray-alpha-400">{t('subtitle')}</p>
      </header>

      <section className="mt-8 divide-y divide-white/5">
        {posts.map((post) => {
          const dateStr = post.publishingDate ? formatDate(post.publishingDate, locale) : '';
          const excerptSrc = (post.summary ?? '').replace(/\s+/g, ' ').trim();
          const excerpt = excerptSrc ? softTruncate(excerptSrc, 200) : '';
          return (
            <article key={post.slug} className="py-3">
              <h2 className="text-lg md:text-xl font-semibold tracking-tight">
                <Link href={`/blog/${post.slug}`} className="hover:underline underline-offset-4">
                  {post.title}
                </Link>
              </h2>
              {excerpt && <p className="mt-1 text-sm text-white/60">{excerpt}</p>}
              <div className="mt-0.5 text-[11px] text-white/40 flex items-center gap-1">
                <span className="tabular-nums">{dateStr}</span>
                <span>·</span>
                <span>{t('labels.blog')}</span>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
