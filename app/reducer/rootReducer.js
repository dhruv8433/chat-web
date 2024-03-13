import { combineReducers } from "redux";
import authReducer from "./authenticate";
import chatListUser from "./chatListUser";
import ProfileBioReducer from "./ProfileBio";

export const rootReducer = combineReducers({
  auth: authReducer,
  chatUser: chatListUser,
  Bio: ProfileBioReducer,
});
