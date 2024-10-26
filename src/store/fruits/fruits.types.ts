import { Fruit } from "../../types/fruit-item";
import { setFruits } from "./fruits.action";

export interface IFruitsStore {
    fruits: Fruit[];
}

type SetFruitAction = ReturnType<typeof setFruits>;

export type FruitActions = SetFruitAction;