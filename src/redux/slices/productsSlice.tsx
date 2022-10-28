import { createSlice } from "@reduxjs/toolkit/";

import type { RootState } from "../store";

export interface Product {
    id: string;
    title: string;
    image: string;
    price: string;
    quantity: number;
}

const initialState: Product[] = []

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            //state.push(action.payload);
            console.log(action)
        }
    }
})

export const cartProducts = createSlice({
    name: 'cartProducs',
    initialState,
    reducers: {
        cartItens: (state: Product[], action) => {
            state.push(action.payload)

            switch (action.type) {

                case 'INCREASE_QUANTITY':
                    if (action.payload.id && action.payload.title && action.payload.price && action.payload.image) {
                        const cloneCart = [...state]

                        const index = cloneCart.findIndex(item => item.id === action.payload.id);
                        if (index < 1) {
                            cloneCart[index].title = action.payload.title;
                            cloneCart[index].image = action.payload.image;
                            cloneCart[index].price = action.payload.price;
                        }
                        return cloneCart
                    }
                    break
                case 'DECREASE_QUANTITY':
                    if (action.payload.id) {
                        const cloneCart = [...state]

                        const index = cloneCart.findIndex(item => item.id === action.payload.id);
                        if (index > 1) {
                            cloneCart[index].title = action.payload.title;
                            cloneCart[index].image = action.payload.image;
                            cloneCart[index].price = action.payload.price;
                        }
                        return cloneCart

                    }
                    break
                case 'REMOVE_PRODUCT':
                    if (action.payload.id) {
                        const cloneCart = [...state];

                        const newState = cloneCart.filter(item => item.id !== action.payload.id);
                        return newState
                    }
                    break
            }
        }
    }
})

export const { addProduct } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.product;

export default productsSlice.reducer;