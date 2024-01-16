import React from 'react';
import ContactForm from './form/contactForm';

const ContactFormSection = () => {

    return (
        <>
            <div className='px-10'>
                <ContactForm />
            </div>

        </>
    )
}

export default React.memo(ContactFormSection)
