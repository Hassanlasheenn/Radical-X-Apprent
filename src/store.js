/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import ApprenBoxSlice from './features/ApprenBoxSlice';
import tickReducer from './features/TickSlice';
import adminReducer from './features/AdminSlice';
import roleReducer from './features/RolesSlice';

export const store = configureStore({
  reducer: {
    appren: ApprenBoxSlice,
    tick: tickReducer,
    admin: adminReducer,
    role: roleReducer
  }
});
