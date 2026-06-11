import React from "react";
import { motion as Motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Reveal } from "../common/Motion";

const Banner = () => {
  return (
    <section className="relative min-h-[260px] overflow-hidden md:min-h-[300px]">
      <img
        src="/plans/banner/bg.jpg"
        alt="CP Greens"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <Reveal className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h2 className="mb-6 text-3xl font-light text-white md:text-5xl">
          Are you interested in this Property?
        </h2>

        <Motion.a
          href="#enquiry"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
          className="flex min-h-12 items-center gap-2 bg-[#704633] px-6 py-3 text-sm font-medium uppercase tracking-wide text-white shadow-sm transition hover:bg-[#5f3a2b] hover:shadow-lg"
        >
          Connect With Us
          <ChevronRight size={16} />
        </Motion.a>
      </Reveal>
    </section>
  );
};

export default Banner;
