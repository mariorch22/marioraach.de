import React from 'react';
import Section1 from '../components/home/section1';
import Section2 from '../components/home/section2';
import Section3 from '../components/home/section3';
import Section4 from '../components/home/section4';
import Navbar from '../components/navbar';

const Home = () => {


    return (
        <>
            
            <Navbar />
            <main className='overflow-hidden grid grid-cols-1 gap-6 bg-backgroundGray font-kalam text-white'>    
                <Section1 />
                <Section2 />
                <div className="h-1 w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-500 via-backgroundGray to-backgroundGray"></div>
                <Section3 />
                <div className="h-1 w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-500 via-backgroundGray to-backgroundGray"></div>
                <Section4 />
            </main>
        </>
    )
}

export default React.memo(Home)
