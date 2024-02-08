"use client";

import { Avatar, Box } from "@mui/material";

import React from "react";
import Routes from "./Routes";

const Navbar = () => {
  return (
    <Box
      className=" primary h-[90vh] p-2 rounded-2xl relative"
      sx={{ width: { xs: "100%", md: "100%" } }}
    >
      <div className="flex items-center p-4">
        {/* user image -- dynamic */}
        <Avatar
          src="https://wallpapers.com/images/hd/shin-chan-amazed-3ifhnlv2ww6kuwb9.jpg"
          alt="user image"
          className="bg-cover"
        />
        <h1 className="ml-4 text-2xl" style={{ fontWeight: 700 }}>
          Hi , Partner
        </h1>
      </div>
      <Routes />
    </Box>
  );
};

export default Navbar;
