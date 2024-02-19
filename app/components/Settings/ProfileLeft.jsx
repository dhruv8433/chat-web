import { Avatar, Divider } from "@mui/material";
import React from "react";
import PostCard from "./PostCard";
import { MyTextAvatar } from "@/app/common/MyAvatar";

const ProfileLeft = () => {
  return (
    <div className="border border-black min-h-[770px] rounded-2xl">
      {/* Avatar, following and posts info */}
      <div className="mt-4 flex justify-around">
        <MyTextAvatar className='h-36 w-36'/>
        <div className="flex flex-col justify-center text-center">
          <h1>1</h1>
          <h1>Posts</h1>
        </div>
        <div className="flex flex-col justify-center text-center">
          <h1>10</h1>
          <h1>Followers</h1>
        </div>
        <div className="flex flex-col justify-center text-center">
          <h1>10</h1>
          <h1>Following</h1>
        </div>
      </div>

      {/* user details and captions */}
      <div className="m-10 mt-2">
        <h1 className="chat-name text-2xl">Partner</h1>
        <p>
          🚀 Begginer - Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ab, minus.
        </p>
        <p>💻Coder - Lorem ipsum dolor sit amet consectetur</p>
        <p>
          ✨New - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
          minus.
        </p>
        <p>#something #developer #production-user</p>
      </div>

      <Divider />

      {/* user posts */}
      <div className="p-10">
        POSTS
        <PostCard />
      </div>
    </div>
  );
};

export default ProfileLeft;
