import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "./watchListSlice";
import moviesReducer from "./moviesSlice";

export const store = configureStore({
  reducer: {
    watchList: watchlistReducer,
    movieList: moviesReducer,
  },
});
