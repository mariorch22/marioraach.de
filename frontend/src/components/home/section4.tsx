import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SlideInFromSide from '../../animations/slideInFromSide';
import Button from '../shared/animatedButton';
import { useTranslation } from 'react-i18next';
import useFormatText from '../../hooks/useFormatText';

interface HomeKontaktText {
    title: string;
    contactText: string;
}


const Section4 = () => {

    const { t } = useTranslation();
    const homeKontaktText: HomeKontaktText = t("homeKontaktText") as  unknown as HomeKontaktText;

    const formattedKontaktText = useFormatText(homeKontaktText.contactText);

    return (
        <>
            <div className='md:px-40 xl:px-80 py-6 xl:py-20'>
                <h1 className='text-4xl xl:text-5xl pl-8'>{homeKontaktText.title}</h1>
                <p className='py-4 px-4 xl:text-xl font-roboto'>
                    {formattedKontaktText}
                </p>

                <span className='w-full flex justify-end pr-4'>
                    <SlideInFromSide>
                        <motion.span  whileHover={{ scale: 1.1 }}>
                            <Button text="Kontakt" link="/contact" />
                        </motion.span>
                    </SlideInFromSide>
                </span>

            </div>
        </>
    )
}

export default React.memo(Section4);
