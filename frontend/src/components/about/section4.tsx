import React, { Suspense, lazy } from 'react';
const Ehrenamt = lazy(() => import("./ehrenamt"));

const About_Section4 = () => {

    return (
        <>
            <section className='h-auto min-w-screen grid md:grid-cols-1 md:px-4 lg:px-8 xl:px-20 2xl:px-40 md:py-6' >
                <Suspense fallback={<div>Lädt...</div>}>
                    <Ehrenamt />
                </Suspense>
            </section>
        </>
    )
}

export default React.memo(About_Section4);
