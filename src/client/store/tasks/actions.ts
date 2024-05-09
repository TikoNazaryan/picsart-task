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

export const deleteTask = (id: ITask["id"]) => {
  return async (dispatch: Dispatch<TasksActionTypes>) => {
    dispatch({ type: ACTION_TYPES.DELETE_TASK_REQUEST });

    try {
      /*
        Here is how the request should look, but the JSON placeholder does not support the DELETE method.

        await axios.delete(`${API_HOST}/todos`, {
          data: { id },
        });
      */

      // Instead, I'll send a request to users so you can see the request in the network :)
      await axios.delete(`${API_HOST}posts/${id}`);

      dispatch({
        type: ACTION_TYPES.DELETE_TASK_SUCCESS,
        payload: id,
      });
    } catch (error: unknown | AxiosError) {
      dispatch({
        type: ACTION_TYPES.DELETE_TASK_FAILURE,
        error: axios.isAxiosError(error)
          ? error.message
          : "Something went wrong",
      });
    }
  };
};

export const addTask = (title: ITask["title"]) => {
  return async (dispatch: Dispatch<TasksActionTypes>) => {
    dispatch({ type: ACTION_TYPES.ADD_TASK_REQUEST });

    try {
      /*
        Here is how the request should look, but the JSON placeholder does not support the PUT method.

        await axios.post(`${API_HOST}/todos`, {
          {...data}
        });
      */

      // Instead, I'll send a request to posts so you can see the request in the network :)
      await axios.post(`${API_HOST}posts`, {
        title: "Barev",
      });

      // Usually, the ID will come from the backend.
      // However, for this example, I'll generate the ID and other useless data here.
      const newTask: ITask = {
        id: Math.random() * (1000000 - 10000) + 10000,
        title,
        userId: 0,
        completed: false,
      };

      dispatch({
        type: ACTION_TYPES.ADD_TASK_SUCCESS,
        payload: newTask,
      });
    } catch (error: unknown | AxiosError) {
      dispatch({
        type: ACTION_TYPES.ADD_TASK_FAILURE,
        error: axios.isAxiosError(error)
          ? error.message
          : "Something went wrong",
      });
    }
  };
};
