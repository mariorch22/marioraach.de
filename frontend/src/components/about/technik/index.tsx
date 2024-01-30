import { about_technicalData } from "../../../data/about/about_technical";
import React from 'react';
import SlideUpWhenVisible from "../../../animations/slideUpWhenVisible";

interface SkillCardProps {
    title: string;
    details: string;
    skillLevel: string;
    imageSrc: string;
}
  
const SkillCard = React.memo<SkillCardProps>(({ title, details, skillLevel, imageSrc }) => {
    return (
        <span className='w-full h-auto flex justify-center'>
            <div className='md:mb-16 md:min-h-32 text-center'>
                <SlideUpWhenVisible delay={0.2} duration={0.4}>
                    <h1 className='text-white text-2xl'>{title}</h1>
                </SlideUpWhenVisible>
                <SlideUpWhenVisible delay={0.3} duration={0.4}>
                    <ul className='pt-2'>{details}</ul>
                    <span>Skilllevel: {skillLevel}</span>
                </SlideUpWhenVisible>
            </div>
        </span>
    );
});


const Technik = () => {
    return(
        <div className='px-2 md:py-6 text-gray-500 flex flex-col justify-between w-full'>
            <h1 className="w-full text-center text-3xl pb-8 md:pb-16 text-white font-bold">Technische Fähigkeiten</h1>
            <div className="flex flex-col gap-16 md:gap-0 xl:flex-row">
                {about_technicalData.map(skill => <SkillCard key={skill.title} {...skill} />)}
            </div>
        </div>
    )
}

export default Technik