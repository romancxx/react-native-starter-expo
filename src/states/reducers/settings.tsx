import { AsyncStorage } from "react-native";
import { dark } from "@eva-design/eva";
import * as Localization from "expo-localization";

import { LNG_DEVICE, LOCALE_CHANGE, THEME_CHANGE } from "@constants/actions";
import { REHYDRATE } from "redux-persist";
import i18n from "@locales/i18n";

export enum ThemeName {
  LIGHT = 0,
  DARK = 1,
}

export interface KittenTheme {
  values: any;
  name: ThemeName;
}

export interface SettingsState {
  locale: string;
  theme: KittenTheme;
}

const initialState: SettingsState = {
  locale: LNG_DEVICE,
  theme: { values: dark, name: ThemeName.DARK },
};

export const settingsPersistConfig = {
  key: "settings",
  storage: AsyncStorage,
};

export default function settingsReducer(
  state: SettingsState = initialState,
  action: any
) {
  switch (action.type) {
    case REHYDRATE:
      if (action.key === "settings") {
        if (action.payload && action.payload.locale !== LNG_DEVICE) {
          i18n.locale = action.payload.locale;
        }
      }
      return {
        ...state,
      };
    case LOCALE_CHANGE:
      return {
        ...state,
        locale:
          action.payload === LNG_DEVICE ? Localization.locale : action.payload,
      };
    case THEME_CHANGE:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
}
