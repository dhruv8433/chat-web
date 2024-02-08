import React from "react";
import Header from "./Header";
import "../../app/style.css";
import ChatList from "./ChatList";
export const AllChats = () => {
  return (
    <div className="my-primary">
      <Header />
      <ChatList/>
    </div>
  );
};
