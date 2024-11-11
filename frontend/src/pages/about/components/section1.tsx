import FadeInWhenVisible from '../../../animations/fadeInWhefVisible';
import { TextGenerateEffect } from '../../../ui_components/aceternity/text-generate-effect';
import { useTranslation } from 'react-i18next';

interface TextContent {
    pageTitle: string
}

const About_Section1 = () => {

    const {t} = useTranslation();
    const arbeitserfahrungDaten: TextContent = t("aboutHeadline", { returnObjects: true }) as TextContent;

    console.log(arbeitserfahrungDaten.pageTitle)
    return (
        <>
            <section className='min-w-screen min-h-svh grid xl:grid-cols-2 ' >
                <div className='sm:min-h-screen 2xl:px-20 2xl:pl-40 rounded-br-3xl flex flex-col justify-start sm:justify-center items-center'>
                    <TextGenerateEffect words={arbeitserfahrungDaten.pageTitle} className='text-gray-500 text-6xl sm:text-[6rem] lg:text-[8rem] font-roboto opacity-100 font-[4rem]' />
                </div>
                <div className='order-first md:order-none sm:hidden flex justify-center items-center xl:items-center xl:flex opacity-60'>
                    <span className='w-full h-auto max-w-80 xl:max-w-[36rem] max-h-80 xl:max-h-[36rem] rounded-full shadow-lg shadow-white mt-20 md:mt-0'>
                        <FadeInWhenVisible>
                            <span className='w-full h-auto max-w-80 xl:max-w-[36rem] max-h-80 xl:max-h-[36rem] rounded-full shadow-lg shadow-white mt-20 md:mt-0 grayscale bg-hemd_small bg-center bg-cover'>
                                <img 
                                    src='/images/hemd/hemd.webp'
                                    loading='lazy'
                                    alt='Bild von Mario im Hemd'
                                    width={630}
                                    height={630}
                                    className='w-full rounded-full shadow-lg'
                                />
                            </span>
                        </FadeInWhenVisible>
                    </span>
                </div>
            </section>
        </>
    )
}

export default About_Section1;