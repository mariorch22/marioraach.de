import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface CountUpProps {
  start: number;
  end: number;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ start, end, duration = 2 }) => {
  const count = useMotionValue(start);
  const roundedCount = useTransform(count, Math.round);

  React.useEffect(() => {
    const controls = animate(count, end, { duration });

    return controls.stop;
  }, [count, end, duration]);

  return <motion.h1>{roundedCount}</motion.h1>;
};

export default CountUp;
