'use client';
import { useTranslations } from 'next-intl';
import FooterPresentation from '@/components/layout/footer/FooterPresentation';

const currentYear = new Date().getUTCFullYear();

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <FooterPresentation
      copyrightHolder="Mario Raach"
      currentYear={currentYear}
      imprintLabel={t('imprint')}
      dataProtectionLabel={t('dataProtection')}
    />
  );
};

export default Footer;
