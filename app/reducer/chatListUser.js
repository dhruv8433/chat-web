const initialStage = {
  users: [],
};
export const USER_ADD_CHATLIST = "adduser";

const chatListUser = (state = initialStage, action) => {
  switch (action.type) {
    case USER_ADD_CHATLIST:
      // user add another user with their details
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};

export default chatListUser;
