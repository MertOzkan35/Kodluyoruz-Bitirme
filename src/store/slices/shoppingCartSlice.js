import { createSlice } from "@reduxjs/toolkit";
const basket = localStorage.getItem("shopingCart");
const parsedBasket = JSON.parse(basket);
const initialState = {
  prods: parsedBasket.length > 0 ? parsedBasket : [],
};

export const prodsSlice = createSlice({
  name: "prods",
  initialState: initialState,
  reducers: {
    changeProds: (state, { payload }) => {
      state.prods = [...state.prods, payload];
      localStorage.setItem("shopingCart", JSON.stringify(state.prods));
    },
    deleteProds: (state, { payload }) => {
      state.prods = state.prods.filter((item) => item.lastProd.Id !== payload);
      localStorage.setItem("shopingCart", JSON.stringify(state.prods));
    },
    clearProds: (state) => {
      state.prods = [];
      localStorage.setItem("shopingCart", JSON.stringify(state.prods));
    },
  },
});
export const { changeProds } = prodsSlice.actions;
export const { deleteProds } = prodsSlice.actions;
export const { clearProds } = prodsSlice.actions;
export default prodsSlice.reducer;
