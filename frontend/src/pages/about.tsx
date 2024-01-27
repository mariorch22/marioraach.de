import React from 'react';
import AnimatedPage from '../animations/pageTransition';
import About_Section1 from "../components/about/section1"
import About_Section2 from "../components/about/section2"
import About_Section4 from "../components/about/section4"
import About_Section5 from "../components/about/section5"
import Navbar from '../components/navbar';
import { Separator } from '../shadn/components/ui/separator';


const About = () => {

    return (
        <>
             <AnimatedPage>
                
                <Navbar />
                <div className='flex flex-col gap-8 bg-backgroundGray overflow-hidden'>
                    <About_Section1 />
                    <div className="h-1 w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-500 via-backgroundGray to-backgroundGray"></div>
                    <About_Section2 />
                    <div className="h-1 w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-500 via-backgroundGray to-backgroundGray"></div>
                    <About_Section4 />
                    <div className="h-1 w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-500 via-backgroundGray to-backgroundGray"></div>
                    <About_Section5 />
                </div>
            </AnimatedPage>

        </>
    )
}

export default React.memo(About)