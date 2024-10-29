import { RootState } from "../index";
import { createSelector } from "@reduxjs/toolkit";

export const selectJarItems = (state: RootState) => state.jar.jarItems;
export const selectJarCalories = createSelector(
  [selectJarItems],
  (jarItems) => jarItems.reduce((totalCalories, item) => totalCalories + (item.count * item.fruit.nutritions.calories), 0),
);