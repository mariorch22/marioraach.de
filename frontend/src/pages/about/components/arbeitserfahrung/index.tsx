import React from 'react';
import SlideUpWhenVisible from '@/animations/slideUpWhenVisible';
import { FaRegCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface WorkExperienceData {
  pageTitle: string;
  data: WorkExperienceInfo[];
}

interface WorkExperienceInfo {
  bild: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  titel: string;
  kinder: string[];
}

const Erfahrungsabschnitt: React.FC<WorkExperienceInfo> = React.memo(({ bild, titel, kinder }) => (
  <article className="w-full h-auto grid grid-cols-[1fr_8fr] md:grid-cols-[1fr_12fr] md:items-start font-roboto">
    <div className="w-6 flex flex-col items-center h-full">
      <FaRegCircle className="w-6 h-6 text-white" aria-hidden="true" />
      {titel === 'Diverse temporäre Anstellungen bei Daimler AG' ? (
        <div className="w-0.5 h-full bg-gradient-to-b from-gray-600 via-gray-600 to-backgroundGray"></div>
      ) : (
        <div className="w-0.5 h-full bg-gradient-to-b from-gray-600 via-gray-600 to-gray-600"></div>
      )}
    </div>

    <div className="mb-16 min-h-32">
      <h1 className="text-white">
        <SlideUpWhenVisible delay={0.2} duration={0.4}>
          {titel}
        </SlideUpWhenVisible>
      </h1>
      <ul className="pl-0 md:pl-6 pt-2">
        {kinder &&
          kinder.map((kind, index) => (
            <SlideUpWhenVisible delay={0.3} duration={0.4} key={index}>
              <li className="py-1 flex">
                <span className="px-2">▷</span>
                {kind}
              </li>
            </SlideUpWhenVisible>
          ))}
      </ul>
    </div>
  </article>
));

const Arbeitserfahrung: React.FC = () => {
  const { t } = useTranslation();
  const arbeitserfahrungDaten: WorkExperienceData = t('arbeitserfahrungData', {
    returnObjects: true,
  }) as WorkExperienceData;

  return (
    <section className="px-2 py-6 text-gray-500 flex flex-col md:rounded-none rounded-3xl md:rounded-r-3xl md:mt-2 md:mr-2 md:mb-2">
      <SlideUpWhenVisible delay={0.1} duration={0.4}>
        <h1 className="text-3xl pb-8 text-white font-bold font-roboto text-center md:text-start">
          {arbeitserfahrungDaten.pageTitle}
        </h1>
      </SlideUpWhenVisible>

      {arbeitserfahrungDaten.data.map((abschnitt, index) => (
        <Erfahrungsabschnitt key={index} {...abschnitt} />
      ))}
    </section>
  );
};

export default Arbeitserfahrung;
