import { motion } from "framer-motion";
import React from "react";

interface PopUpProps {
  children: React.ReactNode;
  from?: "left" | "right"; // Neue Eigenschaft, um die Richtung zu bestimmen
}

function SlideInFromSide({ children, from = "left" }: PopUpProps) {
  const xInitial = from === "left" ? -50 : 50; // Startpunkt basierend auf der Richtung

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.5, ease:"easeInOut" }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: xInitial }
      }}
    >
      {children}
    </motion.div>
  );
}

export default SlideInFromSide;
