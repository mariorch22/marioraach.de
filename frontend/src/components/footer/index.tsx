import React from 'react';
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Outlet } from 'react-router';

const links = [
  { href: 'https://github.com/mario1870', label: 'GITHUB', ariaLabel: 'GitHub von Mario Raach', icon: FaGithub },
  { href: 'https://www.linkedin.com/in/mario-r-b88950238', label: 'LINKEDIN', ariaLabel: 'LinkedIn von Mario Raach', icon:FaLinkedinIn },
  { href: 'https://x.com/marioraach?t=DXuNbz7i_ImaYxkTpu6f3A&s=09', label: 'TWITTER', ariaLabel: 'Twitter von Mario Raach', icon:FaXTwitter }
];

const Footer = () => {
  return (
    <>
      <Outlet />
      <footer className='bg-backgroundGray pt-8'>
          <div>
            <div className="h-1 w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-500 via-backgroundGray to-backgroundGray"></div>
            <div className='text-white text-lg flex justify-between items-center flex-row px-4 md:px-20'>

                <div className='py-6'>
                    <a href='mailto:marioraach01@gmail.com' aria-label="Senden Sie Mario Raach eine E-Mail">
                        <p className='hidden md:block font-roboto opacity-35 hover:opacity-100'>marioraach01@gmail.com</p>
                        <CiMail className='md:hidden opacity-35' size={30} />
                    </a>
                </div>

                <div className='text-gray-300 text-center opacity-35 text-sm hidden md:block'>
                  <p>&copy; {new Date().getFullYear()} - All rights reserved</p>
                  <div className='flex gap-2 w-full justify-center'>
                    <Link to={'/imprint'}>
                      Impressum
                    </Link>
                    <Link to={'/dataprotection'}>
                      Datenschutz
                    </Link>              
                  </div>
                </div>

                <nav className='py-6 flex gap-4'>
                  {links.map((link) => (
                    <a key={link.href} href={link.href} rel="noopener noreferrer" target="_blank" aria-label={link.ariaLabel}>
                        <p className='hidden md:block font-roboto opacity-35 hover:opacity-100'>{link.label}</p>
                        {React.createElement(link.icon, { className: 'md:hidden opacity-35', size: 30 })}
                    </a>
                  ))}
                </nav>
            </div>
          </div>

          <div className='text-gray-300 text-center opacity-35 text-md md:hidden pb-4'>
            <p>&copy; {new Date().getFullYear()} - All rights reserved</p>
            <div className='flex gap-2 w-full justify-center'>
              <Link to={'/imprint'}>
                Impressum
              </Link>
              <Link to={'/dataprotection'}>
                Datenschutz
              </Link>              
            </div>
          </div>
      </footer>
    </>
  );
}

export default React.memo(Footer);