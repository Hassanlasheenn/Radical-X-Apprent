import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boxItems: [],
  title: '',
  positions: [],
  position: '',
  apprentDescription: '',
  notification: false,
};

const apprenBoxSlice = createSlice({
  name: 'apprenBox',
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
    addPositions: (state, action) => {
      state.positions.push(action.payload);
    },
    addAppren: (state, action) => {
      state.boxItems.push(action.payload);
    },
    setNotification: (state, action) => {
      state.notification = action.payload;
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
  setApprentDesc,
  addAppren,
  addPositions,
  setPosition,
  setNotification,
} = apprenBoxSlice.actions;

export const selectTitle = (state) => state.appren.title;
export const selectApprenDesc = (state) => state.appren.apprentDescription;
export const selectAppren = (state) => state.appren.boxItems;
export const selectPositions = (state) => state.appren.positions;
export const selectNotification = (state) => state.appren.notification;

export default apprenBoxSlice.reducer;
