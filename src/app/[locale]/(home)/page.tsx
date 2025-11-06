import Head from 'next/head';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import BlogSection from './components/blogSection';
import EssaySection from './components/essaySection';
import SideBySideToggle from './components/SideBySideToggle';


export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'Home' });

  return (
    <>
      <Head>
        <title>{t('heroTitle')}</title>
        <meta name="description" content={t('heroSubline')} />
      </Head>

      <main className="mx-auto max-w-3xl px-4 pt-20 pb-8 mt-20">
        <section className="mx-auto max-w-3xl px-0 pt-4 pb-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            {t('heroTitle')}
          </h1>
          <p className="mt-3 text-neutral-300 whitespace-pre-line">{t('heroSubline')}</p>

          <SideBySideToggle leftLabel={t('tabs.blog')} rightLabel={t('tabs.essays')}>
            <BlogSection params={Promise.resolve({ locale })} />
            <EssaySection params={Promise.resolve({ locale })} />
          </SideBySideToggle>
        </section>
      </main>
    </>
  );
}
