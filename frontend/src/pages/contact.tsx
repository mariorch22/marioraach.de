import React, { useRef } from 'react';
import AnimatedPage from '../animations/pageTransition';
import ContactFormSection from '../components/contact/contactFormSection';
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
                
                <div className='text-gray-700 md:px-0 text-6xl md:text-7xl xl:text-9xl pb-20 flex items-center h-screen bg-backgroundGray min-h-[50rem]'>
                    <p className='px-2 md:px-40 min-h-[30rem]'>
                        <Typewriter speed={100}>Getting a quality website is not an expenses but rather an investment.</Typewriter>
                    </p>
                    <span className='absolute w-full bottom-5 flex justify-center'>
                        
                        <span onClick={scrollToNextViewport} className="cursor-pointer"><AnimatedSvgButton /></span>
                    </span>
                </div>

                {/* Referenz-Element */}
                <div ref={scrollToRef} className='min-h-screen min-w-full bg-backgroundGray px-6 md:px-0 pt-20 flex justify-center'>
                    <ContactFormSection />
                </div>
            </AnimatedPage>
        </>
    );
};

export default React.memo(Contact);
