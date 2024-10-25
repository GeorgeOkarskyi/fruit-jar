import { IFruitsStore } from "../fruits/fruits.types";

export const selectFruits = (state: IFruitsStore) => state.fruits;