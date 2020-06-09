import { createSelector } from "reselect";
import { AppState } from "@states/reducer";

export const selectTheme = createSelector(
  (state: AppState) => state.settings.theme,
  (theme) => theme
);

export const selectLocale = createSelector(
  (state: AppState) => state.settings.locale,
  (locale) => locale
);
