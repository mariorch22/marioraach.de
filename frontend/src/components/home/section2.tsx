import React from 'react';
import Button from '../shared/animatedButton';
import { motion } from 'framer-motion';
import SlideInFromSide from '../../animations/slideInFromSide';
import { useTranslation } from 'react-i18next';
import useFormatText from '../../hooks/useFormatText';
import { IoPersonOutline } from "react-icons/io5";

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
                    <p className='text-lg xl:text-xl text-white font-roboto'>
                        {formattedAboutText}
                    </p>
                </div>
                <span className='w-full flex justify-end pr-4'>
                    <SlideInFromSide>
                        <motion.span whileHover={{ scale: 1.1 }}>
                            <Button content={<IoPersonOutline className='w-full h-full p-8' />} link="/about" />
                        </motion.span>
                    </SlideInFromSide>
                </span>
            </div>
        </>
    );
}

export default React.memo(Section2);