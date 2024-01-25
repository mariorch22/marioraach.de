import { about_ehrenamtData, VolunteerExperience } from "../../../data/about/aboutEhrenamt";
import React, { Suspense, lazy } from 'react';
import LazyImage from '../lazyImage';


interface VolunteerCardProps {
    experience: VolunteerExperience;
}

const VolunteerCard: React.FC<VolunteerCardProps> = ({ experience }) => (
    <div className="flex flex-col justify-center items-start md:px-10">

            <h1 className="text-lg min-h-1/2 md:text-5xl px-6 pt-4 font-bold text-white">{experience.title}</h1>
            <small className="font-bold w-full px-6 py-2 md:text-lg">{experience.duration}</small>
            <span className="flex flex-col gap-1 px-6 py-3">
                {experience.responsibilities.map((resp, index) => (
                    <div key={index} className="flex">
                        <p>▷</p><p className="pl-3 text-xl">{resp}</p>
                    </div>
                ))}
            </span>

    </div>
);

const Ehrenamt = () => {
    return(
        <div className="px-2 py-6 md:py-0 md:bg-black rounded-l-3xl grid text-gray-500 md:mt-2 md:ml-2 md:mb-2">
            <div className="grid grid-cols-1 md:py-20 gap-4 md:gap-0">
                {about_ehrenamtData.map((exp, index) => <VolunteerCard key={index} experience={exp} />)}
            </div>
        </div>
    )
}

export default Ehrenamt