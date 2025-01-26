import React, { useRef, useCallback } from 'react';
import ContactFormSection from './components/contactFormSection';
import { smoothScrollTo } from '@/animations/smoothScrollTo';
import AnimatedSvgButton from './components/animatedSvgButton';
import Navbar from '@/components/navbar';
import { useTranslation } from 'react-i18next';
import SlideUpWhenVisible from '@/animations/slideUpWhenVisible';

interface TextContent {
  pageTitle: string;
}

const Contact = () => {
  const scrollToRef = useRef<HTMLDivElement>(null);

  const scrollToNextViewport = useCallback((): void => {
    if (scrollToRef.current) {
      smoothScrollTo(scrollToRef.current);
    }
  }, []);

  const { t } = useTranslation();
  const contactHeadlineData: TextContent = t('contactHeadline', {
    returnObjects: true,
  }) as TextContent;

  return (
    <>
      <title>{contactHeadlineData.pageTitle}</title>
      <meta
        name="description"
        content="Möchten Sie ein Projekt besprechen, Fragen stellen oder einfach in Kontakt treten? Füllen Sie das Kontaktformular aus und Mario Raach wird sich so bald wie möglich bei Ihnen melden."
      />
      <meta
        name="keywords"
        content="Kontakt Mario Raach, Projektanfrage, Webentwicklung Anfrage, Technologieberatung, Geschäftsanfrage, Mario Raach Kontaktinformation"
      />

      <Navbar />

      <div className="text-gray-700 md:px-0 text-6xl md:text-7xl xl:text-9xl pb-20 flex items-center h-screen min-h-[50rem] font-roboto">
        <div className="px-2 w-full text-center min-h-[30rem] py-60">
          <SlideUpWhenVisible>
            <p className="mx-4 md:mx-0 md:text-[12rem] font-extrabold">Kontakt</p>
          </SlideUpWhenVisible>
        </div>

        <span className="absolute w-full h-screen top-0 flex justify-center items-end pb-16 md:pb-4">
          <button onClick={scrollToNextViewport} className="cursor-pointer">
            <AnimatedSvgButton />
          </button>
        </span>
      </div>

      <div
        ref={scrollToRef}
        className="min-h-screen min-w-full px-6 md:px-0 pt-20 flex justify-center font-roboto"
      >
        <ContactFormSection />
      </div>
    </>
  );
};

export default Contact;
