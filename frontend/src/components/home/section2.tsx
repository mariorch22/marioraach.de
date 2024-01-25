import React from 'react';
import { Button } from '../../shadn/components/ui/button';
 
export function Section2() {

    return (
        <>
            <div className='min-h-svh' >
                <div className='px-4 py-4 '>
                    <p className='text-xl'>
                        Hobby-Webentwickler mit einem Flair für innovative, benutzerzentrierte Designs. Ich baue ein Projekte, die sich durch Kreativität und technische Exzellenz auszeichnen. Gemeinsam setzen wir neue Maßstäbe im digitalen Raum.
                    </p>
                </div>
                <div className='h-52 bg-red-400'>
                    ThreeJS
                </div>
                <div>
                    <Button>Zu meinen Prejekten</Button>
                </div>
            </div>
        </>
    )
}

export default React.memo(Section2);
