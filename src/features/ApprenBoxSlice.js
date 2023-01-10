import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    boxItems: [],
    title: '',
    position: '',
    isLoading: true
}


const apprenBoxSlice = createSlice({
    name: 'apprenBox',
    initialState,
    reducers: {
        duplicate: (state) => {
            // navigator.clipboard.writeText()
        },

        erase: (state) => {
            state.boxItems = [];
        }
    }
});

export const { duplicate, erase } = apprenBoxSlice.actions;
export default apprenBoxSlice.reducer;