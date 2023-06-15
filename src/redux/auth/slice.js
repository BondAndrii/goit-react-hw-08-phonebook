import { createSlice } from "@reduxjs/toolkit";

import { loginer, logouter, register } from "./operations";

// import storage from 'redux-persist/lib/storage';

// import persistReducer from 'redux-persist/es/persistReducer';

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
        
        
})

// const authPersistConfig = {
//     key: 'auth',
//     storage,
//     whitelist:['token'],
  
// }

// export const persistedAuthReducer = persistReducer(authPersistConfig, authSlice.reducer)

export const authReducer = authSlice.reducer;