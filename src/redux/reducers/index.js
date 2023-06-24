import { combineReducers } from "redux";
import appReducer from "./app";
import authReducer from "./auth";
import surveyReducer from "./survey";
import userReducer from "./user";

const rootReducer = combineReducers({
  appReducer,
  authReducer,
  surveyReducer,
  userReducer,
});

export default rootReducer;
