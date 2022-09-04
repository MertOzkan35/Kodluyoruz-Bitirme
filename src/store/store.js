import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlices";
import dataReducer from "./slices/dataSlices";

export default configureStore({
  reducer: {
    mert: loginReducer,
    data: dataReducer,
    // redux store kısmı
  },
});
