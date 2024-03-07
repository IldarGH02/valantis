import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsIdsReducer from "./slices/productsIdsSlice";
import productsSlice from "./slices/productsSlice";

const rootReducer = combineReducers({
    productsIdsStore: productsIdsReducer,
    productsStore: productsSlice
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>