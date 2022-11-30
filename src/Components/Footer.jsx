import React from "react";
import { MdArrowForward } from "react-icons/md";
const Footer = () => {
  return (
    <div className="w-full  bg-heroColor px-3 py-4 overflow-hidden">
      <div className="w-[95%] m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center py-4 justify-between">
        <div className="flex-1">
          <h1 className="uppercase text-heroText text-2xl font-bold py-4">
            b-<span className="text-secondaryColor">hub</span>
          </h1>
          <p className="text-heroText text-lg  ">
            The easiest place to buy <br /> and sell cryptocurrency. <br /> Sign
            up and get started <br /> today.
          </p>
        </div>
        <div className="flex-1 py-3 md:py-0 pl-5 md:pl-0">
          <h2 className="py-4 text-xl text-heroText">Company</h2>
          <p className="text-heroText text-base py-2">About</p>
          <p className="text-heroText text-base py-2">Investors</p>
          <p className="text-heroText text-base py-2">Blog</p>
          <p className="text-heroText text-base py-2">
            Digital Asset Disclosures
          </p>
        </div>
        <div className="flex-1 py-3 md:py-0">
          <h2 className="py-4 text-xl text-heroText">Features</h2>
          <p className="text-heroText text-base py-2">Buy&Sell</p>
          <p className="text-heroText text-base py-2">Earn free crypto</p>
          <p className="text-heroText text-base py-2">NFT</p>
          <p className="text-heroText text-base py-2">Wallet</p>
        </div>
        <div className="flex-1 py-3 md:py-0">
          <h2 className="py-4 text-xl text-heroText">Contact Us</h2>
          <p className="text-heroText text-base py-2">info@b-hub.com</p>
          <p className="text-heroText text-base py-2">1-600-400-800</p>
          <p className="text-heroText text-base py-2">
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </p>
        </div>
        <div className="flex-1 py-3 md:py-0">
          <h2 className="py-4 text-xl text-heroText">Stay up-to-date</h2>
          <p className="text-heroText text-base py-2">
            Subscribe to our newsletter
          </p>
          <div className="w-full relative flex items-center justify-start border-2 bg-secondaryColor outline-none rounded-lg py-2 ">
            <input type="email" className="border-none outline-none bg-transparent pl-2 font-bold text-base placeholder:text-heroText" placeholder="Email" />
            <MdArrowForward className="text-heroText absolute right-0" size={26} />
          </div>
        </div>
      </div>
      <div className="pt-[4rem] text-heroText text-[18px]">
        © Copyright B-HUB Inc.
      </div>
    </div>
  );
};

export default Footer;
