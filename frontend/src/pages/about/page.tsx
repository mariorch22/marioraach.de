import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const About_Section1 = React.lazy(() => import('./components/section1'));
const About_Section2 = React.lazy(() => import('./components/section2'));
const About_Section4 = React.lazy(() => import('./components/section3'));

const About = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <title>{i18n.language === 'de' ? 'Über mich' : 'About me'}</title>
      <meta
        name="description"
        content="Mario Raach bringt eine vielseitige Erfahrung aus der Ausbildung zum Industriekaufmann bei TRIGEMA, Praktika bei Epsilon International und technischen Kenntnissen in Webentwicklung und Datenverarbeitung mit. Entdecken Sie seine berufliche Laufbahn, ehrenamtliche Tätigkeiten und fachliche Kompetenzen."
      />
      <meta
        name="keywords"
        content="Industriekaufmann, Webentwickler, TRIGEMA Ausbildung, Epsilon International Praktikum, Microsoft Dynamics AX, Adobe Creative Cloud, Microsoft Office, JavaScript, TypeScript, ReactJS, Python, MySQL, MongoDB, Ehrenamt, Jugendtrainer, Jungpfadfindergruppenleiter"
      />

      <Suspense fallback={<div className="min-h-screen min-w-screen"></div>}>
        <div className="flex flex-col gap-8 overflow-hidden">
          <About_Section1 />
          <div className="divider"></div>
          <About_Section2 />
          <div className="divider"></div>
          <About_Section4 />
        </div>
      </Suspense>
    </>
  );
};

export default About;
