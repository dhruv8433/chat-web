"use client";

import React from "react";
import { useState } from "react";
import ChatList from "./ChatList";
import MyBox from "@/app/common/MyBox";
import MyTab from "@/app/common/MyTab";
import MyButton from "@/app/common/MyButton";
import { Tabs, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import MyText from "@/app/common/MyText";

export default function Header() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (newValue) => {
    setTabValue(newValue);
  };

  return (
    // TODO -> Make it dynamic
    <MyBox isPrimary={true} className="rounded-2xl min-h-[100%]">
      <div className="flex p-2 justify-between items-center">
        <div className="flex">
          <MyText className="text-2xl">Index</MyText>
          <MyButton
            isPrimaryButton={false}
            customBgColor={"red"}
            className="rounded-lg ml-2 px-2 py-1"
          >
            3 New
          </MyButton>
        </div>
        <div className="">
          <IconButton>
            <WidgetsOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <MyBox>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          className="w-full flex justify-evenly"
          variant="fullWidth"
        >
          <MyTab className="font text-white" label="Primary" />
          <MyTab className="font text-white" label="Groups" />
          <MyTab className="font text-white" label="Archive" />
        </Tabs>
      </MyBox>

      <ChatList />
    </MyBox>
  );
}
