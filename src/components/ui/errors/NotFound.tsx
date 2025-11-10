import { Link } from '@/i18n/navigation';

interface NotFoundProps {
  title: string;
  backToHomeText: string;
}

const NotFound = ({ title, backToHomeText }: NotFoundProps) => (
  <main className="overflow-hidden flex flex-col items-center gap-4 mt-40 px-4 text-white">
    <h1 className="text-xl font-semibold">{title}</h1>
    <Link href="/" className="rounded bg-white/10 px-3 py-2 hover:bg-white/15 transition-colors">
      {backToHomeText}
    </Link>
  </main>
);

export default NotFound;
