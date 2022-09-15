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
    },
    updateData: (state, { payload }) => {
      state.data.map((item) =>
        item.Id == payload.product.Id
          ? state.data.splice(payload.index, 1, payload.product)
          : (state.data = state.data)
      );
      localStorage.setItem("products", JSON.stringify(state.data));
    },
  },
});

export const { addProds } = dataSlices.actions;
export const { addbulk } = dataSlices.actions;
export const { deleteData } = dataSlices.actions;
export const { updateData } = dataSlices.actions;
export default dataSlices.reducer;
