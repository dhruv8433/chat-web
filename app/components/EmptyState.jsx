import React from "react";

const EmptyState = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center pb-2">
      <img
        src="/EmptyState2.png"
        alt="Empty State"
        height={"50%"}
        width={"50%"}
      />
      <h2 className="text-xl mt-4">No messages yet</h2>
      <p className="text-gray-600 mt-2">
        Start a conversation by selecting a contact on the left.
      </p>
      <br />
    </div>
  );
};

export default EmptyState;
