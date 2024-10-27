import { Fruit } from "../../entities/fruit-item";

interface IJarItem {
    fruit: Fruit,
    count: number
}

export interface IJarStore {
    jarItems: IJarItem[];
}