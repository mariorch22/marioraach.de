import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../animations/pageTransition';
import Navbar from '../components/navbar';

const Work = () => {

    return (
        <>
            <AnimatedPage>
                <Navbar />
                <motion.div className='bg-blue-900 min-h-screen min-w-screen'>
                    <div>
                        <img />
                        <h1>TV Melchingen</h1>
                        <h2>Design & Development & Deployment 2023</h2>
                    </div>
                </motion.div>
            </AnimatedPage>
        </>
    )
}

export default React.memo(Work)
