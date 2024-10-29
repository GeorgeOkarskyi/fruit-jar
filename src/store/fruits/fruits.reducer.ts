import { setFruits, updateActiveFilter } from "./fruits.actions";
import { IFruitsStore } from "./fruits.types";
import { createReducer } from "@reduxjs/toolkit";

const initialState: IFruitsStore = {
  fruits: [],
  filters: [],
};

export const fruitsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFruits, (state, action) => {
      state.fruits = action.payload.fruits;
    })
    .addCase(updateActiveFilter, (state, { payload: { label, value }}) => {  
      state.filters = state.filters.some(filter => filter.label === label) ? state.filters.map(filter =>
        filter.label === label ? { ...filter, value } : filter,
      )
        : [...state.filters, { label, value }];
    });
});