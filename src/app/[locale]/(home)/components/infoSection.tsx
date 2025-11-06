import { getTranslations, setRequestLocale } from 'next-intl/server';
import React from 'react';
import { cn } from '@/lib/utils';


export default async function InfoSection({
  params,
  className,
}: {
  params: Promise<{ locale: string }>;
  className?: string;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('About');

  return (
    <section
      className={cn('w-full max-w-[60rem] mx-auto px-4 sm:px-6', className)}
      aria-labelledby="about-heading"
    >
      <div className="space-y-5 sm:space-y-6">
        <header className="space-y-3">
          <h1
            id="about-heading"
            className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white/95 text-left"
          >
            Blog & Essays zu Machine Learning.
          </h1>
          <p className="mt-3 text-neutral-300">Ein Blog, kein Pitchdeck.</p>
        </header>

        <div className="max-w-[70ch]">
          <div className="whitespace-pre-line text-white/80 sm:text-white/85 leading-7 sm:leading-8 text-base sm:text-lg space-y-4">
            {t('text')}
          </div>
        </div>
      </div>
    </section>
  );
}
