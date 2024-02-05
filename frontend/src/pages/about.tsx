import React, { Suspense } from 'react';
import AnimatedPage from '../animations/pageTransition';
import Navbar from '../components/navbar';

const About_Section1 = React.lazy(() => import("../components/about/section1"));
const About_Section2 = React.lazy(() => import("../components/about/section2"));
const About_Section4 = React.lazy(() => import("../components/about/section4"));
const About_Section5 = React.lazy(() => import("../components/about/section5"));

const About = () => {
    return (
        <Suspense fallback={<div>Lädt...</div>}>
            <AnimatedPage>
                <Navbar />
                <div className='flex flex-col gap-8 bg-backgroundGray overflow-hidden'>
                    <About_Section1 />
                    <div className="divider"></div>
                    <About_Section2 />
                    <div className="divider"></div>
                    <About_Section4 />
                    <div className="divider"></div>
                    <About_Section5 />
                </div>
            </AnimatedPage>
        </Suspense>
    );
}

export default React.memo(About);
