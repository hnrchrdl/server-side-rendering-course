import { combineReducers } from "redux";
import usersReducer from "../reducers/usersReducer";
import authReducer from "./authReducer";

export default combineReducers({
  users: usersReducer,
  auth: authReducer
});
