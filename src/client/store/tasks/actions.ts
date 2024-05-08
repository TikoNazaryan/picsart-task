import { Dispatch } from "redux";
import { ACTION_TYPES, TasksActionTypes, ITask } from "./types";
import axios, { AxiosError } from "axios";
import { API_HOST } from "./../../../../config";

export const fetchTasks = () => {
  return async (dispatch: Dispatch<TasksActionTypes>) => {
    dispatch({ type: ACTION_TYPES.FETCH_TASKS_REQUEST });

    try {
      const response = await axios.get(`${API_HOST}/todos`);

      dispatch({
        type: ACTION_TYPES.FETCH_TASKS_SUCCESS,
        payload: response.data,
      });
    } catch (error: unknown | AxiosError) {
      dispatch({
        type: ACTION_TYPES.FETCH_TASKS_FAILURE,
        error: axios.isAxiosError(error)
          ? error.message
          : "Something went wrong",
      });
    }
  };
};
