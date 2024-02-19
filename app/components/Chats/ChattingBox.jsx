import React from "react";
import Chatting from "./ChattingTitle";
import MyBox from "@/app/common/MyBox";
import EmptyChattingComponent from "@/app/emptystate/EmptyChattingComponent";
import { SingleChatBody } from "./SingleChatBody";

const ChattingBox = ({ id }) => {
  return (
    <MyBox className="rounded-2xl">
      {id ? (
        <MyBox isPrimary={true} className={"rounded-2xl min-h-[760px]"}>
          {/* heading -- user name and call options */}
          <Chatting />
          <MyBox className={"m-2"}>
            {/* actual chat body */}
            <SingleChatBody />
          </MyBox>
        </MyBox>
      ) : (
        // EMPTY STATE CONTAINER
        <EmptyChattingComponent />
      )}
    </MyBox>
  );
};

export default ChattingBox;
