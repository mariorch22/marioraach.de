import { motion } from 'framer-motion';
import React from 'react';

interface PopUpProps {
  children: React.ReactNode;
}

function FadeInWhenVisible({ children }: PopUpProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0 }}
      variants={{
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 1, y: 20 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInWhenVisible;
