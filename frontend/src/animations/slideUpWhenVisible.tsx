import { motion } from "framer-motion";
import React, { useMemo } from 'react';


interface PopUpProps {
  children: React.ReactNode;
  duration?: number; // Optional, default value can be set
  delay?: number; // Optional, default value can be set
  ease?: string;
}

function SlideUpWhenVisible({children, duration = 0.6, delay = 0.4, ease="easeInOut",}: PopUpProps) {

  const variants = useMemo(() => ({
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 }
  }), []);
  
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: duration, delay: delay, ease:ease }}
        variants={variants}
      >
        {children}
      </motion.div>
    );
  }

  export default React.memo(SlideUpWhenVisible);