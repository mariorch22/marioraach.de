import React, { Suspense, lazy } from 'react';
import Navbar from '../components/navbar';

const Section1 = lazy(() => import('../components/home/section1'));
const Section2 = lazy(() => import('../components/home/section2'));
const Section3 = lazy(() => import('../components/home/section3'));
const Section4 = lazy(() => import('../components/home/section4'));

// Divider.js
const Divider = () => (
    <div className="h-1 w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-500 via-backgroundGray to-backgroundGray"></div>
);


const Home = () => {
    return (
        <>
            <Navbar />
            <Suspense fallback={<div className='h-screen w-screen bg-backgroundGray'></div>}>
                <main className='overflow-hidden grid grid-cols-1 gap-6 bg-backgroundGray font-kalam text-white'>    
                    <Section1 />
                    <Section2 />
                    <Divider />
                    <Section3 />
                    <Divider />
                    <Section4 />
                </main>
            </Suspense>
        </>
    );
}

export default React.memo(Home)