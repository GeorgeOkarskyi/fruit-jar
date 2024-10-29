import { createAction } from "@reduxjs/toolkit";
import { Fruit } from "../../entities/fruit-item";
import { Option } from "../../entities/option";

export const setFruits = createAction<{fruits: Fruit[]}>('fruits/set');
export const updateActiveFilter = createAction<Option>('filter/update');