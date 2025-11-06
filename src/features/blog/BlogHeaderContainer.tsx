import BlogHeaderPresentation from '@/components/ui/blog/blog-header/BlogHeaderPresentation';

export interface BlogHeaderProps {
  title: string;
  summary?: string;
  publishingDate?: string;
  locale?: string;
}

const BlogHeaderContainer = ({ title, summary, publishingDate, locale = 'en' }: BlogHeaderProps) => {
  
  const summaryLabel = locale === 'de' ? 'Zusammenfassung' : 'Summary';

  let formattedDate: string | undefined;
  if (publishingDate) {
    formattedDate = new Date(publishingDate).toLocaleDateString(locale === 'de' ? 'de-DE' : 'en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      timeZone: 'UTC',
    });
  }

  return (
    <BlogHeaderPresentation
      title={title}
      summary={summary ?? ''}
      formattedDate={formattedDate ?? ''}
      summaryLabel={summaryLabel}
    />
  );
};

export default BlogHeaderContainer;