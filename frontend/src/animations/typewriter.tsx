import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  children: string;
  speed?: number;
  delay?: number; // Hinzufügen einer delay-Prop
}

const Typewriter: React.FC<TypewriterProps> = ({ children, speed = 100, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [startTyping, setStartTyping] = useState(false);

  // Verzögerung vor dem Start der Animation
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setStartTyping(true);
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [delay]);

  // Typewriter-Animation
  useEffect(() => {
    if (startTyping && displayedText.length < children.length) {
      const typingTimer = setTimeout(() => {
        setDisplayedText(children.slice(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(typingTimer);
    }
  }, [displayedText, children, speed, startTyping]);

  return <span>{displayedText}</span>;
};

export default Typewriter;
