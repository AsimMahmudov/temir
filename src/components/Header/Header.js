import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";

const Header = () => {
  return (
    <div className=" bg-black py-8 sticky top-0 z-[99]">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className=""></div>
          <div className="flex items-center gap-10">
            <Link
              to={"/"}
              className="text-white text-2xl tracking-wider hover:duration-[0.5s] hover:border-b-[1px] hover:border-solid hover:border-inherit"
            >
              Home
            </Link>
            <Link
              to={"/product"}
              className="text-white text-2xl tracking-wider hover:duration-[0.5s] hover:border-b-[1px] hover:border-solid hover:border-inherit"
            >
              products
            </Link>
            <img src={logo} alt="img" className="mx-10" />
            <Link
              to={"/about"}
              className="text-white text-2xl tracking-wider hover:duration-[0.5s] hover:border-b-[1px] hover:border-solid hover:border-inherit"
            >
              about
            </Link>
            <Link
              to={"/contact"}
              className="text-white text-2xl tracking-wider hover:duration-[0.5s] hover:border-b-[1px] hover:border-solid hover:border-inherit"
            >
              Contact US
            </Link>
          </div>
          <Link to={"/basket"} className="text-white text-4xl ">
            <ion-icon name="bag-add-outline"></ion-icon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
