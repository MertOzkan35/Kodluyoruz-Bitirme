import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlices";
import dataReducer from "./slices/dataSlices";
import prodsReducer from "./slices/shoppingCartSlice";
import adminReducer from "./slices/adminLogin";
export default configureStore({
  reducer: {
    login: loginReducer,
    data: dataReducer,
    prods: prodsReducer,
    admin: adminReducer,
    // redux store kısmı
  },
});
