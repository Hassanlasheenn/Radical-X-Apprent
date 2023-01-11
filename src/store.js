import { configureStore } from "@reduxjs/toolkit";
import ApprenBoxSlice from "./features/ApprenBoxSlice";
import tickReducer from './features/TickSlice';


export const store = configureStore({
    reducer: {
        appren: ApprenBoxSlice,
        tick: tickReducer
    }
});