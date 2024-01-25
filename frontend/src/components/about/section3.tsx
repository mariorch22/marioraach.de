import React, { Suspense, lazy } from 'react';
import LazyImage from './lazyImage';
import Bildung from './bildung';
import { ThreeDots } from 'react-loader-spinner';

const About_Section3 = () => {

    return (
        <>
            <div className='h-auto min-w-screen grid md:grid-cols-2' >
                <span className='order-last md:order-first'>
                    <Bildung />
                </span>
                <div className='my-2 ml-2 grid grid-rows-[3fr_8fr] items-center order-first md:order-none'>
                    <h1 className='text-5xl md:text-8xl flex justify-center items-center h-32 text-gray-200'>Bildung</h1>
                    <Suspense fallback={<div className='min-h-full flex justify-center items-center'><ThreeDots /></div>}>
                        <LazyImage 
                            src='/about/wallpapers/bildung.jpeg'
                            width={1920} 
                            height={1080} 
                            alt='Wallpaper'
                            className='object-cover min-h-full rounded-l-3xl'
                        />
                    </Suspense>
                </div>
            </div>
        </>
    )
}

export default React.memo(About_Section3);
