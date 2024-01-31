import React, { useCallback, lazy, Suspense } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { navbarDataSidebar } from "../../../data/navbar";

const SidebarLinks = lazy(() => import("./sidebarLinks"));

interface SidebarProps {
  toggle: boolean;
  setToggle: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const Sidebar_Layout: React.FC<SidebarProps> = ({ toggle, setToggle }) => {
  const handleSidebarToggle = useCallback(() => {
    setToggle(prevToggle => !prevToggle);
  }, [setToggle]);

  return (
    <div className="w-full min-h-full flex flex-col left-0 pt-28 justify-between">
      <div className="flex flex-col justify-between gap-4">
        {navbarDataSidebar.map((link, index) => (
            <motion.div key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: link.delay }}
            >
                <Link to={link.link} onClick={handleSidebarToggle} className="w-full pl-10 my-1.5 text-white text-6xl font-sans font-medium">
                    {link.titel}
                </Link>
            </motion.div>
            ))}
      </div>

      <Suspense fallback={<div>Lädt...</div>}>
        <SidebarLinks />
      </Suspense>
    </div>
  );
}

export default React.memo(Sidebar_Layout);