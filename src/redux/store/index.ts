import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../slices/productsSlice";
import cartProducts from "../slices/productsSlice";

export const store = configureStore({
    reducer: {
        product: productsSlice,
        cart: cartProducts
    }
})

// tipos para o RootState, o state geral da aplicação
export type RootState = ReturnType<typeof store.getState>;