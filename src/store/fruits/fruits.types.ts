import { setFruits, updateActiveFilter } from "./fruits.actions";
import { Fruit } from "../../entities/fruit-item";
import { Option } from "../../entities/option";

export interface IFruitsStore {
    fruits: Fruit[];
    filters: Option[];
}

type SetFruitAction = ReturnType<typeof setFruits>;
type UpdateFilterAction = ReturnType<typeof updateActiveFilter>;

export type FruitActions = SetFruitAction | UpdateFilterAction;