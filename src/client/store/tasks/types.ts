export interface ITask {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ITasksState {
  data: ITask[] | null;
  loading: boolean;
  error: string | null;
}

export enum ACTION_TYPES {
  FETCH_TASKS_REQUEST = "FETCH_TASKS_REQUEST",
  FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
  FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE",
}

interface FetchTasksRequestAction {
  type: ACTION_TYPES.FETCH_TASKS_REQUEST;
}

interface FetchTasksSuccessAction {
  type: ACTION_TYPES.FETCH_TASKS_SUCCESS;
  payload: ITask[];
}

interface FetchTasksFailureAction {
  type: ACTION_TYPES.FETCH_TASKS_FAILURE;
  error: string;
}

export type TasksActionTypes =
  | FetchTasksRequestAction
  | FetchTasksSuccessAction
  | FetchTasksFailureAction;
