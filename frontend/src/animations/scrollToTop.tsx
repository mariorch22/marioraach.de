import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  // Handle page reloads
  useEffect(() => {
    window.onload = () => {
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      });
    };

    return () => {
      window.onload = null;
    };
  }, []);

  // Handle route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
