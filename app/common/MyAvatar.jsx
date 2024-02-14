import React from "react";
import { Avatar } from "@mui/material";

const MyAvatar = ({ className }) => {
  return (
    <Avatar
      src="https://wallpapers.com/images/hd/shin-chan-amazed-3ifhnlv2ww6kuwb9.jpg"
      className={`${className}`}
      alt="user profile"
    />
  );
};

export default MyAvatar;

export const MyTextAvatar = ({ title, className }) => {
  return (
    <Avatar alt="user" className={className}>
      {title}
    </Avatar>
  );
};
