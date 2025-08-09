'use client';

import { useParams } from 'next/navigation';

import { Link } from '@/i18n/navigation';

export default function NotFound() {
  const { locale } = useParams<{ locale: string }>();
  const isDe = locale === 'de';

  return (
    <main className="overflow-hidden flex flex-col items-center gap-4 mt-40 px-4 text-white">
      <h1 className="text-xl font-semibold">{isDe ? 'Essay nicht gefunden' : 'Essay not found'}</h1>
      <Link href="/" className="rounded bg-white/10 px-3 py-2 hover:bg-white/15 transition-colors">
        {isDe ? 'Zur Startseite' : 'Back to home'}
      </Link>
    </main>
  );
}
