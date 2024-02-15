import { combineReducers } from "redux";
import authReducer from "./authenticate";

export const rootReducer = combineReducers({
  auth: authReducer,
});
