import React, { useEffect, useState } from "react";
import icon1 from "../../../../assets/img/icon1.png";
import icon2 from "../../../../assets/img/icon2.png";
import icon3 from "../../../../assets/img/icon3.png";

import hent1 from "../../../../assets/img/hent1.png";
import hent2 from "../../../../assets/img/Hand,L.png";

import AOS from "aos";
import "aos/dist/aos.css";

// import shadow from "../../../../assets/img/Rectangle 5.png";

import Accardion from "./accardion/Accardion";
import Interfase from "./accardion/interfase/Interfase";

const Work = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  AOS.init({
    once: true,
    disable: "phone",
    duration: 700,
    easing: "ease-out-cubic",
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="container">
        <div className="flex justify-between  ">
          <div className="text-white">
            <h1 className="text-[90px] font-black">How it works</h1>
            <div className="flex gap-24">
              <img src={icon1} alt="" />
              <img src={icon2} alt="" />
              <img src={icon3} alt="" />
            </div>
          </div>
          <div className="flex gap-10 text-2xl mt-12">
            <div className="w-1 h-[110px] bg-white"></div>
            <h3 className="text-white">
              Choose your design & personalize with your own <br /> company
              logo. The logo will be engraved into the <br /> metal card.
            </h3>
          </div>
        </div>
        <div className="mt-20 flex">
          <div className="  p-[1px] w-[453px] mt-20">
            <div className="  rounded-lg w-[450px] text-white ml-[1px] flex flex-col gap-[10px] ">
              <Accardion />
            </div>
          </div>
          <div className="">
            <div className="ml-[260px] w-[600px]">
              <img src={hent1} alt="" />
            </div>
            <div
              style={{
                transform:
                  scrollPosition < 2000
                    ? "translateY(300px)"
                    : "translateY(15%)",
                opacity: scrollPosition < 2000 ? "0" : "1",

                transition: "1s",
              }}
              className="ml-[250px] mt-[-400px] w-[300px]"
            >
              <img src={hent2} alt="" />
            </div>
          </div>
        </div>
        <Interfase />
      </div>
    </div>
  );
};

export default Work;
