'use client';
import { useTransition } from 'react';
import { Link, useRouter } from '@/i18n/navigation';

interface LanguageOption {
  locale: string;
  label: string;
  isActive: boolean;
  href: string;
}

interface LanguageSelectorProps {
  data: LanguageOption[];
}

function LanguageSelector({ data }: LanguageSelectorProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleClick = (e: React.MouseEvent, item: LanguageOption) => {
    if (item.isActive) return;
    e.preventDefault();
    startTransition(() => {
      router.replace(item.href, { locale: item.locale as 'de' | 'en' });
    });
  };

  return (
    <ul className="flex gap-4 opacity-80 text-2xl">
      {data.map((item) => (
        <li key={item.locale}>
          <Link
            href={item.href}
            locale={item.locale as 'de' | 'en'}
            onClick={(e) => handleClick(e, item)}
            className={`transition-opacity ${isPending ? 'opacity-50 pointer-events-none' : ''} ${
              item.isActive
                ? 'font-bold text-white'
                : 'text-gray-alpha-400 hover:text-gray-alpha-200'
            }`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default LanguageSelector;
