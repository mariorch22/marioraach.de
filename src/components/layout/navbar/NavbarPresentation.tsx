import LanguageSelectorContainer from '@/features/i18n/LanguageSelectorContainer';
import LogoContainer from '@/features/layout/logo-link/LogoContainer';
import { Suspense } from 'react';

const NavbarPresentation = () => {
  return (
    <nav
      className="bg-black/60 backdrop-blur-sm fixed z-40 flex h-16 w-full items-center justify-between px-4 py-2 md:px-8 top-0"
      aria-label="Primary"
    >
      <Suspense fallback={<div>Loading...</div>}>
        <LogoContainer />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LanguageSelectorContainer />
      </Suspense>
    </nav>
  );
};

export default NavbarPresentation;
