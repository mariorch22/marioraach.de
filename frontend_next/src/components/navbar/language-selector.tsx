'use client';
import {useCallback, useState, useRef, useEffect} from 'react';
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
  const [isChanging, setIsChanging] = useState(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  const switchLocale = useCallback(
    async (lng: Locale) => {
      if (lng === locale || isChanging) return;
      
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

  const handleKeyDown = useCallback((event: React.KeyboardEvent, lng: Locale) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      switchLocale(lng);
    }
  }, [switchLocale]);

  return (
    <div 
      ref={selectorRef}
      className={cn('inline-flex items-center pr-0', className)}
      role="group"
      aria-label="Language selection"
    >
      <fieldset className="border-0 p-0 m-0">
        <legend className="sr-only">Choose your language</legend>
        <div className="flex items-center rounded-lg p-1">
          {SUPPORTED_LOCALES.map((lng) => {
            const isActive = locale === lng;
            const label = lng === 'de' ? 'Deutsch' : 'English';
            
            return (
              <label key={lng} className="relative cursor-pointer">
                <input
                  type="radio"
                  name="language"
                  value={lng}
                  checked={isActive}
                  onChange={() => switchLocale(lng)}
                  disabled={isChanging}
                  className="sr-only"
                  aria-describedby={`lang-${lng}-desc`}
                />
                <span
                  className={cn(
                    // Base styles
                    'flex items-center justify-center',
                    'min-h-[44px] px-1',
                    'text-lg font-medium',
                    'rounded-md transition-all duration-200',
                    'border-2 border-transparent',
                    
                    // Touch optimization
                    'select-none cursor-pointer',
                    
                    // States
                    isActive
                      ? 'underline decoration-2 decoration-gray-300/70 shadow-sm'
                      : '',
                    
                    // Focus states (will show on input focus)
                    'focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2',
                    
                    // Disabled state
                    isChanging && 'opacity-50 cursor-not-allowed',
                    
                    // Active/pressed state
                    'active:scale-95 active:transition-transform active:duration-75'
                  )}
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    touchAction: 'manipulation',
                  }}
                  onKeyDown={(e) => handleKeyDown(e, lng)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isActive}
                  aria-label={`Switch to ${label}`}
                >
                  {lng.toUpperCase()}
                </span>
                <span id={`lang-${lng}-desc`} className="sr-only">
                  {isActive ? `Currently selected: ${label}` : `Switch to ${label}`}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}

export function LanguageSelectorMinimal({className}: LanguageSelectorProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isToggling, setIsToggling] = useState(false);

  const toggleLocale = useCallback(async () => {
    if (isToggling) return;
    
    const newLocale = locale === 'de' ? 'en' : 'de';
    
    try {
      setIsToggling(true);
      await router.replace(pathname, {locale: newLocale});
    } catch (error) {
      console.error('Error toggling locale:', error);
    } finally {
      setIsToggling(false);
    }
  }, [router, pathname, locale, isToggling]);

  const currentLanguage = locale === 'de' ? 'Deutsch' : 'English';
  const nextLanguage = locale === 'de' ? 'English' : 'Deutsch';

  return (
    <button
      onClick={toggleLocale}
      type="button"
      disabled={isToggling}
      className={cn(
        // Base layout
        'inline-flex items-center justify-center',
        'min-w-[56px] min-h-[44px] px-4 py-2',
        
        // Typography
        'text-sm font-medium leading-none',
        
        // Colors and theming
        'bg-gray-100 hover:bg-gray-200 active:bg-gray-300',
        'dark:bg-gray-800 dark:hover:bg-gray-700 dark:active:bg-gray-600',
        'text-gray-700 dark:text-gray-200',
        
        // Interactions
        'rounded-lg transition-all duration-150',
        'border border-transparent',
        
        // Focus states
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        'focus:border-blue-300',
        
        // Disabled state
        'disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none',
        
        // Active state feedback
        'active:scale-95 active:transition-transform active:duration-75',
        
        className
      )}
      style={{
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation',
      }}
      aria-label={`Current language: ${currentLanguage}. Click to switch to ${nextLanguage}`}
      aria-live="polite"
    >
      <span aria-hidden="true">{locale.toUpperCase()}</span>
      <span className="sr-only">
        {isToggling ? 'Switching language...' : `Switch to ${nextLanguage}`}
      </span>
    </button>
  );
}

export function LanguageSelectorDropdown({className}: LanguageSelectorProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const switchLocale = useCallback(async (lng: Locale) => {
    if (lng === locale || isChanging) return;
    
    try {
      setIsChanging(true);
      setIsOpen(false);
      await router.replace(pathname, {locale: lng});
    } catch (error) {
      console.error('Error switching locale:', error);
    } finally {
      setIsChanging(false);
    }
  }, [router, pathname, locale, isChanging]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLanguage = locale === 'de' ? 'Deutsch' : 'English';

  return (
    <div className={cn('relative', className)} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        disabled={isChanging}
        className={cn(
          // Base layout
          'inline-flex items-center justify-between',
          'min-w-[80px] min-h-[44px] px-3 py-2',
          
          // Typography
          'text-sm font-medium',
          
          // Styling
          'bg-white dark:bg-gray-800',
          'border border-gray-300 dark:border-gray-600',
          'rounded-lg shadow-sm',
          
          // Hover states
          'hover:bg-gray-50 dark:hover:bg-gray-700',
          'hover:border-gray-400 dark:hover:border-gray-500',
          
          // Focus states
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
          
          // Disabled state
          'disabled:opacity-60 disabled:cursor-not-allowed',
          
          // Open state
          isOpen && 'ring-2 ring-blue-500 ring-offset-2',
        )}
        style={{
          WebkitTapHighlightColor: 'transparent',
          touchAction: 'manipulation',
        }}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Language selector. Current: ${currentLanguage}`}
      >
        <span>{locale.toUpperCase()}</span>
        <svg
          className={cn(
            'ml-2 h-4 w-4 transition-transform duration-150',
            isOpen && 'rotate-180'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul
          className={cn(
            'absolute top-full left-0 right-0 mt-1',
            'bg-white dark:bg-gray-800',
            'border border-gray-300 dark:border-gray-600',
            'rounded-lg shadow-lg',
            'py-1 z-50'
          )}
          role="listbox"
          aria-label="Language options"
        >
          {SUPPORTED_LOCALES.map((lng) => {
            const isSelected = locale === lng;
            const label = lng === 'de' ? 'Deutsch' : 'English';
            
            return (
              <li key={lng} role="option" aria-selected={isSelected}>
                <button
                  onClick={() => switchLocale(lng)}
                  type="button"
                  disabled={isChanging || isSelected}
                  className={cn(
                    'w-full px-3 py-2 text-left',
                    'min-h-[44px] flex items-center',
                    'text-sm',
                    
                    // Selected state
                    isSelected
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-medium'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700',
                    
                    // Focus and disabled states
                    'focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-600',
                    'disabled:opacity-60 disabled:cursor-not-allowed'
                  )}
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    touchAction: 'manipulation',
                  }}
                  aria-label={isSelected ? `${label} (current)` : `Switch to ${label}`}
                >
                  <span className="flex-1">{label}</span>
                  {isSelected && (
                    <svg
                      className="ml-2 h-4 w-4 text-blue-600 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}