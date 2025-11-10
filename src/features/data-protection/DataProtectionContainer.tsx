import DataProtection from '@/components/ui/data-protection/DataProtection';

interface DataProtectionContainerProps {
  translations: Awaited<ReturnType<typeof import('next-intl/server').getTranslations>>;
  locale: string;
}

const DataProtectionContainer = ({ translations, locale }: DataProtectionContainerProps) => {
  return <DataProtection translations={translations} locale={locale} />;
};

export default DataProtectionContainer;
