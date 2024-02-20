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
import MyTab from "../common/MyTab";
import MyText from "../common/MyText";
import MyIcon from "../common/MyIcon";
import MyLink from "../common/MyLink";


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
    const storedValue = localStorage.getItem('selectedTabs');
    console.log('storedValue:', storedValue);
    if (storedValue !== null) {
      setValue(parseInt(storedValue));
    } else {
      setValue(0);
    }
  }, []);


  const handleTabChange = (newValue) => {
    setValue(newValue);
    // Store the selected tab value in localStorage
    localStorage.setItem('selectedTabs', newValue);
  };

  const theme = useTheme();
  return (
    <>
      <MyBox isPrimary={true}
        sx={{ flexGrow: 1, background: theme.palette.background.body, display: 'flex' }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleTabChange} // Use handleTabChange instead of handleChange
          aria-label="Vertical tabs example"
          sx={{
            borderLeft: '4px solid #333', borderColor: theme.palette.primary.main, "& .MuiTabs-indicator": {
              left: 0,
              right: "auto",
              borderWidth: "3px",
              borderRadius: "5px",
              // backgroundColor: theme.palette.background.indicator,
              color: theme.palette.background.indicator,
            },
          }}
        >
          <MyLink href={"/explore"}>

            <MyTab
              label="Explore"
              className={`flex flex-row w-full items-center rounded-2xl hover:bg-[#494c55] ${value === 0 ? 'Mui-selected MuiTabs-indicator' : ''}`}
              icon={<WhatshotOutlined style={{ height: 20, width: 20 }} />} {...a11yProps(0)}
              onChange={() => handleTabChange(0)}
            />
          </MyLink>

          {/* chats route */}
          <MyLink href={"/chats"}>

            <MyTab
              className={`flex flex-row w-full items-center rounded-2xl hover:bg-[#494c55] ${value === 1 ? 'Mui-selected' : ''}`}
              label="Chats"
              icon={
                <PiChats
                  style={{
                    height: 20,
                    width: 20,
                  }}
                />
              }{...a11yProps(1)} onChange={() => handleTabChange(1)}

            />
          </MyLink>
          <MyLink href={"/calls"}>

            <MyTab
              className={`flex flex-row w-full items-center rounded-2xl hover:bg-[#494c55] ${value === 2 ? 'Mui-selected' : ''}`}
              label="Calls"
              icon={<IoCallOutline style={{ height: 20, width: 20 }} />}{...a11yProps(2)} onChange={() => handleTabChange(2)}

            />
          </MyLink>
          <MyLink href={"/privacy-policies"}>

            <MyTab
              className={`flex flex-row w-full items-center rounded-2xl hover:bg-[#494c55] ${value === 3 ? 'Mui-selected' : ''}`}
              label="Privacy"
              icon={<HiOutlineLockClosed style={{ height: 20, width: 20 }} />}{...a11yProps(3)} onChange={() => handleTabChange(3)}

            />
          </MyLink>

          {/* Settings Route */}
          <MyLink href={"/settings"}>

            <MyTab
              className={`flex flex-row w-full items-center rounded-2xl hover:bg-[#494c55] ${value === 4 ? 'Mui-selected' : ''}`}
              label="Settings"
              icon={<IoSettingsOutline style={{ height: 20, width: 20 }} />}{...a11yProps(4)} onChange={() => handleTabChange(4)}

            />

          </MyLink>
        </Tabs>

        <div className="absolute bottom-4 w-full">
          <div
            onClick={() => setLogoutDialogOpen(true)}
            className=" hover:cursor-pointer p-4 w-[94%] rounded-2xl hover:bg-[#494c55]"
          >
            <div className="flex flex-row w-full items-center  justify-start rounded-2xl hover:bg-[#494c55]">
              <MyIcon>
                <CiLogout style={{ height: 20, width: 20 }} />
              </MyIcon>
              <MyText className="ml-2">Logout</MyText>
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

