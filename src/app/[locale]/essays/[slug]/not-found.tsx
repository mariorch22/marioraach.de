'use client';
import { useTranslations } from 'next-intl';
import NotFound from '@/components/ui/errors/NotFound';

export default function NotFoundPage() {
  const t = useTranslations('NotFound');

  return <NotFound title={t('essay.title')} backToHomeText={t('essay.backToHome')} />;
}
