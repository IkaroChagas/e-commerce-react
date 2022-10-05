import { createSlice } from "@reduxjs/toolkit/";
import type { RootState } from "../store";

export interface Product {
    id: string;
}

const initialState: Product[] = []

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const { addProduct } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.product;

export default productsSlice.reducer;