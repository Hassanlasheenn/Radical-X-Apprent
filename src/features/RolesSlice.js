import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: [],
  role: "",
  description: "",
  requiredSkill: [],
  requiredSkills: "",
  complimentarySkill: "",
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
    setComplimentarySkill: (state, action) => {
      state.complimentarySkill = action.payload;
    },
  },
});

export const {
  addRole,
  setRole,
  setDescription,
  addRequiredSkill,
  setRequiredSkill,
  setComplimentarySkill,
} = rolesSlice.actions;

export default rolesSlice.reducer;
