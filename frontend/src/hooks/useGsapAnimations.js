import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ease = "power4.out";

const getReduceMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const splitWords = (element) => {
  if (element.dataset.splitReady === "true") return;

  const text = element.textContent.trim();
  element.textContent = "";
  element.setAttribute("aria-label", text);
  element.dataset.splitReady = "true";

  text.split(" ").forEach((word, index, list) => {
    const span = document.createElement("span");
    span.className = "motion-word";
    span.textContent = word;
    element.appendChild(span);
    if (index < list.length - 1) {
      element.appendChild(document.createTextNode(" "));
    }
  });
};

export const useGsapAnimations = (dependency) => {
  useEffect(() => {
    const reducedMotion = getReduceMotion();

    if (reducedMotion) {
      gsap.set("[data-reveal], [data-image-reveal], [data-split]", {
        clearProps: "all",
        opacity: 1,
      });
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-image]",
        { scale: 1.08 },
        {
          scale: 1,
          duration: 1.45,
          ease,
        },
      );

      gsap.fromTo(
        "[data-hero-reveal]",
        { y: 34, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          delay: 0.55,
          stagger: 0.13,
          ease,
        },
      );

      document.querySelectorAll("[data-split]").forEach((heading) => {
        splitWords(heading);
        gsap.set(heading, { visibility: "visible" });
        gsap.fromTo(
          heading.querySelectorAll(".motion-word"),
          { yPercent: 105, autoAlpha: 0 },
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.9,
            stagger: 0.045,
            ease,
            scrollTrigger: {
              trigger: heading,
              start: "top 84%",
              once: true,
            },
          },
        );
      });

      document.querySelectorAll("[data-reveal]").forEach((element) => {
        const delay = Number(element.dataset.delay || 0);
        gsap.fromTo(
          element,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            delay,
            ease,
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          },
        );
      });

      document.querySelectorAll("[data-stagger]").forEach((group) => {
        const items = group.querySelectorAll("[data-stagger-item]");
        const fallbackItems = items.length ? items : group.children;
        if (!fallbackItems.length) return;

        gsap.fromTo(
          fallbackItems,
          { y: 36, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.85,
            stagger: 0.09,
            ease,
            scrollTrigger: {
              trigger: group,
              start: "top 84%",
              once: true,
            },
          },
        );
      });

      document.querySelectorAll("[data-image-reveal]").forEach((wrap) => {
        const image = wrap.querySelector("img");
        if (!image) return;

        gsap.set(wrap, {
          visibility: "visible",
          clipPath: "inset(14% 0% 0% 0%)",
        });
        gsap.set(image, { scale: 1.08, yPercent: 4 });

        gsap.to(wrap, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.05,
          ease,
          scrollTrigger: {
            trigger: wrap,
            start: "top 86%",
            once: true,
          },
        });

        gsap.to(image, {
          scale: 1,
          yPercent: 0,
          duration: 1.25,
          ease,
          scrollTrigger: {
            trigger: wrap,
            start: "top 86%",
            once: true,
          },
        });
      });

      document.querySelectorAll("[data-parallax]").forEach((element) => {
        gsap.to(element, {
          yPercent: Number(element.dataset.parallax || -8),
          ease: "none",
          scrollTrigger: {
            trigger: element.parentElement || element,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      });

      document.querySelectorAll("[data-count]").forEach((element) => {
        const target = Number(element.dataset.count);
        if (Number.isNaN(target)) return;

        const state = { value: 0 };
        gsap.to(state, {
          value: target,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
          onUpdate: () => {
            element.textContent = Math.round(state.value).toLocaleString("en-IN");
          },
        });
      });

      ScrollTrigger.refresh();
    });

    return () => context.revert();
  }, [dependency]);
};
