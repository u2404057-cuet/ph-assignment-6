import React from "react";
import { FaCheck } from "react-icons/fa";

const PackageCard = ({ pack }) => {
  // console.log(pack);
  return pack.type === "Pro" ? (
    <div className="">
      <div className="relative px-6 py-8 rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow h-full flex flex-col justify-between gap-3">
        <div className="flex justify-center relative -top-10 ">
          <p className="text-[#BB4D00] inline-block rounded-full px-3 bg-[#FEF3C6]">
            Most Popular
          </p>
        </div>
        <div className="space-y-3">
          <div className="">
            <h1 className="font-bold text-2xl">{pack.type}</h1>
            <p className="">{pack.for}</p>
          </div>
          <p className="">
            <span className="font-semibold text-4xl">${pack.price}</span> /{" "}
            {pack.period}
          </p>
          <div className="">
            {pack.features.map((feature, index) => {
              return (
                <div key={index} className="flex items-center gap-3">
                  <FaCheck className="" />
                  <p className="">{feature}</p>
                </div>
              );
            })}
          </div>
        </div>
        <button className="btn rounded-full w-full hover:scale-105 transform transition-transform duration-300">
          <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            {pack.buttonText}
          </span>
        </button>
      </div>
    </div>
  ) : (
    <div className="">
      <div className="relative px-6 py-8 rounded-2xl bg-white shadow h-full flex flex-col justify-between gap-3">
        <div className="space-y-3">
          <div className="">
            <h1 className="font-bold text-2xl">{pack.type}</h1>
            <p className="text-[#627382]">{pack.for}</p>
          </div>
          <p className="">
            <span className="font-semibold text-4xl">${pack.price}</span> /{" "}
            {pack.period}
          </p>
          <div className="">
            {pack.features.map((feature, index) => {
              return (
                <div key={index} className="flex items-center gap-3">
                  <FaCheck className="text-green-400" />
                  <p className="text-[#627382]">{feature}</p>
                </div>
              );
            })}
          </div>
        </div>
        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white w-full hover:scale-105 transform transition-transform duration-300">
          {pack.buttonText}
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
