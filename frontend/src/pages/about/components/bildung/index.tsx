import React from 'react';
import { FaRegCircle } from 'react-icons/fa';
import SlideUpWhenVisible from '@/animations/slideUpWhenVisible';
import { useTranslation } from 'react-i18next';

interface EducationData {
  pageTitle: string;
  data: EducationInfo[];
}

interface EducationInfo {
  schoolName: string;
  kinder: EducationDetail[];
}

interface EducationDetail {
  titel: string;
  inhalt: string;
}

const Erfahrungsabschnitt: React.FC<EducationInfo> = React.memo(({ schoolName, kinder }) => (
  <article className="w-full h-auto grid grid-cols-[1fr_8fr] md:grid-cols-[1fr_12fr] md:items-start font-roboto">
    <div className="w-6 flex flex-col items-center h-full">
      <FaRegCircle className="w-6 h-6 text-white" aria-hidden="true" />
      {schoolName === 'Gymnasium Gammertingen' ? (
        <div className="w-0.5 h-full bg-gradient-to-b from-gray-600 via-gray-600 to-backgroundGray"></div>
      ) : (
        <div className="w-0.5 h-full bg-gradient-to-b from-gray-600 via-gray-600 to-gray-600"></div>
      )}
    </div>

    <div className="mb-16 min-h-32">
      <SlideUpWhenVisible delay={0.2} duration={0.4}>
        <h1 className="text-white">{schoolName}</h1>
      </SlideUpWhenVisible>
      <SlideUpWhenVisible delay={0.3} duration={0.4}>
        <ul className="pl-0 md:pl-6 pt-2">
          {kinder.map((kind, index) => (
            <li className="py-1 flex" key={index}>
              {' '}
              <span className="px-2">▷</span>{' '}
              <span>
                <span className="text-white">{kind.titel}:</span>
                <br />
                {kind.inhalt}
              </span>
            </li>
          ))}
        </ul>
      </SlideUpWhenVisible>
    </div>
  </article>
));

const Bildung: React.FC = () => {
  const { t } = useTranslation();

  const bildungsDaten: EducationData = t('bildungData', { returnObjects: true }) as EducationData;

  return (
    <section className="px-2 py-6 text-gray-500 flex flex-col md:rounded-none rounded-3xl md:rounded-r-3xl md:mt-2 md:mr-2 md:mb-2">
      <SlideUpWhenVisible delay={0.1} duration={0.4}>
        <h1 className="text-3xl pb-8 text-white font-bold font-roboto text-center md:text-start">
          {bildungsDaten.pageTitle}
        </h1>
      </SlideUpWhenVisible>

      {bildungsDaten.data.map((abschnitt: EducationInfo, index: number) => (
        <Erfahrungsabschnitt key={index} {...abschnitt} />
      ))}
    </section>
  );
};

export default Bildung;
