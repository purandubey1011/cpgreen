import React from "react";
import { motion as Motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { Reveal, Stagger } from "./Motion";
import { fadeUp } from "../../utils/motion";

const socials = [FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn];

const Footer = () => {
  return (
    <footer className="relative min-h-[620px] overflow-hidden bg-black text-white md:min-h-[75vh]">
      <img
        src="/home/footer/bgimg.jpg"
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

      <div className="relative z-10 mx-auto flex min-h-[620px] w-full max-w-7xl flex-col px-4 pt-12 sm:px-6 md:min-h-[75vh] md:px-12">
        <Stagger className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <Motion.div variants={fadeUp}>
            <img
              src="/home/footer/logo.png"
              alt="CP Real Estate"
              loading="lazy"
              className="mb-4 w-32"
            />

            <p className="text-xs tracking-wide text-white/75">
              TS RERA No: WBRERA/P/JAL/2023/000319
            </p>

            <h3 className="mt-5 text-xl font-semibold">
              Support@gpgreens.com
            </h3>

            <div className="mt-5 flex gap-3">
              {socials.map((Icon, index) => (
                <Motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex h-10 w-10 items-center justify-center rounded-md bg-white/15 backdrop-blur-sm transition hover:bg-white/25"
                >
                  <Icon className="text-lg" />
                </Motion.a>
              ))}
            </div>
          </Motion.div>

          <Motion.div variants={fadeUp} className="md:justify-self-end">
            <h4 className="mb-5 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/75">
              <li>Home</li>
              <li>Plans</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blog</li>
            </ul>
          </Motion.div>

          <Motion.div variants={fadeUp} className="md:justify-self-end">
            <h4 className="mb-5 text-lg font-semibold">Areas we cover</h4>
            <ul className="space-y-4 text-sm text-white/75">
              <li>Hyderabad</li>
              <li>Bangalore</li>
              <li>Mumbai</li>
              <li>Noida</li>
            </ul>
          </Motion.div>
        </Stagger>

        <div className="relative mt-auto pb-6 pt-12">
          <Reveal className="mb-6 h-px w-full bg-white/20" />

          <div className="relative z-20 flex flex-col justify-between gap-4 text-sm text-white/70 md:flex-row">
            <p>© 2026 CP Real Estate. All Rights Reserved.</p>

            <div className="flex flex-wrap gap-5 sm:gap-8">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>

          <h2 className="footer-glass-text pointer-events-none absolute left-1/2 bottom-[3.8rem] z-10 -translate-x-1/2 select-none whitespace-nowrap text-[18vw] font-black leading-none tracking-normal sm:text-[16vw]">
            CPGREENS
          </h2>
        </div>
      </div>

      <style>{`
        .footer-glass-text {
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.95) 0%,
            rgba(255,255,255,0.7) 35%,
            rgba(255,255,255,0.25) 65%,
            rgba(255,255,255,0.03) 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          opacity: 0.9;
          text-shadow: 0 18px 45px rgba(255,255,255,0.12);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
