const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

export const smoothScrollTo = (element: HTMLElement): void => {
  const targetPosition = element.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition;
  const duration = 1000;
  let start: number | null = null;

  const step = (timestamp: number): void => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const progressRatio = Math.min(progress / duration, 1);
    const easeInOut = easeInOutCubic(progressRatio);

    window.scrollTo(0, startPosition + distance * easeInOut);

    if (progress < duration) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};
