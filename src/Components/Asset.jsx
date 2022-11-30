import React, { useState } from "react";
import { Chart, Tooltip, Title, ArcElement, Legend, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
Chart.register(Tooltip, Title, ArcElement, Legend, LineElement, CategoryScale, LinearScale, PointElement);
const Asset = () => {
  const usdt =
    "https://image.shutterstock.com/image-vector/tether-coin-usdt-cryptocurrency-logo-260nw-1156035694.jpg";
  const eth =
    "https://rlv.zcache.com/ethereum_logo_only_classic_round_sticker-r06b759bfaa414c328cf1beae2688d0bd_0ugmp_8byvr_704.webp";
  const op = "https://s2.coinmarketcap.com/static/img/coins/200x200/11840.png";
  const xrp =
    "https://www.creativefabrica.com/wp-content/uploads/2021/06/15/Cryptocurrency-logo-Graphics-13437867-1-580x435.jpg";
  const data = {
    datasets: [
      {
        data: [41.38, 42.1, 131.69, 200],
        backgroundColor: ["red", "blue", "#F7931A", "#C2EBDD"],
      },
    ],
  };
  const [lineData, setLineData] = useState({
    labels: ["20", "40", "60", "80", "100", "120", "140", "160", "180", "200"],
    datasets:[
      {
        label: "Portfolio",
        data:[20, 30, 41.38, 42.10, 131.69, 200.00],
        backgroundColor: "white",
        borderColor: "cyan",
        tension: 0.5,
        
      },
      
    ]
  })
  return (
    <div className="bg-heroColor rounded-xl md:flex items-center px-4 py-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="w-full lg:w-[40%] border-4 border-heroText px-3 py-3 rounded-2xl">
        <h2 className="text-center text-lg md:text-xl text-heroText py-3">
          My Portfolio
        </h2>
        <table className="w-full">
          <thead className="border-b-2 border-b-heroText">
            <tr>
              <th className="text-base md:text-[19px] text-heroText text-start py-2">
                Coins
              </th>
              <th className="text-base md:text-[19px] text-heroText text-start py-2">
                Balance
              </th>
              <th className="text-base md:text-[19px] text-heroText text-start py-2">
                ATH
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-base md:text-xl text-heroText text-start py-2 flex items-center gap-3">
                <img
                  src={usdt}
                  alt="USDT"
                  className="w-[30px] md:w-[35px] rounded-full"
                />
                USDT
              </td>
              <td className="text-base md:text-xl text-heroText text-start py-2">
                200
              </td>
              <td className="text-base md:text-xl text-heroText text-start py-2">
                $200.00
              </td>
            </tr>
            <tr>
              <td className="text-base md:text-xl text-heroText text-start py-2 flex items-center gap-3">
                <img
                  src={eth}
                  alt="ETH"
                  className="w-[30px] md:w-[35px] rounded-full"
                />
                ETH
              </td>
              <td className="text-base md:text-xl text-heroText text-start py-2">
                0.1
              </td>
              <td className="text-base md:text-xl text-heroText text-start py-2">
                $131.69
              </td>
            </tr>
            <tr>
              <td className="text-base md:text-xl text-heroText text-start py-2 flex items-center gap-3">
                <img
                  src={op}
                  alt="OP"
                  className="w-[30px] md:w-[35px] rounded-full"
                />
                OP
              </td>
              <td className="text-base md:text-xl text-heroText text-start py-2">
                50
              </td>
              <td className="text-base md:text-xl text-heroText text-start py-2">
                $42.10
              </td>
            </tr>
            <tr>
              <td className="text-base md:text-xl text-heroText text-start py-2 flex items-center gap-3">
                <img
                  src={xrp}
                  alt="XRP"
                  className="w-[30px] md:w-[35px] rounded-full"
                />
                XRP
              </td>
              <td className="text-base md:text-xl text-heroText text-start py-2">
                80
              </td>
              <td className="text-base md:text-xl text-heroText text-start py-2">
                $41.38
              </td>
            </tr>
          </tbody>
        </table>
        <h2 className="pt-12 pb-3 border-b-2 border-b-heroText text-heroText text-xl md:text-2xl">
          Total
        </h2>
        <h4 className="py-5 text-lg text-heroText ">
          Equivalent in USD = $415.17{" "}
        </h4>
        <div className="flex items-center gap-6">
          <div className="w-[40%] h-[40%]">
            <Doughnut data={data} />
          </div>
          <div className="">
            <div className="flex items-center gap-1">
              <div className="bg-heroText w-[16px] md:w-[18px] h-[16px] md:h-[18px] rounded-sm "></div>
              <h2 className="text-base md:text-lg text-heroText ">USDT 50%</h2>
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-primary w-[16px] md:w-[18px] h-[16px] md:h-[18px] rounded-sm "></div>
              <h2 className="text-base md:text-lg text-heroText ">ETH 25%</h2>
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-blue-700 w-[16px] md:w-[18px] h-[16px] md:h-[18px] rounded-sm "></div>
              <h2 className="text-base md:text-lg text-heroText ">OP 13%</h2>
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-red-600 w-[16px] md:w-[18px] h-[16px] md:h-[18px] rounded-sm "></div>
              <h2 className="text-base md:text-lg text-heroText ">XRP 12%</h2>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="py-6 md:py-0 w-full h-full">
        <Line data={lineData} />
      </div>
      <div className="pt-6">
        <h4 className="text-base md:text-lg border-b-2 py-2 text-white font-semibold">Recent Transaction</h4>
        <div className="overflow-auto rounded-lg">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="text-[10px] md:text-lg text-heroText tracking-wide px-1 text-start py-2">0xb234fk768...</td>
              <td className="text-[10px] md:text-lg text-heroText tracking-wide px-1 text-start py-2">Received 10 USD</td>
              <td className="text-[10px] md:text-lg text-heroText tracking-wide px-1 text-start py-2">From</td>
              <td className="text-[10px] md:text-lg text-heroText tracking-wide px-1 text-start py-2">0xcedr455...</td>
            </tr>
            <tr>
              <td className="text-[10px] md:text-lg text-heroText tracking-wide px-1 text-start py-2">0xb234fk768...</td>
              <td className="text-[10px] md:text-lg text-heroText tracking-wide px-1 text-start py-2">Transfered 10 USD</td>
              <td className="text-[10px] md:text-lg text-heroText tracking-wide px-1 text-start py-2">From</td>
              <td className="text-[10px] md:text-lg text-heroText tracking-wide px-1 text-start py-2">0xcedr455...</td>
            </tr>
            <tr>
              <td className="text-[10px] md:text-lg text-heroText tracking-wide px-1 text-start py-2">0xb234fk768...</td>
              <td className="text-[10px] md:text-lg text-heroText tracking-wide px-1 text-start py-2">Received 30 OP</td>
              <td className="text-[10px] md:text-lg text-heroText tracking-wide px-1 text-start py-2">From</td>
              <td className="text-[10px] md:text-lg text-heroText tracking-wide px-1 text-start py-2">0xcedr455...</td>
            </tr>
            <tr>
              <td className="text-[10px] md:text-lg text-heroText tracking-wide px-1 text-start py-2">0xb234fk768...</td>
              <td className="text-[10px] md:text-lg text-heroText tracking-wide px-1 text-start py-2">Received 35 XRP</td>
              <td className="text-[10px] md:text-lg text-heroText tracking-wide px-1 text-start py-2">From</td>
              <td className="text-[10px] md:text-lg text-heroText tracking-wide px-1 text-start py-2">0xcedr455...</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Asset;
