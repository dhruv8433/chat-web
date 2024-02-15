import React from "react";
import Routes from "../components/Routes";
import { Avatar, Divider } from "@mui/material";
import MyAvatar from "../common/MyAvatar";

const NavDrawer = () => {
  return (
    <div className="primary h-screen">
      <div className="flex p-2">
       <MyAvatar/>
        <div className="ml-4 text-white text-2xl">Hey, Partner</div>
      </div>
      <Divider />
      <div className="mt-4">
        <Routes />
      </div>
    </div>
  );
};

export default NavDrawer;
