import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  icons: {
    companyTitleTick: false,
    teamTypeTick: false,
    timeLineTick: false,
  },
  values: {
    companyTitle: "",
    teamType: false,
  },
};

const tickSlice = createSlice({
  name: "tickSign",
  initialState,
  reducers: {
    setCompanyTitle: (state, action) => {
      state.values.companyTitle = action.payload;
    },

    changeTitleIcon: (state, action) => {
      state.icons.companyTitleTick = action.payload;
    },

    setTeamType: (state, action) => {
      state.values.teamType = action.payload;
    },

    changeTeamIcon: (state, action) => {
      state.icons.teamTypeTick = action.payload;
    },

    changeTimeLineIcon: (state, action) => {
      state.icons.timeLineTick = action.payload;
    },
  },
});

export const {
  changeTitleIcon,
  setCompanyTitle,
  setTeamType,
  changeTeamIcon,
  changeTimeLineIcon,
} = tickSlice.actions;

export const selectCompanyTitle = (state) => state.tick.values.companyTitle;
export const selectCompanyTick = (state) => state.tick.icons.companyTitleTick;
export const selectTeamType = (state) => state.tick.values.teamType;
export const selectTeamTick = (state) => state.tick.icons.teamTypeTick;
export const selectTimeLineTick = (state) => state.tick.icons.timeLineTick;

export default tickSlice.reducer;
