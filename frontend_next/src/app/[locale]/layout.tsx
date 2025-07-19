import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollRestoration } from "@/components/common/ScrollRestoration";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";
import { Inter } from "next/font/google";
import "@/app/globals.css";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<Props, "children">) {
  const { locale } = await props.params;

  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    metadataBase: new URL("https://www.marioraach.de"),
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: "Mario Raach", url: "https://www.marioraach.de" }],
    icons: {
      icon: [
        { url: "/images/icon.ico" },
        { url: "/images/icon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/images/icon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      shortcut: "/images/icon.ico",
      apple: "/images/icon-32x32.png",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://www.marioraach.de",
      siteName: "Mario Raach",
      type: "website",
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Mario Raach - Data Science & KI Blog",
        },
      ],
      locale: locale === "de" ? "de_DE" : "en_US",
      alternateLocale: locale === "de" ? "en_US" : "de_DE",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/images/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  };
}

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    themeColor: "#000000",
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mario Raach",
    jobTitle: "Data Science & AI Student",
    address: {
      "@type": "PostalAddress",
      addressCountry: "DE",
      addressLocality: "Burladingen",
    },
    email: "marioraach01@gmail.com",
    telephone: "+49 1520 9748732",
    url: "https://www.marioraach.de",
    sameAs: [
      "https://github.com/mariorch22",
      "https://www.linkedin.com/in/mario-r-b88950238",
    ],
    knowsAbout: [
      "Data Science",
      "Machine Learning",
      "Artificial Intelligence",
      "Deep Learning",
      "Python Programming",
      "Economics",
      "Philosophy",
      "Neural Networks",
      "Mechanistic Interpretability",
    ],
    description:
      locale === "de"
        ? "Data Science & KI Student aus Burladingen, Deutschland. Spezialisiert auf Machine Learning, Deep Learning und Mechanistic Interpretability."
        : "Data Science & AI Student from Burladingen, Germany. Specialized in Machine Learning, Deep Learning, and Mechanistic Interpretability.",
  };

  return (
    <html className={cn("min-h-full", inter.variable)} lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="flex flex-col font-sans antialiased bg-background text-foreground">
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
