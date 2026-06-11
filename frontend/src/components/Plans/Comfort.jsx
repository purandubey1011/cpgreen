import React from "react";
import { AnimatedImage, Reveal } from "../common/Motion";

const Comfort = () => {
  return (
    <section className="bg-[#704633] py-14 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal
          as="h2"
          className="mb-8 text-3xl font-light tracking-tight text-white sm:text-4xl md:mb-10 md:text-5xl"
        >
          Your Comfort is our Priority!
        </Reveal>

        <Reveal>
          <AnimatedImage
            src="/plans/comfort/bg.png"
            alt="Comfort Amenities"
            wrapperClassName="h-[320px] sm:h-[420px] lg:h-[500px]"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.065]"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Comfort;
