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

  DELETE_TASK_REQUEST = "DELETE_TASK_REQUEST",
  DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS",
  DELETE_TASK_FAILURE = "DELETE_TASK_FAILURE",

  ADD_TASK_REQUEST = "ADD_TASK_REQUEST",
  ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS",
  ADD_TASK_FAILURE = "ADD_TASK_FAILURE",
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

interface DeleteTaskRequestAction {
  type: ACTION_TYPES.DELETE_TASK_REQUEST;
}

interface DeleteTaskSuccessAction {
  type: ACTION_TYPES.DELETE_TASK_SUCCESS;
  payload: ITask["id"];
}

interface DeleteTaskFailureAction {
  type: ACTION_TYPES.DELETE_TASK_FAILURE;
  error: string;
}

interface AddTaskRequestAction {
  type: ACTION_TYPES.ADD_TASK_REQUEST;
}

interface AddTaskSuccessAction {
  type: ACTION_TYPES.ADD_TASK_SUCCESS;
  payload: ITask;
}

interface AddTaskFailureAction {
  type: ACTION_TYPES.ADD_TASK_FAILURE;
  error: string;
}

export type TasksActionTypes =
  | FetchTasksRequestAction
  | FetchTasksSuccessAction
  | FetchTasksFailureAction
  | DeleteTaskRequestAction
  | DeleteTaskSuccessAction
  | DeleteTaskFailureAction
  | AddTaskRequestAction
  | AddTaskSuccessAction
  | AddTaskFailureAction;
