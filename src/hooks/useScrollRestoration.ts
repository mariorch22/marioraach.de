'use client'; 
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Hook to restore the scroll position.
 * Scrolls the page to the top on every route change.
 */
const useScrollRestoration = (): void => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);
}

export default useScrollRestoration;
