import React from "react";
import { AnimatedImage, Reveal, Stagger } from "../common/Motion";

const Childcare = () => {
  return (
    <section className="bg-[#f3f3f3] py-14 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <h2 className="text-4xl font-light uppercase tracking-[0.18em] text-[#704633] sm:text-5xl md:text-7xl md:tracking-[0.35em]">
            CHILDCARE
          </h2>
          <div className="mx-auto mt-4 h-px w-40 bg-[#704633] sm:w-56" />
        </Reveal>

        <Stagger className="space-y-1">
          <div className="grid gap-1 lg:grid-cols-[0.34fr_0.66fr]">
            <div className="flex min-h-[280px] flex-col justify-between bg-[#704633] p-6 text-white lg:p-8">
              <h3 className="max-w-sm text-2xl font-light leading-tight sm:text-3xl">
                Nurture their Childhood with Premium Amenities!
              </h3>

              <p className="mt-8 max-w-sm text-base font-light leading-relaxed text-white/95 sm:text-lg">
                From Children's Play Area to Kids Creche, we understand the
                needs of your Little Ones!
              </p>
            </div>

            <AnimatedImage
              src="/amenities/childcare/img1.png"
              alt="Childcare"
              wrapperClassName="min-h-[300px]"
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.075]"
            />
          </div>

          <div className="grid gap-1 lg:grid-cols-[0.66fr_0.34fr]">
            <AnimatedImage
              src="/amenities/childcare/img2.png"
              alt="Outdoor Childcare"
              wrapperClassName="min-h-[300px]"
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.075]"
            />

            <div className="flex min-h-[280px] flex-col justify-between bg-[#704633] p-6 text-white lg:p-8">
              <h3 className="text-2xl font-light leading-tight sm:text-3xl">
                22,000 sq.ft of Childcare Amenities
              </h3>

              <p className="mt-8 text-base font-light leading-relaxed text-white/95 sm:text-lg">
                At CP, childcare facilities have been methodically organised to
                include indoor as well as outdoor spaces to ensure holistic
                development of the little ones.
              </p>
            </div>
          </div>
        </Stagger>
      </div>
    </section>
  );
};

export default Childcare;
