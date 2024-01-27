import React, { Suspense, lazy } from 'react';
import LazyImage from './lazyImage';
import Ehrenamt from './ehrenamt';
import { ThreeDots } from 'react-loader-spinner';
import SlideInFromSide from '../../animations/slideInFromSide';

const About_Section4 = () => {

    return (
        <>
            <div className='h-auto min-w-screen grid md:grid-cols-1 md:px-40 md:py-6' >
                <Ehrenamt />
            </div>
        </>
    )
}

export default React.memo(About_Section4);
