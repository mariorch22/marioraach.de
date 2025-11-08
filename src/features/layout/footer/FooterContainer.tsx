'use client';
import { useLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import FooterPresentation from '@/components/layout/footer/FooterPresentation';

type AppLocale = (typeof routing)['locales'][number];

const FOOTER_LABELS: Record<AppLocale, { imprint: string; dataProtection: string }> = {
  de: { imprint: 'Impressum', dataProtection: 'Datenschutz' },
  en: { imprint: 'Imprint', dataProtection: 'Data Protection' },
} as const;

const currentYear = new Date().getUTCFullYear();

const Footer = () => {
  const locale = useLocale();
  const defaultLocale = routing.defaultLocale as AppLocale;
  const activeLocale: AppLocale = (routing.locales as readonly string[]).includes(locale)
    ? (locale as AppLocale)
    : defaultLocale;

  return (
    <FooterPresentation
      copyrightHolder="Mario Raach"
      currentYear={currentYear}
      imprintLabel={FOOTER_LABELS[activeLocale].imprint}
      dataProtectionLabel={FOOTER_LABELS[activeLocale].dataProtection}
    />
  );
};

export default Footer;
