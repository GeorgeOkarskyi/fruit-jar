import { setError, setLoading } from "./ui.actions";
import { IUIStore } from "./ui.types";
import { createReducer } from "@reduxjs/toolkit";

const initialState: IUIStore = {
  isLoading: false,
  error: null,
};

export const uiReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setLoading, (state, action) => {
      state.isLoading = action.payload.isLoading;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload.error;
    });
});