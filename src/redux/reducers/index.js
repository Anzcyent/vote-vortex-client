import { combineReducers } from "redux";
import appReducer from "./app";
import authReducer from "./auth";

const rootReducer = combineReducers({ appReducer, authReducer });

export default rootReducer;
