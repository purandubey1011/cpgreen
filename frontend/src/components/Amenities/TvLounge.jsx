import React from "react";
import { AnimatedImage, Reveal } from "../common/Motion";

const TvLounge = ({
  title = "TV LOUNGE",
  image = "/amenities/tvLounge/bg.png",
  heading = "The Ultimate TV Lounge Experience",
  description = "Unwind in a comfortable setting designed for ultimate relaxation, entertainment, and quality time with loved ones.",
}) => {
  return (
    <section className="bg-[#f3f3f3] py-14 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-8 text-center md:mb-10">
          <h2 className="text-3xl font-light uppercase tracking-[0.2em] text-[#704633] sm:text-5xl md:text-6xl md:tracking-[0.3em]">
            {title}
          </h2>
          <div className="mx-auto mt-4 h-px w-32 bg-[#704633] sm:w-40" />
        </Reveal>

        <Reveal className="relative overflow-hidden shadow-sm">
          <AnimatedImage
            src={image}
            alt={title}
            wrapperClassName="min-h-[360px]"
            className="aspect-[4/5] h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.065] sm:aspect-[16/9]"
          />

          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-5 text-center sm:p-8 md:p-10">
            <h3 className="text-2xl font-light text-white md:text-5xl">
              {heading}
            </h3>

            <p className="mx-auto mt-4 max-w-4xl text-sm leading-relaxed text-white/90 md:text-lg">
              {description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TvLounge;
