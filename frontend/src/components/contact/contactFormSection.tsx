import React from 'react';
import ContactForm from './form/contactForm';

const ContactFormSection = () => {

    return (
        <>
            <div className='md:pl-40 md:pr-10 md:pt-10'>
                <ContactForm />
            </div>

        </>
    )
}

export default React.memo(ContactFormSection)
