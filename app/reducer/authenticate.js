const initialStage = {
  authUser: [],
  authenticated: false,
  msg: null,
};
export const LOGIN_USER_SUCCESS = "loginSuccess";
export const LOGIN_USER_FAILURE = "loginFail";
export const LOGOUT_USER = "logout";

const authReducer = (state = initialStage, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        authUser: action.payload,
        authenticated: true,
      };
    case LOGIN_USER_FAILURE:
      return {
        authuser: [],
        authenticated: false,
      };
    case LOGOUT_USER:
      return {
        authUser: [],
        authenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
