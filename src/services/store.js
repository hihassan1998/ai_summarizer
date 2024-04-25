import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";


// calling a function () to pass in the object {} /GOLBAL STATE
export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})