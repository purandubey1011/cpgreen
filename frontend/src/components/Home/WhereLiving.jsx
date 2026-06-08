import React from "react";
import { ChevronRight } from "lucide-react";

const WhereLiving = () => {
  return (
    <section className="relative bg-[#f3f3f3] px-8 py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="relative min-h-[720px]">
       <div className="absolute left-1/2 top-10 w-[920px] -translate-x-1/2">
  <img
    src="/home/whereliving/bgpng.png"
    alt="CP Greens Building"
    className="w-full object-contain"
  />

  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f3f3f3] to-transparent" />
</div>

          <div className="absolute bottom-0 left-0 max-w-[820px]">
            <h2 className="mb-5 text-[36px] font-semibold leading-none tracking-[-1.5px] text-[#6d4635]">
              Where living becomes a Lifelong
            </h2>

            <p className="max-w-[760px] text-[17px] font-light leading-[1.55] tracking-[2.5px] text-[#6b5a54]">
              CP GREENS offers an environment perfectly designed for luxurious and green
              peaceful living. The location and beauty of luxuriously designed spaces are
              here to make your everyday full of conveniences and exceptional experience.
            </p>
          </div>

          <button className="absolute bottom-0 right-0 flex items-center gap-2 bg-[#6d4635] px-3 py-2 text-[15px] font-normal uppercase text-white transition hover:bg-[#5c3a2c]">
            Enquiry Now
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhereLiving;