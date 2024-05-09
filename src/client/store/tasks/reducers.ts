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

    case ACTION_TYPES.DELETE_TASK_REQUEST:
      return { ...state, error: null };
    case ACTION_TYPES.DELETE_TASK_SUCCESS:
      const { data } = state;
      let newData = null;
      if (data) newData = data.filter((task) => task.id !== action.payload);
      return { ...state, data: newData };
    case ACTION_TYPES.DELETE_TASK_FAILURE:
      return { ...state, error: action.error };

    case ACTION_TYPES.ADD_TASK_REQUEST:
      return { ...state, error: null };
    case ACTION_TYPES.ADD_TASK_SUCCESS:
      return {
        ...state,
        data: state.data ? [action.payload, ...state.data] : [action.payload],
      };
    case ACTION_TYPES.ADD_TASK_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default dataReducer;
