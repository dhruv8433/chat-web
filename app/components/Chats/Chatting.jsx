import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import VideoCallRoundedIcon from "@mui/icons-material/VideoCallRounded";
import { SingleChatBody } from "./SingleChatBody";

const Chatting = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="">
            <Avatar className="bg-red-500" aria-label="recipe">
              R
            </Avatar>
          </div>
          <div className="ml-2 text-start">
            <h1 className="chat-name">#Partner</h1>
            <h1>Active</h1>
          </div>
        </div>
        <div className="flex justify-between space-x-4 mb-2">
          {/* video call icon */}
          <IconButton
            aria-label="video call"
            className="secondary rounded-md text-white"
          >
            <VideoCallRoundedIcon fontSize="medium" />
          </IconButton>
          {/* call icon */}
          <IconButton
            aria-label="call"
            className="secondary rounded-md text-white"
          >
            <CallRoundedIcon fontSize="medium" />
          </IconButton>
          {/* close icon */}
          <IconButton
            aria-label="close"
            className="secondary rounded-md text-white"
          >
            <CloseRoundedIcon fontSize="medium" />
          </IconButton>
        </div>
      </div>
      <SingleChatBody />
    </>
  );
};

export default Chatting;
