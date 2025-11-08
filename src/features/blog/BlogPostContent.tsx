import BlogHeaderContainer from './BlogHeaderContainer';
import BlogContentContainer from './BlogContentContainer';
import DividerPresentation from '@/components/ui/divider/DividerPresentation';
import { BlogPost } from '@/types/blog';

interface BlogPostContentProps {
  post: BlogPost;
  locale: string;
}

const BlogPostContent = ({ post, locale }: BlogPostContentProps) => {
  return (
    <main className="overflow-hidden flex flex-col justify-center items-center gap-12 font-inter text-normal mt-40 px-4">
      <BlogHeaderContainer
        title={post.title}
        summary={post.summary ?? ''}
        publishingDate={post.publishingDate ?? ''}
        locale={locale}
      />
      <DividerPresentation />
      <BlogContentContainer post={post} />
    </main>
  );
};

export default BlogPostContent;
