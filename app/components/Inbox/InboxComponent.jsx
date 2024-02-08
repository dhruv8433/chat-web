import React from "react";
import Header from "./Header";
import ChatList from "./ChatList";
export const AllChats = () => {
  return (
    <div className="primary rounded-2xl">
      <Header />
      <ChatList/>
    </div>
  );
};
