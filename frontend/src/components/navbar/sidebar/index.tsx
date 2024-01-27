import React, {useState, useCallback} from 'react';
import PopUp from '../../../animations/popUp';
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from 'framer-motion';
import Sidebar_Layout from "./sidebarLayout"


const Sidebar = () => {

    const [hamburger, setHamburger] = useState<boolean>(false)
    const [closedButNotOnLoad, setClosedButNotOnLoad] = useState<boolean | null>(false)

    const handleToggleHamburger = useCallback(() => {
        setHamburger(h => !h);
        setClosedButNotOnLoad(true)
        document.body.style.overflow = hamburger ? 'unset' : 'hidden';
      }, [hamburger]);

    return (
        <>
            <span className='z-50 relative top-0 right-0'>
                {hamburger ? (
                    <PopUp>
                        <motion.div className='rounded-full p-3'>
                            <MdClose onClick={handleToggleHamburger} className="cursor-pointer h-10 w-10" color="white" />
                        </motion.div>
                    </PopUp>
                ) : (
                    <PopUp>
                        <motion.div className='rounded-full p-3'>
                            <RxHamburgerMenu onClick={handleToggleHamburger} className="cursor-pointer h-10 w-10" color='white'/>
                        </motion.div>
                    </PopUp>
                )}
            </span>
            
            <span className='z-30'>
                {hamburger && (
                    <motion.div
                        initial={{ opacity: 0, x: "100vw", borderTopLeftRadius: "100%", borderBottomLeftRadius: "100%" }} 
                        animate={{ opacity: 1, x: 0, borderTopLeftRadius: "0%", borderBottomLeftRadius: "0%" }}
                        exit={{ opacity: 0, x: "-100vw", borderTopLeftRadius: "100%", borderBottomLeftRadius: "100%" }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        className="absolute h-screen w-full flex flex-col left-0 top-0 bg-backgroundGray justify-between pb-12"
                        style={{ opacity: closedButNotOnLoad ? 0 : 0 }}
                    >
                        <Sidebar_Layout toggle={hamburger} setToggle={handleToggleHamburger} />
                    </motion.div>
                )}
            </span>

            <span className='z-30'>
                {!hamburger && closedButNotOnLoad && (
                    <motion.div
                        initial={{ opacity: 1, x: 0, borderTopLeftRadius: "0%", borderBottomLeftRadius: "0%" }} 
                        animate={{ opacity: 0, x: "100vw", borderTopLeftRadius: "100%", borderBottomLeftRadius: "100%" }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        className="absolute h-screen w-full flex flex-col left-0 top-0 bg-black justify-between"
                        style={{ opacity: closedButNotOnLoad ? 0 : 0 }}
                    >
                    </motion.div>
                )}
            </span>
        </>
    );
};

export default Sidebar;
