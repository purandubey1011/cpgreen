import React from "react";

const ExploreUnit = () => {
  return (
    <section className="relative h-[520px] w-full overflow-hidden bg-[#f3f3f3]">
      {/* Background Image */}
      <img
        src="/home/exploreunit/bg1.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1000px] items-center px-8">
        <div className="relative flex w-full items-center">
          {/* Brown Info Card */}
          <div className="relative z-20 flex h-[360px] w-[320px] flex-col bg-[#704633] px-5 py-5 text-white">
            <p className="mb-11 text-[16px] font-light">
              More Life Per Sq. ft.
            </p>

            <h2 className="text-[24px] font-semibold leading-[1.15] tracking-[-1px]">
              Carefully curated <br /> homes
            </h2>

            <button className="mt-auto flex w-fit items-center gap-2 bg-white px-4 py-3 text-[11px] font-medium uppercase tracking-wide text-[#704633]">
              Explore Unit Plans <span className="text-lg leading-none">›</span>
            </button>
          </div>

          {/* Main Image Card */}
          <div className="relative z-10 -ml-1 h-[360px] flex-1 overflow-hidden">
            <img
              src="/home/exploreunit/bg2.jpg"
              alt="Carefully curated homes"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreUnit;