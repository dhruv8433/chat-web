"use client"

import React from "react";
import Routes from "../components/Routes";
import { Divider } from "@mui/material";
import MyAvatar from "../common/MyAvatar";
import { useSelector } from "react-redux";

const NavDrawer = () => {
  const user = useSelector((state) => state.auth.authUser)
  return (
    <div className="primary h-screen">
      <div className="flex p-2">
        {/* user -- avatar */}
        <MyAvatar src={user.data.photoUrl}/>
        <div className="ml-4 text-white text-2xl">{user.data.displayName}</div>
      </div>
      <Divider />
      <div className="mt-4">
        {/* all pages -- routes */}
        <Routes />
      </div>
    </div>
  );
};

export default NavDrawer;
