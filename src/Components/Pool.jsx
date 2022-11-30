import React from "react";

const Pool = () => {
  const poolData = [
    {
      id: 1,
      icon1:
        "https://image.shutterstock.com/image-vector/tether-coin-usdt-cryptocurrency-logo-260nw-1156035694.jpg",
      icon2: "https://rlv.zcache.com/ethereum_logo_only_classic_round_sticker-r06b759bfaa414c328cf1beae2688d0bd_0ugmp_8byvr_704.webp",
      type: "Liquidity",
      price: "345.67m",
      describ: "APR",
      amount: "34.90",
      symbol: "USDT-ETH"
    },
    {
      id: 2,
      icon1: "https://s2.coinmarketcap.com/static/img/coins/200x200/11840.png",
      icon2: "https://rlv.zcache.com/ethereum_logo_only_classic_round_sticker-r06b759bfaa414c328cf1beae2688d0bd_0ugmp_8byvr_704.webp",
      type: "Liquidity",
      price: "224.8m",
      describ: "APR",
      amount: "76.89",
      symbol: "OP-ETH"
    },
    {
      id: 3,
      icon1:
        "https://image.shutterstock.com/image-vector/tether-coin-usdt-cryptocurrency-logo-260nw-1156035694.jpg",
      icon2:
        "https://cdn.iconscout.com/icon/free/png-256/usdc-5382336-4498208.png",
      type: "Liquidity",
      price: "258.3m",
      describ: "APR",
      amount: "99.90",
      symbol: "USDT-USDC"
    },
    {
      id: 4,
      icon1:
        "https://image.shutterstock.com/image-vector/tether-coin-usdt-cryptocurrency-logo-260nw-1156035694.jpg",
      icon2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTjzOfgfXjkUisGXhN1mkh7MpU67GLf-5Bw&usqp=CAU",
      type: "Liquidity",
      price: "678.1m",
      describ: "APR",
      amount: "21.2",
      symbol: "USDT-BNB"
    },
    {
      id: 5,
      icon1:
        "https://cdn.iconscout.com/icon/free/png-256/usdc-5382336-4498208.png",
      icon2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTjzOfgfXjkUisGXhN1mkh7MpU67GLf-5Bw&usqp=CAU",
      type: "Liquidity",
      price: "50.67m",
      describ: "APR",
      amount: "150",
      symbol: "USDC-BNB"
    },
  ];
  return (
    <div className="">
      <h2 className="py-4 text-center text-2xl md:text-3xl font-bold text-heroColor">Pool</h2>
      {poolData.map((data) => (
        <div
          className="bg-heroColor rounded-tr-3xl rounded-bl-3xl my-4"
          key={data.id}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-10 px-4 py-3">
            <div className="">
              <div className="flex items-center justify-center gap-2 md:gap-4">
                <img src={data.icon1} alt="icons" className="w-[38px] bg-white rounded-full" />
                <img src={data.icon2} alt="icons" className="w-[38px] bg-white rounded-full" />
              </div>
              <p className="pt-3 text-lg text-heroText">{data.symbol}</p>
            </div>
            <div className="">
              <p className="text-xl text-white">{data.type}</p>
              <p className="py-2 text-xl text-heroText">${data.price}</p>
            </div>
            <div className="">
              <p className="text-xl text-white">{data.describ}</p>
              <p className="py-2 text-xl text-heroText">{data.amount}%</p>
            </div>
            <div className="flex items-center gap-6">
              <h2 className="text-3xl text-heroText border-2 border-btnColor py-1 px-3 md:px-5 rounded-tr-[1.5rem] rounded-bl-[1.5rem] md:rounded-tr-[1.8rem] md:rounded-bl-[1.8rem]">
                +
              </h2>
              <h2 className="text-3xl text-heroText border-2 border-btnColor py-1 px-4 md:px-5 rounded-tr-[1.5rem] rounded-bl-[1.5rem] md:rounded-tr-[1.8rem] md:rounded-bl-[1.8rem]">
                -
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pool;
