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
                    Homeboyf
                    <div style={{
                        minHeight: '100vh',
                        width: "100vw",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '10rem',


                        }}>
                        <section style={{
                            background: 'black',
                            minHeight: '100vh',
                            minWidth: '50vw',
                            position: 'absolute',
                            top: 0,
                            left:"50%"
                        }}></section>
                        <span style={{
                            color: 'white',
                            mixBlendMode: 'difference'
                        }}>Java script</span>
                        </div>

                </motion.div>
            </AnimatedPage>
        </>
    )
}

export default React.memo(Work)
