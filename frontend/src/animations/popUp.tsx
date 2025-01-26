import { motion } from 'framer-motion';
import React from 'react';

interface PopUpProps {
  children: React.ReactNode;
  duration?: number; // Optional, default value can be set
  delay?: number; // Optional, default value can be set
}

function PopUp({ children, duration = 0.4, delay = 0.3 }: PopUpProps) {
  const animationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animationVariants}
      transition={{ duration: duration, delay: delay }}
    >
      {children}
    </motion.div>
  );
}

export default PopUp;
