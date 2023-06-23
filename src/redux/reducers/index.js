import { combineReducers } from "redux";
import appReducer from "./app";
import authReducer from "./auth";
import surveyReducer from "./survey";

const rootReducer = combineReducers({ appReducer, authReducer, surveyReducer });

export default rootReducer;
