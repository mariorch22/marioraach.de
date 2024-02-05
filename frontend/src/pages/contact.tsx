import React, { useRef, useCallback } from 'react';
import AnimatedPage from '../animations/pageTransition';
import ContactFormSection from '../components/contact/contactFormSection';
import { smoothScrollTo } from '../animations/smoothScrollTo';
import Typewriter from '../animations/typewriter';
import AnimatedSvgButton from '../components/contact/animatedSvgButton';
import Navbar from '../components/navbar';

const Contact = () => {
    const scrollToRef = useRef<HTMLDivElement>(null); // Erstellen der Referenz

    const scrollToNextViewport = useCallback((): void => {
        if (scrollToRef.current) {
            smoothScrollTo(scrollToRef.current);
        }
    }, []); // Abhängigkeiten-Array ist leer, da sich die Referenz nicht ändern wird
    

    return (
        <>
            <AnimatedPage>
                <Navbar />
                
                <div className='text-gray-700 md:px-0 text-6xl md:text-7xl xl:text-9xl pb-20 flex items-center h-screen bg-backgroundGray min-h-[50rem] font-roboto'>
                    <p className='px-2 md:px-40 min-h-[30rem]'>
                        <Typewriter speed={100}>Getting a quality website is not an expenses but rather an investment.</Typewriter>
                    </p>
                    
                    <span className='absolute w-full h-screen top-0 flex justify-center items-end pb-4'>
                        <button  onClick={scrollToNextViewport} className="cursor-pointer">
                            <AnimatedSvgButton />
                        </button >
                    </span>
                </div>

                <div ref={scrollToRef} className='min-h-screen min-w-full bg-backgroundGray px-6 md:px-0 pt-20 flex justify-center font-roboto'>
                    <ContactFormSection />
                </div>
            </AnimatedPage>
        </>
    );
};

export default React.memo(Contact);
