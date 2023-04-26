'use client'

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";

import catReducer  from "./slices/category";

export const store = configureStore({
  reducer: {
    cat: catReducer,
    middleware: [...getDefaultMiddleware(), thunkMiddleware],
  },
});
