const initialStage = {
  user: [],
};
export const USER_ADD_CHATLIST = "useraddchatlist";

const chatListUser = (state = initialStage, action) => {
  switch (action.type) {
    case USER_ADD_CHATLIST:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default chatListUser;
