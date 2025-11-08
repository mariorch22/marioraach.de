'use client';
import { useLocale } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import LanguageSelectorPresentation from '@/components/ui/language-selector/LanguageSelectorPresentation';

const availableLocales = routing.locales as readonly string[];

const LanguageSelector = () => {
  const currentLocale = useLocale();
  const pathname = usePathname();

  const languageData = availableLocales.map((locale) => ({
    locale,
    label: locale.toUpperCase(),
    isActive: locale === currentLocale,
    href: pathname,
  }));

  return <LanguageSelectorPresentation data={languageData} />;
};

export default LanguageSelector;
