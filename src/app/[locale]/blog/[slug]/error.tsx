'use client';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { ErrorPresentation } from '@/components/ui/errors/ErrorPresentation';
import { getErrorTexts } from '@/i18n/errorTexts';

interface BlogErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function BlogErrorPage({ error, reset }: BlogErrorPageProps) {
  const { locale } = useParams<{ locale: string }>();
  
  useEffect(() => {
    console.error('Blog error:', error);
  }, [error]);

  const texts = getErrorTexts(locale, 'blog');

  return (
    <ErrorPresentation
      title={texts.title}
      retryText={texts.retry}
      backHomeText={texts.backHome}
      onRetry={reset}
    />
  );
}
