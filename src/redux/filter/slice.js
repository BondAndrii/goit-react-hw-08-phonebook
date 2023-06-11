import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: '',
    reducers: {
        addFilter(state, action) {
            return action.payload;
        },
        doClear(state, action) {
            return ""
        }
    }
});

export const { addFilter, doClear } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;