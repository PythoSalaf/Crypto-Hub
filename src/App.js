import React from "react"
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar, CryptoDetails, Trade, Swap, Asset, Liquidity, Farm, Staking, Setting, Pool} from "./Components";
import { Home, Exchange, News, Cryptos } from "./Pages";

function App() {
  return (
    <div className="w-screen">
      <div className="">
        <Navbar />
      </div>
      
      <div className="">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cryptos" element={<Cryptos />} />
          <Route path="/exchange" element={<Exchange />} >
            <Route index element={<Swap />} />
            <Route path="swap" element={<Swap />}/>
            <Route path="trade" element={<Trade />}/>
            <Route path="pool" element={<Pool />}/>
            <Route path="liquidity" element={<Liquidity />}/>
            <Route path="farm" element={<Farm />}/>
            <Route path="staking" element={<Staking />}/>
            <Route path="asset" element={<Asset />}/>
            <Route path="setting" element={<Setting />}/>
          </Route>
          <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>

      <div className="pt-[3rem]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
