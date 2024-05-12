import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Basket = () => {
  const { basket } = useSelector((s) => s);
  const dispatch = useDispatch();

  const deleteProduct = (data) => {
    dispatch({ type: "DELETE", payload: data.id });
  };

  const Plus = (el) => {
    dispatch({ type: "PLUS", payload: el });
  };

  const Minus = (el) => {
    dispatch({ type: "MINUS", payload: el });
  };

  localStorage.setItem("basket", JSON.stringify(basket));

  console.log("basket", basket);

  let all = basket.reduce((acc, el) => {
    return (acc += el.price * el.quantity);
  }, 0);

  let allCount = basket.reduce((acc, el) => {
    return (acc += el.quantity);
  }, 0);

  return (
    <div>
      <div className="container">
        <div className=" flex justify-center pt-10 pb-10 ">
          <table className=" w-[1100px] bg-black text-white rounded-xl p-5 flex flex-col">
            <thead className="flex gap-[400px] text-gray-400">
              {/* <tr className=""> */}
              <div className="">
                <th scope="col" class="px-6 py-3">
                  Image
                </th>
              </div>
              <div className="flex w-[500px] justify-between">
                <th scope="col" class="px-6 py-3 ">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  qyinity
                </th>
                <th scope="col" class="px-6 py-3 text-end">
                  Delete
                </th>
              </div>
              {/* </tr> */}
            </thead>
            {basket.map((el) => (
              <tbody className="h-[150px] w-[1000px]">
                <tr className="  flex justify-between items-center">
                  <th>
                    <div className="flex">
                      <img class="w-[200px]" src={el.image} alt="" />
                      <h1 className="mt-5 ml-2 text-[20px]">{el.title}</h1>
                    </div>
                  </th>
                  <td class="px-6 py-4 text-[20px]">
                    {el.price * el.quantity} сом
                  </td>
                  <td class="px-6 py-4 flex items-center">
                    <button
                      className="w-10 text-[40px]"
                      onClick={() => Minus(el)}
                    >
                      -
                    </button>
                    <h1 className="text-[30px]">{el.quantity}</h1>
                    <button
                      className=" w-10 text-[40px]"
                      onClick={() => Plus(el)}
                    >
                      +
                    </button>
                  </td>
                  <td class="px-6 py-4 text-right">
                    <button
                      className="text-red-600 text-[30px]"
                      onClick={() => deleteProduct(el)}
                    >
                      <ion-icon name="trash-outline"></ion-icon>
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
            <tr class="odd:bg-white h-16 odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-32"
              >
                TOTAL PRICE:{all}
              </th>
              <td class="px-6 py-4">ALL COUNT:{allCount}</td>
              <td class="px-6 py-4"> </td>
              <td class="px-6 py-4"> </td>
              <td class="px-6 py-4 flex gap-4 mt-12"> </td>

              <td class="px-6 py-4"></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Basket;
