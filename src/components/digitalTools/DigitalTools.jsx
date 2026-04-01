import React, { Suspense } from "react";
import Products from "./Products";

const DigitalTools = () => {

  return (
    <div>
      <div className=" space-y-3 md:w-150 mx-auto text-center mb-5">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          Premium Digital Tools
        </h1>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>
      <div className="flex gap-3 justify-center mb-10">
        <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:scale-105 transform transition-transform duration-300">
          Products
        </button>
        <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:scale-105 transform transition-transform duration-300">
          Cart (2)
        </button>
      </div>
    </div>
  );
};

export default DigitalTools;
