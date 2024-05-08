import { AnyAction, Store } from "redux";
import { ITasksState, TasksActionTypes } from "./tasks/types";
import { ThunkDispatch } from "redux-thunk";

export interface IGlobalState {
  tasks: ITasksState;
}

export type StoreWithActions = Store<
  {
    tasks: ITasksState;
  },
  TasksActionTypes,
  unknown
> & {
  dispatch: ThunkDispatch<any, undefined, AnyAction>;
};
