import React, { useState, useEffect, useCallback } from 'react';
import { motion } from "framer-motion"
import { MdClose } from "react-icons/md"
import { RxHamburgerMenu } from "react-icons/rx"
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";
import PopUp from '../../animations/popUp';
import { navbarData } from '../../data/navbar';
import AnimatedLogo from './animatedLogo';

const Navbar = () => {

    const [hamburger, setHamburger] = useState<boolean | null>(false)
    const [closedButNotOnLoad, setClosedButNotOnLoad] = useState<boolean | null>(false)

    const handleToggleHamburger = useCallback(() => {
      setHamburger(h => !h);
      setClosedButNotOnLoad(true)
      document.body.style.overflow = hamburger ? 'unset' : 'hidden';
    }, [hamburger]);
    
    const [currentPositionUnder50PX, setCurrentPositionUnder50PX] = useState<boolean | null>(true)
    const [scrollPosition, setScrollPosition] = useState<number | null>(0);

    useEffect(() => {
      const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      setCurrentPositionUnder50PX(currentPosition < 50);
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => {
      window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const HintergrundAnimationNavbarOnScroll = {
      normal: { backgroundColor: "rgba(0, 0, 0, 0.4)" },
      currentPositionUnder50PX: { backgroundColor: "rgba(0, 0, 0, 0.0)" }
    };

    const [hovered, setHovered] = useState<string | null>(null);

    const animatedNavbarUnderline = {
      hidden: {
        pathLength: 0,
        opacity: 0,
      },
      visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
          delay: 0.2
        }
      },
    };

    return(
      <>
        <motion.nav 
          className="fixed w-full z-40 flex justify-between px-4 md:px-8 items-center py-2 h-20 drop-shadow-lg " 
          initial="normal" 
          animate={currentPositionUnder50PX ? "currentPositionUnder50PX" : "normal"} 
          variants={HintergrundAnimationNavbarOnScroll} 
          transition={{ duration: 0.6, delay: 0.3 }}
        >

        <AnimatedLogo />
        
          <div className="flex-row hidden lg:flex">
            {navbarData.map((data, index) => (
              <span className='flex justify-center items-center flex-col pt-4' key={index}>
                  <Link to={data.link} onMouseEnter={() => {setHovered(data.titel)}} onMouseLeave={() => {setHovered("false")}} className={"w-full h-10 md:px-1 xl:px-6 my-1.5 text-white font-sans font-semibold text-center flex items-center"} style={{fontSize: 35}}>{data.titel}</Link>   
                  <svg className='' width="100%" height="16" viewBox="0 0 145 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path variants={animatedNavbarUnderline} initial="hidden" animate={hovered === data.titel ? "visible": "hidden"}  d="M0 2C34.3704 2 68.7407 2 103.111 2C114.481 2 125.852 2 137.222 2C139.593 2 141.963 2 144.333 2C148.219 2 136.669 3.32019 132.889 4.22222C104.373 11.0272 76.1103 15.889 46.9444 19.7778C38.7799 20.8664 30.456 22.4688 22.2222 23C13.3405 23.573 39.9397 21.2713 48.7778 20.2222C67.9708 17.9441 87.7366 16.8651 107.056 18.5556C109.817 18.7972 124.305 22.3904 126 19" stroke="white" stroke-width="5" stroke-linecap="round"/>
                  </svg>           
              </span> 
            ))}   
          </div>  

          <div className="block lg:hidden">
            {hamburger ? (
              <PopUp>
                <motion.div className='rounded-full p-3'>
                  <MdClose onClick={handleToggleHamburger} className="cursor-pointer h-10 w-10" color="white" />
                </motion.div>
              </PopUp>
            ) : (
              <PopUp>
                <motion.div className='rounded-full p-3'>
                  <RxHamburgerMenu onClick={handleToggleHamburger} className="cursor-pointer h-10 w-10 z-50" color='white'/>
                </motion.div>
              </PopUp>
            )}
          </div>

        </motion.nav>

        {hamburger && (
          <motion.div
            initial={{ opacity: 0, x: "100vw", borderTopLeftRadius: "100%", borderBottomLeftRadius: "100%" }} 
            animate={{ opacity: 1, x: 0, borderTopLeftRadius: "0%", borderBottomLeftRadius: "0%" }}
            exit={{ opacity: 0, x: "-100vw", borderTopLeftRadius: "100%", borderBottomLeftRadius: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full min-h-full z-30 flex flex-col left-0 fixed bg-black justify-between"
            style={{ opacity: closedButNotOnLoad ? 0 : 0 }}
          >
            <Sidebar toggle={hamburger} setToggle={handleToggleHamburger} />
          </motion.div>
        )}

        {!hamburger && closedButNotOnLoad && (
          <motion.div
            initial={{ opacity: 1, x: 0, borderTopLeftRadius: "0%", borderBottomLeftRadius: "0%" }} 
            animate={{ opacity: 0, x: "100vw", borderTopLeftRadius: "100%", borderBottomLeftRadius: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full min-h-full z-30 flex flex-col left-0 fixed bg-black justify-between"
            style={{ opacity: closedButNotOnLoad ? 0 : 0 }}
          >
          </motion.div>
        )}

      </>

    )
}

export default React.memo(Navbar);