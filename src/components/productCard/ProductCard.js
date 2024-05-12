import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const ProductCard = ({ el }) => {
  const nav = useNavigate();
  const { basket, favorit } = useSelector((s) => s);
  const bas = basket.some((some) => some.id === el.id);
  const dispatch = useDispatch();
  const addToBasket = (data) => {
    dispatch({ type: "ADD_TO_BASKET", payload: data });
  };

  const [over, setOver] = useState(false);

  return (
    // <div className="flex items-center justify-around bg-black w-[100%] h-[700px] p-2 ">
    <div className="   ">
      <div
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        className={`flex  flex-col  text-center gap-6    ff`}
      >
        <div className=" overflow-hidden h-[600px] w-[310px] jj   flex items-center flex-col items-center ">
          <img
            src={el.image}
            alt=""
            className={` ${
              over
                ? " rotate-[0deg]    "
                : " rotate-[-90deg]   scale-[3.0]  transition-[20s]  "
            }      mt-[40px] transition-[20s] w-[900px]`}
          />
        </div>

        <div className={`${over ? "mt-[-300px] " : "hidden  "}`}>
          <h1 className="text-white text-[35px]">{el.title}</h1>
          <h1 className="text-white text-[25px]">{el.price}AED</h1>
          <NavLink to={`/ProductDetails/${el.id}`}>
            <button className="text-white text-xl mt-5 bg-[#181818] shadow-gray-300 shadow-md  rounded-[8px] w-[300px] h-[60px]">
              Add to cart
            </button>
          </NavLink>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ProductCard;
