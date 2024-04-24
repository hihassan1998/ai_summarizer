import { configureStore } from 'reduxjs/toolkit'
import { articleApi } from './article'

// calling a function () to pass in the object {}
export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(artcleApi.middleware)
})