'use client';
import { useLocale } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import Logo from '@/components/ui/logo/Logo';

const LogoContainer = () => {
  const locale = useLocale();
  const pathname = usePathname();

  // Extract the current locale from the pathname or use the locale from useLocale
  const currentLocale = pathname.startsWith('/de')
    ? 'de'
    : pathname.startsWith('/en')
      ? 'en'
      : locale;

  const ariaLabel = currentLocale === 'de' ? 'Zur Startseite' : 'Back to home';
  const altText = currentLocale === 'de' ? 'Startseite' : 'Home';

  return <Logo targetLocale={currentLocale} ariaLabel={ariaLabel} altText={altText} />;
};

export default LogoContainer;
