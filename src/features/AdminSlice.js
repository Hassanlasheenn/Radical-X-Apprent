import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admins: [],
  name: "",
};

const adminSlice = createSlice({
  name: "teamAdmins",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.admins.push(action.payload);
    },
    setAdminName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { addUser, setAdminName } = adminSlice.actions;

export default adminSlice.reducer;
