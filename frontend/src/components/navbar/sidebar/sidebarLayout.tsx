import React, { useCallback, lazy, Suspense } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

interface NavbarDataItemSidebar {
  link: string;
  titel: string;
  delay: number;
}

interface SidebarProps {
  toggle: boolean;
  setToggle: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const Sidebar_Layout: React.FC<SidebarProps> = ({ toggle, setToggle }) => {

  const {t} = useTranslation();

  const navbarDatenSidebar: NavbarDataItemSidebar[] = t("navbarDataSidebar", { returnObjects: true }) as NavbarDataItemSidebar[];

  const handleSidebarToggle = useCallback(() => {
    setToggle(prevToggle => !prevToggle);
  }, [setToggle]);

  return (
    <div className="w-full min-h-full flex flex-col left-0 pt-28 justify-between z-50">
      <div className="flex flex-col justify-between gap-4">
        {navbarDatenSidebar.map((link, index) => (
            <motion.div key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: link.delay }}
            >
                <Link to={link.link} onClick={handleSidebarToggle} className="w-full pl-10 my-1.5 text-white text-6xl font-roboto font-medium">
                    {link.titel}
                </Link>
            </motion.div>
            ))}
      </div>
    </div>
  );
}

export default React.memo(Sidebar_Layout);