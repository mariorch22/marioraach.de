import React from 'react';
import SlideUpWhenVisible from "../../../animations/slideUpWhenVisible";
import { useTranslation } from 'react-i18next';


interface Skill {
    title: string;
    details: string;
    skillLevel: string;
    imageSrc: string;
}

interface TechnicalSkillsData {
    pageTitle: string;
    data: Skill[];
}

  
const SkillCard = React.memo<Skill>(({ title, details, skillLevel, imageSrc }) => {
    return (
        <span className='w-full h-auto flex justify-center font-roboto'>
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
    const {t} = useTranslation();
    const technischDaten: TechnicalSkillsData = t("technischData", { returnObjects: true }) as TechnicalSkillsData;
    return(
        <div className='px-2 md:py-6 text-gray-500 flex flex-col justify-between w-full'>
            <SlideUpWhenVisible delay={0.1} duration={0.4}>
                <h1 className="w-full text-center text-3xl pb-8 md:pb-16 text-white font-bold font-roboto">
                    {technischDaten.pageTitle}
                </h1>
            </SlideUpWhenVisible>
            <div className="flex flex-col gap-16 md:gap-0 xl:flex-row">
                {technischDaten.data.map(skill => <SkillCard key={skill.title} {...skill} />)}
            </div>
        </div>
    )
}

export default Technik