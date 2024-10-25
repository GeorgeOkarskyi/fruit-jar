import { createAction } from "@reduxjs/toolkit";
import { Fruit } from "../../types/fruit-item";

export const setFruits = createAction<{fruits: Fruit[]}>('fruits/set');