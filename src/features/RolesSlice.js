import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  roles: [],
  role: '',
  description: '',
  requiredSkill: [],
  complimentarySkill: [],
  requiredSkills: '',
  complimentarySkills: '',
};

const rolesSlice = createSlice({
  name: 'teamRoles',
  initialState,
  reducers: {
    addRole: (state, action) => {
      if (!state.roles.includes(action.payload)) {
        state.roles = [...new Set([...state.roles, action.payload])];
      }
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    addRequiredSkill: (state, action) => {
      if (!state.requiredSkill.includes(action.payload)) {
        state.requiredSkill = [
          ...new Set([...state.requiredSkill, { ...action.payload }]),
        ];
      }
    },
    setRequiredSkill: (state, action) => {
      state.requiredSkills = action.payload;
    },
    addComplimentarySkill: (state, action) => {
      if (!state.complimentarySkill.includes(action.payload)) {
        state.complimentarySkill = [
          ...new Set([...state.complimentarySkill, action.payload]),
        ];
      }
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
