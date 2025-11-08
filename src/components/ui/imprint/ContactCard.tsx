import React from 'react';

interface ContactCardProps {
  title: string;
  content: React.ReactNode;
  isLast?: boolean;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, content, isLast = false }) => (
  <div className={`${!isLast ? 'border-b border-gray-alpha-200 pb-4' : ''}`}>
    <h4 className="text-sm font-semibold text-white mb-1">{title}</h4>
    <p className="text-base sm:text-lg text-white">{content}</p>
  </div>
);

export default ContactCard;
