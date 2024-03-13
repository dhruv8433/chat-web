const initialStage = {
  bio: "",
};
export const ADD_BIO = "addBio";
export const EDIT_BIO = "editBio";
export const REMOVE_BIO = "removeBio";

const ProfileBioReducer = (state = initialStage, action) => {
  switch (action.type) {
    case ADD_BIO:
      return {
        ...state,
        bio: action.payload,
      };
    case EDIT_BIO:
      return {
        ...state,
        bio: action.payload,
      };
    case REMOVE_BIO:
      return {
        ...state,
        bio: "",
      };
    default:
      return state;
  }
};

export default ProfileBioReducer;
