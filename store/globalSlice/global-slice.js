import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

let initialState = { quickViewOpened: false, quickViewData: {} };

const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    openQuickView: (state, action) => {
      state.quickViewOpened = true
      console.log('here we are')
    },
    closeQuickView: (state, action) => {
      state.quickViewOpened = false
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.global,
      };
    },
  },
});

export const globalActions = globalSlice.actions;
export default globalSlice.reducer;