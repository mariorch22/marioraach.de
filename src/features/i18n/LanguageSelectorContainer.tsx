'use client';
import { useLocale } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import LanguageSelector from '@/components/ui/language-selector/LanguageSelector';

const availableLocales = routing.locales as readonly string[];

const LanguageSelectorContainer = () => {
  const currentLocale = useLocale();
  const pathname = usePathname();

  const languageData = availableLocales.map((locale) => ({
    locale,
    label: locale.toUpperCase(),
    isActive: locale === currentLocale,
    href: pathname,
  }));

  return <LanguageSelector data={languageData} />;
};

export default LanguageSelectorContainer;
