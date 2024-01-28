import React from 'react';
import { arbeitserfahrungDaten, ErfahrungsabschnittProps } from '../../../data/about/about_arbeitserfahrung';
import SlideUpWhenVisible from '../../../animations/slideUpWhenVisible';
import { FaRegCircle } from "react-icons/fa";

const Erfahrungsabschnitt: React.FC<ErfahrungsabschnittProps> = React.memo(({ bild, titel, kinder }) => (
    <span className='w-full h-auto grid grid-cols-[1fr_8fr] md:grid-cols-[1fr_12fr] md:items-start'>
            
            <div className='w-6 flex flex-col items-center h-full'>
                <FaRegCircle className='w-6 h-6 text-white' />
                {titel === "Diverse temporäre Anstellungen bei Daimler AG" ? 
                    <div className='w-0.5 h-full bg-gradient-to-b from-gray-600 via-gray-600 to-backgroundGray'></div>
                    : <div className='w-0.5 h-full bg-gradient-to-b from-gray-600 via-gray-600 to-gray-600'></div>
                }
            </div>
        
            <div className='mb-16 min-h-32'>
                <h1 className='text-white'>
                    <SlideUpWhenVisible delay={0.2} duration={0.4}>
                        {titel}
                    </SlideUpWhenVisible>
                </h1>
                <ul className='pl-0 md:pl-6 pt-2'>
                    {kinder && kinder.map((kind, index) => (
                        <SlideUpWhenVisible delay={0.3} duration={0.4} key={index}>
                            {kind}
                        </SlideUpWhenVisible>
                    ))}
                </ul>
            </div>

    </span>
));

const Arbeitserfahrung: React.FC = () => {
    return (
        <div className='px-2 py-6 text-gray-500 flex flex-col md:rounded-none rounded-3xl md:rounded-r-3xl md:mt-2 md:mr-2 md:mb-2'>
                <h1 className='text-3xl pb-8 text-white font-bold text-center md:text-start'>Abreitserfahrung</h1>
                {arbeitserfahrungDaten.map((abschnitt, index) => (
                    <Erfahrungsabschnitt key={index} {...abschnitt} />
                ))}
        </div>
    )
}

export default React.memo(Arbeitserfahrung);
