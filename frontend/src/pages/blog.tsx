import React from 'react';
import AnimatedPage from '../animations/pageTransition';
import SlideUpWhenVisible from '../animations/slideUpWhenVisible';
import Typewriter from '../animations/typewriter';
import Navbar from '../components/navbar';
import { useTranslation } from 'react-i18next';


interface TextContent {
    title: string;
    description: string;
    comingSoon: string;
}

const Blog = () => {
    const {t} = useTranslation();
    const blogDaten: TextContent = t("blogText", { returnObjects: true }) as TextContent;
    return (
        <>
             <AnimatedPage>
                <Navbar />
                <div className='bg-backgroundGray min-h-svh pt-20 px-4 md:px-0'>
                    <div className='w-full flex justify-center items-center flex-col gap-2 pt-20'>
                        <div>
                            <SlideUpWhenVisible y={20}>
                                <div className='text-white text-5xl md:text-8xl'>
                                    {blogDaten.title}
                                </div>
                            </SlideUpWhenVisible>
                            <SlideUpWhenVisible y={20} delay={0.7}>
                                <div className='text-white text-md md:text-2xl py-2 md:py-2'>
                                    {blogDaten.description}
                                </div>
                            </SlideUpWhenVisible>                             
                        </div>
                        <div className='text-white text-4xl md:text-8xl pt-20 md:pt-80'>
                            <Typewriter delay={1500}>
                                {blogDaten.comingSoon}
                            </Typewriter>
                        </div>
                    </div>
                </div>
            </AnimatedPage>
        </>
    )
}

export default React.memo(Blog)
