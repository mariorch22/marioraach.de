'use client';
import { ReactNode } from 'react';

interface ParagraphProps {
  text: ReactNode;
  handleCopy: (text: string, id: string) => Promise<void>;
  copiedId: string | null;
  codeId: string;
}

const Paragraph = ({ text, handleCopy, copiedId, codeId }: ParagraphProps) => {
  return (
    <div className="relative group my-4">
      <pre className="bg-gray-alpha-1000 text-white p-4 rounded-md overflow-x-auto">
        <code className="block whitespace-pre font-mono text-sm">{text}</code>
      </pre>
      <button
        onClick={() => handleCopy(String(text), codeId)}
        className="absolute top-2 right-2 bg-gray-alpha-800 hover:bg-gray-alpha-700 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-150"
        title="Copy to clipboard"
      >
        {copiedId === codeId ? '✓' : '⧉'}
      </button>
    </div>
  );
};

export default Paragraph;
