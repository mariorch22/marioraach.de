import React from "react";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { cn } from "@/lib/utils";

export default async function InfoSection({
  params,
  className,
}: {
  params: Promise<{ locale: string }>;
  className?: string;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Für Server Components: getTranslations statt useTranslations
  const t = await getTranslations("About");

  return (
    <section
      className={cn("w-full max-w-4xl mx-auto px-6", className)}
      aria-labelledby="about-heading"
    >
      <div className="space-y-6">
        <header>
          <h1
            id="about-heading"
            className="text-2xl sm:text-3xl xl:text-4xl font-bold font-inter text-center sm:text-left
                        bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent
                        leading-tight tracking-tight hover:from-gray-100 hover:to-white
                        transition-all duration-300 cursor-default"
          >
            {t("title")}
          </h1>
        </header>

        <div className="prose prose-lg prose-invert max-w-none">
          <div
            className="whitespace-pre-line text-gray-100 leading-relaxed text-base sm:text-lg font-roboto 
                          space-y-4 [&>span>p]:leading-8 [&>span>p]:text-gray-200
                          [&>span>p]:transition-colors [&>span>p]:duration-200
                          hover:[&>span>p]:text-gray-100"
          >
            {t("text")}
          </div>
        </div>
      </div>
    </section>
  );
}
