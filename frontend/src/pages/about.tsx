import React from 'react';
import AnimatedPage from '../animations/pageTransition';
import { motion } from "framer-motion";
import CountUp from '../animations/countUp';

const About = () => {

    return (
        <>
             <AnimatedPage>
                <div className='bg-red-900 min-h-screen'>
                    <span className='text-white text-8xl font-bold'><CountUp start={0} end={22} duration={3} /></span>
                </div>
            </AnimatedPage>

        </>
    )
}

export default React.memo(About)