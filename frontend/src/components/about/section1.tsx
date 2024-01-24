import React, { useState, useRef } from 'react';
import Typewriter from '../../animations/typewriter';
import SlideUpWhenVisible from '../../animations/slideUpWhenVisible';

const About_Section1 = () => {

    return (
        <>
            <div className='min-w-screen grid grid-cols-1 md:grid-cols-2 bg-gray-200' >
                <p className='md:min-h-screen px-10 md:px-40 text-gray-500 text-3xl md:text-7xl bg-black rounded-br-3xl rounded-bl-3xl md:rounded-bl-none grid grid-rows-[3fr_3fr_3fr] md:mr-2 md:mb-2 order-last md:order-first h-64'>
                    <span className='hidden md:block'></span>
                    <Typewriter speed={80}>"Your brand is what people say about you when you're not in the room."</Typewriter>
                    <p className='text-xl w-full text-end'><SlideUpWhenVisible delay={6.6} y={20}>Jeff Bezos</SlideUpWhenVisible></p>
                </p>
                <div className='bg-black md:bg-gray-200 p-10 md:p-40 order-first md:order-none'>
                    <img className='rounded-full md:rounded-none mt-20 md:mt-0' src="/bild_im_hemd.jpg" />
                </div>
            </div>
        </>
    )
}

export default React.memo(About_Section1);
