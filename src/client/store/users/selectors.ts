import { IGlobalState } from "../types";

export const selectUsers = (state: IGlobalState) => state.users;
