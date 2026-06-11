import React from "react";
import { motion as Motion } from "framer-motion";
import { Reveal, Stagger } from "../common/Motion";
import { fadeUp } from "../../utils/motion";

const inputClass =
  "h-12 w-full bg-[#e4e4e4] px-4 text-sm outline-none transition focus:bg-white focus:ring-2 focus:ring-[#724937]/30 placeholder:text-neutral-400";

const Form = () => {
  return (
    <section id="enquiry" className="min-h-screen bg-[#f3f3f3] py-14 md:py-20">
      <div className="mx-auto grid min-h-[calc(100svh-7rem)] w-full max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:items-center">
        <Stagger className="flex h-full flex-col justify-between gap-10">
          <Motion.div variants={fadeUp}>
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-black sm:text-5xl">
              Can't wait to know more?
              <br />
              Let's talk!
            </h2>

            <p className="mt-6 text-sm text-neutral-700 sm:text-base">
              Reach out to us for inquiries, sale or buy
            </p>
          </Motion.div>

          <Motion.div variants={fadeUp} className="space-y-8 text-sm sm:text-base">
            <div>
              <h4 className="mb-2 font-semibold text-black">Phone</h4>
              <p className="text-neutral-800">+91 25 25896 365</p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-black">Enquiries</h4>
              <p className="text-neutral-800">info@cpgreens.com</p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-black">Address</h4>
              <p className="text-neutral-800">
                CP Greens - IGBC Certified Apartments
              </p>
            </div>
          </Motion.div>
        </Stagger>

        <Reveal className="bg-[#efefef] p-5 shadow-sm sm:p-8 lg:p-10">
          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-xs font-medium text-black">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-medium text-black">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-black">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium text-black">
                Enquiry
              </label>
              <select className={`${inputClass} text-neutral-500`}>
                <option>Select Enquiry</option>
                <option>Buy Apartment</option>
                <option>Site Visit</option>
                <option>Investment</option>
                <option>General Enquiry</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium text-black">
                Your message (optional)
              </label>
              <textarea
                rows={4}
                placeholder="Enter Your message (optional)"
                className="w-full resize-none bg-[#e4e4e4] p-4 text-sm outline-none transition focus:bg-white focus:ring-2 focus:ring-[#724937]/30 placeholder:text-neutral-400"
              />
            </div>

            <Motion.button
              type="submit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="h-12 w-full bg-[#724937] text-xs font-medium uppercase tracking-wide text-white shadow-sm transition hover:bg-[#603c2d] hover:shadow-lg"
            >
              Contact Us
            </Motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Form;
