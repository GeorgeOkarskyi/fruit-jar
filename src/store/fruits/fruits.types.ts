import { Fruit } from "../../types/fruit-item";
import { setFruits, updateActiveFilter } from "./fruits.action";
import { Option } from "../../types/option"

export interface IFruitsStore {
    fruits: Fruit[];
    filters: Option[];
}

type SetFruitAction = ReturnType<typeof setFruits>;
type UpdateFilterAction = ReturnType<typeof updateActiveFilter>;

export type FruitActions = SetFruitAction | UpdateFilterAction;