import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isTicked: false,
  value: "",
};

const tickSlice = createSlice({
  name: "tickSign",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    changeIcon: (state, action) => {
      state.isTicked = action.payload;
    },
  },
});

export const { changeIcon, setValue } = tickSlice.actions;
export const selectValue = (state) => state.tick.value;
export const selectIcon = (state) => state.tick.isTicked;

export default tickSlice.reducer;
