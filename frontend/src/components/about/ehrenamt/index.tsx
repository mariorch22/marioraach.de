import { about_ehrenamtData, VolunteerExperience } from "../../../data/about/aboutEhrenamt";
import React from 'react';
import SlideUpWhenVisible from "../../../animations/slideUpWhenVisible";

interface VolunteerCardProps {
    experience: VolunteerExperience;
}

const VolunteerCard: React.FC<VolunteerCardProps> = ({ experience }) => (
    <span className='w-full h-auto flex flex-col md:grid md:items-center md:justify-center'>
        <div className='mb-4 md:mb-16 min-h-32 flex flex-col justify-center items-center'>
            <SlideUpWhenVisible delay={0} duration={0.4}>
                <h1 className='text-white text-2xl text-center md:text-start w-full py-2'>{experience.title}</h1>
            </SlideUpWhenVisible>
            <SlideUpWhenVisible delay={0.1} duration={0.4}>
                <ul className='md:pl-6 pt-2 text-start'>{experience.responsibilities}</ul>
            </SlideUpWhenVisible>
        </div>
    </span>
);

const Ehrenamt = () => {
    return(
        <div className='px-2 md:py-6 text-gray-500 flex flex-col justify-between w-full'>
            <h1 className="w-full text-center text-3xl pb-8 md:pb-16 text-white font-bold">Ehrenamt</h1>
            <div className="flex flex-col gap-8 md:gap-40 md:flex-row">
                {about_ehrenamtData.map((exp, index) => <VolunteerCard key={index} experience={exp} />)}
            </div>
        </div>
    )
}

export default Ehrenamt