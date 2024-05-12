import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import order1 from "../../../assets/img/card1.svg";
import order2 from "../../../assets/img/card2.svg";
import order3 from "../../../assets/img/card3.svg";
import Work from "./work/Work";

const Order = () => {
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
    <div className="py-20 bg-black">
      <div className="container">
        <div className=" flex items-start justify-between relative">
          <h1 className="text-white text-[60px] leading-[65px] font-black bg-black z-[2] pb-[30px]">
            The smart way <br /> of staying <br /> connected
          </h1>
          <p
            className="text-white text-[25px] font-extralight top-[80px] absolute leading-[30px] left-[350px]"
            // data-aos="fade-right"
            style={{
              transform:
                scrollPosition < 750 ? "translateX(-500px)" : "translateX(15%)",
              opacity: scrollPosition < 830 ? "0" : "1",

              transition: "1.5s",
            }}
          >
            Digital business cards are the modern way to share contact
            information. <br /> Digital business cards are more interactive,
            costeffective, and sustainable <br /> than their physical
            counterparts. One major benefit of digital business <br /> cards is
            that they can be shared with anyone, anywhere.
          </p>
        </div>

        <h1 className="text-white text-2xl fixed bottom-[40px] right-[50px]">
          {scrollPosition}
        </h1>
        <div className="flex justify-between my-10">
          <div
            style={{
              transform:
                scrollPosition < 800 ? "translateX(-150px)" : "translateX(0px)",
              opacity: scrollPosition < 830 ? "0" : "1",
              transition: "1.5s",
            }}
            className="flex items-center justify-center flex-col text-center gap-2"
          >
            <div className="w-[360px] h-[360px] bg-[#3a3a3a] relative">
              <img src={order1} alt="img" className="w-[360px] absolute" />
            </div>
            <h2>SMART CARDS</h2>
          </div>

          <div
            style={{
              transform: scrollPosition < 800 ? "scale(0.3)" : "scale(1)",
              opacity: scrollPosition < 830 ? "0" : "1",
              transition: "1.5s",
            }}
            className="flex items-center justify-center flex-col text-center gap-2"
          >
            <div className="w-[360px] h-[360px] bg-[#3a3a3a] relative">
              <img src={order2} alt="img" className="w-[360px] absolute" />
            </div>
            <h2>KEYCHAINS</h2>
          </div>

          <div
            style={{
              transform:
                scrollPosition < 800 ? "translateX(150px)" : "translateX(0px)",
              opacity: scrollPosition < 830 ? "0" : "1",

              transition: "1.5s",
            }}
            className="flex items-center justify-center flex-col text-center gap-2"
          >
            <div className="w-[360px] h-[360px] bg-[#3a3a3a] relative">
              <img src={order3} alt="img" className="w-[360px] absolute" />
            </div>
            <h2>MOBILE TAGS</h2>
          </div>
        </div>
        <div className="flex justify-center mt-28">
          <button className="w-[200px] h-[60px] bg-slate-900 text-white rounded-[10px] text-2xl ">
            Order
          </button>
        </div>
        <Work />
      </div>
    </div>
  );
};

export default Order;
