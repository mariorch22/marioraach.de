import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import DataProtectionContainer from '@/features/data-protection/DataProtectionContainer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'DataProtection' });
  return {
    title: t('title'),
  };
}

export default async function DataProtectionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'DataProtection' });

  return <DataProtectionContainer t={t} locale={locale} />;
}
