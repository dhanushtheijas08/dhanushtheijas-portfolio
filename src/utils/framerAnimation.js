export function slideInFromLeft(delayTime) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delayTime,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delayTime) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delayTime,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromTop() {
  return {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };
}
