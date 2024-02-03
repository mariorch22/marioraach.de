import React, {useState} from "react";
import { useTranslation } from 'react-i18next';
import { IoLanguageOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const LanguageSelector = () => {
    const [isClicked, setIsClicked] = useState(false);

    const {i18n} = useTranslation()

    const changeLanguage = (lng:string) => {
        i18n.changeLanguage(lng)
    }

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <motion.div 
            className='absolute h-auto w-auto flex flex-row-reverse z-30 right-0 bottom-4 md:bottom-12 pr-0 border border-white border-r-0 rounded-l-full bg-backgroundGray overflow-x-hidden'
            animate={{ x: isClicked ? 0 : 128 , opacity: isClicked ? 1 : 0.3 }}                    
            transition={{ ease: 'easeInOut' }}
        >
            <span className="w-32 flex justify-around items-center">
                <span
                    className={`w-10 h-10 bg-backgroundGray rounded-full p-2 pr-4 inline-block bg-cover z-20 cursor-pointer ${i18n.language === 'de' ? 'border-2 border-green-500' : ''}`}                    
                    style={{ backgroundImage: "url('/images/deutsch.webp')" }}
                    onClick={() => {
                        changeLanguage("de");
                        setIsClicked(false)
                      }}   
                />
                
                <span
                    className={`w-10 h-10 bg-backgroundGray rounded-full p-2 pr-4 inline-block bg-cover z-20 cursor-pointer ${i18n.language === 'en' ? 'border-2 border-green-500' : ''}`}                    
                    style={{ backgroundImage: "url('/images/englisch.webp')" }}
                    onClick={() => {
                        changeLanguage("en");
                        setIsClicked(false)
                      }}                      
                />
            </span>

            <IoLanguageOutline
                className='w-12 h-12 bg-backgroundGray text-white bg-transparent p-2 cursor-pointer z-40'
                onClick={handleClick}
            />
        </motion.div>

    )
}

export default LanguageSelector

