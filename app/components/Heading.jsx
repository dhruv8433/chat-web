import { NotificationsOutlined } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="h-16 primary w-full flex justify-between items-center px-5 rounded-xl">
      <h1 className="text-4xl ">{title}</h1>
      <div className="flex">
        <button className="button h-min w-max p-2 rounded m-auto mr-2">+ New Chat</button>
        <IconButton>
          <NotificationsOutlined sx={{ color: "white" }} />
        </IconButton>
        <div className="flex items-center p-4">
          {/* user image -- dynamic */}
          <Avatar
            src="https://wallpapers.com/images/hd/shin-chan-amazed-3ifhnlv2ww6kuwb9.jpg"
            alt="user image"
          />
          <h1 className="ml-4 text-2xl" style={{ fontWeight: 700 }}>
            Partner
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Heading;
