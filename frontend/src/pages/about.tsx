import React, { Suspense } from 'react';
import AnimatedPage from '../animations/pageTransition';
import Navbar from '../components/navbar';
import { Helmet } from 'react-helmet';

const About_Section1 = React.lazy(() => import("../components/about/section1"));
const About_Section2 = React.lazy(() => import("../components/about/section2"));
const About_Section4 = React.lazy(() => import("../components/about/section4"));
const About_Section5 = React.lazy(() => import("../components/about/section5"));

const About = () => {
    return (
        <>
        <Helmet>
            <title>Profil von Mario Raach - Industriekaufmann und Webentwickler</title>
            <meta name="description" content="Mario Raach bringt eine vielseitige Erfahrung aus der Ausbildung zum Industriekaufmann bei TRIGEMA, Praktika bei Epsilon International und technischen Kenntnissen in Webentwicklung und Datenverarbeitung mit. Entdecken Sie seine berufliche Laufbahn, ehrenamtliche Tätigkeiten und fachliche Kompetenzen." />
            <meta name="keywords" content="Industriekaufmann, Webentwickler, TRIGEMA Ausbildung, Epsilon International Praktikum, Microsoft Dynamics AX, Adobe Creative Cloud, Microsoft Office, JavaScript, TypeScript, ReactJS, Python, MySQL, MongoDB, Ehrenamt, Jugendtrainer, Jungpfadfindergruppenleiter" />
        </Helmet>

        <Suspense fallback={<div className='min-h-screen min-w-screen bg-backgroundGray'></div>}>
            <AnimatedPage>
                <Navbar />
                <div className='flex flex-col gap-8 bg-backgroundGray overflow-hidden'>
                    <About_Section1 />
                    <div className="divider"></div>
                    <About_Section2 />
                    <div className="divider"></div>
                    <About_Section4 />
                    <div className="divider"></div>
                    <About_Section5 />
                </div>
            </AnimatedPage>
        </Suspense>
        </>
    );
}

export default React.memo(About);
