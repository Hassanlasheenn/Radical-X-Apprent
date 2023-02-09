import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  admins: [],
  name: '',
  image: null,
};

const adminSlice = createSlice({
  name: 'teamAdmins',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.admins.push(action.payload);
    },
    setAdminName: (state, action) => {
      state.name = action.payload;
    },
    setAdminImg: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { addUser, setAdminName, setAdminImg } = adminSlice.actions;

export default adminSlice.reducer;
