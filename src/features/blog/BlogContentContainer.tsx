'use client';
import BlogContentPresentation from '@/components/ui/blog/blog-content/BlogContentPresentation';
import useContentCopyHandler from '@/hooks/useContentCopyHandler';
import { createRenderOptions } from '@/lib/contentful/renderOptions';
import { BlogPost } from '@/types/blog';

const BlogContentContainer = ({ post }: { post: BlogPost }) => {
  const { copiedId, handleCopy } = useContentCopyHandler();

  const renderOptions = createRenderOptions(handleCopy, copiedId);

  return (
    <BlogContentPresentation
      json={post.content?.json ?? ({} as any)}
      renderOptions={renderOptions}
    />
  );
};

export default BlogContentContainer;
