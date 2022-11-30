import React, { useState } from "react";
import { useGetCryptoNewsQuery } from "../Services/CryptoNewsApi";
import NewsCard from "../Components/NewsCard";
import Loader from "../Components/Loader";

const News = ({ simplified }) => {
  const [newsCat, setNewsCat] = useState("Cryptocurency");
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCat,
    count: simplified ? 6 : 15,
  });
  if (!cryptoNews?.value) return <Loader />;
  const NewCard = cryptoNews.value.map((news, i) => (
    <NewsCard key={news.i} news={news} />
  ));
  return (
    <div>
      {!simplified && (
        <div className="w-screen pt-[1rem] ">
          <div className="py-5 px-8">
            <h1 className="text-3xl py-3 md:text-4xl text-black font-bold">
              B-HUB Blog
            </h1>
            <p className="text-xl text-heroColor font-semibold">
              Stay up to date with the latest stories and commentary brought to
              you by B-HUB
            </p>
          </div>
          
        </div>
      )}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-b-lg px-8 py-6">
        {NewCard}
      </div>
    </div>
  );
};

export default News;
