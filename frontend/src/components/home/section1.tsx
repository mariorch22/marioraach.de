import React, { Suspense, lazy } from 'react';
import SlideUpWhenVisible from '../../animations/slideUpWhenVisible';

const Section1 = () => {

    return (
        <>
            <div className='min-h-svh min-w-screen' >
                <img src="high-min_small.jpg" alt='Me as a person' className='h-screen w-screen object-left md:object-center object-cover absolute z-20  '  /> 

                <div className='w-full h-full items-end absolute z-20 right-20 grid grid-cols-[2fr_2fr_3fr] py-32'>
                    <div></div>
                    <div></div>
                    <div>
                        <SlideUpWhenVisible duration={0.6} delay={0.2}>
                            <p className='text-white md:text-[12rem] font-bold z-20 leading-8'>MARIO</p>
                        </SlideUpWhenVisible>
                        <SlideUpWhenVisible duration={0.7} delay={0.4}>
                            <p className='text-white md:text-[12rem] font-bold z-20'>RAACH</p>
                        </SlideUpWhenVisible>
                    </div>             
                </div>

            </div>
        </>
    )
}

export default React.memo(Section1);

