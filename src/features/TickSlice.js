import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  icons: {
    companyTitleTick: false,
    companyDescTick: false,
  },
  values: {
    companyTitle: "",
    companyDesc: "",
  },
};

const tickSlice = createSlice({
  name: "tickSign",
  initialState,
  reducers: {
    setCompanyTitle: (state, action) => {
      state.values.companyTitle = action.payload;
    },
    setCompanyDesc: (state, action) => {
      state.values.companyDesc = action.payload;
    },

    changeTitleIcon: (state, action) => {
      state.icons.companyTitleTick = action.payload;
    },

    changeDescIcon: (state, action) => {
      state.icons.companyDescTick = action.payload;
    },
  },
});

export const {
  changeTitleIcon,
  changeDescIcon,
  setCompanyTitle,
  setCompanyDesc,
} = tickSlice.actions;

export const selectCompanyTitle = (state) => state.tick.values.companyTitle;
export const selectCompanyDesc = (state) => state.tick.values.companyDesc;
export const selectCompanyTick = (state) => state.tick.icons.companyTitleTick;
export const selectCompanyDTick = (state) => state.tick.icons.companyDescTick;

export default tickSlice.reducer;
