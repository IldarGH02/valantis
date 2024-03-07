import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PRODUCTS, IDS } from "../../../features/constants";
import { productsApiIds, productsApiItems } from "../../../share/http/productsApi";
import { IProduct } from "../../types";

interface IInitialState {
    ids: string[]
    isLoading: boolean
    isErrorIds: unknown
}

const initialState: IInitialState = {
    ids: [],
    isLoading: false,
    isErrorIds: null
}

export const fetchingProductsIds = createAsyncThunk(
   IDS,
   async function (_, {rejectWithValue}) {
        try {
            const respons = await productsApiIds();
            return respons.data.result
        } catch (e) {
            console.log(e)
            return rejectWithValue('No user found');
        }
        
   } 
)

const productsIdsSlice = createSlice({
    name: IDS,
    initialState: initialState,
    reducers: {
        
    },
    extraReducers(builder) {
        builder.addCase(fetchingProductsIds.pending, (state) => {
            state.isLoading = true;
            state.isErrorIds = null;
        })
        builder.addCase(fetchingProductsIds.fulfilled, (state, action) => {
            state.ids = action.payload;
            state.isLoading = false;
        })
        builder.addCase(fetchingProductsIds.rejected, (state, action) => {
            state.isErrorIds = action.payload;
        })
    },
})

export default productsIdsSlice.reducer
