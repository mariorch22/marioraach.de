import { motion, AnimatePresence } from 'framer-motion';
import PopUp from '@/animations/popUp';
import Sidebar_Layout from "@/components/navbar/sidebar/sidebarLayout";
import useToggle from '@/hooks/useToggle';

const Sidebar = () => {
    const [hamburger, setHamburger] = useToggle(false);

    return (
        <>
            <PopUp>
                <motion.div className='rounded-full z-50 relative top-0 right-0'>
                <div onClick={setHamburger} className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-3xl p-2">
                    <div className="space-y-2">
                        <span className={`block h-1 w-10 origin-center rounded-full bg-slate-500 transition-transform ease-in-out ${hamburger ? 'translate-y-1.5 rotate-45' : ''}`}></span>
                        <span className={`block h-1 origin-center rounded-full bg-white transition-transform ease-in-out ${hamburger ? 'w-10 -translate-y-1.5 -rotate-45' : 'w-8'}`}></span>
                    </div>
                </div>
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
                        <Sidebar_Layout toggle={hamburger} setToggle={setHamburger} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Sidebar;
            
