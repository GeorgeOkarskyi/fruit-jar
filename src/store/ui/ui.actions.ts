import { createAction } from "@reduxjs/toolkit";

export const setLoading = createAction<{ isLoading: boolean }>('ui/loading/set');
export const setError = createAction<{ error: Error | null }>('ui/error/set');