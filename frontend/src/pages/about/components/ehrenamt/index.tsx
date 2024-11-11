import React from 'react';
import SlideUpWhenVisible from "../../../../animations/slideUpWhenVisible";
import { useTranslation } from 'react-i18next';

interface Experience {
    id: string;
    title: string;
    duration: string;
    responsibilities: string[];
  }
  
  interface PageData {
    pageTitle: string;
    data: Experience[];
  }

const VolunteerCard: React.FC<Experience> = ({ id, title, duration, responsibilities }) => (
    <article className='w-full h-auto flex flex-col md:grid md:items-center md:justify-center font-roboto'>
        <div className='mb-4 md:mb-16 min-h-32 flex flex-col justify-center items-center'>
            <SlideUpWhenVisible delay={0.2} duration={0.4}>
                <h1 className='text-white text-2xl text-center md:text-start w-full py-2'>{title}</h1>
            </SlideUpWhenVisible>
            <SlideUpWhenVisible delay={0.3} duration={0.4}>
                <ul className='md:pl-6 pt-2 text-start'>
                    {responsibilities.map((responsibility, index) => (
                        <li className='py-1 flex' key={index}>
                            <span className='px-2'>▷</span>
                            <span>{responsibility}</span>
                        </li>
                    ))}
                </ul>
            </SlideUpWhenVisible>
        </div>
    </article>
);

const Ehrenamt = () => {

    const {t} = useTranslation();
    const ehrenamtDaten: PageData = t("ehrenamtData", { returnObjects: true }) as PageData;

    return(
        <section className='px-2 md:py-6 text-gray-500 flex flex-col justify-between w-full'>
            <SlideUpWhenVisible delay={0.1} duration={0.4}>
                <h1 className="w-full text-center text-3xl pb-8 md:pb-16 text-white font-bold font-roboto">
                    {ehrenamtDaten.pageTitle}
                </h1>
            </SlideUpWhenVisible>
            <div className="flex flex-col gap-8 md:gap-40 md:flex-row">
                {ehrenamtDaten.data.map((exp, index:number) => <VolunteerCard key={index} {...exp} />)}
            </div>
        </section>
    )
}

export default Ehrenamt