"use client";

import { Avatar, Icon } from "@mui/material";

import React from "react";
import Routes from "./Routes";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="border border-black primary h-[90vh] w-[260px] p-2 rounded-2xl absolute">
      <motion.div
        className="flex items-center p-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* user image -- dynamic */}
        <Avatar
          src="https://wallpapers.com/images/hd/shin-chan-amazed-3ifhnlv2ww6kuwb9.jpg"
          alt="user image"
          className="bg-cover"
        />
        <h1 className="ml-4 text-2xl" style={{ fontWeight: 700 }}>
          Hi , Partner
        </h1>
      </motion.div>
      <Routes />
    </div>
  );
};

export default Navbar;
