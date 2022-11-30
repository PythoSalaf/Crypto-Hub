import React from "react";

const Staking = () => {
  const usdt = "https://image.shutterstock.com/image-vector/tether-coin-usdt-cryptocurrency-logo-260nw-1156035694.jpg"
  const usdc = "https://cdn.iconscout.com/icon/free/png-256/usdc-5382336-4498208.png"
  const eth = "https://rlv.zcache.com/ethereum_logo_only_classic_round_sticker-r06b759bfaa414c328cf1beae2688d0bd_0ugmp_8byvr_704.webp"
  const op = "https://s2.coinmarketcap.com/static/img/coins/200x200/11840.png"
  const xrp = "https://www.creativefabrica.com/wp-content/uploads/2021/06/15/Cryptocurrency-logo-Graphics-13437867-1-580x435.jpg"
  const aave = "https://cryptologos.cc/logos/aave-aave-logo.png"
  return (
    <div className="bg-heroText rounded-lg py-8">
      <h2 className="text-center font-semibold py-6 text-2xl md:text-3xl text-heroColor">Stake</h2>
      <div className="overflow-auto rounded-lg shadow">
      <table className="w-[95%] m-auto">
        <thead className="bg-heroColor py-4 px-2 rounded-tr-3xl rounded-bl-3xl">
          <tr>
            <th className="text-white text-xl font-semibold tracking-wide text-center py-3">Coin</th>
            <th className="text-white text-xl font-semibold tracking-wide text-center py-3">Apr %</th>
            <th className="text-white text-xl font-semibold tracking-wide text-center py-3">Amount Staked</th>
            <th className="text-white text-xl font-semibold tracking-wide text-center py-3">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-secondaryColor">
          <tr>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl text-center text-heroColor whitespace-nowrap">
              <div className="flex pb-2 items-center justify-center"><img src={eth} alt="Eth" className="w-[35px] centered rounded-full" /></div>
              ETH
            </td>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl text-center text-heroColor whitespace-nowrap">3</td>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl text-center text-heroColor whitespace-nowrap">30</td>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl text-center text-heroColor whitespace-nowrap">Stake</td>
          </tr>
          <tr>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl text-center text-heroColor whitespace-nowrap">
              <div className="flex pb-2 items-center justify-center"><img src={op} alt="OP" className="w-[35px] centered rounded-full" /></div>
              OP
            </td>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl text-center text-heroColor whitespace-nowrap">3</td>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl text-center text-heroColor whitespace-nowrap">30</td>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl text-center text-heroColor whitespace-nowrap">Stake</td>
          </tr>
          <tr>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl text-center text-heroColor whitespace-nowrap">
              <div className="flex pb-2 items-center justify-center"><img src={aave} alt="AAVE" className="w-[35px] centered rounded-full" /></div>
              AAVE
            </td>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl text-center text-heroColor whitespace-nowrap">3</td>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl text-center text-heroColor whitespace-nowrap">30</td>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl text-center text-heroColor whitespace-nowrap">Stake</td>
          </tr>
          <tr>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl text-center text-heroColor whitespace-nowrap">
              <div className="flex pb-2 items-center justify-center"><img src={usdt} alt="USDT" className="w-[35px] centered rounded-full" /></div>
              USDT
            </td>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl text-center text-heroColor whitespace-nowrap">3</td>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl text-center text-heroColor whitespace-nowrap">30</td>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl text-center text-heroColor whitespace-nowrap">Stake</td>
          </tr>
          <tr>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl text-center text-heroColor whitespace-nowrap">
              <div className="flex pb-2 items-center justify-center"><img src={usdc} alt="USDC" className="w-[35px] centered rounded-full" /></div>
              USDC
            </td>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl text-center text-heroColor whitespace-nowrap">3</td>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl text-center text-heroColor whitespace-nowrap">30</td>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl text-center text-heroColor whitespace-nowrap">Stake</td>
          </tr>
          <tr>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl text-center text-heroColor whitespace-nowrap">
              <div className="flex pb-2 items-center justify-center"><img src={xrp} alt="XRP" className="w-[35px] centered rounded-full" /></div>
              XRP
            </td>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl text-center text-heroColor whitespace-nowrap">3</td>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl text-center text-heroColor whitespace-nowrap">30</td>
            <td className="py-4 px-12 font-semibold text-lg md:text-xl  text-center text-heroColor whitespace-nowrap">Stake</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Staking;
