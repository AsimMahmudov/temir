import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Contact = () => {
  const { basket } = useSelector((s) => s);

  let all = basket.reduce((acc, el) => {
    return (acc += el.price * el.quantity);
  }, 0);

  let allCount = basket.reduce((acc, el) => {
    return (acc += el.quantity);
  }, 0);

  //////////////////////

  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");
  const [name4, setName4] = useState("");
  const [name5, setName5] = useState("");
  const [name6, setName6] = useState("");
  const [name7, setName7] = useState("");
  const [name8, setName8] = useState("");
  const [name9, setName9] = useState("");
  const [name10, setName10] = useState("");
  const [name11, setName11] = useState("");

  const getProduct = () => {
    setName("");
    setName1("");
    setName2("");
    setName3("");
    setName4("");
    setName5("");
    setName6("");
    setName7("");
    setName8("");
    setName9("");
    setName10("");
    setName11("");
  };

  /////////////////////

  return (
    <div>
      <div className="container">
        <div className="contactblock1">
          <div className="contactblock">
            <div className="intbox">
              <div className="intcon">
                <p>First name*</p>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Enter your first name"
                />
              </div>

              <div className="intcon">
                <p>Last name*</p>
                <input
                  onChange={(e) => setName1(e.target.value)}
                  value={name1}
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>

              <div className="intcon">
                <p>Company name</p>
                <input
                  onChange={(e) => setName2(e.target.value)}
                  value={name2}
                  type="text"
                  placeholder="Enter your company name"
                />
              </div>

              <div className="intcon">
                <p>Phone*</p>
                <input
                  onChange={(e) => setName3(e.target.value)}
                  value={name3}
                  type="number"
                  placeholder="+971(-_-------)"
                />
              </div>

              <div className="intcon">
                <p>Email*</p>
                <input
                  onChange={(e) => setName4(e.target.value)}
                  value={name4}
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="intbox2">
              <div className=" ">
                <div className="intcon mt-6">
                  <input
                    onChange={(e) => setName5(e.target.value)}
                    value={name5}
                    type="text"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="intcon mt-2">
                  <input
                    onChange={(e) => setName6(e.target.value)}
                    value={name6}
                    type="text"
                    placeholder="Enter your first name"
                  />
                </div>
              </div>
              <div className="radio">
                <div className="intcon1">
                  <input
                    onChange={(e) => setName7(e.target.value)}
                    value={name7}
                    type="radio"
                  />
                  <p>First name*</p>
                </div>
                <div className="intcon1">
                  <input
                    onChange={(e) => setName8(e.target.value)}
                    value={name8}
                    type="radio"
                  />
                  <p>First name*</p>
                </div>
              </div>
              <div className="intcon">
                <p>First name*</p>
                <input
                  onChange={(e) => setName9(e.target.value)}
                  value={name9}
                  type="text"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="intcon mt-3">
                <p>First name*</p>
                <input
                  onChange={(e) => setName10(e.target.value)}
                  value={name10}
                  type="text"
                  placeholder="Enter your first name"
                />
              </div>
            </div>
          </div>
          <div className="obsh">
            <p>Order Notes</p>
            <input
              onChange={(e) => setName11(e.target.value)}
              value={name11}
              type="text"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div>
          <div className="container">
            <div className=" flex justify-center pt-10 pb-10 ">
              <table className=" w-[1100px]   text-white rounded-xl p-5 flex flex-col">
                <thead className="flex gap-[400px] text-gray-400">
                  {/* <tr className=""> */}
                  <div className="text-4xl text-white">
                    <th scope="col" class="px-6 py-3">
                      Product
                    </th>
                  </div>
                  <div className="flex w-[500px] justify-between">
                    <th scope="col" class="px-6 py-3 "></th>
                    <th scope="col" class="px-6 py-3"></th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-end text-4xl text-white"
                    >
                      Subtotal
                    </th>
                  </div>

                  {/* </tr> */}
                </thead>
                <hr className="w-[1540px] ml-[-240px] py-5" />
                {basket.map((el) => (
                  <tbody className="h-[150px] w-[1000px]">
                    <tr className="  flex justify-between items-center">
                      <th>
                        <div className="flex lll  w-[400px] h-[150px] justify-center items-center ">
                          <h1 className="  text-[30px] ">{el.title}</h1>
                        </div>
                      </th>
                      <div className="flex gap-10">
                        <td class="px-6 py-4 flex items-center">
                          <h1 className="text-[30px]">{el.quantity} x</h1>
                        </td>
                        <td class="px-6 py-4 text-[20px]">
                          {el.price * el.quantity} сом
                        </td>
                      </div>
                    </tr>
                  </tbody>
                ))}
                <div className=" py-6">
                  <tr className="  h-16 ">
                    <td className="px-6 py-4 text-5xl">
                      ALL COUNT : {allCount}
                    </td>
                    <td class="px-6 py-4 text-5xl"> TOTAL PRICE : {all}</td>

                    <td class="px-6 py-4"></td>
                  </tr>
                </div>
              </table>
            </div>
            <div className="  w-[100%] h-40 ">
              <h3 className="text-white text-2xl">Payment method*</h3>
              <div className="radio2">
                <div className="intcon2">
                  <input type="radio" />
                  <p>Cash on delivery</p>
                </div>
                <div className="intcon2">
                  <input type="radio" />
                  <p>Pay by card</p>
                </div>
                <button
                  onClick={() => getProduct()}
                  className="w-[400px] h-[80px] text-[20px] text-white bb"
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
