import { Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES, Mark } from '@contentful/rich-text-types';
import { createAssetGetter } from '@/lib/contentful/assetHelpers';
import CodeBlock from '@/components/ui/blog/rich-text/CodeBlock';
import Paragraph from '@/components/ui/blog/rich-text/Paragraph';
import Hyperlink from '@/components/ui/blog/rich-text/Hyperlink';
import EmbeddedAsset from '@/components/ui/blog/rich-text/EmbeddedAsset';
import { parseMath } from '@/lib/rich-text-math';

/**
 * Creates render options for rich text content.
 */
export const createRenderOptions = (
  handleCopy: (text: string, id: string) => Promise<void>,
  copiedId: string | null,
  links?: { assets?: { block?: { sys: { id: string }; url?: string }[] } }
): Options => ({
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => {
      const textStr = String(text);
      if (textStr.length <= 30) {
        return (
          <code className="bg-gray-alpha-100 text-gray-alpha-800 px-1.5 py-0.5 rounded font-mono text-sm">
            {text}
          </code>
        );
      }
      const codeId = `code-${textStr.slice(0, 20).replace(/\s/g, '-')}`;
      return <CodeBlock text={text} handleCopy={handleCopy} copiedId={copiedId} codeId={codeId} />;
    },
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      const hasOnlyCodeMarks = node.content?.every(
        (item) =>
          'marks' in item &&
          item.marks?.includes('code' as unknown as Mark) &&
          item.marks.length === 1
      );
      if (hasOnlyCodeMarks) {
        const textStr = String(children);
        const codeId = `code-block-${textStr.slice(0, 20).replace(/\s/g, '-')}`;
        return (
          <Paragraph text={children} handleCopy={handleCopy} copiedId={copiedId} codeId={codeId} />
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
      <blockquote className="border-l-4 border-gray-alpha-300 pl-4 italic my-5 text-gray-alpha-700">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-t border-gray-alpha-200" />,
    [INLINES.HYPERLINK]: (node, children) => {
      if ('data' in node && 'uri' in node.data) {
        const { uri } = node.data;
        return <Hyperlink uri={uri} text={children} />;
      }
      return null;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      if ('data' in node && 'target' in node.data) {
        const assetId = node.data.target.sys.id;
        const imageUrl = createAssetGetter(links)(assetId);
        return imageUrl ? <EmbeddedAsset imageUrl={imageUrl} /> : null;
      }
      return null;
    },
  },
  renderText: (text) => {
    // Check if text contains Math syntax
    if (text.includes('$')) {
      // Parse Math and handle line breaks
      const lines = text.split('\n');
      return lines.reduce((children, line, index) => {
        const parsed = parseMath(line);
        return [...children, index > 0 && <br key={`br-${index}`} />, ...parsed];
      }, [] as React.ReactNode[]);
    }

    // Standard: only handle line breaks
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, [] as React.ReactNode[]);
  },
});
