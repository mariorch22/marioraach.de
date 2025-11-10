import { useCallback } from 'react';

/**
 * Hook to copy text to clipboard.
 */
const useCopyToClipboard = () => {
  const copyToClipboard = useCallback(async (text: string) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard API nicht verfügbar');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.error('Fehler beim Kopieren:', err);
      return false;
    }
  }, []);

  return copyToClipboard;
};

export default useCopyToClipboard;
