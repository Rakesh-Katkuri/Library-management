// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    users: null,
    isAuthenticated: localStorage.getItem("login") ? true : false,
  },
  reducers: {
    login: (state, action) => {
      state.users = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.users = null;
      state.isAuthenticated = false;
    },
    signup: (state, action) => {
      state.users = action.payload;
      state.isAuthenticated = true;
    },
  },
});

export const { login, logout, signup } = authSlice.actions;
export const selectUser = (state) => state.auth.users;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;
