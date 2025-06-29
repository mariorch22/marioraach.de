import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/navbar/navbar";
import { ScrollRestoration } from "@/components/ScrollRestoration";
import Footer from "@/components/footer/footer";
import { cn } from "@/lib/utils";
import "../globals.css";
import { getTranslations } from "next-intl/server";
import { Inter } from "next/font/google";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<Props, 'children'>) {
  const {locale} = await props.params;

  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    metadataBase: new URL('https://www.marioraach.de'),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{name: 'Mario Raach', url: 'https://www.marioraach.de'}],
    icons: {
      icon: [
        { url: '/images/icon.ico' },
        { url: '/images/icon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/images/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      shortcut: '/images/icon.ico',
      apple: '/images/icon-32x32.png',
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://www.marioraach.de',
      siteName: 'Mario Raach',
      type: 'website',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Mario Raach - Data Science & KI Blog',
        }
      ],
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      alternateLocale: locale === 'de' ? 'en_US' : 'de_DE',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/images/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      maxImagePreview: 'large',
      maxSnippet: -1,
      maxVideoPreview: -1,
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
    <html className="min-h-full" lang={locale}>
      <body className={cn("flex flex-col font-inter", inter.className)}>
        <NextIntlClientProvider>
          <ScrollRestoration />
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
