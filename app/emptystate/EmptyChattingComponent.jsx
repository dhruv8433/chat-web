import React from "react";
import MyText from "../common/MyText";
import MyBox from "../common/MyBox";

const EmptyChattingComponent = () => {
  return (
    <MyBox isPrimary={true} className="h-full rounded-2xl min-h-[760px] flex flex-col items-center justify-center pb-2">
      <img
        src="/EmptyState2.png"
        alt="Empty State"
        height={"50%"}
        width={"50%"}
      />
      <MyText className="text-xl mt-4">No messages yet</MyText>
      <MyText className="text-gray-600 mt-2">
        Start a conversation by selecting a contact on the left.
      </MyText>
      <br />
    </MyBox>
  );
};

export default EmptyChattingComponent;
