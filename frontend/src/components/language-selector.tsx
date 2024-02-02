import React, {useState} from "react";
import { useTranslation } from 'react-i18next';
import { IoLanguageOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const LanguageSelector = () => {
    
    const [isClicked, setIsClicked] = useState(false);

    const {i18n} = useTranslation()

    const changeLanguage = (lng:any) => {
        i18n.changeLanguage(lng)
    }

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div className='fixed h-auto flex flex-col-reverse gap-4 z-50 right-0 top-24 pr-0'>
            <motion.span
                className="w-12 h-12 md:w-20 md:h-20 bg-backgroundGray rounded-full p-2 inline-block bg-cover z-20"
                style={{ backgroundImage: "url('/images/englisch.webp')" }}
                animate={{ y: isClicked ? 0 : -100 , opacity: isClicked ? 1 : 0 }}
                transition={{ ease: 'easeInOut', stiffness: 300 }}
                onClick={() => changeLanguage("en")}
            />
            <motion.span
                className="w-12 h-12 md:w-20 md:h-20 bg-backgroundGray rounded-full p-2 pr-4 inline-block bg-cover z-20"
                style={{ backgroundImage: "url('/images/deutsch.webp')" }}
                animate={{ y: isClicked ? 0 : -50 , opacity: isClicked ? 1 : 0 }}                    
                transition={{ ease: 'easeInOut', stiffness: 300 }}
                onClick={() => changeLanguage("de")}
            />
            <IoLanguageOutline
                className='w-12 h-12 md:w-20 md:h-20 bg-backgroundGray border border-white text-white rounded-l-full p-2 pr-4 cursor-pointer z-40'
                onClick={handleClick}
            />
        </div>

    )
}

export default LanguageSelector