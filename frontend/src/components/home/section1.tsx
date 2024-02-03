import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SlideUpWhenVisible from '../../animations/slideUpWhenVisible';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../language-selector';

interface HomeLandingpageText {
    landingpageText: string;
}

const Section1 = () => {

    const { t } = useTranslation();
    const homeLandingpageText: HomeLandingpageText = t("homeLandingpageText") as  unknown as HomeLandingpageText;

    return (
        <div className='h-svh px-2 pt-10 grid grid-rows-[1fr_1fr] grid-cols-1 md:grid-cols-[1fr_1fr] md:grid-rows-1 items-center justify-center' >

            <div className='w-full md:w-auto h-full flex items-end justify-center pt-12 xl:pt-20'>
                <span className='rounded-full h-80 md:h-auto w-80 md:w-full flex justify-center px-6 overflow-hidden'>
                    <img 
                        className='pt-8 xl:px-4 drop-shadow-customDropShadow w-auto h-full md:h-[40rem] xl:h-auto xl:w-full xl:max-w-[33rem] md:pt-20 xl:pt-0'
                        src="/images/hoddie/hdddie.png"
                        srcSet='/images/hoddie/hh.png 767w, /images/hoddie/hoddie.png 1400w'
                        width={400}
                        height={800}
                        alt='Bild von mir stehend'
                    />
                </span>
            </div>

            <div className='w-full pb-6 md:w-auto h-full md:max-h-screen text-gray-200 font-kalam flex flex-col justify-center xl:pt-80'>
                <SlideUpWhenVisible delay={0.1}>
                    <h3 className='text-3xl xl:text-[5rem] text-center pr-10 pt-6 md:pt-0 pb-3 xl:pb-20 cursor-default text-c_lightgray'>
                        <span className=''>Hey</span>, {homeLandingpageText.landingpageText}
                    </h3>
                </SlideUpWhenVisible>
                <SlideUpWhenVisible delay={0.2}>
                    <h1 className='text-9xl xl:text-[15rem] leading-8 text-center xl:text-start pr-14 xl:pr-24 pt-10 cursor-default text-c_lightgray'>
                        Mario
                    </h1>
                </SlideUpWhenVisible>
                <SlideUpWhenVisible delay={0.3}>
                    <h1 className='text-9xl xl:text-[15rem] leading-12 text-center xl:text-start pl-14 xl:pl-24 cursor-default'>
                        raach
                    </h1>
                </SlideUpWhenVisible>
            </div>

            <LanguageSelector />

        </div>
    )
}

export default React.memo(Section1);

