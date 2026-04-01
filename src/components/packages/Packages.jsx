import React, { use } from "react";
import PackageCard from "./PackageCard";

const Packages = ({ packagePromise }) => {
  const packages = use(packagePromise);
  console.log(packages);
  return (
    <div className="p-10 space-y-5 bg-gray-100 mb-20">
      <div className="text-center space-y-3">
        <h1 className="font-extrabold text-5xl">Simple, Transparent Pricing</h1>
        <p className="text-[#627382]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pack={pkg}></PackageCard>
        ))}
      </div>
    </div>
  );
};

export default Packages;
