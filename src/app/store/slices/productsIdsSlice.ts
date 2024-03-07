import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PRODUCTS, IDS } from "../../../features/constants";
import { productsApiIds, productsApiItems } from "../../../share/http/productsApi";
import { IProduct } from "../../types";

interface IInitialState {
    ids: string[]
    isLoading: boolean
    isErrorIds: string | null | undefined
}

const initialState: IInitialState = {
    ids: [],
    isLoading: false,
    isErrorIds: null
}

export const fetchingProductsIds = createAsyncThunk<string[], undefined, {rejectValue: string}>(
   IDS,
   async function (_, {rejectWithValue}) {
        try {
            const response = await productsApiIds();
            return response.data.result
        } catch (e) {
            return rejectWithValue('Упс, сервер не отвечает, постучитесь ещё раз...');
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
