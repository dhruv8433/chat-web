"use client";

import React, { useState, useEffect } from "react";
import { IoCallOutline } from "react-icons/io5";
import { PiChats } from "react-icons/pi";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { WhatshotOutlined } from "@mui/icons-material";
import { Modal, useTheme } from "@mui/material";
import { Tab, Tabs } from "@mui/material";
import LogoutModel from "../model/LogoutModel";
import MyBox from "../common/MyBox";
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
export default function Routes() {
  const [value, setValue] = useState(0);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    // Get the stored value from localStorage
    const storedValue = localStorage.getItem('selectedTab');
    if (storedValue !== null) {
      setValue(parseInt(storedValue));
    }
  }, []);
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    // Store the selected tab value in localStorage
    localStorage.setItem('selectedTab', newValue);
  };

  const theme = useTheme();
  return (
    <>
      <MyBox
        sx={{ flexGrow: 1, bgcolor: theme.palette.primary.main, display: 'flex' }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleTabChange} // Use handleTabChange instead of handleChange
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab
            label="Explore"
            className={`flex w-full items-center rounded-2xl hover:bg-[#494c55] ${value === 0 ? 'Mui-selected' : ''}`}
            icon={<WhatshotOutlined style={{ height: 20, width: 20 }} />} {...a11yProps(0)} href="#item-one"
          />

          {/* chats route */}
          <Tab
            className={`flex w-full items-center rounded-2xl hover:bg-[#494c55] ${value === 1 ? 'Mui-selected' : ''}`}
            label="Chats"
            icon={
              <PiChats
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            }{...a11yProps(1)} href="/chats"
          />

          <Tab
            className={`flex flex-row w-full items-center rounded-2xl hover:bg-[#494c55] ${value === 2 ? 'Mui-selected' : ''}`}
            label="Calls"
            icon={<IoCallOutline style={{ height: 20, width: 20 }} />}{...a11yProps(2)} href="/calls"
          />

          <Tab
            className={`flex flex-row w-full items-center rounded-2xl hover:bg-[#494c55] ${value === 3 ? 'Mui-selected' : ''}`}
            label="Privacy"
            icon={<HiOutlineLockClosed style={{ height: 20, width: 20 }} />}{...a11yProps(3)} href="/privacy-policies"
          />

          {/* Settings Route */}
          <Tab
            className={`flex flex-row w-full items-center rounded-2xl hover:bg-[#494c55] ${value === 4 ? 'Mui-selected' : ''}`}
            label="Settings"
            icon={<IoSettingsOutline style={{ height: 20, width: 20 }} />}{...a11yProps(4)} href="/settings"
          />
        </Tabs>
        <div className="absolute bottom-4 w-full">
          <div
            onClick={() => setLogoutDialogOpen(true)}
            className=" hover:cursor-pointer p-4 w-[94%] rounded-2xl hover:bg-[#494c55]"
          >
            <div className="flex flex-row w-full items-center  justify-start rounded-2xl hover:bg-[#494c55]">
              <CiLogout style={{ height: 20, width: 20 }} />
              <h1 className="ml-2">Logout</h1>
            </div>
          </div>
        </div>
      </MyBox >

      {/* Logout Confirmation Dialog */}
      < Modal
        className="flex justify-center items-center"
        open={logoutDialogOpen}
        onClose={() => setLogoutDialogOpen(false)
        }
      >
        <LogoutModel setLogoutDialogOpen={setLogoutDialogOpen} />
      </Modal >
    </>
  );
};

