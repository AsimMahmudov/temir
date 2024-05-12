import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { proId } = useParams();
  const [value, setValue] = useState("");

  const { product, basket } = useSelector((s) => s);
  let finds = product.find((el) => el.id === +proId);
  console.log(finds);
  const addToBasket = (data) => {
    dispatch({ type: "ADD_TO_BASKET", payload: data });
  };

  const dispatch = useDispatch();
  const bas = basket.some((some) => some.id === finds.id);

  console.log(proId);

  return (
    <>
      <section>
        <div className="container">
          <div className="flex gap-[20px] pt-[100px]">
            <div className="">
              <div className="flex flex-col gap-[100px]">
                <h1 className="text-[50px] text-white protext">
                  Premium Smart Card <br /> 200 aed{" "}
                </h1>

                <div className="flex gap-3 bg-black w-[800px] h-[200px] justify-center items-center rounded-2xl">
                  {product.slice(0, 3).map((el) => (
                    <div className="card2">
                      <Link to={`/ProductDetails/${el.id}`}>
                        <img src={el.image} alt="" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-[50px] flex items-center gap-5">
                {/* <h2 className="text-white text-[20px]">Name</h2> */}

                <input
                  onChange={(e) => setValue(e.target.value)}
                  className="w-[550px] h-[85px] mt-[-5px] text-white   p-[10px] text-[20px] bg-black rounded-xl"
                  type="text"
                  placeholder="Insert your name "
                />

                <button
                  onClick={() => addToBasket(finds)}
                  type="button"
                  class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-[230px] h-[80px] "
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="det-box">
              <img
                className="w-[1000px] rounded-2xl"
                src={finds.image}
                alt=""
              />

              <h1 className="  text-white text-5xl w-[200px] mt-[-250px] ml-[160px] font-black ">
                {value}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex items-center justify-center pt-[100px] pb-[100px]">
            <div className="flex gap-[50px]">
              <div className="bg-white w-[3px]"></div>
              <div className=" flex flex-col text-gray-500 gap-[50px]">
                <h1 className="text-[30px]">
                  The look and feel of metal will take your <br /> TEMIR cards
                  to the next level of quality and <br /> excellence, exceeding
                  your most valuable <br /> customer’s expectations.
                </h1>

                <h1 className="text-[30px]">
                  Its metallic surface and mechanically <br /> engraved details
                  make it a striking element <br /> of your brand, and an
                  exclusive new <br /> experience that your customers won’t want{" "}
                  <br />
                  to miss out on.
                </h1>
              </div>
              <div className="bg-white w-[3px] "></div>
              <div className="text-white flex flex-col gap-[50px] items-center">
                <h1 className="text-[40px]">
                  If you want to change the location of <br /> the logo or text,
                  then contact us via <br /> Whatsapp.
                </h1>

                <Link
                  to={
                    "https://api.whatsapp.com/send/?phone=%2B996559692626&text&type=phone_number&app_absent=0"
                  }
                >
                  <button className="w-[400px] h-[70px] text-[40px] bg-black">
                    Whatsapp <ion-icon name="logo-whatsapp"></ion-icon>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
