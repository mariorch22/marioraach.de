'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';

import { Link } from '@/i18n/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { locale } = useParams<{ locale: string }>();

  useEffect(() => {
    console.error(error);
  }, [error]);

  const isDe = locale === 'de';
  const title = isDe ? 'Fehler beim Laden des Essays' : 'Error loading essay';
  const retry = isDe ? 'Erneut versuchen' : 'Try again';
  const backHome = isDe ? 'Zur Startseite' : 'Back to home';

  return (
    <main className="overflow-hidden flex flex-col items-center gap-4 mt-40 px-4 text-white">
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded bg-white/10 px-3 py-2 hover:bg-white/15 transition-colors"
        >
          {retry}
        </button>
        <Link
          href="/"
          className="rounded bg-white/10 px-3 py-2 hover:bg-white/15 transition-colors"
        >
          {backHome}
        </Link>
      </div>
    </main>
  );
}
