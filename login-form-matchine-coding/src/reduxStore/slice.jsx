import { createSlice } from "@reduxjs/toolkit";

const CouponSlice = createSlice({
  name: "CouponSlice",
  initialState: { coupanName: "" },
  reducers: {
    addCoupan: (state, action) => {
      state.coupanName = action.payload;
    },
    deleteCoupan: (state, action) => {
      delete state.coupanName;
    },
    updateCoupan: (state, action) => {
      state.coupanName = action.payload;
    },
  },
});

export const { addCoupan, deleteCoupan, updateCoupan } = CouponSlice.actions;
export default CouponSlice;
