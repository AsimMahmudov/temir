import React from "react";
import temir from "../../assets/img/image 34.png";
import phone from "../../assets/img/iPhone 14 Pro.png";
import Order from "./order/Order";
import Accardion from "./order/work/accardion/Accardion";

const Hero = () => {
  return (
    <>
      <div id="hero" className="pt-10">
        <div className="container">
          <div className="flex items-center justify-center flex-col gap-5">
            <h1 className="text-white text-[70px]">Smart interface</h1>
            <div className="flex items-center gap-20">
              <h3 className="text-white text-2xl">High quality products</h3>
              <h3 className="text-white text-2xl">Convenient to use</h3>
            </div>
            <div className="">
              <img src={temir} alt="img" className="mb-[-50px]" />
              <img className="ml-5" src={phone} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <Order />
    </>
  );
};

export default Hero;
