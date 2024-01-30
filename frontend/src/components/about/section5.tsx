import React, {Suspense, lazy} from 'react';
import { FaHtml5, FaCss3, FaDocker, FaReact, FaAws  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { DiMongodb, DiMysql, DiPostgresql, DiNodejs } from "react-icons/di";
import { SiSqlite } from "react-icons/si";
import SlideUpWhenVisible from '../../animations/slideUpWhenVisible';
const Technik = lazy(() => import("./technik"));
const LogoSliderReactIcons = lazy(() => import("../shared/logoSliderReactIcons"));

const size = 50
const color = "white"

const icons = [
    <FaHtml5 size={size} color={color} />,
    <FaCss3 size={size} color={color} />,
    <IoLogoJavascript size={size} color={color} />,
    <DiNodejs size={size} color={color} />,
    <BiLogoTypescript size={size} color={color} />,
    <FaReact size={size} color={color} />,
    <FaDocker size={size} color={color} />,
    <FaAws size={size} color={color} />,
    <DiMongodb size={size} color={color} />,
    <DiMysql size={size} color={color} />,
    <DiPostgresql size={size} color={color}  />,
    <SiSqlite size={size} color={color} />
];

const About_Section5 = () => {

    return (
        <>
            <div className='min-w-screen md:px-40 flex flex-col gap-20 pb-10' >
                <Suspense fallback={<div>Lädt...</div>}>
                    <Technik /> 
                </Suspense>     
                <SlideUpWhenVisible>
                    <Suspense fallback={<div>Lädt...</div>}>
                        <LogoSliderReactIcons icons={icons} />
                    </Suspense>
                </SlideUpWhenVisible>              
            </div>
        </>
    )
}

export default React.memo(About_Section5);
