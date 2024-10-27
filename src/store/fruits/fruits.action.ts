import { createAction } from "@reduxjs/toolkit";
import { Fruit } from "../../types/fruit-item";
import { Option } from "../../types/option";

export const setFruits = createAction<{fruits: Fruit[]}>('fruits/set');
export const updateActiveFilter = createAction<Option>('filter/update');