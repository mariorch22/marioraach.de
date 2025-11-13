import { BlogPost } from '@/types/blog';
import BlogPostLayout from '@/components/ui/blog/BlogPostLayout';
import BlogHeader from '@/components/ui/blog/blog-header/BlogHeader';
import Divider from '@/components/ui/divider/Divider';
import { formatDate } from '@/lib/utils/textUtils';
import BlogInteractiveContentContainer from './BlogPostInteractiveContentContainer';

interface BlogPostContentContainerProps {
  post: BlogPost;
  locale: string;
}

const BlogPostContentContainer = ({ post, locale }: BlogPostContentContainerProps) => {
  const summaryLabel = locale === 'de' ? 'Zusammenfassung' : 'Summary';
  const formattedDate = post.publishingDate ? formatDate(post.publishingDate, locale) : '';

  return (
    <BlogPostLayout>
      <BlogHeader
        title={post.title}
        summary={post.summary ?? ''}
        formattedDate={formattedDate}
        summaryLabel={summaryLabel}
      />
      <Divider />
      <BlogInteractiveContentContainer post={post} />
    </BlogPostLayout>
  );
};

export default BlogPostContentContainer;
