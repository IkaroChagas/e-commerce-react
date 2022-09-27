import { createSlice } from "@reduxjs/toolkit/";

const cartItem = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        quantity: 0
    },
    reducers: {
        AddCart: (state, action) => {
            state.cart = action.payload
        }
    }
})

export const { AddCart } = cartItem.actions;
export default cartItem.reducer;