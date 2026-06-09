import React from "react";

const Form = () => {
  return (
    <section className="min-h-screen bg-[#f3f3f3]">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-10 px-6 py-10 md:px-10 lg:grid-cols-2 lg:items-center">
        {/* Left */}
        <div className="flex h-full flex-col justify-between gap-10">
          <div>
            <h2 className="text-4xl font-medium leading-tight tracking-tight text-black sm:text-5xl lg:text-5xl">
              Can't wait to know more?
              <br />
              Let's talk!
            </h2>

            <p className="mt-6 text-sm text-neutral-700 sm:text-base">
              Reach out to us for inquiries, sale or buy
            </p>
          </div>

          <div className="space-y-8 text-sm sm:text-base">
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
          </div>
        </div>

        {/* Form */}
        <div className="bg-[#efefef] p-6 sm:p-8 lg:p-10">
          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-xs font-medium text-black">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="h-12 w-full bg-[#e4e4e4] px-4 text-sm outline-none placeholder:text-neutral-400"
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
                  className="h-12 w-full bg-[#e4e4e4] px-4 text-sm outline-none placeholder:text-neutral-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-black">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="h-12 w-full bg-[#e4e4e4] px-4 text-sm outline-none placeholder:text-neutral-400"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium text-black">
                Enquiry
              </label>
              <select className="h-12 w-full bg-[#e4e4e4] px-4 text-sm text-neutral-400 outline-none">
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
                className="w-full resize-none bg-[#e4e4e4] p-4 text-sm outline-none placeholder:text-neutral-400"
              />
            </div>

            <button
              type="submit"
              className="h-12 w-full bg-[#724937] text-xs font-medium uppercase tracking-wide text-white transition hover:bg-[#603c2d]"
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;