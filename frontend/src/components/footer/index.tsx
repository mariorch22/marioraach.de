import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const links = [
  { href: 'https://github.com/mario1870', label: 'GITHUB', ariaLabel: 'GitHub von Mario Raach', icon: FaGithub },
  { href: 'https://www.linkedin.com/in/mario-r-b88950238', label: 'LINKEDIN', ariaLabel: 'LinkedIn von Mario Raach', icon:FaLinkedinIn },
  { href: 'https://x.com/marioraach?t=DXuNbz7i_ImaYxkTpu6f3A&s=09', label: 'TWITTER', ariaLabel: 'Twitter von Mario Raach', icon:FaXTwitter }
];

const Footer = () => {
  return (
    <>
        <footer className='bg-backgroundGray pt-8'>
            <div className="h-1 w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-500 via-backgroundGray to-backgroundGray"></div>
            <div className='text-white text-lg flex justify-between flex-row px-4 md:px-20'>

                <div className='py-6'>
                    <a href='mailto:marioraach01@gmail.com'><p className='hidden md:block'>marioraach01@gmail.com</p><span className='md:hidden opacity-35'><CiMail size={30} /></span></a>
                </div>

                <nav className='py-6 flex gap-4'>
                  {links.map((link, index) => (
                    <a key={index} href={link.href} rel="noopener noreferrer" aria-label={link.ariaLabel}>
                        <p className='hidden md:block'>{link.label}</p>
                        <span className='md:hidden opacity-35'><link.icon size={30} /></span>
                    </a>
                  ))}
                </nav>

            </div>
        </footer>
    </>
  );
}

export default React.memo(Footer);