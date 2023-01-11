import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    icon: 'untick'
}

const tickSlice = createSlice({
    name: 'tickSign',
    initialState,
    reducers: {
        changeIcon: (state, action) => {
            state.icon = action.payload
        },
    }
});

export const { changeIcon } =  tickSlice.actions;
export default tickSlice.reducer;