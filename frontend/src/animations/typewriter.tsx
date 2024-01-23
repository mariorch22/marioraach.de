import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  children: string;
  speed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ children, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (displayedText.length < children.length) {
      const timer = setTimeout(() => {
        setDisplayedText(children.slice(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [displayedText, children, speed]);

  return <span>{displayedText}</span>;
};

export default Typewriter;
