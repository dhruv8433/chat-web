"use client";

import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { PiChats } from "react-icons/pi";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { WhatshotOutlined } from "@mui/icons-material";
import { Modal, useTheme } from "@mui/material";
import { Tab, Tabs } from "@mui/material";
import Link from "next/link";
import LogoutModel from "../model/LogoutModel";
import MyLink from "../common/MyLink";
import MyTab from "../common/MyTab";

const Routes = () => {
  const [value, setValue] = useState(0);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();

  return (
    <>
      <div>
        <Tabs
          orientation="vertical"
          value={value}
          sx={{
            "& .MuiTabs-indicator": {
              left: 0,
              right: "auto",
              borderWidth: "3px",
              borderRadius: "5px",
              backgroundColor: theme.palette.background.indicator,
              color: theme.palette.background.indicator,
            },
          }}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        >
          <Tab
            label="Explore"
            sx={{ color: theme.palette.background.text }}
            className="flex flex-row w-full items-center  justify-start rounded-2xl hover:bg-[#494c55]"
            icon={<WhatshotOutlined style={{ height: 20, width: 20 }} />}
          />

          {/* chats route */}
          <MyLink href={"/chats"}>
            <MyTab
              className="flex w-full items-center justify-start rounded-2xl hover:bg-[#494c55]"
              label="Chats"
              icon={
                <PiChats
                  style={{
                    height: 20,
                    width: 20,
                  }}
                />
              }
            />
          </MyLink>

          <Link href={"/calls"}>
            <Tab
              className="flex flex-row w-full items-center  justify-start rounded-2xl hover:bg-[#494c55]"
              sx={{ color: theme.palette.background.text }}
              label="Calls"
              icon={<IoCallOutline style={{ height: 20, width: 20 }} />}
            />
          </Link>

          <Link href={"/privacy-policies"}>
            <Tab
              className="flex flex-row w-full items-center  justify-start rounded-2xl hover:bg-[#494c55]"
              sx={{ color: theme.palette.background.text }}
              label="Privacy"
              icon={<HiOutlineLockClosed style={{ height: 20, width: 20 }} />}
            />
          </Link>

          {/* Settings Route */}
          <Link href={"/settings"}>
            <Tab
              className="flex flex-row w-full items-center  justify-start rounded-2xl hover:bg-[#494c55]"
              sx={{ color: theme.palette.background.text }}
              label="Settings"
              icon={<IoSettingsOutline style={{ height: 20, width: 20 }} />}
            />
          </Link>
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
      </div>

      {/* Logout Confirmation Dialog */}
      <Modal
        className="flex justify-center items-center"
        open={logoutDialogOpen}
        onClose={() => setLogoutDialogOpen(false)}
      >
        <LogoutModel setLogoutDialogOpen={setLogoutDialogOpen} />
      </Modal>
    </>
  );
};

export default Routes;
