import React from "react";
import { LuShoppingCart } from "react-icons/lu";

const DaisyNav = ({selectedProducts}) => {
  console.log(selectedProducts);
  return (
    <div className="mb-20">
      <div className="navbar bg-base-100 shadow-sm lg:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <a className="lg:text-3xl text-xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex lg:gap-5 gap-3">
          <div className="relative text-2xl">
            <p className={`h-4 w-4 bg-red-500 rounded-full text-[10px] text-center absolute -top-1 -right-2 text-white pt-0.5 ${selectedProducts.length? "block" : "hidden"}`}>
              {selectedProducts.length}
            </p>
            <LuShoppingCart />
          </div>
          <p className="text-[14px]">Login</p>
          <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full font-normal hover:scale-105 transform transition-transform duration-300">
          Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default DaisyNav;
