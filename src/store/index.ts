import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import { fruitsReducer } from "./fruits/fruits.reducer"
import { uiReducer } from "./ui/ui.reducer";

const store = configureStore({
    reducer: {
        ui: uiReducer,
        fruits: fruitsReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
  
export default store