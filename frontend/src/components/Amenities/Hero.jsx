import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-[78svh] overflow-hidden bg-[#f3f3f3] md:min-h-screen">
      <img
        src="/amenities/hero/bg.png"
        alt="Amenities"
        className="absolute inset-0 h-[108%] w-full object-cover"
        data-hero-image
        data-parallax="-6"
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="relative z-10 flex min-h-[78svh] items-center justify-center px-4 pt-20 md:min-h-screen">
        <h1
          data-split
          className="text-center text-4xl font-normal uppercase tracking-[0.18em] text-white sm:text-6xl sm:tracking-[0.28em] md:text-8xl md:tracking-[0.35em]"
        >
          Amenities
        </h1>
      </div>
    </section>
  );
};

export default Hero;
