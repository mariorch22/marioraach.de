import Technik from './technik';
import React, { Suspense, lazy } from 'react';
import LazyImage from './lazyImage';
import { ThreeDots } from 'react-loader-spinner';
import SlideInFromSide from '../../animations/slideInFromSide';

const About_Section5 = () => {

    return (
        <>
            <div className='min-h-svh min-w-screen grid md:grid-cols-2' >
                <span className='order-last md:order-first'>
                    <Technik />                    
                </span>

                <div className='mt-2 ml-2 grid grid-rows-[3fr_8fr] items-center order-first md:order-none'>
                    <h1 className='text-5xl md:text-8xl flex justify-center items-center h-32 text-center text-gray-200'>Technische Skills</h1>
                    <SlideInFromSide from='right'>
                        <Suspense fallback={<div className='min-h-full flex justify-center items-center'><ThreeDots /></div>}>
                            <LazyImage 
                                src='/about/wallpapers/technisch_1.jpg'
                                width={1920} 
                                height={1080} 
                                alt='Wallpaper'
                                className='object-cover min-h-full rounded-tl-3xl rounded-bl-3xl md:rounded-bl-none' 
                            />
                        </Suspense>
                    </SlideInFromSide>
                </div>
            </div>
        </>
    )
}

export default React.memo(About_Section5);
