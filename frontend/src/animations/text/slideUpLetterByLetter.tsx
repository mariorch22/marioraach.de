import React, { useEffect, ReactNode } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedTitleProps {
  children: ReactNode;
}

const SlideUpLetterByLetter: React.FC<AnimatedTitleProps> = ({ children }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const characterAnimation = {
    hidden: { opacity: 0, y: '0.25em' },
    visible: {
      opacity: 1,
      y: '0em',
      transition: { delay: 1, duration: 1, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  };

  const isStringChildren = typeof children === 'string';

  return (
    <h2 ref={ref} aria-label={isStringChildren ? children : undefined} role="heading">
      {isStringChildren
        ? children.split('').map((character, index) => (
            <motion.span
              key={index}
              initial="hidden"
              animate={controls}
              variants={characterAnimation}
              style={{ display: 'inline-block', marginRight: '-0.05em' }}
            >
              {character}
            </motion.span>
          ))
        : children}
    </h2>
  );
};

export default React.memo(SlideUpLetterByLetter);
