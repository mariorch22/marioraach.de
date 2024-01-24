import React from 'react';
import AnimatedPage from '../animations/pageTransition';
import About_Section1 from "../components/about/section1"
import About_Section2 from "../components/about/section2"
import About_Section3 from "../components/about/section3"
import Navbar from '../components/navbar';


const About = () => {

    return (
        <>
             <AnimatedPage>
                <Navbar />
                <About_Section1 />
                <About_Section2 />
                <About_Section3 />
            </AnimatedPage>

        </>
    )
}

export default React.memo(About)