import React from 'react';
import AnimatedPage from '../animations/pageTransition';
import About_Section1 from "../components/about/section1"
import About_Section2 from "../components/about/section2"
import About_Section3 from "../components/about/section3"
import About_Section4 from "../components/about/section4"
import About_Section5 from "../components/about/section5"
import Navbar from '../components/navbar';
import { Separator } from '../shadn/components/ui/separator';


const About = () => {

    return (
        <>
             <AnimatedPage>
                
                <Navbar />
                <div className='flex flex-col gap-8 bg-black overflow-hidden'>
                    <About_Section1 />
                    <Separator className='w-auto mx-8 md:mx-20' />
                    <About_Section2 />
                    <Separator className='w-auto mx-8 md:mx-20' />
                    <About_Section3 />
                    <Separator className='w-auto mx-8 md:mx-20' />
                    <About_Section4 />
                    <Separator className='w-auto mx-8 md:mx-20' />
                    <About_Section5 />
                </div>
            </AnimatedPage>

        </>
    )
}

export default React.memo(About)