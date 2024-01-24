import React, { useState, useRef } from 'react';
import Arbeitserfahrung from './arbeitserfahrung';
import Bildung from './bildung';

const About_Section2 = () => {

    return (
        <>
            <div className='min-h-screen min-w-screen grid md:grid-cols-2 bg-gray-200' >
                <Arbeitserfahrung />
                <Bildung />
            </div>
        </>
    )
}

export default React.memo(About_Section2);
