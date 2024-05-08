import { ACTION_TYPES, THEME } from "./types";

export const setTheme = (theme: THEME) => {
  return {
    type: ACTION_TYPES.SET_THEME,
    payload: theme,
  };
};
