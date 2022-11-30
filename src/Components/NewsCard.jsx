import React from "react";
import moment from "moment";
const demoImage =
  "https://boxmining.com/wp-content/uploads/2022/07/Boxmining-top-crypto-news-scaled.jpg";
const NewsCard = ({ news }) => {
  return (
    <div className=" rounded-lg shadow-lg min-h-[100px]">
      <a href={news.url} target="_blank" rel="noreferrer">
        <img
          src={news?.image?.thumbnail?.contentUrl || demoImage}
          alt="news"
          className="w-full h-[25vh] shadow-lg object-cover rounded-t-lg "
        />
        <div className="w-full bg-heroText">
          <div className="pt-2 px-4">
            <h3 className="text-[20px] md:text-[23px] lg:text-[25px] font-bold">{news.name}</h3>
          </div>
          <p className="tex-base md:text-lg font-semibold font-italic py-2 px-4 text-heroColor">
            {news.description > 50
              ? `${news.description.substring(0, 50)}...`
              : news.description}
          </p>
          <div className="flex items-center justify-between py-2 px-2">
            <div className="flex items-center justify-between gap-2 py-2">
              <img
                src={
                  news.provider[0]?.image?.thumbnail?.contentUrl || demoImage
                }
                alt="news"
                className="min-w-[45px] max-h-[40px] px-2 py-2 rounded-full bg-white shadow-lg"
              />
              <p className="text-base md:text-lg font-semibold text-heroColor">
                {news.provider[0]?.name}
              </p>
            </div>
            <p className="text-base font-semibold text-heroColor">
              {moment(news.datePublished).startOf("ss").fromNow()}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default NewsCard;
