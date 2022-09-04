import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  isAuthLoading: false,
  authStatus: "",
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup(state) {
      state.isAuthLoading = true;
    },
    signupSuccess(state, { payload }) {
      console.log("Success and here is the user =>", payload);
      state.user = payload.user;
      state.isAuthLoading = false;
      state.isAuthenticated = true;
      state.authStatus = payload.message;
    },
    signupFailure(state, { payload }) {
      state.authStatus = payload;
      state.isAuthLoading = false;
      state.isAuthenticated = false;
    },
    removeauthStatus(state) {
      state.authStatus = "";
    },
  },
});

export const { signup, signupSuccess, signupFailure, removeauthStatus } =
  authSlice.actions;

export default authSlice.reducer;
