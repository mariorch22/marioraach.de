'use client';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import ErrorPresentation from '@/components/ui/errors/ErrorPresentation';

export default function EssayErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('ErrorMessages');

  useEffect(() => {
    console.error('Essay error:', error);
  }, [error]);

  return (
    <ErrorPresentation
      title={t('essay.title')}
      retryText={t('essay.retry')}
      backHomeText={t('essay.backHome')}
      onRetry={reset}
    />
  );
}
