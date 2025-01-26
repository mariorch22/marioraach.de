import React from 'react';
import type { FooterLink as FooterLinkType } from '@/constants/footer';

const styles = {
  footer: 'pt-8',
  divider:
    'h-1 w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-500 via-backgroundGray to-backgroundGray',
  container: 'text-lg grid grid-cols-[1fr_2fr_1fr] flex-row px-4 md:px-20 h-20',
  emailContainer: 'flex items-center',
  link: 'hidden md:block font-roboto opacity-35 hover:opacity-100',
  icon: 'md:hidden opacity-35',
  copyright:
    'text-gray-30 text-center text-xs md:text-sm opacity-35 text-md flex flex-col justify-center',
  legalLinks: 'flex gap-2 w-full justify-center',
} as const;

export const FooterLink: React.FC<FooterLinkType> = ({ href, label, ariaLabel, icon: Icon }) => (
  <a href={href} rel="noopener noreferrer" target="_blank" aria-label={ariaLabel}>
    <p className={styles.link}>{label}</p>
    <Icon className={styles.icon} size={25} />
  </a>
);
