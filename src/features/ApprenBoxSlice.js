import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boxItems: [],
  title: "",
  position: "",
  apprentDescription: "",
  isLoading: true,
};

const apprenBoxSlice = createSlice({
  name: "apprenBox",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setApprentDesc: (state, action) => {
      state.apprentDescription = action.payload;
    },

    addAppren: (state, action) => {
      state.boxItems.push(action.payload);
    },

    duplicate: (state, action) => {
      const boxItem = action.payload;
      const itemToDuplicate = state.boxItems.find(
        (item) => item.id === boxItem
      );
      const newItem = { ...itemToDuplicate, id: Date.now() };
      return { ...state, boxItems: [...state.boxItems, newItem] };
    },

    erase: (state, action) => {
      const boxId = action.payload;
      const index = state.boxItems.filter((item) => item.id === boxId);
      if (index >= 0) {
        state.boxItems.splice(index, 1);
      }
    },
  },
});

export const {
  duplicate,
  erase,
  setTitle,
  setPosition,
  setApprentDesc,
  addAppren,
} = apprenBoxSlice.actions;

export const selectTitle = (state) => state.appren.title;
export const selectPosition = (state) => state.appren.position;
export const selectApprenDesc = (state) => state.appren.apprentDescription;
export const selectAppren = (state) => state.appren.boxItems;

export default apprenBoxSlice.reducer;
