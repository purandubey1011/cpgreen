export const smoothEase = [0.16, 1, 0.3, 1];

export const viewportOnce = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -40px 0px",
};

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: smoothEase },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.75, ease: smoothEase },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.03,
    },
  },
};

export const imageReveal = {
  hidden: { opacity: 0, scale: 1.035 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease: smoothEase },
  },
};

export const heroImageReveal = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.05, ease: smoothEase },
  },
};

export const navMenu = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.28, ease: smoothEase },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.22, ease: smoothEase },
  },
};
