export const ANIMATION_CONSTANTS = {
    SCROLL_THRESHOLD: 50,
    TRANSITION_DURATION: 0.6,
    TRANSITION_DELAY: 0.3
  };

  // constants/animations.ts
export const NAVBAR_ANIMATIONS = {
    underline: {
      hidden: {
        pathLength: 0,
        opacity: 0,
      },
      visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
          delay: 0.2
        }
      },
    },
    background: {
      normal: {
        backdropFilter: "blur(15px)",
        backgroundColor: "rgba(17, 17, 17, 0.8)"
      },
      currentPositionUnder50PX: {
        backdropFilter: "blur(0px)",
        backgroundColor: "rgba(0, 0, 0, 0)"
      }
    }
  } as const;