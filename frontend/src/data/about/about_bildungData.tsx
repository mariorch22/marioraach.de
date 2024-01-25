export interface ErfahrungsabschnittProps {
    bild: {
        src: string;
        width: number;
        height: number;
        alt: string;
    };
    titel: string;
    kinder: React.ReactNode;
}

export const bildungDaten = [
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