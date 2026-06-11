import React from "react";
import { motion as Motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { AnimatedImage, Reveal } from "../common/Motion";

const WhereLiving = () => {
  return (
    <section className="relative bg-[#f3f3f3] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-end">
          <Reveal className="order-2 lg:order-1">
            <h2 className="mb-5 text-3xl font-semibold leading-tight tracking-tight text-[#6d4635] sm:text-4xl md:text-5xl">
              Where living becomes a Lifelong
            </h2>

            <p className="max-w-3xl text-sm font-light leading-relaxed tracking-[1.5px] text-[#6b5a54] sm:text-base md:text-[17px] md:tracking-[2.5px]">
              CP GREENS offers an environment perfectly designed for luxurious
              and green peaceful living. The location and beauty of
              luxuriously designed spaces are here to make your everyday full
              of conveniences and exceptional experience.
            </p>

            <Motion.a
              href="#enquiry"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 flex min-h-12 w-fit items-center gap-2 bg-[#6d4635] px-5 py-3 text-xs font-medium uppercase text-white shadow-sm transition hover:bg-[#5c3a2c] hover:shadow-lg sm:text-sm"
            >
              Enquiry Now
              <ChevronRight size={15} />
            </Motion.a>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <AnimatedImage
              src="/home/whereliving/bgpng.png"
              alt="CP Greens Building"
              wrapperClassName="mx-auto max-w-[760px]"
              className="w-full object-contain"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WhereLiving;
