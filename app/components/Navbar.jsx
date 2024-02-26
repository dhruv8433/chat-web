"use client";

import { Avatar, Box, useTheme } from "@mui/material";

import React from "react";
import Routes from "./Routes";
import MyAvatar from "../common/MyAvatar";
import { useSelector } from "react-redux";

const Navbar = ({ toggleTheme }) => {
  const user = useSelector((state) => state.auth.authUser);
  const theme = useTheme();
  return (
    <Box
      bgcolor={theme.palette.primary.main}
      className="h-[90vh] p-2 rounded-2xl relative"
      sx={{ width: { xs: "100%", md: "100%" } }}
    >
      <div className="flex items-center p-4">
        {/* user image -- dynamic */}
        <MyAvatar className="bg-cover" src={user.photoUrl}/>
        <h1
          className="ml-4 text-2xl"
          style={{ fontWeight: 700, color: theme.palette.background.text }}
        >
          {user.displayName}
        </h1>
      </div>
      <Routes toggleTheme={toggleTheme} />
    </Box>
  );
};

export default Navbar;
