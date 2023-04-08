import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './slice/cartSlice';

export const store = configureStore({
    reducer: {
        cart: CartReducer,
    }
})