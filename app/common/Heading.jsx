"use client";

import MyBox from "./MyBox";
import MyAvatar from "./MyAvatar";
import MyButton from "./MyButton";
import MyDrawer from "./MyDrawer";
import React, { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { useSelector } from "react-redux";
import NavDrawer from "../drawer/NavDrawer";
import LoginModel from "../model/LoginModel";
import AddUserModel from "../model/AddUserModel";
import { Box, IconButton, Modal, useTheme } from "@mui/material";
import { Add, MenuRounded, NotificationsOutlined } from "@mui/icons-material";

const Heading = ({ title, lightThemeApplied, DarkThemeApplied }) => {
  const user = useSelector((state) => state.auth.authUser);
  console.log(user);
  const [openModal, setOpenModal] = useState(false);
  const [addUserOpenModal, setAddUserOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

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

        {
          user ? (
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <MyButton
                myFunction={() => setAddUserOpenModal(true)}
                className="button h-min w-max p-2 rounded m-auto mr-2"
              >
                + Add
              </MyButton>
            </Box>
          ) : (<></>)
        }
        
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

        {user ? (
          <>
            <div className="flex items-center p-4">
              {/* user image -- dynamic */}

              <MyAvatar src={user.photoUrl} />

              {/* name only shown in md screen */}
              <Box display={{ xs: "none", md: "block" }}>
                <h1
                  className="ml-4 text-2xl"
                  style={{
                    fontWeight: 700,
                    color: theme.palette.background.text,
                  }}
                >
                  {user.displayName}
                </h1>
              </Box>
            </div>
          </>
        ) : (
          <MyButton
            title={"Login"}
            className="button h-min w-max p-2 rounded m-auto mr-2"
            myFunction={handleOpenModal}
          >
            Login
          </MyButton>
        )}
        {openModal && (
          <LoginModel open={openModal} onClose={handleCloseModal} />
        )}
      </div>

      <Modal
        open={addUserOpenModal}
        className="flex justify-center h-min mt-10"
        onClose={() => setAddUserOpenModal(false)}
      >
        <AddUserModel />
      </Modal>
    </MyBox>
  );
};

export default Heading;
