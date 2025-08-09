import { FC } from 'react';

import LanguageSelector from './LanguageSelector';
import Logo from './Logo';

const Navbar: FC = () => {
  return (
    <nav className="bg-black/60 backdrop-blur-sm fixed z-40 flex h-16 w-full items-center justify-between px-4 py-2 md:px-8 top-0">
      <Logo />
      <LanguageSelector className="opacity-70 text-2xl" />
    </nav>
  );
};

export default Navbar;
