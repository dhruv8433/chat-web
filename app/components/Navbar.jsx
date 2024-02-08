import { Avatar, Icon } from "@mui/material";

import React from "react";
import Routes from "./Routes";

const Navbar = () => {
  return (
    <div className="border border-black primary h-[90vh] p-2 w-auto rounded-2xl absolute">
      <div className="flex items-center p-4">
        {/* user image -- dynamic */}
        <Avatar
          src="https://wallpapers.com/images/hd/shin-chan-amazed-3ifhnlv2ww6kuwb9.jpg"
          alt="user image"
        />
        <h1 className="ml-4 text-2xl" style={{ fontWeight: 700 }}>
          Hi , Partner
        </h1>
      </div>
      <Routes />
    </div>
  );
};

export default Navbar;
