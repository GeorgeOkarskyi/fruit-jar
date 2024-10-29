import { Fruit } from "../../entities/fruit-item";

export interface IJarItem {
    fruit: Fruit,
    count: number,
}

export interface IJarStore {
    jarItems: IJarItem[];
}