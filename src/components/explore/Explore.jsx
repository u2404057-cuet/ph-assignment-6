import React from "react";

const Explore = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] h-100 text-white flex flex-col justify-center items-center space-y-3 px-10 text-center">
      <h1 className="font-extrabold md:text-4xl text-2xl">Ready to Transform Your Workflow?</h1>
      <p className="">
        Join thousands of professionals who are already using Digitools to work
        smarter. Start your free trial today.
      </p>
      <div className="flex gap-3 justify-center md:justify-start">
        <a className="btn border border-[#4F39F6] rounded-full hover:scale-105 transform transition-transform duration-300">
          <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ">
            Explore Products
          </span>
        </a>
        <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full font-normal hover:scale-105 transform transition-transform duration-300">
          View Pricing
        </a>
      </div>
      <p className="">14-day free trial • No credit card required • Cancel anytime</p>
    </div>
  );
};

export default Explore;
