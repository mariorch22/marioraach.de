'use client';
import { createRenderOptions } from '@/lib/contentful/renderOptions';
import useContentCopyHandler from '@/hooks/useContentCopyHandler';
import BlogContent from '@/components/ui/blog/blog-content/BlogContent';
import { Document } from '@contentful/rich-text-types';
import { BlogPost } from '@/types/blog';

interface BlogInteractiveContentContainerProps {
  post: BlogPost;
}

const BlogInteractiveContentContainer = ({ post }: BlogInteractiveContentContainerProps) => {
  const { copiedId, handleCopy } = useContentCopyHandler();

  const renderOptions = createRenderOptions(handleCopy, copiedId, post.content?.links);

  return (
    <BlogContent json={post.content?.json ?? ({} as Document)} renderOptions={renderOptions} />
  );
};

export default BlogInteractiveContentContainer;
