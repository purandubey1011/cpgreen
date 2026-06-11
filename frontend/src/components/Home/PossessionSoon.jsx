import React from "react";
import { motion as Motion } from "framer-motion";
import { Play } from "lucide-react";
import { AnimatedImage, Reveal } from "../common/Motion";

const PossessionSoon = () => {
  return (
    <section className="bg-[#f3f3f3] py-14 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center">
          <img
            src="/home/soon/img1.jpg"
            alt="Building Sketch"
            loading="lazy"
            className="absolute -top-16 z-0 w-[760px] max-w-full opacity-25 sm:-top-28 md:w-[900px] md:opacity-35"
          />

          <Reveal className="relative z-10 mb-10 text-center md:mb-12">
            <p className="mb-1 text-xl font-light uppercase tracking-[8px] text-black sm:text-[30px] sm:tracking-[12px]">
              Possession
            </p>

            <h2 className="text-5xl font-bold leading-none text-[#6F4634] sm:text-[78px]">
              SOON
            </h2>
          </Reveal>

          <Reveal className="relative z-10 overflow-hidden rounded-2xl shadow-lg">
            <AnimatedImage
              src="/home/soon/img2.jpg"
              alt="CP Greens"
              wrapperClassName="w-[min(520px,92vw)]"
              className="w-full object-cover"
            />

            <Motion.button
              type="button"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="absolute left-1/2 top-1/2 flex h-12 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-[#FF0000] shadow-xl transition duration-300 sm:h-14 sm:w-20 sm:rounded-2xl"
            >
              <Play fill="white" className="ml-1 h-7 w-7 text-white" />
            </Motion.button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default PossessionSoon;
