import React from "react";
import { millify } from "millify";
import { Link } from "react-router-dom";

const CryptosCard = (props) => {
  return (
    <div className="bg-btnColor text-heroText rounded-lg shadow-lg py-4 px-4 hover:scale-[0.9]">
      <Link to={`/crypto/${props.uuid}`} >
        <div className="flex items-center justify-between py-2">
          <h2 className="text-2xl md:text-3xl font-bold ">{`${props.rank}. ${props.name}`}</h2>
          <img src={props.iconUrl} alt="icon" className="w-[54px]" />
        </div>
        <p className="text-[20px] font-semibold py-1 md:py-2 text-heroText">
          Price: ${millify(props.price)}
        </p>
        <p className="text-[20px] font-semibold py-1 md:py-2 text-heroText">
          MarketCap: {millify(props.marketCap)}
        </p>
        <p className="text-[20px] font-semibold py-1 md:py-2 text-heroText">
          Daily Change: {millify(props.change)}%
        </p>
      </Link>
    </div>
  );
};

export default CryptosCard;


