import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import BlogOverviewContainer from '@/features/blog/BlogOverviewContainer';

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

export default async function EssaysIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <BlogOverviewContainer locale={locale} category="essay" />;
}
