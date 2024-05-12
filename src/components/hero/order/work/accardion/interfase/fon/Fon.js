import React, { useState } from "react";
// import mall from "../../../assets/img/fon.png";
import mall from "../../../../../../../assets/img/fon.png";

import { Link } from "react-router-dom";

const Fon = () => {
  const [leave, setLeave] = useState(false);
  return (
    <div
      id="mall"
      style={{
        // margin: "100px 0",
        background: `url(${mall}) no-repeat center/cover`,
        // minHeight: "60vh",
        height: "500px",
        overflow: "hidden",
      }}
      className="relative"
    >
      <div className="container">
        <div className="">
          <div
            style={{
              transform: leave ? "translateX(-100%)" : "translateX(0)",
              transition: "1s",
            }}
            className="w-[600px] left-0 top-10 absolute flex items-center justify-center flex-col text-center h-[400px] gg1"
          >
            <h1 className="text-white text-[50px] font-black">
              Visit us at our store <br /> in the <br />{" "}
              <span>Mall of Emirate</span>
            </h1>
            <a
              onClick={() => setLeave(true)}
              className="flex absolute bottom-[60px] right-[40px] items-center justify-center  text-white gap-2 text-xl cursor-pointer underline "
            >
              more <ion-icon name="arrow-forward-outline"></ion-icon>
            </a>
          </div>

          <div
            style={{
              transform: leave ? "translateX(0)" : "translateX(100%)",
              transition: "1s",
            }}
            className="w-[600px] right-0 top-10 absolute flex items-center justify-center flex-col text-center h-[400px] gg2"
          >
            <h2
              onClick={() => setLeave(false)}
              className="text-white text-4xl absolute left-3 top-10 cursor-pointer"
            >
              <ion-icon name="chevron-back-outline"></ion-icon>
            </h2>
            <h1 className="text-white text-[30px] font-black w-[80%]">
              We are stationed in one of the most beautiful and prestigious
              malls on this planet. Visit us and we will consult you to all our
              products
            </h1>
            <div className=" flex gap-5 mt-2">
              <button className="text-xl text-white border-[2px] border-solid border-x-white py-2 px-10 rounded-[3px]">
                Get directions
              </button>
              <Link to={"/product"}>
                <button className="text-xl bg-black text-white border-[2px] border-solid border-x-white py-2 px-10 rounded-[3px]">
                  Or buy online
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fon;
