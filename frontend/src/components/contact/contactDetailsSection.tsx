import React from 'react';

const ContactDetailsSection = () => {

    return (
        <>
            <div className='bg-red-500'>
                <div>
                    <img src='/bild_im_hemd.jpg' />
                </div>
                <div>
                    Contact details
                </div>
                <div>
                    Solcials
                </div>
            </div>
        </>
    )
}

export default React.memo(ContactDetailsSection)
