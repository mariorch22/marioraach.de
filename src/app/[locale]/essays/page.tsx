import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

import { Link } from '@/i18n/navigation';
import { fetchPosts } from '@/lib/contentful';

export const dynamic = 'force-static';

export default async function EssaysIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const posts = (await fetchPosts(locale, 100)).filter((p) => (p.category ?? 'blog') === 'essays');

  return (
    <main className="mx-auto max-w-3xl px-4 pt-28 pb-16">
      <header>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
          Essays (Gedanken)
        </h1>
        <p className="mt-2 text-neutral-400">Gedanken mit Belegen. Meinung, nicht Marketing.</p>
      </header>

      <section className="mt-8 divide-y divide-white/5">
        {posts.map((post) => {
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
              <h2 className="text-lg md:text-xl font-semibold tracking-tight">
                <Link href={`/essays/${post.slug}`} className="hover:underline underline-offset-4">
                  {post.title}
                </Link>
              </h2>
              {excerpt && <p className="mt-1 text-sm text-white/60">{excerpt}</p>}
              <div className="mt-0.5 text-[11px] text-white/40 flex items-center gap-1">
                <span className="tabular-nums">{dateStr}</span>
                <span>·</span>
                <span>Essay</span>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isDe = locale === 'de';
  const title = isDe ? 'Essays (Gedanken)' : 'Essays (Thoughts)';
  return {
    title: `${title} | Mario Raach`,
    alternates: {
      canonical: isDe ? `https://www.marioraach.de/essays` : `https://www.marioraach.de/en/essays`,
      languages: {
        de: `https://www.marioraach.de/essays`,
        en: `https://www.marioraach.de/en/essays`,
      },
    },
  };
}
