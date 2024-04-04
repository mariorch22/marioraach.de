import React, { useRef, useCallback } from 'react';
import ContactFormSection from '../components/contact/contactFormSection';
import { smoothScrollTo } from '../animations/smoothScrollTo';
import AnimatedSvgButton from '../components/contact/animatedSvgButton';
import Navbar from '../components/navbar';
import { Helmet } from 'react-helmet';
import { TextGenerateEffect } from '../ui_components/aceternity/text-generate-effect';
import pageTransition from '../animations/pageTransiton';

const Contact = () => {
    const scrollToRef = useRef<HTMLDivElement>(null); // Erstellen der Referenz

    const scrollToNextViewport = useCallback((): void => {
        if (scrollToRef.current) {
            smoothScrollTo(scrollToRef.current);
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>Kontaktieren Sie Mario Raach - Lassen Sie uns in Verbindung treten</title>
                <meta name="description" content="Möchten Sie ein Projekt besprechen, Fragen stellen oder einfach in Kontakt treten? Füllen Sie das Kontaktformular aus und Mario Raach wird sich so bald wie möglich bei Ihnen melden." />
                <meta name="keywords" content="Kontakt Mario Raach, Projektanfrage, Webentwicklung Anfrage, Technologieberatung, Geschäftsanfrage, Mario Raach Kontaktinformation" />
            </Helmet>

                <Navbar />
                
                <div className='text-gray-700 md:px-0 text-6xl md:text-7xl xl:text-9xl pb-20 flex items-center h-screen bg-backgroundGray min-h-[50rem] font-roboto'>
                    <p className='px-2 md:px-40 min-h-[30rem] py-60'>
                        <TextGenerateEffect className='mx-4 md:mx-0 text-5xl md:text-9xl' words='Getting a quality website is not an expenses but rather an investment.' />
                    </p>
                    
                    <span className='absolute w-full h-screen top-0 flex justify-center items-end pb-16 md:pb-4'>
                        <button  onClick={scrollToNextViewport} className="cursor-pointer">
                            <AnimatedSvgButton />
                        </button >
                    </span>
                </div>

                <div ref={scrollToRef} className='min-h-screen min-w-full bg-backgroundGray px-6 md:px-0 pt-20 flex justify-center font-roboto'>
                    <ContactFormSection />
                </div>
        </>
    );
};

export default pageTransition(React.memo(Contact));
