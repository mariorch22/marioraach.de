import katex from 'katex';
import React from 'react';

export function parseMath(text: string): React.ReactNode[] {
  // Regex für $$...$$ (Display) und $...$ (Inline)
  const regex = /(\$\$[\s\S]*?\$\$|\$[^\$\n]+?\$)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    // Display Math ($$...$$)
    if (part.startsWith('$$') && part.endsWith('$$')) {
      const formula = part.slice(2, -2).trim();
      try {
        const html = katex.renderToString(formula, {
          displayMode: true,
          throwOnError: false,
          output: 'html',
        });
        return (
          <span
            key={index}
            className="block my-4 overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } catch {
        return (
          <code key={index} className="bg-red-100 text-red-800 px-2 py-1 rounded">
            {part}
          </code>
        );
      }
    }

    // Inline Math ($...$)
    if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
      const formula = part.slice(1, -1).trim();
      try {
        const html = katex.renderToString(formula, {
          displayMode: false,
          throwOnError: false,
          output: 'html',
        });
        return <span key={index} className="inline" dangerouslySetInnerHTML={{ __html: html }} />;
      } catch {
        return (
          <code key={index} className="bg-red-100 text-red-800 px-2 py-1 rounded">
            {part}
          </code>
        );
      }
    }

    // Normaler Text
    return part;
  });
}
