import React from "react";
import Navbar from "../common/Navbar.jsx";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <img
        src="/home/hero/hero.jpg"
        alt="CP Greens Siliguri"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

      <Navbar />

      <div className="relative z-10 flex min-h-screen flex-col justify-end px-7 pb-9 text-white">
        <div className="mb-7 w-fit bg-slate-800/70 px-5 py-3 text-[15px] font-semibold tracking-tight backdrop-blur-sm">
          EXCLUSIVE - 3/4 BHKs | FLOORS G+8
        </div>

        <p className="mb-5 text-[24px] font-light leading-none">
          2.5 mile, Siliguri
        </p>

        <h1 className="mb-4 text-[72px] font-light leading-[0.95] tracking-[-4px] md:text-[78px]">
          CP Greens Siliguri
        </h1>

        <p className="text-[15px] font-light tracking-[7px] text-white/80">
          RERA No: WBRERA/P/JAL/2023/000319
        </p>
      </div>

      <button className="absolute bottom-9 right-7 z-20 bg-[#7b4d3d] px-6 py-4 text-[14px] font-semibold uppercase text-white transition hover:bg-[#6b4234]">
        Download Brochure
      </button>
    </section>
  );
};

export default Hero;