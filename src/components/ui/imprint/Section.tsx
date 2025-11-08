import React from 'react';

interface SectionProps {
  title: string;
  content: string | React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, content, className }) => (
  <div className={`mb-6 ${className || ''}`}>
    <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">{title}</h3>
    <div className="text-sm sm:text-base text-white leading-relaxed">{content}</div>
  </div>
);

export default Section;
