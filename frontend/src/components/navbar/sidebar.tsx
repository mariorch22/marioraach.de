import { Link } from "react-router-dom";
import React, {useCallback} from 'react';
import { motion } from "framer-motion";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { navbarDataSidebar } from "../../data/navbar";

interface SidebarProps {
    toggle: boolean;
    setToggle: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  }

const Sidebar: React.FC<SidebarProps> = ({ toggle, setToggle }) => {

    const handleSidebarToggle = useCallback(() => {
        setToggle(prevToggle => !prevToggle);
      }, [setToggle]);
      
    
    return(
        <>
            <div className="w-full min-h-full z-30 flex flex-col left-0 pt-28 fixed justify-between">
                <div className="flex flex-col justify-between gap-4">
                    {navbarDataSidebar.map((link, index) => (
                        <motion.div key={index} 
                            initial={{ opacity: 0, y: 10 }} 
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: link.delay }}
                        >
                            <Link to={link.link} onClick={handleSidebarToggle} className={"w-full px-10 my-1.5 text-white text-4xl font-sans font-medium"}>
                                <span>{link.titel}</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>    
                <div className="flex w-full justify-around px-20 py-6">
                    <a href="https://www.youtube.com/@tvmelchingen3274" rel="noopener noreferrer" >
                        <FaLinkedin color="white" size={40} />
                    </a>
                    <a href="https://www.instagram.com/tvmelchingen1912/" rel="noopener noreferrer" >
                        <FaSquareXTwitter color="white" size={40} />
                    </a>
                </div>
            </div>
        </>
    )
}

export default React.memo(Sidebar);
