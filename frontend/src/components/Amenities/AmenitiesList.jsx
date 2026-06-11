import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal, Stagger } from "../common/Motion";
import { fadeUp } from "../../utils/motion";

const amenities = [
  { name: "GAMES ROOM", image: "/amenities/ameAt/img.png" },
  { name: "CHILDCARE", image: "/amenities/ameAt/img.png" },
  { name: "INDOOR GYM", image: "/amenities/ameAt/img.png" },
  { name: "TV LOUNGE", image: "/amenities/ameAt/img.png" },
  { name: "COMMUNITY HALL", image: "/amenities/ameAt/img.png" },
];

const AmenitiesList = () => {
  const [activeAmenity, setActiveAmenity] = useState(0);

  return (
    <section className="bg-[#f3f3f3] py-14 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal
          as="h2"
          className="mb-10 text-3xl font-light text-[#704633] sm:text-4xl md:mb-16 md:text-5xl"
        >
          Amenities at CP Greens
        </Reveal>

        <div className="grid items-center gap-8 lg:grid-cols-[320px_1fr] lg:gap-16">
          <Stagger className="space-y-3 sm:space-y-5">
            {amenities.map((item, index) => (
              <Motion.button
                key={item.name}
                variants={fadeUp}
                type="button"
                onMouseEnter={() => setActiveAmenity(index)}
                onClick={() => setActiveAmenity(index)}
                className={`group flex min-h-12 w-full items-center justify-between border-b border-[#704633]/10 pb-2 text-left text-lg transition-all duration-300 sm:text-xl ${
                  activeAmenity === index
                    ? "text-[#704633]"
                    : "text-[#704633]/80 hover:text-[#704633]"
                }`}
              >
                <span className="font-light tracking-wide">{item.name}</span>

                <ArrowRight
                  size={20}
                  className={`transition-transform duration-300 ${
                    activeAmenity === index ? "translate-x-1" : ""
                  }`}
                />
              </Motion.button>
            ))}
          </Stagger>

          <Reveal className="overflow-hidden shadow-sm">
            <Motion.img
              key={amenities[activeAmenity].name}
              src={amenities[activeAmenity].image}
              alt={amenities[activeAmenity].name}
              loading="lazy"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-[16/10] w-full object-cover sm:aspect-[16/8]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesList;
