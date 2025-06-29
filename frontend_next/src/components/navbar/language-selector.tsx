'use client';

import {useCallback} from 'react';
import {useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/i18n/navigation';
import {cn} from '@/lib/utils';

const SUPPORTED_LOCALES = ['de', 'en'] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];

interface LanguageSelectorProps {
  className?: string;
}

export default function LanguageSelector({className}: LanguageSelectorProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = useCallback(
    (lng: Locale) => {
      router.replace(pathname, {locale: lng});
    },
    [router, pathname],
  );

  return (
    <div className={cn('flex gap-2', className)}>
      {SUPPORTED_LOCALES.map(lng => (
        <span
          key={lng}
          onClick={() => switchLocale(lng)}
          className={cn(
            'cursor-pointer font-inter transition-opacity hover:opacity-70',
            locale === lng ? 'font-bold' : 'font-thin',
          )}>
          {lng.toUpperCase()}
        </span>
      ))}
    </div>
  );
}
