'use client';
import { useTranslations } from 'next-intl';
import Footer from '@/components/layout/footer/Footer';

const currentYear = new Date().getUTCFullYear();

const FooterContainer = () => {
  const t = useTranslations('Footer');

  return (
    <Footer
      copyrightHolder="Mario Raach"
      currentYear={currentYear}
      imprintLabel={t('imprint')}
      dataProtectionLabel={t('dataProtection')}
    />
  );
};

export default FooterContainer;
