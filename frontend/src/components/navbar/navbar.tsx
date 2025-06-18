import { FC } from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './language-selector';


const Logo = () => {
  return (
    <Link to={'/'}>
      <img
        src="/images/logo_r.png"
        alt="Logo"
        className="invert z-40 mix-blend-difference"
        width={40}
        height={40}
      />
    </Link>
  );
};


const Navbar: FC = () => {

  return (
    <nav className="bg-black fixed z-40 flex h-20 w-full items-center justify-between px-4 py-2 drop-shadow-customDropShadow2 md:px-8">
      <Logo />
      <LanguageSelector className="pr-4 opacity-70 text-2xl" />
    </nav>
  );
};

export default Navbar;
