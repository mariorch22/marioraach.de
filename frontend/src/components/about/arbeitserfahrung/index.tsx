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
        <span className='grid grid-cols-[2fr_8fr] md:grid-cols-1 px-6 gap-6 items-center'>
            <Suspense fallback={<div>Lade Bild...</div>}>
                <LazyImage 
                    src={bild.src} 
                    width={bild.width} 
                    height={bild.height} 
                    alt={bild.alt} 
                    className="rounded-full w-20 md:w-52"
                />
                <h1 className='h-full flex justify-start items-center font-bold text-lg md:hidden'>{titel}</h1>
            </Suspense>
        </span>
        <span>
            <h1 className='font-bold text-lg hidden md:block'>{titel}</h1>
            <ul className='px-6 py-2'>{kinder}</ul>
        </span>
    </span>
));

const arbeitserfahrungDaten = [
    {
        bild: { src: "/about/trigema.jpg", width: 96, height: 96, alt: "TRIGEMA Logo" },
        titel: "Ausbildung zum Industriekaufmann bei TRIGEMA W. Grupp KG",
        kinder: [
            <li className='py-1 flex' key={1}><span className='px-2'>▷</span><p>Praxisnahe Ausbildung bei TRIGEMA, Schwerpunkt auf kaufmännischen Kenntnissen mit Fokus auf Marketing und E-Commerce.</p></li>,
            <li className='py-1 flex' key={2}><span className='px-2'>▷</span><p>Fundierte Kenntnisse im kaufmännischen Bereich.</p></li>,
            <li className='py-1 flex' key={3}><span className='px-2'>▷</span><p>Sicherer Umgang mit Microsoft Dynamics AX, Adobe Creative Cloud und den Microsoft Office Programmen.</p></li>,
            <li className='py-1 flex' key={4}><span className='px-2'>▷</span><p>Stärkung der Soft Skills wie Teamarbeit und Kommunikation.</p></li>
        ]
    },
    {
        bild: { src: "/about/epsilon.jpg", width: 96, height: 96, alt: "Epsilon Logo" },
        titel: "Praktika bei Epsilon International SA",
        kinder: [
            <li className='py-1 flex' key={1}><span className='px-2'>▷</span><p>3-wöchiges Praktikum im Rahmen des Erasmus+ Programms in Athen.</p></li>
        ]
    },
    {
        bild: { src: "/about/daimler.jpg", width: 96, height: 96, alt: "Daimler Logo" },
        titel: "Diverse temporäre Anstellungen bei Daimler AG",
        kinder: [
            <li className='py-1 flex' key={1}><span className='px-2'>▷</span><p>Planungsanpassung aufgrund von Covid-19: Ursprünglich vorgesehene Auslandsreise verschoben.</p></li>
        ]
    }
];

const Arbeitserfahrung: React.FC = () => {
    return (
        <div className='px-2 py-6 md:py-0 md:px-20 min-h-[30rem] text-gray-500 grid md:grid-rows-[2fr_6fr] rounded-r-3xl'>
            <h1 className='text-5xl md:text-7xl flex justify-center items-center h-32'>Arbeitserfahrung</h1>
            <span>
                {arbeitserfahrungDaten.map((abschnitt, index) => (
                    <Erfahrungsabschnitt key={index} {...abschnitt} />
                ))}
            </span>
        </div>
    )
}

export default Arbeitserfahrung;
