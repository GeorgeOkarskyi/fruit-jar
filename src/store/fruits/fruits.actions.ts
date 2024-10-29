import { Fruit } from "../../entities/fruit-item";
import { Option } from "../../entities/option";
import { createAction } from "@reduxjs/toolkit";

export const setFruits = createAction<{fruits: Fruit[]}>('fruits/set');
export const updateActiveFilter = createAction<Option>('filter/update');