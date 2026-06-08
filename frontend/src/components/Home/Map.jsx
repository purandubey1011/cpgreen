import React from "react";
import { ChevronRight } from "lucide-react";

const Map = () => {
  return (
    <section className="bg-[#724937] py-20">
      <div className="mx-auto max-w-[1200px] px-8">
        {/* Header */}
        <div className="mb-12 flex items-start justify-between">
          <div>
            <h2 className="mb-3 text-[58px] font-light leading-none tracking-[-2px] text-white">
              Get used to convenience
            </h2>

            <p className="text-[18px] font-light text-white/90">
              Unmatched Connectivity of financial district
            </p>
          </div>

          <button className="flex items-center gap-2 bg-white px-7 py-4 text-[12px] font-medium uppercase tracking-wide text-[#724937] transition hover:bg-neutral-100">
            Explore Locations
            <ChevronRight size={14} />
          </button>
        </div>

        {/* Map */}
        <div className="overflow-hidden bg-white shadow-lg">
          <iframe
            title="CP Greens Location"
            src="https://maps.google.com/maps?q=Siliguri&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-[450px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;