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
        <button
          key={lng}
          onClick={() => switchLocale(lng)}
          type="button"
          className={cn(
            'cursor-pointer font-inter transition-all duration-150',
            'hover:opacity-70',
            // Mobile tap highlight fix
            'tap-highlight-transparent',
            'select-none',
            'active:scale-95 active:opacity-60',
            // Focus states
            'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
            // Font weight basierend auf aktiver Sprache
            locale === lng ? 'font-bold' : 'font-thin',
          )}
          style={{
            WebkitTapHighlightColor: 'transparent',
            WebkitUserSelect: 'none',
            userSelect: 'none',
            // Verhindert iOS zoom
            touchAction: 'manipulation'
          }}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}