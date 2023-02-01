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
    setRequiredSkill: (state, action) => {
      state.requiredSkill.push(action.payload);
    },
    setComplimentarySkill: (state, action) => {
      state.complimentarySkill.push(action.payload);
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const {
  addRole,
  setRole,
  setDescription,
  setRequiredSkill,
  setComplimentarySkill,
  setLocation,
} = rolesSlice.actions;

export default rolesSlice.reducer;
