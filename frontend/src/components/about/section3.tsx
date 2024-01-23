import React, { useState, useRef } from 'react';

import SlideUpWhenVisible from '../../animations/slideUpWhenVisible';

const About_Section3 = () => {

    return (
        <>
            <div className='min-h-screen min-w-screen bg-black grid grid-cols-2' >
                <p className='px-2 md:px-40 min-h-[30rem] text-gray-500 md:text-7xl flex justify-center items-center'>
                    Ehrenamt
                </p>
                <div className='bg-white p-40'>
                    Technik
                </div>


            </div>
        </>
    )
}

export default React.memo(About_Section3);
