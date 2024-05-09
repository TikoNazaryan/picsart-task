import { combineReducers } from "redux";
import tasks from "./tasks/reducers";
import theme from "./theme/reducers";
import users from "./users/reducers";

export default combineReducers({
  tasks,
  theme,
  users,
});
