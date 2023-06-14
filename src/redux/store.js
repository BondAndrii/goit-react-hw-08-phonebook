import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "redux";

import { contactsReducer } from "./contacts/slice";

import { filterReducer } from "./filter/slice";

import { authReducer } from "./auth/slice";



const rootReducer = combineReducers({
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
})



export const store = configureStore({
    reducer: rootReducer,
  
});
