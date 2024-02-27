import Typewriter from '../../animations/typewriter';
import SlideUpWhenVisible from '../../animations/slideUpWhenVisible';
import { TextGenerateEffect } from '../../ui_components/aceternity/text-generate-effect';

const About_Section1 = () => {

    const words = "Your brand is what people say about you when you're not in the room."

    return (
        <>
            <section className='min-w-screen min-h-svh grid xl:grid-cols-2 ' >
                <div className='sm:min-h-screen px-10 2xl:px-20 2xl:pl-40 rounded-br-3xl flex flex-col justify-center items-center'>
                    <TextGenerateEffect words={"\"" + words + "\""} className='text-gray-500 text-3xl sm:text-7xl font-roboto' />
                    <div className='text-2xl w-full text-end text-gray-600'><SlideUpWhenVisible delay={3.6} y={20}>Jeff Bezos</SlideUpWhenVisible></div>
                </div>
                <div className='p-10 order-first md:order-none sm:hidden flex justify-center xl:items-center xl:flex'>
                    <span className='w-full max-w-80 xl:max-w-[36rem] max-h-80 xl:max-h-[36rem] rounded-full shadow-lg shadow-white mt-20 md:mt-0 grayscale bg-hemd_small bg-center bg-cover'>
                        <img 
                            src='/images/hemd/hemd.webp'
                            loading='lazy'
                            alt='Bild von Mario im Hemd'
                            width={630}
                            height={630}
                            className='w-full rounded-full shadow-lg'
                        />
                    </span>
                </div>
            </section>
        </>
    )
}

export default About_Section1;