import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  icons: {
    companyTitleTick: false,
    teamTypeTick: false,
    timeLineTick: false,
    teamAdminTick: false,
    teamRoleTick: false,
  },
  values: {
    companyTitle: "",
    teamType: false,
    selectedDate: new Date(),
    teamAdmin: [],
    teamRole: [],
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

    setSelectedDate: (state, action) => {
      state.values.selectedDate = action.payload;
    },

    changeTimeLineIcon: (state, action) => {
      state.icons.timeLineTick = action.payload;
    },

    setTeamAdmin: (state, action) => {
      state.values.teamAdmin = action.payload;
    },

    changeAdminIcon: (state, action) => {
      state.icons.teamAdminTick = action.payload;
    },

    setTeamRole: (state, action) => {
      state.values.teamRole = action.payload;
    },

    changeRoleIcon: (state, action) => {
      state.icons.teamRoleTick = action.payload;
    },
  },
});

export const {
  changeTitleIcon,
  setCompanyTitle,
  setTeamType,
  changeTeamIcon,
  changeTimeLineIcon,
  setSelectedDate,
  setTeamAdmin,
  changeAdminIcon,
  setTeamRole,
  changeRoleIcon,
} = tickSlice.actions;

export const selectCompanyTitle = (state) => state.tick.values.companyTitle;
export const selectCompanyTick = (state) => state.tick.icons.companyTitleTick;
export const selectTeamType = (state) => state.tick.values.teamType;
export const selectTeamTick = (state) => state.tick.icons.teamTypeTick;
export const selectSelectedDate = (state) => state.tick.values.selectedDate;
export const selectTimeLineTick = (state) => state.tick.icons.timeLineTick;
export const selectTeamAdmin = (state) => state.tick.values.teamAdmin;
export const selectAdminTick = (state) => state.tick.icons.teamAdminTick;
export const selectRole = (state) => state.tick.values.teamRole;
export const selectRoleTick = (state) => state.tick.icons.teamRoleTick;

export default tickSlice.reducer;
