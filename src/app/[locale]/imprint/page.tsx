import { getTranslations, setRequestLocale } from 'next-intl/server';
import React from 'react';

import type { Metadata } from 'next';

interface SectionProps {
  title: string;
  content: string | React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, content, className }) => (
  <div className={`mb-6 ${className || ''}`}>
    <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">{title}</h3>
    <div className="text-sm sm:text-base text-white leading-relaxed">{content}</div>
  </div>
);

const STYLES = {
  // Main container mit besseren Mobile-Paddings
  container: 'min-h-screen mt-20',
  // Content wrapper mit responsive Paddings und max-width
  contentWrapper: 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl',
  // Inner content mit top padding für Navigation
  content: 'pt-20 pb-12',
  // Title Styles - responsive Größen
  title: 'text-2xl sm:text-3xl lg:text-4xl font-bold mb-2',
  // Subtitle
  subtitle: 'text-sm sm:text-base text-white mb-8',
  // Sections container
  sections: 'mt-8 space-y-6',
  // Section title
  sectionTitle: 'text-xl sm:text-2xl font-semibold mb-4 text-white',
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Imprint' });
  return {
    title: t('title'),
  };
}

export default async function Imprint({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Imprint' });

  const sections: Array<{ title: string; content: string }> = t.raw('disclaimer.sections');

  return (
    <main className={STYLES.container}>
      <div className={STYLES.contentWrapper}>
        <div className={STYLES.content}>
          <header className="mb-8">
            <h1 className={STYLES.title}>{t('title')}</h1>
            <p className={STYLES.subtitle}>{t('legalReference')}</p>
          </header>

          <div className="rounded-lg p-4 sm:p-6 mb-8 space-y-4">
            <div className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
              <h4 className="text-sm font-semibold text-white mb-1">{t('operator.title')}</h4>
              <p className="text-base sm:text-lg text-white">{t('operator.name')}</p>
            </div>

            <div className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
              <h4 className="text-sm font-semibold text-white mb-1">{t('address.title')}</h4>
              <p className="text-base sm:text-lg text-white">
                {t('address.street')}
                <br />
                {t('address.city')}
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
              <h4 className="text-sm font-semibold text-white mb-1">{t('contact.title')}</h4>
              <p className="text-base sm:text-lg text-white">
                <a
                  href={`mailto:${t('contact.email')}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors break-all"
                >
                  {t('contact.email')}
                </a>
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-1">{t('responsible.title')}</h4>
              <p className="text-base sm:text-lg text-white">
                {t('responsible.name')}
                <br />
                {t('responsible.street')}
                <br />
                {t('responsible.city')}
              </p>
            </div>
          </div>

          <section className={STYLES.sections}>
            <h2 className={STYLES.sectionTitle}>{t('disclaimer.title')}</h2>

            <div className="space-y-6">
              {sections.map((section, index) => (
                <Section
                  key={index}
                  title={section.title}
                  content={section.content}
                  className="border-l-4 border-gray-200 pl-4 hover:border-gray-400 transition-colors"
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
