'use client';
import { useParams } from 'next/navigation';
import { getNotFoundTexts } from '@/i18n/notFoundTexts';
import { NotFoundPresentation } from '@/components/ui/errors/NotFoundPresentation';


export default function NotFoundPage() {
  const { locale } = useParams<{ locale: string }>();
  const texts = getNotFoundTexts(locale, 'essay');

  return <NotFoundPresentation title={texts.title} backToHomeText={texts.backToHome} />;
}
