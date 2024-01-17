import React, { useRef } from 'react';
import AnimatedPage from '../animations/pageTransition';
import ContactDetailsSection from '../components/contact/detailsSection';
import ContactFormSection from '../components/contact/contactFormSection';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { smoothScrollTo } from '../animations/smoothScrollTo';

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
                <div className='text-gray-700 md:px-0 text-6xl md:text-9xl pb-20 flex items-center h-screen bg-black'>
                    <p className='px-2 md:px-40'>Getting a quality website is not an expenses but rather an investment.</p>
                    <span className='absolute w-full bottom-5 flex justify-center'>
                        <MdKeyboardDoubleArrowDown onClick={scrollToNextViewport} className="cursor-pointer" />
                    </span>
                </div>

                {/* Referenz-Element */}
                <div ref={scrollToRef} className='min-h-screen min-w-full bg-black px-6 md:px-0 pt-20 md:grid md:grid-cols-[2fr_1fr]'>
                    <div>
                        <ContactFormSection />
                    </div>
                    <div className='hidden md:block'>
                        <div className='w-full flex justify-center mt-20'>
                            <img src="/bild_im_hemd1.png" alt="Bild im Hemd" className='rounded-full w-96' />
                        </div>
                        <ContactDetailsSection />
                    </div>
                </div>
            </AnimatedPage>
        </>
    );
};

export default React.memo(Contact);
