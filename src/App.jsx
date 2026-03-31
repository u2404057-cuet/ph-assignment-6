import "./App.css";
import { ToastContainer } from "react-toastify";
import DaisyNav from "./components/daisyNav/DaisyNav";
import Banner from "./components/banner/Banner";
import Stats from "./components/stats/Stats";
import DigitalTools from "./components/digitalTools/DigitalTools";
import { Suspense } from "react";
import Products from "./components/digitalTools/Products";

function App() {
  const fetchProducts = async () => {
    const res = await fetch("/public/data.json");
    return res.json();
  };
  const productPromise = fetchProducts();
  console.log(productPromise);

  return (
    <>
      <DaisyNav></DaisyNav>
      <Banner></Banner>
      <Stats></Stats>
      <DigitalTools></DigitalTools>
      <Suspense fallback={<p>hi...</p>}>
        <Products productPromise={productPromise}></Products>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
