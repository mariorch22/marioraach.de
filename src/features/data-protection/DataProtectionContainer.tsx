import DataProtectionPresentation from '@/components/ui/data-protection/DataProtectionPresentation';

interface DataProtectionContainerProps {
  translations: Awaited<ReturnType<typeof import('next-intl/server').getTranslations>>;
  locale: string;
}

const DataProtectionContainer = ({ translations, locale }: DataProtectionContainerProps) => {
  return <DataProtectionPresentation translations={translations} locale={locale} />;
};

export default DataProtectionContainer;
