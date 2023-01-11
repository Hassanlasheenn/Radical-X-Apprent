import { configureStore } from "@reduxjs/toolkit";
import ApprenBoxSlice from "./features/ApprenBoxSlice";


export const store = configureStore({
    reducer: {
        appren: ApprenBoxSlice,
    }
});