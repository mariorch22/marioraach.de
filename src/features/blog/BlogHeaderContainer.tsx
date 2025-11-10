import BlogHeader from '@/components/ui/blog/blog-header/BlogHeader';
import { formatDate } from '@/lib/utils/textUtils';

interface BlogHeaderProps {
  title: string;
  summary?: string;
  publishingDate?: string;
  locale?: string;
}

const BlogHeaderContainer = ({
  title,
  summary,
  publishingDate,
  locale = 'en',
}: BlogHeaderProps) => {
  const summaryLabel = locale === 'de' ? 'Zusammenfassung' : 'Summary';

  if (!publishingDate) return null;

  const formattedDate = formatDate(publishingDate, locale);

  return (
    <BlogHeader
      title={title}
      summary={summary ?? ''}
      formattedDate={formattedDate}
      summaryLabel={summaryLabel}
    />
  );
};

export default BlogHeaderContainer;
