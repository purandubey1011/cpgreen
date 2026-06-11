import React from "react";
import { AnimatedImage, Reveal } from "../common/Motion";

const OverallLayout = () => {
  return (
    <section className="bg-[#f3f3f3] py-14 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-center md:justify-between">
          <Reveal
            as="h2"
            className="text-3xl font-light tracking-tight text-[#704633] sm:text-4xl md:text-5xl"
          >
            Overall Block Layout
          </Reveal>

          <Reveal
            as="p"
            className="text-base font-light text-[#444] md:text-xl"
          >
            A bird's-eye view of your dream lifestyle.
          </Reveal>
        </div>

        <Reveal className="flex justify-center">
          <AnimatedImage
            src="/plans/overall/bg.png"
            alt="Overall Block Layout"
            wrapperClassName="w-full max-w-4xl"
            className="w-full object-contain"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default OverallLayout;
