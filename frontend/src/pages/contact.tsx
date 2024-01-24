import React, { useRef } from 'react';
import AnimatedPage from '../animations/pageTransition';
import ContactDetailsSection from '../components/contact/detailsSection';
import ContactFormSection from '../components/contact/contactFormSection';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { smoothScrollTo } from '../animations/smoothScrollTo';
import SlideUpWhenVisible from '../animations/slideUpWhenVisible';
import Typewriter from '../animations/typewriter';
import AnimatedSvgButton from '../components/contact/animatedSvgButton';
import Navbar from '../components/navbar';

const Contact = () => {
    const scrollToRef = useRef<HTMLDivElement>(null); // Erstellen der Referenz

    const scrollToNextViewport = (): void => {
        if (scrollToRef.current) {
            smoothScrollTo(scrollToRef.current);
        }
    };

    return (
        <>
            <AnimatedPage>
                <Navbar />
                
                <div className='text-gray-700 md:px-0 text-6xl md:text-9xl pb-20 flex items-center h-screen bg-black min-h-[50rem]'>
                    <p className='px-2 md:px-40 min-h-[30rem]'>
                        <Typewriter speed={100}>Getting a quality website is not an expenses but rather an investment.</Typewriter>
                    </p>
                    <span className='absolute w-full bottom-5 flex justify-center'>
                        
                        <span onClick={scrollToNextViewport} className="cursor-pointer"><AnimatedSvgButton /></span>
                    </span>
                </div>

                {/* Referenz-Element */}
                <div ref={scrollToRef} className='min-h-screen min-w-full bg-black px-6 md:px-0 pt-20 md:grid md:grid-cols-[1fr_1fr]'>
                    <div>
                        <ContactFormSection />
                    </div>

                    <div className='hidden md:block'>
                        <div className='w-full flex flex-col justify-center items-center mt-20'>
                            <img src="/bild_im_hemd1.png" alt="Bild im Hemd" className='rounded-full w-[30rem] mr-20' />
                            <SlideUpWhenVisible duration={0.6} delay={0.2} y={20}>
                                <p className='text-white mt-6 mb-1 text-2xl'>"Für Ihre Gedanken und Anfragen bin ich stets</p>
                            </SlideUpWhenVisible>
                            <SlideUpWhenVisible duration={0.6} delay={0.3} y={20}>
                                <p className='text-white text-2xl'>offen –ich freue mich darauf, von Ihnen zu lesen."</p>
                            </SlideUpWhenVisible>
                        </div>
                        <ContactDetailsSection />
                    </div>
                </div>
            </AnimatedPage>
        </>
    );
};

export default React.memo(Contact);
