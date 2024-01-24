import React, { Suspense, lazy } from 'react';
import LazyImage from '../lazyImage';

interface ErfahrungsabschnittProps {
    bild: {
        src: string;
        width: number;
        height: number;
        alt: string;
    };
    titel: string;
    kinder: React.ReactNode;
}

const Erfahrungsabschnitt: React.FC<ErfahrungsabschnittProps> = React.memo(({ bild, titel, kinder }) => (
    <span className='w-full grid grid-cols-1 md:grid-cols-[1fr_6fr] gap-1 py-3'>
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
            <h1 className='h-full flex justify-start items-center font-bold text-lg md:hidden'>{titel}</h1>
        </span>
        <span>
            <h1 className='font-bold text-lg hidden md:block'>{titel}</h1>
            <ul className='px-6 py-2'>{kinder}</ul>
        </span>
    </span>
));

const bildungDaten = [
    {
        bild: { src: "/about/bsz.jpg", width: 96, height: 96, alt: "BSZ Logo" },
        titel: "Berufliches Schulzentrum Hechingen",
        kinder: [
            <li className='py-1 flex' key={1}><span className='px-2'>▷</span><p><p className='text-gray-300'>Studienschwerpunkte:</p> Betriebswirtschaftslehre, Steuerung und Kontrolle, Volkswirtschaftslehre</p></li>,
            <li className='py-1 flex' key={2}><span className='px-2'>▷</span><p><p className='text-gray-300'>Weitere Kernfächer:</p>Englisch, Deutsch, Informatik, Religionslehre</p></li>,
            <li className='py-1 flex' key={3}><span className='px-2'>▷</span><p><p className='text-gray-300'>Vertiefung in spezifischen BWL-Bereichen:</p>Material-, Produktions-, Personal- und Absatzwirtschaft, Investition und Finanzierung, Externes und Internes Rechnungswesen</p></li>,
            <li className='py-1 flex' key={4}><span className='px-2'>▷</span><p><p className='text-gray-300'>Fundierte Kenntnisse</p> in wirtschaftlichem Handeln und rechtlichen Rahmenbedingungen</p></li>
        ]
    },
    {
        bild: { src: "/about/gymgam.jpg", width: 96, height: 96, alt: "Gymnasium Gammertingen Logo" },
        titel: "Gymnasium Gammertingen",
        kinder: [
            <li className='py-1 flex' key={1}><span className='px-2'>▷</span><p><p className='text-gray-300'>Abiturabschluss</p> im Jahr 2020 mit der Note 3,1</p></li>,
            <li className='py-1 flex' key={2}><span className='px-2'>▷</span><p><p className='text-gray-300'>Leistungskurse:</p> Mathematik, Deutsch, Englisch, Chemie, Sport</p></li>
        ]
    }
];

const Bildung: React.FC = () => {
    return (
        <div className='px-2 py-6 md:py-0 md:px-20 min-h-[30rem] text-gray-500 grid md:grid-rows-[2fr_6fr] bg-black md:rounded-none rounded-3xl md:rounded-l-3xl md:mt-2 md:ml-2 md:mb-2'>
            <h1 className='text-5xl md:text-7xl flex justify-center items-center h-32'>Bildung</h1>
            <span>
                {bildungDaten.map((abschnitt, index) => (
                    <Erfahrungsabschnitt key={index} {...abschnitt} />
                ))}
            </span>
        </div>
    )
}

export default Bildung;