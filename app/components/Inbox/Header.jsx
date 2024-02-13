import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { Box, Button, Tab, Tabs, useTheme } from "@mui/material";
import ChatList from "./ChatList";

export default function Header() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (newValue) => {
    setTabValue(newValue);
  };

  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.primary.main} className="rounded-2xl">
      <div className="flex p-2 justify-between items-center">
        <div className="flex">
          <h1 className="text-2xl">Index</h1>
          <button className="border ml-2 border-red-400 bg-red-500 px-2 py-1 rounded">
            3 New
          </button>
        </div>
        <div className="">
          <IconButton>
            <WidgetsOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        className="secondary w-full"
        variant="fullWidth"
      >
        <Tab className="font text-white" label="Primary" />
        <Tab className="font text-white" label="Groups" />
        <Tab className="font text-white" label="Archive" />
      </Tabs>

      <ChatList />
    </Box>
  );
}
