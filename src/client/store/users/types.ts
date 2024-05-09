export interface IUser {
  id: number;
  name: string;
  email: string;
  age: number;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface IUserState {
  users: IUser[];
}

export enum ACTION_TYPES {
  FETCH_USERS = "FETCH_USERS",
}

interface SetUserAction {
  type: ACTION_TYPES.FETCH_USERS;
}

export type UserActionTypes = SetUserAction;
