export enum THEME {
  light = "light",
  dark = "dark",
}

export interface IThemeState {
  theme: THEME;
}

export enum ACTION_TYPES {
  SET_THEME = "SET_THEME",
}

interface SetThemeAction {
  type: ACTION_TYPES.SET_THEME;
  payload: THEME;
}

export type ThemeActionTypes = SetThemeAction;
