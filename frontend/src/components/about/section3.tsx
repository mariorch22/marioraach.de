import React, { useState, useRef } from 'react';
import Technik from './technik';
import Ehrenamt from './ehrenamt';

const About_Section3 = () => {

    return (
        <>
            <div className='bg-gray-200 min-h-svh min-w-screen grid md:grid-cols-2' >
                <Ehrenamt />
                <Technik />
            </div>
        </>
    )
}

export default React.memo(About_Section3);
