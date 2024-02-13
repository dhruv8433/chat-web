const initialStage = {
    authUser: [],
    message: false,
  };
  export const LOGIN_USER_SUCCESS = "loginSuccess";
  export const LOGIN_USER_FAILURE = "loginFail";
  export const LOGOUT_USER="logout"
  const authReducer = (state = initialStage, action) => {
    switch (action.type) {
      case LOGIN_USER_SUCCESS:
        return {
          ...state,
          authUser: action.payload,
          message: true,
        };
      case "LOGIN_USER_FAILURE":
        return {
          authuser: [],
          message: false,
        };
      case LOGOUT_USER:
        return {
          authUser: [],
          message: false,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;