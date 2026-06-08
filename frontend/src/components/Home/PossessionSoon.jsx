import React from "react";
import { Play } from "lucide-react";

const PossessionSoon = () => {
  return (
    <section className="bg-[#f3f3f3] py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="relative flex flex-col items-center">

          {/* Background Sketch */}
          <img
            src="/home/soon/img1.jpg"
            alt="Building Sketch"
            className="absolute -top-40 z-0 w-[900px] max-w-full opacity-35"
          />

          {/* Heading */}
          <div className="relative z-10 mb-12 text-center">
            <p className="mb-1 text-[30px] font-light tracking-[12px] text-black uppercase">
              Possession
            </p>

            <h2 className="text-[78px] font-bold leading-none text-[#6F4634]">
              SOON
            </h2>
          </div>

          {/* Video/Image Card */}
          <div className="relative z-10 overflow-hidden rounded-[18px] shadow-lg">
            <img
              src="/home/soon/img2.jpg"
              alt="CP Greens"
              className="w-[520px] max-w-full object-cover"
            />

            {/* Play Button */}
            <button className="absolute left-1/2 top-1/2 flex h-14 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#FF0000] shadow-xl transition duration-300 hover:scale-105">
              <Play
                fill="white"
                className="ml-1 h-7 w-7 text-white"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PossessionSoon;