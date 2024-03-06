import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PRODUCTS, IDS } from "../../../features/constants";
import { productsApiIds, productsApiItems } from "../../../share/http/productsApi";
import { IProduct } from "../../types";

interface IInitialState {
    products: IProduct[]
    ids: string[]
    isLoading: boolean
    error: null
}

const initialState: IInitialState = {
    products: [],
    ids: [],
    isLoading: false,
    error: null
}

export const fetchingProductsIds = createAsyncThunk(
   IDS,
   async function () {
        const respons = await productsApiIds();
        return respons.data.result
   } 
)

export const fetchingProducts = createAsyncThunk(
    PRODUCTS,
    async function (ids: string[]) {
         const respons = await productsApiItems(ids);
         return respons.data.result
    } 
 )

const productsSlice = createSlice({
    name: PRODUCTS,
    initialState: initialState,
    reducers: {
        
    },
    extraReducers(builder) {
        builder.addCase(fetchingProductsIds.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(fetchingProductsIds.fulfilled, (state, action) => {
            state.ids = action.payload;
            state.isLoading = false;
        })

        builder.addCase(fetchingProducts.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(fetchingProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        })
    },
})

export default productsSlice.reducer
