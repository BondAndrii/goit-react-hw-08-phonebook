import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  //persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';



// import { combineReducers } from "redux";

import { contactsReducer } from "./contacts/slice";

import { filterReducer } from "./filter/slice";

import { persistedAuthReducer } from "./auth/slice";



// const rootReducer = combineReducers({
//     auth: authReducer,
//     contacts: contactsReducer,
//     filter: filterReducer,
// })


// const persistedRootReducer = persistReducer(authPersistConfig, rootReducer);

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