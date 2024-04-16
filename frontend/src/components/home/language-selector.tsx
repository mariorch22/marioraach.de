import { useCallback } from "react";
import { useTranslation } from 'react-i18next';
import { IoLanguageOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import useToggle from "../../hooks/useToggle";

const variantsDE = {
    hidden: {
      scale: 0,
      opacity: 0,
      y: 0,
      x: 0,
      transition: {
        ease: "easeInOut",
        delay: 0.3,
      },
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: -70,
      x: -20,
      transition: {
        ease: "easeInOut",
        delay: 0.2,
      },
    },
  };
const variantsEN = {
    hidden: {
      scale: 0,
      opacity: 0,
      y: 0,
      x: 0,
      transition: {
        ease: "easeInOut",
        delay: 0.4,
      },
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: -20,
      x: -70,
      transition: {
        ease: "easeInOut",
        delay: 0.1,
      },
    },
  };

const LanguageSelector = () => {
    const [isClicked, setIsClicked] = useToggle(false);
    const { i18n } = useTranslation();

    const changeLanguage = useCallback((lng:string) => {
        i18n.changeLanguage(lng);
        setIsClicked(); // Schließt das Menü nach der Auswahl
    }, [i18n]);

    return (
        <div className="mb-12 mr-8 flex w-40 h-40 relative">
          <IoLanguageOutline
            className="w-12 h-12 cursor-pointer absolute right-0 bottom-0 z-50"
            onClick={setIsClicked}
          />

          <div className="absolute w-40 h-40">
            <motion.span
              className={`absolute bottom-0 right-0 w-12 h-12 bg-backgroundGray rounded-full p-2 pr-4 inline-block bg-cover z-20 cursor-pointer ${i18n.language === 'de' ? 'border-2 border-green-500' : ''}`}
              style={{ backgroundImage: `url(/images/deutsch.webp)` }}
              onClick={() => changeLanguage('de')}
              variants={variantsDE}
              initial="hidden"
              animate={isClicked ? "visible" : "hidden"}
            />

            <motion.span
              className={`absolute bottom-0 right-0 w-12 h-12 bg-backgroundGray rounded-full p-2 pr-4 inline-block bg-cover z-20 cursor-pointer ${i18n.language === 'en' ? 'border-2 border-green-500' : ''}`}
              style={{ backgroundImage: `url(/images/englisch.webp)` }}
              onClick={() => changeLanguage('en')}
              variants={variantsEN}
              initial="hidden"
              animate={isClicked ? "visible" : "hidden"}
            />
          </div>
        </div>

    );
}

export default LanguageSelector;
