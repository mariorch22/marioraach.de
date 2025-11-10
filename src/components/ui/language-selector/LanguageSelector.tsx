'use client';
import { Link } from '@/i18n/navigation';

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
  return (
    <ul className="flex gap-4 opacity-80 text-2xl">
      {data.map((item) => (
        <li key={item.locale}>
          <Link
            href={item.href}
            locale={item.locale as 'de' | 'en'}
            className={
              item.isActive
                ? 'font-bold text-white'
                : 'text-gray-alpha-400 hover:text-gray-alpha-200'
            }
            prefetch={false}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default LanguageSelector;
