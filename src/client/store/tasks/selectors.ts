import { IGlobalState } from "../types";

export const selectTasks = (state: IGlobalState) => state.tasks;
