import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      if (window.lenis) {
        window.lenis.scrollTo(0, {
          duration: 0.8,
          force: true,
          lock: true,
          easing: (t) => 1 - Math.pow(1 - t, 4),
          onComplete: () => ScrollTrigger.refresh(),
        });
        return;
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      window.setTimeout(() => ScrollTrigger.refresh(), 850);
    };

    const frame = window.requestAnimationFrame(scrollToTop);

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
