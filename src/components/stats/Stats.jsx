import React from "react";

const Stats = () => {
  return (
    <div>
      <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-10 mb-20">
        <div className="flex w-full py-15 justify-center gap-10 flex-col md:flex-row">
          <div className="text-center">
            <h2 className="font-extrabold text-6xl">50K+</h2>
            <p className="text-2xl">Active Users</p>
          </div>
          <div className="divider md:divider-horizontal"></div>
          <div className="text-center">
            <h2 className="font-extrabold text-6xl">200++</h2>
            <p className="text-2xl">Premium Tools</p>
          </div>
          <div className="divider md:divider-horizontal"></div>
          <div className="text-center">
            <h2 className="font-extrabold text-6xl">4.9</h2>
            <p className="text-2xl">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
