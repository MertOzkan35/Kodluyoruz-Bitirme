import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlices";
import dataReducer from "./slices/dataSlices";
import prodsReducer from "./slices/shoppingCartSlice";

export default configureStore({
  reducer: {
    mert: loginReducer,
    data: dataReducer,
    prods: prodsReducer,
    // redux store kısmı
  },
});
