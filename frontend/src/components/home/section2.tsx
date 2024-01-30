import React from 'react';
import Button from '../shared/animatedButton';
import { motion } from 'framer-motion';
import SlideInFromSide from '../../animations/slideInFromSide';
 
export function Section2() {

    return (
        <>
            <div className='md:px-40 xl:px-80 xl:pt-40 pb-6 xl:pb-10' >
                <h1 className='text-4xl xl:text-5xl pl-8'>About</h1>
                <div className='px-4 py-4'>
                    <p className='text-lg xl:text-xl text-white font-kalam'>
                        ich bin gelernter Industriekaufmann mit einer Passion für Webentwicklung und Technologie. <br/><br/>
                        Neben meiner beruflichen Laufbahn, habe ich meine Fähigkeiten erweitert, um kreative Webprojekte als Entwickler zu realisieren. 
                        <br/><br/>
                        Mein Interesse an Technologie wird ergänzt durch eine Begeisterung für Entrepreneurship und Sport, was mir hilft, 
                        einen ausgeglichenen und dynamischen Lebensstil zu pflegen. 
                    </p>
                </div>
                <span className='w-full flex justify-end pr-4'>
                    <SlideInFromSide>
                        <motion.span whileHover={{ scale: 1.1 }}>
                            <Button text="About" link="/about" />
                        </motion.span>
                    </SlideInFromSide>
                </span>
            </div>
        </>
    )
}

export default React.memo(Section2);
