import React from "react";
import { AnimatedImage, Reveal, Stagger } from "../common/Motion";

const CommunityHall = () => {
  return (
    <section className="flex min-h-screen items-center bg-[#f3f3f3] py-14 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <h2 className="text-3xl font-light uppercase tracking-[0.18em] text-[#704633] sm:text-5xl md:text-6xl md:tracking-[0.35em]">
            COMMUNITY HALL
          </h2>
          <div className="mx-auto mt-4 h-px w-44 bg-[#704633] sm:w-72" />
        </Reveal>

        <div className="mb-8 grid gap-6 lg:grid-cols-2 lg:items-start">
          <Reveal
            as="h3"
            className="text-3xl font-light leading-tight text-[#704633] md:text-5xl"
          >
            Get up and Get Going!
          </Reveal>

          <Reveal className="lg:flex lg:justify-end">
            <p className="max-w-xl text-base font-light leading-relaxed text-[#333] md:text-right md:text-xl">
              From Yoga and Meditation Deck to Indoor Gymnasium, we care about
              your health too!
            </p>
          </Reveal>
        </div>

        <Stagger className="grid gap-4 lg:grid-cols-[0.32fr_0.68fr]">
          <AnimatedImage
            src="/amenities/communityhall/img1.png"
            alt="TV Lounge"
            wrapperClassName="h-[300px] md:h-[45vh]"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.075]"
          />
          <AnimatedImage
            src="/amenities/communityhall/img2.png"
            alt="Community Hall"
            wrapperClassName="h-[300px] md:h-[45vh]"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.075]"
          />
        </Stagger>
      </div>
    </section>
  );
};

export default CommunityHall;
