import React from 'react';
import { motion } from 'framer-motion';
import { ARROW_ANIMATIONS } from '@/constants/contact';

const AnimatedSvgComponent: React.FC = () => {
  return (
    <motion.svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <g id="Frame 1">
        <rect width="120" height="120" />
        <motion.g id="arrow_center" variants={ARROW_ANIMATIONS.top}>
          <path
            id="Vector_1"
            d="M55 42.0327L33.447 20.4244C31.8386 18.8102 29.231 18.8102 27.6228 20.4244C26.0146 22.0384 26.0146 24.6556 27.6228 26.2701L51.881 50.5904C52.738 51.4506 53.878 51.8377 55 51.7811C56.1222 51.8377 57.2621 51.4506 58.1191 50.5904L82.3773 26.2701C83.9857 24.6558 83.9857 22.0387 82.3773 20.4244C80.7689 18.8101 78.1614 18.8102 76.5534 20.4244L55 42.0327Z"
            fill="gray"
            fill-opacity="0.8"
          />
        </motion.g>
        <motion.g id="arrow_top" variants={ARROW_ANIMATIONS.center}>
          <path
            id="Vector_2"
            d="M55 42.0327L33.447 20.4244C31.8386 18.8102 29.231 18.8102 27.6228 20.4244C26.0146 22.0384 26.0146 24.6556 27.6228 26.2701L51.881 50.5904C52.738 51.4506 53.878 51.8377 55 51.7811C56.1222 51.8377 57.2621 51.4506 58.1191 50.5904L82.3773 26.2701C83.9857 24.6558 83.9857 22.0387 82.3773 20.4244C80.7689 18.8101 78.1614 18.8102 76.5534 20.4244L55 42.0327Z"
            fill="gray"
            fill-opacity="0.4"
          />
        </motion.g>
        <motion.g id="arrow_bottom" variants={ARROW_ANIMATIONS.bottom}>
          <path
            id="Vector_3"
            d="M55 42.0327L33.447 20.4244C31.8386 18.8102 29.231 18.8102 27.6228 20.4244C26.0146 22.0384 26.0146 24.6556 27.6228 26.2701L51.881 50.5904C52.738 51.4506 53.878 51.8377 55 51.7811C56.1222 51.8377 57.2621 51.4506 58.1191 50.5904L82.3773 26.2701C83.9857 24.6558 83.9857 22.0387 82.3773 20.4244C80.7689 18.8101 78.1614 18.8102 76.5534 20.4244L55 42.0327Z"
            fill="gray"
            fill-opacity="0.6"
          />
        </motion.g>
      </g>
    </motion.svg>
  );
};

export default AnimatedSvgComponent;
