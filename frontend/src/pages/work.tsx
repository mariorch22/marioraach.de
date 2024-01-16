import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../animations/pageTransition';

const Work = () => {

    return (
        <>
            <AnimatedPage>
                <motion.div className='bg-blue-900 min-h-screen'>
                    Homeboyf
                </motion.div>
            </AnimatedPage>
        </>
    )
}

export default React.memo(Work)
