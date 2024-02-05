import React, { useState, useCallback } from "react";
import { useTranslation } from 'react-i18next';
import { IoLanguageOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const languageOptions = [
  { lang: 'de', imageUrl: '/images/deutsch.webp' },
  { lang: 'en', imageUrl: '/images/englisch.webp' },
];

const LanguageSelector = () => {
    const [isClicked, setIsClicked] = useState(false);
    const { i18n } = useTranslation();

    const changeLanguage = useCallback((lng:string) => {
        i18n.changeLanguage(lng);
        setIsClicked(false); // Schließt das Menü nach der Auswahl
    }, [i18n]);

    const handleClick = useCallback(() => {
        setIsClicked(current => !current);
    }, []);

    return (
        <motion.div 
            className="h-auto w-auto flex flex-row-reverse z-30 right-0 mb-4 pr-0 border border-white border-r-0 rounded-l-full bg-backgroundGray overflow-x-hidden float-end"
            animate={{ x: isClicked ? 0 : 128, opacity: isClicked ? 1 : 0.3 }}                    
            transition={{ ease: 'easeInOut' }}
        >
            <span className="w-32 flex justify-around items-center">
                {languageOptions.map(({ lang, imageUrl }) => (
                    <span
                        key={lang}
                        className={`w-10 h-10 bg-backgroundGray rounded-full p-2 pr-4 inline-block bg-cover z-20 cursor-pointer ${i18n.language === lang ? 'border-2 border-green-500' : ''}`}
                        style={{ backgroundImage: `url('${imageUrl}')` }}
                        onClick={() => changeLanguage(lang)}
                    />
                ))}
            </span>
            <IoLanguageOutline
                className="w-12 h-12 bg-backgroundGray text-white bg-transparent p-2 cursor-pointer z-40"
                onClick={handleClick}
            />
        </motion.div>
    );
}

export default LanguageSelector;
