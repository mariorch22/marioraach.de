import React, { useState, useEffect } from 'react';
import AnimatedPage from '../animations/pageTransition';
import SlideUpWhenVisible from '../animations/slideUpWhenVisible';
import Navbar from '../components/navbar';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import FetchBlogData from '../components/blog/overviewPage/fetchBlogData/fetchBlogData';


interface TextContent {
    title: string;
    description: string;
    comingSoon: string;
}

const Blog = () => {
    const {t} = useTranslation();

    const blogDaten: TextContent = t("blogText", { returnObjects: true }) as TextContent;

    return (
        <>
            <Helmet>
                <title>Marios Blog über Softwareentwicklung und KI</title>
                <meta name="description" content="Willkommen auf Marios Blog. Tauchen Sie ein in die Welt der Softwareentwicklung und künstlichen Intelligenz, wo ich meine persönlichen Erfahrungen, Einblicke und die neuesten Trends teile." />
                <meta name="keywords" content="Mario Raach, Blog, Softwareentwicklung, Künstliche Intelligenz, Programmierung, Tech Trends, AI, Machine Learning, Persönliche Erfahrungen, Technologieblog" />
            </Helmet>

             <AnimatedPage>
                <Navbar />
                <main className='bg-backgroundGray min-h-svh pt-20 px-4 md:px-0 font-roboto overflow-hidden w-screen'>
                    <div className='w-full flex justify-center items-center flex-col gap-20 pt-20'> 

                        <section>
                            <SlideUpWhenVisible y={20}>
                                <div className='text-white md:px-10 text-5xl md:text-6xl xl:text-8xl'>
                                    {blogDaten.title}
                                </div>
                            </SlideUpWhenVisible>

                            <SlideUpWhenVisible y={20} delay={0.7}>
                                <div className='text-white text-md md:text-2xl md:px-10 py-2 md:py-2'>
                                    {blogDaten.description}
                                </div>
                            </SlideUpWhenVisible>                             
                        </section>

                        <FetchBlogData />
                    </div>
                </main>
            </AnimatedPage>
        </>
    )
}

export default React.memo(Blog)