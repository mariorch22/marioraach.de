import React, { useState, useRef } from 'react';
import Arbeitserfahrung from './arbeitserfahrung';
import Bildung from './bildung';

const About_Section2 = () => {

    return (
        <>
            <div className='min-h-svh min-w-screen grid md:grid-cols-2' >
                <div className='my-2 mr-2 grid grid-rows-[3fr_8fr] items-center'>
                    <h1 className='text-5xl md:text-8xl flex justify-center items-center h-32 text-gray-200'>Arbeitserfahrung</h1>
                    <img src="/about/wallpapers/industriekaufmann.jpeg" className='object-cover min-h-full rounded-r-3xl' />
                </div>
                <Arbeitserfahrung />
            </div>
        </>
    )
}

export default React.memo(About_Section2);
