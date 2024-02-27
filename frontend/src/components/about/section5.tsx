import React, {Suspense, lazy} from 'react';
import { FaHtml5, FaCss3, FaDocker, FaReact, FaAws  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { DiMongodb, DiMysql, DiPostgresql, DiNodejs } from "react-icons/di";
import { SiSqlite } from "react-icons/si";
import SlideUpWhenVisible from '../../animations/slideUpWhenVisible';
import { InfiniteMovingCards } from '../../ui_components/aceternity/infinite-moving-cars';
const Technik = lazy(() => import("./technik"));
const LogoSliderReactIcons = lazy(() => import("../shared/logoSliderReactIcons"));

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

const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
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
                        items={testimonials}
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
