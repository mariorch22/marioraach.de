import React, { useState, useRef } from 'react';
import Typewriter from '../../animations/typewriter';
import SlideUpWhenVisible from '../../animations/slideUpWhenVisible';

const About_Section1 = () => {

    return (
        <>
            <div className='min-h-screen min-w-screen bg-black grid grid-cols-2' >
                <p className='px-2 md:px-40 min-h-[30rem] text-gray-500 md:text-7xl flex justify-center items-center flex-col'>
                    <Typewriter speed={80}>"Your brand is what people say about you when you're not in the room."</Typewriter>
                    <p className='text-xl w-full text-end'><SlideUpWhenVisible delay={6.6} y={20}>Jeff Bezos</SlideUpWhenVisible></p>
                    
                </p>
                <div className='bg-white p-40'>
                    <img src="/bild_im_hemd.jpg" />
                </div>


            </div>
        </>
    )
}

export default React.memo(About_Section1);
