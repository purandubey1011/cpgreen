import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#f3f3f3]">
      <img
        src="/home/hero/hero.jpg"
        alt="CP Greens Siliguri"
        className="absolute inset-0 h-[112%] w-full object-cover object-center"
        data-hero-image
        data-parallax="-7"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-4 pb-24 pt-32 text-white sm:px-7 sm:pb-10">
        <div
          data-hero-reveal
          className="mb-6 w-fit bg-slate-800/70 px-4 py-3 text-xs font-semibold tracking-tight backdrop-blur-sm sm:text-[15px]"
        >
          EXCLUSIVE - 3/4 BHKs | FLOORS G+8
        </div>

        <p
          data-hero-reveal
          className="mb-4 text-lg font-light leading-none sm:text-[24px]"
        >
          2.5 mile, Siliguri
        </p>

        <h1
          data-split
          className="mb-4 max-w-[920px] text-5xl font-light leading-[0.98] tracking-tight sm:text-6xl md:text-[78px]"
        >
          CP Greens Siliguri
        </h1>

        <p
          data-hero-reveal
          className="max-w-full text-xs font-light tracking-[3px] text-white/80 sm:text-[15px] sm:tracking-[7px]"
        >
          RERA No: WBRERA/P/JAL/2023/000319
        </p>
      </div>

      <button
        type="button"
        className="hero-brochure-btn group absolute bottom-6 left-4 z-20 overflow-hidden bg-[#7b4d3d] px-5 py-3 text-xs font-semibold uppercase text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 active:scale-[0.98] sm:bottom-9 sm:left-auto sm:right-7 sm:px-6 sm:py-4 sm:text-[14px]"
      >
        <span className="absolute inset-0 -translate-x-full bg-white/12 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
        <span className="relative">Download Brochure</span>
      </button>
    </section>
  );
};

export default Hero;
