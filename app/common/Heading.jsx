"use client";

import { Add, MenuRounded, NotificationsOutlined } from "@mui/icons-material";
import { Avatar, Box, Drawer, Icon, IconButton, useTheme } from "@mui/material";
import React, { useState } from "react";
import NavDrawer from "../drawer/NavDrawer";
import ThemeSwitch from "./ThemeSwitch";
import MyButton from "./MyButton";
import MyBox from "./MyBox";
import MyDrawer from "./MyDrawer";

const Heading = ({ title, lightThemeApplied, DarkThemeApplied }) => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  return (
    <MyBox
      isPrimary={true}
      className="h-16 w-full flex justify-between items-center px-2 rounded-2xl"
      sx={{ xs: -1, md: "auto" }}
    >
      <div className="flex">
        {/* menu only visible in small devices */}
        <Box display={{ xs: "block", md: "none" }}>
          <IconButton onClick={() => setOpen(true)}>
            <MenuRounded className="text-white" />
          </IconButton>
        </Box>
        <h1
          className="text-4xl"
          style={{ color: theme.palette.background.text }}
        >
          {title}
        </h1>
      </div>

      {/* Nav - Drawer */}
      <MyDrawer open={open} setOpen={setOpen}>
        <Box width={200}>
          <NavDrawer />
        </Box>
      </MyDrawer>

      <div className="flex">
        {/* new chat button visible in large device else icon button here */}
        <Box display={{ xs: "none", md: "flex" }}>
          <MyButton
            title={"+ New Chat"}
            myFunction={""}
            className="button h-min w-max p-2 rounded m-auto mr-2"
          />
        </Box>

        {/* icon button for small screens */}
        <Box className="w-max" display={{ xs: "flex", md: "none" }}>
          <IconButton>
            <Add className="text-white" />
          </IconButton>
        </Box>

        {/*  Themes Button */}
        <ThemeSwitch
          DarkThemeApplied={DarkThemeApplied}
          lightThemeApplied={lightThemeApplied}
        />

        {/* notifications button */}
        <IconButton aria-label="notifications">
          <NotificationsOutlined />
        </IconButton>

        {/* DP */}
        <div className="flex items-center p-4">
          {/* user image -- dynamic */}
          <Avatar
            src="https://wallpapers.com/images/hd/shin-chan-amazed-3ifhnlv2ww6kuwb9.jpg"
            alt="user image"
          />

          {/* name only shown in md screen */}
          <Box display={{ xs: "none", md: "block" }}>
            <h1
              className="ml-4 text-2xl"
              style={{ fontWeight: 700, color: theme.palette.background.text }}
            >
              Partner
            </h1>
          </Box>
        </div>
      </div>
    </MyBox>
  );
};

export default Heading;
