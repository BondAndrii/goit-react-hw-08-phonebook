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

import { contactsReducer } from "./contacts/slice";

import { filterReducer } from "./filter/slice";

import { authReducer } from "./auth/slice";

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

export const persistor = persistStore(store);