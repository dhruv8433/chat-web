import { Avatar, Card, CardHeader, IconButton, useTheme } from "@mui/material";
import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import VideoCallRoundedIcon from "@mui/icons-material/VideoCallRounded";
import { MyTextAvatar } from "@/app/common/MyAvatar";
import Link from "next/link";

const ChattingTitle = () => {
  const theme = useTheme();
  return (
    <>
      <div className="flex p-4 justify-between">
        <div className="flex items-center">
          <div className="">
            <MyTextAvatar title={"R"} />
          </div>
          <div className="ml-2 text-start">
            <h1
              className="chat-name"
              style={{ color: theme.palette.background.text }}
            >
              #Partner
            </h1>
            <h1 style={{ color: theme.palette.background.text }}>Active</h1>
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
          <Link href={"/chats"}>
            <IconButton
              aria-label="close"
              className="secondary rounded-md text-white"
            >
              <CloseRoundedIcon fontSize="medium" />
            </IconButton>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ChattingTitle;
