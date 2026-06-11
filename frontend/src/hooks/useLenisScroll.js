import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const useLenisScroll = () => {
  useEffect(() => {
    if (prefersReducedMotion()) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.15,
      wheelMultiplier: 0.88,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    window.lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      if (window.lenis === lenis) {
        window.lenis = undefined;
      }
      lenis.destroy();
    };
  }, []);
};
