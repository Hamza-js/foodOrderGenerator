"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  catArr: null,
  protine: null,
  calories: null,
  sizes: null,
  selectedId: null,
  selectedSize: null,
  results: null,
};

export const catSlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    setCatArr: (state, action) => {
      state.catArr = action.payload;
    },
    setGlobelProtine: (state, action) => {
      state.protine = action.payload;
    },
    setGlobelCalories: (state, action) => {
      state.calories = action.payload;
    },
    setSizes: (state, action) => {
      state.sizes = action.payload;
    },
    setSelectedId: (state, action) => {
      state.selectedId = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
    setSelectedSize: (state, action) => {
      state.selectedSize = action.payload;
    },
  },
});

// actions
export const { setCatArr, setGlobelCalories, setGlobelProtine, setSizes, setSelectedId, setResults, setSelectedSize } = catSlice.actions;

//   reducers
export const selectCatArr = (state) => state.cat.catArr;
export const selectCalories = (state) => state.cat.calories;
export const selectProtines = (state) => state.cat.protine;
export const selectSizes = (state) => state.cat.sizes;
export const selectId = (state) => state.cat.selectedId;
export const selectResults = (state) => state.cat.results;
export const selectSingleSize = (state) => state.cat.selectedSize;

export default catSlice.reducer;
