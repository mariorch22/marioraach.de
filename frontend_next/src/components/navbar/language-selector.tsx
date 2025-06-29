'use client';
import {useCallback, useState} from 'react';
import {useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/i18n/navigation';
import {cn} from '@/lib/utils';
import React from 'react';

const SUPPORTED_LOCALES = ['de', 'en'] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];

interface LanguageSelectorProps {
  className?: string;
}

export default function LanguageSelector({className}: LanguageSelectorProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isChanging, setIsChanging] = useState(false);

  const switchLocale = useCallback(
    async (lng: Locale) => {
      if (lng === locale || isChanging) return; // Verhindert doppelte Klicks
      
      try {
        setIsChanging(true);
        await router.replace(pathname, {locale: lng});
      } catch (error) {
        console.error('Error switching locale:', error);
      } finally {
        setIsChanging(false);
      }
    },
    [router, pathname, locale, isChanging],
  );

  return (
    <div className={cn('flex items-center gap-1', className)}>
      {SUPPORTED_LOCALES.map((lng, index) => (
        <React.Fragment key={lng}>
          <button
            onClick={() => switchLocale(lng)}
            type="button"
            disabled={isChanging}
            className={cn(
              // Base styles
              'relative px-2 py-1 min-w-[40px] min-h-[40px]', // Mindestgröße für Touch
              'font-inter transition-all duration-150',
              'rounded-md', // Leichte Rundung
              
              // States
              'hover:bg-gray-100 dark:hover:bg-gray-800',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              
              // Active state für Mobile
              'active:scale-95',
              
              // Focus states
              'focus:outline-none',
              'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500',
              
              // Font weight und Farbe
              locale === lng 
                ? 'font-semibold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800' 
                : 'font-normal text-gray-600 dark:text-gray-400',
              
              // Remove tap highlight
              'tap-highlight-color-transparent',
            )}
            style={{
              WebkitTapHighlightColor: 'transparent',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
              userSelect: 'none',
              touchAction: 'manipulation',
            }}
            aria-label={`Switch to ${lng === 'de' ? 'German' : 'English'}`}
            aria-current={locale === lng ? 'true' : 'false'}
          >
            {lng.toUpperCase()}
          </button>
          
          {/* Separator */}
          {index < SUPPORTED_LOCALES.length - 1 && (
            <span className="text-gray-300 dark:text-gray-600 select-none" aria-hidden="true">
              /
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// Alternative minimalistische Version
export function LanguageSelectorMinimal({className}: LanguageSelectorProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = useCallback(() => {
    const newLocale = locale === 'de' ? 'en' : 'de';
    router.replace(pathname, {locale: newLocale});
  }, [router, pathname, locale]);

  return (
    <button
      onClick={toggleLocale}
      type="button"
      className={cn(
        'px-3 py-2 min-h-[44px]', // Apple's recommended touch target
        'font-inter font-medium',
        'bg-gray-100 hover:bg-gray-200',
        'dark:bg-gray-800 dark:hover:bg-gray-700',
        'rounded-lg transition-colors',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        className
      )}
      style={{
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation',
      }}
      aria-label={`Current language: ${locale.toUpperCase()}. Click to switch.`}
    >
      {locale.toUpperCase()}
    </button>
  );
}

// Debug Version zum Testen
export function LanguageSelectorDebug({className}: LanguageSelectorProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [lastTap, setLastTap] = useState<string>('');

  const switchLocale = useCallback((lng: Locale) => {
    setLastTap(`Tapped: ${lng} at ${new Date().toLocaleTimeString()}`);
    if (lng !== locale) {
      router.replace(pathname, {locale: lng});
    }
  }, [router, pathname, locale]);

  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex gap-2">
        {SUPPORTED_LOCALES.map(lng => (
          <button
            key={lng}
            onClick={() => switchLocale(lng)}
            onTouchEnd={(e) => {
              e.preventDefault();
              switchLocale(lng);
            }}
            type="button"
            className={cn(
              'px-4 py-2 min-w-[60px] min-h-[44px]',
              'border-2 rounded-lg',
              'transition-all duration-150',
              locale === lng 
                ? 'border-blue-500 bg-blue-50 font-bold' 
                : 'border-gray-300 hover:border-gray-400',
            )}
            style={{
              WebkitTapHighlightColor: 'rgba(0,0,0,0)',
              touchAction: 'manipulation',
            }}
          >
            {lng.toUpperCase()}
          </button>
        ))}
      </div>
      {lastTap && (
        <p className="text-xs text-gray-500">{lastTap}</p>
      )}
    </div>
  );
}