import React from "react";
import { AnimatedImage, Reveal, Stagger } from "../common/Motion";

const Fitness = () => {
  return (
    <section className="flex min-h-screen items-center bg-[#704633] py-14 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <h2 className="text-4xl font-light uppercase tracking-[0.22em] text-white sm:text-5xl md:text-7xl md:tracking-[0.4em]">
            FITNESS
          </h2>
          <div className="mx-auto mt-4 h-px w-40 bg-white/80 sm:w-56" />
        </Reveal>

        <div className="mb-10 grid items-start gap-6 lg:grid-cols-2">
          <Reveal
            as="h3"
            className="text-3xl font-light leading-tight text-white md:text-5xl"
          >
            Get up and Get Going!
          </Reveal>

          <Reveal className="lg:flex lg:justify-end">
            <p className="max-w-xl text-base font-light leading-relaxed text-white/95 sm:text-xl md:text-2xl">
              From Yoga and Meditation Deck to Indoor Gymnasium, we care about
              your health too!
            </p>
          </Reveal>
        </div>

        <Stagger className="grid gap-4 lg:grid-cols-[0.42fr_0.58fr]">
          <AnimatedImage
            src="/amenities/fitness/img1.png"
            alt="Yoga & Meditation"
            wrapperClassName="h-[320px] md:h-[55vh]"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.075]"
          />
          <AnimatedImage
            src="/amenities/fitness/img2.png"
            alt="Gymnasium"
            wrapperClassName="h-[320px] md:h-[55vh]"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.075]"
          />
        </Stagger>
      </div>
    </section>
  );
};

export default Fitness;
