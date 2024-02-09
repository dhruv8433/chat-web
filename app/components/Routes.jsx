import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { PiChats } from "react-icons/pi";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { WhatshotOutlined } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material"
import { Box, Tab, Tabs, styled } from "@mui/material";
import Link from "next/link";

const Routes = () => {
  const [value, setValue] = useState(0);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLogout = () => {
    // Perform logout action here
    // For example, redirect to the logout page or clear session
    // Then close the logout dialog
    setLogoutDialogOpen(false);
  };

  return (
    <>
      <Box>
        <Tabs
          orientation="vertical"
          value={value}
          sx={{
            "& .MuiTabs-indicator": {
              left: 0,
              right: "auto",
              borderWidth: "3px",
              borderRadius: "5px",
              backgroundColor: "white",
              color: "white",
            },
          }}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        >
          <Tab
            label="Explore"
            className="flex flex-row w-full items-center text-white justify-start"
            icon={<WhatshotOutlined style={{ height: 20, width: 20 }} />}
          />

          {/* chats route */}
          <Link href={"/chats"}>
            <Tab
              className="flex flex-row w-full items-center text-white justify-start"
              label="Chats"
              icon={<PiChats style={{ height: 20, width: 20 }} />}
            />
          </Link>

          <Tab
            className="flex flex-row items-center text-white justify-start"
            label="Chats"
            icon={<PiChats style={{ height: 20, width: 20 }} />}
          />
              
          <Tab
            className="flex flex-row w-full items-center text-white justify-start"
            label="Calls"
            icon={<IoCallOutline style={{ height: 20, width: 20 }} />}
          />
          <Tab
            className="flex flex-row w-full items-center text-white justify-start"
            label="Privacy"
            icon={<HiOutlineLockClosed style={{ height: 20, width: 20 }} />}
          />

          <Tab
            className="flex flex-row items-center text-white justify-start"
            label="Settings"
            icon={<IoSettingsOutline style={{ height: 20, width: 20 }} />}
          />

          {/* Settings Route */}
          <Link href={"/settings"}>
            <Tab
              className="flex flex-row w-full items-center text-white justify-start"
              label="Settings"
              icon={<IoSettingsOutline style={{ height: 20, width: 20 }} />}
            />
          </Link>
        </Tabs>
      </Box>

      <div className="absolute bottom-2 ">
        <div className="flex ml-3 h-10 items-center">
          <CiLogout style={{ height: 20, width: 20 }} />
          <Button
            className="ml-4 text-white"
            onClick={() => setLogoutDialogOpen(true)}
          >
            Logout
          </Button>
        </div>
      </div>

      {/* Logout Confirmation Dialog */}
      <Dialog
      sx={{borderRadius:20}}
        open={logoutDialogOpen}
        onClose={() => setLogoutDialogOpen(false)}
      >
        <DialogTitle className="secondary text">Logout</DialogTitle>
        <DialogContent className="secondary text">
          <p>Are you sure ,you want to logout?</p>
        </DialogContent>
        <DialogActions className="secondary">
          <Button className="button text-white" onClick={handleLogout}>
            Yes
          </Button>
          <Button
            className="button text-white"
            onClick={() => setLogoutDialogOpen(false)}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Routes;
