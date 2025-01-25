import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion"

const AnimatedLogo = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const imageSize = { width: 40, height: 40 };
  const originPosition = { x: 15, y: 15 };

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const originX = rect.width / 2 - imageSize.width / 2;
      const originY = rect.height / 2 - imageSize.height / 2;
      setMousePosition({ x: originX, y: originY });
    }
  }, []);


  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left - imageSize.width / 2,
        y: e.clientY - rect.top - imageSize.height / 2
      });
    }
  };  

  const handleMouseLeave = () => {
    setMousePosition(originPosition);
  };

    return(
      <div ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="w-20 h-20 relative mix-blend-difference">
        <Link to={"/"}>
          <motion.img
              src="/images/logo_r.png"
              alt="Folgendes Bild"
              className="invert z-40 mix-blend-difference"
              width={40}
              height={40}
              style={{ position: 'absolute', width: imageSize.width, height: imageSize.height }}
              animate={{ x: mousePosition.x, y: mousePosition.y }}
          />
        </Link>
      </div>
    )
}

export default AnimatedLogo