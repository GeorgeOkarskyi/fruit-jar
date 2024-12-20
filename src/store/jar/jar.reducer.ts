import { addFruitToJar, removeFruitFromJar } from "./jar.actions";
import { IJarStore } from "./jar.types";
import { createReducer } from "@reduxjs/toolkit";

const initialState: IJarStore = {
  jarItems: [],
};

export const jarReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addFruitToJar, (state, action) => {
      const existingJarItem = state.jarItems.find((item) => item.fruit.id === action.payload.fruit.id);

      if(existingJarItem){
        existingJarItem.count++;
      }else {
        state.jarItems.push({fruit: action.payload.fruit, count: 1});
      }
    })
    .addCase(removeFruitFromJar, (state, action) => {
      state.jarItems = state.jarItems.map((item) =>
        item.fruit.id === action.payload.fruit.id
          ? { ...item, count: item.count - 1 }
          : item,
      ).filter(item => item.count > 0);
    });
});