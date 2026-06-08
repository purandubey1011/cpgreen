import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute left-6 right-6 top-7 z-30 flex h-[60px] items-center justify-between bg-white px-10 shadow-sm">
      <div className="flex items-center">
        <img
          src="/home/navbar/logo.png"
          alt="CP Greens"
          className="h-[42px] w-auto object-contain"
        />
      </div>

      <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-7 text-[11px] font-medium uppercase text-[#2b2421]">
        <a className="border-b border-[#7b4d3d] pb-1 text-[#7b4d3d]" href="#">
          Home
        </a>
        <a href="#">Plans</a>
        <a href="#">Amenities</a>
        <a href="#">Blogs</a>
      </div>

      <button className="bg-[#7b4d3d] px-6 py-4 text-[12px] font-semibold uppercase text-white transition hover:bg-[#6b4234]">
        Book Site Visit ›
      </button>
    </nav>
  );
};

export default Navbar;