import React, { useState, useEffect } from "react";
import { useGetCryptosQuery } from "../Services/CryptoApi";
import { BiSearch } from "react-icons/bi"
import CryptosCard from "../Components/CryptosCard";
import Loader from "../Components/Loader";
const Cryptos = ({ simplified }) => {
  const count = simplified ? 12 : 100;
  const [search, setSearch] = useState("");
  const { data: cryptoLists, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const Data = cryptos?.map((crypto) => (
    <CryptosCard key={crypto.uuid} {...crypto
    } />
  ));
  useEffect(() => {
    const FilteredData = cryptoLists?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
    setCryptos(FilteredData);
  }, [cryptoLists, search]);

  if (isFetching) return <Loader />;
  
 
  return (
    <div>
      {!simplified && (
        <div className="w-full pt-[3.5rem] pb-6 bg-heroText">
          <div className="w-full">
            <h1 className="text-3xl md:text-5xl pb-6 font-bold text-center">
              Welcome to B-HUB
            </h1>
            <div className="w-[90%] m-auto pt-10 pb-4 grid grid-cols-1 md:grid-cols-3  gap-4 ">
            <p className="text-xl md:text-2xl font-semibold text-heroColor border-[1px] border-heroColor py-6 px-4 rounded-xl">
              At B-HUB we provide you with all the list of  cryptocurrencies
              in the world
            </p>
            <p className="text-xl md:text-2xl font-semibold text-heroColor border-[1px] border-heroColor py-6 px-4 rounded-xl">At B-HUB we provide for you quick introduction to all coins</p>
            <p className="text-xl md:text-2xl font-semibold text-heroColor border-[1px] border-heroColor py-6 px-4 rounded-xl">To learn more about each coin, just click on each card and see all what you need to know about each coin</p>
            </div>
          </div>
          <div className="flex items-center justify-between px-5 lg:px-14 pt-[3rem] relative">
            <BiSearch className="absolute ml-2 text-gray-500 shadow" size={30} />
            <input
              className="bg-white rounded-lg pr-4 pl-12 py-2 md:py-4 text-xl shadow-xl border-none outline-none ring-2"
              placeholder="Search For Your Cryptos"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      )}

      <div className="w-[95%] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        {Data}
      </div>
    </div>
  );
};

export default Cryptos;
