import React from "react";
import { motion as Motion } from "framer-motion";
import { Reveal, Stagger } from "../common/Motion";
import { fadeUp } from "../../utils/motion";

const cards = [
  {
    title: "OUTDOOR LIVING AT ITS BEST",
    subtitle: "With so many amenities in place, bring the outdoors inside!",
    image: "/plans/outdoor/img1.jpg",
  },
  {
    title: "GREEN LIVING TAKEN TO THE NEXT LEVEL",
    subtitle: "Live in Siliguri's first IGBC Certified Apartment",
    image: "/plans/outdoor/img2.png",
  },
];

const OutdoorLiving = () => {
  return (
    <section className="bg-[#f3f3f3] py-10 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Stagger className="overflow-hidden">
          {cards.map((card) => (
            <Motion.article
              key={card.title}
              variants={fadeUp}
              className="group relative min-h-[360px] overflow-hidden md:min-h-[70vh]"
            >
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.075]"
              />

              <div className="absolute inset-0 bg-black/30" />

              <Reveal className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
                <h2 className="max-w-5xl text-2xl font-light uppercase tracking-[0.12em] text-white sm:text-4xl md:text-5xl md:tracking-[0.15em]">
                  {card.title}
                </h2>

                <p className="mt-4 text-sm font-light text-white/90 md:text-xl">
                  {card.subtitle}
                </p>
              </Reveal>
            </Motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default OutdoorLiving;
