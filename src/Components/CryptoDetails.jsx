import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import {
  AiFillDollarCircle,
  AiOutlineThunderbolt,
  AiOutlineNumber,
  AiOutlineTrophy,
  AiOutlineFund,
  AiOutlineMoneyCollect,
  AiOutlineExclamationCircle,
  AiOutlineCheck,
  AiOutlineStop,
} from "react-icons/ai";
import { useParams } from "react-router-dom";
import millify from "millify";
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from "../Services/CryptoApi";
import Loader from "./Loader";
const CryptoDetails = () => {
  const {coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery(coinId, timePeriod);
  const cryptoDetails = data?.data?.coin;
  if (isFetching) return <Loader />;
  console.log(coinHistory);

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <AiFillDollarCircle size={30} />,
    },
    {
      title: "Rank",
      value: cryptoDetails?.rank,
      icon: <AiOutlineNumber size={30} />,
    },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: <AiOutlineThunderbolt size={30} />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <AiFillDollarCircle size={30} />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <AiOutlineTrophy size={30} />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <AiOutlineFund size={30} />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <AiOutlineMoneyCollect size={30} />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <AiOutlineCheck size={30} />
      ) : (
        <AiOutlineStop size={30} />
      ),
      icon: <AiOutlineExclamationCircle size={30} />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <AiOutlineExclamationCircle size={30} />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <AiOutlineExclamationCircle size={30} />,
    },
  ];

  return (
    <div className="w-screen py-[3.5rem]">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-3xl lg:text-5xl text-heroColor font-bold">
          {cryptoDetails.name} ({cryptoDetails.symbol}) Price
        </h2>
        <p className="text-xl md:text-2xl text-heroColor font-semibold px-3 md:px-0 py-6">
          {cryptoDetails.name} live price in US dollars. View value statistics,
          market cap and supply
        </p>
      </div>
      
      <div className="w-full md:flex items-center justify-around py-6 px-4 mt-5 md:py-4 bg-gray-300">
        <div className="py-6 px-2">
          <h2 className="text-center text-2xl md:text-3xl text-heroColor font-bold py-3">
            {cryptoDetails.name} Value Statistics
          </h2>
          <p className="text-center text-xl md:text-2xl text-heroColor font-semibold pb-6">
            An overview showing the stats of {cryptoDetails.name}
          </p>
          {stats.map(({ icon, title, value }) => (
            <div className="flex items-center justify-between">
              <div className="flex">
                <h2 className="">{icon}</h2>
                <h2 className="text-[18px] md:text-[22px] font-semibold pl-2">
                  {title}
                </h2>
              </div>
              <div className="text-[18px] md:text-[22px] font-bold py-2 ">
                {value}
              </div>
            </div>
          ))}
        </div>
        <div className="px-2">
          <h2 className="text-center text-2xl md:text-3xl text-heroColor font-bold py-3">
            {cryptoDetails.name} Other Statistics Info
          </h2>
          <p className="text-center text-xl md:text-2xl text-heroColor font-semibold pb-6">
            An overview showing the statistics of all cryptocurrencies
          </p>
          {genericStats.map(({ icon, title, value }) => (
            <div className="flex items-center justify-between">
              <div className="flex">
                <h2 className="">{icon}</h2>
                <h2 className="text-[18px] md:text-[22px] font-semibold pl-2">
                  {title}
                </h2>
              </div>
              <div className="text-[18px] md:text-[22px] font-bold py-2 ">
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:flex items-center justify-between gap-12 px-3 md:px-10">
        <div className="flex-[1.2]">
          <h2 className="py-3 text-heroColor text-2xl md:text-4xl font-bold">What is {cryptoDetails.name}</h2>
          <div className="py-2 text-2xl md:text-3xl font-semibold">{HTMLReactParser(cryptoDetails.description)}</div>
        </div>
        <div className="flex-[0.9]  bg-slate-50 py-5 px-2">
          <h2 className="pt-6 md:pt-0 text-heroColor text-2xl md:text-4xl font-bold">{cryptoDetails.name} Links</h2>
          {cryptoDetails.links.map((link) => (
            <div className="flex items-center hover:bg-white justify-between py-4 md:py-6 border-b-2 border-b-gray-800 border-b-shadow" key={link.name}>
              <h3 className="text-xl text-heroColor font-semibold">{link.type}</h3>
              <a href={link.url} rel="noreferrer" target="_blank" className="text-blue-500 font-bold pr-1 md:pr-2 text-xl">
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
