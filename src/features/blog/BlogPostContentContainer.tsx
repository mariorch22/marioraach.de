import BlogHeaderContainer from './BlogHeaderContainer';
import BlogContentContainer from './BlogContentContainer';
import Divider from '@/components/ui/divider/Divider';
import { BlogPost } from '@/types/blog';

interface BlogPostContentContainerProps {
  post: BlogPost;
  locale: string;
}

const BlogPostContentContainer = ({ post, locale }: BlogPostContentContainerProps) => {
  return (
    <main className="overflow-hidden flex flex-col justify-center items-center gap-12 font-inter text-normal mt-40 px-4">
      <BlogHeaderContainer
        title={post.title}
        summary={post.summary ?? ''}
        publishingDate={post.publishingDate ?? ''}
        locale={locale}
      />
      <Divider />
      <BlogContentContainer post={post} />
    </main>
  );
};

export default BlogPostContentContainer;
