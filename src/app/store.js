// store.js

import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer, // Include the auth reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
