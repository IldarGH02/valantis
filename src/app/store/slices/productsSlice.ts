import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../../features/constants";
import { productsApiItems } from "../../../share/http/productsApi";
import { IProduct } from "../../types";

interface IInitialState {
    products: IProduct[]
    isLoading: boolean
    isErrorProducts: unknown
}

const initialState: IInitialState = {
    products: [],
    isLoading: false,
    isErrorProducts: null
}

export const fetchingProducts = createAsyncThunk(
    PRODUCTS,
    async function (ids: string[], {rejectWithValue}) {
        try {
            const respons = await productsApiItems(ids);
            return respons.data.result
        } catch (e) {
            return rejectWithValue('No user found');
        }
    } 
 )

const productsSlice = createSlice({
    name: PRODUCTS,
    initialState: initialState,
    reducers: {
        
    },
    extraReducers(builder) {
        builder.addCase(fetchingProducts.pending, (state) => {
            state.isLoading = true;
            state.isErrorProducts = null;
        })
        builder.addCase(fetchingProducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.isLoading = false;
        })
        builder.addCase(fetchingProducts.rejected, (state, action) => {
            state.isErrorProducts = action.payload;
        })
    },
})

export default productsSlice.reducer
