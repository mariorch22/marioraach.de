import React, {Suspense, lazy} from 'react';
const Bildung = lazy(() => import("./bildung"));
const Arbeitserfahrung = lazy(() => import("./arbeitserfahrung"));

const About_Section3 = () => {

    return (
        <>
            <div className='h-auto min-w-screen grid md:grid-cols-2 md:gap-16 md:px-40 md:py-16' >
                <Suspense fallback={<div>Lädt...</div>}>
                    <Arbeitserfahrung />
                </Suspense>
                <Suspense fallback={<div>Lädt...</div>}>
                    <Bildung />
                </Suspense>
            </div>
        </>
    )
}

export default React.memo(About_Section3);
