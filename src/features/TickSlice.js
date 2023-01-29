import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  icon: "unTick",
  value: "",
};

const tickSlice = createSlice({
  name: "tickSign",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    changeIcon: (state) => {
      if (state.icon === "unTick") {
        state.icon = "tick";
      } else {
        state.icon = "unTick";
      }
    },
  },
});

export const { changeIcon, setValue } = tickSlice.actions;
export const selectValue = (state) => state.value;
export const selectIcon = (state) => state.icon;

export default tickSlice.reducer;
