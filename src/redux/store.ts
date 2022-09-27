import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart";

const Store = configureStore({
    reducer: {
        name: cart
    }
})

export default Store