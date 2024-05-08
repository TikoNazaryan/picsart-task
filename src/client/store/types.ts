import { AnyAction, Store } from "redux";
import { ITasksState, TasksActionTypes } from "./tasks/types";
import { ThunkDispatch } from "redux-thunk";
import { IThemeState } from "./theme/types";

export interface IGlobalState {
  tasks: ITasksState;
  theme: IThemeState;
}

export type StoreWithActions = Store<
  {
    tasks: ITasksState;
    theme: IThemeState;
  },
  any,
  unknown
> & {
  dispatch: ThunkDispatch<any, undefined, AnyAction>;
};
