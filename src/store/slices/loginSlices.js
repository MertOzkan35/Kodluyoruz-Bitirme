import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: { payload: "x" },
};

export const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    changeLogin: (state, payload) => {
      state.login = payload;
    },
  },
});

export const { changeLogin } = loginSlice.actions;

export default loginSlice.reducer;
