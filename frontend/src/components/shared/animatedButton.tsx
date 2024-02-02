import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

interface ButtonProps {
    text: string;
    link: string;
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {

    const controls = useAnimation();

    const handleMouseEnter = () => {
        // Animation für das Einfliegen von unten
        controls.start({
            y: 0,
            opacity: 1,
            borderRadius: "100%",
            transition: { duration: 0.4 }
        });
    };

    const handleMouseLeave = () => {
        // Animation für das Ausfliegen nach oben
        controls.start({
            y: -100,
            opacity: 0,
            borderRadius: "80%",
            transition: { duration: 0.4 }
        }).then(() => {
            // Zurücksetzen auf die Ausgangsposition
            controls.set({ y: 100, opacity: 0 });
        });
    };



    return (
        <motion.button 
            className="relative w-24 h-24 bg-blue-500 flex justify-center items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                clipPath: 'circle(50% at 50% 50%)'
            }}
        >

            <motion.div 
                className="absolute inset-0 bg-blue-600"
                initial={{ y: 100, opacity: 0 }}
                animate={controls}
            />
            
            <Link to={link} className="w-full h-full">
                <div className="relative texl-2xl w-full h-full flex justify-center items-center">
                    <p className="text-2xl">{text}</p>
                </div>
            </Link>
        </motion.button>
    );
};

export default Button;
