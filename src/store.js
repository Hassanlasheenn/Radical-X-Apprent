import { configureStore } from "@reduxjs/toolkit";
import ApprenBoxSlice from "./features/ApprenBoxSlice";
import tickReducer from "./features/TickSlice";
import adminReducer from "./features/AdminSlice";

export const store = configureStore({
  reducer: {
    appren: ApprenBoxSlice,
    tick: tickReducer,
    admin: adminReducer,
  },
});
