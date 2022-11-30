import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeader = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key":  process.env.REACT_APP_RAPIDAPI_KEY,
  "X-RapidAPI-Host":  process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";
const createRequest  = (url) => ({ url, headers: cryptoNewsApiHeader})



export const cryptoNewsApi = createApi({
    reducerPath: "crytoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi