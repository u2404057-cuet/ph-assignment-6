import "./App.css";
import { ToastContainer } from "react-toastify";
import DaisyNav from "./components/daisyNav/DaisyNav";
import Banner from "./components/banner/Banner";
import Stats from "./components/stats/Stats";
import DigitalTools from "./components/digitalTools/DigitalTools";
import { Suspense } from "react";
import Products from "./components/digitalTools/Products";
import Steps from "./components/steps/Steps";
import Packages from "./components/packages/Packages";
import Explore from "./components/explore/Explore";
import Footer from "./components/footer/Footer";

function App() {
  const fetchProducts = async () => {
    const res = await fetch("/public/data.json");
    return res.json();
  };
  const productPromise = fetchProducts();

  const fetchPackages = async () => {
    const res = await fetch("/public/packages.json");
    return res.json();
  };
  const packagePromise = fetchPackages();

  return (
    <>
      <DaisyNav></DaisyNav>
      <Banner></Banner>
      <Stats></Stats>
      <DigitalTools></DigitalTools>
      <Suspense fallback={<p>hi...</p>}>
        <Products productPromise={productPromise}></Products>
      </Suspense>
      <Steps></Steps>
      <Suspense>
        <Packages packagePromise={packagePromise}></Packages>
      </Suspense>
      <Explore></Explore>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
