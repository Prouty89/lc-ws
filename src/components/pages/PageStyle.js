

export const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
};
  
export const pageStyle = {
  display: "flex"
};

export const pageVariants = {
    initial: {
      opacity: 0,
     
      scale: 0.2
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 0.7
    },
    out: {
      opacity: .5,
      x: "100vw",  
      scale: 1
    }
  };