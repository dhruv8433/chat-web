'use client';
import { Avatar, Divider, useTheme } from "@mui/material";
import React from "react";
import PostCard from "./PostCard";
import { MyTextAvatar } from "@/app/common/MyAvatar";
import MyBox from "@/app/common/MyBox";
import { useSelector } from "react-redux";

const ProfileLeft = () => {
  const theme = useTheme()
  const textStyle = {
    color: theme.palette.background.text,
  };
  // const user = useSelector((state) => state.auth.authUser.data)
  return (
    <MyBox isPrimary={true} className="  border border-black min-h-[770px] rounded-2xl">
      {/* Avatar, following and posts info */}
      <div className="mt-4 flex justify-around" >
        <MyTextAvatar className='h-36 w-36' />
        <div className="flex flex-col justify-center text-center">
          <h1 style={textStyle}>1</h1>
          <h1 style={textStyle}>Posts</h1>
        </div>
        <div className="flex flex-col justify-center text-center">
          <h1 style={textStyle}>10</h1>
          <h1 style={textStyle}>Followers</h1>
        </div>
        <div className="flex flex-col justify-center text-center">
          <h1 style={textStyle}>10</h1>
          <h1 style={textStyle}>Following</h1>
        </div>
      </div>

      {/* user details and captions */}
      <div className="m-10 mt-2">
        <h1 className="chat-name text-2xl" style={textStyle}>Partner</h1>
        <p style={textStyle}>
          🚀 Begginer - Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ab, minus.
        </p>
        <p style={textStyle}>💻Coder - Lorem ipsum dolor sit amet consectetur</p>
        <p style={textStyle}>
          ✨New - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
          minus.
        </p>
        <p style={textStyle}>#something #developer #production-user</p>
      </div>

      <Divider />

      {/* user posts */}
      <div className="p-10" style={textStyle}>
        POSTS
        <PostCard />
      </div>
    </MyBox>
  );
};

export default ProfileLeft;
