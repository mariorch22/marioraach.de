import BlogHeaderContainer from './BlogHeaderContainer';
import BlogContentContainer from './BlogContentContainer';
import DividerPresentation from '@/components/ui/divider/DividerPresentation';

interface BlogPostContentProps {
  blogPost: {
    title: string;
    summary: string;
    publishingDate: string;
    content: any;
  };
  locale: string;
}

const BlogPostContent = ({ blogPost, locale }: BlogPostContentProps) => {
  return (
    <main className="overflow-hidden flex flex-col justify-center items-center gap-12 font-inter text-normal mt-40 px-4">
      <BlogHeaderContainer
        title={blogPost.title}
        summary={blogPost.summary}
        publishingDate={blogPost.publishingDate}
        locale={locale}
      />
      <DividerPresentation />
      <BlogContentContainer blog={blogPost} />
    </main>
  );
};

export default BlogPostContent;