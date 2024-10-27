import { setError, setLoading } from "./ui.actions";

export interface IUIStore {
    isLoading: boolean,
    error: Error | null
}

type SetLoadingAction = ReturnType<typeof setLoading>;
type SetErrorAction = ReturnType<typeof setError>;

export type UIActions = SetLoadingAction | SetErrorAction;
