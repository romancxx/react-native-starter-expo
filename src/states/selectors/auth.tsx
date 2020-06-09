import { createSelector } from "reselect";
import { AppState } from "@states/reducer";

export const selectIsAuth = createSelector(
  (state: AppState) => state.auth.isAuth,
  (isAuth) => isAuth
);

export const selectAuthLoading = createSelector(
  (state: AppState) => state.auth.loading,
  (loading) => loading
);
