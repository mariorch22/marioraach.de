import React, { Suspense, lazy } from 'react';
import SlideUpWhenVisible from '../../animations/slideUpWhenVisible';

const Section1 = () => {

    return (
        <>
            <div className='min-h-svh min-w-screen' >
                <div className="absolute h-screen w-screen z-20">
                    <img 
                        src="high-min_small.jpg" 
                        alt="Me as a person" 
                        className="hidden md:block h-screen w-screen object-left md:object-center object-cover absolute z-20" 
                    />
                    <img 
                        src="high-min_small__small.jpg" 
                        alt="Me as a person" 
                        className="block md:hidden h-screen w-screen object-left md:object-center object-cover absolute z-20" 
                    />
                </div>

                <div className='w-full h-full flex items-end absolute z-30 md:right-20 py-24'>
                    <div className='bottom-20 mx-auto'>
                        <SlideUpWhenVisible duration={0.6} delay={0.2}>
                            <p className='text-white text-8xl md:text-[12rem] font-bold z-20 md:leading-8 '>MARIO</p>
                        </SlideUpWhenVisible>
                        <SlideUpWhenVisible duration={0.7} delay={0.4}>
                            <p className='text-white text-8xl md:text-[12rem] font-bold z-20 l-8'>RAACH</p>
                        </SlideUpWhenVisible>
                    </div>             
                </div>

            </div>
        </>
    )
}

export default React.memo(Section1);

