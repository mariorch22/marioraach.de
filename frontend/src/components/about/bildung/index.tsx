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
    <span className='w-full grid grid-cols-[1fr_6fr] gap-6 py-3'>
        <span className='flex justify-center items-start'>
            <Suspense fallback={<div>Lade Bild...</div>}>
                <LazyImage 
                    src={bild.src} 
                    width={bild.width} 
                    height={bild.height} 
                    alt={bild.alt}
                    className='rounded-full' 
                />
            </Suspense>
        </span>
        <span>
            <h1 className='font-bold text-lg'>{titel}</h1>
            <ul className='px-1 py-2'>{kinder}</ul>
        </span>
    </span>
));

const bildungDaten = [
    {
        bild: { src: "/about/bsz.jpg", width: 96, height: 96, alt: "BSZ Logo" },
        titel: "Berufliches Schulzentrum Hechingen",
        kinder: [
            <li className='py-1 flex' key={1}><span className='px-2'>•</span><p>Studienschwerpunkte: Betriebswirtschaftslehre, Steuerung und Kontrolle, Volkswirtschaftslehre</p></li>,
            <li className='py-1 flex' key={2}><span className='px-2'>•</span><p>Weitere Kernfächer: Englisch, Deutsch, Informatik, Religionslehre</p></li>,
            <li className='py-1 flex' key={3}><span className='px-2'>•</span><p>Vertiefung in spezifischen BWL-Bereichen: Material-, Produktions-, Personal- und Absatzwirtschaft, Investition und Finanzierung, Externes und Internes Rechnungswesen</p></li>,
            <li className='py-1 flex' key={4}><span className='px-2'>•</span><p>Fundierte Kenntnisse in wirtschaftlichem Handeln und rechtlichen Rahmenbedingungen</p></li>
        ]
    },
    {
        bild: { src: "/about/gymgam.jpg", width: 96, height: 96, alt: "Gymnasium Gammertingen Logo" },
        titel: "Gymnasium Gammertingen",
        kinder: [
            <li className='py-1 flex' key={1}><span className='px-2'>•</span><p>Abiturabschluss im Jahr 2020</p></li>,
            <li className='py-1 flex' key={2}><span className='px-2'>•</span><p>Leistungskurse: Mathematik, Deutsch, Englisch, Chemie, Sport</p></li>
        ]
    }
];

const Bildung: React.FC = () => {
    return (
        <div className='px-2 md:px-20 min-h-[30rem] text-gray-500 grid grid-rows-[2fr_6fr] bg-black md:rounded-none rounded-3xl md:rounded-l-3xl mt-2 md:ml-2 mb-2'>
            <h1 className='text-7xl flex justify-center items-center'>Bildung</h1>
            <span>
                {bildungDaten.map((abschnitt, index) => (
                    <Erfahrungsabschnitt key={index} {...abschnitt} />
                ))}
            </span>
        </div>
    )
}

export default Bildung;