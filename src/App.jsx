import "./App.css";
import { ToastContainer } from "react-toastify";
import DaisyNav from "./components/daisyNav/DaisyNav";
import Banner from "./components/banner/Banner";
import Stats from "./components/stats/Stats";
import DigitalTools from "./components/digitalTools/DigitalTools";
import { Suspense, useState } from "react";
import Products from "./components/digitalTools/Products";
import Steps from "./components/steps/Steps";
import Packages from "./components/packages/Packages";
import Explore from "./components/explore/Explore";
import Footer from "./components/footer/Footer";
import { DiVim } from "react-icons/di";

function App() {
  const fetchProducts = async () => {
    const res = await fetch("/data.json");
    return res.json();
  };
  const productPromise = fetchProducts();

  const fetchPackages = async () => {
    const res = await fetch("/packages.json");
    return res.json();
  };
  const packagePromise = fetchPackages();

  const [cartBtn, setCartBtn] = useState("product");
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <>
      <DaisyNav selectedProducts={selectedProducts}></DaisyNav>
      <Banner></Banner>
      <Stats></Stats>
      <DigitalTools cartBtn={cartBtn} setCartBtn={setCartBtn} selectedProducts={selectedProducts}></DigitalTools>
      <Suspense
        fallback={<div className="flex justify-center mb-10">
          <span className="loading loading-dots loading-xl"></span>
        </div>}
      >
        <Products productPromise={productPromise} cartBtn={cartBtn} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}></Products>
      </Suspense>
      <Steps></Steps>
      <Suspense
        fallback={<div className="flex justify-center mb-10">
          <span className="loading loading-dots loading-xl"></span>
        </div>}
      >
        <Packages packagePromise={packagePromise}></Packages>
      </Suspense>
      <Explore></Explore>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
