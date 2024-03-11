import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../../features/constants";
import { productsApiItems } from "../../../share/http/productsApi";
import { IProduct } from "../../types";

export interface IInitialState {
    products: IProduct[]
    searchBrand: string
    searchName: string
    searchPrice: string
    isLoading: boolean
    isErrorProducts: string | null | undefined
}

const initialState: IInitialState = {
    products: [],
    searchBrand: '',
    searchName: '',
    searchPrice: '',
    isLoading: false,
    isErrorProducts: null
}

export const fetchingProducts = createAsyncThunk<IProduct[], any, {rejectValue: string}>(
    PRODUCTS,
    async function (ids: string[], {rejectWithValue}) {
        try {
            const response = await productsApiItems(ids);
            return response.data.result
        } catch (e) {
            console.log(e)
            return rejectWithValue('Ммм, скорее всего сервер на перекуре');
        }
    } 
 )

const productsSlice = createSlice({
    name: PRODUCTS,
    initialState: initialState,
    reducers: {
        productsSearchBrand: (state, action) => {
            state.searchBrand = action.payload
        },

        productsSearchName: (state, action) => {
            state.searchName = action.payload
        },

        productsSearchPrice: (state, action) => {
            state.searchPrice = action.payload
        }
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

export const { productsSearchBrand, productsSearchName, productsSearchPrice } = productsSlice.actions;
export default productsSlice.reducer;
