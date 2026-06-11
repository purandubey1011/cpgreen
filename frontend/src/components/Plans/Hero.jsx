import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-[78svh] overflow-hidden bg-[#f3f3f3] md:min-h-screen">
      <img
        src="/plans/hero/bg.jpg"
        alt="Unit Plans"
        className="absolute inset-0 h-[120%] w-full object-cover object-top md:h-[150%]"
        data-hero-image
        data-parallax="-5"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex min-h-[78svh] items-center justify-center px-4 pt-20 md:min-h-screen">
        <h1
          data-split
          className="text-center text-4xl font-medium uppercase tracking-[0.16em] text-white sm:text-6xl sm:tracking-[0.22em] md:text-8xl md:tracking-[0.25em]"
        >
          Unit Plans
        </h1>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
};

export default Hero;
