import { ACTION_TYPES, TasksActionTypes, ITasksState } from "./types";

const initialState: ITasksState = {
  data: null,
  loading: false,
  error: null,
};

const dataReducer = (
  state = initialState,
  action: TasksActionTypes
): ITasksState => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_TASKS_REQUEST:
      return { ...state, loading: true, error: null };
    case ACTION_TYPES.FETCH_TASKS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case ACTION_TYPES.FETCH_TASKS_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default dataReducer;
