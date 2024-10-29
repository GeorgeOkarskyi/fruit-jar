import { setError, setLoading } from "../ui/ui.actions";

import { AppThunk } from "../index";
import { fetchFruits } from "../../api/fruits.api";
import { setFruits } from "./fruits.actions";

export const setFruitsEpic = (): AppThunk => async (dispatch) => {
  dispatch(setLoading({ isLoading: true }));
  
  try {
    const fruits = await fetchFruits();

    dispatch(setFruits({ fruits }));
  } catch (error) {
    dispatch(setError({ error: error as Error }));
  } finally {
    dispatch(setLoading({ isLoading: false }));
  }
};