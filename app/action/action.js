import { ADD_BIO, EDIT_BIO, REMOVE_BIO } from "../reducer/ProfileBio";
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

// profile add bio
export const addBio = (bio) => ({
  type: ADD_BIO,
  payload: bio,
});

// edit bio
export const editBio = (bio) => ({
  type: EDIT_BIO,
  payload: bio,
});

// remove Bio
export const removeBio = () => ({
  type: REMOVE_BIO
});