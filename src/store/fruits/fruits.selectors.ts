import { IFruitsStore } from "./fruits.types";

export const selectFruits = (state: IFruitsStore) => state.fruits;