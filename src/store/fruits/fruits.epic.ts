import { AppThunk } from "../index";
import { fetchFruits } from "../../api/fruits.api";
import { setError, setLoading } from "../ui/ui.action";
import { setFruits } from "./fruits.action";

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