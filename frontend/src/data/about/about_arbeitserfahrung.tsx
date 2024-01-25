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


export const arbeitserfahrungDaten = [
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
