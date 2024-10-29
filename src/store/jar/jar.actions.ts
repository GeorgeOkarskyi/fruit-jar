import { Fruit } from "../../entities/fruit-item";
import { createAction } from "@reduxjs/toolkit";

export const addFruitToJar = createAction<{ fruit: Fruit }>('jar/fruit/add');
export const removeFruitFromJar = createAction<{ fruit: Fruit }>('jar/fruit/remove');