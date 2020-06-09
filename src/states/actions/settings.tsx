import { LOCALE_CHANGE, THEME_CHANGE } from "@constants/actions";
import { light, dark } from "@eva-design/eva";
import { ThemeName } from "@states/reducers/settings";

export function localeChange(locale: string) {
  return {
    type: LOCALE_CHANGE,
    payload: locale,
  };
}

export function themeChangeDark() {
  return {
    type: THEME_CHANGE,
    payload: { values: dark, name: ThemeName.DARK },
  };
}

export function themeChangeLight() {
  return {
    type: THEME_CHANGE,
    payload: { values: light, name: ThemeName.LIGHT },
  };
}
