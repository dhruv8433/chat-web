import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { PiChats } from "react-icons/pi";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { WhatshotOutlined } from "@mui/icons-material";
import { Box, Tab, Tabs, styled } from "@mui/material";
import Link from "next/link";

const Routes = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            className="flex flex-row w-full items-center text-white justify-start"
            label="Calls"
            icon={<IoCallOutline style={{ height: 20, width: 20 }} />}
          />
          <Tab
            className="flex flex-row w-full items-center text-white justify-start"
            label="Privacy"
            icon={<HiOutlineLockClosed style={{ height: 20, width: 20 }} />}
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
          <h1 className="ml-4">Logout</h1>
        </div>
      </div>
    </>
  );
};

export default Routes;
