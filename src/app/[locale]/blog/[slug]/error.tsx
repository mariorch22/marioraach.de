'use client';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import ErrorPresentation from '@/components/ui/errors/ErrorPresentation';

interface BlogErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function BlogErrorPage({ error, reset }: BlogErrorPageProps) {
  const t = useTranslations('ErrorMessages');

  useEffect(() => {
    console.error('Blog error:', error);
  }, [error]);

  return (
    <ErrorPresentation
      title={t('blog.title')}
      retryText={t('blog.retry')}
      backHomeText={t('blog.backHome')}
      onRetry={reset}
    />
  );
}
