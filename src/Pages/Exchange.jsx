import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
import { RiWallet3Fill,  RiWalletFill } from "react-icons/ri";
import { IoMdSwap } from "react-icons/io";
import { BiLineChart } from "react-icons/bi";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { GoDatabase } from "react-icons/go";
import { BsGridFill, BsSnow3, BsHddStack } from "react-icons/bs";
import { motion } from "framer-motion"

const Exchange = () => { 
  const activeLink = "border-b-[3px] pb-[10px] transition duration-700 ease-in-out text-heroText rounded-lg border-b-white shadow  text-xl md:text-2xl";
  const normalLink = "text-2xl"
  return (
    <div className='w-full  pt-[8rem] bg-slate-100'>
      <div className="flex items-center justify-end px-6 py-6 md:px-10">
        <h2 className="flex items-center justify-center px-4 py-2 text-xl md:text-2xl text-heroText bg-heroColor rounded-xl"><RiWallet3Fill size={45} className='pr-3'/> Connect Wallet </h2>
      </div>
      <div className="w-[90%] m-auto flex flex-col md:flex-row items-center justify-between py-4 ">
        <div className="w-[80%] md:w-[35%] lg:w-[20%] bg-heroColor rounded-lg py-8 shadow-xl">
          <div className="flex items-center gap-6 py-3 pl-12 cursor-pointer text-secondaryColor hover:text-heroText">
            <IoMdSwap size={28} />
            <NavLink to="swap" className={({ isActive }) => isActive ? activeLink : normalLink}>Swap</NavLink>
          </div>
          <div className="flex items-center gap-4 py-3 pl-12 cursor-pointer text-secondaryColor hover:text-heroText">
            <BiLineChart size={28} />
            <NavLink to="trade" className={({ isActive }) => isActive ? activeLink : normalLink}>Trade</NavLink>
          </div>
          <div className="flex items-center gap-4 py-3 pl-12 cursor-pointer text-secondaryColor hover:text-heroText">
            <BsGridFill size={28} />
          <NavLink to="pool" className={({ isActive }) => isActive ? activeLink : normalLink}>Pool</NavLink>
          </div>
          <div className="flex items-center gap-4 py-3 pl-12 cursor-pointer text-secondaryColor hover:text-heroText">
            <BsSnow3 size={28} />
          <NavLink to="liquidity" className={({ isActive }) => isActive ? activeLink : normalLink}>Liquidity</NavLink>
          </div>
          <div className="flex items-center gap-4 py-3 pl-12 cursor-pointer text-secondaryColor hover:text-heroText">
            <GoDatabase size={28} />
          <NavLink to="farm" className={({ isActive }) => isActive ? activeLink : normalLink}>Farms</NavLink>
          </div>
          <div className="flex items-center gap-4 py-3 pl-12 cursor-pointer text-secondaryColor hover:text-heroText">
            <BsHddStack size={28} />
          <NavLink to="staking" className={({ isActive }) => isActive ? activeLink : normalLink}>Staking</NavLink>
          </div>
          <div className='w-[80%] m-auto py-4'>
            <hr className="border-2 border-secondaryColor" />
          </div>
          <div className="flex items-center gap-4 py-3 pl-12 cursor-pointer text-secondaryColor hover:text-heroText">
            <RiWalletFill size={28} />
            <NavLink to="asset" className={({ isActive }) => isActive ? activeLink : normalLink}>Asset</NavLink>
          </div>
          <div className="flex items-center gap-4 py-3 pl-12 cursor-pointer text-secondaryColor hover:text-heroText">
            <FiSettings size={28} />
            <NavLink to="setting" className={({ isActive }) => isActive ? activeLink : normalLink}>Setting</NavLink>
          </div>
          <div className="flex items-center gap-4 py-3 pl-12 cursor-pointer text-secondaryColor hover:text-heroText">
            <FiLogOut size={28} />
            <NavLink to="/" >Log out</NavLink>
          </div>
        </div>

        <motion.div
         whileInView={{ scale: [0, 1] }}
         transition={{ duration: 0.6, ease: "easeInOut" }} 
         className="w-full md:w-[78%] mt-10 md:mt-0"
        >
          <Outlet/>
        </motion.div> 
      </div>
    </div>
  )
}

export default Exchange