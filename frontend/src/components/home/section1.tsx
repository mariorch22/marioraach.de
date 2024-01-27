import React, { Suspense, lazy } from 'react';

const SlideUpWhenVisible = lazy(() => import('../../animations/slideUpWhenVisible'));

const Section1 = () => {

    return (
        <div className='min-h-svh min-w-screen bg-backgroundGray' >
            <div className="h-screen w-screen z-20">
            <img 
                src="high-min_small.jpg" 
                srcSet="high-min_small.jpg 767w, high-min_large.jpg 768w" 
                sizes="(max-width: 767px) 767px, 768px"
                alt="Me as a person" 
                className="h-screen w-screen object-cover absolute z-20"
            />

            </div>
                

                <div className='w-full h-full flex items-end absolute z-30 md:right-20 py-24'>
                    <div className='bottom-20 mx-auto'>
                        <Suspense fallback={<div>Loading...</div>}>
                            <SlideUpWhenVisible duration={0.6} delay={0.2}>
                                <p className='text-white text-8xl md:text-[12rem] font-bold z-20 md:leading-8 '>MARIO</p>
                            </SlideUpWhenVisible>
                        </Suspense>
                        <Suspense fallback={<div>Loading...</div>}>
                            <SlideUpWhenVisible duration={0.7} delay={0.4}>
                                <p className='text-white text-8xl md:text-[12rem] font-bold z-20 l-8'>RAACH</p>
                            </SlideUpWhenVisible>
                        </Suspense>
                    </div>             
                </div>

        </div>
    )
}

export default React.memo(Section1);

