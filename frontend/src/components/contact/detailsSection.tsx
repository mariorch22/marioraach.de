import React from 'react';
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlinePhoneEnabled } from "react-icons/md";
import { Separator } from '../../shadn/components/ui/separator';

const ContactDetailsSection = () => {

    return (
        <>
            <div className='w-20 fixed right-4 bottom-4'>

                <div className='py-2 flex justify-center items-center flex-col'>
                    <span className='px-4 opacity-30 hover:opacity-100 rounded-t-full pt-4 py-2'>
                        <MdOutlineEmail color='white' size={"2.5rem"} />
                    </span>

                    <span className='px-4 opacity-30 hover:opacity-100 pt-4 py-2'>
                        <MdOutlinePhoneEnabled color='white' size={"2.5rem"} />
                    </span>      

                    <Separator className='bg-gray-300 my-2 opacity-30' />

                    <a href='https://www.linkedin.com/in/mario-r-b88950238' className='flex py-2 px-4 opacity-30 hover:opacity-100 pt-4' rel="noopener noreferrer" aria-label='LinkedIn von Mario Raach'>
                        <FaLinkedinIn color='white' size={"2.5rem"} />
                    </a>

                    <a href='https://x.com/marioraach?t=DXuNbz7i_ImaYxkTpu6f3A&s=09' className='flex py-2 px-4 opacity-30 hover:opacity-100 rounded-b-full pb-4' rel="noopener noreferrer" aria-label='Twitter von Mario Raach'>
                        <FaXTwitter color='white' size={"2.5rem"} />
                    </a>
                </div>
            </div>
        </>
    )
}

export default React.memo(ContactDetailsSection)
