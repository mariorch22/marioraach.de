import React from 'react';
import Button from '../../../components/shared/animatedButton';
import { motion } from 'framer-motion';
import SlideInFromSide from '../../../animations/slideInFromSide';
import { useTranslation } from 'react-i18next';
import useFormatText from '../../../hooks/useFormatText';
import { IoMdArrowDropright } from "react-icons/io";

interface HomeAboutText {
    aboutText: string;
}

export function Section2() {
    const { t } = useTranslation();
    const homeAboutText: HomeAboutText = t("homeAboutText") as  unknown as HomeAboutText;

    const formattedAboutText = useFormatText(homeAboutText.aboutText);

    return (
        <>
            <div className='md:px-40 xl:px-80 xl:pt-40 pb-6 xl:pb-10' >
                <h1 className='text-4xl xl:text-5xl pl-8'>About</h1>
                <div className='px-4 py-4'>
                    <div className='text-lg xl:text-xl text-white font-roboto'>
                        {formattedAboutText}
                    </div>
                </div>
                <div className='w-full flex justify-end pr-4'>
                    <SlideInFromSide>
                        <motion.span whileHover={{ scale: 1.1 }}>
                            <Button content={<IoMdArrowDropright className='w-full h-full' />} link="/about" />
                        </motion.span>
                    </SlideInFromSide>
                </div>
            </div>
        </>
    );
}

export default React.memo(Section2);