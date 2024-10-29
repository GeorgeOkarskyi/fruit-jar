import { createAction } from "@reduxjs/toolkit";
import { Fruit } from "../../entities/fruit-item";

export const addFruitToJar = createAction<{ fruit: Fruit }>('jar/fruit/add');
export const removeFruitFromJar = createAction<{ fruit: Fruit }>('jar/fruit/remove');