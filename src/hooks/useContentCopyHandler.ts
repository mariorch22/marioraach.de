import { useState } from 'react';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';

/**
 * Hook to handle content copy for the blogs code blocks.
 */
const useContentCopyHandler = () => {
  const copyToClipboard = useCopyToClipboard();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    await copyToClipboard(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return { copiedId, handleCopy };
};

export default useContentCopyHandler;
