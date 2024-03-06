import React from "react";
import MyBox from "../common/MyBox";
import MyText from "../common/MyText";

// when user hit google sign up btn we open this model for some extra details
const UserNameModel = ({ data }) => {
  return (
    // TODO -> here we take username from user and check whether user exist in db or not..
    // TODO -> if user exist in db, than we simply login otherwise we register user with username that user provided and signup it
    <MyBox className="flex flex-col items-center justify-center p-4 rounded-2xl">
      <MyText>Hello, Welcome to our website</MyText>
    </MyBox>
  );
};

export default UserNameModel;
