
export interface VolunteerExperience {
    id: string;
    title: string;
    duration: string;
    responsibilities: string[];
}

export const about_ehrenamtData: VolunteerExperience[] = [
    {
        id: "1", // Unique identifier
        title: "Jugendtrainer beim TV Melchingen",
        duration: "2021-heute",
        responsibilities: [
            "Verantwortlich für die Entwicklung sportlicher Fähigkeiten und Teamgeist bei Jugendlichen",
            "Leitung von zwei wöchentlichen Trainingseinheiten und Betreuung von Spielen"
        ]
    },
    {
        id: "2", // Unique identifier
        title: "Leiter einer jugendlichen Pfadfindergruppe bei der DPSG Salmendingen",
        duration: "2017-2018",
        responsibilities: [
            "Förderung der persönlichen Entwicklung und Teamarbeit der Jugendlichen",
            "Leitung von zwei wöchentlichen Trainingseinheiten und Betreuung von Spielen"
        ]
    }
    // Add more entries as needed
];
