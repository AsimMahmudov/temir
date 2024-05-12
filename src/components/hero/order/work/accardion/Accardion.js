import React, { useState } from "react";

const Accardion = () => {
  const [accardionOpen, setAccardionOpen] = useState(false);
  const [accardionOpen2, setAccardionOpen2] = useState(false);
  const [accardionOpen3, setAccardionOpen3] = useState(false);
  const [accardionOpen4, setAccardionOpen4] = useState(false);
  const [accardionOpen5, setAccardionOpen5] = useState(false);
  const [accardionOpen6, setAccardionOpen6] = useState(false);
  const [accardionOpen7, setAccardionOpen7] = useState(false);

  return (
    <>
      <h1 className="text-4xl ml-[180px] p-2">FAQ</h1>
      <div className="py-2 text-2xl bg-[#1A1919] flex flex-col items-center p-10 ">
        <button
          onClick={() => setAccardionOpen(!accardionOpen)}
          className="flex justify-between w-full"
        >
          <span>How to customize the card?</span>
          {accardionOpen ? (
            <span>
              <ion-icon name="chevron-up-outline"></ion-icon>
            </span>
          ) : (
            <span>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </span>
          )}
        </button>
        <div
          className={`grid overflow-hidden translate-all duration-300 ease-in-out text-slate-600 text-sm ${
            accardionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste
            laboriosam cupiditate aspernatur architecto molestiae enim veritatis
            temporibus, neque magnam tempora dolorem saepe ad optio error minima
            repellat. Consequuntur necessitatibus obcaecati ipsam vel voluptatum
            eaque omnis ab quia impedit fugiat.
          </div>
        </div>
      </div>
      <div className="py-2 text-2xl bg-[#1A1919] flex flex-col items-center p-10">
        <button
          onClick={() => setAccardionOpen2(!accardionOpen2)}
          className="flex justify-between w-full"
        >
          <span className="text-start">
            How to use a cards and what we can add?
          </span>
          {accardionOpen2 ? (
            <span>
              <ion-icon name="chevron-up-outline"></ion-icon>
            </span>
          ) : (
            <span>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </span>
          )}
        </button>
        <div
          className={`grid overflow-hidden translate-all duration-300 ease-in-out text-slate-600 text-sm ${
            accardionOpen2
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste
            laboriosam cupiditate aspernatur architecto molestiae enim veritatis
            temporibus, neque magnam tempora dolorem saepe ad optio error minima
            repellat. Consequuntur necessitatibus obcaecati ipsam vel voluptatum
            eaque omnis ab quia impedit fugiat.
          </div>
        </div>
      </div>
      <div className="py-2 text-2xl  bg-[#1A1919] flex flex-col items-center p-10">
        <button
          onClick={() => setAccardionOpen3(!accardionOpen3)}
          className="flex justify-between w-full"
        >
          <span>How to share with my card?</span>
          {accardionOpen3 ? (
            <span>
              <ion-icon name="chevron-up-outline"></ion-icon>
            </span>
          ) : (
            <span>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </span>
          )}
        </button>
        <div
          className={`grid overflow-hidden translate-all duration-300 ease-in-out text-slate-600 text-sm ${
            accardionOpen3
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste
            laboriosam cupiditate aspernatur architecto molestiae enim veritatis
            temporibus, neque magnam tempora dolorem saepe ad optio error minima
            repellat. Consequuntur necessitatibus obcaecati ipsam vel voluptatum
            eaque omnis ab quia impedit fugiat.
          </div>
        </div>
      </div>
      <div className="py-2 text-2xl  bg-[#1A1919] flex flex-col items-center p-10">
        <button
          onClick={() => setAccardionOpen4(!accardionOpen4)}
          className="flex justify-between w-full"
        >
          <span>Any additional chages?</span>
          {accardionOpen4 ? (
            <span>
              <ion-icon name="chevron-up-outline"></ion-icon>
            </span>
          ) : (
            <span>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </span>
          )}
        </button>
        <div
          className={`grid overflow-hidden translate-all duration-300 ease-in-out text-slate-600 text-sm ${
            accardionOpen4
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste
            laboriosam cupiditate aspernatur architecto molestiae enim veritatis
            temporibus, neque magnam tempora dolorem saepe ad optio error minima
            repellat. Consequuntur necessitatibus obcaecati ipsam vel voluptatum
            eaque omnis ab quia impedit fugiat.
          </div>
        </div>
      </div>
      <div className="py-2 text-2xl  bg-[#1A1919] flex flex-col items-center p-10 ">
        <button
          onClick={() => setAccardionOpen5(!accardionOpen5)}
          className="flex justify-between w-full"
        >
          <span>How long does delivery take?</span>
          {accardionOpen5 ? (
            <span>
              <ion-icon name="chevron-up-outline"></ion-icon>
            </span>
          ) : (
            <span>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </span>
          )}
        </button>
        <div
          className={`grid overflow-hidden translate-all duration-300 ease-in-out text-slate-600 text-sm ${
            accardionOpen5
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste
            laboriosam cupiditate aspernatur architecto molestiae enim veritatis
            temporibus, neque magnam tempora dolorem saepe ad optio error minima
            repellat. Consequuntur necessitatibus obcaecati ipsam vel voluptatum
            eaque omnis ab quia impedit fugiat.
          </div>
        </div>
      </div>
      <div className="py-2 text-2xl  bg-[#1A1919] flex flex-col items-center p-10">
        <button
          onClick={() => setAccardionOpen6(!accardionOpen6)}
          className="flex justify-between w-full"
        >
          <span>Is there a product warranty?</span>
          {accardionOpen6 ? (
            <span>
              <ion-icon name="chevron-up-outline"></ion-icon>
            </span>
          ) : (
            <span>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </span>
          )}
        </button>
        <div
          className={`grid overflow-hidden translate-all duration-300 ease-in-out text-slate-600 text-sm ${
            accardionOpen6
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste
            laboriosam cupiditate aspernatur architecto molestiae enim veritatis
            temporibus, neque magnam tempora dolorem saepe ad optio error minima
            repellat. Consequuntur necessitatibus obcaecati ipsam vel voluptatum
            eaque omnis ab quia impedit fugiat.
          </div>
        </div>
      </div>
      <div className="py-2 text-2xl  bg-[#1A1919] flex flex-col items-center p-10">
        <button
          onClick={() => setAccardionOpen7(!accardionOpen7)}
          className="flex justify-between w-full"
        >
          <span>What is privacy policy?</span>
          {accardionOpen7 ? (
            <span>
              <ion-icon name="chevron-up-outline"></ion-icon>
            </span>
          ) : (
            <span>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </span>
          )}
        </button>
        <div
          className={`grid overflow-hidden translate-all duration-300 ease-in-out text-slate-600 text-sm ${
            accardionOpen7
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste
            laboriosam cupiditate aspernatur architecto molestiae enim veritatis
            temporibus, neque magnam tempora dolorem saepe ad optio error minima
            repellat. Consequuntur necessitatibus obcaecati ipsam vel voluptatum
            eaque omnis ab quia impedit fugiat.
          </div>
        </div>
      </div>
    </>
  );
};

export default Accardion;
