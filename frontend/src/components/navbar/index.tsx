import React, { useState, lazy, Suspense } from 'react';
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import AnimatedLogo from '@/components/navbar/components/animatedLogo';
import { useTranslation } from 'react-i18next';
import { ANIMATION_CONSTANTS, NAVBAR_ANIMATIONS } from './constants';
import useScrollPosition from '@/hooks/useScrollPosition';

const Sidebar = lazy(() => import('./sidebar/index'));


interface NavbarDataItem {
  link: string;
  titel: string;
}

const Navbar = () => {
    const [hovered, setHovered] = useState<string | null>(null);
    const { isUnderThreshold } = useScrollPosition(ANIMATION_CONSTANTS.SCROLL_THRESHOLD);

    const {t} = useTranslation();
    const navbarDaten: NavbarDataItem[] = t("navbarData", { returnObjects: true }) as NavbarDataItem[];

    return(
      <>
        <motion.nav className="fixed w-full z-40 flex justify-between px-4 md:px-8 items-center py-2 h-20 drop-shadow-customDropShadow2"
          initial="normal" 
          animate={isUnderThreshold  ? "currentPositionUnder50PX" : "normal"} 
          variants={NAVBAR_ANIMATIONS.background} 
          transition={{
            duration: ANIMATION_CONSTANTS.TRANSITION_DURATION,
            delay: ANIMATION_CONSTANTS.TRANSITION_DELAY 
          }}
        >

          <span className='mix-blend-difference z-50'>
            <AnimatedLogo />
          </span>  

          <Suspense fallback={<div></div>}>
            <span className='block lg:hidden'>
              <Sidebar />
            </span>
          </Suspense>
          
          <div className="flex-row hidden lg:flex z-50 mix-blend-normal text-white">
            {navbarDaten.map((link, index) => (
              <span className='flex justify-center items-center flex-col pt-4' key={index}>

                <Link to={link.link} onMouseEnter={() => {setHovered(link.titel)}} onMouseLeave={() => {setHovered("false")}} className="font-roboto w-full h-10 md:px-2 xl:px-6 my-1.5 font-semibold text-center flex items-center" style={{fontSize: 35}}>
                  {link.titel}
                </Link>   
                
                <svg className='' width="100%" height="16" viewBox="0 0 145 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path variants={NAVBAR_ANIMATIONS.underline} initial="hidden" animate={hovered === link.titel ? "visible": "hidden"}  d="M0 2C34.3704 2 68.7407 2 103.111 2C114.481 2 125.852 2 137.222 2C139.593 2 141.963 2 144.333 2C148.219 2 136.669 3.32019 132.889 4.22222C104.373 11.0272 76.1103 15.889 46.9444 19.7778C38.7799 20.8664 30.456 22.4688 22.2222 23C13.3405 23.573 39.9397 21.2713 48.7778 20.2222C67.9708 17.9441 87.7366 16.8651 107.056 18.5556C109.817 18.7972 124.305 22.3904 126 19" stroke="white" stroke-width="7" stroke-linecap="round"/>
                </svg> 
                          
              </span> 
            ))}
          </div>
        </motion.nav>
      </>
    )
}

export default React.memo(Navbar);