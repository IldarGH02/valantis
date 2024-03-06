import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";

const rootReducer = combineReducers({
    productsStore: productsReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>