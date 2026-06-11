import React from "react";
import { motion as Motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Reveal } from "../common/Motion";

const Map = () => {
  return (
    <section className="bg-[#724937] py-14 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-start md:justify-between">
          <Reveal>
            <h2 className="mb-3 text-3xl font-light leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[58px]">
              Get used to convenience
            </h2>

            <p className="text-base font-light text-white/90 md:text-[18px]">
              Unmatched Connectivity of financial district
            </p>
          </Reveal>

          <Motion.a
            href="https://maps.google.com/maps?q=Siliguri"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="flex min-h-12 w-fit items-center gap-2 bg-white px-5 py-3 text-[12px] font-medium uppercase tracking-wide text-[#724937] shadow-sm transition hover:bg-neutral-100 hover:shadow-lg sm:px-7"
          >
            Explore Locations
            <ChevronRight size={14} />
          </Motion.a>
        </div>

        <Reveal className="overflow-hidden bg-white shadow-xl shadow-black/15">
          <iframe
            title="CP Greens Location"
            src="https://maps.google.com/maps?q=Siliguri&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-[340px] w-full border-0 sm:h-[420px] lg:h-[450px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Map;
