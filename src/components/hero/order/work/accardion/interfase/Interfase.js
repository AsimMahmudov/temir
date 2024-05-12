import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import qr from "../../../../../../assets/img/qr code.svg";

import Fon from "./fon/Fon";

const Interfase = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPostion, setScrollPostion] = useState(0);
  const [isModal, setModal] = useState(false);

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
    <div id="interfase">
      <div className="container">
        <div className="flex justify-center mt-[250px] p-10">
          <img src={qr} alt="" />
        </div>
        <div className="mt-[100px] p-10">
          <div className=" justify-center flex ">
            <div
              style={{
                transform:
                  scrollPosition < 3150
                    ? "translateY(-200px)"
                    : "translateY(15%)",
                opacity: scrollPosition < 3150 ? "0" : "1",

                transition: "0.5s",
              }}
            >
              <div className="  text-white text-2xl w-[400px] h-[200px] text-center ">
                <h1 className=" text-[50px] ">1</h1>
                <h2 className=" text-[30px] mt-5">Fast delivery</h2>
                <p className="text-gray-700 text-[20px] mt-3">
                  We deliver right to your <br /> front door or office. <br />{" "}
                  Free of charge!
                </p>
              </div>
            </div>
            <div
              style={{
                transform:
                  scrollPosition < 3150
                    ? "translateY(-200px)"
                    : "translateY(15%)",
                opacity: scrollPosition < 3150 ? "0" : "1",

                transition: "1s",
              }}
            >
              <div className="  text-white text-2xl w-[400px] h-[200px] text-center ">
                <h1 className=" text-[50px] ">2</h1>
                <h2 className=" text-[30px] mt-5">High quality</h2>
                <p className="text-gray-700 text-[20px] mt-3 ">
                  We are committed towork <br /> only with the highest <br />
                  product quality.
                </p>
              </div>
            </div>
            <div
              style={{
                transform:
                  scrollPosition < 3150
                    ? "translateY(-200px)"
                    : "translateY(15%)",
                opacity: scrollPosition < 3150 ? "0" : "1",

                transition: "1.8s",
              }}
            >
              <div className="  text-white text-2xl w-[400px] h-[200px] text-center ">
                <h1 className=" text-[50px] ">3</h1>
                <h2 className=" text-[30px] mt-5">Customer Service</h2>
                <p className="text-gray-700 text-[20px] mt-3">
                  We are just one phone <br /> call away. For <br /> anything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="int ">
        <h1 className="text-white text-center text-5xl">Contact us</h1>
        <div className="inputs">
          <h3>Full name</h3>
          <input placeholder="Felix Chan..." type="text" />
        </div>
        <div className="inputs">
          <h3>Email</h3>
          <input placeholder="Your email..." type="text" />
        </div>
        <div className="inputs">
          <h3>Message</h3>
          <input placeholder="Enter message..." type="text" />
        </div>
        <button>Submit</button>
      </div>
      <Fon />
    </div>
  );
};

export default Interfase;
