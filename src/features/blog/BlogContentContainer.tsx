'use client';
import { Document } from '@contentful/rich-text-types';
import BlogContentPresentation from '@/components/ui/blog/blog-content/BlogContentPresentation';
import useContentCopyHandler from '@/hooks/useContentCopyHandler';
import { createRenderOptions } from '@/lib/contentful/renderOptions';


interface Asset {
  sys: { id: string };
  url?: string;
}

interface PostBody {
  content: {
    json: Document;
    links?: { assets?: { block?: Asset[] } };
  };
}


const BlogContentContainer = ({ blog }: { blog: PostBody }) => {
  const { copiedId, handleCopy } = useContentCopyHandler();

  const renderOptions = createRenderOptions(handleCopy, copiedId);

  return <BlogContentPresentation json={blog.content.json} renderOptions={renderOptions} />;
};

export default BlogContentContainer;
