'use client';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS, Document, Mark } from '@contentful/rich-text-types';
import Image from 'next/image';
import { useState } from 'react';

import useCopyToClipboard from '@/hooks/useCopyToClipboard';

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

export function BlogContent({ blog }: { blog: PostBody }) {
  const copyToClipboard = useCopyToClipboard();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    await copyToClipboard(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getAssetUrl = (assetId: string): string | null => {
    if (blog.content.links?.assets?.block) {
      const asset = blog.content.links.assets.block.find((asset: Asset) => asset.sys.id === assetId);
      if (asset?.url) return asset.url;
    }
    // No fallback on client with env access; skip rendering if URL not provided by Contentful
    return null;
  };

  const renderOptions: Options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
      [MARKS.CODE]: (text) => {
        const codeId = `code-${Math.random().toString(36).substring(2, 11)}`;
        return (
          <div className="relative group my-4">
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <code className="block whitespace-pre font-mono text-sm">{text}</code>
            </pre>
            <button
              onClick={() => handleCopy(String(text), codeId)}
              className="cursor-pointer absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-150"
              title="Copy to clipboard"
            >
              {copiedId === codeId ? '✓' : '⧉'}
            </button>
          </div>
        );
      },
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        const hasOnlyCodeMarks = node.content?.every(
          (item) => 'marks' in item && item.marks?.includes('code' as unknown as Mark) && item.marks.length === 1,
        );
        if (hasOnlyCodeMarks) {
          const codeId = `code-block-${Math.random().toString(36).substring(2, 11)}`;
          return (
            <div className="relative group my-4">
              <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                <code className="block whitespace-pre font-mono text-sm">{children}</code>
              </pre>
              <button
                onClick={() => handleCopy(String(children), codeId)}
                className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                title="Copy to clipboard"
              >
                {copiedId === codeId ? '✓' : '⧉'}
              </button>
            </div>
          );
        }
        return (
          <div className="mb-4" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.7' }}>
            {children}
          </div>
        );
      },
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="text-2xl md:text-3xl font-bold my-5 mt-12">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="text-lg md:text-xl font-bold mt-6 mb-3">{children}</h3>
      ),
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="mb-1">{children}</li>,
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-5 text-gray-700">
          {children}
        </blockquote>
      ),
      [BLOCKS.HR]: () => <hr className="my-8 border-t border-gray-200" />,
      [INLINES.HYPERLINK]: (node, children) => {
        if ('data' in node && 'uri' in node.data) {
          const { uri } = node.data;
          return (
            <a href={uri} className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          );
        }
        return null;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        if ('data' in node && 'target' in node.data) {
          const assetId = node.data.target.sys.id;
          const imageUrl = getAssetUrl(assetId);
          return imageUrl ? (
            <figure className="my-8 text-center">
              <Image src={imageUrl} alt="Post image" width={1000} height={1000} className="max-w-full rounded-lg shadow-md mx-auto" />
            </figure>
          ) : null;
        }
        return null;
      },
    },
    renderText: (text) => text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, [] as React.ReactNode[]),
  };

  return <div className="w-full max-w-[60rem] mx-auto">{documentToReactComponents(blog.content.json, renderOptions)}</div>;
}


