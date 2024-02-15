import React from "react";
import { Avatar } from "@mui/material";

const MyAvatar = ({ className, src }) => {
  return <Avatar src={src} className={`${className}`} alt="user profile" />;
};

export default MyAvatar;

export const MyTextAvatar = ({ title, className }) => {
  return (
    <Avatar alt="user" className={className}>
      {title}
    </Avatar>
  );
};
