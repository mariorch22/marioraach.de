import React, { Suspense, lazy } from 'react';
import LazyImage from './lazyImage';
import Bildung from './bildung';
import { ThreeDots } from 'react-loader-spinner';
import SlideInFromSide from '../../animations/slideInFromSide';
import Arbeitserfahrung from './arbeitserfahrung';

const About_Section3 = () => {

    return (
        <>
            <div className='h-auto min-w-screen grid md:grid-cols-2 md:gap-16 md:px-40 md:py-16' >
                <Arbeitserfahrung />
                <Bildung />
            </div>
        </>
    )
}

export default React.memo(About_Section3);
