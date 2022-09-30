import { createSlice, PayloadAction } from "@reduxjs/toolkit/";

const initialState = {
    cartState: [],
    quantity: 0
}


const cartState = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AddCart: (state, action) => {
            state.cartState.push(action.payload);
        }
    }
})

export const { AddCart } = cartState.actions;
export default cartState.reducer;