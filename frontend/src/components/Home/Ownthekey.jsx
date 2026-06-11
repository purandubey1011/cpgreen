import React from "react";
import { motion as Motion } from "framer-motion";
import { Play } from "lucide-react";
import { AnimatedImage, Reveal } from "../common/Motion";

const Ownthekey = () => {
  return (
    <section className="bg-[#f2f2f2] py-14 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal
          as="h2"
          className="mb-8 max-w-[680px] text-3xl font-normal leading-tight tracking-tight text-black sm:text-4xl md:mb-12 md:text-5xl lg:text-[50px]"
        >
          Own the key that turns moments to memories!
        </Reveal>

        <Reveal className="relative overflow-hidden shadow-sm">
          <AnimatedImage
            src="/home/ownthekey/img1.png"
            alt="Family"
            wrapperClassName="h-[320px] sm:h-[460px] lg:h-[620px]"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.065]"
          />

          <div className="absolute inset-0 bg-[#7b5c4d]/35" />

          <Motion.button
            type="button"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-xl transition duration-300 sm:h-20 sm:w-20"
          >
            <Play
              fill="currentColor"
              className="ml-1 h-7 w-7 text-[#7b5c4d] sm:h-8 sm:w-8"
            />
          </Motion.button>
        </Reveal>
      </div>
    </section>
  );
};

export default Ownthekey;
