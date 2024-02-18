import React from "react";
import Chatting from "./ChattingTitle";
import MyBox from "@/app/common/MyBox";
import EmptyChattingComponent from "@/app/emptystate/EmptyChattingComponent";

const ChattingBox = ({ id }) => {
  return (
    <MyBox className="rounded-2xl">{id ? <Chatting /> : <EmptyChattingComponent />}</MyBox>
  );
};

export default ChattingBox;