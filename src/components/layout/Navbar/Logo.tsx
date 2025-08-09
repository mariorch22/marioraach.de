'use client';
import Image from 'next/image';
import { useLocale } from 'next-intl';

import { Link, usePathname } from '@/i18n/navigation';

const Logo = () => {
  const locale = useLocale();
  const pathname = usePathname();

  // Extract the current locale from the pathname or use the locale from useLocale
  const currentLocale = pathname.startsWith('/de')
    ? 'de'
    : pathname.startsWith('/en')
      ? 'en'
      : locale;

  return (
    <Link href={'/'} locale={currentLocale} aria-label={currentLocale === 'de' ? 'Zur Startseite' : 'Back to home'}>
      <Image
        src="/images/logo_r.png"
        alt={currentLocale === 'de' ? 'Startseite' : 'Home'}
        className="invert z-40 mix-blend-difference"
        width={40}
        height={40}
      />
    </Link>
  );
};

export default Logo;
