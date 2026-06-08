import React from "react";
import { Play } from "lucide-react";

const Ownthekey = () => {
  return (
    <section className="bg-[#f2f2f2] py-20">
      <div className="mx-auto max-w-[1150px] px-6">
        {/* Heading */}
        <h2 className="mb-12 max-w-[620px] text-[50px] font-normal leading-[0.95] tracking-[-2px] text-black">
          Own the key that turns moments to memories!
        </h2>

        {/* Video Section */}
        <div className="relative overflow-hidden">
          <img
            src="/home/ownthekey/img1.png"
            alt="Family"
            className="h-[620px] w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#7b5c4d]/35" />

          {/* Play Button */}
          <button className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-xl transition duration-300 hover:scale-105">
            <Play
              fill="currentColor"
              className="ml-1 h-8 w-8 text-[#7b5c4d]"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Ownthekey;