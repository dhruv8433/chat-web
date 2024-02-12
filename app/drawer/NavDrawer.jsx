import React from "react";
import Routes from "../components/Routes";
import { Avatar, Divider } from "@mui/material";

const NavDrawer = () => {
  return (
    <div className="primary h-screen">
      <div className="flex p-2">
        <Avatar src="https://wallpapers.com/images/hd/shin-chan-amazed-3ifhnlv2ww6kuwb9.jpg" />
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
