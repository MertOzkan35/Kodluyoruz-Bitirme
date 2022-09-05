import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  prods: [],
};

export const prodsSlice = createSlice({
  name: "prods",
  initialState: initialState,
  reducers: {
    changeProds: (state, { payload }) => {
      state.prods = [...state.prods, payload];
    },
    deleteProds: (state, { payload }) => {
      state.prods = state.prods.filter((item) => item.lastProd.Id !== payload);
    },
  },
});
export const { changeProds } = prodsSlice.actions;
export const { deleteProds } = prodsSlice.actions;
export default prodsSlice.reducer;
