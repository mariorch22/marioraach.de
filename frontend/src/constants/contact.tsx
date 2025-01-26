export const ARROW_ANIMATIONS = {
  top: {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 0,
      scale: 1.5,
      y: -20,
      transition: { duration: 0.4, ease: 'easeInOut', delay: 0.1 },
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeInOut', delay: 0.2 },
    },
  },
  center: {
    initial: { opacity: 1, y: 0 },
    animate: {
      opacity: 1,
      scale: 1.5,
      y: 40,
      transition: { duration: 0.4, ease: 'easeInOut', delay: 0.1 },
    },
    hover: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.4, ease: 'easeInOut', delay: 0.1 },
    },
  },
  bottom: {
    initial: { opacity: 0.6, y: 0 },
    animate: {
      opacity: 1,
      scale: 1.5,
      y: 0,
      transition: { duration: 0.4, ease: 'easeInOut', delay: 0.1 },
    },
    hover: {
      y: 40,
      transition: { duration: 0.4, ease: 'easeInOut', delay: 0.1 },
    },
  },
} as const;
