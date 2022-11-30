import React, { useState } from "react";
import { motion } from "framer-motion";
import { useGetCryptosQuery } from "../Services/CryptoApi";
import { millify } from "millify";
import { Images } from "../Constant";
import { Link } from "react-router-dom";
import { Cryptos, News } from "../Pages";
import Loader from "../Components/Loader";

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const [email, setEmail] = useState();
  const globalStat = data?.data?.stats;
  if (isFetching) return <Loader />;
  return (
    <div className="w-screen flex flex-col items-center justify-center ">
      <div className="w-screen py-[3.2rem] px-0 bg-heroColor bg-cover m-0">
        <div className="w-[95%] m-auto flex flex-col md:flex-row items-center justify-between gap-4 py-6 md:py-10">
          <div className="w-full px-2 flex-1 flex flex-col justify-between items-center">
            <h1 className="w-full text-heroText text-[34px] leading-[50px] md:text-[58px] md:leading-[75px] font-bold">
              Trade and Invest on
              <span className="text-secondaryColor"> Crypto</span> Using Our
              Platform
            </h1>
            <p className="w-full text-heroText text-xl md:text-2xl py-6">
              B-HUB is the easiest place to buy and sell cryptocurrency. Sign up
              and get started today.
            </p>
            <div className="w-full flex flex-col md:flex-row items-center gap-6 md:gap-4 py-5 ">
              <input
                type="email"
                value={email}
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                className="w-[80%] md:w-[50%] flex-[2] bg-transparent border-2 border-secondaryColor text-heroText text-xl outline-none px-3 py-3 rounded-lg"
              />
              <button
                className="w-[40%] flex-1 bg-secondaryColor hover:bg-white hover:text-black py-3 rounded-lg text-heroText text-xl"
                type="button"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="w-full flex-1 overflow-hidden pt-20 md:pt-0">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full "
            >
              <img
                src={Images.Herob}
                alt="HeroImage"
                className="w-[95%] flex justify-center items-center flex-wrap "
              />
            </motion.div>
          </div>
        </div>
      </div>

      <section className="w-full py-[2rem] ">
        <div className="">
          <h2 className="text-3xl text-heroColor font-bold py-6 md:text-4xl text-center">
            World Crypto Stats
          </h2>
          <div className="w-[90%] m-auto grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-7 py-4">
            <div className="w-[100%] bg-secondaryColor px-8 py-5 flex flex-col items-center justify-center rounded-lg shadow-lg hover:scale-[0.9]">
              <h2 className="text-xl text-heroColor font-semibold md:text-2xl py-2">
                Total Cryptocurrencies
              </h2>
              <p className="text-2xl text-heroColor md:text-4xl py-3 font-semibold">
                {millify(globalStat.total)}
              </p>
            </div>
            <div className="w-[100%] bg-secondaryColor  px-8 py-5 flex flex-col items-center justify-center rounded-lg shadow-lg hover:scale-[0.9]">
              <h2 className="text-xl text-heroColor font-semibold md:text-2xl py-2">
                Total Exchange
              </h2>
              <p className="text-2xl text-heroColor md:text-4xl py-3 font-semibold">
                {millify(globalStat.totalExchanges)}
              </p>
            </div>
            <div className="w-[100%] bg-secondaryColor  px-8 py-5 flex flex-col items-center justify-center rounded-lg shadow-lg hover:scale-[0.9]">
              <h2 className="text-xl text-heroColor font-semibold md:text-2xl py-2">
                Total Market Cap
              </h2>
              <p className="text-2xl text-heroColor md:text-4xl py-3 font-semibold">
                {millify(globalStat.totalMarketCap)}
              </p>
            </div>
            <div className="w-[100%] bg-secondaryColor  px-8 py-5 flex flex-col items-center justify-center rounded-lg shadow-lg hover:scale-[0.9]">
              <h2 className="text-xl text-heroColor font-semibold md:text- py-2">
                Total 24h Volume
              </h2>
              <p className="text-2xl text-heroColor md:text-4xl py-3 font-semibold">
                {millify(globalStat.total24hVolume)}
              </p>
            </div>
            <div className="w-[100%] bg-secondaryColor  px-8 py-5 flex flex-col items-center justify-center rounded-lg shadow-lg hover:scale-[0.9]">
              <h2 className="text-xl text-heroColor font-semibold md:text-2xl py-2">
                Total Market
              </h2>
              <p className="text-2xl text-heroColor md:text-4xl py-3 font-semibold">
                {millify(globalStat.totalMarkets)}
              </p>
            </div>
            <div className="w-[100%] bg-secondaryColor  px-8 py-5 flex flex-col items-center justify-center rounded-lg shadow-lg hover:scale-[0.9]">
              <h2 className="text-xl text-heroColor font-semibold md:text-2xl py-2">
                Total New Token
              </h2>
              <p className="text-2xl text-heroColor md:text-4xl py-3 font-semibold">
                {millify(5000)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full py-5 md:py-10 ">
        <div className="px-3 md:px-8">
          <h2 className="text-[28px] leading-[40px] py-14 md:text-4xl text-center font-bold text-btnColor ">
            Top 12 Crypto Currencies In The World
          </h2>
          
        </div>
        <Cryptos simplified />
        <motion.h3  whileTap={{ scale: 0.6 }} className="w-full flex justify-center items-center text-base md:text-xl text-moreColor">
            <Link to="/cryptos" className="bg-btnColor hover:bg-white hover:text-black text-heroText rounded-lg py-4 px-8">View more markets</Link>
          </motion.h3>
      </div>

      <div className="w-full pt-8 ">
        <div className="pb-10 px-3 md:px-8">
          <h2 className="text-2xl md:text-3xl text-center font-bold  ">
            Latest Crypto News
          </h2>
        </div>
        <News simplified />
        <motion.h3  whileTap={{ scale: 0.6 }} className="w-full py-6 flex items-center justify-center text-base md:text-xl">
            <Link to="/news" className="bg-btnColor hover:bg-heroText hover:text-black   text-heroText rounded-lg py-4 px-8">Read More</Link>
          </motion.h3>
      </div>
    </div>
  );
};

export default Home;
