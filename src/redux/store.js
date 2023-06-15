import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';


// import { combineReducers } from "redux";

import { contactsReducer } from "./contacts/slice";

import { filterReducer } from "./filter/slice";

import { authReducer } from "./auth/slice";

// import { persistedAuthReducer } from "./auth/slice";



// const rootReducer = combineReducers({
//     auth: authReducer,
//     contacts: contactsReducer,
//     filter: filterReducer,
// })
const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist:['token'],
  
}

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer)

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        filter: filterReducer,
        contacts: contactsReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
  devTools: process.env.NODE_ENV === 'development',
});
// export const store = configureStore({
//     reducer: persistedRootReducer,
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

export const persistor = persistStore(store);