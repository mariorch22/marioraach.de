import React, { useState, useRef } from 'react';

import SlideUpWhenVisible from '../../animations/slideUpWhenVisible';

const About_Section2 = () => {

    return (
        <>
            <div className='min-h-screen min-w-screen bg-white grid grid-cols-2' >
                <p className='px-2 md:px-40 min-h-[30rem] text-gray-500 md:text-7xl flex justify-center items-center'>
                    Arbeitserfahrung
                </p>
                <div className='bg-black p-40'>
                    <p className='text-white'>Bildung</p>
                </div>


            </div>
        </>
    )
}

export default React.memo(About_Section2);
