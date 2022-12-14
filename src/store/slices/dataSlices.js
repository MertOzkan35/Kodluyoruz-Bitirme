import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};
// tüm ürünlerin olduğu data
export const dataSlices = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    addbulk: (state, { payload }) => {
      // default datayı yüklemek için kullanıdığımız fonksyon
      state.data = payload;
    },
    addProds: (state, { payload }) => {
      state.data = [...state.data, payload];
      localStorage.setItem("products", JSON.stringify(state.data));
    },
    deleteData: (state, { payload }) => {
      state.data = state.data.filter((item) => item.Id !== payload);
      localStorage.setItem("products", JSON.stringify(state.data));
      localStorage.removeItem("shopingCart");
    },
    updateData: (state, { payload }) => {
      const index = state.data.findIndex((prod) => prod.Id === payload.Id);
      state.data[index] = payload;

      localStorage.setItem("products", JSON.stringify(state.data));
    },
  },
});

export const { addProds } = dataSlices.actions;
export const { addbulk } = dataSlices.actions;
export const { deleteData } = dataSlices.actions;
export const { updateData } = dataSlices.actions;
export default dataSlices.reducer;
