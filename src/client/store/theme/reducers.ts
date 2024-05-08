import { ACTION_TYPES, IThemeState, THEME, ThemeActionTypes } from "./types";

const initialState: IThemeState = {
  theme: THEME.light,
};

const dataReducer = (
  state = initialState,
  action: ThemeActionTypes
): IThemeState => {
  switch (action.type) {
    case ACTION_TYPES.SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
