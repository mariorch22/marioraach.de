import React, { useState, useRef } from 'react';
import Arbeitserfahrung from './arbeitserfahrung';
import Bildung from './bildung';

const About_Section3 = () => {

    return (
        <>
            <div className='h-auto min-w-screen grid md:grid-cols-2' >
                <span className='order-last md:order-first'>
                    <Bildung />
                </span>
                <div className='my-2 ml-2 grid grid-rows-[3fr_8fr] items-center order-first md:order-none'>
                    <h1 className='text-5xl md:text-8xl flex justify-center items-center h-32 text-gray-200'>Bildung</h1>
                    <img src="/about/wallpapers/bildung.jpeg" className='object-cover min-h-full rounded-l-3xl' />
                </div>
            </div>
        </>
    )
}

export default React.memo(About_Section3);
