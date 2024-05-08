import { combineReducers } from "redux";
import tasks from "./tasks/reducers";
import theme from "./theme/reducers";

export default combineReducers({
  tasks,
  theme,
});
