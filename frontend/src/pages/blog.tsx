import React from 'react';
import AnimatedPage from '../animations/pageTransition';
import SlideUpWhenVisible from '../animations/slideUpWhenVisible';
import { HoverEffect } from "../ui_components/aceternity/card-hover-effect";
import Navbar from '../components/navbar';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { useQuery } from '@tanstack/react-query'
import { MY_URL_STRAPI } from "../config";
import BlogCover from "../components/blog/blogCover"


interface TextContent {
    title: string;
    description: string;
    comingSoon: string;
}

const fetchDataDE = async () => {
    const response = await fetch(`http://localhost:1337/api/blogs?populate=*`);
    return response.json()
};  

const Blog = () => {
    const {t} = useTranslation();

    const { isLoading, isError, data, error } = useQuery({ queryKey: ['dataww'], queryFn: fetchDataDE })

    if (isLoading) {
        return <p>Loading...</p>;
    }
    
    if(isError){
        return <p>Error: {error.message}</p>
    }

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
                <main className='bg-backgroundGray min-h-svh pt-20 px-4 md:px-0 font-roboto'>
                    <div className='w-full flex justify-center items-center flex-col gap-20 pt-20'>
                        
                        <section>
                            <SlideUpWhenVisible y={20}>
                                <div className='text-white text-5xl md:text-8xl'>
                                    {blogDaten.title}
                                </div>
                            </SlideUpWhenVisible>
                            <SlideUpWhenVisible y={20} delay={0.7}>
                                <div className='text-white text-md md:text-2xl py-2 md:py-2'>
                                    {blogDaten.description}
                                </div>
                            </SlideUpWhenVisible>                             
                        </section>
                        
                        <div className="md:px-20 mx-auto px-8">
                            <HoverEffect items={data.data} />
                        </div>

                    </div>
                </main>
            </AnimatedPage>
        </>
    )
}

export default React.memo(Blog)