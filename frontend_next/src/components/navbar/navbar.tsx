import { FC } from 'react';
import LanguageSelector from './language-selector';
import { Logo } from './logo';


const Navbar: FC = () => {

  return (
    <nav className="bg-black fixed z-40 flex h-20 w-full items-center justify-between px-4 py-2 drop-shadow-custom2 shadow-lg md:px-8 top-0">
      <Logo />
      <LanguageSelector className="opacity-70 text-2xl" />
    </nav>
  );
};

export default Navbar;
