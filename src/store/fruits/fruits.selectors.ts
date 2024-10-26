import { RootState } from "../index";

export const selectFruits = (state: RootState) => state.fruits.fruits;