import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: [],
  role: "",
  description: "",
  requiredSkill: [],
  complimentarySkill: [],
  location: "",
};

const rolesSlice = createSlice({
  name: "teamRoles",
  initialState,
  reducers: {},
});

export const {} = rolesSlice.actions;

export default rolesSlice.reducer;
