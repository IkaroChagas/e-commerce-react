import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../slices/productsSlice";

export const store = configureStore({
    reducer: {
        product: productsSlice
    }
})

// tipos para o RootState, o state geral da aplicação
export type RootState = ReturnType<typeof store.getState>;