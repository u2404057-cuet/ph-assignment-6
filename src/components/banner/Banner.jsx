import React from "react";
import bannerImg from "../../assets/products/banner.png";
import img1 from "../../assets/products/group-5.png";
import img2 from "../../assets/Play.png";

const Banner = () => {
  return (
    <div className="flex gap-10 items-center flex-col mx-10 text-center md:text-left md:flex-row justify-around mb-20">
      <div className="space-y-2 md:w-130">
        <span className="badge bg-[#E1E7FF] ">
          {" "}
          <img src={img1} alt="" />
          <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            New: AI-Powered Tools Available
          </span>
        </span>
        <h1 className="text-5xl font-extrabold">
          Supercharge Your Digital Workflow
        </h1>
        <p className="text-[#627382]">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex gap-3 justify-center md:justify-start">
          <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full font-normal">
            Explore Products
          </a>
          <a className="btn border border-[#4F39F6] rounded-full">
            <img src={img2} alt="" />
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              Watch Demo
            </span>
          </a>
        </div>
      </div>
      <div className="">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
