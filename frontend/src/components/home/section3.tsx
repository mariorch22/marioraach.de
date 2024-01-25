import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SlideUpWhenVisible from '../../animations/slideUpWhenVisible';

const Section3 = () => {

    return (
        <>
            <div className='min-h-screen bg-black' >
                <div className='text-white'>
                    Hier gehts zu meinem Blog
                </div>
            </div>
        </>
    )
}

export default React.memo(Section3);
