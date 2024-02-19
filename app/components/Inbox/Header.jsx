import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { Box, Button, Tab, Tabs, useTheme } from "@mui/material";
import ChatList from "./ChatList";
import MyButton from "@/app/common/MyButton";
import MyBox from "@/app/common/MyBox";
import MyTab from "@/app/common/MyTab";

export default function Header() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (newValue) => {
    setTabValue(newValue);
  };

  const theme = useTheme();

  return (
    <MyBox isPrimary={true} className="rounded-2xl">
      <div className="flex p-2 justify-between items-center">
        <div className="flex">
          <h1
            className="text-2xl"
            style={{ color: theme.palette.background.text }}
          >
            Index
          </h1>
          <MyButton className="border ml-2 px-2 py-1 rounded">3 New</MyButton>
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
