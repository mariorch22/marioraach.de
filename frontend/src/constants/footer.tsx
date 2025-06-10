import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export interface FooterLink {
  href: string;
  label: string;
  ariaLabel: string;
  icon: IconType;
}

export const FOOTER_LINKS: FooterLink[] = [
  {
    href: 'https://github.com/mariorch22',
    label: 'GITHUB',
    ariaLabel: 'GitHub von Mario Raach',
    icon: FaGithub,
  },
  {
    href: 'https://www.linkedin.com/in/mario-r-b88950238',
    label: 'LINKEDIN',
    ariaLabel: 'LinkedIn von Mario Raach',
    icon: FaLinkedinIn,
  },
];

export const CONTACT_EMAIL = 'marioraach01@gmail.com';
