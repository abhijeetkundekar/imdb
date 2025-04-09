import { configureStore } from "@reduxjs/toolkit";
import CouponSliceReducer from "./slice";
export const store = configureStore({
  reducer: { CouponSliceReducer },
});
