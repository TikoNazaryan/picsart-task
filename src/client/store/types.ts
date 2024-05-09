import { AnyAction, Store } from "redux";
import { ITasksState, TasksActionTypes } from "./tasks/types";
import { ThunkDispatch } from "redux-thunk";
import { IThemeState } from "./theme/types";
import { IUserState } from "./users/types";

export interface IGlobalState {
  tasks: ITasksState;
  theme: IThemeState;
  users: IUserState;
}

export type StoreWithActions = Store<
  {
    tasks: ITasksState;
    theme: IThemeState;
    users: IUserState;
  },
  any,
  unknown
> & {
  dispatch: ThunkDispatch<any, undefined, AnyAction>;
};

export type AppDispatch = ThunkDispatch<IGlobalState, any, AnyAction>;
