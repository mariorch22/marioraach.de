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
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </>
    )
}

export default React.memo(Home)
