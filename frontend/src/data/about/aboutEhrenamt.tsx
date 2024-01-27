
export interface VolunteerExperience {
    id: string;
    title: string;
    duration: string;
    responsibilities: React.ReactNode[];
}

export const about_ehrenamtData: VolunteerExperience[] = [
    {
        id: "1", // Unique identifier
        title: "Jugendtrainer beim TV Melchingen",
        duration: "2021-heute",
        responsibilities: [
            <li className='py-1 flex' key={1}><span className='px-2'>▷</span><p>Verantwortlich für die Entwicklung sportlicher Fähigkeiten und Teamgeist bei Jugendlichen</p></li>,
            <li className='py-1 flex' key={2}><span className='px-2'>▷</span><p>Leitung von zwei wöchentlichen Trainingseinheiten und Betreuung von Spielen</p></li>,
        ]
    },
    {
        id: "2", // Unique identifier
        title: "Leiter Jungpfadfindergruppe bei der DPSG Salmendingen",
        duration: "2017-2018",
        responsibilities: [
            <li className='py-1 flex' key={1}><span className='px-2'>▷</span><p>Praxisnahe Ausbildung bei TRIGEMA, Schwerpunkt auf kaufmännischen Kenntnissen mit Fokus auf Marketing und E-Commerce.</p></li>,
            <li className='py-1 flex' key={2}><span className='px-2'>▷</span><p>Leitung von zwei wöchentlichen Trainingseinheiten und Betreuung von Spielen</p></li>,
        ]
    }
    // Add more entries as needed
];
