import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SlideInFromSide from '../../animations/slideInFromSide';
import Button from '../shared/animatedButton';

const Section4 = () => {

    return (
        <>
            <div className='md:px-40 xl:px-80 py-6 xl:py-20'>
                <h1 className='text-4xl xl:text-5xl pl-8'>Kontakt</h1>
                <p className='py-4 px-4 xl:text-xl font-roboto'>
                    Haben Sie eine Projektidee, Fragen oder möchten Sie über spannende Projekte diskutieren?
                    <br/>Ich würde gerne mehr darüber erfahren.
                </p>

                <span className='w-full flex justify-end pr-4'>
                    <SlideInFromSide>
                        <motion.span  whileHover={{ scale: 1.1 }}>
                            <Button text="Kontakt" link="/contact" />
                        </motion.span>
                    </SlideInFromSide>
                </span>

            </div>
        </>
    )
}

export default React.memo(Section4);
