import React from 'react';
import AnimatedPage from '../animations/pageTransition';

const Blog = () => {

    return (
        <>
             <AnimatedPage>
                <div className='bg-black min-h-screen pt-20 px-4 md:px-0'>
                    <div className='w-full flex justify-center items-center flex-col gap-2 pt-20'>
                        <div>
                            <div className='text-white text-5xl md:text-8xl'>
                                Willkommen auf meinem Blog
                            </div>
                            <div className='text-white text-md md:text-2xl py-2 md:py-0'>
                                Ich teile hier meine Erfahrungen im Bereich der Software Entwicklung und Künstlichen Intelligenz
                            </div>                             
                        </div>

                        <div className='text-white text-4xl md:text-8xl pt-20 md:pt-80'>
                            Coming soon
                        </div>
                       
                    </div>

                </div>
            </AnimatedPage>

        </>
    )
}

export default React.memo(Blog)
