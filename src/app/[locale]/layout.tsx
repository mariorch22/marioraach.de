import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { ReactNode, Suspense } from 'react';
import ScrollManagerContainer from '@/features/layout/scroll-manager/ScrollManagerContainer';
import FooterContainer from '@/features/layout/footer/FooterContainer';
import NavbarContainer from '@/features/layout/navbar/NavbarContainer';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { inter } from '@/lib/fonts';
import '@/app/globals.css';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<Props, 'children'>) {
  const { locale } = await props.params;

  const feeds = [
    { url: '/api/blog.xml', title: locale === 'de' ? 'Blog (DE)' : 'Blog (EN)' },
    { url: '/api/essays.xml', title: locale === 'de' ? 'Essays (DE)' : 'Essays (EN)' },
    { url: '/api/all.xml', title: locale === 'de' ? 'Alle Beiträge' : 'All posts' },
  ];

  return {
    metadataBase: new URL('https://www.marioraach.de'),
    authors: [{ name: 'Mario Raach', url: 'https://www.marioraach.de' }],
    verification: {
      google: 'swcd7oOwBfyEXvrOzti0442HGJ5OO_Y9k9DVqtaNg9w',
    },
    icons: {
      icon: [
        { url: '/images/icon.ico' },
        { url: '/images/icon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/images/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      shortcut: '/images/icon.ico',
      apple: '/images/icon-32x32.png',
    },
    alternates: {
      types: {
        'application/rss+xml': feeds.map((feed) => ({ url: feed.url, title: feed.title })),
      },
    },
  };
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#000000',
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html className={cn('min-h-full', inter.variable)} lang={locale}>
      <body
        className="flex flex-col font-sans antialiased bg-background text-foreground"
        suppressHydrationWarning
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white/10 focus:text-white focus:px-3 focus:py-2 focus:rounded"
        >
          {locale === 'de' ? 'Zum Inhalt springen' : 'Skip to main content'}
        </a>
        <NextIntlClientProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <ScrollManagerContainer />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <NavbarContainer />
          </Suspense>

          <div id="main">{children}</div>
          <Suspense fallback={<div>Loading...</div>}>
            <FooterContainer />
          </Suspense>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
