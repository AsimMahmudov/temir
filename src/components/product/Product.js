import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../../components/data";
import ProductCard from "../productCard/ProductCard";

const Product = () => {
  const { product } = useSelector((s) => s);
  const dispatch = useDispatch();

  const getProduct = (main) => {
    dispatch({ type: "GET_PRODUCT", payload: main });
  };

  useEffect(() => {
    getProduct(data);
  }, []);

  return (
    <div id="product" className="py-[60px]">
      <div className="container">
        <div className="flex flex-col gap-20">
          <div className="flex items-center justify-around bg-black w-[100%] h-[700px] p-2 ">
            {data.slice(0, 4).map((el) => (
              <ProductCard el={el} />
            ))}
          </div>
          <div className=" items-center justify-between bg-black w-[100%] h-[700px] p-2 ">
            {data.slice(4, 5).map((el) => (
              <div className="flex  gap-6 items-center justify-center mt-10 ">
                <ProductCard el={el} />
                <div className="w-[250px] h-[570px] bg-red-600  flex justify-center items-center kk1"></div>
                <div className="w-[250px] h-[570px]  bg-red-600  flex justify-center items-center kk2"></div>
                <div className="w-[250px] h-[570px] bg-red-600 flex justify-center items-center kk3"></div>
                <div className="w-[250px] h-[570px] bg-red-600  flex justify-center items-center kk4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

// import React from "react";
// import carta1 from "../../assets/img/carta1.png";
// import carta2 from "../../assets/img/carta2.png";
// import carta3 from "../../assets/img/carta3.png";
// import carta4 from "../../assets/img/carta4.png";

// const Product = () => {
//   return (
//     <div className="container">
//       <div className="gg">
//         <div className="ee">
//           <div className="block">
//             {/* /// */}

//             <div className="ff">
//               <div className="ll">
//                 <img className="dd1" src={carta1} alt="" />
//               </div>
//               <div className="fftext">
//                 <h1>Premium Smart Card</h1>
//                 <h2>200 aed</h2>
//               </div>
//             </div>

//             {/* /// */}

//             <div className="ff">
//               <div className="ll">
//                 <img className="dd1" src={carta2} alt="" />
//               </div>
//               <div className="fftext">
//                 <h1>Premium Smart Card</h1>
//                 <h2>200 aed</h2>
//               </div>
//             </div>

//             {/* /// */}

//             <div className="ff">
//               <div className="ll">
//                 <img className="dd1" src={carta3} alt="" />
//               </div>
//               <div className="fftext">
//                 <h1>Premium Smart Card</h1>
//                 <h2>200 aed</h2>
//               </div>
//             </div>

//             {/* /// */}

//             <div className="ff">
//               <div className="ll">
//                 <img className="dd1" src={carta4} alt="" />
//               </div>
//               <div className="fftext">
//                 <h1>Premium Smart Card</h1>
//                 <h2>200 aed</h2>
//               </div>
//             </div>

//             {/* /// */}
//           </div>
//         </div>

//         <div className="a1"></div>
//         <div className="a2"></div>
//         <div className="b1"></div>
//         <div className="b2"></div>
//       </div>
//     </div>
//   );
// };

// export default Product;
