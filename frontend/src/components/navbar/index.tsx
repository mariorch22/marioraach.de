import { FC, useState } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { ANIMATION_CONSTANTS, NAVBAR_ANIMATIONS } from '@/constants/constants';
import useScrollPosition from '@/hooks/useScrollPosition';
import Logo from '@/components/navbar/components/logo';
import LanguageSelector from './components/language-selector';
import Sidebar from './sidebar';
import PopUp from "@/animations/popUp";

interface NavbarItem {
  link: string;
  titel: string;
}

const UnderlineSVG: FC<{ isVisible: boolean }> = ({ isVisible }) => (
  <svg width="100%" height="16" viewBox="0 0 145 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      variants={NAVBAR_ANIMATIONS.underline}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      d="M0 2C34.3704 2 68.7407 2 103.111 2C114.481 2 125.852 2 137.222 2C139.593 2 141.963 2 144.333 2C148.219 2 136.669 3.32019 132.889 4.22222C104.373 11.0272 76.1103 15.889 46.9444 19.7778C38.7799 20.8664 30.456 22.4688 22.2222 23C13.3405 23.573 39.9397 21.2713 48.7778 20.2222C67.9708 17.9441 87.7366 16.8651 107.056 18.5556C109.817 18.7972 124.305 22.3904 126 19"
      stroke="white"
      strokeWidth="7"
      strokeLinecap="round"
    />
  </svg>
);

const NavLink: FC<{ item: NavbarItem; isHovered: boolean; onHover: (title: string | null) => void }> = ({
  item,
  isHovered,
  onHover
}) => (
  <span className="flex flex-col items-center justify-center pt-4">
    <span className="flex items-center">
      <PopUp>
        <span className="font-thin opacity-30">|</span>
      </PopUp>
      <PopUp>
        <Link
          to={item.link}
          onMouseEnter={() => onHover(item.titel)}
          onMouseLeave={() => onHover(null)}
          className="flex h-10 min-w-24 items-center justify-center px-4 font-normal"
        >
          {item.titel}
        </Link>
      </PopUp>
    </span>
    <UnderlineSVG isVisible={isHovered} />
  </span>
);

const Navbar: FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { isUnderThreshold } = useScrollPosition(ANIMATION_CONSTANTS.SCROLL_THRESHOLD);
  const { t } = useTranslation();
  
  const navbarItems = t("navbarData", { returnObjects: true }) as NavbarItem[];

  const navAnimation = {
    initial: "normal",
    animate: isUnderThreshold ? "currentPositionUnder50PX" : "normal",
    variants: NAVBAR_ANIMATIONS.background,
    transition: {
      duration: ANIMATION_CONSTANTS.TRANSITION_DURATION,
      delay: ANIMATION_CONSTANTS.TRANSITION_DELAY
    }
  };

  return (
    <motion.nav 
      className="fixed z-40 flex h-20 w-full items-center justify-between px-4 py-2 drop-shadow-customDropShadow2 md:px-8"
      {...navAnimation}
    >
      <PopUp>
        <span className="z-50 mix-blend-difference flex justify-center items-center">
          <Logo />
        </span>
      </PopUp>

      {/* Mobile Navigation */}
      <span className="flex items-center lg:hidden">
        <PopUp>
          <LanguageSelector className="z-50 text-2xl" />
        </PopUp>
        <PopUp>
          <Sidebar />
        </PopUp>
      </span>

      {/* Desktop Navigation */}
      <div className="hidden flex-row items-center font-inter text-3xl text-white mix-blend-normal lg:flex">
        <PopUp>
          <LanguageSelector className="pr-4 opacity-70" />
        </PopUp>
        {navbarItems.map((item, index) => (
          <NavLink
            key={index}
            item={item}
            isHovered={hoveredItem === item.titel}
            onHover={setHoveredItem}
          />
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;