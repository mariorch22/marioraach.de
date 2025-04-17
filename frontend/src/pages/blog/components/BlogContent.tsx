// components/BlogContent.tsx
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { Blog } from "@/types/blog";
import { CONTENTFUL_SPACE_ID } from "@/constants/config";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";

interface BlogContentProps {
  blog: Blog;
}

export function BlogContent({ blog }: BlogContentProps) {
  const copyToClipboard = useCopyToClipboard();
  
  const handleCopy = async (text: string) => {
    await copyToClipboard(text);
  };

  // Funktion zum Abrufen von Asset-URLs
  const getAssetUrl = (assetId: string): string => {
    if (blog.content.links?.assets?.block) {
      const asset = blog.content.links.assets.block.find(
        (asset) => asset.sys.id === assetId
      );
      if (asset && asset.url) {
        return asset.url;
      }
    }
    // Fallback: Konstruiere URL aus ID
    return `https://images.ctfassets.net/${CONTENTFUL_SPACE_ID}/${assetId}`;
  };

  const renderOptions: Options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
      [MARKS.CODE]: (text) => {
        // Wir brauchen ein React-Fragment, um den state zu verwalten
        return (
          <div className="relative group my-4">
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <code className="block whitespace-pre font-mono text-sm">{text}</code>
            </pre>
            <button 
              onClick={() => handleCopy(String(text))}
              className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
              title="Copy to clipboard"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
        );
      }
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="blog-paragraph mb-4" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.7' }}>
          {children}
        </p>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="blog-heading-1 text-3xl font-bold my-5 mt-12">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="blog-heading-2 text-2xl font-bold mt-8 mb-4">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="blog-heading-3 text-xl font-bold mt-6 mb-3">{children}</h3>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="blog-list list-disc ml-6 mb-4">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="blog-list list-decimal ml-6 mb-4">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="mb-1">{children}</li>,
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="blog-quote border-l-4 border-gray-300 pl-4 italic my-5 text-gray-700">
          {children}
        </blockquote>
      ),
      [BLOCKS.HR]: () => <hr className="blog-divider my-8 border-t border-gray-200" />,
      [INLINES.HYPERLINK]: (node, children) => {
        if ('data' in node && 'uri' in node.data) {
          const { uri } = node.data;
          return (
            <a 
              href={uri} 
              className="blog-link text-blue-600 hover:underline" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {children}
            </a>
          );
        }
        return null;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        if ('data' in node && 'target' in node.data) {
          // Extrahiere die Asset-ID
          const assetId = node.data.target.sys.id;
          
          // Hole die URL für das Asset
          const imageUrl = getAssetUrl(assetId);
          
          return (
            <figure className="blog-image-container my-8 text-center">
              <img 
                src={imageUrl}
                alt="Blog image" 
                className="blog-image max-w-full rounded-lg shadow-md mx-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML += 
                    '<p class="image-error bg-red-50 p-3 rounded text-red-600 mt-2">Bild konnte nicht geladen werden</p>';
                }}
              />
            </figure>
          );
        }
        return null;
      }
    },
    // Diese Funktion ist entscheidend für die korrekte Darstellung von Zeilenumbrüchen
    renderText: (text) => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, [] as React.ReactNode[]);
    },
  };

  return (
    <div className="blog-content max-w-[60rem] mx-auto">
      {documentToReactComponents(blog.content.json, renderOptions)}
    </div>
  );
}