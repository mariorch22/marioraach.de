import React, {Suspense, lazy} from 'react';
const Bildung = lazy(() => import("./bildung/index"));
const Arbeitserfahrung = lazy(() => import("./arbeitserfahrung"));

const About_Section3 = () => {

    return (
        <>
            <div className='h-auto min-w-screen grid md:grid-cols-2 md:gap-16 md:px-4 lg:px-8 xl:px-20 2xl:px-40 md:py-16' >
                <Suspense fallback={<div>Lädt...</div>}>
                    <Arbeitserfahrung />
                </Suspense>
                <div className="md:hidden h-1 w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-500 via-backgroundGray to-backgroundGray"></div>
                <Suspense fallback={<div>Lädt...</div>}>
                    <Bildung />
                </Suspense>
            </div>
        </>
    )
}

export default React.memo(About_Section3);
