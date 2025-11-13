import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import BlogOverviewContainer from '@/features/blog/BlogOverviewContainer';

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

  return <BlogOverviewContainer locale={locale} category="blog" />;
}
