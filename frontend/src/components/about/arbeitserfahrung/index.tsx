import React, { Suspense, lazy } from 'react';
import LazyImage from '../lazyImage';
import { arbeitserfahrungDaten, ErfahrungsabschnittProps } from '../../../data/about/about_arbeitserfahrung';
import SlideUpWhenVisible from '../../../animations/slideUpWhenVisible';

const Erfahrungsabschnitt: React.FC<ErfahrungsabschnittProps> = React.memo(({ bild, titel, kinder }) => (
    <span className='w-full flex flex-col md:grid md:grid-cols-[2fr_8fr] md:items-center justify-center gap-1'>
        
        <SlideUpWhenVisible delay={0.1} y={20}>
            <span className='grid grid-cols-[2fr_8fr] md:grid-cols-1 px-6 gap-6'>
                <Suspense fallback={<div>Lade Bild...</div>}>
                    <LazyImage 
                        src={bild.src} 
                        width={bild.width} 
                        height={bild.height} 
                        alt={bild.alt}
                        className='rounded-full  md:w-52' 
                    />
                </Suspense>
                <h1 className='h-full text-white flex justify-start items-center font-bold text-lg md:hidden'>{titel}</h1>
            </span>
        </SlideUpWhenVisible>
        
            <span>
                <h1 className='font-bold text-white hidden md:block text-4xl '>{titel}</h1>
                <ul className='px-6 py-2'>{kinder}</ul>
            </span>

    </span>
));

const Arbeitserfahrung: React.FC = () => {
    return (
        <div className='md:h-screen px-2 py-6 md:py-20 md:px-20 text-gray-500 grid gap-8 md:gap-0 md:grid-rows-3 bg-black md:rounded-none rounded-3xl md:rounded-r-3xl md:mt-2 md:mr-2 md:mb-2'>
                {arbeitserfahrungDaten.map((abschnitt, index) => (
                    <Erfahrungsabschnitt key={index} {...abschnitt} />
                ))}
        </div>
    )
}

export default Arbeitserfahrung;
