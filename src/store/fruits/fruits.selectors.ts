import { Filters, GroupType, ViewType } from "../../configs/filters.config";
import { RootState } from "../index";

export const selectFruits = (state: RootState) => state.fruits.fruits;
export const selectListType = (state: RootState): ViewType => state.fruits.filters.find((filter) => filter.label === Filters.View)?.value as ViewType;
export const selectGroupBy = (state: RootState) => state.fruits.filters.find((filter) => filter.label === Filters.Group)?.value as GroupType;