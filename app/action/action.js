import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from "../reducer/authenticate";
import { USER_ADD_CHATLIST } from "../reducer/chatListUser";

// auth action
export const loginUserSuccess = (userData) => ({
  type: LOGIN_USER_SUCCESS,
  payload: userData,
});

// if login faliure
export const loginUserFailure = () => ({
  type: LOGIN_USER_FAILURE,
});

// when user attempt logout
export const logoutuser = () => ({
  type: LOGOUT_USER,
});

// user add friends
export const addUser = (userData) => ({
  type: USER_ADD_CHATLIST,
  payload: userData,
});
