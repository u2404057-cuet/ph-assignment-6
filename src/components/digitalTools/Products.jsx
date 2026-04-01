import React, { use, useState } from "react";
import { FaCheck } from "react-icons/fa";
import Cart from "./Cart";
import { toast } from "react-toastify";

const Products = ({
  productPromise,
  cartBtn,
  selectedProducts,
  setSelectedProducts,
}) => {
  const products = use(productPromise);

  const handleAddToCart = (product) => {
    toast("Successfully added to cart");
    const exists = selectedProducts.find((p) => p.id === product.id);
    if (!exists) {
      setSelectedProducts([...selectedProducts, product]);
      setPrice(price + product.price);
    }
  };

  const [price, setPrice] = useState(0);

  return cartBtn === "product" ? (
    <div className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
      {products.map((product) => {
        const isSelected = selectedProducts.some((p) => p.id === product.id);
        return (
          <div
            key={product.id}
            className="border border-gray-100 shadow rounded-2xl p-5 relative space-y-3"
          >
            <div className="border border-gray-100 p-3 rounded-full inline-block">
              {product.icon}
            </div>
            <div
              className={`absolute top-2 right-2 ${
                product.tag === "New"
                  ? "bg-green-200 text-green-500"
                  : product.tag === "Popular"
                  ? "bg-violet-200 text-violet-500"
                  : "bg-amber-200 text-amber-500"
              } rounded-full px-3`}
            >
              <p>{product.tag}</p>
            </div>
            <h1 className="font-bold text-2xl">{product.name}</h1>
            <p className="">{product.description}</p>
            <p className="font-bold text-2xl">
              ${product.price} /
              <span className="text-xl font-light text-[#627382]">
                {" "}
                {product.period}
              </span>
            </p>
            <div className="">
              {product.features.map((feature, index) => {
                return (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheck className="text-green-400" />
                    <p className="text-[#627382]">{feature}</p>
                  </div>
                );
              })}
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={isSelected}
              className={`btn ${isSelected ? "bg-green-400" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"} rounded-full text-white w-full hover:scale-105 transform transition-transform duration-300`}
            >
              {isSelected ? "Added to cart" : "Buy now"}
            </button>
          </div>
        );
      })}
    </div>
  ) : (
    <Cart selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} price={price} setPrice={setPrice}></Cart>
  );
};

export default Products;
