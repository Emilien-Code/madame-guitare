import React from "react";
import Lenis from "@studio-freight/lenis";

function useSmoothScroll(dir) {
  const [lenis, setLenis] = React.useState(null);

  React.useLayoutEffect(() => {
    if (window.lenis) return window.lenis;
    const l = dir==="horizontal" ? new Lenis({
      duration: window.innerWidth > 768 ? 1.2 : 3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      smooth: true,
      direction: dir,
      gestureDirection: 'both',
      // wrapper: document.querySelector("body"), // element that has overflow
      mouseMultiplier: 1,
      smoothTouch: true,
      touchMultiplier: 4,
      infinite: false,
      wrapper: document.querySelector("main"),
      content: document.querySelector(".scroll-container"),
    }) : new Lenis({
      duration: window.innerWidth > 768 ? 1.2 : 3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      smooth: true,
      direction: dir,
      gestureDirection: 'both',
      // wrapper: document.querySelector("body"), // element that has overflow
      mouseMultiplier: 1,
      smoothTouch: true,
      touchMultiplier: 4,
      infinite: false,
    })
    

    setLenis(l);

    const scrollFn = (time) => {
      l.raf(time);
      requestAnimationFrame(scrollFn);
    };


    requestAnimationFrame(scrollFn);

    window.lenis = l;

    l?.stop();
    return lenis?.destroy();
  }, []);

  return lenis;
}

export default useSmoothScroll;
