import React from 'react';
import Button from '../shared/animatedButton';
import SlideInFromSide from '../../animations/slideInFromSide';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import useFormatText from '../../hooks/useFormatText';

interface HomeBlogText {
    welcomeText: string;
}

const Section3 = () => {

    const { t } = useTranslation();
    const homeBlogText: HomeBlogText = t("homeBlogText") as  unknown as HomeBlogText;

    const formattedAboutText = useFormatText(homeBlogText.welcomeText);

    return (
        <>
            <div className='md:px-40 xl:px-80 py-6 xl:py-20' >
                <h1 className='text-4xl xl:text-5xl pl-8'>Blog</h1>
                <div className='px-4 py-4'>
                    <p className='text-lg md:text-xl text-white font-roboto'>
                        {formattedAboutText}
                    </p>
                </div>
                <span className='w-full flex justify-end pr-4'>
                    <SlideInFromSide>
                        <motion.span  whileHover={{ scale: 1.1 }}>
                            <Button text="Blog" link="/blog" />
                        </motion.span>
                    </SlideInFromSide>
                </span>
            </div>
        </>
    )
}

export default React.memo(Section3);
