import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { AnimatedImage, Reveal, Stagger } from "../common/Motion";
import { fadeUp } from "../../utils/motion";

const blocks = [
  {
    label: "Block 1",
    plans: ["6th Floor (2Bhk)", "7th Floor (2Bhk)"],
  },
  {
    label: "Block 2",
    plans: ["3rd Floor (2Bhk)", "4th Floor (3Bhk)"],
  },
  {
    label: "Block 3",
    plans: ["5th Floor", "6th Floor", "7th Floor"],
  },
];

const UnitPlans = () => {
  const [activeBlock, setActiveBlock] = useState("7th Floor (2Bhk)");

  return (
    <section className="bg-[#f3f3f3] py-14 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal
          as="h2"
          className="mb-10 text-3xl font-light text-[#6d4635] sm:text-4xl md:mb-14 md:text-5xl"
        >
          CP Greens Unit Plans
        </Reveal>

        <Stagger className="mb-10 grid gap-8 lg:mb-12 lg:grid-cols-3 lg:gap-10">
          {blocks.map((block) => (
            <Motion.div key={block.label} variants={fadeUp}>
              <h4 className="mb-2 text-sm uppercase text-[#3d3d3d]">
                {block.label}
              </h4>
              <div className="mb-4 h-0.5 w-6 bg-[#6d4635]" />

              <div className="flex flex-wrap gap-3">
                {block.plans.map((plan) => {
                  const active = activeBlock === plan;
                  return (
                    <Motion.button
                      key={plan}
                      type="button"
                      onClick={() => setActiveBlock(plan)}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`min-h-11 border px-4 py-3 text-sm transition sm:px-6 ${
                        active
                          ? "border-[#6d4635] bg-[#6d4635] text-white shadow-lg shadow-[#6d4635]/15"
                          : "border-[#b99f92] text-[#6d4635] hover:bg-[#6d4635] hover:text-white"
                      }`}
                    >
                      {plan}
                    </Motion.button>
                  );
                })}
              </div>
            </Motion.div>
          ))}
        </Stagger>

        <div className="grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-center">
          <Reveal className="border border-[#d8d8d8] bg-[#efefef] p-1 shadow-sm">
            <AnimatedImage
              src="/plans/plans/map.png"
              alt="Floor Plan"
              wrapperClassName="bg-white"
              className="w-full object-contain"
            />
          </Reveal>

          <Reveal className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-[#6d4635]/70">
              {activeBlock}
            </p>

            <h3 className="mb-3 text-3xl font-light uppercase leading-tight text-[#6d4635] sm:text-4xl md:text-5xl">
              6th Floor Plan
            </h3>

            <p className="mb-10 text-xl font-light text-[#444] md:mb-12 md:text-2xl">
              Where comfort meets happiness, everyday!
            </p>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-y-12">
              {[
                ["Date", "01/07/20"],
                ["Scale", "1:125"],
                ["Architect", "Agrawal & Agrawal"],
                ["RERA Carpet Area", "Starting from 1050 sq.ft"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="mb-2 text-sm uppercase text-[#666]">{label}</p>
                  <div className="mb-4 h-0.5 w-6 bg-[#6d4635]" />
                  <p className="text-2xl font-light text-[#2f2f2f] md:text-3xl">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default UnitPlans;
