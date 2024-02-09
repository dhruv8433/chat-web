import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { Button, Tab, Tabs } from "@mui/material";

export default function Header() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Card className="primary rounded-2xl" sx={{ mb: 3 }}>
        <CardHeader
          title={
            <div className="flex items-center rounded-2xl">
              <h1 className="text">Inbox</h1>
              <Button
                variant="contained"
                className="bg-red-500 hover:bg-red-500 ml-4"
              >
                3 New
              </Button>
            </div>
          }
          action={
            <IconButton
              aria-label="settings"
              className="button rounded-md hover:button text-white"
            >
              <WidgetsOutlinedIcon />
            </IconButton>
          }
        />
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
      </Card>
    </>
  );
}
