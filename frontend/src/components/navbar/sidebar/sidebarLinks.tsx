import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import React from "react";

const links = [
    { href: "https://github.com/mario1870", icon: <FaGithub />, ariaLabel: 'GitHub' },
    { href: "https://www.youtube.com/@tvmelchingen3274", icon: <FaLinkedinIn />, ariaLabel: 'LinkedIn' },
    { href: "https://www.instagram.com/tvmelchingen1912/", icon: <FaXTwitter />, ariaLabel: 'Twitter' }
  ];
  
  const SidebarLinks = () => {
    return (
      <div className="flex w-full justify-around px-10 md:px-20 py-6">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.ariaLabel}
          >
            {React.cloneElement(link.icon, { color: "white", size: 40 })}
          </a>
        ))}
      </div>
    );
  };
  
  export default SidebarLinks;