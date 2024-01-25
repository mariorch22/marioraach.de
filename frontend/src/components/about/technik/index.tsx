import { about_technicalData } from "../../../data/about/about_technical";
import React, { Suspense, lazy } from 'react';
import LazyImage from '../lazyImage';

interface SkillCardProps {
    title: string;
    details: string;
    skillLevel: string;
    imageSrc: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, details, skillLevel, imageSrc }) => (
    <div className={`flex flex-col min-h-1/2 items-center md:items-start justify-center`}>
        
        <span>
            <h1 className="text-lg text-center md:text-5xl px-6 pt-4 font-bold w-full">{title}</h1>
            <div className="px-6">
                <small className="text-center md:text-start font-bold w-full block md:py-1">{details}</small>
            </div>
            <div className="flex justify-center md:justify-start w-full md:px-6 md:py-2">
                <p className="pr-2 md:text-2xl">Skillevel:</p>
                <p className="md:text-2xl">{skillLevel}</p>
            </div>

        </span>
    
    </div>
);

const Technik = () => {
    return(
        <div className='h-full px-2 py-6 md:py-20 md:px-10 text-gray-500 grid gap-8 md:gap-0 md:grid-rows-3 bg-black md:rounded-none rounded-3xl md:rounded-r-3xl md:mt-2 md:mr-2 md:mb-2'>
            {about_technicalData.map(skill => <SkillCard key={skill.title} {...skill} />)}
        </div>
    )
}

export default Technik