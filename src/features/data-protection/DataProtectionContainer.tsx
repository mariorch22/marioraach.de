import DataProtectionPresentation from '@/components/ui/data-protection/DataProtectionPresentation';

interface DataProtectionContainerProps {
  t: any;
  locale: string;
}

const DataProtectionContainer = ({ t, locale }: DataProtectionContainerProps) => {
  return <DataProtectionPresentation t={t} locale={locale} />;
};

export default DataProtectionContainer;
