import { createSlice } from "@reduxjs/toolkit/";

const initialState = {
    cartState: [],
    quantity: 0
}

const cartState = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AddCart: (state, action) => {
            state.cartState = action.payload
        }
    }
})

export const { AddCart } = cartState.actions;
export default cartState.reducer;