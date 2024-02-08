import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { PiChats } from "react-icons/pi";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { WhatshotOutlined } from "@mui/icons-material";

const Routes = () => {
  return (
    <>
      <div className="tabs">
        <div className="flex ml-3 h-10 items-center">
          <WhatshotOutlined style={{ height: 20, width: 20 }} />
          <h1 className="ml-4">Explore</h1>
        </div>
        <div className="flex ml-3 h-10 items-center">
          <PiChats style={{ height: 20, width: 20 }} />
          <h1 className="ml-4">Chats</h1>
        </div>
        <div className="flex ml-3 h-10 items-center">
          <IoCallOutline style={{ height: 20, width: 20 }} />
          <h1 className="ml-4">Calls</h1>
        </div>
        <div className="flex ml-3 h-10 items-center">
          <HiOutlineLockClosed style={{ height: 20, width: 20 }} />
          <h1 className="ml-4">Privacy</h1>
        </div>
        <div className="flex ml-3 h-10 items-center">
          <IoSettingsOutline style={{ height: 20, width: 20 }} />
          <h1 className="ml-4">Settings</h1>
        </div>
      </div>
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
