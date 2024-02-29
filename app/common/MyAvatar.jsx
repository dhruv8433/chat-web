import React from "react";
import { Avatar } from "@mui/material";

const MyAvatar = ({ className, src }) => {
  return <Avatar src={src} className={`${className}`} alt="user profile" />;
};

export default MyAvatar;

export const MyTextAvatar = ({ src, title, className }) => {
  return (
    <Avatar alt="user" src={src} className={className}>
      {title}
    </Avatar>
  );
};
