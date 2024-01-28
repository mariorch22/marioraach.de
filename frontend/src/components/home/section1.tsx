import React, { Suspense, lazy } from 'react';
const SlideUpWhenVisible = lazy(() => import('../../animations/slideUpWhenVisible'));

const Section1 = () => {

    return (
        <div className='min-h-svh min-w-screen bg-backgroundGray' >
            <div className="h-screen w-screen z-20">
                <img 
                    src="bg-small.webp" 
                    alt="Me as a person" 
                    className="h-screen w-screen object-left md:object-center object-cover absolute z-20" 
                    srcSet="bg-small.webp 767w, bg-big.webp 768w"
                />
            </div>
                

                <div className='w-full h-full flex items-end justify-center md:justify-end absolute z-30 bottom-0 md:bottom-0 md:right-20 py-24'>
                    <div className='bottom-20 '>
                        <Suspense fallback={<div>Loading...</div>}>
                            <SlideUpWhenVisible duration={0.6} delay={0.2}>
                                <p className='text-white text-end text-8xl md:text-[12rem] font-bold z-20 md:leading-8 font-glitch'>MARIO</p>
                            </SlideUpWhenVisible>
                        </Suspense>
                        <Suspense fallback={<div>Loading...</div>}>
                            <SlideUpWhenVisible duration={0.7} delay={0.4}>
                                <p className='text-white text-end text-8xl md:text-[12rem] font-bold z-20 l-8 font-glitch'>RAACH</p>
                            </SlideUpWhenVisible>
                        </Suspense>
                    </div>             
                </div>

        </div>
    )
}

export default React.memo(Section1);

