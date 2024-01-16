import React from 'react';
import AnimatedPage from '../animations/pageTransition';

const Blog = () => {

    return (
        <>
             <AnimatedPage>
                <div className='bg-red-900 min-h-screen pt-20'>
                    Bloggy
                </div>
            </AnimatedPage>

        </>
    )
}

export default React.memo(Blog)
