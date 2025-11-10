'use client';
import { useParams } from 'next/navigation';
import { getNotFoundTexts } from '@/i18n/notFoundTexts';
import NotFound from '@/components/ui/errors/NotFound';

export default function NotFoundPage() {
  const { locale } = useParams<{ locale: string }>();
  const texts = getNotFoundTexts(locale, 'blog');

  return <NotFound title={texts.title} backToHomeText={texts.backToHome} />;
}
