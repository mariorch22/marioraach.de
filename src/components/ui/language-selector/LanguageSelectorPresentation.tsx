import { Link } from '@/i18n/navigation';

interface LanguageOption {
  locale: string;
  label: string;
  isActive: boolean;
  href: string;
}

interface LanguageSelectorPresentationProps {
  data: LanguageOption[];
}

function LanguageSelectorPresentation({ data }: LanguageSelectorPresentationProps) {
  return (
    <ul className="flex gap-4 opacity-80 text-2xl">
      {data.map((item) => (
        <li key={item.locale}>
          <Link
            href={item.href}
            locale={item.locale}
            className={
              item.isActive ? 'font-bold text-white' : 'text-neutral-400 hover:text-neutral-200'
            }
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default LanguageSelectorPresentation;
