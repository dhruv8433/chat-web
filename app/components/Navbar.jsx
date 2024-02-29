"use client";

import React from "react";
import Routes from "./Routes";
import MyAvatar from "../common/MyAvatar";
import { useSelector } from "react-redux";
import MyBox from "../common/MyBox";
import MyText from "../common/MyText";

const Navbar = ({ toggleTheme }) => {
  const user = useSelector((state) => state.auth.authUser);
  return (
    <MyBox
      isPrimary={true}
      className="h-[90vh] p-2 rounded-2xl relative"
      sx={{ width: { xs: "100%", md: "100%" } }}
    >
      <div className="flex items-center p-4">
        {/* user image -- dynamic */}
        <MyAvatar className="bg-cover" src={user.photoUrl} />
        <MyText className="ml-4 text-2xl" style={{ fontWeight: 700 }}>
          {user.displayName}
        </MyText>
      </div>
      <Routes toggleTheme={toggleTheme} />
    </MyBox>
  );
};

export default Navbar;
