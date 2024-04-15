import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import DrawingCanvas from '../components/work/canvas';
const Work = () => {

    return (
        <>
                <Navbar />
                <motion.div className='bg-blue-900 min-h-screen min-w-screen flex justify-center items-center'>
                    <div>
                        <h1 className='text-5xl text-center my-4'>Canvas</h1>
                        <DrawingCanvas backgroundColor="#000000" scale={10} />

                    </div>
                </motion.div>
        </>
    )
}

export default React.memo(Work)
