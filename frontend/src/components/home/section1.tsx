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
                    <div className='bottom-20 text-white font-kalam '>
                        <h3 className='text-7xl'>Hey,</h3>
                        <h1 className='text-[12rem]'>ich bin Mario.</h1>
                        <p className='text-4xl'>ein  Softwareentwickler aus Melchingen, von der schwäbischen Alb.</p>
                    </div>             
                </div>

        </div>
    )
}

export default React.memo(Section1);

