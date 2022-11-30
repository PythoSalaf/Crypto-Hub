import React from "react";
import { Images } from "../Constant";
import { AiOutlineDown } from "react-icons/ai";
import { CgArrowsExchangeV } from "react-icons/cg";
const Liquidity = () => {
  return (
    <div className="w-full px-4 py-6 rounded-lg bg-heroColor">
      <h2 className="text-center text-xl md:text-2xl text-gray-50 font-semibold py-2">
        Liquidity
      </h2>
      <div className="px-8 py-10 shadow-lg bg-heroTextcol rounded-xl">
        <div className="flex items-center justify-between px-2 md:px-4 py-2 md:py-4 rounded-2xl bg-LiqColor ">
          <div className="">
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
          <div className="flex items-center gap-2 md:gap-4">
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
        <div className="flex items-center justify-between px-2 md:px-4 py-2 md:py-4 rounded-2xl bg-LiqColor ">
          <div className="">
            <div className="flex items-center">
              <img src={Images.Btc} alt="btc" className="w-[60px] shadow-lg" />
              <h3 className="text-white text-[14px] pr-2 font-semibold md:text-xl ">
                BTC
              </h3>
              <AiOutlineDown className=" text-white cursor-pointer w-[25px] md:w-[30px] pr-2" />
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <p className="px-2 py-1 text-white border-2 rounded-lg cursor-pointer border-secondaryColor md:px-4 hover:bg-white hover:text-black text-[11px] md:text-xl">
              Max
            </p>
            <p className="px-2 py-1 text-white border-2 rounded-lg cursor-pointer border-secondaryColor md:px-4 hover:bg-white hover:text-black text-[11px] md:text-xl">
              Half
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 cursor-pointer rounded-2xl bg-btnColor">
        <h2 className="flex items-center justify-center py-3 text-xl font-semibold lg:text-2xl text-heroText">
          Add
        </h2>
      </div>
      <div className="mt-8 cursor-pointer rounded-2xl">
        <h2 className="px-2 py-3 text-white text-lg md:text-2xl">My Liquidity</h2>
        <h2 className="flex items-center justify-center py-3 text-xl text-white bg-btnColor rounded-2xl">
          The Liquidity | Provided
        </h2>
      </div>
    </div>
  );
};

export default Liquidity;
