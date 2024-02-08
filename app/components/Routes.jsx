import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { PiChats } from "react-icons/pi";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { WhatshotOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Box, Tab, Tabs, styled } from "@mui/material";

const Routes = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Box sx={{ width: "100%" }}>
        <Tabs
          orientation="vertical"
          value={value}
          sx={{
            "& .MuiTabs-indicator": {
              left: 0,
              right: "auto",
              backgroundColor: "white",
            },
          }}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        >
          <Tab label="Explore" sx={{color:'white'}} icon={<WhatshotOutlined />} />
          <Tab label="Chats" icon={<PiChats />} />
          <Tab label="Calls" icon={<IoCallOutline />} />
          <Tab label="Privacy" icon={<HiOutlineLockClosed />} />
          <Tab label="Settings" icon={<IoSettingsOutline />} />
        </Tabs>
      </Box>

      <div className="absolute bottom-2 ">
        <div className="flex ml-3 h-10 items-center">
          <CiLogout style={{ height: 20, width: 20 }} />
          <h1 className="ml-4">Logout</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Routes;
