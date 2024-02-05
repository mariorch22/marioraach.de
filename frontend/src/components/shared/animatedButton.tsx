import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import React, { ReactNode } from "react";


interface ButtonProps {
    content: ReactNode;
    link: string;
}

const Button: React.FC<ButtonProps> = ({ content, link }) => {
    const controls = useAnimation();

    const handleMouseEnter = () => {
        controls.start({
            y: 0,
            opacity: 1,
            borderRadius: "100%",
            transition: { duration: 0.4 }
        });
    };

    const handleMouseLeave = () => {
        controls.start({
            y: -100,
            opacity: 0,
            borderRadius: "80%",
            transition: { duration: 0.4 }
        }).then(() => {
            controls.set({ y: 100, opacity: 0 });
        });
    };

    return (
        <motion.button 
            className="relative w-16 md:w-24 h-16 md:h-24 flex justify-center items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                clipPath: 'circle(50% at 50% 50%)'
            }}
        >
            <motion.div 
                className="absolute inset-0 bg-blue-600 z-20"
                initial={{ y: 100, opacity: 0 }}
                animate={controls}
            />

            <Link to={link} className="w-full h-full flex justify-center items-center z-40 p-2 md:p-4 b">
                {content}
            </Link>
        </motion.button>
    );
};

export default React.memo(Button);
