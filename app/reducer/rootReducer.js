import { combineReducers } from "redux";
import authReducer from "./authenticate";
import chatListUser from "./chatListUser";

export const rootReducer = combineReducers({
  auth: authReducer,
  chatUser: chatListUser,
});
