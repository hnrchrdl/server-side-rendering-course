import { combineReducers } from "redux";
import usersReducer from "../reducers/usersReducer";

export default combineReducers({
  users: usersReducer
});
