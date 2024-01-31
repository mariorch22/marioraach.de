import React, { Suspense, lazy } from 'react';
import SlideUpWhenVisible from '../../animations/slideUpWhenVisible';

const Section1 = () => {

    return (
        <div className='h-svh px-2 pt-10 grid grid-rows-[1fr_1fr] grid-cols-1 md:grid-cols-[1fr_1fr] md:grid-rows-1 items-center justify-center' >

            <div className='w-full md:w-auto h-full flex items-end justify-center pt-12 xl:pt-20'>
                <span className='rounded-full h-96 md:h-auto w-96 md:w-full flex justify-center px-6 overflow-hidden'>
                    <img 
                        className='pt-8 xl:px-4 drop-shadow-customDropShadow w-auto h-full md:h-[40rem] xl:h-auto xl:w-full xl:max-w-[33rem] md:pt-20 xl:pt-0'
                        src="/hoddie/h.png"
                        srcSet='/hoddie/hh.png 767w, /hoddie/hoddie.png 800w'
                    />
                </span>
            </div>

            <div className='w-full pb-6 md:w-auto h-full md:max-h-screen text-gray-200 font-kalam flex flex-col justify-center xl:pt-80'>
                <SlideUpWhenVisible delay={0.1}>
                    <h3 className='text-3xl xl:text-[5rem] text-center pr-10 pt-6 md:pt-0 pb-3 xl:pb-20 cursor-default'>
                        Hey, ich bin
                    </h3>
                </SlideUpWhenVisible>
                <SlideUpWhenVisible delay={0.2}>
                    <h1 className='text-9xl xl:text-[15rem] leading-8 text-center xl:text-start pr-14 xl:pr-24 text-green-200 pt-10 cursor-default'>
                        Mario
                    </h1>
                </SlideUpWhenVisible>
                <SlideUpWhenVisible delay={0.3}>
                    <h1 className='text-9xl xl:text-[15rem] leading-12 text-center xl:text-start pl-14 xl:pl-24 text-red-200 cursor-default'>
                        raach
                    </h1>
                </SlideUpWhenVisible>
            </div>

        </div>
    )
}

export default React.memo(Section1);

