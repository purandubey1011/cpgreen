import React from "react";
import { motion as Motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Reveal, Stagger } from "../common/Motion";
import { fadeUp } from "../../utils/motion";

const amenities = [
  {
    title: "Childcare",
    description:
      "A safe and nurturing space where children can learn, play, and grow.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1800&auto=format&fit=crop",
    align: "left",
  },
  {
    title: "Socials",
    description:
      "Where friends, families, and neighbors come together to create lasting memories.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1800&auto=format&fit=crop",
    align: "right",
  },
  {
    title: "Fitness",
    description:
      "Modern fitness facilities designed to help you stay active and healthy.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1800&auto=format&fit=crop",
    align: "left",
  },
  {
    title: "Relax",
    description:
      "Dedicated spaces to unwind, recharge, and embrace a balanced lifestyle.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1800&auto=format&fit=crop",
    align: "right",
  },
];

const Lifestyle = () => {
  return (
    <section className="bg-[#f3f3f3] py-14 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <Reveal
            as="h2"
            className="max-w-3xl text-3xl font-light leading-tight tracking-tight text-[#6d4635] sm:text-4xl md:text-5xl lg:text-[58px]"
          >
            Pick the lifestyle you want!
          </Reveal>

          <Motion.a
            href="/amenities"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="flex min-h-12 w-fit items-center gap-2 bg-[#6d4635] px-5 py-4 text-xs uppercase tracking-wide text-white shadow-sm transition hover:bg-[#5c3a2c] hover:shadow-lg sm:px-7 sm:text-sm"
          >
            Explore Amenities
            <ChevronRight size={16} className="transition group-hover:translate-x-1" />
          </Motion.a>
        </div>

        <Stagger className="space-y-4 md:space-y-5">
          {amenities.map((item) => (
            <Motion.article
              key={item.title}
              variants={fadeUp}
              className="group relative min-h-[250px] overflow-hidden shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl sm:min-h-[280px] md:h-[240px] md:min-h-0"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.075]"
              />

              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/80 via-black/40 to-transparent md:w-[55%]" />
              <div className="absolute inset-y-0 right-0 hidden w-[35%] bg-gradient-to-l from-black/75 to-transparent md:block" />

              <div
                className={`relative z-10 flex min-h-[250px] flex-col justify-between p-6 sm:min-h-[280px] sm:p-8 md:h-full md:min-h-0 ${
                  item.align === "right" ? "md:items-end md:text-right" : ""
                }`}
              >
                <h3 className="text-4xl font-light text-white sm:text-5xl md:text-[56px]">
                  {item.title}
                </h3>

                <p className="max-w-[420px] text-sm leading-relaxed text-white/90">
                  {item.description}
                </p>
              </div>
            </Motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Lifestyle;
