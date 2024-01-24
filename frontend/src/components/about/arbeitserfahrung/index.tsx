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
                    className="rounded-full"
                />
            </Suspense>
        </span>
        <span>
            <h1 className='font-bold text-lg'>{titel}</h1>
            <ul className='pl-1 py-2'>{kinder}</ul>
        </span>
    </span>
));

const arbeitserfahrungDaten = [
    {
        bild: { src: "/about/trigema.jpg", width: 96, height: 96, alt: "TRIGEMA Logo" },
        titel: "Ausbildung zum Industriekaufmann bei TRIGEMA W. Grupp KG",
        kinder: [
            <li className='py-1 flex' key={1}><span className='px-2'>•</span><p>Praxisnahe Ausbildung bei TRIGEMA, Schwerpunkt auf kaufmännischen Kenntnissen mit Fokus auf Marketing und E-Commerce.</p></li>,
            <li className='py-1 flex' key={2}><span className='px-2'>•</span><p>Fundierte Kenntnisse im kaufmännischen Bereich.</p></li>,
            <li className='py-1 flex' key={3}><span className='px-2'>•</span><p>Sicherer Umgang mit Microsoft Dynamics AX, Adobe Creative Cloud und den Microsoft Office Programmen.</p></li>,
            <li className='py-1 flex' key={4}><span className='px-2'>•</span><p>Stärkung der Soft Skills wie Teamarbeit und Kommunikation.</p></li>
        ]
    },
    {
        bild: { src: "/about/epsilon.jpg", width: 96, height: 96, alt: "Epsilon Logo" },
        titel: "Praktika bei Epsilon International SA",
        kinder: [
            <li className='py-1 flex' key={1}><span className='px-2'>•</span><p>3-wöchiges Praktikum im Rahmen des Erasmus+ -Programms in Athen.</p></li>
        ]
    },
    {
        bild: { src: "/about/daimler.jpg", width: 96, height: 96, alt: "Daimler Logo" },
        titel: "Diverse Anstellungen in Zwischenphasen bei der Daimler AG",
        kinder: [
            <li className='py-1 flex' key={1}><span className='px-2'>•</span><p>Planungsanpassung aufgrund von Covid-19: Ursprünglich vorgesehene Auslandsreise verschoben.</p></li>
        ]
    }
];

const Arbeitserfahrung: React.FC = () => {
    return (
        <div className='px-2 md:px-20 min-h-[30rem] text-gray-500 grid grid-rows-[1fr_8fr] md:grid-rows-[2fr_6fr] rounded-r-3xl'>
            <h1 className='text-4xl md:text-7xl flex justify-center items-center'>Arbeitserfahrung</h1>
            <span>
                {arbeitserfahrungDaten.map((abschnitt, index) => (
                    <Erfahrungsabschnitt key={index} {...abschnitt} />
                ))}
            </span>
        </div>
    )
}

export default Arbeitserfahrung;
