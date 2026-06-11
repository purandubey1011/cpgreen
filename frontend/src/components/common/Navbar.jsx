import React, { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { navMenu } from "../../utils/motion";

const links = [
  { label: "Home", to: "/" },
  { label: "Plans", to: "/plans" },
  { label: "Amenities", to: "/amenities" },
];

const SmoothRouteLink = ({ to, className, children, onNavigate }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return;
    }

    event.preventDefault();
    onNavigate?.();

    if (pathname === to) {
      window.lenis?.scrollTo(0, {
        duration: 0.65,
        easing: (t) => 1 - Math.pow(1 - t, 4),
      });
      return;
    }

    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`navbar-shell fixed left-3 right-3 top-3 z-50 transition-all duration-300 sm:left-6 sm:right-6 ${
        scrolled
          ? "translate-y-0 bg-white/94 shadow-xl shadow-black/10 backdrop-blur-md"
          : "translate-y-0 bg-white shadow-sm"
      }`}
    >
      <div className="flex min-h-[58px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <SmoothRouteLink to="/">
          <img
            src="/home/navbar/logo.png"
            alt="CP Greens"
            className="h-9 w-auto object-contain sm:h-[42px]"
          />
        </SmoothRouteLink>

        <div className="hidden items-center gap-7 text-[11px] font-medium uppercase text-[#2b2421] lg:flex">
          {links.map((link) => {
            const active = pathname === link.to;

            return (
              <SmoothRouteLink
                key={link.to}
                to={link.to}
                className={`group relative pb-1 transition-colors duration-300 hover:text-[#7b4d3d] ${
                  active ? "text-[#7b4d3d]" : ""
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-[#7b4d3d] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </SmoothRouteLink>
            );
          })}
        </div>

        <a
          href="#enquiry"
          className="hidden items-center gap-2 bg-[#7b4d3d] px-5 py-3 text-[12px] font-semibold uppercase text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#6b4234] hover:shadow-lg active:scale-[0.98] lg:flex"
        >
          Book Site Visit
          <ChevronRight size={15} />
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center bg-[#7b4d3d] text-white transition active:scale-95 lg:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <Motion.div
            variants={navMenu}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden border-t border-[#7b4d3d]/10 lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {links.map((link) => (
                <SmoothRouteLink
                  key={link.to}
                  to={link.to}
                  onNavigate={() => setMenuOpen(false)}
                  className={`block px-2 py-3 text-sm font-medium uppercase tracking-wide transition ${
                    pathname === link.to
                      ? "text-[#7b4d3d]"
                      : "text-[#2b2421] hover:text-[#7b4d3d]"
                  }`}
                >
                  {link.label}
                </SmoothRouteLink>
              ))}

              <a
                href="#enquiry"
                onClick={() => setMenuOpen(false)}
                className="mt-3 flex min-h-12 items-center justify-center gap-2 bg-[#7b4d3d] px-5 py-3 text-xs font-semibold uppercase text-white active:scale-[0.98]"
              >
                Book Site Visit
                <ChevronRight size={15} />
              </a>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
