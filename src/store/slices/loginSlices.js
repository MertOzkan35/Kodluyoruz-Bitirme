import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    changeLogin: (state) => {
      state.login = !state.login;
    },
  },
});

export const { changeLogin } = loginSlice.actions;

export default loginSlice.reducer;
