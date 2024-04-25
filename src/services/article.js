import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// NOT currently woring for rapidapi.com passed key in directlyinstead
//const rapidApiKey = import.meta.env.VITE_MY_API_KEY

// FOR the deployment of the app
// const rapidApiKey = process.env.VITE_MY_API_KEY

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '82e0dce41emsh34e0d22e81aed3dp1cfebcjsndd8fc680f66b'); //rapidApiKey
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
})

export const {useLazyGetSummaryQuery} = articleApi;