import React from "react";

const DigitalTools = ({cartBtn, setCartBtn, selectedProducts}) => {

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
        <button onClick={() => setCartBtn('product')} className={`btn rounded-full ${cartBtn === "product" ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"} hover:scale-105 transform transition-transform duration-300`}>
          Products
        </button>
        <button onClick={() => setCartBtn('cart')} className={`btn rounded-full ${cartBtn === "cart" ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"} hover:scale-105 transform transition-transform duration-300`}>
          Cart ({selectedProducts.length})
        </button>
      </div>
    </div>
  );
};

export default DigitalTools;
