import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    boxItems: [
        {
            id: 1,
            title: "Mobile App Development",
            position: "React Native Developer"
        },
        {
            id: 2,
            title: "Game Development",
            position: "Game Developer"
        }
    ],
    title: '',
    position: '',
    isLoading: true
}


const apprenBoxSlice = createSlice({
    name: 'apprenBox',
    initialState,
    reducers: {
        duplicate: (state, action) => {
            const { id } = action.payload;
            const itemToDuplicate = state.boxItems.find(item => item.id === id);
            const newItem = { ...itemToDuplicate, id: Date.now() };
            return { ...state, boxItems: [...state.boxItems, newItem] };
        },

        erase: (state, action) => {
            const boxId = action.payload;
            const index = state.boxItems.filter(item => item.id === boxId);
            if (index >= 0) {
              state.boxItems.splice(index, 1);
            }
        },
    }
});

export const { duplicate, erase } = apprenBoxSlice.actions;
export default apprenBoxSlice.reducer;