import { configureStore } from "@reduxjs/toolkit";
import watchListReducer from "./watchListSlice";

export const store = configureStore({
  reducer: {
    counter: watchListReducer,
  },
});
