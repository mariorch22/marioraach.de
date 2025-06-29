"use client"
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// Sehr subtile Animation Variants
const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 10
  },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1
  }
};

export function BlogContent({ blog }: any) {
  const copyToClipboard = useCopyToClipboard();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  const handleCopy = async (text: string, id: string) => {
    await copyToClipboard(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Funktion zum Abrufen von Asset-URLs
  const getAssetUrl = (assetId: string): string => {
    if (blog.content.links?.assets?.block) {
      const asset = blog.content.links.assets.block.find(
        (asset: any) => asset.sys.id === assetId
      );
      if (asset && asset.url) {
        return asset.url;
      }
    }
    // Fallback: Konstruiere URL aus ID
    return `https://images.ctfassets.net/${process.env.CONTENTFUL_SPACE_ID}/${assetId}`;
  };

  const renderOptions: Options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
      [MARKS.CODE]: (text) => {
        const codeId = `code-${Math.random().toString(36).substr(2, 9)}`;
        return (
          <div className="relative group my-4">
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <code className="block whitespace-pre font-mono text-sm">{text}</code>
            </pre>
            <motion.button 
              onClick={() => handleCopy(String(text), codeId)}
              className="cursor-pointer absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-150"
              title="Copy to clipboard"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {copiedId === codeId ? (
                  <motion.svg 
                    key="check"
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </motion.svg>
                ) : (
                  <motion.svg 
                    key="copy"
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        );
      }
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        // Prüfe, ob der Paragraph nur Code-Markierungen enthält
        const hasOnlyCodeMarks = node.content?.every((item: any) => 
          item.marks?.includes('code') && item.marks.length === 1
        );
        
        if (hasOnlyCodeMarks) {
          const codeId = `code-block-${Math.random().toString(36).substr(2, 9)}`;
          return (
            <div className="relative group my-4">
              <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                <code className="block whitespace-pre font-mono text-sm">{children}</code>
              </pre>
              <motion.button 
                onClick={() => handleCopy(String(children), codeId)}
                className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                title="Copy to clipboard"
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {copiedId === codeId ? (
                    <motion.svg 
                      key="check"
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </motion.svg>
                  ) : (
                    <motion.svg 
                      key="copy"
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </motion.svg>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          );
        }
        
        // Normale Paragraphen
        return (
          <motion.div 
            className="blog-paragraph mb-4" 
            style={{ whiteSpace: 'pre-wrap', lineHeight: '1.7' }}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
          >
            {children}
          </motion.div>
        );
      },
      [BLOCKS.HEADING_1]: (node, children) => (
        <motion.h1 
          className="blog-heading-1 text-3xl font-bold my-5 mt-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
        >
          {children}
        </motion.h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <motion.h2 
          className="blog-heading-2 text-2xl font-bold mt-8 mb-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
        >
          {children}
        </motion.h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <motion.h3 
          className="blog-heading-3 text-xl font-bold mt-6 mb-3"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
        >
          {children}
        </motion.h3>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <motion.ul 
          className="blog-list list-disc ml-6 mb-4"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
        >
          {children}
        </motion.ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <motion.ol 
          className="blog-list list-decimal ml-6 mb-4"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
        >
          {children}
        </motion.ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="mb-1">{children}</li>,
      [BLOCKS.QUOTE]: (node, children) => (
        <motion.blockquote 
          className="blog-quote border-l-4 border-gray-300 pl-4 italic my-5 text-gray-700"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
        >
          {children}
        </motion.blockquote>
      ),
      [BLOCKS.HR]: () => <hr className="blog-divider my-8 border-t border-gray-200" />,
      [INLINES.HYPERLINK]: (node, children) => {
        if ('data' in node && 'uri' in node.data) {
          const { uri } = node.data;
          return (
            <a 
              href={uri} 
              className="blog-link underline underline-offset-4 decoration-1 decoration-[rgba(255,255,255,0.5)] hover:decoration-[rgba(255,255,255,0.8)] transition-colors duration-150" 
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
          const assetId = node.data.target.sys.id;
          const imageUrl = getAssetUrl(assetId);
          
          return (
            <motion.figure 
              className="blog-image-container my-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image 
                src={imageUrl}
                alt="Blog image" 
                className="blog-image max-w-full rounded-lg shadow-md mx-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML += 
                    '<p class="image-error bg-red-50 p-3 rounded text-red-600 mt-2">Bild konnte nicht geladen werden</p>';
                }}
                width={1000}
                height={1000}
              />
            </motion.figure>
          );
        }
        return null;
      }
    },
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