'use client';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { ErrorPresentation } from '@/components/ui/errors/ErrorPresentation';
import { getErrorTexts } from '@/i18n/errorTexts';

export default function EssayErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { locale } = useParams<{ locale: string }>();
  
  useEffect(() => {
    console.error('Essay error:', error);
  }, [error]);

  const texts = getErrorTexts(locale, 'essay');

  return (
    <ErrorPresentation
      title={texts.title}
      retryText={texts.retry}
      backHomeText={texts.backHome}
      onRetry={reset}
    />
  );
}