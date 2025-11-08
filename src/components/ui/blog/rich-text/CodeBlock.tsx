'use client';
import { ReactNode } from 'react';

interface CodeBlockProps {
  text: ReactNode;
  handleCopy: (text: string, id: string) => Promise<void>;
  copiedId: string | null;
  codeId: string;
}

const CodeBlock = ({ text, handleCopy, copiedId, codeId }: CodeBlockProps) => {
  return (
    <div className="relative group my-4">
      <pre className="bg-gray-alpha-100 text-white p-4 rounded-md overflow-x-auto">
        <code className="block whitespace-pre font-mono text-sm">{text}</code>
      </pre>
      <button
        onClick={() => handleCopy(String(text), codeId)}
        className="cursor-pointer absolute px-3 py-1 top-2 right-2 bg-gray-alpha-600/0 hover:bg-gray-alpha-500/20 text-white rounded transition-opacity duration-150"
        title="Copy to clipboard"
      >
        {copiedId === codeId ? '✓' : '⧉'}
      </button>
    </div>
  );
};

export default CodeBlock;
