import { motion } from "framer-motion";

const words = {
    de: {word: "Hallo", delay: 0},
    en: {word: "Hello", delay: 0.3},
    ee: {word: "Moin", delay: 0.6},
    we: {word: "Hallo", delay: 0.9},
};

const variants = {
    visible: { opacity: 1, y: 0, rotate: 0, borderRadius: "0%"},
    hidden: { opacity: 1, y: "-100vh", rotate: 0, borderRadius: "100%", transition: { delay:3, duration: 1}},
};

const variantsWords = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const HelloAnimation = () => {
    return (
        <motion.div
            className="bg-backgroundGray fixed w-full h-screen z-50 flex justify-center items-center"
            initial="visible"
            animate="hidden"
            variants={variants} 
        >
            {Object.entries(words).map(([key, value]) => (
                <motion.div
                    key={key}
                    initial="hidden"
                    animate="visible"
                    variants={variantsWords} 
                    transition={{delay: value.delay}}
                >
                    <h1 className="text-white text-5xl">{value.word}</h1>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default HelloAnimation;
