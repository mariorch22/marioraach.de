import React from 'react';
import Navbar from '../../components/navbar/index';
import German2Swabian from './components/german2Swabian';
import Swabian2German from './components/swabian2German';

const Work = () => {

    return (
        <>
            <Navbar />
            <div className='flex justify-center flex-col pt-40 w-full'>
                <h3 className="text-center text-3xl">
                    Übersetzer-Projekt
                </h3>
                <German2Swabian />
                <Swabian2German />
            </div>
        </>
    )
}

export default React.memo(Work)
