// app/[locale]/imprint/page.tsx
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import ImprintContent from '@/features/imprint/ImprintContainer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Imprint' });
  return {
    title: t('title'),
  };
}

export default async function ImprintPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Imprint' });

  const imprintData = {
    title: t('title'),
    legalReference: t('legalReference'),
    operator: {
      title: t('operator.title'),
      name: t('operator.name'),
    },
    address: {
      title: t('address.title'),
      street: t('address.street'),
      city: t('address.city'),
    },
    contact: {
      title: t('contact.title'),
      email: t('contact.email'),
    },
    responsible: {
      title: t('responsible.title'),
      name: t('responsible.name'),
      street: t('responsible.street'),
      city: t('responsible.city'),
    },
    disclaimer: {
      title: t('disclaimer.title'),
      sections: t.raw('disclaimer.sections'),
    },
  };

  return <ImprintContent data={imprintData} />;
}
