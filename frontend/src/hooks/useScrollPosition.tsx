import { useState, useEffect } from 'react';

const useScrollPosition = (threshold: number) => {
    const [isUnderThreshold, setIsUnderThreshold] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentPosition = window.scrollY;
        setScrollPosition(currentPosition);
        setIsUnderThreshold(currentPosition < threshold);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold]);
  
    return { isUnderThreshold, scrollPosition };
  };

export default useScrollPosition;