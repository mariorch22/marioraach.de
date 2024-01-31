import React from 'react';
import Button from '../shared/animatedButton';
import SlideInFromSide from '../../animations/slideInFromSide';
import { motion } from 'framer-motion';
import { IoIosArrowDropright } from "react-icons/io";

const Section3 = () => {

    return (
        <>
            <div className='md:px-40 xl:px-80 py-6 xl:py-20' >
                <h1 className='text-4xl xl:text-5xl pl-8'>Blog</h1>
                <div className='px-4 py-4'>
                    <p className='text-lg md:text-xl text-white font-roboto'>
                        Willkommen in der Welt von KI, Webentwicklung und Entrepreneurship!<br/><br/>
                        In meinem Blog finden Sie faszinierende Einblicke und innovative Ideen zu diesen dynamischen Bereichen. <br/><br/>
                        Ob es um neueste Trends in der Künstlichen Intelligenz, praktische Tipps zur Webentwicklung oder inspirierende Geschichten aus der Welt der Startups geht – hier gibt es Wissenswertes für jeden Technologie- und Geschäftsbegeisterten. Tauchen Sie ein in meine Artikel und lassen Sie sich inspirieren!
                    </p>
                </div>
                <span className='w-full flex justify-end pr-4'>
                    <SlideInFromSide>
                        <motion.span  whileHover={{ scale: 1.1 }}>
                            <Button text="Blog" link="/blog" />
                        </motion.span>
                    </SlideInFromSide>
                </span>
            </div>
        </>
    )
}

export default React.memo(Section3);
