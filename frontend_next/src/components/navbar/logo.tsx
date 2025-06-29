"use client"
import { Link, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';


export const Logo = () => {
    const locale = useLocale();
    const pathname = usePathname();
    
    // Extract the current locale from the pathname or use the locale from useLocale
    const currentLocale = pathname.startsWith('/de') ? 'de' : 
                         pathname.startsWith('/en') ? 'en' : 
                         locale;
    
    return (
      <Link href={'/'} locale={currentLocale}>
        <img
          src="/images/logo_r.png"
          alt="Logo"
          className="invert z-40 mix-blend-difference"
          width={40}
          height={40}
        />
      </Link>
    );
  };