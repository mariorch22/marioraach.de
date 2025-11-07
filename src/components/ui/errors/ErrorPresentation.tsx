import { Link } from '@/i18n/navigation';

interface ErrorPresentationProps {
  title: string;
  retryText: string;
  backHomeText: string;
  onRetry: () => void;
}

const ErrorPresentation = ({ title, retryText, backHomeText, onRetry }: ErrorPresentationProps) => (
  <main className="overflow-hidden flex flex-col items-center gap-4 mt-40 px-4 text-white">
    <h1 className="text-xl font-semibold">{title}</h1>
    <div className="flex gap-3">
      <button
        type="button"
        onClick={onRetry}
        className="rounded bg-white/10 px-3 py-2 hover:bg-white/15 transition-colors"
      >
        {retryText}
      </button>
      <Link
        href="/"
        className="rounded bg-white/10 px-3 py-2 hover:bg-white/15 transition-colors"
      >
        {backHomeText}
      </Link>
    </div>
  </main>
);

export default ErrorPresentation;
