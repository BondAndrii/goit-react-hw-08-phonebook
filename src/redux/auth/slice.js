import { createSlice } from "@reduxjs/toolkit";

import {
    loginer, logouter,
    refreshUser,
    register
} from "./operations";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder =>
        builder.addCase(register.pending, (state, action) => state)
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(register.rejected, (state, action) => state)
            .addCase(loginer.pending, (state, action) => state)
            .addCase(loginer.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(loginer.rejected, (state, action) => state)
            .addCase(logouter.pending, (state, action) => state)
            .addCase(logouter.fulfilled, (state, action) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(logouter.rejected, (state, action) => state)
            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
                })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
        .addCase(refreshUser.rejected, state => {
            state.isRefreshing = false;
        }),        
        
})

export const authReducer = authSlice.reducer;