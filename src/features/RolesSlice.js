import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: [],
  role: "",
  description: "",
  requiredSkill: [],
  complimentarySkill: [],
  requiredSkills: "",
  complimentarySkills: "",
};

const rolesSlice = createSlice({
  name: "teamRoles",
  initialState,
  reducers: {
    addRole: (state, action) => {
      state.roles.push(action.payload);
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    addRequiredSkill: (state, action) => {
      state.requiredSkill.push(action.payload);
    },
    setRequiredSkill: (state, action) => {
      state.requiredSkills = action.payload;
    },
    addComplimentarySkill: (state, action) => {
      state.complimentarySkill.push(action.payload);
    },
    setComplimentarySkill: (state, action) => {
      state.complimentarySkills = action.payload;
    },
  },
});

export const {
  addRole,
  setRole,
  setDescription,
  addRequiredSkill,
  setRequiredSkill,
  addComplimentarySkill,
  setComplimentarySkill,
} = rolesSlice.actions;

export default rolesSlice.reducer;
