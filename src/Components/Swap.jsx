import React from "react";
import { Images } from "../Constant";
import { AiOutlineDown } from "react-icons/ai";
import { CgArrowsExchangeV } from "react-icons/cg";
const Swap = () => {
  return (
    <div>
      <div className="px-8 py-10 shadow-lg rounded-xl bg-heroText">
        <div className="flex items-center justify-between px-5 rounded-2xl bg-heroColor ">
          <div className="">
            <p className="px-4 py-1 text-lg md:text-2xl text-heroText">From</p>
            <div className="flex items-center">
              <img
                src={Images.Usdt}
                alt="usdt"
                className="w-[37px] pr-2 shadow-lg"
              />
              <h3 className="text-white text-[14px] font-semibold pr-2 md:text-xl">
                USDT
              </h3>
              <AiOutlineDown className="text-white cursor-pointer w-[23px] md:w-[30px]" />
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4 pt-6 ">
            <p className="px-2 py-1 text-white border-2 rounded-lg cursor-pointer border-secondaryColor md:px-4 hover:bg-white hover:text-black text-[11px] md:text-xl">
              Max
            </p>
            <p className="px-2 py-1 text-white border-2 rounded-lg cursor-pointer border-secondaryColor md:px-4 hover:bg-white hover:text-black text-[11px] md:text-xl">
              Half
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center py-8 ">
          <CgArrowsExchangeV
            size={45}
            className="text-white rounded-full shadow-lg bg-heroColor"
          />
        </div>
        <div className="flex items-center justify-between px-5 rounded-2xl bg-heroColor ">
          <div className="">
            <p className="px-4 py-2 text-lg md:text-2xl text-heroText">To</p>
            <div className="flex items-center">
              <img src={Images.Btc} alt="btc" className="w-[60px] shadow-lg" />
              <h3 className="text-white text-[14px] font-semibold md:text-xl ">
                BTC
              </h3>
              <AiOutlineDown className=" text-white cursor-pointer w-[25px] md:w-[30px]" />
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4 pt-10  md:pt-6 ">
            <p className="px-2 py-1 border-2 rounded-lg cursor-pointer border-secondaryColor md:px-4 hover:bg-white hover:text-black text-[11px] text-white md:text-xl">
              Max
            </p>
            <p className="px-2 py-1 border-2 rounded-lg cursor-pointer border-secondaryColor md:px-4 hover:bg-white hover:text-black text-[11px] text-white md:text-xl">
              Half
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 cursor-pointer rounded-2xl bg-btnColor">
        <h2 className="flex items-center justify-center py-3 text-xl font-semibold lg:text-2xl text-heroText">
          Swap
        </h2>
      </div>
    </div>
  );
};

export default Swap;
