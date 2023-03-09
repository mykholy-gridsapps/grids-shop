import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

// SLICES
import userSliceReducer from "./userSlice/user-slice";
import globalSliceReducer from "./globalSlice/global-slice";

const store = () =>
  configureStore({
    reducer: {
      user: userSliceReducer,
      global: globalSliceReducer
    },
    devTools: true,
  });

export const wrapper = createWrapper(store);
