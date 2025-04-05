import { createSlice } from "@reduxjs/toolkit";

function initializeWatchList() {
  const watchList = localStorage.getItem("watchList");
  if (watchList) {
    return JSON.parse(watchList);
  }
}

function saveWatchListToLocalStorage(state) {
  localStorage.setItem("watchList", JSON.stringify(state));
}
const initialState = initializeWatchList() || {};

export const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      state[action.payload.id] = action.payload;
      saveWatchListToLocalStorage(state);
    },
    removeFromWatchlist: (state, action) => {
      delete state[action.payload];
      saveWatchListToLocalStorage(state);
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;
