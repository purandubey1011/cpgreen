import React from "react";
import { motion as Motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { AnimatedImage, Reveal } from "../common/Motion";

const ExploreUnit = () => {
  return (
    <section className="relative min-h-[540px] w-full overflow-hidden bg-[#f3f3f3] py-14 md:h-[520px] md:min-h-0 md:py-0">
      <img
        src="/home/exploreunit/bg1.jpg"
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto flex h-full min-h-[420px] w-full max-w-[1000px] items-center px-4 sm:px-6 md:min-h-0 lg:px-8">
        <Reveal className="relative grid w-full overflow-hidden shadow-2xl md:grid-cols-[320px_1fr]">
          <div className="relative z-20 flex min-h-[280px] flex-col bg-[#704633] px-5 py-6 text-white sm:px-6 md:h-[360px] md:min-h-0">
            <p className="mb-10 text-[16px] font-light">
              More Life Per Sq. ft.
            </p>

            <h2 className="text-2xl font-semibold leading-[1.15] tracking-tight">
              Carefully curated <br /> homes
            </h2>

            <Motion.a
              href="/plans"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-auto flex min-h-11 w-fit items-center gap-2 bg-white px-4 py-3 text-[11px] font-medium uppercase tracking-wide text-[#704633] shadow-sm transition hover:shadow-lg"
            >
              Explore Unit Plans
              <ChevronRight size={14} />
            </Motion.a>
          </div>

          <AnimatedImage
            src="/home/exploreunit/bg2.jpg"
            alt="Carefully curated homes"
            wrapperClassName="group min-h-[280px] md:h-[360px] md:min-h-0"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.075]"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default ExploreUnit;
