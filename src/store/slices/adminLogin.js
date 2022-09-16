import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: false,
  // login bilgimizin olduğu data
};

export const adminLogin = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {
    isLogin: (state, { payload }) => {
      state.admin = payload;
    },
  },
});

export const { isLogin } = adminLogin.actions;

export default adminLogin.reducer;
