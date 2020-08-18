

export const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: .7
};
  
export const pageStyle = {
  display: "flex"
};

export const pageVariants = {

    initial: {
      opacity: 0,
      y: 500,
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      y: 0,  
      scale: 1
    }
  };