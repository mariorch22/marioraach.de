import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PopUp from '../../../animations/popUp';
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar_Layout from "./sidebarLayout";

const Sidebar = () => {
    const [hamburger, setHamburger] = useState(false);

    const handleToggleHamburger = useCallback(() => {
        setHamburger(prevHamburger => !prevHamburger);
    }, []);

    return (
        <>
            <PopUp>
                <motion.div className='rounded-full p-3 z-50 relative top-0 right-0'>
                    {hamburger ? 
                        <MdClose onClick={handleToggleHamburger} className="cursor-pointer h-10 w-10" color="white" /> :
                        <RxHamburgerMenu onClick={handleToggleHamburger} className="cursor-pointer h-10 w-10" color="white" />
                    }
                </motion.div>
            </PopUp>
            
            <AnimatePresence>
                {hamburger && (
                    <motion.div
                        initial={{ opacity: 0, x: "100vw", borderTopLeftRadius: "100%", borderBottomLeftRadius: "100%" }} 
                        animate={{ opacity: 1, x: 0, borderTopLeftRadius: "0%", borderBottomLeftRadius: "0%" }}
                        exit={{ opacity: 0, x: "100vw", borderTopLeftRadius: "100%", borderBottomLeftRadius: "100%", transition: { duration: 0.7, ease: "easeInOut", delay: 0.3 } }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        className="absolute h-screen w-full flex flex-col left-0 top-0 bg-backgroundGray justify-between pb-12 z-30"
                    >
                        <Sidebar_Layout toggle={hamburger} setToggle={handleToggleHamburger} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Sidebar;
            
