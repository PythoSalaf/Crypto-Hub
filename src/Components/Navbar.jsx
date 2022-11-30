import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { VscMenu, VscChromeClose } from "react-icons/vsc"

const Navbar = () => {
  
  const activeLink = "bg-white w-full shadow centered rounded-xl px-3 py-2 text-black";
  const normalLink = ""
  const [mobile, setMobile] = useState(false);
  const handleClick = () => setMobile(!mobile);
  const handleClose = () => setMobile(!mobile);
  return (
    <div className="sticky top-0 centered z-50 w-screen h-[105px] py-2 md:py-4 md:px-4 bg-heroColor drop-shadow-lg">
      {/* Desktop && Tablets */}
      <div className="flex w-full h-full items-center justify-between"> 
        <div className="w-full flex items-center ml-[1.5rem] flex-1 ">
          <h1 className="text-heroText text-3xl md:text-4xl font-bold uppercase">
            B-<span className="text-3xl md:text-4xl text-secondaryColor font-bold">hub</span>
          </h1>
        </div>

        <div className="flex-1 text-heroText">
        <ul className="hidden md:flex items-center gap-5 lg:gap-7 ">
          <li className="text-[26px]">
            <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>Home</NavLink>
          </li>
          <li className="text-[26px]">
            <NavLink to="/cryptos" className={({ isActive }) => isActive ? activeLink : normalLink}>Cryptos</NavLink>
          </li>
          <li className="text-[26px]">
            <NavLink to="/exchange" className={({ isActive }) => isActive ? activeLink : normalLink}>Exchange</NavLink>
          </li>
          <li className="text-[26px]">
            <NavLink to="/news" className={({ isActive }) => isActive ? activeLink : normalLink}>News</NavLink>
          </li>
        </ul>
        </div>

        <div className="hidden md:flex items-center flex-[0.7] text-heroText">
          <h3 className="px-5 text-[17px] cursor-pointer">Sing in</h3>
          <button className="bg-secondaryColor hover:bg-white hover:text-black cursor-pointer text-[19px] px-4 py-3 rounded-lg">
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full">
        <div className="absolute top-9 right-4 text-white" onClick={handleClick}>
          {!mobile ? <VscMenu size={32} /> : <VscChromeClose size={32} />}
        </div>
        <ul
          className={
            mobile
              ? "flex flex-col items-center absolute bg-secondaryColor w-full h-screen py-[6rem] gap-5"
              : "hidden"
          }
        >
          <li
            className="text-[29px]  py-5 text-white font-semibold"
            onClick={handleClose}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="text-[29px]  py-5 text-white font-semibold"
            onClick={handleClose}
          >
            <Link to="/cryptos">Cryptos</Link>
          </li>
          <li
            className="text-[29px]  py-5 text-white font-semibold"
            onClick={handleClose}
          >
            <Link to="/exchange">Exchange</Link>
          </li>
          <li
            className="text-[29px]  py-5 text-white font-semibold"
            onClick={handleClose}
          >
            <Link to="/news">News</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
