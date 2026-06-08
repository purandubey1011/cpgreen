import React from "react";
import { ChevronRight } from "lucide-react";

const amenities = [
  {
    title: "Childcare",
    description:
      "A safe and nurturing space where children can learn, play, and grow.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1800&auto=format&fit=crop",
    align: "left",
  },
  {
    title: "Socials",
    description:
      "Where friends, families, and neighbors come together to create lasting memories.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1800&auto=format&fit=crop",
    align: "right",
  },
  {
    title: "Fitness",
    description:
      "Modern fitness facilities designed to help you stay active and healthy.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1800&auto=format&fit=crop",
    align: "left",
  },
  {
    title: "Relax",
    description:
      "Dedicated spaces to unwind, recharge, and embrace a balanced lifestyle.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1800&auto=format&fit=crop",
    align: "right",
  },
];

const Lifestyle = () => {
  return (
    <section className="bg-[#f3f3f3] py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-[58px] font-light leading-none tracking-[-2px] text-[#6d4635]">
            Pick the lifestyle you want!
          </h2>

          <button className="flex items-center gap-2 bg-[#6d4635] px-7 py-5 text-sm uppercase tracking-wide text-white transition hover:bg-[#5c3a2c]">
            Explore Amenities
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Amenity Cards */}
        <div className="space-y-5">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="group relative h-[240px] overflow-hidden"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/45" />

              {/* Left Overlay Gradient */}
              <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-black/75 to-transparent" />

              {/* Right Overlay Gradient */}
              <div className="absolute inset-y-0 right-0 w-[35%] bg-gradient-to-l from-black/75 to-transparent" />

              {item.align === "left" ? (
                <>
                  <div className="absolute left-10 top-8">
                    <h3 className="text-[56px] font-light text-white">
                      {item.title}
                    </h3>
                  </div>

                  <div className="absolute bottom-8 left-10 max-w-[420px]">
                    <p className="text-sm leading-relaxed text-white/90">
                      {item.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute right-10 top-8">
                    <h3 className="text-[56px] font-light text-white">
                      {item.title}
                    </h3>
                  </div>

                  <div className="absolute bottom-8 right-10 max-w-[380px] text-right">
                    <p className="text-sm leading-relaxed text-white/90">
                      {item.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;