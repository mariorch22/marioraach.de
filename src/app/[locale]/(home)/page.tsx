import { setRequestLocale, getTranslations } from 'next-intl/server';
import HomeContentContainer from '@/features/home/HomeContentContainer';
import { Metadata } from 'next';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const { locale } = params;

  const t = await getTranslations({ locale, namespace: 'Home' });

  return {
    title: t('heroTitle'),
    description: t('heroSubline'),
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'Home' });
  const data = {
    heroTitle: t('heroTitle'),
    heroSubline: t('heroSubline'),
    tabs: {
      blog: t('tabs.blog'),
      essays: t('tabs.essays'),
    },
  };

  return <HomeContentContainer data={data} locale={locale} />;
}
