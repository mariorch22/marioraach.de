import React, {Suspense, lazy} from 'react';
import { FaHtml5, FaCss3, FaDocker, FaReact, FaAws  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { DiMongodb, DiMysql, DiPostgresql, DiNodejs } from "react-icons/di";
import { SiSqlite } from "react-icons/si";
import SlideUpWhenVisible from '../../animations/slideUpWhenVisible';
import { InfiniteMovingCards } from '../../ui_components/aceternity/infinite-moving-cars';
const Technik = lazy(() => import("./technik"));

const size = 50
const color = "white"

const icons = [
    <FaHtml5 size={size} color={color} aria-hidden="true" />,
    <FaCss3 size={size} color={color} aria-hidden="true" />,
    <IoLogoJavascript size={size} color={color} aria-hidden="true" />,
    <DiNodejs size={size} color={color} aria-hidden="true" />,
    <BiLogoTypescript size={size} color={color} aria-hidden="true" />,
    <FaReact size={size} color={color} aria-hidden="true" />,
    <FaDocker size={size} color={color} aria-hidden="true" />,
    <FaAws size={size} color={color} aria-hidden="true" />,
    <DiMongodb size={size} color={color} aria-hidden="true" />,
    <DiMysql size={size} color={color} aria-hidden="true" />,
    <DiPostgresql size={size} color={color} aria-hidden="true"  />,
    <SiSqlite size={size} color={color} aria-hidden="true" />
];

const About_Section5 = () => {

    return (
        <>
            <section className='min-w-screen md:px-40 flex flex-col gap-20 pb-10' >
                <Suspense fallback={<div>Lädt...</div>}>
                    <Technik /> 
                </Suspense>     
                <SlideUpWhenVisible>
                    <Suspense fallback={<div>Lädt...</div>}>
                        <InfiniteMovingCards
                            items={icons}
                            direction="right"
                            speed="slow"
                        />
                    </Suspense>
                </SlideUpWhenVisible>              
            </section>
        </>
    )
}

export default React.memo(About_Section5);
