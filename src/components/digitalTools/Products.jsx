import React, { use } from "react";
import { FaCheck } from "react-icons/fa";

const Products = ({ productPromise }) => {
  const products = use(productPromise);
  console.log(products);
  return (
    <div className="mx-10 grid grid-cols-3 gap-5 mb-20">
      {products.map((product) => {
        return (
          <div className="border border-gray-100 shadow rounded-2xl p-5 relative space-y-3">
            <div className="border border-gray-100 p-3 rounded-full inline-block">
              {product.icon}
            </div>
            <div className="absolute top-2 right-2 border rounded-full px-3">
              <p>{product.tag}</p>
            </div>
            <h1 className="font-bold text-2xl">{product.name}</h1>
            <p className="">{product.description}</p>
            <p className="font-bold text-2xl">
              ${product.price} / 
              <span className="text-xl font-light text-[#627382]"> {product.period}</span>
            </p>
            <div className="">
              {product.features.map((feature) => {
                return (
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-green-400" />
                    <p className="text-[#627382]">{feature}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
