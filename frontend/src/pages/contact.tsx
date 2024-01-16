import React from 'react';
import AnimatedPage from '../animations/pageTransition';
import ContactDetailsSection from '../components/contact/contactDetailsSection';
import ContactFormSection from '../components/contact/contactFormSection';

const Contact = () => {

    return (
        <>
            <AnimatedPage>
                <div className='min-h-screen min-w-full bg-black px-40 pt-20 grid grid-cols-[3fr_1fr]'>
                    <div>
                        <ContactFormSection />
                    </div>
                    <div>
                        <ContactDetailsSection />
                    </div>
                </div>

            </AnimatedPage>
        </>
    )
}

export default React.memo(Contact)
