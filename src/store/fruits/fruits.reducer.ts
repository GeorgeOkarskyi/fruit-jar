import { createReducer } from "@reduxjs/toolkit";
import { IFruitsStore } from "./fruits.types";
import { setFruits } from "./fruits.action";

const initialState: IFruitsStore = {
    fruits: [],
}

export const fruitsReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(setFruits, (state, action) => {
        state.fruits = action.payload.fruits
    })
})