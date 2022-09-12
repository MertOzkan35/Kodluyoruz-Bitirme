import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const dataSlices = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    addbulk: (state, { payload }) => {
      console.log(payload, "asdfafas");
      state.data = payload;
    },
    addProds: (state, { payload }) => {
      state.data = [...state.data, payload];
      localStorage.setItem("products", JSON.stringify(state.data));
    },
    deleteData: (state, { payload }) => {
      console.log(payload);
      state.data = state.data.filter((item) => item.Id !== payload);
      localStorage.setItem("products", JSON.stringify(state.data));
    },
    updateData: (state, { payload }) => {
      // state.data.splice(item.Id, 1, payload);
      // state.data = state.data.splice(
      //   (item) => item.Id == payload.Id && (item.Id, 1, payload)
      // );
      console.log(payload.index);
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

// (state.data = state.data.splice(0, 1, "selam"))
